const fileName = (src) => {
    if (!src) return '<unable to show>';
    return src.split(/(\\|\/)/g).pop();
};



function loadVideo(src) {
    this.player.src(src);
    if (src) {
        const title = fileName(src);
        if (title) {
            document.title = 'VR Player - ' + title;
        }
        return true
    }
    return false;
}

const addScrollToZoom = () => {
    window.addEventListener("wheel", function (event) {
        var x = player.vr().camera;
        if (event.deltaY < 0) {
            if (x.fov <= 30) return;
            x.fov -= 5;
            x.updateProjectionMatrix();
        } else if (event.deltaY > 0) {
            if (x.fov >= 100) return;
            x.fov += 5;
            x.updateProjectionMatrix();
        }
    });
};
