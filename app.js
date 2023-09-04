const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')

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
            contextIsolation: false,
            enableRemoteModule: true
        }
    })

    win.loadFile(path.join(__dirname, 'src', 'index.html'))
}

app.whenReady().then(() => {
    ipcMain.on('get-file-data', function (event) {
        event.returnValue = process.argv;
    });
    createWindow()
})
