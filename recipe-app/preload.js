const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('key', {
    saveEnv: (data) => {
        ipcRenderer.send('save-env-data', data);
    },
});
contextBridge.exposeInMainWorld('openExternal', {
    link: (url) => {
        ipcRenderer.send('external-link', url);
    },
});

