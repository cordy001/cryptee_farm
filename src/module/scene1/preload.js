import PlayerPreload from '@/module/scene1/players/player_preload.js';
import MapPreload from '@/module/scene1/map/map_preload.js';

export default function Preload(scene) {
    // Load the map and tilesets
    PlayerPreload(scene); // Load player animations
    MapPreload(scene); // Load map and tilesets
}