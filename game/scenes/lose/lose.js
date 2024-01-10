// game/scenes/lose/lose.js

export function setLose(k, worldState) {
  const {
    add,
    sprite,
    pos,
    z,
    opacity,
    play,
    text,
    anchor,
    color,
    onClick,
    onKeyPress,
    go,
  } = k;

  add([sprite('combined'), pos(0, 0), z(-5), opacity(1)]);
  play('gameover');

  const gameOver = add([
    text('Game Over'),
    pos(640, 300),
    anchor('center'),
    color('#422808'),
    'gameOver',
  ]);

  const finalScore = add([
    text(`Final Score: ${worldState.score}`),
    pos(640, 360),
    anchor('center'),
    color('#422808'),
    'finalScore',
  ]);

  const finalKillCount = add([
    text(`Kills: ${worldState.killCount}`),
    pos(640, 420),
    anchor('center'),
    color('#422808'),
    'finalScore',
  ]);

  onClick(() => go('world'));
  onKeyPress('space', () => {
    go('world');
  });
}
