const test0 = async function (t) {
  await t.runForSteps(31);
  await t.runForSteps(1);
  t.mouseMove(-196, -32);
  await t.runForSteps(1);
  t.mouseMove(-225, -119);
  await t.runForSteps(1);
  await t.runForSteps(46);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Stella").direction, 60, 1, "Expected Sprite Stella to face in direction 60 +-1");
  t.assert.withinRange(t.getSprite("Stella").x, 49.99999999999999, 5, "Expected Sprite Stella to have x-position 49.99999999999999 +-5");
  t.assert.withinRange(t.getSprite("Stella").y, 100.00000000000003, 5, "Expected Sprite Stella to have y-position 100.00000000000003 +-5");
  await t.runForSteps(56);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Schorsch").direction, -60, 1, "Expected Sprite Schorsch to face in direction -60 +-1");
  t.assert.equal(t.getSprite("Stella").direction, 90, 1, "Expected Sprite Stella to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Schorsch").x, -44.019237886466854, 5, "Expected Sprite Schorsch to have x-position -44.019237886466854 +-5");
  t.assert.withinRange(t.getSprite("Schorsch").y, -95, 5, "Expected Sprite Schorsch to have y-position -95 +-5");
  t.assert.withinRange(t.getSprite("Stella").x, 100, 5, "Expected Sprite Stella to have x-position 100 +-5");
  t.assert.withinRange(t.getSprite("Stella").y, 100.00000000000003, 5, "Expected Sprite Stella to have y-position 100.00000000000003 +-5");
  await t.runForSteps(44);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Schorsch").direction, 90, 1, "Expected Sprite Schorsch to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Schorsch").x, -70.00000000000001, 5, "Expected Sprite Schorsch to have x-position -70.00000000000001 +-5");
  t.assert.withinRange(t.getSprite("Schorsch").y, -80, 5, "Expected Sprite Schorsch to have y-position -80 +-5");
  t.mouseMove(-109, 111);
  await t.runForSteps(1);
  t.mouseMove(-223, 112);
  await t.runForSteps(1);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.mouseMove(-134, 152);
  await t.runForSteps(1);
  await t.runForSteps(29);
  await t.runForSteps(1);
  t.mouseMove(-49, 133);
  await t.runForSteps(1);
  t.mouseMove(-49, -58);
  await t.runForSteps(1);
  t.mouseMove(191, -143);
  await t.runForSteps(1);
  t.mouseMove(-91, -163);
  await t.runForSteps(1);
  t.mouseMove(-213, 83);
  await t.runForSteps(1);
  await t.runForSteps(63);
  await t.runForSteps(1);
  t.mouseMove(-142, -109);
  await t.runForSteps(1);
  await t.runForSteps(12);
  await t.runForSteps(1);
  t.mouseMove(85, -78);
  await t.runForSteps(1);
  await t.runForSteps(56);
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
      seed: '1687938498514',
      type: 'standard',
  }
]
