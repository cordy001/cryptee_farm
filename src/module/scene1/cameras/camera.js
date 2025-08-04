import map from '@/module/scene1/map/map_create';

export default function Camera(scene) {
    // 4) Camera
    scene.cameras.main
      .startFollow(scene.player)
      .setZoom(8)
      .setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    // 5) Input & speed
    scene.cursors = scene.input.keyboard.createCursorKeys();
    scene.speed = 50;
}