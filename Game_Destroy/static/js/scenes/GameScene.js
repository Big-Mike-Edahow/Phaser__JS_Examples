// GameScene.js

export default class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: "game-scene" });
    }

    preload() {
        this.load.setBaseURL('static');
        this.load.image('taikodrummaster', 'images/taikodrummaster.jpg');
        this.load.image('sukasuka-chtholly', 'images/sukasuka-chtholly.png');
    }

    create() {
        this.add.image(400, 300, 'taikodrummaster');
        let chtholly = this.add.image(400, 500, 'sukasuka-chtholly');

        this.tweens.add({
            targets: chtholly,
            y: Math.random() * 600,
            x: Math.random() * 200,
            ease: 'Sine.easeInOut',
            duration: 2000,
            yoyo: true,
            repeat: -1
        });

        this.input.on('pointerdown', function () {
            this.sys.game.destroy(true);

            document.addEventListener('mousedown', function newGame() {
                document.removeEventListener('mousedown', newGame);
                window.location.reload();
            });

        }, this);
    }
}
