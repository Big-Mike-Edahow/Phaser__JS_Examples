// script.js

// Variable declarations.
let player;
let coin;
let score = 0;
let scoreText;
let arrow;

function preload() {
    this.load.setBaseURL("static");
    this.load.image("player", "images/player.png");
    this.load.image("coin", "images/coin.png");
}

function create() {
    // Add player with dimensions.
    player = this.physics.add.sprite(100, 200, "player");
    player.setDisplaySize(80, 80);
    player.setCollideWorldBounds(true);

    // Add coin with dimensions.
    coin = this.physics.add.image(400, 130, "coin");
    coin.setDisplaySize(60, 60);
    coin.setCollideWorldBounds(true);

    // Add score text.
    scoreText = this.add.text(16, 16, "Score: 0", {
        fontSize: "30px",
        fill: "#fff",
    });

    // Add collision detection.
    this.physics.add.collider(player, coin, hit(), null, this);

    // Input handling.
    this.arrow = this.input.keyboard.createCursorKeys();
}

function update() {
    // Handle horizontal movements.
    if (this.arrow.right.isDown) {
        player.x += 3;
    } else if (this.arrow.left.isDown) {
        player.x -= 3;
    }

    // Handle vertical movements.
    if (this.arrow.down.isDown) {
        player.y += 3;
    } else if (this.arrow.up.isDown) {
        player.y -= 3;
    }

    // Check if player is overlapping coin.
    if (this.physics.overlap(player, coin)) {
        hit();
    }
}

function hit() {
    // Increment the score by 10
    score += 10;
    scoreText.setText("Score: " + score);

    // Change the position x and y of the coin randomly
    coin.x = Phaser.Math.Between(100, 600);
    coin.y = Phaser.Math.Between(100, 400);
}

const config = {
    type: Phaser.AUTO, width: 600, height: 450, parent: 'game-canvas', physics: {
        default: 'arcade', arcade: { gravity: { y: 0 } }
    }, scene: { preload: preload, create: create, update: update, },
};

const game = new Phaser.Game(config);
