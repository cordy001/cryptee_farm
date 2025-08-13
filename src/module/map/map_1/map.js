export default function MapCreate (scene) {
    // 1) Build the map & layers
    const map = scene.make.tilemap({ key: 'map' });
    const tileset = map.addTilesetImage('Cryptee Farm', 'tiles');
    const tile2set = map.addTilesetImage('soils', 'tiles2')
    map.createLayer('ground', [tileset, tile2set], 0, 0);

    // Create layers and keep references
    const createdLayers = {};
    const layerDefs = [
      { key: 'objects', tiles: [tileset, tile2set] },
      { key: 'soils', tiles: tile2set },
      { key: 'Tree', tiles: tileset },
      { key: 'Colliders', tiles: tileset },
      { key: 'fence', tiles: tileset },
      { key: 'house', tiles: tileset },
      { key: 'invisible', tiles: tileset },
    ];

    for (const { key, tiles } of layerDefs) {
      createdLayers[key] = map.createLayer(key, tiles, 0, 0).setCollisionByExclusion([-1]);
    }

    // Expose variables used later
    const objectsLayer   = createdLayers.objects;
    const soilsLayer     = createdLayers.soils;
    const treeLayers     = createdLayers.Tree;
    const collidersLayer = createdLayers.Colliders;
    const fenceLayer     = createdLayers.fence;
    const houseTiles     = createdLayers.house;
    const invisibleLayer = createdLayers.invisible;

    // Keep handles to colliders (use these as your "IDs")
    
    scene.physics.add.collider(scene.player, treeLayers)
    scene.physics.add.collider(scene.player, collidersLayer)
    scene.physics.add.collider(scene.player, fenceLayer)
    scene.physics.add.collider(scene.player, objectsLayer)
    scene.physics.add.collider(scene.player, houseTiles)
    scene.physics.add.collider(scene.player, invisibleLayer)
    scene.physics.add.collider(scene.player, scene.npc)



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