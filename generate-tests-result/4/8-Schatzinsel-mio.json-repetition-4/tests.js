const test0 = async function (t) {
  await t.runForSteps(90);
  await t.runForSteps(1);
  await t.runForSteps(46);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 23.095238095238102, 5, "Expected Sprite Pirat to have x-position 23.095238095238102 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, -69.3047619047619, 5, "Expected Sprite Pirat to have y-position -69.3047619047619 +-5");
  t.assert.withinRange(t.getSprite("Pirat").size, 34, 1, "Expected Sprite Pirat to have size 34 +-1");
  await t.runForSteps(72);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 110, 5, "Expected Sprite Pirat to have x-position 110 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, -70, 5, "Expected Sprite Pirat to have y-position -70 +-5");
  t.assert.equal(t.getSprite("Pirat").sayText, "Wir sind vielen Gefahren begegnet.", "Expected Sprite Pirat to say Wir sind vielen Gefahren begegnet.");
  t.assert.withinRange(t.getSprite("Pirat").size, 19, 1, "Expected Sprite Pirat to have size 19 +-1");
  await t.runForSteps(99);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 76.66666666666667, 5, "Expected Sprite Pirat to have x-position 76.66666666666667 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 18.333333333333332, 5, "Expected Sprite Pirat to have y-position 18.333333333333332 +-5");
  t.assert.equal(t.getSprite("Pirat").sayText, "Es gab viele aktive Vulkane auf der Insel.", "Expected Sprite Pirat to say Es gab viele aktive Vulkane auf der Insel.");
  await t.runForSteps(60);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 4.5, 5, "Expected Sprite Pirat to have x-position 4.5 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 21, 5, "Expected Sprite Pirat to have y-position 21 +-5");
  t.assert.ok(t.getSprite("Vulkaninsel").visible, "Expected Sprite Vulkaninsel to be visible");
  await t.runForSteps(42);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -17, 5, "Expected Sprite Pirat to have x-position -17 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 64, 5, "Expected Sprite Pirat to have y-position 64 +-5");
  await t.runForSteps(75);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -20, 5, "Expected Sprite Pirat to have x-position -20 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 70, 5, "Expected Sprite Pirat to have y-position 70 +-5");
  t.assert.equal(t.getSprite("Pirat").sayText, "Endlich hatten wir den Schatz erreicht. ", "Expected Sprite Pirat to say Endlich hatten wir den Schatz erreicht. ");
  t.assert.ok(t.getSprite("Schatztruhe").visible, "Expected Sprite Schatztruhe to be visible");
  await t.runForSteps(64);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Pirat").sayText, "Doch den größten Schatz habe ich auf dem Heimweg kennengelernt.", "Expected Sprite Pirat to say Doch den größten Schatz habe ich auf dem Heimweg kennengelernt.");
  await t.runForSteps(50);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Pirat").sayText, "Was für ein Happy End!", "Expected Sprite Pirat to say Was für ein Happy End!");
  await t.runForSteps(59);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -24, 5, "Expected Sprite Pirat to have x-position -24 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 66, 5, "Expected Sprite Pirat to have y-position 66 +-5");
  t.assert.not(t.getSprite("Pirat").sayText, "Expected Sprite Pirat not to say anything");
  t.assert.withinRange(t.getSprite("Pirat").size, 25, 1, "Expected Sprite Pirat to have size 25 +-1");
  t.assert.withinRange(t.getSprite("Mädchen").size, 26, 1, "Expected Sprite Mädchen to have size 26 +-1");
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
      seed: '1687937344048',
      type: 'standard',
  }
]
