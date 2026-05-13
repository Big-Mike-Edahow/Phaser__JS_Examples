// main.js

import MainScene from "./scenes/MainScene.js";

function main() {
    const config = {
        type: Phaser.AUTO,
        width: 800,
        height: "95%",
        backgroundColor: "#000",
        parent: "game-canvas",
        scene: [MainScene],
        title: "Set Emitter Zone",
        version: "1.0",
    };

    const game = new Phaser.Game(config);
}

main();
