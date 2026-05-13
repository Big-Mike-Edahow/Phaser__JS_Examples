// MainScene.js

export default class MainScene extends Phaser.Scene {
    preload() {
        this.load.setBaseURL('static');
        this.load.image('bg', 'images/darkstone.png');
        this.load.image('flare', 'images/white_flare.png');
        this.load.image('fox', 'images/fox_card.png');
        this.load.image('slug', 'images/slug_card.png');
    }

    create() {
        this.add.image(400, 300, 'bg');
        const card1 = this.add.image(225, this.cameras.main.height / 2, 'fox').setInteractive();
        const card2 = this.add.image(575, this.cameras.main.height / 2, 'slug').setInteractive();
        const emitZone1 = { type: 'edge', source: card1.getBounds(), quantity: 42 };
        const emitZone2 = { type: 'edge', source: card2.getBounds(), quantity: 42 };

        const emitter = this.add.particles(0, 0, 'flare', {
            speed: 24,
            lifespan: 1500,
            quantity: 5,
            scale: { start: 0.4, end: 0 },
            advance: 2000,
            emitZone: [emitZone1, emitZone2]
        });

        card1.on('pointerover', () => {
            emitter.setEmitZone(0);
            emitter.fastForward(2000);
        });

        card2.on('pointerover', () => {
            emitter.setEmitZone(1);
            emitter.fastForward(2000);
        });
    }
}
