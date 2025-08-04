export default function PlayerCreate(scene) {
    
    // Create the animation using all 6 frames
      scene.anims.create({
        key: "walk",
        frames: scene.anims.generateFrameNumbers("player_walk", { start: 0, end: 5 }),
        frameRate: 10,
        repeat: -1 // Loop forever
      });

      scene.anims.create({
        key: "walk_front",
        frames: scene.anims.generateFrameNumbers("player_walk_front", { start: 0, end: 5 }),
        frameRate: 10,
        repeat: -1 // Loop forever
      });

      scene.anims.create({
        key: "walk_back",
        frames: scene.anims.generateFrameNumbers("player_walk_back", { start: 0, end: 5 }),
        frameRate: 10,
        repeat: -1 // Loop forever
      });

      scene.anims.create({
        key: "idle",
        frames: scene.anims.generateFrameNumbers("player_idle", { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
      });

       scene.anims.create({
        key: "idle2",
        frames: scene.anims.generateFrameNumbers("player_idle2", { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1 
      });

      scene.anims.create({
        key: "idle3",
        frames: scene.anims.generateFrameNumbers("player_idle3", { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
      })

      // 2) Create the player as a physics sprite
      scene.player = scene.physics.add.sprite(144, 160, 'player_idle')
        .setOrigin(0, 0) // top-left origin simplifies everything
        .setDisplaySize(16, 16) // scale to 16x16 pixels
        .setCollideWorldBounds(true);

      // Collider setup — must be done on the body
      scene.player.body.setSize(4, 2, true);    // collider: full width, short height
      scene.player.setDepth(scene.player.y);
      scene.player.setCollideWorldBounds(true);
}