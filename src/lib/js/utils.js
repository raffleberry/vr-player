const fileName = (src) => {
    return src.split(/(\\|\/)/g).pop();
};

function changeSrc(src) {
    localStorage.setItem("src", src);
    localStorage.setItem("title", fileName(src));
    location.reload();
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
