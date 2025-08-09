import PlayerPreload from '@/module/scenes/scene1/players/player_001/player_preload';
import MapPreload from '@/module/map/preload';
import NPCPreload from '@/module/scenes/scene1/npc/preload';
import UtilitisPreload from '@/module/scenes/scene1/utilities/preload';

export default function Preload(scene) {
    // Load the map and tilesets
    PlayerPreload(scene); // Load player animations
    NPCPreload(scene); // Load NPC animations
    UtilitisPreload(scene); // Load utility assets
    MapPreload(scene); // Load map and tilesets
}