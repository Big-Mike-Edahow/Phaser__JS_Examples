// main.js

import Boot from './Boot.js';
import Preloader from './Preloader.js';
import MainMenu from './MainMenu.js';
import MainGame from './Game.js';

const config = {
    type: Phaser.AUTO,
    width: 640,
    height: 450,
    backgroundColor: '#008eb0',
    parent: 'game-canvas',
    scene: [Boot, Preloader, MainMenu, MainGame]
};

let game = new Phaser.Game(config);

