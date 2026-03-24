// GameScene.js

export default class GameScene extends Phaser.Scene {
    constructor() {
        super('game-scene');
    }

    preload() {
        this.load.setBaseURL('static');
        this.load.image('image', 'images/mushroom2.png');
        // this.shakeTime = 0;
        this.objects = {};
    }

    create() {
        this.objects.camera = this.cameras.add(0, 0, 400, 300);
        this.objects.image0 = this.add.image(400, 300, 'image');
        this.objects.image1 = this.add.image(400, 300, 'image');
        this.objects.image2 = this.add.image(400, 300, 'image');
        this.objects.image3 = this.add.image(400, 300, 'image');
        this.objects.move = 0.0;
        this.objects.camera.zoom = 0.5;
        this.objects.camera.scrollX = 200;
        this.objects.camera.scrollY = 150;
        this.objects.camera.setBackgroundColor('rgba(231, 108, 208, 0.5)');
    }

    update() {
        this.objects.image0.x = 400 + Math.cos(this.objects.move) * 300;
        this.objects.image0.y = 300 + Math.sin(this.objects.move * 2) * 200;
        this.objects.image1.x = 400 + Math.sin(this.objects.move * 2) * 300;
        this.objects.image1.y = 300 + Math.cos(this.objects.move) * 200;
        this.objects.image2.y = 300 + Math.cos(this.objects.move * 2) * 400;
        this.objects.image3.x = 400 + Math.sin(this.objects.move * 2) * 400;
        this.objects.move += 0.02;
    }
}
