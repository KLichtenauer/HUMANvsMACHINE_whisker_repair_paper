const test0 = async function (t) {
  t.mouseMove(-213, -143);
  await t.runForSteps(1);
  t.mouseMove(-83, 106);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Tera").x, -74, 5, "Expected Sprite Tera to have x-position -74 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -7, 5, "Expected Sprite Tera to have y-position -7 +-5");
  t.mouseDown(true);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Tera").x, 26, 5, "Expected Sprite Tera to have x-position 26 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -7, 5, "Expected Sprite Tera to have y-position -7 +-5");
  t.assert.equal(t.getSprite("Katze").getVariable("Meine Züge").value, "1", "Expected Meine Züge to have value 1 in Sprite Katze");
  t.end();
}
const test1 = async function (t) {
  t.mouseMove(-213, -143);
  await t.runForSteps(1);
  t.mouseDown(true);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.withinRange(t.getSprite("Katze").x, -213, 5, "Expected Sprite Katze to have x-position -213 +-5");
  t.assert.withinRange(t.getSprite("Katze").y, -143, 5, "Expected Sprite Katze to have y-position -143 +-5");
  t.assert.withinRange(t.getSprite("Tera").x, -74, 5, "Expected Sprite Tera to have x-position -74 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -7, 5, "Expected Sprite Tera to have y-position -7 +-5");
  t.end();
}
const test2 = async function (t) {
  t.mouseMove(-213, -143);
  await t.runForSteps(1);
  await t.runForSteps(83);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Tera").x, 26, 5, "Expected Sprite Tera to have x-position 26 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -107, 5, "Expected Sprite Tera to have y-position -107 +-5");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938887976',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938887976',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938887976',
      type: 'standard',
  }
]
