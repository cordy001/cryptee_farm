import DafaultCamera from '@/module/scenes/scene1/utilities/camera/InventoryCam/cameraElement';
import { useSceneCleanup } from '@/key_cleaners/destroy_keybinds';

export default function Inventory(scene) {
    const cleanup = useSceneCleanup(scene);

    function positionBagElement() {
        const cam = scene.cameras.main;
        const cameraInfo = DafaultCamera(cam);

        const pad = 12;
        const w = Math.round(cam.width * 0.05);  // 5% of viewport width
        const h = Math.round(cam.height * 0.02); // 2% of viewport height

        // Bottom-right anchor (origin 1,1). Use cameraInfo if it provides a custom anchor.
        const x = cameraInfo?.x ?? (cam.width - pad);
        const y = cameraInfo?.y ?? (cam.height - pad);

        if (scene.bagElement) {
            scene.bagElement
                .setPosition(x, y)
                .setSize(w, h); // or .setDisplaySize(w, h)
        } else {
            scene.bagElement = scene.add.rectangle(x, y, w, h, 0xffffff)
                .setScrollFactor(0)
                .setOrigin(1, 1)
                .setInteractive({ useHandCursor: true })
                .setDepth(1000)
                .setVisible(false);

            cleanup.add(() => { scene.bagElement.destroy(); scene.bagElement = null; });
        }
    }

    positionBagElement();
    cleanup.onResize(positionBagElement);
}