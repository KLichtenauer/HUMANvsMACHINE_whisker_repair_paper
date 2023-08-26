const test0 = async function (t) {
  await t.runForSteps(61);
  await t.runForSteps(1);
  await t.runForSteps(30);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -44.16666666666666, 5, "Expected Sprite Pirat to have x-position -44.16666666666666 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, -68.76666666666667, 5, "Expected Sprite Pirat to have y-position -68.76666666666667 +-5");
  t.assert.withinRange(t.getSprite("Pirat").size, 45, 1, "Expected Sprite Pirat to have size 45 +-1");
  await t.runForSteps(58);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 17.291666666666657, 5, "Expected Sprite Pirat to have x-position 17.291666666666657 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, -69.25833333333334, 5, "Expected Sprite Pirat to have y-position -69.25833333333334 +-5");
  t.assert.withinRange(t.getSprite("Pirat").size, 31, 1, "Expected Sprite Pirat to have size 31 +-1");
  await t.runForSteps(84);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 105.83333333333331, 5, "Expected Sprite Pirat to have x-position 105.83333333333331 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, -69.96666666666667, 5, "Expected Sprite Pirat to have y-position -69.96666666666667 +-5");
  t.assert.withinRange(t.getSprite("Pirat").size, 19, 1, "Expected Sprite Pirat to have size 19 +-1");
  await t.runForSteps(63);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 96.66666666666667, 5, "Expected Sprite Pirat to have x-position 96.66666666666667 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, -10, 5, "Expected Sprite Pirat to have y-position -10 +-5");
  t.assert.equal(t.getSprite("Pirat").sayText, "Wir sind vielen Gefahren begegnet.", "Expected Sprite Pirat to say Wir sind vielen Gefahren begegnet.");
  await t.runForSteps(18);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 92.44444444444444, 5, "Expected Sprite Pirat to have x-position 92.44444444444444 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 9, 5, "Expected Sprite Pirat to have y-position 9 +-5");
  await t.runForSteps(76);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 7, 5, "Expected Sprite Pirat to have x-position 7 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 16, 5, "Expected Sprite Pirat to have y-position 16 +-5");
  t.assert.equal(t.getSprite("Pirat").sayText, "Es gab viele aktive Vulkane auf der Insel.", "Expected Sprite Pirat to say Es gab viele aktive Vulkane auf der Insel.");
  t.assert.ok(t.getSprite("Vulkaninsel").visible, "Expected Sprite Vulkaninsel to be visible");
  await t.runForSteps(18);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -2.5, 5, "Expected Sprite Pirat to have x-position -2.5 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 35, 5, "Expected Sprite Pirat to have y-position 35 +-5");
  await t.runForSteps(94);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -20, 5, "Expected Sprite Pirat to have x-position -20 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 70, 5, "Expected Sprite Pirat to have y-position 70 +-5");
  t.assert.equal(t.getSprite("Pirat").sayText, "Endlich hatten wir den Schatz erreicht. ", "Expected Sprite Pirat to say Endlich hatten wir den Schatz erreicht. ");
  t.assert.ok(t.getSprite("Schatztruhe").visible, "Expected Sprite Schatztruhe to be visible");
  await t.runForSteps(37);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Pirat").sayText, "Doch den größten Schatz habe ich auf dem Heimweg kennengelernt.", "Expected Sprite Pirat to say Doch den größten Schatz habe ich auf dem Heimweg kennengelernt.");
  await t.runForSteps(95);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Pirat").sayText, "Was für ein Happy End!", "Expected Sprite Pirat to say Was für ein Happy End!");
  await t.runForSteps(65);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -32, 5, "Expected Sprite Pirat to have x-position -32 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 58, 5, "Expected Sprite Pirat to have y-position 58 +-5");
  t.assert.not(t.getSprite("Pirat").sayText, "Expected Sprite Pirat not to say anything");
  t.assert.withinRange(t.getSprite("Pirat").size, 37, 1, "Expected Sprite Pirat to have size 37 +-1");
  t.assert.withinRange(t.getSprite("Mädchen").size, 38, 1, "Expected Sprite Mädchen to have size 38 +-1");
  t.assert.ok(t.getSprite("Mädchen").visible, "Expected Sprite Mädchen to be visible");
  await t.runForSteps(7);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -36, 5, "Expected Sprite Pirat to have x-position -36 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 54, 5, "Expected Sprite Pirat to have y-position 54 +-5");
  t.assert.withinRange(t.getSprite("Pirat").size, 43, 1, "Expected Sprite Pirat to have size 43 +-1");
  t.assert.withinRange(t.getSprite("Mädchen").size, 44, 1, "Expected Sprite Mädchen to have size 44 +-1");
  await t.runForSteps(34);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -52, 5, "Expected Sprite Pirat to have x-position -52 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 38, 5, "Expected Sprite Pirat to have y-position 38 +-5");
  t.assert.withinRange(t.getSprite("Pirat").size, 67, 1, "Expected Sprite Pirat to have size 67 +-1");
  t.assert.withinRange(t.getSprite("Mädchen").size, 68, 1, "Expected Sprite Mädchen to have size 68 +-1");
  await t.runForSteps(92);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -70, 5, "Expected Sprite Pirat to have x-position -70 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 20, 5, "Expected Sprite Pirat to have y-position 20 +-5");
  t.assert.withinRange(t.getSprite("Pirat").size, 94, 1, "Expected Sprite Pirat to have size 94 +-1");
  t.assert.withinRange(t.getSprite("Mädchen").size, 95, 1, "Expected Sprite Mädchen to have size 95 +-1");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938455264',
      type: 'standard',
  }
]
