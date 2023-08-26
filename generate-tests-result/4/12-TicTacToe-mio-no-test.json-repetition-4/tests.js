const test0 = async function (t) {
  t.mouseDown(true);
  await t.runForSteps(1);
  t.mouseDown(false);
  await t.runForSteps(1);
  t.mouseMove(-166, 98);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Tera").x, 26, 5, "Expected Sprite Tera to have x-position 26 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -7, 5, "Expected Sprite Tera to have y-position -7 +-5");
  t.mouseMove(-216, -72);
  await t.runForSteps(1);
  t.mouseMove(146, -164);
  await t.runForSteps(1);
  await t.runForSteps(400);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Tera").x, -74, 5, "Expected Sprite Tera to have x-position -74 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -7, 5, "Expected Sprite Tera to have y-position -7 +-5");
  await t.runForSteps(66);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Tera").x, 26, 5, "Expected Sprite Tera to have x-position 26 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -107, 5, "Expected Sprite Tera to have y-position -107 +-5");
  t.mouseMove(-55, -5);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Tera").x, 126, 5, "Expected Sprite Tera to have x-position 126 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -107, 5, "Expected Sprite Tera to have y-position -107 +-5");
  await t.runForSteps(56);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Tera").x, -74, 5, "Expected Sprite Tera to have x-position -74 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -107, 5, "Expected Sprite Tera to have y-position -107 +-5");
  t.mouseDown(true);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.withinRange(t.getSprite("Katze").x, -195, 5, "Expected Sprite Katze to have x-position -195 +-5");
  t.assert.withinRange(t.getSprite("Katze").y, 0, 5, "Expected Sprite Katze to have y-position 0 +-5");
  t.assert.equal(t.getSprite("Katze").getVariable("Meine Züge").value, "1", "Expected Meine Züge to have value 1 in Sprite Katze");
  t.dragSprite('Katze', -65.25139361974936, -89.58327993400968, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Katze").x, -65.25139361974936, 5, "Expected Sprite Katze to have x-position -65.25139361974936 +-5");
  t.assert.withinRange(t.getSprite("Katze").y, -89.58327993400968, 5, "Expected Sprite Katze to have y-position -89.58327993400968 +-5");
  await t.runForSteps(62);
  await t.runForSteps(1);
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937593666',
      type: 'standard',
  }
]
