export default function ControllerInventory(scene) {

    const controls = scene.cache.json.get("keybinds");

    scene.bagIcon.on('pointerdown', () => {
        // Toggle between 'bag2' and 'bag1' textures on each click
        const currentTexture = scene.bagIcon.texture.key;
        scene.bagIcon.setTexture(currentTexture === 'bag2' ? 'bag1' : 'bag2');

        scene.bagElement.visible = currentTexture === 'bag2' ? true : false; // Show or hide the bag element based on the texture

    });

    // Add keyboard control - 'B' key for bag
    const bagKey = scene.input.keyboard.addKey(controls.inventory[0]);
    
    bagKey.on('down', () => {
        // Use the same toggle logic as the mouse click
        const currentTexture = scene.bagIcon.texture.key;
        scene.bagIcon.setTexture(currentTexture === 'bag2' ? 'bag1' : 'bag2');
        scene.bagElement.visible = currentTexture === 'bag2' ? true : false; // Show or hide the bag element based on the texture
        console.log('Bag toggled with keyboard');
    });

}