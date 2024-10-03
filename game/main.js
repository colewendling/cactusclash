// game/main.js

import kaboom from 'kaboom';
import { loadAssets } from './assetLoader.js';
import { setWorld } from './scenes/world/world.js';
import { setLose } from './scenes/lose/lose.js';

export let GameActions = {};

let k = null;

export function startGame(canvas) {
  // Initialize kaboom only once
  if (!k) {
    k = kaboom({
      width: 1280,
      height: 720,
      canvas: canvas, // attach to the provided canvas
      background: [0, 0, 0],
    });

    // Load assets
    loadAssets(k);

    let worldActions = null;

    k.scene('world', (initialState) => {
      // setWorld now returns the object with doJump, doShoot, etc.
      worldActions = setWorld(k, initialState);
    });

    k.scene('lose', (worldState) => setLose(k, worldState));

    k.go('world');

    GameActions = {
      jump: () => worldActions?.doJump(),
      shoot: () => worldActions?.doShoot(),
      rope: () => worldActions?.doRope(),
      pause: () => worldActions?.doPause(),
      mute: () => worldActions?.doMute(),
      getWorldState: () => worldActions?.getWorldState(),
    };
  } else {
    k.go('world');
  }
}
