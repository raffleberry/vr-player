const { ipcRenderer, contextBridge } = require('electron');
const { CON } = require('./defcon');
// https://www.electronjs.org/docs/latest/api/ipc-renderer
// https://www.electronjs.org/docs/latest/api/ipc-main

const api = {}

api[CON.getStore] = (key) => ipcRenderer.invoke(CON.getStore, key)
api[CON.setStore] = (key, val) => {
    ipcRenderer.send(CON.setStore, key, val)
    if (key === CON.settings) {
        // web-> main
        ipcRenderer.send(CON.applySettings, val)
    }
}

// main -> web
api[CON.applySettings] = (cb) => ipcRenderer.on(CON.applySettings, (e, v) => cb(v))

contextBridge.exposeInMainWorld("api", api);
