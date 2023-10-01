// CONSTANTS
const CON = {
    plugin: 'plugin',
    getStore: 'getStore',
    currentFile: 'currentFile',
    setStore: 'setStore',
    pluginVjsVr: 'videojs-vr',
}

// DEFAULTS
const DEF = {
    plugin: CON.pluginVjsVr,
}

// for use by renderer
if (!module) {
    var module = {
        exports: 'meh'
    }
}

module.exports = { DEF, CON }