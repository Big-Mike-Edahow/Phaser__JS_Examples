// main.js

function main() {
    const gameConfig = {
        type: Phaser.AUTO,
        parent: 'game-canvas',
        width: 800,
        height: '95%',
        scene: [sceneConfigA, sceneConfigB],
        title: 'Swapping Scenes',
        version: '1.0',
    };

    const game = new Phaser.Game(gameConfig);
}

main();
