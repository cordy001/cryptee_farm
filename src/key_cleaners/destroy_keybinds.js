export function useSceneCleanup(scene) {
  if (scene.__cleanup) return scene.__cleanup;

  const stack = new Set();
  const run = () => { for (const fn of Array.from(stack)) { try { fn(); } catch {} } stack.clear(); };
  scene.events.once('shutdown', run);
  scene.events.once('destroy', run);

  const api = {
    add(fn) { stack.add(fn); return fn; },
    onResize(cb) { scene.scale.on('resize', cb); api.add(() => scene.scale.off('resize', cb)); return cb; },
    addKey(code) {
      const key = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes[String(code).toUpperCase()]);
      api.add(() => { key.removeAllListeners(); key.destroy(); });
      return key;
    }
  };
  scene.__cleanup = api;
  return api;
}