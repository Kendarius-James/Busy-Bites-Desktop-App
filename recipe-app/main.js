const { app, BrowserWindow } = require("electron");
const path = require("path");

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: false, // Security best practice
      contextIsolation: true, // Security best practice
    },
  });

  const isDev = process.env.NODE_ENV !== "development";

  // Load React app during development
  if (isDev) {
    mainWindow.loadURL("http://localhost:3000");
  } else {
    mainWindow.loadURL(`file://${path.join(__dirname, "build", "index.html")}`);
  }

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
