const { app, BrowserWindow, shell } = require("electron");
const path = require("path");
const { ipcMain } = require('electron');
const fs = require('fs')


let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    icon: path.join(__dirname, '../react/src/images/busy_bites_logo.png'),
    webPreferences: {
      nodeIntegration: false, 
      contextIsolation: true, 
      enableRemoteModule: false, 
      sandbox: true, 
      webSecurity: true, 
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // const isDev = process.env.NODE_ENV !== "development";
  const isDev = false;

  // Load React app during development
  if (isDev) {
    mainWindow.loadURL("http://localhost:5173");
  } else {
    console.log(path.join(__dirname, "../react/dist/index.html"));
    mainWindow.loadFile(path.join(__dirname, "../react/dist/index.html"));
  }

  // Open tabs in default browser
  mainWindow.webContents.on("will-navigate", (event, url) => {
    if (url.startsWith("http")) {
      event.preventDefault();
      shell.openExternal(url);
    }
    else {
      return { action: "deny" };
    }
  });

  // Clear .env file on app close
  mainWindow.on("closed", () => {
    const envPath = path.join(app.getPath('userData'), '.env');
    try {
      if (fs.existsSync(envPath)) {
        fs.unlinkSync(envPath);
      }
      } catch (err) {
        console.error("Error deleting .env file:", err);
      }

    mainWindow = null;
  });
});

app.on("window-all-closed", () => {

  if (process.platform !== "darwin") app.quit();
});

// IPC to set the enviroment variables
ipcMain.on('save-env-data', (event, data) => {
  const envPath = path.join(app.getPath('userData'), '.env');
  console.log("Saving .env to:", envPath);
  let content = '';
  for (const [key, value] of Object.entries(data)) {
    content += `${key}="${value}"\n`;
  }

  fs.writeFile(envPath, content, { flag: 'w' }, (err) => {
    if (err) {
      console.error('Failed to write .env file:', err);
    } else {
      console.log('.env updated successfully!');
    }
  }); 
});

ipcMain.handle('read-env-data', async () => {
    try {
      const envPath = path.join(app.getPath('userData'), '.env');
      console.log("Reading .env from:", envPath);
      const envContents = await fs.promises.readFile(envPath, 'utf8');
      const parsedEnv = Object.fromEntries(
      envContents.split('\n')
        .filter(line => line && !line.startsWith('#'))
        .map(line => line.split('='))
      );

      // Return the data to renderer
      return { success: true, data: parsedEnv };
    } catch (error) {
      console.error('Error reading .env:', error);
      return { success: false, error: error.message };
    }
});

// IPC to open links in default browser
ipcMain.on('external-link', (event, url) => {
  shell.openExternal(url);
})