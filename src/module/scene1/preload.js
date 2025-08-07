import PlayerPreload from '@/module/scene1/players/player_001/player_preload';
import MapPreload from '@/module/scene1/map/preload';
import NPCPreload from '@/module/scene1/npc/preload';

export default function Preload(scene) {
    // Load the map and tilesets
    PlayerPreload(scene); // Load player animations
    NPCPreload(scene); // Load NPC animations
    MapPreload(scene); // Load map and tilesets
}