const test0 = async function (t) {
  await t.runForSteps(72);
  await t.runForSteps(1);
  await t.runForSteps(14);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -19.16666666666667, 5, "Expected Sprite Pirat to have x-position -19.16666666666667 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, -68.96666666666667, 5, "Expected Sprite Pirat to have y-position -68.96666666666667 +-5");
  t.assert.withinRange(t.getSprite("Pirat").size, 47, 1, "Expected Sprite Pirat to have size 47 +-1");
  await t.runForSteps(59);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 64.16666666666666, 5, "Expected Sprite Pirat to have x-position 64.16666666666666 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, -69.63333333333334, 5, "Expected Sprite Pirat to have y-position -69.63333333333334 +-5");
  t.assert.withinRange(t.getSprite("Pirat").size, 32, 1, "Expected Sprite Pirat to have size 32 +-1");
  await t.runForSteps(27);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 103.05555555555554, 5, "Expected Sprite Pirat to have x-position 103.05555555555554 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, -69.94444444444444, 5, "Expected Sprite Pirat to have y-position -69.94444444444444 +-5");
  t.assert.withinRange(t.getSprite("Pirat").size, 25, 1, "Expected Sprite Pirat to have size 25 +-1");
  await t.runForSteps(10);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 108.66666666666667, 5, "Expected Sprite Pirat to have x-position 108.66666666666667 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, -64, 5, "Expected Sprite Pirat to have y-position -64 +-5");
  t.assert.equal(t.getSprite("Pirat").sayText, "Wir sind vielen Gefahren begegnet.", "Expected Sprite Pirat to say Wir sind vielen Gefahren begegnet.");
  t.assert.withinRange(t.getSprite("Pirat").size, 22, 1, "Expected Sprite Pirat to have size 22 +-1");
  await t.runForSteps(20);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 104, 5, "Expected Sprite Pirat to have x-position 104 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, -43, 5, "Expected Sprite Pirat to have y-position -43 +-5");
  t.assert.withinRange(t.getSprite("Pirat").size, 19, 1, "Expected Sprite Pirat to have size 19 +-1");
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 102.88888888888889, 5, "Expected Sprite Pirat to have x-position 102.88888888888889 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, -38, 5, "Expected Sprite Pirat to have y-position -38 +-5");
  await t.runForSteps(81);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 58, 5, "Expected Sprite Pirat to have x-position 58 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 16, 5, "Expected Sprite Pirat to have y-position 16 +-5");
  t.assert.equal(t.getSprite("Pirat").sayText, "Es gab viele aktive Vulkane auf der Insel.", "Expected Sprite Pirat to say Es gab viele aktive Vulkane auf der Insel.");
  await t.runForSteps(9);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 44.66666666666667, 5, "Expected Sprite Pirat to have x-position 44.66666666666667 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 14.333333333333334, 5, "Expected Sprite Pirat to have y-position 14.333333333333334 +-5");
  await t.runForSteps(64);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -9.5, 5, "Expected Sprite Pirat to have x-position -9.5 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 49, 5, "Expected Sprite Pirat to have y-position 49 +-5");
  t.assert.ok(t.getSprite("Vulkaninsel").visible, "Expected Sprite Vulkaninsel to be visible");
  await t.runForSteps(28);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -20, 5, "Expected Sprite Pirat to have x-position -20 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 70, 5, "Expected Sprite Pirat to have y-position 70 +-5");
  t.assert.equal(t.getSprite("Pirat").sayText, "Endlich hatten wir den Schatz erreicht. ", "Expected Sprite Pirat to say Endlich hatten wir den Schatz erreicht. ");
  t.assert.ok(t.getSprite("Schatztruhe").visible, "Expected Sprite Schatztruhe to be visible");
  await t.runForSteps(68);
  await t.runForSteps(1);
  await t.runForSteps(45);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Pirat").sayText, "Doch den größten Schatz habe ich auf dem Heimweg kennengelernt.", "Expected Sprite Pirat to say Doch den größten Schatz habe ich auf dem Heimweg kennengelernt.");
  await t.runForSteps(90);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Pirat").sayText, "Was für ein Happy End!", "Expected Sprite Pirat to say Was für ein Happy End!");
  await t.runForSteps(75);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -46, 5, "Expected Sprite Pirat to have x-position -46 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 44, 5, "Expected Sprite Pirat to have y-position 44 +-5");
  t.assert.not(t.getSprite("Pirat").sayText, "Expected Sprite Pirat not to say anything");
  t.assert.withinRange(t.getSprite("Pirat").size, 58, 1, "Expected Sprite Pirat to have size 58 +-1");
  t.assert.withinRange(t.getSprite("Mädchen").size, 59, 1, "Expected Sprite Mädchen to have size 59 +-1");
  t.assert.ok(t.getSprite("Mädchen").visible, "Expected Sprite Mädchen to be visible");
  await t.runForSteps(49);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -70, 5, "Expected Sprite Pirat to have x-position -70 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 20, 5, "Expected Sprite Pirat to have y-position 20 +-5");
  t.assert.withinRange(t.getSprite("Pirat").size, 94, 1, "Expected Sprite Pirat to have size 94 +-1");
  t.assert.withinRange(t.getSprite("Mädchen").size, 95, 1, "Expected Sprite Mädchen to have size 95 +-1");
  await t.runForSteps(48);
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
      seed: '1687937580531',
      type: 'standard',
  }
]
