export function shoot(worldState) {
  const arrow = add([
    sprite('arrow'),
    scale(1 / 3),
    opacity(1),
    pos(worldState.playerPos.x + 30, worldState.playerPos.y + 30),
    move(RIGHT, 4500),
    area(30, 30),
    body({ isStatic: false }),
    z(-1),
    color('#000000'),
    'arrow',
  ]);

  play('shoot');
  worldState.arrows--;

  arrow.onCollide('enemy', (enemy) => {
    play('kill');
    destroy(enemy);
    destroyAll('arrow');
    worldState.killCount += 1;
  });
}

export function useRope(worldState, player) {
  if (worldState.isUsingRope === false) {
    destroyAll('rope');
    destroyAll('platform');

    add([
      sprite('rope', { anim: 'swing' }),
      pos(130, -147),
      scale(1),
      color('#ffffff'),
      area(),
      z(-1),
      'rope',
    ]);

    worldState.isUsingRope = true;
    play('rope');
    add([
      rect(300, 15),
      opacity(0),
      pos(50, 470),
      area(30, 30),
      body({ isStatic: true }),
      z(10),
      color('#914236'),
      'platform',
    ]);

    player.use(pos(100, 370));
    setGravity(20000);

    // Start the timer using worldState.ropeTimer
    worldState.timerInterval = setInterval(() => {
      if (worldState.ropeTimer > 0) {
        worldState.ropeTimer -= 0.1;
      }

      // Ensure the timer never goes below zero
      if (worldState.ropeTimer < 0) {
        worldState.ropeTimer = 0;
      }

      // Timer has reached 0, toggle off rope and clean up
      if (worldState.ropeTimer === 0) {
        worldState.hasRope = false;
        worldState.isUsingRope = false;
        destroyAll('rope');
        destroyAll('platform');
        setGravity(worldState.gravity);

        // Clear the interval to stop the timer
        clearInterval(worldState.timerInterval);
      }
    }, 100); // Update timer every 1 second
  } else {
    worldState.isUsingRope = false;
    destroyAll('rope');
    destroyAll('platform');
    setGravity(worldState.gravity);

    // Clear the interval to stop the timer
    clearInterval(worldState.timerInterval);
  }
}
