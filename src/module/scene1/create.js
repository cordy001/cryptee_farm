import MapCreate from "./map/map_create";
import PlayerCreate from "./players/player_create";
import FarmerCreate  from "./npc/farmer/create";
import OwlCreate from "./npc/owl/create";
import SellerCreate from "./npc/seller/create";

export default function Create(scene) {
    PlayerCreate(scene); // Player
    FarmerCreate(scene); // NPC Farmers
    OwlCreate(scene); // NPC Owl
    SellerCreate(scene); // NPC Seller
    MapCreate(scene); // Maps
}