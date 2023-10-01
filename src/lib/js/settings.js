const settings = {
    set: (v) => {
        document.querySelector('#projection').value = v['projection'] ?? '180_LR';
        document.querySelector('#sphere-detail').value = v['sphereDetail'] ?? 32;
        document.querySelector('#scroll-to-zoom').checked = v['scrollToZoom'] ?? true;
        document.querySelector('#resume').checked = v['resume'] ?? true;
        document.querySelector('#autoplay').checked = v['autoplay'] ?? true;
        document.querySelector('#debug').checked = v['debug'] ?? false;
    },
    get: () => {
        const v = {};
        v['projection'] = document.querySelector('#projection').value;
        v['sphereDetail'] = document.querySelector('#sphere-detail').value;
        v['scrollToZoom'] = document.querySelector('#scroll-to-zoom').checked;
        v['resume'] = document.querySelector('#resume').checked;
        v['autoplay'] = document.querySelector('#autoplay').checked;
        v['debug'] = document.querySelector('#debug').checked;
        return v;
    }
}

/*
IPC-CHANNEL = []
[CON.setStore]Renderer Settings ->   preload.js(Isolated) vv->     [CON.setStore]MainProcess -> saves data to disk
                                          |
                                   [CON.applySettings]      ->     [CON.applySettings]Windows.mainWindow
                                                                                 |
    CALLBACK Renderer Main <-    CALLBACK[CON.applySettings]  <-      [CON.applySettings]
*/
const load = async()=>{
    const s = await window.api[CON.getStore](CON.settings);
    settings.set(s);
    document.querySelector('form').addEventListener('change', (e) => {
        const v = settings.get()
        window.api[CON.setStore](CON.settings, v)
    })

}

load();