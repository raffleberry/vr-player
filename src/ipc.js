const { ipcMain } = require('electron');
const { Store } = require('./store');
const { DEF, CON } = require('./defcon');

const loadIPCs = () => {
    ipcMain.handle(CON.getStore, async (e, key) => {
        return Store.get(key)
    })
    ipcMain.on(CON.setStore, async (e, key, val) => {
        Store.set(key, val)
    })
}

module.exports = { loadIPCs }