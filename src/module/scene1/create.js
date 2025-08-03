export default function Create(scene) {
    // Create the animation using all 6 frames
      scene.anims.create({
        key: "walk",
        frames: scene.anims.generateFrameNumbers("player_walk", { start: 0, end: 5 }),
        frameRate: 10,
        repeat: -1 // Loop forever
      });

      // 1) Build the map & layers
      const map = scene.make.tilemap({ key: 'map' });
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
      scene.player = scene.physics.add.sprite(152, 165, 'player_idle')
        .setOrigin(0.5)
        .setDisplaySize(16, 16)
        .setCollideWorldBounds(true);

      // shrink the arcade‐body to be narrower/taller
      scene.player.body.setSize(16, 24);

      // **colliders for both layers**
      scene.physics.add.collider(scene.player, treeLayer);
      scene.physics.add.collider(scene.player, fenceLayer);
      scene.physics.add.collider(scene.player, objectsLayer);
      scene.physics.add.collider(scene.player, houseTiles);

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

      // 4) Camera
      scene.cameras.main
        .startFollow(scene.player)
        .setZoom(8)
        .setBounds(0, 0, map.widthInPixels, map.heightInPixels);

      // 5) Input & speed
      scene.cursors = scene.input.keyboard.createCursorKeys();
      scene.speed = 50;
}