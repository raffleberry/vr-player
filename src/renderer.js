// player.vr();
// var player = videojs('my-player');
// var button = videojs.getComponent('Button');

(function (window, videojs) {
    var src =  localStorage.getItem('src');
    document.querySelector('source').src = src ? src : '';

    var player = window.player = videojs('my-player', {
        fill: true,
        responsive: true,
    });
    player.mediainfo = player.mediainfo || {};
    player.mediainfo.projection = '360';

    // AUTO is the default and looks at mediainfo
    var vr = window.vr = player.vr({ projection: 'AUTO', debug: true, forceCardboard: false });
}(window, window.videojs));


function changeSrc(src) {
    localStorage.setItem('src', src);
    location.reload();
}

function addControl3d() {
    var MenuButton = videojs.getComponent('MenuButton');
    var MenuItem = videojs.getComponent('MenuItem');

    var CustomMenuButton = videojs.extend(
        MenuButton,
        {
            createItems: function () {
                return this.options().options.map(function (i) {
                    var item = new MenuItem(this.player, { label: i.name });
                    item.handleClick = function () {
                        player.mediainfo.projection = i.projection;
                    };
                    return item;
                });
            }
        }
    );

    videojs.registerComponent('3dControls', CustomMenuButton);

    player.controlBar.addChild('3dControls', {
        title: '3D',
        options: [
            { name: '180', projection: '180' },
            { name: '180_LR', projection: '180_LR' },
            { name: '180_MONO', projection: '180_MONO' },
            { name: '360', projection: '360' },
            { name: '360_CUBE', projection: '360_CUBE' },
            { name: 'NONE', projection: 'NONE' },
            { name: 'AUTO', projection: 'AUTO' },
            { name: '360_LR', projection: '360_LR' },
            { name: '360_TB', projection: '360_TB' },
            { name: 'EAC', projection: 'EAC' },
            { name: 'EAC_LR', projection: 'EAC_LR' },

        ]
    });
}