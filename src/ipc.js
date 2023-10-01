const { ipcMain, ipcRenderer } = require('electron');
const { Store } = require('./store');
const { DEF, CON } = require('./defcon');
const { Windows } = require('./windows');

const loadIPCs = () => {
    ipcMain.handle(CON.getStore, async (e, key) => {
        return Store.get(key)
    })
    ipcMain.on(CON.setStore, async (e, key, val) => {
        Store.set(key, val)
    })
    ipcMain.on(CON.applySettings, async(e, v) => {
        Windows.mainWindow.webContents.send(CON.applySettings, v);
    })
}

module.exports = { loadIPCs }