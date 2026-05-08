// main.js

import Preloader from "./scenes/Preloader.js";
import MainMenu from "./scenes/MainMenu.js";
import Game from "./scenes/Game.js";
import GameOver from "./scenes/GameOver.js";

function main() {
    const config = {
        type: Phaser.AUTO,
        width: 800,
        height: 510,
        backgroundColor: '#000000',
        parent: 'game-canvas',
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 100 },
                debug: true
            }
        },
        scene: [Preloader, MainMenu, Game, GameOver],
        title: "Restart Physics Scene",
        version: "1.0",
    };

    const game = new Phaser.Game(config);
}

main();
