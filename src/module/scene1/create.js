import MapCreate from "./map/map_create";
import PlayerCreate from "./players/player_create";
import Camera from "./cameras/camera";

export default function Create(scene) {
    PlayerCreate(scene);
    MapCreate(scene);
    Camera(scene);
}