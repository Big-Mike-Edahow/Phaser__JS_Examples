// script.js

class SuperMario extends Phaser.Scene {
    preload() {
        this.load.setBaseURL("static");
        this.load.tilemapTiledJSON("map", "js/super-mario.json");
        this.load.image("tiles", "images/game/super-mario.png");
    }

    create() {
        const map = this.make.tilemap({ key: 'map' });
        const tileset = map.addTilesetImage('SuperMarioBros-World1-1', 'tiles');
        const layer = map.createLayer('World1', tileset, 0, 15);
        layer.setScale(1.75);
        layer.width = 400;
    }
}
const config = {
    type: Phaser.AUTO,
    width: 1100,
    height: 450,
    parent: "game-canvas",
    backgroundColor: "#90EE90",
    pixelArt: true,
    scene: SuperMario
};

const game = new Phaser.Game(config);
