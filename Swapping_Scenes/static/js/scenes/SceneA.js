// SceneA.js

const sceneConfigA = {
    key: 'sceneA',
    create: createA,
    pack: {
        files: [
            { type: 'image', key: 'face', url: 'static/images/bw_face.png' }
        ]
    }
};

function createA() {
    let face = this.add.image(400, 300, 'face');

    this.input.on('pointerdown', () => {
        this.input.stopPropagation();
        this.scene.switch('sceneB');
    });
}
