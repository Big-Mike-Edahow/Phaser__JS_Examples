// Preloader.js

class Preloader extends Phaser.Scene {
    constructor() {
        super('Preloader');
    }

    preload() {
        this.load.path = 'static/images/game/';

        this.load.image([
            'background',
            'floor',
            'wall',
            'bomb',
            'tomato_item',
            'life',
            'logo'
        ]);

        this.load.path = 'static/sounds/'
        this.load.audio('bongo', 'bongojam_f.mp3');
        this.load.audio('pop', 'pop.mp3');
        this.load.audio('draw', 'draw.mp3');

        this.load.path = 'static/'

        this.load.image('font', 'fonts/font.png');
        this.load.json('fontData', 'fonts/font.json');

        this.load.atlas('tomato', 'images/game/tomato.png', 'data/tomato_atlas.json');
        this.load.animation('tomatoAnim', 'data/tomato_anim.json');

        this.load.on('complete', () => {
            this.sound.play('bongo', { loop: true });
            const fontData = this.cache.json.get('fontData');
            this.cache.bitmapFont.add('pixelFont', Phaser.GameObjects.RetroFont.Parse(this, fontData));
            this.scene.start('Menu');
        });
    }
}
export default Preloader;
