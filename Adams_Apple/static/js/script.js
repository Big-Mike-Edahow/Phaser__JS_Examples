// script.js

// Variable declarations.
let player;
let cursors;
let fallingObject;
let score = 0;
let scoreText;

// Preload game images.
function preload() {
    this.load.setBaseURL('static');
    this.load.image("player", "images/player.png");
    this.load.image("object", "images/apple.png");
}

function create() {
     // Add player with  dimensions.
    player = this.physics.add.sprite(200, 400, "player");
    player.setDisplaySize(100, 100);
    player.setCollideWorldBounds(true);

    // Add falling object with dimensions.
    fallingObject = this.physics.add.sprite(
        Phaser.Math.Between(25, 375),
        0,
        "object"
    );
    fallingObject.setDisplaySize(40, 40);
    fallingObject.setVelocityY(170);
    fallingObject.setVelocityX(0);

    // Add collision detection.
    this.physics.add.collider(player, fallingObject, catchObject, null, this);

    // Add score text.
    scoreText = this.add.text(16, 16, "Score: 0", {
        fontSize: "30px",
        fill: "#fff",
    });

    // Input handling.
    cursors = this.input.keyboard.createCursorKeys();
}

function update() {
     // Player movement.
    if (cursors.left.isDown) {
        player.setVelocityX(-200);
    } else if (cursors.right.isDown) {
        player.setVelocityX(200);
    } else {
        player.setVelocityX(0);
    }

    // Reset falling object if it goes out of bounds.
    if (fallingObject.y > 450) {
        resetFallingObject();
    }
}

    // Increase score and reset object
function catchObject(player, object) {
    score += 10;
    scoreText.setText("Score: " + score);
    resetFallingObject();
}

function resetFallingObject() {
    fallingObject.y = 0;
    fallingObject.setVelocityY(170);
    fallingObject.x = Phaser.Math.Between(25, 375);
    fallingObject.setVelocityX(0);
}

// Config.
const config = {
    type: Phaser.AUTO,
    width: 400,
    height: 450,
     parent: 'game-canvas',
    physics: {
        default: "arcade",
        arcade: { gravity: { y: 0 } },
    },
    scene: {
        preload: preload,
        create: create,
        update: update,
    },
};

// Game.
const game = new Phaser.Game(config);
