// main.js

function main() {
    const config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        pixelArt: true,
        parent: 'game-canvas',
        zoom: .85,
        scene: [Flood],
        title: 'Flood Fill',
        version: '1.0',
    };

    const game = new Phaser.Game(config);
}

main();
