export default function MapCreate (scene) {
    // 1) Build the map & layers
    const map = scene.make.tilemap({ key: 'map' });
    const tileset = map.addTilesetImage('Cryptee Farm', 'tiles');
    const tile2set = map.addTilesetImage('soils', 'tiles2')
    map.createLayer('ground', [tileset, tile2set], 0, 0);

    // Object tiles
    const objectsLayer = map.createLayer('objects', [tileset, tile2set], 0, 0)
    .setCollisionByExclusion([-1]);

    // Soils layer
    const soilsLayer = map.createLayer('soils', tile2set, 0, 0)
    .setCollisionByExclusion([-1]);

    // Create the Tree layer and enable tile collision by property
    const treeLayers  = map.createLayer('Tree',  tileset, 0, 0)
    .setCollisionByExclusion([-1]);

    const collidersLayer = map.createLayer('Colliders', tileset, 0, 0)
    .setCollisionByExclusion([-1]);

    // new fence layer
    const fenceLayer = map.createLayer('fence', tileset, 0, 0)
    .setCollisionByExclusion([-1]);

    // House layer
    const houseTiles = map.createLayer('house', tileset, 0, 0)
    .setCollisionByExclusion([-1]);

    // Invisible layer
    const invisibleLayer = map.createLayer('invisible', tileset, 0, 0)
    .setCollisionByExclusion([-1]);

    // **colliders for both layers**
    scene.physics.add.collider(scene.player, treeLayers);
    scene.physics.add.collider(scene.player, collidersLayer);
    scene.physics.add.collider(scene.player, fenceLayer);
    scene.physics.add.collider(scene.player, objectsLayer);
    scene.physics.add.collider(scene.player, houseTiles);
    scene.physics.add.collider(scene.player, invisibleLayer)
    scene.physics.add.collider(scene.player, scene.npc);
    // Set the depth of the layers

    let depth = 0;
    let depthCollider = 999;
    treeLayers.setDepth(depth);
    collidersLayer.setDepth(depthCollider);
    fenceLayer.setDepth(depth);
    houseTiles.setDepth(depth);
    objectsLayer.setDepth(depth);

     // 4) Camera
    scene.cameras.main
      .startFollow(scene.player)
      .setZoom(8)
      .setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    // 5) Input & speed
    scene.cursors = scene.input.keyboard.createCursorKeys();
    scene.speed = 50;

}