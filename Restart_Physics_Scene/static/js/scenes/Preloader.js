// Preloader.js

export default class Preloader extends Phaser.Scene {
    constructor() {
        super({ key: 'preloader' });
    }

    preload() {
        this.load.setBaseURL('static');
        this.load.atlas('gems', 'images/gems.png', 'data/gems.json');
        this.load.image('buttonBG', 'images/button-bg.png');
        this.load.image('buttonText', 'images/button-text.png');
        this.load.image('ayu', 'images/ayu.png');
    }

    create() {
        this.anims.create({ key: 'diamond', frames: this.anims.generateFrameNames('gems', { prefix: 'diamond_', end: 15, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: 'prism', frames: this.anims.generateFrameNames('gems', { prefix: 'prism_', end: 6, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: 'ruby', frames: this.anims.generateFrameNames('gems', { prefix: 'ruby_', end: 6, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: 'square', frames: this.anims.generateFrameNames('gems', { prefix: 'square_', end: 14, zeroPad: 4 }), repeat: -1 });

        this.scene.start('mainmenu');
    }
}
