import PlayerPreload from '@/module/scene1/players/player_preload.js';
import MapPreload from '@/module/scene1/map/map_preload.js';
import FarmerPreload from '@/module/scene1/npc/farmer/preload';

export default function Preload(scene) {
    // Load the map and tilesets
    PlayerPreload(scene); // Load player animations
    FarmerPreload(scene); // Farmer NPC
    MapPreload(scene); // Load map and tilesets
}