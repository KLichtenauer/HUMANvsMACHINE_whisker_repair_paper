const test0 = async function (t) {
  await t.runForSteps(38);
  await t.runForSteps(1);
  t.mouseMove(25, -77);
  await t.runForSteps(1);
  t.mouseMove(-143, 106);
  await t.runForSteps(1);
  await t.runForSteps(35);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Stella").x, 93.30127018922192, 5, "Expected Sprite Stella to have x-position 93.30127018922192 +-5");
  t.assert.withinRange(t.getSprite("Stella").y, 125.00000000000003, 5, "Expected Sprite Stella to have y-position 125.00000000000003 +-5");
  await t.runForSteps(79);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Schorsch").direction, 30, 1, "Expected Sprite Schorsch to face in direction 30 +-1");
  t.assert.equal(t.getSprite("Stella").direction, 90, 1, "Expected Sprite Stella to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Schorsch").x, -70, 5, "Expected Sprite Schorsch to have x-position -70 +-5");
  t.assert.withinRange(t.getSprite("Schorsch").y, -80, 5, "Expected Sprite Schorsch to have y-position -80 +-5");
  t.assert.withinRange(t.getSprite("Stella").x, 100, 5, "Expected Sprite Stella to have x-position 100 +-5");
  t.assert.withinRange(t.getSprite("Stella").y, 100.00000000000003, 5, "Expected Sprite Stella to have y-position 100.00000000000003 +-5");
  t.mouseMove(-172, 89);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Schorsch").direction, -150, 1, "Expected Sprite Schorsch to face in direction -150 +-1");
  t.assert.withinRange(t.getSprite("Schorsch").x, -55, 5, "Expected Sprite Schorsch to have x-position -55 +-5");
  t.assert.withinRange(t.getSprite("Schorsch").y, -54.01923788646684, 5, "Expected Sprite Schorsch to have y-position -54.01923788646684 +-5");
  await t.runForSteps(82);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Schorsch").direction, 90, 1, "Expected Sprite Schorsch to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Schorsch").x, -70.00000000000001, 5, "Expected Sprite Schorsch to have x-position -70.00000000000001 +-5");
  t.assert.withinRange(t.getSprite("Schorsch").y, -80, 5, "Expected Sprite Schorsch to have y-position -80 +-5");
  await t.runForSteps(43);
  await t.runForSteps(1);
  await t.runForSteps(48);
  await t.runForSteps(1);
  await t.runForSteps(20);
  await t.runForSteps(1);
  t.mouseMove(-83, 91);
  await t.runForSteps(1);
  t.mouseMove(219, -95);
  await t.runForSteps(1);
  await t.runForSteps(67);
  await t.runForSteps(1);
  t.mouseMove(21, -112);
  await t.runForSteps(1);
  await t.runForSteps(60);
  await t.runForSteps(1);
  t.mouseMove(-76, -120);
  await t.runForSteps(1);
  await t.runForSteps(75);
  await t.runForSteps(1);
  t.mouseMove(90, 160);
  await t.runForSteps(1);
  t.mouseMove(172, -141);
  await t.runForSteps(1);
  await t.runForSteps(39);
  await t.runForSteps(1);
  await t.runForSteps(31);
  await t.runForSteps(1);
  t.mouseMove(-71, -171);
  await t.runForSteps(1);
  t.mouseMove(33, 176);
  await t.runForSteps(1);
  t.mouseMove(-78, -104);
  await t.runForSteps(1);
  t.mouseMove(-204, 148);
  await t.runForSteps(1);
  t.mouseMove(-143, 173);
  await t.runForSteps(1);
  await t.runForSteps(62);
  await t.runForSteps(1);
  t.mouseMove(-106, -142);
  await t.runForSteps(1);
  await t.runForSteps(31);
  await t.runForSteps(1);
  await t.runForSteps(33);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(95);
  await t.runForSteps(1);
  t.mouseMove(194, -155);
  await t.runForSteps(1);
  await t.runForSteps(59);
  await t.runForSteps(1);
  t.mouseMove(-11, 101);
  await t.runForSteps(1);
  await t.runForSteps(85);
  await t.runForSteps(1);
  await t.runForSteps(26);
  await t.runForSteps(1);
  t.mouseMove(13, -62);
  await t.runForSteps(1);
  t.mouseMove(45, -159);
  await t.runForSteps(1);
  await t.runForSteps(23);
  await t.runForSteps(1);
  t.mouseMove(147, -116);
  await t.runForSteps(1);
  await t.runForSteps(76);
  await t.runForSteps(1);
  await t.runForSteps(11);
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
      seed: '1687936811716',
      type: 'standard',
  }
]
