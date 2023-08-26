const test0 = async function (t) {
  t.mouseMove(129, -71);
  await t.runForSteps(1);
  await t.runForSteps(58);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Tera").x, 126, 5, "Expected Sprite Tera to have x-position 126 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -7, 5, "Expected Sprite Tera to have y-position -7 +-5");
  t.mouseMove(26, -116);
  await t.runForSteps(1);
  t.mouseDown(true);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Katze").getVariable("Meine Züge").value, "1", "Expected Meine Züge to have value 1 in Sprite Katze");
  t.dragSprite('Katze', -74.49829566029845, -104.9951351300979, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Katze").x, -74.49829566029845, 5, "Expected Sprite Katze to have x-position -74.49829566029845 +-5");
  t.assert.withinRange(t.getSprite("Katze").y, -104.9951351300979, 5, "Expected Sprite Katze to have y-position -104.9951351300979 +-5");
  t.assert.withinRange(t.getSprite("Tera").x, -74, 5, "Expected Sprite Tera to have x-position -74 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, 93, 5, "Expected Sprite Tera to have y-position 93 +-5");
  t.end();
}
const test1 = async function (t) {
  t.mouseMove(201, -177);
  await t.runForSteps(1);
  t.mouseDown(true);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.withinRange(t.getSprite("Katze").x, 201, 5, "Expected Sprite Katze to have x-position 201 +-5");
  t.assert.withinRange(t.getSprite("Katze").y, -177, 5, "Expected Sprite Katze to have y-position -177 +-5");
  t.assert.withinRange(t.getSprite("Tera").x, -74, 5, "Expected Sprite Tera to have x-position -74 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -7, 5, "Expected Sprite Tera to have y-position -7 +-5");
  t.mouseMove(-18, 26);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Tera").x, 26, 5, "Expected Sprite Tera to have x-position 26 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -7, 5, "Expected Sprite Tera to have y-position -7 +-5");
  t.dragSprite('Katze', -83.51186884883114, -5.599782698012042, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Katze").x, -83.51186884883114, 5, "Expected Sprite Katze to have x-position -83.51186884883114 +-5");
  t.assert.withinRange(t.getSprite("Katze").y, -5.599782698012042, 5, "Expected Sprite Katze to have y-position -5.599782698012042 +-5");
  t.dragSprite('Katze', -143.17147028094806, 7.28832238260469, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Katze").x, -143.17147028094806, 5, "Expected Sprite Katze to have x-position -143.17147028094806 +-5");
  t.assert.withinRange(t.getSprite("Katze").y, 7.28832238260469, 5, "Expected Sprite Katze to have y-position 7.28832238260469 +-5");
  t.mouseDown(false);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Tera").x, 126, 5, "Expected Sprite Tera to have x-position 126 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, 93, 5, "Expected Sprite Tera to have y-position 93 +-5");
  t.mouseMove(12, -101);
  await t.runForSteps(1);
  t.mouseMove(23, 128);
  await t.runForSteps(1);
  t.mouseDown(true);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Katze").x, 23, 5, "Expected Sprite Katze to have x-position 23 +-5");
  t.assert.withinRange(t.getSprite("Katze").y, 128, 5, "Expected Sprite Katze to have y-position 128 +-5");
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
      seed: '1687849462976',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849462976',
      type: 'standard',
  }
]
