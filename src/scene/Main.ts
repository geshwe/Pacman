import { GameObjects } from "phaser";
import { PacmanClass } from './Pacman'

var upKey;
var downKey;
var leftKey;
var rightKey;
var enter;
var escape;

var start: boolean = false;

function grid(x){
    var y: number;
    if(x <= 31) {
        y = x * 32 -16;
    }
    if (x > 31) {
        y = (x + 16) /32
    }        
    return y;
}


class Main extends Phaser.Scene {
    pacman = new PacmanClass();
    public player
    private dir:number;
    //grid 28x31 - 32x32 pixel squares
    
    constructor() {
        super("main");
    }
    
    preload() {
        this.load.image('Grid', 'assets/Grid.png');
        this.load.image('Level', 'assets/Level.png');
        this.load.spritesheet('Pacman' , 'assets/Pacman.png', {frameWidth: 64,frameHeight: 64});
        
        
    }
    create() {
        
        upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        enter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        escape = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
        start = false


        this.add.image(448,496,'Grid');
        this.add.image(448,496,'Level');
        this.player = this.add.sprite(grid(15), grid(24), 'Pacman');
        this.anims.create({
            key: 'eat',
            repeat: -1,
            frameRate: 6,
            frames: this.anims.generateFrameNames('Pacman', {start: 0, end: 3})
        })
        this.player.play('eat')
        
        

    }

    update() {
        if (enter.isDown == true){
            if(start == true){
                start = false
            }
            if (start == false){
                start = true
            }
        }
        if (start == true){
            this.dir = this.pacman.move(this.player,upKey, leftKey , downKey ,rightKey);
            this.player.angle = this.dir;
        }
        console.log(grid(this.player.x) + " ,  " + this.player.x + "/b   " + grid(this.player.y) + " ,  " + this.player.y)
    }
}

export { Main }