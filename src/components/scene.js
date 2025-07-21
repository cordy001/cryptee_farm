export default function createScene(Phaser) {

  return class Scene extends Phaser.Scene {
    
    constructor() {
      super({ key: "MainScene" });
    }
    
    preload() {
      this.load.spritesheet("player_walk", "/walk2.png", {
        frameWidth: 32,
        frameHeight: 32
      });
      this.load.spritesheet("player_idle", "/idle.png", {
        frameWidth: 32,
        frameHeight: 32 
      })
      this.load.spritesheet("player_idle2", "/idle2.png", {
        frameWidth: 32,
        frameHeight: 32 
      })
      this.load.spritesheet("player_walk_front", "/walk_front.png", {
        frameWidth: 32,
        frameHeight: 32 
      });
      this.load.spritesheet("player_walk_back", "/walk_back.png", {
        frameWidth: 32,
        frameHeight: 32 
      });
    }
    
    create() {
      // Create the animation using all 6 frames
      this.anims.create({
        key: "walk",
        frames: this.anims.generateFrameNumbers("player_walk", { start: 0, end: 5 }),
        frameRate: 10,
        repeat: -1 // Loop forever
      });

      this.anims.create({
        key: "walk_front",
        frames: this.anims.generateFrameNumbers("player_walk_front", { start: 0, end: 5 }),
        frameRate: 10,
        repeat: -1 // Loop forever
      });

      this.anims.create({
        key: "walk_back",
        frames: this.anims.generateFrameNumbers("player_walk_back", { start: 0, end: 5 }),
        frameRate: 10,
        repeat: -1 // Loop forever
      });


      this.anims.create({
        key: "idle",
        frames: this.anims.generateFrameNumbers("player_idle", { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1 // Loop forever
      });

       this.anims.create({
        key: "idle2",
        frames: this.anims.generateFrameNumbers("player_idle2", { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1 // Loop forever
      });

      // Add player sprite
      this.player = this.add.sprite(400, 300, "player_idle").setOrigin(0.5, 0.5);
      this.player.anims.play("idle");
      this.player.setScale(5);

      // Add keyboard input
      this.cursors = this.input.keyboard.createCursorKeys();
      this.speed = 5;
    }
    update() {
      if (!this.player || !this.cursors) return;

      let moving = false;

      // Track last direction
      if (!this.lastDirection) this.lastDirection = "down";

      if (this.cursors.left.isDown) {
        this.player.x -= this.speed;
        this.player.anims.play("walk", true);
        this.player.flipX = true;
        this.lastDirection = "left";
        moving = true;
      } else if (this.cursors.right.isDown) {
        this.player.x += this.speed;
        this.player.anims.play("walk", true);
        this.player.flipX = false;
        this.lastDirection = "right";
        moving = true;
      } else if (this.cursors.up.isDown) {
        this.player.y -= this.speed;
        this.player.anims.play("walk_back", true);
        this.lastDirection = "up";
        this.player.flipX = true
        moving = true;
      } else if (this.cursors.down.isDown) {
        this.player.y += this.speed;
        this.player.anims.play("walk_front", true);
        this.lastDirection = "down";
        this.player.flipX = false
        moving = true;
      }

      // Play idle animation based on last direction
      if (!moving) {
        if (this.lastDirection === "left" || this.lastDirection === "right") {
          this.player.anims.play("idle2", true);
          this.player.flipX = this.lastDirection === "left";
        } else {
          this.player.anims.play("idle", true);
          this.player.flipX = false;
        }
      }
    } 
  };
}