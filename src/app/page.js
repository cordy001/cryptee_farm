"use client";
import { useEffect, useRef } from "react";
import createScene from "@/components/scene";

export default function Home() {
  const gameRef = useRef(null);

  useEffect(() => {
    let game;
    import("phaser").then(Phaser => {
      const Scene = createScene(Phaser);
      const config = {
        type: Phaser.AUTO,
        width: innerWidth / 2,
        height: "100%",
        parent: gameRef.current,
        backgroundColor: "#fff",
        scene: Scene,
        scale: {
          mode: Phaser.Scale.FIT,
          autoCenter: Phaser.Scale.CENTER_BOTH,
        },
        pixelArt: true,
      };
      game = new Phaser.Game(config);
    });

    return () => {
      if (game) {
        game.destroy(true);
      }
    };
  }, []);

  return (
    <div className="container">
      <div ref={gameRef} />
    </div>
  );
}