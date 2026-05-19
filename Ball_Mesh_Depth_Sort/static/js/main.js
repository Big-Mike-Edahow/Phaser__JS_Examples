// main.js

import GameScene from "./scenes/GameScene.js";

function main() {
    const config = {
        type: Phaser.AUTO,
        width: 800,
        height: '95%',
        parent: 'game-canvas',
        scene: [GameScene],
        title: 'Ball Mesh Depth Sort',
        version: '1.0',
    };

    const game = new Phaser.Game(config);
}

main();
