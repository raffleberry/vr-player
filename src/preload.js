window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) 
            element.innerText = text
        
    }

    for (const dependency of['chrome', 'node', 'electron']) {
        replaceText(`${dependency}-version`, process.versions[dependency])
    }
})

function changeSrc(src) {
    localStorage.setItem('src', src);
    var fileName = require('path').parse(src).base;
    localStorage.setItem('title', fileName);
    location.reload();
}

const { ipcRenderer } = require('electron');

const fileData = ipcRenderer.sendSync('get-file-data');

if (fileData?.length >= 2) {
    if (fileData[1] !== '.')
        changeSrc(fileData[1]);
}
