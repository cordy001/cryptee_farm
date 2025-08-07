export default function PlayerPreload(scene) {
    const directory = [
        { name: "player_walk", path: "/Character/char_1/walk2_ch1.png" },
        { name: "player_idle", path: "/Character/char_1/idle_ch1.png" },
        { name: "player_idle2", path: "/Character/char_1/idle2_ch1.png" },
        { name: "player_idle3", path: "/Character/char_1/idle3_ch1.png" },
        { name: "player_walk_front", path: "/Character/char_1/walk_front_ch1.png" },
        { name: "player_walk_back", path: "/Character/char_1/walk_back_ch1.png" }
    ];
    for (const { name, path } of directory) {
        scene.load.spritesheet(name, path, {
            frameWidth: 32,
            frameHeight: 32
        });
    }
}