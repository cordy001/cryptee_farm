import PlayerPreload from '@/module/scene1/players/player_preload.js';
import MapPreload from '@/module/scene1/map/map_preload.js';
import NPCPreload from '@/module/scene1/npc/preload';

export default function Preload(scene) {
    // Load the map and tilesets
    PlayerPreload(scene); // Load player animations
    NPCPreload(scene); // Load NPC animations
    MapPreload(scene); // Load map and tilesets
}