import MapCreate from "../../map/map_1/map";
import PlayerCreate from "./players/player_001/player_create";
import FarmerCreate  from "./npc/farmer/create";
import OwlCreate from "./npc/owl/create";
import SellerCreate from "./npc/seller/create";
import Inventory from "./utilitis/inventory/inventory";

export default function Create(scene) {
    PlayerCreate(scene); // Player
    FarmerCreate(scene); // NPC Farmers
    OwlCreate(scene); // NPC Owl
    Inventory(scene); // Inventory
    SellerCreate(scene); // NPC Seller
    MapCreate(scene); // Maps
}