try {
    require('electron-reloader')(module)
  } catch (_) {}
const {app, BrowserWindow, ipcMain, Menu} = require('electron')
const path = require('path')
const { MenuTemplate } = require('./src/menu')
const { loadIPCs } = require('./src/ipc')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 848,
        minWidth: 848,
        height: 480,
        minHeight: 480,
        useContentSize: true,
        webPreferences: {
            preload: path.join(__dirname, 'src', 'preload.js'),
            nodeIntegration: true,
            enableRemoteModule: true
        }
    })

    const menu = Menu.buildFromTemplate(MenuTemplate([]))
    win.setMenu(menu)
    win.loadFile(path.join(__dirname, 'src', 'app.html'))
}

app.whenReady().then(() => {
    loadIPCs()
    createWindow()
})
