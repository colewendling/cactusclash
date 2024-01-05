// app/page.tsx
'use client'; // make it a client component

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [gameStarted, setGameStarted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (gameStarted) {
      // Dynamically import the main.js file and call startGame
      import('../game/main.js').then(({ startGame }) => {
        startGame(canvasRef.current);
      });
    }
  }, [gameStarted]);

  return (
    <div className="flex flex-col items-center justify-center p-8">
      {!gameStarted ? (
        <>
          <div className="w-full h-[720px] relative">
            <Image
              src="/placeholder/home.png"
              alt="Placeholder for Home Screen"
              layout="fill"
              objectFit="cover"
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
        <canvas
          ref={canvasRef}
          width={1280}
          height={720}
          style={{ display: gameStarted ? 'inline-block' : 'none' }}
        />
      )}
    </div>
  );
}
