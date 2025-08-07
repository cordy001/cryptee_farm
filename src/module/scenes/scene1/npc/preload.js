export default function NPCPreload(scene) {
    // Load NPC animations
    const npcAnimations = [
        { name: "farmer", path: "Character/npc/farmers.png"},
        { name: "owl", path: "Character/npc/owl.png"},
        { name: "seller", path: "Character/npc/sellers.png"}
    ];

    for (const { name, path } of npcAnimations) {
        scene.load.spritesheet(name, path, { frameWidth: 32, frameHeight: 32 });
    }
}