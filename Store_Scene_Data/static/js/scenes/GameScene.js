// GameScene.js

export default class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: "game-scene" });
    }
    create() {
        //  Store player stats.
        this.data.set('lives', 3);
        this.data.set('level', 5);
        this.data.set('score', 2000);

        // Create player sprite
        const player = this.add.sprite(400, 150, 'knight').setDisplaySize(320, 240).setOrigin(0.5, 0.5);

        // Get and display player name.
        let name = this.registry.get('playerName');
        let nameText = this.add.text(400, 300, `Name: ${name}`, {
            fontSize: '48px',
            fill: '#0000ff'
        });
        nameText.setOrigin(0.5, 0);

        // Get and display player stats.
        let statsText = this.add.text(400, 370, '', { font: '32px Courier', fill: '#ff0000' });
        statsText.setText([
            'Level: ' + this.data.get('level'),
            'Lives: ' + this.data.get('lives'),
            'Score: ' + this.data.get('score')
        ]);
        statsText.setOrigin(0.5, 0);
    }
}
