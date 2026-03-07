// script.js

class StreetFighterII extends Phaser.Scene {
    constructor() {
        super();
    }
    preload() {
        this.load.setBaseURL("static");
        this.load.atlas("ryu", "images/game/sf2ryu.png", "js/sf2ryu.json");
        this.load.image("sea", "images/game/sf2boat.png");
        this.load.image("ground", 'images/game/sf2floor.png');
    }
    create() {
        this.add.image(230, 160, "sea").setScale(2);
        this.add.image(400, 400, "ground").setScale(2);

        let info = ["Click to toggle Animation.yoyo", "yoyo: true"];
        let text = this.add.text(160, 12, info, { color: "#113355", align: "center" }).setOrigin(0.5, 0);

        this.anims.create({
            key: "hadoken",
            frames: this.anims.generateFrameNames("ryu", { prefix: "frame_", end: 15, zeroPad: 2 }),
            yoyo: true,
            repeat: -1
        });

        let ryu = this.add.sprite(335, 290).play("hadoken").setScale(2.5);
        this.input.on("pointerup", function () {
            ryu.anims.yoyo = !ryu.anims.yoyo;               //  Toggle 'yoyo' at runtime.
            info[1] = "yoyo: " + ryu.anims.yoyo;
            text.setText(info);
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 450,
    parent: "game-canvas",
    pixelArt: true,
    scene: StreetFighterII
};

const game = new Phaser.Game(config);
