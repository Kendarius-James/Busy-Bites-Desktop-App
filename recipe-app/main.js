const { app, BrowserWindow, shell } = require("electron");
const path = require("path");
const { ipcMain } = require('electron');
const fs = require('fs')


let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    icon: path.join(__dirname, 'images', 'busy_bites_logo.png'),
    webPreferences: {
      nodeIntegration: false, // Security best practice
      contextIsolation: true, // Security best practice
      enableRemoteModule: false, // ❌ Disables remote module
      sandbox: true, // ✅ Runs renderer in secure mode
      webSecurity: true, // ✅ Prevents XSS & local file access
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  const isDev = process.env.NODE_ENV !== "development";

  // Load React app during development
  if (isDev) {
    mainWindow.loadURL("http://localhost:3000");
  } else {
    mainWindow.loadURL(`file://${path.join(__dirname, "build", "index.html")}`);
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

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

// IPC to set the enviroment variables
ipcMain.on('save-env-data', (event, data) => {
  const envPath = path.join(__dirname, '.env');
  console.log(data);
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
})

ipcMain.on('external-link', (event, url) => {
  shell.openExternal(url);
})