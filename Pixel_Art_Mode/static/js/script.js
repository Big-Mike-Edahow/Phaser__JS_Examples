// script.js

class PixelArt extends Phaser.Scene
{
    constructor ()
    {
        super();
        this.iter = 0;
    }
    preload ()
    {
        this.load.setBaseURL('static');
        this.load.image('toy', 'images/shocktroopers-toy.png');
        this.load.bitmapFont('atari', 'images/atari-classic.png', 'fonts/atari-classic.xml');
        this.load.spritesheet('veg', 'images/fruitnveg32wh37.png', { frameWidth: 32, frameHeight: 37 });
        this.load.image('mushroom', 'images/mine.png');
        this.load.tilemapTiledJSON('map1', 'data/super-mario.json');
        this.load.image('tiles1', 'images/super-mario.png');
    }
    create ()
    {
        this.tilesprite = this.add.tileSprite(320, 240, 640, 480, 'mushroom');
        const map1 = this.make.tilemap({ key: 'map1' });
        const tileset1 = map1.addTilesetImage('SuperMarioBros-World1-1', 'tiles1');
        const layer1 = map1.createLayer('World1', tileset1, 0, 64).setScale(1.5);
        this.add.image(0, 480, 'toy').setOrigin(0, 1).setScale(1.5);
        this.add.text(400, 8, 'Phaser 3 Pixel Art', { font: '16px Courier', fill: '#00ff00' }).setOrigin(0.7, 0).setScale(2.3);

        this.add.particles(400, 300, 'veg', {
            frame: 0,
            speed: 100,
            frequency: 300,
            lifespan: 4000
        }).setScale(3);

        this.add.bitmapText(320, 110, 'atari', 'PHASER').setOrigin(0.5).setScale(1.3);
    }

    update ()
    {
        this.tilesprite.tileScaleX = Math.max(2, Math.sin(this.iter) * 8);
        this.tilesprite.tileScaleY = Math.max(2, Math.sin(this.iter) * 8);

        this.iter += 0.01;
    }
}

const config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    parent: 'game-canvas',
    pixelArt: true,
    scene: PixelArt
};

const game = new Phaser.Game(config);
