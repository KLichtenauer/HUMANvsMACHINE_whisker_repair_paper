const test0 = async function (t) {
  await t.runForSteps(79);
  await t.runForSteps(1);
  t.mouseMove(138, -113);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Tera").x, -74, 5, "Expected Sprite Tera to have x-position -74 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -107, 5, "Expected Sprite Tera to have y-position -107 +-5");
  t.mouseDown(true);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Tera").x, -74, 5, "Expected Sprite Tera to have x-position -74 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -7, 5, "Expected Sprite Tera to have y-position -7 +-5");
  t.assert.equal(t.getSprite("Katze").getVariable("Meine Züge").value, "1", "Expected Meine Züge to have value 1 in Sprite Katze");
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(79);
  await t.runForSteps(1);
  t.mouseDown(true);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.withinRange(t.getSprite("Katze").x, 0, 5, "Expected Sprite Katze to have x-position 0 +-5");
  t.assert.withinRange(t.getSprite("Katze").y, 0, 5, "Expected Sprite Katze to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("Tera").x, -74, 5, "Expected Sprite Tera to have x-position -74 +-5");
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
      seed: '1687849336567',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849336567',
      type: 'standard',
  }
]
