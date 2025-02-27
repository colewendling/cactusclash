// app/page.tsx

"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import GameController from "../components/GameController";
import ScaledCanvas from "../components/ScaledCanvas";
import { GameActions } from "../game/main.js";
import HowToPlay from "@/components/HowToPlay";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [ropeDisabled, setRopeDisabled] = useState(false);
  const [ropeTimer, setRopeTimer] = useState(0);
  const [arrowCount, setArrowCount] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    if (gameStarted) {
      import("../game/main").then(({ startGame }) => {
        startGame(canvasRef.current);
      });

      // Poll for changes in worldState every 100ms
      const interval = setInterval(() => {
        const state = GameActions.getWorldState?.();
        setRopeDisabled(!state?.hasRope);
        setRopeTimer(state?.ropeTimer ?? 0); // Update ropeTimer
        setArrowCount(state?.arrows ?? 0);
        setIsGameOver(state?.isGameOver ?? false);
      }, 100);

      // Cleanup on unmount
      return () => clearInterval(interval);
    }
  }, [gameStarted]);

  useEffect(() => {
    // Function to handle keypresses and map them to GameActions
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case " ": // Spacebar for Jump
          GameActions.jump?.();
          event.preventDefault(); // Prevent scrolling
          break;
        case "e": // E for Shoot
          GameActions.shoot?.();
          break;
        case "r": // R for Use Rope
          GameActions.rope?.();
          break;
        case "p": // P for Pause/Play
          GameActions.pause?.();
          break;
        case "m": // P for Pause/Play
          GameActions.mute?.();
          break;
        default:
          break;
      }
    };

    if (gameStarted) {
      window.addEventListener("keydown", handleKeyPress);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [gameStarted]);

  return (
    <div className="flex flex-col items-center justify-center w-full px-2 py-10">
      {!gameStarted ? (
        <>
          <ScaledCanvas>
            <div
              style={{ position: "relative", width: "1280px", height: "720px" }}
            >
              <Image
                src="/placeholder/home.png"
                alt="Home Screen Placeholder"
                fill
                className="object-cover rounded-xl shadow-xl shadow-black/30"
              />
            </div>
          </ScaledCanvas>

          <button
            className="text-lg text-white font-semibold border-4 py-2 px-4 rounded-2xl mt-10 hover:text-orange-500 hover:bg-orange-500/20 hover:border-orange-800 font-optician uppercase"
            onClick={() => setGameStarted(true)}
          >
            Play
          </button>
        </>
      ) : (
        <div className="w-full">
          <ScaledCanvas>
            <canvas
              ref={canvasRef}
              width={1280}
              height={720}
              className="rounded-xl shadow-xl shadow-black/30"
            />
          </ScaledCanvas>
          <GameController
            ropeDisabled={ropeDisabled}
            ropeTimer={ropeTimer}
            arrowCount={arrowCount}
            isGameOver={isGameOver}
          />
        </div>
      )}
      <HowToPlay />
    </div>
  );
}
