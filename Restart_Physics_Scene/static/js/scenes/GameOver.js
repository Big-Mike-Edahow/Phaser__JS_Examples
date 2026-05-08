// GameOver.js

export default class GameOver extends Phaser.Scene {
    constructor() {
        super({ key: 'gameover' });
        window.OVER = this;
    }

    create() {
        this.add.sprite(400, 255, 'ayu');
        this.add.text(400, 475, 'Game Over - Click to restart', { font: '20px Courier', fill: '#00ff00' }).setOrigin(0.5, 0.5);

        this.input.once('pointerup', function (event) {
            this.scene.start('mainmenu');
        }, this);
    }
}
