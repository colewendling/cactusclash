// game/scenes/world/environment.js

export function updateBackground(worldState) {
  if (worldState.isDay) {
    destroyAll('night');
    destroyAll('stars');

    add([
      sprite('night'),
      pos(0, 0),
      z(-10),
      fadeIn(60),
      opacity(0.6),
      'night',
    ]);

    const starPositions = [
      { x: 500, y: 100 },
      { x: 250, y: 100 },
      { x: 800, y: 30 },
    ];

    for (const starPosition of starPositions) {
      add([
        sprite('stars', { anim: 'twinkle' }),
        pos(starPosition.x, starPosition.y),
        z(-11),
        fadeIn(60),
        opacity(1),
        'stars',
      ]);
    }
  } else {
    destroyAll('day');
    add([sprite('day'), pos(0, 0), z(-10), fadeIn(60), opacity(1), 'day']);
  }
  worldState.isDay = !worldState.isDay;
}

export function updateSun(worldState) {
  if (worldState.isSun) {
    destroyAll('moon');
    add([
      sprite('sun'),
      scale(0.5),
      pos(900, -150),
      opacity(1),
      move(DOWN, 15),
      z(-5),
    ]);
  } else {
    destroyAll('sun');
    add([
      sprite('moon'),
      scale(0.5),
      pos(900, -150),
      opacity(1),
      move(DOWN, 15),
      z(-5),
      'moon',
    ]);
  }
  worldState.isSun = !worldState.isSun;
}

export function spawnGrass(worldState) {
  if (!worldState.isPaused) {
    add([
      sprite('grass'),
      pos(width() + 100, 660),
      scale(0.5),
      area(),
      move(LEFT, worldState.grassSpeed * worldState.speedMultiplier),
      z(2),
      opacity(1),
      'grass',
      'env',
    ]);
  }

  if (worldState.score < 10) {
    const positions = [
      { x: width() - 500, y: 660 },
      { x: width() - 1000, y: 660 },
      { x: width() - 1500, y: 660 },
      { x: width() - 2000, y: 660 },
    ];

    for (const position of positions) {
      add([
        sprite('grass'),
        pos(position.x, position.y),
        scale(0.5),
        area(),
        move(LEFT, worldState.grassSpeed),
        z(2),
        opacity(1),
        'grass',
        'env',
      ]);
    }
  }

  wait(1, () => {
    spawnGrass(worldState);
  });
}

export function spawnClouds(worldState) {
  const shouldFlip = Math.random() < 0.5 ? 1 : -1;
  const cloudScaleY = rand(0.8, 1.6);
  const cloudScaleX = cloudScaleY * shouldFlip;

  if (!worldState.isPaused) {
    add([
      sprite('clouds'),
      pos(-600, rand(50, 200)),
      scale(cloudScaleX, cloudScaleY),
      opacity(rand(0.2, 0.4)),
      color('#ffffff'),
      area(),
      move(RIGHT, worldState.cloudSpeed * worldState.speedMultiplier),
      z(-1),
      'cloud',
      'env',
    ]);
  }

  wait(rand(3, 8), () => {
    spawnClouds(worldState);
  });
}

export function spawnTrees(worldState) {
  const randomNum = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
  const largeTrees = ['cactus-large-1', 'cactus-large-2'];
  const smallTrees = ['cactus-small-1'];

  const shouldFlip = Math.random() < 0.5 ? 1 : -1;

  let randomTree;
  let treeScaleX;
  let treeScaleY;
  let treePosX;
  let treePosY;

  if (randomNum > 1) {
    randomTree = choose(largeTrees);
    treeScaleX = 0.5 * shouldFlip;
    treeScaleY = 0.5;
    treePosX = 1600;
    treePosY = 430;
  } else {
    randomTree = choose(smallTrees);
    treeScaleX = 0.4 * shouldFlip;
    treeScaleY = 0.4;
    treePosX = 1600;
    treePosY = 550;
  }

  if (!worldState.isPaused) {
    add([
      sprite(randomTree),
      pos(treePosX, treePosY),
      scale(treeScaleX, treeScaleY),
      opacity(1),
      area(),
      move(LEFT, worldState.treeSpeed * worldState.speedMultiplier),
      z(-1),
      'tree',
      'env',
    ]);
  }

  wait(rand(4, 16), () => {
    spawnTrees(worldState);
  });
}

export function initBackground(worldState) {
  setBackground(Color.fromHex('#c3cdb7'));

  const foreground = add([
    sprite('foreground'),
    pos(0, 0),
    z(-3),
    opacity(1),
    'foreground',
  ]);

  setBackground(Color.fromHex('#123549'));

  add([sprite('day'), pos(0, 0), z(-12), opacity(1), 'day']);

  spawnGrass(worldState);
  spawnClouds(worldState);
  spawnTrees(worldState);
}

function setCollisions(boundary, objectNames) {
  objectNames.forEach((objectName) => {
    boundary.onCollide(objectName, (obj) => {
      destroy(obj);
    });
  });
}

export function initBarriers(worldState) {
  add([
    rect(width(), 50),
    opacity(1),
    pos(0, height() - 50),
    area(width()),
    body({ isStatic: true }),
    z(1),
    color('#914236'),
    opacity(0),
    'ground',
  ]);

  const leftBoundary = add([
    rect(5, height()),
    opacity(1),
    pos(-200, 0),
    area(),
    body({ isStatic: true }),
    z(1),
    color('#914236'),
    'boundary',
  ]);

  const rightBoundary = add([
    rect(5, height()),
    opacity(1),
    pos(width() + 1000, 0),
    area(width()),
    body({ isStatic: true }),
    z(1),
    color('#914236'),
    'boundary',
  ]);

  const arrowBoundary = add([
    rect(5, height()),
    opacity(1),
    pos(width() - 5, 0),
    area(width()),
    opacity(0),
    body({ isStatic: true }),
    z(1),
    color('#914236'),
    'boundary',
  ]);

  const grassBoundary = add([
    rect(5, height()),
    opacity(1),
    pos(-1500, 500),
    area(),
    body({ isStatic: true }),
    z(1),
    color('#914236'),
    'boundary',
  ]);

  const leftBoundaryObjects = [
    'enemy',
    'ally',
    'bird',
    'cart',
    'tree',
    'ropeman',
    'coin',
  ];
  const rightBoundaryObjects = ['cloud', 'arrow'];
  const arrowBoundaryObjects = ['arrow'];
  const grassBoundaryObjects = ['grass'];

  setCollisions(leftBoundary, leftBoundaryObjects);
  setCollisions(rightBoundary, rightBoundaryObjects);
  setCollisions(arrowBoundary, arrowBoundaryObjects);
  setCollisions(grassBoundary, grassBoundaryObjects);
}
