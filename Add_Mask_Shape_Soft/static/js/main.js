// main.js

import MainScene from "./scenes/MainScene.js";

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: "95%",
    parent: "game-canvas",
    scene: [MainScene],
    title: "Add Mask Shape Soft",
    version: "1.0",
};

const game = new Phaser.Game(config);
