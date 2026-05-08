// MainScene.js

export default class MainScene extends Phaser.Scene {
    preload() {
        this.load.setBaseURL('static');
        this.load.spritesheet('dude', 'images/dude.png', { frameWidth: 32, frameHeight: 48 });
        this.load.atlas('tiles', 'images/platformer.png', 'data/platformer.json');
        this.load.image('bg', 'images/background.png');
    }
    create() {
        this.add.image(400, 255, 'bg').setDisplaySize(800, 510);

        const water = this.physics.add.staticGroup();
        for (let i = 0; i < 6; i++) {
            water.create(i * 128, 490, 'tiles', '17');
        }

        const ground = this.physics.add.staticGroup();
        ground.create(64, 170, 'tiles', '3');
        ground.create(64, 550 - 256, 'tiles', '6');
        ground.create(64, 550 - 128, 'tiles', '6');
        ground.create(64, 550, 'tiles', '6');
        ground.create(736, 470, 'tiles', '1');
        this.add.image(720, 375, 'tiles', 'sign2');

        const platform1 = this.physics.add.image(600, 135, 'tiles', 'platform1').setScale(0.6).setDirectControl().setImmovable();
        const platform2 = this.physics.add.image(700, 270, 'tiles', 'platform1').setScale(0.6).setDirectControl().setImmovable();
        const platform3 = this.physics.add.image(200, 400, 'tiles', 'platform1').setScale(0.6).setDirectControl().setImmovable();

        this.physics.world.setBounds(0, -400, 800, 910);
        this.player = this.physics.add.sprite(64, 32, 'dude')
        .setScale(1.5)
        .setBounce(0.2)
        .setCollideWorldBounds(true);

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [{ key: 'dude', frame: 4 }],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        this.tweens.add({
            targets: platform1,
            x: 200,
            duration: 4000,
            yoyo: true,
            repeat: -1
        });

        this.tweens.add({
            targets: platform2,
            x: 250,
            duration: 3000,
            yoyo: true,
            repeat: -1
        });

        this.tweens.add({
            targets: platform3,
            x: 600,
            y: 430,
            duration: 2500,
            yoyo: true,
            repeat: -1
        });

        this.cursors = this.input.keyboard.createCursorKeys();

        this.physics.add.collider(this.player, ground);
        this.physics.add.collider(this.player, [platform1, platform2, platform3]);
        this.physics.add.collider(this.player, water, () => this.player.setPosition(64, 64));
    }

    update() {
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-160);

            this.player.anims.play('left', true);
        }
        else if (this.cursors.right.isDown) {
            this.player.setVelocityX(160);

            this.player.anims.play('right', true);
        }
        else {
            this.player.setVelocityX(0);

            this.player.anims.play('turn');
        }

        if (this.cursors.space.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-330);
        }
    }
}
