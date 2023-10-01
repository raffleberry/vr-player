const { BrowserWindow } = require("electron")
const path = require('path')

const openPluginSettings = () => {
    if (Windows.settingsWindow) {
        Windows.settingsWindow.focus()
        return
    }
    Windows.settingsWindow = new BrowserWindow({
        height: 500,
        width: 800,
        resizable: false,
        minimizable: false,
        fullscreenable: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            enableRemoteModule: true,
        }
    })
    Windows.settingsWindow.on('closed', () => {
        Windows.settingsWindow = null
    })
    Windows.settingsWindow.webContents.openDevTools()
    Windows.settingsWindow.setMenu(null)
    Windows.settingsWindow.loadFile(path.join(__dirname, 'pluginSettings.html'))
}

const Windows = {
    settingsWindow: null,
    openPluginSettings,
    mainWindow: null
}

module.exports = { Windows }