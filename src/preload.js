const { ipcRenderer, contextBridge } = require('electron');
const { CON } = require('./defcon');
// https://www.electronjs.org/docs/latest/api/ipc-renderer
// https://www.electronjs.org/docs/latest/api/ipc-main

const api = {}

api[CON.getStore] = (key) => ipcRenderer.invoke(CON.getStore, key)
api[CON.setStore] = (key, val) => ipcRenderer.send(CON.setStore, key, val)

contextBridge.exposeInMainWorld("api", api);
