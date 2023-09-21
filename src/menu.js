const { CON, DEF } = require("./defaults");
const { Store } = require("./store");

const MenuTemplate = (recentFiles = []) => {

    const plugin = Store.get(CON.plugin, DEF.plugin)

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
            label: 'Plugins',
            submenu: [
                {
                    label: CON.pluginVjsPanorama,
                    type: 'radio',
                    click: () => Store.set(CON.plugin, CON.pluginVjsPanorama),
                    checked: plugin == CON.pluginVjsPanorama
                },
                {
                    label: CON.pluginVjsVr,
                    type: 'radio',
                    click: () => Store.set(CON.plugin, CON.pluginVjsVr),
                    checked: plugin == CON.pluginVjsVr
                }
            ]
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