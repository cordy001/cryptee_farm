export default function PlayerCreate(scene) {

    const anims = [
      {key: "walk", prefix: "player_walk", end: 5},
      {key: "walk_front", prefix: "player_walk_front", end: 5},
      {key: "walk_back", prefix: "player_walk_back", end: 5},
      {key: "idle", prefix: "player_idle", end: 3},
      {key: "idle2", prefix: "player_idle2", end: 3},
      {key: "idle3", prefix: "player_idle3", end: 3}
    ];

    for (const { key, prefix, end } of anims) {
        // 1) Load the sprite sheet for the player animations
        if (!scene.anims.exists(key)) {
          scene.anims.create({
            key: key,
            frames: scene.anims.generateFrameNumbers(prefix, { start: 0, end: end }),
            frameRate: 10,
            repeat: -1 // Loop forever
          })
        }
    }
    // 2) Create the player as a physics sprite
    scene.player = scene.physics.add.sprite(144, 160, 'player_idle')
      .setOrigin(0, 0) // top-left origin simplifies everything
      .setDisplaySize(16, 16) // scale to 16x16 pixels
      .setCollideWorldBounds(true);

    // Collider setup — must be done on the body
    scene.player.body.setSize(16, 2, true);    // collider: full width, short height
    scene.player.setDepth(scene.player.y);
    scene.player.setCollideWorldBounds(true);
}