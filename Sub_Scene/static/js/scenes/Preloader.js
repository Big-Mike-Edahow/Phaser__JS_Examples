// Preloader.js

export default class Preloader extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'preloader' });
    }

    preload ()
    {
        this.load.setBaseURL('static');
        this.load.image('bg', 'images/nebula.jpg');
        this.load.image('ship', 'images/ship.png');
        this.load.atlas('space', 'images/space.png', 'data/space.json');
    }

    create ()
    {
        this.scene.start('main-scene');
    }
}
