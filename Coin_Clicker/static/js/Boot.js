// Boot.js

export class Boot extends Phaser.Scene {
    constructor() {
        super('Boot');
    }

    preload() {
        this.load.setBaseURL('static/');
        this.load.image("preloader", "images/preloader.png");
    }

    create() {
        //  A global value to store the highscore in.
        this.registry.set('highscore', 0);

        this.scene.start('Preloader');
    }
}
