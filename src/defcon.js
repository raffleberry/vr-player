// DEFAULTS
const DEF = {
    plugin: 'videojs-panorama',
}

// CONSTANTS
const CON = {
    plugin: 'plugin',
    getStore: 'getStore',
    currentFile: 'currentFile',
    setStore: 'setStore',
    pluginVjsPanorama: 'videojs-panorama',
    pluginVjsVr: 'videojs-vr'
}

// for use by renderer
if (!module) {
    var module = {
        exports: 'meh'
    }
}

module.exports = { DEF, CON }