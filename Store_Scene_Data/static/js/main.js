// main.js

import Preloader from "./scenes/Preloader.js";
import GameScene from "./scenes/GameScene.js";

function main() {
    const config = {
        type: Phaser.AUTO,
        width: 800,
        height: 510,
        backgroundColor: '#fff',
        parent: 'game-canvas',
        scene: [Preloader, GameScene],
        title: 'Store Scene Data',
        version: '1.0',
    };

    const game = new Phaser.Game(config);
}

main();
