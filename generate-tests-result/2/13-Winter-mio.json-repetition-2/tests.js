const test0 = async function (t) {
  await t.runForSteps(10);
  await t.runForSteps(1);
  await t.runForSteps(44);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Stella").direction, -30, 1, "Expected Sprite Stella to face in direction -30 +-1");
  t.assert.withinRange(t.getSprite("Stella").x, 111.60254037844383, 5, "Expected Sprite Stella to have x-position 111.60254037844383 +-5");
  t.assert.withinRange(t.getSprite("Stella").y, 120.09618943233424, 5, "Expected Sprite Stella to have y-position 120.09618943233424 +-5");
  await t.runForSteps(64);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Schorsch").direction, 60, 1, "Expected Sprite Schorsch to face in direction 60 +-1");
  t.assert.equal(t.getSprite("Stella").direction, 90, 1, "Expected Sprite Stella to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Stella").x, 100, 5, "Expected Sprite Stella to have x-position 100 +-5");
  t.assert.withinRange(t.getSprite("Stella").y, 100.00000000000003, 5, "Expected Sprite Stella to have y-position 100.00000000000003 +-5");
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(10);
  await t.runForSteps(1);
  await t.runForSteps(44);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Stella").direction, -30, 1, "Expected Sprite Stella to face in direction -30 +-1");
  t.assert.withinRange(t.getSprite("Stella").x, 111.60254037844383, 5, "Expected Sprite Stella to have x-position 111.60254037844383 +-5");
  t.assert.withinRange(t.getSprite("Stella").y, 120.09618943233424, 5, "Expected Sprite Stella to have y-position 120.09618943233424 +-5");
  await t.runForSteps(11);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Stella").direction, 0, 1, "Expected Sprite Stella to face in direction 0 +-1");
  t.assert.withinRange(t.getSprite("Stella").x, 86.60254037844385, 5, "Expected Sprite Stella to have x-position 86.60254037844385 +-5");
  t.assert.withinRange(t.getSprite("Stella").y, 63.39745962155618, 5, "Expected Sprite Stella to have y-position 63.39745962155618 +-5");
  await t.runForSteps(20);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Schorsch").direction, -90, 1, "Expected Sprite Schorsch to face in direction -90 +-1");
  t.assert.equal(t.getSprite("Stella").direction, 90, 1, "Expected Sprite Stella to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Schorsch").x, -40, 5, "Expected Sprite Schorsch to have x-position -40 +-5");
  t.assert.withinRange(t.getSprite("Schorsch").y, -80, 5, "Expected Sprite Schorsch to have y-position -80 +-5");
  t.assert.withinRange(t.getSprite("Stella").x, 100, 5, "Expected Sprite Stella to have x-position 100 +-5");
  t.assert.withinRange(t.getSprite("Stella").y, 100.00000000000003, 5, "Expected Sprite Stella to have y-position 100.00000000000003 +-5");
  await t.runForSteps(64);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Schorsch").direction, 30, 1, "Expected Sprite Schorsch to face in direction 30 +-1");
  t.assert.withinRange(t.getSprite("Schorsch").x, -70, 5, "Expected Sprite Schorsch to have x-position -70 +-5");
  t.assert.withinRange(t.getSprite("Schorsch").y, -80, 5, "Expected Sprite Schorsch to have y-position -80 +-5");
  await t.runForSteps(19);
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
      seed: '1687850085740',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687850085740',
      type: 'standard',
  }
]
