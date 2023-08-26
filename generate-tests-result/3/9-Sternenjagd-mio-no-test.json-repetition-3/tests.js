const test0 = async function (t) {
  await t.runForSteps(48);
  await t.runForSteps(1);
  t.dragSprite('Stern', -7.175755634079391, -30.692657040734908, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Fisch").direction, -166.84095487756508, 1, "Expected Sprite Fisch to face in direction -166.84095487756508 +-1");
  t.assert.withinRange(t.getSprite("Stern").x, 67, 5, "Expected Sprite Stern to have x-position 67 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 8, 5, "Expected Sprite Stern to have y-position 8 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -45, 5, "Expected Sprite Kugelfisch to have x-position -45 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, 27.18416762018622, 5, "Expected Sprite Qualle to have x-position 27.18416762018622 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, 39.145201373068176, 5, "Expected Sprite Qualle to have y-position 39.145201373068176 +-5");
  t.end();
}
const test1 = async function (t) {
  t.mouseMove(46, -79);
  await t.runForSteps(1);
  t.dragSprite('Qualle', -135.3570172317244, -133.4410049520418, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -141, 5, "Expected Sprite Kugelfisch to have x-position -141 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -135.3570172317244, 5, "Expected Sprite Qualle to have x-position -135.3570172317244 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, -133.4410049520418, 5, "Expected Sprite Qualle to have y-position -133.4410049520418 +-5");
  t.mouseMove(212, -158);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -139, 5, "Expected Sprite Kugelfisch to have x-position -139 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.dragSprite('Kugelfisch', -160.65636358166307, -180, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -158.65636358166307, 5, "Expected Sprite Kugelfisch to have x-position -158.65636358166307 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, -180, 5, "Expected Sprite Kugelfisch to have y-position -180 +-5");
  t.end();
}
const test2 = async function (t) {
  t.mouseMove(-53, -91);
  await t.runForSteps(1);
  t.mouseMove(-173, -92);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -141, 5, "Expected Sprite Kugelfisch to have x-position -141 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  await t.runForSteps(79);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Fisch").direction, 92.17474411461005, 1, "Expected Sprite Fisch to face in direction 92.17474411461005 +-1");
  t.assert.equal(t.getSprite("Kugelfisch").direction, 180, 1, "Expected Sprite Kugelfisch to face in direction 180 +-1");
  t.assert.equal(t.getSprite("Qualle").direction, -126.33173057285069, 1, "Expected Sprite Qualle to face in direction -126.33173057285069 +-1");
  t.assert.withinRange(t.getSprite("Fisch").x, -173, 5, "Expected Sprite Fisch to have x-position -173 +-5");
  t.assert.withinRange(t.getSprite("Fisch").y, -92, 5, "Expected Sprite Fisch to have y-position -92 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -5, 5, "Expected Sprite Kugelfisch to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 58, 5, "Expected Sprite Kugelfisch to have y-position 58 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -33.782431202133914, 5, "Expected Sprite Qualle to have x-position -33.782431202133914 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, 10.3842209993276, 5, "Expected Sprite Qualle to have y-position 10.3842209993276 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").size, 70, 1, "Expected Sprite Kugelfisch to have size 70 +-1");
  await t.runForSteps(84);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Kugelfisch").direction, -90, 1, "Expected Sprite Kugelfisch to face in direction -90 +-1");
  t.assert.equal(t.getSprite("Qualle").direction, -126.33173057285066, 1, "Expected Sprite Qualle to face in direction -126.33173057285066 +-1");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -9, 5, "Expected Sprite Kugelfisch to have x-position -9 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, -60, 5, "Expected Sprite Kugelfisch to have y-position -60 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -133.67686840467795, 5, "Expected Sprite Qualle to have x-position -133.67686840467795 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, -63.080746270704864, 5, "Expected Sprite Qualle to have y-position -63.080746270704864 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").size, 80, 1, "Expected Sprite Kugelfisch to have size 80 +-1");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936839577',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936839577',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936839577',
      type: 'standard',
  }
]
