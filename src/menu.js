const { CON, DEF } = require("./defcon");
const { Store } = require("./store");
const { Windows } = require("./windows");

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
                    label: 'Plugin Settings',
                    click: Windows.openPluginSettings
                },
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