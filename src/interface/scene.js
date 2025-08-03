import ConstructorModule from "@/module/scene1/constructor";
import Preload from "@/module/scene1/preload";
import Create from "@/module/scene1/create";
import Update from "@/module/scene1/update";
// This file is used to create the Phaser scene for the game.
// It imports the necessary modules and defines the scene class.
// The scene class is then exported for use in the main game file.

export default function createScene(Phaser) {

  return class Scene extends Phaser.Scene {

    constructor() { super({ key: "MainScene" }); ConstructorModule(this); }

    preload() { Preload(this); }

    create() { Create(this); }

    update() { Update(this); }

  }
}