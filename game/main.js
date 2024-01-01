import kaboom from 'kaboom';
import { loadAssets } from './assetLoader.js';
import { setWorld } from './scenes/world/world.js';
import { setLose } from './scenes/lose/lose.js';

let k = null;

export function startGame(canvas) {
  // Initialize kaboom only once
  if (!k) {
    k = kaboom({
      width: 1280,
      height: 720,
      canvas: canvas, // attach to the provided canvas
    });

    // Pass the kaboom context to loadAssets and scene functions
    loadAssets(k);

    k.scene('world', (worldState) => setWorld(k, worldState));
    k.scene('lose', (worldState) => setLose(k, worldState));
  }

  k.go('world');
}
