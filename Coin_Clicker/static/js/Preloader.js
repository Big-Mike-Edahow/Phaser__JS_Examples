// Preloader.js

export class Preloader extends Phaser.Scene {
    constructor() {
        super("Preloader");
    }

    init() {
        //  We loaded this image in our Boot Scene, so we can display it here.
        this.add.image(320, 240, "preloader");

        //  A simple progress bar. This is the outline of the bar.
        this.add.rectangle(320, 240, 468, 32).setStrokeStyle(1, 0xffffff);

        //  The progress bar itself. It will increase in size from the left based on the % of progress.
        const bar = this.add.rectangle(320 - 230, 240, 4, 28, 0xffffff);

        //  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar.
        this.load.on("progress", (progress) => {
            //  Update the progress bar (our bar is 464px wide, so 100% = 464px)
            bar.width = 4 + (460 * progress);
        });
    }

    preload() {
        // Preload assets.
        this.load.setBaseURL('static');
        this.load.image("background", "images/background.png");
        this.load.image("logo", "images/cc-logo.png");
        this.load.atlas('coin', 'images/coin.png', 'data/coin.json');
    }

    create() {
        // Animations.
        this.anims.create({
            key: "rotate",
            frames: this.anims.generateFrameNames("coin", { prefix: "coin_", start: 1, end: 7, zeroPad: 2 }),
            frameRate: 16,
            repeat: -1
        });

        this.anims.create({
            key: "vanish",
            frames: this.anims.generateFrameNames("coin", { prefix: "vanish_", start: 1, end: 4 }),
            frameRate: 10
        });

        // Scene transition to fade between the two scenes.
        this.scene.transition({
            target: 'MainMenu',
            duration: 1000,
            moveBelow: true,
            onUpdate: (progress) => {
                this.cameras.main.setAlpha(1 - progress);
            }
        });
    }
}
