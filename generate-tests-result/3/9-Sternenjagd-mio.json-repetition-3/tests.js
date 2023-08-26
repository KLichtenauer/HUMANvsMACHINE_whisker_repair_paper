const test0 = async function (t) {
  t.dragSprite('Kugelfisch', -164.25658566295675, -180, null);
  await t.runForSteps(1);
  t.end();
}
const test1 = async function (t) {
  t.dragSprite('Kugelfisch', -164.25658566295675, -180, null);
  await t.runForSteps(1);
  t.mouseMove(-203, -55);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -141, 5, "Expected Sprite Kugelfisch to have x-position -141 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  await t.runForSteps(87);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Fisch").direction, 102.88327651326856, 1, "Expected Sprite Fisch to face in direction 102.88327651326856 +-1");
  t.assert.equal(t.getSprite("Kugelfisch").direction, 180, 1, "Expected Sprite Kugelfisch to face in direction 180 +-1");
  t.assert.equal(t.getSprite("Qualle").direction, -116.65556576135728, 1, "Expected Sprite Qualle to face in direction -116.65556576135728 +-1");
  t.assert.withinRange(t.getSprite("Fisch").x, -203, 5, "Expected Sprite Fisch to have x-position -203 +-5");
  t.assert.withinRange(t.getSprite("Fisch").y, -55, 5, "Expected Sprite Fisch to have y-position -55 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -5, 5, "Expected Sprite Kugelfisch to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 42, 5, "Expected Sprite Kugelfisch to have y-position 42 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -57.24634926412381, 5, "Expected Sprite Qualle to have x-position -57.24634926412381 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, 18.164876061092087, 5, "Expected Sprite Qualle to have y-position 18.164876061092087 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").size, 70, 1, "Expected Sprite Kugelfisch to have size 70 +-1");
  t.end();
}
const test2 = async function (t) {
  t.dragSprite('Kugelfisch', -240, -89.76633724878545, null);
  await t.runForSteps(1);
  t.dragSprite('Stern', -189, -128, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Stern").x, 52, 5, "Expected Sprite Stern to have x-position 52 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, -149, 5, "Expected Sprite Stern to have y-position -149 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -141, 5, "Expected Sprite Kugelfisch to have x-position -141 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.end();
}
const test3 = async function (t) {
  t.dragSprite('Kugelfisch', -240, -89.76633724878545, null);
  await t.runForSteps(1);
  t.dragSprite('Kugelfisch', -154.94453419658936, -180, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -152.94453419658936, 5, "Expected Sprite Kugelfisch to have x-position -152.94453419658936 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, -180, 5, "Expected Sprite Kugelfisch to have y-position -180 +-5");
  t.end();
}
const test4 = async function (t) {
  t.dragSprite('Kugelfisch', -164.25658566295675, -180, null);
  await t.runForSteps(1);
  await t.runForSteps(87);
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
      seed: '1687936640803',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936640803',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936640803',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936640803',
      type: 'standard',
  },
  {
      test: test4,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936640803',
      type: 'standard',
  }
]
