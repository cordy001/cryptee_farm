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
      scene.player = scene.physics.add.sprite(152, 165, 'player_idle')
        .setOrigin(0.5)
        .setDisplaySize(16, 16)
        .setCollideWorldBounds(true);
      // shrink the arcade‐body to be narrower/taller
      scene.player.body.setSize(16, 24);

      scene.player.setDepth(10);
}