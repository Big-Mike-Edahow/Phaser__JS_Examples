// script.js

class OnStartEvent extends Phaser.Scene {
    constructor() {
        super();
        this.isRunning = false;
    }

    preload() {
        this.load.setBaseURL('/');
        this.load.atlas('knight', 'static/images/game/knight.png', 'data/knight.json');
        this.load.image('bg', 'static/images/game/clouds.png');
        this.load.spritesheet('tiles', 'static/images/game/fantasy-tiles.png', { frameWidth: 64, frameHeight: 64 });
    }

    create() {
        //  Background and floor.
        this.bg = this.add.tileSprite(0, 16, 640, 460, 'bg').setOrigin(0);
        this.ground = this.add.tileSprite(0, 400, 640, 64, 'tiles', 1).setOrigin(0);

        // Instructions.
        this.add.text(320, 6, 'Click to start running animation.', { color: '#fff', fontSize: '20px' }).setOrigin(0.5, 0);

        //  Animations.
        const idleConfig = {
            key: 'idle',
            frames: this.anims.generateFrameNames('knight', { prefix: 'idle/frame', start: 0, end: 5, zeroPad: 4 }),
            frameRate: 14,
            repeat: -1
        };

        this.anims.create(idleConfig);

        const runConfig = {
            key: 'run',
            frames: this.anims.generateFrameNames('knight', { prefix: 'run/frame', start: 0, end: 7, zeroPad: 4 }),
            frameRate: 12,
            repeat: -1
        };

        this.anims.create(runConfig);

        const lancelot = this.add.sprite(320, 400, 'knight');

        lancelot.setOrigin(0.5, 1);
        lancelot.setScale(6);
        lancelot.play('idle');

        //  Event handler for when the animation completes on our sprite.
        lancelot.on(Phaser.Animations.Events.ANIMATION_START, function () {

            this.isRunning = true;

        }, this);

        //  And a click handler to stop the animation.
        this.input.once('pointerdown', function () {

            lancelot.play('run');

        });
    }

    update() {
        if (this.isRunning) {
            this.bg.tilePositionX += 4;
            this.ground.tilePositionX += 8;
        }
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'game-canvas',
    width: 640,
    height: 460,
    backgroundColor: '#026bc6',
    pixelArt: true,
    scene: [OnStartEvent],
    title: "On Start Event",
    version: "1.0",
};

const game = new Phaser.Game(config);
