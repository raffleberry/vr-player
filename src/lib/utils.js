function changeSrc(src) {
    localStorage.setItem('src', src);
    var fileName = require('path').parse(src).base;
    localStorage.setItem('title', fileName);
    location.reload();
}