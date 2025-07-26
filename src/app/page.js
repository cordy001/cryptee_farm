"use client";
import { useEffect, useRef } from "react";
import createScene from "@/components/scene";

export default function Home() {
  const gameRef = useRef(null);

  useEffect(() => {
    let game;
    const handleResize = () => {
      if (game) {
        game.scale.resize(window.innerWidth, window.innerHeight);
      }
    };
    window.addEventListener("resize", handleResize);

    import("phaser").then(Phaser => {
      const Scene = createScene(Phaser);
      const config = {
        type: Phaser.AUTO,
        parent: gameRef.current,
        backgroundColor: "#000",
        scene: Scene,
        pixelArt: true,
        width: window.innerWidth,               // ← full window width
        height: window.innerHeight,             // ← full window height
        scale: {
          mode: Phaser.Scale.RESIZE,            // ← resize canvas to fill
          autoCenter: Phaser.Scale.CENTER_BOTH,
        },
        physics: {
          default: "arcade",
          arcade: { gravity: { y: 0 }, debug: false }
        }
      };
      game = new Phaser.Game(config);
      handleResize(); // in case the initial CSS container is smaller
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      if (game) game.destroy(true);
    };
  }, []);

  return (
    <div className="container">
      <div ref={gameRef} style={{ width: "100vw", height: "100vh" }} />
    </div>
  );
}