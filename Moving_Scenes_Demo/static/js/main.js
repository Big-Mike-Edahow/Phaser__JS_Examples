// main.js

import Controller from "./scenes/Controller.js";
import SceneA from "./scenes/SceneA.js";
import SceneB from "./scenes/SceneB.js";
import SceneC from "./scenes/SceneC.js";
import SceneD from "./scenes/SceneD.js";
import SceneE from "./scenes/SceneE.js";
import SceneF from "./scenes/SceneF.js";

function main() {
    const config = {
        type: Phaser.AUTO,
        width: 1024,
        height: '95%',
        parent: 'game-canvas',
        backgroundColor: '#000000',
        scene: [Controller, SceneA, SceneB, SceneC, SceneD, SceneE, SceneF],
        title: 'Moving Scenes Demo',
        version: '1.0',
    };

    const game = new Phaser.Game(config);
}

main();
