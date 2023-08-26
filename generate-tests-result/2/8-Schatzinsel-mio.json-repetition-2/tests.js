const test0 = async function (t) {
  await t.runForSteps(28);
  await t.runForSteps(1);
  await t.runForSteps(90);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 58.33333333333334, 5, "Expected Sprite Pirat to have x-position 58.33333333333334 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, -69.58666666666667, 5, "Expected Sprite Pirat to have y-position -69.58666666666667 +-5");
  t.assert.withinRange(t.getSprite("Pirat").size, 39, 1, "Expected Sprite Pirat to have size 39 +-1");
  await t.runForSteps(51);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 105.33333333333333, 5, "Expected Sprite Pirat to have x-position 105.33333333333333 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, -49, 5, "Expected Sprite Pirat to have y-position -49 +-5");
  t.assert.equal(t.getSprite("Pirat").sayText, "Wir sind vielen Gefahren begegnet.", "Expected Sprite Pirat to say Wir sind vielen Gefahren begegnet.");
  t.assert.withinRange(t.getSprite("Pirat").size, 26, 1, "Expected Sprite Pirat to have size 26 +-1");
  await t.runForSteps(31);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 98.22222222222223, 5, "Expected Sprite Pirat to have x-position 98.22222222222223 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, -17, 5, "Expected Sprite Pirat to have y-position -17 +-5");
  t.assert.withinRange(t.getSprite("Pirat").size, 19, 1, "Expected Sprite Pirat to have size 19 +-1");
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 97.33333333333333, 5, "Expected Sprite Pirat to have x-position 97.33333333333333 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, -13, 5, "Expected Sprite Pirat to have y-position -13 +-5");
  await t.runForSteps(91);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 11.333333333333343, 5, "Expected Sprite Pirat to have x-position 11.333333333333343 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 10.166666666666668, 5, "Expected Sprite Pirat to have y-position 10.166666666666668 +-5");
  t.assert.equal(t.getSprite("Pirat").sayText, "Es gab viele aktive Vulkane auf der Insel.", "Expected Sprite Pirat to say Es gab viele aktive Vulkane auf der Insel.");
  t.assert.ok(t.getSprite("Vulkaninsel").visible, "Expected Sprite Vulkaninsel to be visible");
  await t.runForSteps(23);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -1.5, 5, "Expected Sprite Pirat to have x-position -1.5 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 33, 5, "Expected Sprite Pirat to have y-position 33 +-5");
  await t.runForSteps(58);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -20, 5, "Expected Sprite Pirat to have x-position -20 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 70, 5, "Expected Sprite Pirat to have y-position 70 +-5");
  t.assert.equal(t.getSprite("Pirat").sayText, "Endlich hatten wir den Schatz erreicht. ", "Expected Sprite Pirat to say Endlich hatten wir den Schatz erreicht. ");
  t.assert.ok(t.getSprite("Schatztruhe").visible, "Expected Sprite Schatztruhe to be visible");
  await t.runForSteps(47);
  await t.runForSteps(1);
  await t.runForSteps(63);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Pirat").sayText, "Doch den größten Schatz habe ich auf dem Heimweg kennengelernt.", "Expected Sprite Pirat to say Doch den größten Schatz habe ich auf dem Heimweg kennengelernt.");
  await t.runForSteps(18);
  await t.runForSteps(1);
  await t.runForSteps(33);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Pirat").sayText, "Was für ein Happy End!", "Expected Sprite Pirat to say Was für ein Happy End!");
  await t.runForSteps(54);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -22, 5, "Expected Sprite Pirat to have x-position -22 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 68, 5, "Expected Sprite Pirat to have y-position 68 +-5");
  t.assert.not(t.getSprite("Pirat").sayText, "Expected Sprite Pirat not to say anything");
  t.assert.withinRange(t.getSprite("Pirat").size, 22, 1, "Expected Sprite Pirat to have size 22 +-1");
  t.assert.withinRange(t.getSprite("Mädchen").size, 23, 1, "Expected Sprite Mädchen to have size 23 +-1");
  t.assert.ok(t.getSprite("Mädchen").visible, "Expected Sprite Mädchen to be visible");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938876881',
      type: 'standard',
  }
]
