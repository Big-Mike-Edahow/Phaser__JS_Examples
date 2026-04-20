// main.js

import { Boot } from "./Boot.js";
import { ClickerGame } from "./ClickerGame.js";
import { GameOver } from "./GameOver.js";
import { MainMenu } from "./MainMenu.js";
import { Preloader } from "./Preloader.js";

const config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    parent: "game-canvas",
    backgroundColor: "#028af8",
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 400 }
        }
    },
    scene: [
        Boot,
        Preloader,
        MainMenu,
        ClickerGame,
        GameOver
    ],
    title: "Coin Clicker",
    version: "1.0",
};

export default new Phaser.Game(config);
