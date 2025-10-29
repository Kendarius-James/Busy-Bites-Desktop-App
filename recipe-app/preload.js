const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('key', {
    saveEnv: (data) => {
        ipcRenderer.send('save-env-data', data);
    },
    readEnv: (data) => ipcRenderer.invoke('read-env-data', data)
});
contextBridge.exposeInMainWorld('openExternal', {
    link: (url) => {
        ipcRenderer.send('external-link', url);
    },
});

