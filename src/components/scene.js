export default function createScene(Phaser) {

  return class Scene extends Phaser.Scene {
    
    constructor() {
      super({ key: "MainScene" });
    }
    
    preload() {
      this.load.spritesheet("player_walk", "/Character/char_1/walk_ch1.png", {
        frameWidth: 32,
        frameHeight: 32
      });
      this.load.spritesheet("player_idle", "/Character/char_1/idle_ch1.png", {
        frameWidth: 32,
        frameHeight: 32 
      })
      this.load.spritesheet("player_idle2", "/Character/char_1/idle2_ch1.png", {
        frameWidth: 32,
        frameHeight: 32 
      })
      this.load.spritesheet("player_walk_front", "/Character/char_1/walk_front_ch1.png", {
        frameWidth: 32,
        frameHeight: 32 
      });
      this.load.spritesheet("player_walk_back", "/Character/char_1/walk_back_ch1.png", {
        frameWidth: 32,
        frameHeight: 32 
      });
      this.load.tilemapTiledJSON('map', '/Map/map.json');
      this.load.image('tiles', '/Map/tilemap_packed.png');
    }
    
    create() {
      // Create the animation using all 6 frames
      this.anims.create({
        key: "walk",
        frames: this.anims.generateFrameNumbers("player_walk", { start: 0, end: 5 }),
        frameRate: 10,
        repeat: -1 // Loop forever
      });

      // 1) Build the map & layers
      const map = this.make.tilemap({ key: 'map' });
      const tileset = map.addTilesetImage('Cryptee Farm', 'tiles');
      map.createLayer('ground', tileset, 0, 0);

      // Create the Tree layer and enable tile collision by property
      const treeLayer  = map.createLayer('Tree',  tileset, 0, 0)
      .setCollisionByExclusion([-1]);

      // new fence layer
      const fenceLayer = map.createLayer('fence', tileset, 0, 0)
      .setCollisionByExclusion([-1]);

      // 2) Create the player as a physics sprite
      this.player = this.physics.add.sprite(100,300,'player_idle')
        .setOrigin(0.5)
        .setCollideWorldBounds(true);

      // shrink the arcade‐body to be narrower/taller
      this.player.body.setSize(16, 28);
      // re‐center it in the sprite
      this.player.body.setOffset((32-16)/2, (32-28));

      // **colliders for both layers**
      this.physics.add.collider(this.player, treeLayer);
      this.physics.add.collider(this.player, fenceLayer);

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

      // 4) Camera
      this.cameras.main
        .startFollow(this.player)
        .setZoom(4)
        .setBounds(0, 0, map.widthInPixels, map.heightInPixels);

      // 5) Input & speed
      this.cursors = this.input.keyboard.createCursorKeys();
      this.speed = 200;
    }
    update() {
      const body = this.player.body;
      body.setVelocity(0, 0);

      if (this.cursors.left.isDown) {
        body.setVelocityX(-this.speed);
        this.player.anims.play('walk', true);
        this.player.flipX = true;
      }
      else if (this.cursors.right.isDown) {
        body.setVelocityX(this.speed);
        this.player.anims.play('walk', true);
        this.player.flipX = false;
      }
      else if (this.cursors.up.isDown) {
        body.setVelocityY(-this.speed);
        this.player.anims.play('walk_back', true);
      }
      else if (this.cursors.down.isDown) {
        body.setVelocityY(this.speed);
        this.player.anims.play('walk_front', true);
      }

      // normalize diagonal speed
      body.velocity.normalize().scale(this.speed);

      if (body.velocity.x === 0 && body.velocity.y === 0) {
        this.player.anims.play('idle', true);
      }
    } 
  };
}