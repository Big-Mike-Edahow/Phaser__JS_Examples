// main.js

import Preloader from "./scenes/Preloader.js";
import MainScene from "./scenes/MainScene.js";
import SubScene from "./scenes/SubScene.js";

function main() {
    const config = {
        type: Phaser.AUTO,
        width: 800,
        height: 510,
        parent: 'game-canvas',
        physics: {
            default: "arcade",
            arcade: {
                debug: false,
                gravity: { y: 0 }
            }
        },
        scene: [Preloader, MainScene, SubScene],
        title: "Sub Scene",
        version: "1.0",
    };

    const game = new Phaser.Game(config);
}

main();
