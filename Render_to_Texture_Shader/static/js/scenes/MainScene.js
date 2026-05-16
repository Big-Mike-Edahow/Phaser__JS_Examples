// MainScene.js

import HueRotate from '../imports/FilterHueRotate.js';

export default class MainScene extends Phaser.Scene {
    constructor() {
        super('main-scene');
    }

    preload() {
        this.load.setBaseURL('static/');
        this.load.image('volcano', 'images/rick_and_morty.png');
        this.load.image('hotdog', 'images/hotdog.png');
    }

    create() {
        let volcano = this.add.image(400, 300, 'volcano');
        volcano.setDisplaySize(this.sys.canvas.width, this.sys.canvas.height);
        let hotdog = this.add.image(400, 340, 'hotdog');
        hotdog.setScrollFactor(0);

        this.cameras.main.filters.external.add(new HueRotate.Controller(this.cameras.main));
        this.cameras.main.setZoom(1);
        const cursors = this.input.keyboard.createCursorKeys();

        const controlConfig = {
            camera: this.cameras.main,
            left: cursors.left,
            right: cursors.right,
            up: cursors.up,
            down: cursors.down,
            acceleration: 0.06,
            drag: 0.0005,
            maxSpeed: 1.0
        };

        this.controls = new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig);
    }

    upload() {
        this.controls.update(delta);
    }
}
