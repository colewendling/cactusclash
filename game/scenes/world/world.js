// game/scenes/world/world.js

import * as UI from './ui.js';
import * as ENV from './environment.js';
import * as UTIL from './utility.js';
import * as ACTION from './actions.js';

export function setWorld(k, initialState) {
  // We can destructure the main Kaboom methods we'll use
  const {
    add,
    sprite,
    pos,
    area,
    body,
    health,
    z,
    // onKeyPress,
    play,
    destroy,
    destroyAll,
    go,
    anchor,
    move,
    color,
    scale,
    opacity,
    rand,
    wait,
    onUpdate,
    width,
    height,
    setGravity,
    LEFT,
  } = k;

  // Create (or override) the worldState object
  let worldState = {
    score: 0,
    coins: 0,
    killCount: 0,
    lives: 3,
    maxLives: 10,
    shieldLives: 0,
    maxshieldLives: 5,
    isShield: false,
    arrows: 0,
    maxArrows: 10,
    hasRope: true,
    ropeTimer: 3,
    isUsingRope: false,
    gravity: 1600,
    jumpPower: 850,
    entityCount: 0,
    textSize: 30,
    playerPos: {},
    raiderScale: 0.9,
    isShooterSprite: false,
    speedMultiplier: 1.0,
    timerInterval: null,
    pauseMusic: false,
    raiderSpawn: true,
    cloudSpeed: 90,
    treeSpeed: 80,
    grassSpeed: 200,
    isDay: true,
    isSun: true,
    devMode: false,
    isPaused: false,
    isMuted: false,
    isGameOver: false,
    ...initialState, // in case you pass any overrides
  };

  // Play background music
  const music = play('main', {
    volume: 0.5,
    loop: true,
  });

  music.play();

  // Create the player
  const player = add([
    sprite('raider', { anim: 'run' }),
    pos(100, 50),
    area(),
    body(),
    health(worldState.lives),
    z(1),
    'player',
  ]);

  setGravity(worldState.gravity);

  //----------------------------------------------------------------------
  // 1) ACTION FUNCTIONS
  //----------------------------------------------------------------------
  function doJump() {
    // same logic as your old onKeyPress('space')
    // music.paused = worldState.pauseMusic;
    if (player.isGrounded()) {
      player.jump(worldState.jumpPower);
      play('jump');
    }
  }

  function doShoot() {
    // same logic as your old onKeyPress('e')
    if (worldState.arrows > 0 && !worldState.isPaused) {
      ACTION.shoot(worldState);
    }
  }

  function doRope() {
    // same logic as your old onKeyPress('r')
    if (worldState.hasRope === true && !worldState.isPaused) {
      ACTION.rope(worldState, player);
    }
  }

  function doPause() {
    // same logic as your old onKeyPress('p')
    UTIL.pauseGame(worldState, player, music);
  }

  function doMute() {
    worldState.isMuted = !worldState.isMuted;
    if (worldState.isMuted) {
      music.paused = true;
    } else {
      music.paused = false;
    }
  }

  // onKeyPress('space', () => doJump());
  // onKeyPress('e', () => doShoot());
  // onKeyPress('r', () => doRope());
  // onKeyPress('p', () => doPause());
  // onKeyPress('m', () => doMute());

  ENV.initBackground(worldState);
  ENV.initBarriers(worldState);

  function checkshieldLives() {
    if (worldState.shieldLives > 0) {
      worldState.isShield = true;
      destroyAll('shield');
      add([
        sprite('shield'),
        scale(0.23),
        pos(worldState.playerPos.x - 10, worldState.playerPos.y - 10),
        area(),
        z(0),
        opacity(0.6),
        color('#ff007F'),
        'shield',
      ]);
    } else {
      destroyAll('shield');
      worldState.isShield = false;
    }
  }

  const npcTypes = {
    raider: {
      sprite: 'raider',
      anim: { anim: 'run' },
      posX: width() + 100,
      posY: height() - 50,
      scaleX: -worldState.raiderScale,
      scaleY: worldState.raiderScale,
      color: '#ff2200',
      speed: rand(300, 600) * worldState.speedMultiplier,
      frequency: rand(4, 8),
      tag: 'enemy',
      secondaryTag: 'npc',
    },
    dark: {
      sprite: 'raider',
      anim: { anim: 'run' },
      posX: width() + 100,
      posY: height() - 50,
      scaleX: -worldState.raiderScale,
      scaleY: worldState.raiderScale,
      color: '#000000',
      speed: rand(900, 1500) * worldState.speedMultiplier,
      frequency: rand(8, 16),
      tag: 'enemy',
      secondaryTag: 'npc',
    },
    ally: {
      sprite: 'raider',
      anim: { anim: 'run' },
      posX: width() + 100,
      posY: height() - 50,
      scaleX: -worldState.raiderScale,
      scaleY: worldState.raiderScale,
      color: '#2CE71E',
      speed: rand(400, 800) * worldState.speedMultiplier,
      frequency: rand(8, 16),
      tag: 'ally',
      secondaryTag: 'npc',
    },
    bird: {
      sprite: 'bird',
      anim: { anim: 'fly' },
      posX: width() + 400,
      posY: height() - 250,
      scaleX: 0.4,
      scaleY: 0.4,
      color: '#ff007F',
      speed: rand(100, 200) * worldState.speedMultiplier,
      frequency: rand(16, 32),
      tag: 'bird',
      secondaryTag: 'npc',
    },
    cart: {
      sprite: 'cart',
      anim: { anim: 'travel' },
      posX: width() + 100,
      posY: height() - 48,
      scaleX: 1.1,
      scaleY: 0.9,
      speed: rand(100, 200) * worldState.speedMultiplier,
      frequency: rand(30, 60),
      tag: 'cart',
      secondaryTag: 'npc',
    },
    ropeMan: {
      sprite: 'ropeMan',
      anim: { anim: 'run' },
      posX: width() + 100,
      posY: height() - 50,
      scaleX: -worldState.raiderScale,
      scaleY: worldState.raiderScale,
      speed: rand(300, 600) * worldState.speedMultiplier,
      frequency: rand(30, 60),
      tag: 'ropeman',
      secondaryTag: 'npc',
    },
    coin: {
      sprite: 'coin',
      anim: { anim: 'spin' },
      posX: width() + 100,
      posY: height() - 60,
      scaleX: 0.2,
      scaleY: 0.2,
      speed: rand(200, 300) * worldState.speedMultiplier,
      frequency: rand(2, 6),
      tag: 'coin',
      secondaryTag: 'npc',
    },
  };

  //----------------------------------------------------------------------
  // NPC SPAWNING
  //----------------------------------------------------------------------
  function spawn(npcType, shouldRepeat) {
    if (!worldState.isPaused) {
      const npc = add([
        sprite(npcType.sprite, npcType.anim || null),
        area(),
        pos(npcType.posX, npcType.posY),
        scale(npcType.scaleX, npcType.scaleY),
        anchor('botleft'),
        color(npcType.color || 'ffffff'),
        move(LEFT, npcType.speed * worldState.speedMultiplier),
        z(1),
        npcType.tag,
        npcType.secondaryTag,
      ]);
    }

    if (shouldRepeat === true) {
      wait(npcType.frequency, () => {
        spawn(npcType, shouldRepeat);
      });
    }
  }

  function spawnRaid(max) {
    const randomNum = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
    for (let i = 0; i < rand(3, max); i++) {
      if (randomNum > 1) {
        add([
          sprite('raider', { anim: 'run' }),
          area(),
          pos(width() + 100, height() - 50),
          scale(-worldState.raiderScale, worldState.raiderScale),
          anchor('botleft'),
          move(LEFT, rand(900, 1500) * worldState.speedMultiplier),
          z(1),
          color('#000000'),
          'enemy',
        ]);
      } else {
        add([
          sprite('raider', { anim: 'run' }),
          area(),
          pos(width() + 100, height() - 50),
          scale(-worldState.raiderScale, worldState.raiderScale),
          anchor('botleft'),
          move(LEFT, rand(300, 600) * worldState.speedMultiplier),
          z(1),
          color('#ff2200'),
          'enemy',
        ]);
      }
    }
  }

  //----------------------------------------------------------------------
  // PLAYER SPRITE UPDATES
  //----------------------------------------------------------------------
  function updatePlayerSprite() {
    if (worldState.arrows > 0 && worldState.isShooterSprite === false) {
      player.use(sprite('raiderShoot', { anim: 'run' }));
      worldState.isShooterSprite = true;
    } else if (worldState.arrows === 0 && worldState.isShooterSprite === true) {
      player.use(sprite('raider', { anim: 'run' }));
      worldState.isShooterSprite = false;
    }
  }

  //----------------------------------------------------------------------
  // TRIGGER EVENTS BASED ON SCORE
  //----------------------------------------------------------------------
  function triggerEvents() {
    // console.log('worldState.raiderSpawn', worldState.raiderSpawn);
    // console.log('worldState.score', worldState.score);

    if (!worldState.raiderSpawn) return;

    switch (worldState.score) {
      case 100:
        spawn(npcTypes.coin, true);
        spawn(npcTypes.raider, true);
        break;
      case 1000:
        spawn(npcTypes.ally, true);
        spawn(npcTypes.ropeMan, true);
        break;
      case 1500:
        spawn(npcTypes.bird, true);
        break;
      case 2000:
        spawn(npcTypes.cart, true);
        break;
      case 2500:
        spawn(npcTypes.dark, true);
        break;
      case 3000:
        // no immediate action
        break;
    }

    if (worldState.score % 1000 === 0 && worldState.score > 3000) {
      const raidMax = 6 + worldState.score / 1000;
      spawnRaid(raidMax);
    }

    if (worldState.score % 1000 === 0 && worldState.score > 500) {
      worldState.speedMultiplier *= 1.1;
    }

    if (worldState.score === 1 || worldState.score % 3600 === 0) {
      ENV.updateBackground(worldState);
    }

    if (worldState.score === 1 || worldState.score % 2800 === 0) {
      ENV.updateSun(worldState);
    }
  }

  player.onCollide('enemy', (enemy) => {
    destroy(enemy);
    if (worldState.shieldLives > 0) {
      play('sparkle');
      worldState.shieldLives--;
    } else {
      play('collision');
      if (worldState.lives > 0) {
        worldState.lives--;
      } else {
        music.paused = true;
        worldState.isGameOver = true
        go('lose', worldState);
      }
    }
  });

  player.onCollide('ally', (ally) => {
    destroy(ally);
    play('heal');
    if (worldState.lives < worldState.maxLives) {
      worldState.lives++;
      UI.updateHealth(worldState);
    } else {
      play('error');
    }
  });

  player.onCollide('bird', (bird) => {
    destroy(bird);
    if (worldState.shieldLives < worldState.maxshieldLives) {
      play('bird');
      worldState.shieldLives++;
    } else {
      play('error');
    }
  });

  player.onCollide('cart', (cart) => {
    destroy(cart);
    play('cart');
    const arrowsToAdd = worldState.coins;
    if (worldState.arrows < worldState.maxArrows) {
      const arrowsAfterCollision = worldState.arrows + arrowsToAdd;
      worldState.arrows = Math.min(arrowsAfterCollision, worldState.maxArrows);
      if (worldState.coins - arrowsAfterCollision < 0) {
        worldState.coins = 0;
      } else {
        worldState.coins = worldState.coins - arrowsAfterCollision;
      }
    }
  });

  player.onCollide('ropeman', (ropeMan) => {
    destroy(ropeMan);
    const yeehaw = play('yeehaw', { volume: 0.5 });
    yeehaw.speed = 1.5;
    worldState.hasRope = true;
    if (worldState.ropeTimer < 3) {
      worldState.ropeTimer = 3;
    }
  });

  player.onCollide('coin', (coin) => {
    destroy(coin);
    play('pop');
    worldState.coins++;
  });

  onUpdate(() => {
    if (!worldState.isPaused) {
      worldState.score++;
    }
    worldState.playerPos = player.pos;
    UI.updateHealth(worldState);
    UI.updateShield(worldState);
    UI.updateScore(worldState);
    UI.updateArrows(worldState);
    UI.updateKills(worldState);
    UI.updateCoins(worldState);
    UI.updateRope(worldState);
    UI.updateDev(worldState);
    checkshieldLives();
    triggerEvents();
    updatePlayerSprite();
  });

  return {
    doJump,
    doShoot,
    doRope,
    doPause,
    doMute,
    getWorldState: () => worldState,
  };
}
