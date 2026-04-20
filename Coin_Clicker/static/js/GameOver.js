// GameOver.js

export class GameOver extends Phaser.Scene {
    constructor() {
        super('GameOver');
    }

    create() {
        //  Get the current highscore from the registry.
        const score = this.registry.get('highscore');

        const textStyle = { fontFamily: 'Arial Black', fontSize: 56, color: '#ffffff', stroke: '#000000', strokeThickness: 8 };

        const background = this.add.image(320, 240, 'background');
        background.setDisplaySize(640, 480);

        this.add.text(320, 200, `Game Over\n\nHigh Score: ${score}`, textStyle).setAlign('center').setOrigin(0.5);

        this.input.once('pointerdown', () => {
            this.scene.start('MainMenu');
        });
    }
}
