// SubGame.js

export default class SubGame extends Phaser.Scene {
    constructor() {
        super({ key: "sub-scene" });
    }

    create() {
        this.bg = this.add.tileSprite(0, 0, 800, 600, 'bg').setOrigin(0);
        this.add.image(400, 255, 'space', this.registry.get('planet')).setScale(0.35);
        this.add.text(10, 10, 'Click to return.', { font: '20px Courier', fill: '#00ff00' });

        //  Click to click the sub scene..
        this.input.once('pointerdown', () => {
            //  Stop this Scene and wake the world up.
            this.scene.stop();
            this.scene.wake('main-scene');
        });
    }
}
