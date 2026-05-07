// main.js

import MainScene from "./scenes/MainScene.js"

function main() {
    const config = {
        type: Phaser.AUTO,
        width: 800,
        height: 510,
        parent: 'game-canvas',
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 500 },
                debug: false,
            }
        },
        scene: [MainScene],
        title: "Direct Control Platform",
        version: "1.0",
    };

    const game = new Phaser.Game(config);
}

main();
