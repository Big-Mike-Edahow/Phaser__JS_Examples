// SceneB.js

const sceneConfigB = {
    key: 'sceneB',
    create: createB,
    pack: {
        files: [
            { type: 'image', key: 'title', url: 'static/images/hero_title.png' }
        ]
    }
};

function createB() {
    let title = this.add.image(0, 0, 'title');
    title.setOrigin(0, 0).setDisplaySize(this.sys.canvas.width, this.sys.canvas.height);
    this.input.on('pointerdown', () => {
        this.input.stopPropagation();
        this.scene.switch('sceneA');
    });
}
