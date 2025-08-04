export default function MapCreate (scene) {
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

    // House layer
    const houseTiles = map.createLayer('house', tileset, 0, 0)
    .setCollisionByExclusion([-1]);
      
    // **colliders for both layers**
    scene.physics.add.collider(scene.player, treeLayer);
    scene.physics.add.collider(scene.player, fenceLayer);
    scene.physics.add.collider(scene.player, objectsLayer);
    scene.physics.add.collider(scene.player, houseTiles);
    // Set the depth of the layers
    treeLayer.setDepth(15);
    fenceLayer.setDepth(15);
    houseTiles.setDepth(15);

}