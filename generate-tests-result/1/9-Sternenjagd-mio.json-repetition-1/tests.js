const test0 = async function (t) {
  t.dragSprite('Qualle', -189, -128, null);
  await t.runForSteps(1);
  t.end();
}
const test1 = async function (t) {
  t.dragSprite('Kugelfisch', -123.8014790585879, -97.22634348870291, null);
  await t.runForSteps(1);
  t.mouseMove(-166, -78);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -141, 5, "Expected Sprite Kugelfisch to have x-position -141 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  await t.runForSteps(14);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -111, 5, "Expected Sprite Kugelfisch to have x-position -111 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  await t.runForSteps(66);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Fisch").direction, 97.54492903875683, 1, "Expected Sprite Fisch to face in direction 97.54492903875683 +-1");
  t.assert.equal(t.getSprite("Kugelfisch").direction, 180, 1, "Expected Sprite Kugelfisch to face in direction 180 +-1");
  t.assert.equal(t.getSprite("Qualle").direction, -124.77783136636387, 1, "Expected Sprite Qualle to face in direction -124.77783136636387 +-1");
  t.assert.withinRange(t.getSprite("Fisch").x, -166, 5, "Expected Sprite Fisch to have x-position -166 +-5");
  t.assert.withinRange(t.getSprite("Fisch").y, -78, 5, "Expected Sprite Fisch to have y-position -78 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -5, 5, "Expected Sprite Kugelfisch to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 54, 5, "Expected Sprite Kugelfisch to have y-position 54 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -38.707956292715956, 5, "Expected Sprite Qualle to have x-position -38.707956292715956 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, 10.397252574502803, 5, "Expected Sprite Qualle to have y-position 10.397252574502803 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").size, 70, 1, "Expected Sprite Kugelfisch to have size 70 +-1");
  t.end();
}
const test2 = async function (t) {
  t.dragSprite('Qualle', -189, -128, null);
  await t.runForSteps(1);
  t.dragSprite('Stern', -189, -128, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Stern").x, 97, 5, "Expected Sprite Stern to have x-position 97 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 103, 5, "Expected Sprite Stern to have y-position 103 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -141, 5, "Expected Sprite Kugelfisch to have x-position -141 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.end();
}
const test3 = async function (t) {
  t.dragSprite('Qualle', -189, -128, null);
  await t.runForSteps(1);
  t.dragSprite('Kugelfisch', -240, -170.24741738016434, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -238, 5, "Expected Sprite Kugelfisch to have x-position -238 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, -170.24741738016434, 5, "Expected Sprite Kugelfisch to have y-position -170.24741738016434 +-5");
  await t.runForSteps(72);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -208, 5, "Expected Sprite Kugelfisch to have x-position -208 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, -170.24741738016434, 5, "Expected Sprite Kugelfisch to have y-position -170.24741738016434 +-5");
  t.end();
}
const test4 = async function (t) {
  t.dragSprite('Kugelfisch', -123.8014790585879, -97.22634348870291, null);
  await t.runForSteps(1);
  await t.runForSteps(66);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Fisch").direction, -171.2977762100532, 1, "Expected Sprite Fisch to face in direction -171.2977762100532 +-1");
  t.assert.equal(t.getSprite("Qualle").direction, -145.22216863363613, 1, "Expected Sprite Qualle to face in direction -145.22216863363613 +-1");
  t.assert.withinRange(t.getSprite("Fisch").x, 0, 5, "Expected Sprite Fisch to have x-position 0 +-5");
  t.assert.withinRange(t.getSprite("Fisch").y, 0, 5, "Expected Sprite Fisch to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -45, 5, "Expected Sprite Kugelfisch to have x-position -45 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, 27.18416762018622, 5, "Expected Sprite Qualle to have x-position 27.18416762018622 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, 39.145201373068176, 5, "Expected Sprite Qualle to have y-position 39.145201373068176 +-5");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849336114',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849336114',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849336114',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849336114',
      type: 'standard',
  },
  {
      test: test4,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849336114',
      type: 'standard',
  }
]
