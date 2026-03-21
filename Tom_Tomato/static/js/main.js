// main.js

import Preloader from './Preloader.js';
import Play from './Play.js';
import Menu from './Menu.js';
import UI from './UI.js';

const config = {
    title: "Tom Tomato",
    type: Phaser.AUTO,
    parent: "game-canvas",
    width: 640,
    height: 360,
    pixelArt: true,
    physics: {
        default: "arcade",
        "arcade": {
            gravity: {
                y: 2000
            }
        }
    },
    scene: [
        Preloader,
        UI,
        Play,
        Menu
    ]
};

new Phaser.Game(config);

