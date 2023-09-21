const MenuTemplate = (appName, recentFiles = []) => {
  var recent = recentFiles;
    const template = [
        {
            label: 'File',
            submenu: [
                {
                    label: 'Recent',
                    submenu: recent,
                },
                {
                    role: 'Quit'
                }
            ]
        },
        {
            label: 'Plugins'
        },
        {
            label: 'Settings',
            submenu: [
                {
                    label: 'Toggle Dev Tools',
                    role: 'toggleDevTools'
                }
            ]
        }
    ]
    
    return template;
}

module.exports = { MenuTemplate }