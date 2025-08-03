export default function Preload(scene) {
    scene.load.spritesheet("player_walk", "/Character/char_1/walk2_ch1.png", {
        frameWidth: 32,
        frameHeight: 32
    });
    scene.load.spritesheet("player_idle", "/Character/char_1/idle_ch1.png", {
        frameWidth: 32,
        frameHeight: 32
    });
    scene.load.spritesheet("player_idle2", "/Character/char_1/idle2_ch1.png", {
        frameWidth: 32,
        frameHeight: 32
    });
    scene.load.spritesheet("player_idle3", "/Character/char_1/idle3_ch1.png", {
        frameWidth: 32,
        frameHeight: 32
    });
    scene.load.spritesheet("player_walk_front", "/Character/char_1/walk_front_ch1.png", {
        frameWidth: 32,
    frameHeight: 32 
    });
    scene.load.spritesheet("player_walk_back", "/Character/char_1/walk_back_ch1.png", {
        frameWidth: 32,
        frameHeight: 32
    });
    scene.load.tilemapTiledJSON('map', '/Map/map.json');
    scene.load.image('tiles', '/Map/tilemap_packed.png');
    scene.load.image('tiles2', '/Map/tile_soils.png');
}