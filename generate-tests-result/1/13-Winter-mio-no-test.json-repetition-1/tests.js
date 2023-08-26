const test0 = async function (t) {
  t.mouseMove(-81, -127);
  await t.runForSteps(1);
  t.mouseMove(191, -69);
  await t.runForSteps(1);
  await t.runForSteps(35);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Stella").direction, 60, 1, "Expected Sprite Stella to face in direction 60 +-1");
  t.assert.withinRange(t.getSprite("Stella").x, 106.69872981077802, 5, "Expected Sprite Stella to have x-position 106.69872981077802 +-5");
  t.assert.withinRange(t.getSprite("Stella").y, 101.7949192431123, 5, "Expected Sprite Stella to have y-position 101.7949192431123 +-5");
  t.mouseMove(12, 5);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Stella").direction, -120, 1, "Expected Sprite Stella to face in direction -120 +-1");
  t.assert.withinRange(t.getSprite("Stella").x, 149.99999999999994, 5, "Expected Sprite Stella to have x-position 149.99999999999994 +-5");
  t.assert.withinRange(t.getSprite("Stella").y, 126.7949192431123, 5, "Expected Sprite Stella to have y-position 126.7949192431123 +-5");
  t.mouseMove(-40, -60);
  await t.runForSteps(1);
  await t.runForSteps(81);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Schorsch").direction, 60, 1, "Expected Sprite Schorsch to face in direction 60 +-1");
  t.assert.equal(t.getSprite("Stella").direction, 90, 1, "Expected Sprite Stella to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Stella").x, 100, 5, "Expected Sprite Stella to have x-position 100 +-5");
  t.assert.withinRange(t.getSprite("Stella").y, 100.00000000000003, 5, "Expected Sprite Stella to have y-position 100.00000000000003 +-5");
  await t.runForSteps(15);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Schorsch").direction, -60, 1, "Expected Sprite Schorsch to face in direction -60 +-1");
  t.assert.withinRange(t.getSprite("Schorsch").x, -44.019237886466854, 5, "Expected Sprite Schorsch to have x-position -44.019237886466854 +-5");
  t.assert.withinRange(t.getSprite("Schorsch").y, -95, 5, "Expected Sprite Schorsch to have y-position -95 +-5");
  await t.runForSteps(200);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Schorsch").direction, 90, 1, "Expected Sprite Schorsch to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Schorsch").x, -70.00000000000001, 5, "Expected Sprite Schorsch to have x-position -70.00000000000001 +-5");
  t.assert.withinRange(t.getSprite("Schorsch").y, -80, 5, "Expected Sprite Schorsch to have y-position -80 +-5");
  await t.runForSteps(38);
  await t.runForSteps(1);
  t.mouseMove(-73, -122);
  await t.runForSteps(1);
  t.mouseMove(-170, 167);
  await t.runForSteps(1);
  await t.runForSteps(44);
  await t.runForSteps(1);
  t.mouseMove(-10, -140);
  await t.runForSteps(1);
  t.mouseMove(169, 145);
  await t.runForSteps(1);
  await t.runForSteps(20);
  await t.runForSteps(1);
  await t.runForSteps(43);
  await t.runForSteps(1);
  await t.runForSteps(79);
  await t.runForSteps(1);
  await t.runForSteps(66);
  await t.runForSteps(1);
  t.mouseMove(-34, 34);
  await t.runForSteps(1);
  t.mouseMove(-142, -48);
  await t.runForSteps(1);
  await t.runForSteps(43);
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
      seed: '1687849486029',
      type: 'standard',
  }
]
