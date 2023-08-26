const test0 = async function (t) {
  t.mouseDown(true);
  await t.runForSteps(1);
  t.mouseMove(133, 111);
  await t.runForSteps(1);
  t.mouseDown(false);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Tera").x, 26, 5, "Expected Sprite Tera to have x-position 26 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -7, 5, "Expected Sprite Tera to have y-position -7 +-5");
  t.mouseDown(true);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.withinRange(t.getSprite("Katze").x, -195, 5, "Expected Sprite Katze to have x-position -195 +-5");
  t.assert.withinRange(t.getSprite("Katze").y, 0, 5, "Expected Sprite Katze to have y-position 0 +-5");
  t.assert.equal(t.getSprite("Katze").getVariable("Meine Züge").value, "1", "Expected Meine Züge to have value 1 in Sprite Katze");
  t.end();
}
const test1 = async function (t) {
  t.mouseDown(true);
  await t.runForSteps(1);
  t.dragSprite('Katze', -55.07626787826068, -132.15537309910036, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Katze").x, -55.07626787826068, 5, "Expected Sprite Katze to have x-position -55.07626787826068 +-5");
  t.assert.withinRange(t.getSprite("Katze").y, -132.15537309910036, 5, "Expected Sprite Katze to have y-position -132.15537309910036 +-5");
  t.mouseMove(38, -49);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Tera").x, 26, 5, "Expected Sprite Tera to have x-position 26 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -7, 5, "Expected Sprite Tera to have y-position -7 +-5");
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Tera").x, 126, 5, "Expected Sprite Tera to have x-position 126 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, 93, 5, "Expected Sprite Tera to have y-position 93 +-5");
  t.dragSprite('Katze', -68.49100602239878, -96.05266131427514, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Katze").x, -68.49100602239878, 5, "Expected Sprite Katze to have x-position -68.49100602239878 +-5");
  t.assert.withinRange(t.getSprite("Katze").y, -96.05266131427514, 5, "Expected Sprite Katze to have y-position -96.05266131427514 +-5");
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
      seed: '1687938132601',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938132601',
      type: 'standard',
  }
]
