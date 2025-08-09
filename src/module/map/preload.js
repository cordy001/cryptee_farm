export default function MapPreload(scene) {
    // Load the map and tilesets
    scene.load.tilemapTiledJSON('map', 'Config/Map/map.json');
    scene.load.image('tiles', 'Config/Map/tilemap_packed.png');
    scene.load.image('tiles2', 'Config/Map/tile_soils.png');
}