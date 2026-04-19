// main.js

function main() {
    const config = {
        type: Phaser.AUTO,
        parent: 'game-canvas',
        width: 640,
        height: 480,
        pixelArt: true,
        scene: [StreetFighterII],
        title: 'Sprite Animation Events',
        version: "1.0",
    };

    const game = new Phaser.Game(config);
}

main();
