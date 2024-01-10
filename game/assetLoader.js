// game/assetLoader.js

export function loadAssets(k) {
  const { loadSound, loadSprite, loadSpriteAtlas } = k;

  // Sounds
  loadSound('main', '/sounds/main.wav');
  loadSound('jump', '/sounds/jump.wav');
  loadSound('heal', '/sounds/heal.wav');
  loadSound('collision', '/sounds/collision.wav');
  loadSound('gameover', '/sounds/gameover.wav');
  loadSound('bird', '/sounds/bird.wav');
  loadSound('sparkle', '/sounds/sparkle.wav');
  loadSound('error', '/sounds/error.wav');
  loadSound('cart', '/sounds/cart.wav');
  loadSound('shoot', '/sounds/shoot.wav');
  loadSound('kill', '/sounds/kill.wav');
  loadSound('yeehaw', '/sounds/yeehaw.wav');
  loadSound('rope', '/sounds/rope.wav');
  loadSound('pop', '/sounds/pop.wav');

  // Sprites

  // Background
  loadSprite('foreground', '/sprites/background/foreground.png');
  loadSprite('day', '/sprites/background/day.png');
  loadSprite('night', '/sprites/background/night.png');
  loadSprite('combined', '/sprites/background/combined.png');

  // Object
  loadSprite('cactus-small-1', '/sprites/object/cactus-small-1.png');
  loadSprite('cactus-large-1', '/sprites/object/cactus-large-1.png');
  loadSprite('cactus-large-2', '/sprites/object/cactus-large-2.png');
  loadSprite('clouds', '/sprites/object/clouds.png');
  loadSprite('grass', '/sprites/object/grass.png');
  loadSprite('arrow', '/sprites/object/arrow.png');
  loadSprite('sun', '/sprites/object/sun.png');
  loadSprite('moon', '/sprites/object/moon.png');

  // Ui
  loadSprite('heart-icon', '/sprites/ui/heart-icon.png');
  loadSprite('shield-icon', '/sprites/ui/shield-icon.png');
  loadSprite('arrow-icon', '/sprites/ui/arrow-icon.png');
  loadSprite('rope-icon', '/sprites/ui/rope-icon.png');
  loadSprite('skull-icon', '/sprites/ui/skull-icon.png');
  loadSprite('coin-icon', '/sprites/ui/coin-icon.png');

  // Effect
  loadSprite('shield', '/sprites/effect/shield.png');

  // Animated
  loadSpriteAtlas('/sprites/npc/raider.png', {
    raider: {
      x: 10,
      y: 0,
      width: 370,
      height: 70,
      sliceX: 4,
      sliceY: 1,
      anims: { run: { from: 0, to: 3, loop: true, speed: 8 } },
    },
  });

  loadSpriteAtlas('/sprites/npc/raider-shoot.png', {
    raiderShoot: {
      x: 10,
      y: 0,
      width: 370,
      height: 70,
      sliceX: 4,
      sliceY: 1,
      anims: { run: { from: 0, to: 3, loop: true, speed: 8 } },
    },
  });

  loadSpriteAtlas('/sprites/npc/bird.png', {
    bird: {
      x: 10,
      y: 0,
      width: 300,
      height: 145,
      sliceX: 2,
      sliceY: 1,
      anims: { fly: { from: 0, to: 1, loop: true, speed: 3 } },
    },
  });

  loadSpriteAtlas('/sprites/npc/cart.png', {
    cart: {
      x: 0,
      y: 0,
      width: 600,
      height: 90,
      sliceX: 3,
      sliceY: 1,
      anims: { travel: { from: 0, to: 2, loop: true, speed: 4 } },
    },
  });

  loadSpriteAtlas('/sprites/object/rope.png', {
    rope: {
      x: 0,
      y: 0,
      width: 80,
      height: 598,
      sliceX: 2,
      sliceY: 1,
      anims: { swing: { from: 0, to: 1, loop: true, speed: 1.5 } },
    },
  });

  loadSpriteAtlas('/sprites/npc/rope-man.png', {
    ropeMan: {
      x: 10,
      y: 0,
      width: 370,
      height: 70,
      sliceX: 4,
      sliceY: 1,
      anims: { run: { from: 0, to: 3, loop: true, speed: 8 } },
    },
  });

  loadSpriteAtlas('/sprites/object/coin.png', {
    coin: {
      x: 0,
      y: 0,
      width: 1200,
      height: 250,
      sliceX: 6,
      sliceY: 1,
      anims: { spin: { from: 0, to: 5, loop: true, speed: 6 } },
    },
  });

  loadSpriteAtlas('/sprites/object/stars.png', {
    stars: {
      x: 0,
      y: 0,
      width: 600,
      height: 300,
      sliceX: 2,
      sliceY: 1,
      anims: { twinkle: { from: 0, to: 1, loop: true, speed: 0.3 } },
    },
  });
}
