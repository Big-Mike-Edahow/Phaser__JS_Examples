// main.js

import GameScene from './GameScene.js';

function main() {
    const config = {
        type: Phaser.AUTO,
        parent: 'game-canvas',
        scene: GameScene,
        width: 640,
        height: 480,
        title: "Background Color",
        version: "1.0"
    };

    const game = new Phaser.Game(config);
}

main();
