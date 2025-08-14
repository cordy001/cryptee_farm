import ConstructorModule from "@/module/scenes/scene1/constructor";
import Preload from "@/module/scenes/scene1/preload";
import Create from "@/module/scenes/scene1/create";
import Update from "@/module/scenes/scene1/update";
import CheckConnections from "@/socket/checkConnections";
// This file is used to create the Phaser scene for the game.
// It imports the necessary modules and defines the scene class.
// The scene class is then exported for use in the main game file.

export default function createScene(Phaser) {

  return class Scene extends Phaser.Scene {

  constructor() { super({ key: "MainScene" }); ConstructorModule(this); CheckConnections(this); }

    preload() { Preload(this); }

    create() { Create(this); }

    update() { Update(this); }

  }
}