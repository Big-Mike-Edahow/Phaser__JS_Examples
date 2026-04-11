// script.js

class ParticleEmitter extends Phaser.Scene {
    particles;
    rt;

    preload() {
        this.load.setBaseURL('/');
        this.load.atlas('flares', 'static/images/flares.png', 'data/flares.json');
    }

    create() {
        this.particles = this.add.particles(0, 0, 'flares', {
            frame: 'blue',
            x: 320,
            y: 240,
            lifespan: 2000,
            speed: { min: 400, max: 600 },
            angle: 0,
            gravityY: 300,
            scale: { start: 0.4, end: 0 },
            quantity: 2,
            blendMode: 'ADD'
        });

        this.particles.setVisible(false);

        this.rt = this.add.renderTexture(320, 240, 640, 480);
    }

    update() {
        this.rt.camera.rotation -= 0.01;
        this.rt.clear();
        this.rt.draw(this.particles, 0, 0);
        this.rt.render();
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'game-canvas',
    width: 640,
    height: 480,
    scene: ParticleEmitter,
    title: "Particle Emitter",
    version: "1.0",
};

const game = new Phaser.Game(config);
