// main.js

import MainScene from "./scenes/MainScene.js";
import HueRotate from './imports/FilterHueRotate.js';

function main() {
    const config = {
        type: Phaser.AUTO,
        parent: 'game-canvas',
        width: 800,
        height: "95%",
        backgroundColor: '#000000',
        scene: [MainScene],
        renderNodes: {
            FilterHueRotate: HueRotate.Filter,
        },
        title: "Render to Texture Shader",
        version: "1.0",
    };

    const game = new Phaser.Game(config);
}

main();
