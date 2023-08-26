const test0 = async function (t) {
  t.dragSprite('Stern', -166.84096309252305, -150.6592037106675, null);
  await t.runForSteps(1);
  t.end();
}
const test1 = async function (t) {
  t.mouseMove(133, -103);
  await t.runForSteps(1);
  await t.runForSteps(71);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Fisch").direction, -88.06506769044722, 1, "Expected Sprite Fisch to face in direction -88.06506769044722 +-1");
  t.assert.equal(t.getSprite("Kugelfisch").direction, 180, 1, "Expected Sprite Kugelfisch to face in direction 180 +-1");
  t.assert.equal(t.getSprite("Qualle").direction, 154.6256827147793, 1, "Expected Sprite Qualle to face in direction 154.6256827147793 +-1");
  t.assert.withinRange(t.getSprite("Fisch").x, 133, 5, "Expected Sprite Fisch to have x-position 133 +-5");
  t.assert.withinRange(t.getSprite("Fisch").y, -103, 5, "Expected Sprite Fisch to have y-position -103 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -5, 5, "Expected Sprite Kugelfisch to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 76, 5, "Expected Sprite Kugelfisch to have y-position 76 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, 86.85359480455945, 5, "Expected Sprite Qualle to have x-position 86.85359480455945 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, -5.703362539734, 5, "Expected Sprite Qualle to have y-position -5.703362539734 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").size, 70, 1, "Expected Sprite Kugelfisch to have size 70 +-1");
  t.end();
}
const test2 = async function (t) {
  t.dragSprite('Stern', -166.84096309252305, -150.6592037106675, null);
  await t.runForSteps(1);
  t.dragSprite('Kugelfisch', -189, -128, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -187, 5, "Expected Sprite Kugelfisch to have x-position -187 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, -128, 5, "Expected Sprite Kugelfisch to have y-position -128 +-5");
  t.end();
}
const test3 = async function (t) {
  t.mouseMove(133, -103);
  await t.runForSteps(1);
  t.dragSprite('Stern', -220.72443941069628, -131.29264659293108, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Stern").x, 0, 5, "Expected Sprite Stern to have x-position 0 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, -8, 5, "Expected Sprite Stern to have y-position -8 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -141, 5, "Expected Sprite Kugelfisch to have x-position -141 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  await t.runForSteps(98);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Fisch").direction, -54.462322208025626, 1, "Expected Sprite Fisch to face in direction -54.462322208025626 +-1");
  t.assert.equal(t.getSprite("Kugelfisch").direction, 180, 1, "Expected Sprite Kugelfisch to face in direction 180 +-1");
  t.assert.equal(t.getSprite("Qualle").direction, 154.62568271477926, 1, "Expected Sprite Qualle to face in direction 154.62568271477926 +-1");
  t.assert.withinRange(t.getSprite("Fisch").x, 133, 5, "Expected Sprite Fisch to have x-position 133 +-5");
  t.assert.withinRange(t.getSprite("Fisch").y, -103, 5, "Expected Sprite Fisch to have y-position -103 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -5, 5, "Expected Sprite Kugelfisch to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 30, 5, "Expected Sprite Kugelfisch to have y-position 30 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, 112.2225809956051, 5, "Expected Sprite Qualle to have x-position 112.2225809956051 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, -59.19218884615554, 5, "Expected Sprite Qualle to have y-position -59.19218884615554 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").size, 70, 1, "Expected Sprite Kugelfisch to have size 70 +-1");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938993304',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938993304',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938993304',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938993304',
      type: 'standard',
  }
]
