export default function Update(scene) {
    const body = scene.player.body;
    body.setVelocity(0, 0);

    if (scene.cursors.left.isDown) {
    body.setVelocityX(-scene.speed);
    scene.player.anims.play('walk', true);
    scene.player.flipX = true;
    scene.lastDirections = 'side';
    }
    else if (scene.cursors.right.isDown) {
    body.setVelocityX(scene.speed);
    scene.player.anims.play('walk', true);
    scene.player.flipX = false;
    scene.lastDirections = 'side';
    }
    else if (scene.cursors.up.isDown) {
    body.setVelocityY(-scene.speed);
    scene.player.anims.play('walk_back', true);
    scene.lastDirections = 'back';
    scene.player.flipX = true;
    }
    else if (scene.cursors.down.isDown) {
    body.setVelocityY(scene.speed);
    scene.player.anims.play('walk_front', true);
    scene.lastDirections = 'front';
    scene.player.flipX = false;
    }

    // normalize diagonal speed
    body.velocity.normalize().scale(scene.speed);
    if (body.velocity.x === 0 && body.velocity.y === 0) {
        if (scene.player && scene.player.anims) {
            if (scene.lastDirections === 'front') {
            scene.player.anims.play('idle', true);
            }
            if (scene.lastDirections === 'back') {
            scene.player.anims.play('idle3', true);
            }
            if (scene.lastDirections === 'side') {
            scene.player.anims.play('idle2', true);
            }
        }
    }
}