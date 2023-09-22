const { BrowserWindow } = require("electron")
const path = require('path')

const openPluginSettings = () => {
    if (Windows.settingsWindow) {
        Windows.settingsWindow.focus()
        return
    }
    Windows.settingsWindow = new BrowserWindow({
        height: 500,
        width: 300,
        resizable: false,
        minimizable: false,
        fullscreenable: false,
    })
    Windows.settingsWindow.on('closed', () => {
        Windows.settingsWindow = null
    })
    Windows.settingsWindow.setMenu(null)
    Windows.settingsWindow.loadFile(path.join(__dirname, 'pluginSettings.html'))
}

const Windows = {
    settingsWindow: null,
    openPluginSettings
}

module.exports = { Windows }