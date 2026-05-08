// MainMenu.js

export default class MainMenu extends Phaser.Scene {
    constructor() {
        super({ key: 'mainmenu' });
        window.MENU = this;
    }

    create() {
        const bg = this.add.image(0, 0, 'buttonBG');
        const text = this.add.image(0, 0, 'buttonText');

        this.add.container(400, 255, [bg, text]);

        bg.setInteractive();
        bg.once('pointerup', function () {
            this.scene.start('game');
        }, this);
    }
}
