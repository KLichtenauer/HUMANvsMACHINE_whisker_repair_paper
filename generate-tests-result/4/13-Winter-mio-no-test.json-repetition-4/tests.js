const test0 = async function (t) {
  await t.runForSteps(66);
  await t.runForSteps(1);
  t.mouseMove(-210, -164);
  await t.runForSteps(1);
  await t.runForSteps(93);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Schorsch").direction, -120, 1, "Expected Sprite Schorsch to face in direction -120 +-1");
  t.assert.equal(t.getSprite("Stella").direction, 90, 1, "Expected Sprite Stella to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Stella").x, 100, 5, "Expected Sprite Stella to have x-position 100 +-5");
  t.assert.withinRange(t.getSprite("Stella").y, 100.00000000000003, 5, "Expected Sprite Stella to have y-position 100.00000000000003 +-5");
  t.mouseMove(-125, -63);
  await t.runForSteps(1);
  t.mouseMove(115, -134);
  await t.runForSteps(1);
  t.mouseMove(115, -99);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Schorsch").direction, 60, 1, "Expected Sprite Schorsch to face in direction 60 +-1");
  t.assert.withinRange(t.getSprite("Schorsch").x, -95.98076211353317, 5, "Expected Sprite Schorsch to have x-position -95.98076211353317 +-5");
  t.assert.withinRange(t.getSprite("Schorsch").y, -95, 5, "Expected Sprite Schorsch to have y-position -95 +-5");
  t.mouseMove(73, 121);
  await t.runForSteps(1);
  t.mouseMove(191, -113);
  await t.runForSteps(1);
  await t.runForSteps(27);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Schorsch").direction, 90, 1, "Expected Sprite Schorsch to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Schorsch").x, -70.00000000000001, 5, "Expected Sprite Schorsch to have x-position -70.00000000000001 +-5");
  t.assert.withinRange(t.getSprite("Schorsch").y, -80, 5, "Expected Sprite Schorsch to have y-position -80 +-5");
  t.mouseMove(-218, 55);
  await t.runForSteps(1);
  await t.runForSteps(76);
  await t.runForSteps(1);
  t.mouseMove(9, -34);
  await t.runForSteps(1);
  await t.runForSteps(20);
  await t.runForSteps(1);
  await t.runForSteps(11);
  await t.runForSteps(1);
  await t.runForSteps(20);
  await t.runForSteps(1);
  await t.runForSteps(69);
  await t.runForSteps(1);
  await t.runForSteps(56);
  await t.runForSteps(1);
  t.mouseMove(-138, -10);
  await t.runForSteps(1);
  t.mouseMove(47, -83);
  await t.runForSteps(1);
  await t.runForSteps(51);
  await t.runForSteps(1);
  await t.runForSteps(74);
  await t.runForSteps(1);
  t.mouseMove(-44, -69);
  await t.runForSteps(1);
  t.mouseMove(56, 80);
  await t.runForSteps(1);
  await t.runForSteps(96);
  await t.runForSteps(1);
  t.mouseMove(-26, -65);
  await t.runForSteps(1);
  t.mouseMove(191, -79);
  await t.runForSteps(1);
  t.mouseMove(47, 132);
  await t.runForSteps(1);
  await t.runForSteps(63);
  await t.runForSteps(1);
  t.mouseMove(-44, -128);
  await t.runForSteps(1);
  await t.runForSteps(69);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.mouseMove(-48, 52);
  await t.runForSteps(1);
  t.mouseMove(-79, -63);
  await t.runForSteps(1);
  t.mouseMove(-31, 127);
  await t.runForSteps(1);
  await t.runForSteps(57);
  await t.runForSteps(1);
  await t.runForSteps(83);
  await t.runForSteps(1);
  t.mouseMove(188, -149);
  await t.runForSteps(1);
  await t.runForSteps(92);
  await t.runForSteps(1);
  t.mouseMove(235, -178);
  await t.runForSteps(1);
  await t.runForSteps(96);
  await t.runForSteps(1);
  await t.runForSteps(57);
  await t.runForSteps(1);
  await t.runForSteps(76);
  await t.runForSteps(1);
  await t.runForSteps(35);
  await t.runForSteps(1);
  await t.runForSteps(72);
  await t.runForSteps(1);
  t.mouseMove(28, -94);
  await t.runForSteps(1);
  await t.runForSteps(63);
  await t.runForSteps(1);
  await t.runForSteps(37);
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
      seed: '1687937645266',
      type: 'standard',
  }
]
