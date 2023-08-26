const test0 = async function (t) {
  t.mouseMove(190, 58);
  await t.runForSteps(1);
  t.mouseDown(true);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.withinRange(t.getSprite("Katze").x, 190, 5, "Expected Sprite Katze to have x-position 190 +-5");
  t.assert.withinRange(t.getSprite("Katze").y, 58, 5, "Expected Sprite Katze to have y-position 58 +-5");
  t.mouseDown(false);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Tera").x, 26, 5, "Expected Sprite Tera to have x-position 26 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -107, 5, "Expected Sprite Tera to have y-position -107 +-5");
  t.mouseMove(149, -103);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Tera").x, 26, 5, "Expected Sprite Tera to have x-position 26 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -7, 5, "Expected Sprite Tera to have y-position -7 +-5");
  await t.runForSteps(54);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Tera").x, 26, 5, "Expected Sprite Tera to have x-position 26 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -107, 5, "Expected Sprite Tera to have y-position -107 +-5");
  await t.runForSteps(10);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Tera").x, 126, 5, "Expected Sprite Tera to have x-position 126 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -107, 5, "Expected Sprite Tera to have y-position -107 +-5");
  t.mouseDown(true);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.withinRange(t.getSprite("Katze").x, -195, 5, "Expected Sprite Katze to have x-position -195 +-5");
  t.assert.withinRange(t.getSprite("Katze").y, 0, 5, "Expected Sprite Katze to have y-position 0 +-5");
  t.assert.equal(t.getSprite("Katze").getVariable("Meine Züge").value, "1", "Expected Meine Züge to have value 1 in Sprite Katze");
  await t.runForSteps(20);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Tera").x, -74, 5, "Expected Sprite Tera to have x-position -74 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, 93, 5, "Expected Sprite Tera to have y-position 93 +-5");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938465561',
      type: 'standard',
  }
]
