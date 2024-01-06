export function pauseGame(worldState, player) {
  worldState.isPaused = !worldState.isPaused;
  const allNPCS = get('npc');
  const allENV = get('env');

  if (worldState.isPaused) {
    player.paused = true;
    allENV.forEach((env) => {
      env.paused = true;
    });
    allNPCS.forEach((npc) => {
      npc.paused = true;
    });

    add([
      rect(width(), height()),
      opacity(0.3),
      pos(0, 0),
      area(),
      z(10),
      color('#d3d3d3'),
      'pauseOverlay',
    ]);

    add([
      text('Game Paused'),
      pos(640, 300),
      anchor('center'),
      color('#422808'),
      'pauseText',
    ]);
  } else {
    destroyAll('pauseOverlay');
    destroyAll('pauseText');
    player.paused = false;
    allENV.forEach((env) => {
      env.paused = false;
    });
    allNPCS.forEach((npc) => {
      npc.paused = false;
    });
  }
}
