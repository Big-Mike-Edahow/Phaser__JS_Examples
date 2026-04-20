// MainMenu.js

export class MainMenu extends Phaser.Scene {
    constructor() {
        super('MainMenu');
    }

    create() {
        //  Get the current highscore from the registry.
        const score = this.registry.get('highscore');
        const textStyle = { fontFamily: 'Arial', fontSize: 22, color: '#fff', stroke: '#000', strokeThickness: 8 };

        // Background.
        const background = this.add.image(320, 240, 'background');
        background.setDisplaySize(640, 480);

        // Logo.
        const logo = this.add.image(320, -270, 'logo');
        logo.setScale(.70);
        this.tweens.add({
            targets: logo,
            y: 160,
            duration: 1000,
            ease: 'Bounce'
        });

        // High Score text.
        this.add.text(10, 10, `High Score: ${score}`, textStyle);

        // Instructions.
        const instructions = [
            "How many coins can you",
            "click in 10 seconds?",
            "",
            "Click to Start!"
        ]
        this.add.text(320, 325, instructions, textStyle).setAlign('center').setOrigin(0.5);

        this.input.once('pointerdown', () => {
            this.scene.start('ClickerGame');
        });
    }
}
