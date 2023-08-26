const test0 = async function (t) {
  t.mouseMove(118, 98);
  await t.runForSteps(1);
  t.mouseMove(-191, 127);
  await t.runForSteps(1);
  await t.runForSteps(86);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Schorsch").direction, -90, 1, "Expected Sprite Schorsch to face in direction -90 +-1");
  t.assert.withinRange(t.getSprite("Schorsch").x, -40, 5, "Expected Sprite Schorsch to have x-position -40 +-5");
  t.assert.withinRange(t.getSprite("Schorsch").y, -80, 5, "Expected Sprite Schorsch to have y-position -80 +-5");
  t.assert.withinRange(t.getSprite("Stella").x, 100, 5, "Expected Sprite Stella to have x-position 100 +-5");
  t.assert.withinRange(t.getSprite("Stella").y, 100.00000000000003, 5, "Expected Sprite Stella to have y-position 100.00000000000003 +-5");
  await t.runForSteps(9);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Schorsch").direction, 150, 1, "Expected Sprite Schorsch to face in direction 150 +-1");
  t.assert.withinRange(t.getSprite("Schorsch").x, -70, 5, "Expected Sprite Schorsch to have x-position -70 +-5");
  t.assert.withinRange(t.getSprite("Schorsch").y, -80, 5, "Expected Sprite Schorsch to have y-position -80 +-5");
  t.mouseMove(77, -114);
  await t.runForSteps(1);
  await t.runForSteps(30);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Schorsch").direction, 90, 1, "Expected Sprite Schorsch to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Schorsch").x, -100.00000000000001, 5, "Expected Sprite Schorsch to have x-position -100.00000000000001 +-5");
  t.assert.withinRange(t.getSprite("Schorsch").y, -80, 5, "Expected Sprite Schorsch to have y-position -80 +-5");
  t.mouseMove(-111, 14);
  await t.runForSteps(1);
  await t.runForSteps(34);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Schorsch").direction, 60, 1, "Expected Sprite Schorsch to face in direction 60 +-1");
  t.assert.withinRange(t.getSprite("Schorsch").x, -95.98076211353317, 5, "Expected Sprite Schorsch to have x-position -95.98076211353317 +-5");
  t.assert.withinRange(t.getSprite("Schorsch").y, -95, 5, "Expected Sprite Schorsch to have y-position -95 +-5");
  t.mouseMove(124, -130);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Schorsch").direction, 90, 1, "Expected Sprite Schorsch to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Schorsch").x, -70.00000000000001, 5, "Expected Sprite Schorsch to have x-position -70.00000000000001 +-5");
  t.assert.withinRange(t.getSprite("Schorsch").y, -80, 5, "Expected Sprite Schorsch to have y-position -80 +-5");
  await t.runForSteps(20);
  await t.runForSteps(1);
  await t.runForSteps(21);
  await t.runForSteps(1);
  t.mouseMove(208, -114);
  await t.runForSteps(1);
  t.mouseMove(101, -110);
  await t.runForSteps(1);
  await t.runForSteps(99);
  await t.runForSteps(1);
  await t.runForSteps(2);
  await t.runForSteps(1);
  await t.runForSteps(11);
  await t.runForSteps(1);
  await t.runForSteps(86);
  await t.runForSteps(1);
  await t.runForSteps(46);
  await t.runForSteps(1);
  t.mouseMove(-208, -155);
  await t.runForSteps(1);
  t.mouseMove(63, 94);
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
      seed: '1687939237229',
      type: 'standard',
  }
]
