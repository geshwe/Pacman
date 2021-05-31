import { GameObjects } from "phaser";

var upKey;
var downKey;
var leftKey;
var rightKey;
var player

class Main extends Phaser.Scene {
    //grid 28x31 - 32x32 squares
    
    private pacman = {
        x: 15,
        y: 24,
        velocity: 0,
        direction: 'left'
    }
    
    constructor() {
        super("main");
    }
    
    preload() {
        this.load.image('Grid', 'assets/Grid.png');
        this.load.image('Level', 'assets/Level.png');
        this.load.image('Pacman' , 'assets/Pacman.png');
    }
    create() {
        upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        this.add.image(448,496,'Grid');
        this.add.image(448,496,'Level');
        player = this.add.image(this.pacman.x * 32 - 16, this.pacman.y * 32 - 16, 'Pacman');

    }

    update() {
        if (upKey.isDown) {
            this.pacman.direction = 'up'
        }
        if (downKey.isDown) {
            this.pacman.direction = 'down'
        }
        if (leftKey.isDown) {
            this.pacman.direction = 'left'
        }
        if (rightKey.isDown) {
            this.pacman.direction = 'right'
        }
        console.log(this.pacman.direction)
        
        if (this.pacman.direction == 'up') {
            player.angle = 270
        }
        if (this.pacman.direction == 'down') {
            player.angle = 90
        }
        if (this.pacman.direction == 'left') {
            player.angle = 180
        }
        if (this.pacman.direction == 'up') {
            player.angle = 0
        }

        this.add.image(448,496,'Grid');
        this.add.image(448,496,'Level');
        player = this.add.image(this.pacman.x * 32 - 16, this.pacman.y * 32 - 16, 'Pacman');

    }
 
}

export { Main }