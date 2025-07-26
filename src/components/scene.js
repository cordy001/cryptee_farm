export default function createScene(Phaser) {

  return class Scene extends Phaser.Scene {
    
    constructor() {
      super({ key: "MainScene" });
      this.lastDirections = 'front';
    }
    
    preload() {
      this.load.spritesheet("player_walk", "/Character/char_1/walk2_ch1.png", {
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
      this.load.image('tiles2', '/Map/tile_soils.png');
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
      const tile2set = map.addTilesetImage('soils', 'tiles2')
      map.createLayer('ground', [tileset, tile2set], 0, 0);

      // Object tiles
      const objectsLayer = map.createLayer('objects', [tileset, tile2set], 0, 0)
      .setCollisionByExclusion([-1]);

      // Create the Tree layer and enable tile collision by property
      const treeLayer  = map.createLayer('Tree',  tileset, 0, 0)
      .setCollisionByExclusion([-1]);

      // new fence layer
      const fenceLayer = map.createLayer('fence', tileset, 0, 0)
      .setCollisionByExclusion([-1]);

      // House 

      const houseTiles = map.createLayer('house', tileset, 0, 0)
      .setCollisionByExclusion([-1]);

      // 2) Create the player as a physics sprite
      this.player = this.physics.add.sprite(152, 165, 'player_idle')
        .setOrigin(0.5)
        .setDisplaySize(16, 16)
        .setCollideWorldBounds(true);

      // shrink the arcade‐body to be narrower/taller
      this.player.body.setSize(16, 16);
      // this.player.body.setOffset(0, 0);

      // **colliders for both layers**
      this.physics.add.collider(this.player, treeLayer);
      this.physics.add.collider(this.player, fenceLayer);
      this.physics.add.collider(this.player, objectsLayer);
      this.physics.add.collider(this.player, houseTiles);

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
        .setZoom(8)
        .setBounds(0, 0, map.widthInPixels, map.heightInPixels);

      // 5) Input & speed
      this.cursors = this.input.keyboard.createCursorKeys();
      this.speed = 50;
    }
    update() {
      const body = this.player.body;
      body.setVelocity(0, 0);

      if (this.cursors.left.isDown) {
        body.setVelocityX(-this.speed);
        this.player.anims.play('walk', true);
        this.player.flipX = true;
        this.lastDirections = 'side';
      }
      else if (this.cursors.right.isDown) {
        body.setVelocityX(this.speed);
        this.player.anims.play('walk', true);
        this.player.flipX = false;
        this.lastDirections = 'side';
      }
      else if (this.cursors.up.isDown) {
        body.setVelocityY(-this.speed);
        this.player.anims.play('walk_back', true);
        this.lastDirections = 'front';
      }
      else if (this.cursors.down.isDown) {
        body.setVelocityY(this.speed);
        this.player.anims.play('walk_front', true);
        this.lastDirections = 'front';
      }

      // normalize diagonal speed
      body.velocity.normalize().scale(this.speed);
   if (body.velocity.x === 0 && body.velocity.y === 0) {
        if (this.lastDirections === 'front') {
          this.player.anims.play('idle', true);
        } 
        if (this.lastDirections === 'side') {
          this.player.anims.play('idle2', true)
        }
        
      }
    } 
   
  };
}