// Preloader.js

export default class Preloader extends Phaser.Scene {
    constructor() {
        super({ key: 'preloader' });
    }

    preload() {
        this.load.setBaseURL('static');
        this.load.image('knight', 'images/knight.jpg');
    }

    create() {
        this.registry.set('playerName', 'Sir Knight');

        this.scene.start('game-scene');
    }
}
