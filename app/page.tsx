// app/page.tsx
'use client'; // make it a client component

import { useState, useRef, useEffect } from 'react';

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
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Home</h1>
      {!gameStarted && (
        <button onClick={() => setGameStarted(true)}>Start Game</button>
      )}
      <canvas
        ref={canvasRef}
        width={1280}
        height={720}
        style={{ display: gameStarted ? 'inline-block' : 'none' }}
      />
    </div>
  );
}
