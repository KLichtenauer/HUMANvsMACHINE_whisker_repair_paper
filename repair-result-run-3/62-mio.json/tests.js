const test0 = async function (t) {
  t.mouseMove(2, -70);
  await t.runForSteps(1);
  await t.runForSteps(54);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Stella").direction, -30, 1, "Expected Sprite Stella to face in direction -30 +-1");
  t.assert.withinRange(t.getSprite("Stella").x, 111.60254037844383, 5, "Expected Sprite Stella to have x-position 111.60254037844383 +-5");
  t.assert.withinRange(t.getSprite("Stella").y, 120.09618943233424, 5, "Expected Sprite Stella to have y-position 120.09618943233424 +-5");
  t.mouseMove(-14, -68);
  await t.runForSteps(1);
  t.mouseMove(117, -129);
  await t.runForSteps(1);
  t.mouseMove(126, 156);
  await t.runForSteps(1);
  t.mouseMove(215, -94);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Stella").direction, 150, 1, "Expected Sprite Stella to face in direction 150 +-1");
  t.assert.withinRange(t.getSprite("Stella").x, 86.60254037844385, 5, "Expected Sprite Stella to have x-position 86.60254037844385 +-5");
  t.assert.withinRange(t.getSprite("Stella").y, 163.39745962155618, 5, "Expected Sprite Stella to have y-position 163.39745962155618 +-5");
  t.mouseMove(102, 162);
  await t.runForSteps(1);
  await t.runForSteps(28);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Schorsch").direction, -90, 1, "Expected Sprite Schorsch to face in direction -90 +-1");
  t.assert.equal(t.getSprite("Stella").direction, 90, 1, "Expected Sprite Stella to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Schorsch").x, -40, 5, "Expected Sprite Schorsch to have x-position -40 +-5");
  t.assert.withinRange(t.getSprite("Schorsch").y, -80, 5, "Expected Sprite Schorsch to have y-position -80 +-5");
  t.assert.withinRange(t.getSprite("Stella").x, 100, 5, "Expected Sprite Stella to have x-position 100 +-5");
  t.assert.withinRange(t.getSprite("Stella").y, 100.00000000000003, 5, "Expected Sprite Stella to have y-position 100.00000000000003 +-5");
  t.mouseMove(73, 110);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Schorsch").direction, -60, 1, "Expected Sprite Schorsch to face in direction -60 +-1");
  t.assert.withinRange(t.getSprite("Schorsch").x, -70, 5, "Expected Sprite Schorsch to have x-position -70 +-5");
  t.assert.withinRange(t.getSprite("Schorsch").y, -80, 5, "Expected Sprite Schorsch to have y-position -80 +-5");
  t.end();
}
const test1 = async function (t) {
  t.mouseMove(2, -70);
  await t.runForSteps(1);
  await t.runForSteps(54);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Stella").direction, -30, 1, "Expected Sprite Stella to face in direction -30 +-1");
  t.assert.withinRange(t.getSprite("Stella").x, 111.60254037844383, 5, "Expected Sprite Stella to have x-position 111.60254037844383 +-5");
  t.assert.withinRange(t.getSprite("Stella").y, 120.09618943233424, 5, "Expected Sprite Stella to have y-position 120.09618943233424 +-5");
  t.mouseMove(-14, -68);
  await t.runForSteps(1);
  t.mouseMove(117, -129);
  await t.runForSteps(1);
  t.mouseMove(126, 156);
  await t.runForSteps(1);
  await t.runForSteps(28);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Schorsch").direction, -90, 1, "Expected Sprite Schorsch to face in direction -90 +-1");
  t.assert.equal(t.getSprite("Stella").direction, 90, 1, "Expected Sprite Stella to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Schorsch").x, -40, 5, "Expected Sprite Schorsch to have x-position -40 +-5");
  t.assert.withinRange(t.getSprite("Schorsch").y, -80, 5, "Expected Sprite Schorsch to have y-position -80 +-5");
  t.assert.withinRange(t.getSprite("Stella").x, 100, 5, "Expected Sprite Stella to have x-position 100 +-5");
  t.assert.withinRange(t.getSprite("Stella").y, 100.00000000000003, 5, "Expected Sprite Stella to have y-position 100.00000000000003 +-5");
  await t.runForSteps(17);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Schorsch").direction, 0, 1, "Expected Sprite Schorsch to face in direction 0 +-1");
  t.assert.withinRange(t.getSprite("Schorsch").x, -70, 5, "Expected Sprite Schorsch to have x-position -70 +-5");
  t.assert.withinRange(t.getSprite("Schorsch").y, -80, 5, "Expected Sprite Schorsch to have y-position -80 +-5");
  await t.runForSteps(62);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Schorsch").direction, 90, 1, "Expected Sprite Schorsch to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Schorsch").x, -70.00000000000001, 5, "Expected Sprite Schorsch to have x-position -70.00000000000001 +-5");
  t.assert.withinRange(t.getSprite("Schorsch").y, -80, 5, "Expected Sprite Schorsch to have y-position -80 +-5");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936639801',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936639801',
      type: 'standard',
  }
]
