export default function FarmerCreate(scene) {
    scene.anims.create({
        key: "farmer_npc_idle",
        frames: scene.anims.generateFrameNumbers("farmer", { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1 // Loop forever
    });

    // 2) Create the NPC as a physics sprite
    scene.npc = scene.physics.add.sprite(120, 270, 'farmer')
    .setOrigin(0.5)
    .setDisplaySize(16, 16)
    .setCollideWorldBounds(true);
    // shrink the arcade‐body to be narrower/taller
    scene.npc.body.setSize(16, 16, true); // collider: full width, full height
    scene.npc.setDepth(scene.npc.y);
    scene.npc.setDepth(10);
    scene.npc.anims.play("farmer_npc_idle");

    scene.npc.body.setImmovable(true);
    scene.npc.body.moves = false; // Prevents the NPC from being affected by physics

}