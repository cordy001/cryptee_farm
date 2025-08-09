import DafaultCamera from '@/module/scenes/scene1/utilitis/camera/camera';
import ControllerInventory from '@/module/controller/Inventory/inventory';

export default function Inventory(scene) {
    // Function to position the bag based on current camera dimensions
    function positionBag() {
        // First get the camera from the scene
        const cam = scene.cameras.main;
        
        // Then call your default camera function with cam as parameter
        const cameraInfo = DafaultCamera(cam);
        
        // Use the returned info for positioning
        const x = cameraInfo.x || cam.width * 0.95;  // Fallback to 95% width
        const y = cameraInfo.y || cam.height * 0.95; // Fallback to 95% height
        const scaledSize = cameraInfo.scaledSize || 8;

        if (scene.bagIcon) {
            scene.bagIcon.setPosition(x, y)
                         .setDisplaySize(scaledSize, scaledSize);
        } else {
            scene.bagIcon = scene.add.image(x, y, 'bag2')
                .setScrollFactor(0)
                .setOrigin(1, 1)
                .setInteractive({ useHandCursor: true })
                .setDepth(1000)
                .setDisplaySize(scaledSize, scaledSize);

            ControllerInventory(scene);

        }
    }
    
    // Position initially
    positionBag();
    
    // Update position when window resizes
    scene.scale.on('resize', positionBag);

    function destroy() {
        scene.scale.off('resize', positionBag);
        if (scene.bagIcon) {
            scene.bagIcon.destroy();
            scene.bagIcon = null;
        }
    }

    scene.events.once('shutdown', destroy);
    scene.events.once('destroy', destroy);
}