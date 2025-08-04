export default function MapPreload(scene) {
    // Load the map and tilesets
    scene.load.tilemapTiledJSON('map', '/Map/map.json');
    scene.load.image('tiles', '/Map/tilemap_packed.png');
    scene.load.image('tiles2', '/Map/tile_soils.png');
}