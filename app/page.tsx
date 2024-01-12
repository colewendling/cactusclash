// app/page.tsx

'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import GameController from '../components/GameController';
import { GameActions } from '../game/main.js';

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [ropeDisabled, setRopeDisabled] = useState(false);
  const [ropeTimer, setRopeTimer] = useState(0);

  useEffect(() => {
    if (gameStarted) {
      import('../game/main').then(({ startGame }) => {
        startGame(canvasRef.current);
      });

      // Poll for changes in worldState every 100ms
      const interval = setInterval(() => {
        const state = GameActions.getWorldState?.();
        setRopeDisabled(!state?.hasRope);
        setRopeTimer(state?.ropeTimer ?? 0); // Update ropeTimer
      }, 100);

      // Cleanup on unmount
      return () => clearInterval(interval);
    }
  }, [gameStarted]);

  useEffect(() => {
    // Function to handle keypresses and map them to GameActions
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case ' ': // Spacebar for Jump
          GameActions.jump?.();
          event.preventDefault(); // Prevent scrolling
          break;
        case 'e': // E for Shoot
          GameActions.shoot?.();
          break;
        case 'r': // R for Use Rope
          GameActions.rope?.();
          break;
        case 'p': // P for Pause/Play
          GameActions.pause?.();
          break;
        case 'm': // P for Pause/Play
          GameActions.mute?.();
          break;
        default:
          break;
      }
    };

    if (gameStarted) {
      window.addEventListener('keydown', handleKeyPress);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [gameStarted]);

  return (
    <div className="flex flex-col items-center justify-center p-8">
      {!gameStarted ? (
        <>
          <div className="w-full h-[720px] relative max-w-[1280px] rounded-xl overflow-hidden shadow-xl shadow-black/30">
            <Image
              src="/placeholder/home.png"
              alt="Placeholder for Home Screen"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="flex items-center justify-center w-full p-8">
            <button
              className="text-xl font-semibold border-4 p-4 rounded-lg hover:text-orange-500 hover:bg-orange-500/20 hover:border-orange-800"
              onClick={() => setGameStarted(true)}
            >
              Play
            </button>
          </div>
        </>
      ) : (
        <div>
          {/* Game canvas */}
          <canvas
            ref={canvasRef}
            width={1280}
            height={720}
            className="rounded-xl shadow-xl shadow-black/30"
            style={{
              display: gameStarted ? 'inline-block' : 'none',
              width: 1280,
              height: 720,
            }}
          />

          {/* Game Controller Buttons */}
          <GameController ropeDisabled={ropeDisabled} ropeTimer={ropeTimer} />
        </div>
      )}
    </div>
  );
}
