import MapCreate from "./map/map_create";
import PlayerCreate from "./players/player_create";
import FarmerCreate  from "./npc/farmer/create";

export default function Create(scene) {
    PlayerCreate(scene); // Player
    FarmerCreate(scene); // NPC Farmers
    MapCreate(scene); // Maps
}