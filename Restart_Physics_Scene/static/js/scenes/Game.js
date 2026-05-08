// Game.js

export default class Game extends Phaser.Scene {
    constructor() {
        super({ key: 'game' });
        window.GAME = this;

        this.controls;
        this.track;
        this.text;
    }

    create() {
        this.physics.world.setBounds(0, 0, 800 * 2, 510 * 2);
        const spriteBounds = Phaser.Geom.Rectangle.Inflate(Phaser.Geom.Rectangle.Clone(this.physics.world.bounds), -100, -100);

        //  Create loads of random sprites.
        const anims = ['diamond', 'prism', 'ruby', 'square'];

        for (let i = 0; i < 50; i++) {
            const pos = Phaser.Geom.Rectangle.Random(spriteBounds);

            const block = this.physics.add.sprite(pos.x, pos.y, 'gems');
            block.setVelocity(Phaser.Math.Between(200, 400), Phaser.Math.Between(200, 400));
            block.setBounce(1).setCollideWorldBounds(true);

            if (Math.random() > 0.5) {
                block.body.velocity.x *= -1;
            }
            else {
                block.body.velocity.y *= -1;
            }

            block.play(Phaser.Math.RND.pick(anims));

            if (i === 0) {
                this.track = block;
            }
        }

        const cursors = this.input.keyboard.createCursorKeys();

        const controlConfig = {
            camera: this.cameras.main,
            left: cursors.left,
            right: cursors.right,
            up: cursors.up,
            down: cursors.down,
            zoomIn: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q),
            zoomOut: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E),
            acceleration: 0.06,
            drag: 0.0005,
            maxSpeed: 1.0
        };

        this.controls = new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig);

        this.add.text(0, 0, 'Use Cursors to scroll camera.\nClick to Quit', { font: '18px Courier', fill: '#00ff00' }).setScrollFactor(0);
        this.text = this.add.text(400, 0, '', { font: '16px Courier', fill: '#00ff00' });

        this.input.once('pointerup', function () {
            this.scene.start('gameover');
        }, this);

    }

    update(time, delta) {
        this.controls.update(delta);

        this.text.setText([
            `x: ${this.track.x}`,
            `y: ${this.track.y}`
        ]);
    }
}
