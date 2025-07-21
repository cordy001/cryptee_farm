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
      this.load.spritesheet("player_walk_front", "/walk_front.png", {
        frameWidth: 32,
        frameHeight: 32 
      })
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
        key: "idle",
        frames: this.anims.generateFrameNumbers("player_idle", { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1 // Loop forever
      });

      // Add the sprite and play the animation
      const player = this.add.sprite(400, 100, "player_walk");
      player.anims.play("walk");
      player.setScale(7); // Makes the sprite 2x bigger

      const idlePlayer = this.add.sprite(400, 300, "player_idle");
      idlePlayer.anims.play("idle");
      idlePlayer.setScale(7); // Makes the sprite 2x bigger

      const frontPlayer = this.add.sprite(400, 500, "player_walk_front");
      frontPlayer.anims.play("walk_front");
      frontPlayer.setScale(7); // Makes the sprite 2x bigger
    }
    update() {}
  };
}