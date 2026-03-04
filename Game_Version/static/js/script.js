// script.js

class Example extends Phaser.Scene {
    preload() {
        this.load.setBaseURL("static");
        this.load.image("pic", "images/baal-loader.png");
    }

    create() {
        this.add.image(320, 210, "pic").setScale(0.65);
        const text = this.add.text(80, 435, "", { font: "16px Courier", fill: "#ffffff" });
        text.setText([
            `Game Title: ${game.config.gameTitle}`,
            `Version: ${game.config.gameVersion}`
        ]);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: "game-canvas",
    width: 640,
    height: 480,
    scene: Example,
    title: "Shock and Awesome",
    version: "1.2b"
};

const game = new Phaser.Game(config);

