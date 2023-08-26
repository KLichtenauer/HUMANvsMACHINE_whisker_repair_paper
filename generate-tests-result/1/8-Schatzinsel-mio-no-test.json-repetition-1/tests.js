const test0 = async function (t) {
  await t.runForSteps(6);
  await t.runForSteps(1);
  await t.runForSteps(80);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 41.25, 5, "Expected Sprite Pirat to have x-position 41.25 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, -69.45, 5, "Expected Sprite Pirat to have y-position -69.45 +-5");
  t.assert.withinRange(t.getSprite("Pirat").size, 47, 1, "Expected Sprite Pirat to have size 47 +-1");
  await t.runForSteps(45);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 107.11111111111111, 5, "Expected Sprite Pirat to have x-position 107.11111111111111 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, -57, 5, "Expected Sprite Pirat to have y-position -57 +-5");
  t.assert.equal(t.getSprite("Pirat").sayText, "Wir sind vielen Gefahren begegnet.", "Expected Sprite Pirat to say Wir sind vielen Gefahren begegnet.");
  t.assert.withinRange(t.getSprite("Pirat").size, 35, 1, "Expected Sprite Pirat to have size 35 +-1");
  await t.runForSteps(5);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 105.77777777777777, 5, "Expected Sprite Pirat to have x-position 105.77777777777777 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, -51, 5, "Expected Sprite Pirat to have y-position -51 +-5");
  t.assert.withinRange(t.getSprite("Pirat").size, 34, 1, "Expected Sprite Pirat to have size 34 +-1");
  await t.runForSteps(22);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 100.66666666666667, 5, "Expected Sprite Pirat to have x-position 100.66666666666667 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, -28, 5, "Expected Sprite Pirat to have y-position -28 +-5");
  t.assert.withinRange(t.getSprite("Pirat").size, 28, 1, "Expected Sprite Pirat to have size 28 +-1");
  await t.runForSteps(67);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 63.333333333333336, 5, "Expected Sprite Pirat to have x-position 63.333333333333336 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 16.666666666666668, 5, "Expected Sprite Pirat to have y-position 16.666666666666668 +-5");
  t.assert.equal(t.getSprite("Pirat").sayText, "Es gab viele aktive Vulkane auf der Insel.", "Expected Sprite Pirat to say Es gab viele aktive Vulkane auf der Insel.");
  t.assert.withinRange(t.getSprite("Pirat").size, 19, 1, "Expected Sprite Pirat to have size 19 +-1");
  await t.runForSteps(72);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -6.5, 5, "Expected Sprite Pirat to have x-position -6.5 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 43, 5, "Expected Sprite Pirat to have y-position 43 +-5");
  t.assert.ok(t.getSprite("Vulkaninsel").visible, "Expected Sprite Vulkaninsel to be visible");
  await t.runForSteps(66);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -20, 5, "Expected Sprite Pirat to have x-position -20 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 70, 5, "Expected Sprite Pirat to have y-position 70 +-5");
  t.assert.equal(t.getSprite("Pirat").sayText, "Endlich hatten wir den Schatz erreicht. ", "Expected Sprite Pirat to say Endlich hatten wir den Schatz erreicht. ");
  t.assert.ok(t.getSprite("Schatztruhe").visible, "Expected Sprite Schatztruhe to be visible");
  await t.runForSteps(85);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Pirat").sayText, "Doch den größten Schatz habe ich auf dem Heimweg kennengelernt.", "Expected Sprite Pirat to say Doch den größten Schatz habe ich auf dem Heimweg kennengelernt.");
  await t.runForSteps(48);
  await t.runForSteps(1);
  await t.runForSteps(72);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -26, 5, "Expected Sprite Pirat to have x-position -26 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 64, 5, "Expected Sprite Pirat to have y-position 64 +-5");
  t.assert.not(t.getSprite("Pirat").sayText, "Expected Sprite Pirat not to say anything");
  t.assert.withinRange(t.getSprite("Pirat").size, 28, 1, "Expected Sprite Pirat to have size 28 +-1");
  t.assert.withinRange(t.getSprite("Mädchen").size, 28, 1, "Expected Sprite Mädchen to have size 28 +-1");
  t.assert.ok(t.getSprite("Mädchen").visible, "Expected Sprite Mädchen to be visible");
  await t.runForSteps(58);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -54, 5, "Expected Sprite Pirat to have x-position -54 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 36, 5, "Expected Sprite Pirat to have y-position 36 +-5");
  t.assert.withinRange(t.getSprite("Pirat").size, 70, 1, "Expected Sprite Pirat to have size 70 +-1");
  t.assert.withinRange(t.getSprite("Mädchen").size, 71, 1, "Expected Sprite Mädchen to have size 71 +-1");
  await t.runForSteps(14);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -62, 5, "Expected Sprite Pirat to have x-position -62 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 28, 5, "Expected Sprite Pirat to have y-position 28 +-5");
  t.assert.withinRange(t.getSprite("Pirat").size, 82, 1, "Expected Sprite Pirat to have size 82 +-1");
  t.assert.withinRange(t.getSprite("Mädchen").size, 83, 1, "Expected Sprite Mädchen to have size 83 +-1");
  await t.runForSteps(40);
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
      seed: '1687849459903',
      type: 'standard',
  }
]
