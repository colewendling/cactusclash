export function updateScore(worldState) {
  destroyAll("score-ui");
  add([
    text(worldState.score, {
      size: worldState.textSize,
    }),
    pos(25, 50),
    color("#000000"),
    "score-ui",
    z(2),
  ]);
}

export function updateHealth(worldState) {
  destroyAll("heart-icon");
  for (let i = 0; i < worldState.lives; i++) {
    add([
      sprite("heart-icon"),
      scale(0.07),
      pos(25 + i * 32, 100),
      z(2),
      "heart-icon",
    ]);
  }
}

export function updateKills(worldState) {
  destroyAll("skull-icon");
  destroyAll("kill-count");
  add([
    sprite("skull-icon"),
    scale(0.1),
    pos(width() - 100, 120),
    z(2),
    "skull-icon",
  ]);
  add([
    text(worldState.killCount, {
      size: worldState.textSize,
    }),
    pos(width() - 50, 126),
    color("#000000"),
    "kill-count",
    z(2),
  ]);
}

export function updateShield(worldState) {
  destroyAll("shield-icon");
  for (let i = 0; i < worldState.shieldLives; i++) {
    add([
      sprite("shield-icon"),
      scale(0.35),
      pos(25 + i * 32 + 6, 150),
      color("#ff007F"),
      z(2),
      "shield-icon",
    ]);
  }
}

export function updateArrows(worldState) {
  if (worldState.arrows > 0) {
    destroyAll("arrow-icon");

    add([
      sprite("arrow-icon"),
      scale(0.5),
      pos(25, 205),
      color("#964B00"),
      z(2),
      "arrow-icon",
    ]);

    destroyAll("arrow-ui");
    add([
      text(worldState.arrows, {
        size: worldState.textSize,
      }),
      pos(60, 205),
      color("#000000"),
      "arrow-ui",
      z(2),
    ]);
  } else {
    destroyAll("arrow-icon");
    destroyAll("arrow-ui");
  }
}

export function updateCoins(worldState) {
  if (worldState.coins > 0) {
    destroyAll("coin-icon");

    add([
      sprite("coin-icon"),
      scale(0.26),
      pos(20, 250),
      z(2),
      "coin-icon",
    ]);

    destroyAll("coin-ui");
    add([
      text(worldState.coins, {
        size: worldState.textSize,
      }),
      pos(62, 255),
      color("#000000"),
      "coin-ui",
      z(2),
    ]);
  } else {
    destroyAll("coin-icon");
    destroyAll("coin-ui");
  }
}

export function updateRope(worldState) {
  destroyAll("rope-icon");
  destroyAll("rope-timer-background");
  destroyAll("rope-timer");

  if (worldState.hasRope === true) {
    add([
      sprite("rope-icon"),
      scale(0.35),
      pos(width() - 100, 50),
      z(2),
      "rope-icon",
    ]);

    const maxRopeTimerHeight = 42;
    const ropeTimerHeight = Math.max(
      0,
      Math.min(
        maxRopeTimerHeight,
        (worldState.ropeTimer / 3) * maxRopeTimerHeight
      )
    );

    add([
      rect(8, maxRopeTimerHeight),
      pos(width() - 40, 50),
      color("#ff2200"),
      "rope-timer-background",
      z(2),
    ]);

    add([
      rect(8, ropeTimerHeight),
      pos(width() - 40, 50 + (maxRopeTimerHeight - ropeTimerHeight)),
      color("#4CBB17"),
      "rope-timer",
      z(2),
    ]);
  }
}

export function updateDev(worldState) {
  if (worldState.devMode) {
    const allObjs = get("*");
    worldState.entityCount = allObjs.length;
    destroyAll("entity-ui");
    add([
      text(worldState.entityCount, {
        size: worldState.textSize,
      }),
      pos(width() - 60, 200),
      color("#000000"),
      "entity-ui",
      z(2),
    ]);
  }
}
