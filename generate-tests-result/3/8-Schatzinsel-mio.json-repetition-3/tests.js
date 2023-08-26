const test0 = async function (t) {
  await t.runForSteps(50);
  await t.runForSteps(1);
  await t.runForSteps(22);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -38.611111111111114, 5, "Expected Sprite Pirat to have x-position -38.611111111111114 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, -68.81111111111112, 5, "Expected Sprite Pirat to have y-position -68.81111111111112 +-5");
  t.assert.withinRange(t.getSprite("Pirat").size, 50, 1, "Expected Sprite Pirat to have size 50 +-1");
  await t.runForSteps(28);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 1.6666666666666572, 5, "Expected Sprite Pirat to have x-position 1.6666666666666572 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, -69.13333333333334, 5, "Expected Sprite Pirat to have y-position -69.13333333333334 +-5");
  t.assert.withinRange(t.getSprite("Pirat").size, 43, 1, "Expected Sprite Pirat to have size 43 +-1");
  await t.runForSteps(50);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 72.5, 5, "Expected Sprite Pirat to have x-position 72.5 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, -69.7, 5, "Expected Sprite Pirat to have y-position -69.7 +-5");
  t.assert.withinRange(t.getSprite("Pirat").size, 30, 1, "Expected Sprite Pirat to have size 30 +-1");
  await t.runForSteps(74);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 99.33333333333333, 5, "Expected Sprite Pirat to have x-position 99.33333333333333 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, -22, 5, "Expected Sprite Pirat to have y-position -22 +-5");
  t.assert.equal(t.getSprite("Pirat").sayText, "Wir sind vielen Gefahren begegnet.", "Expected Sprite Pirat to say Wir sind vielen Gefahren begegnet.");
  t.assert.withinRange(t.getSprite("Pirat").size, 19, 1, "Expected Sprite Pirat to have size 19 +-1");
  await t.runForSteps(43);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 87.33333333333333, 5, "Expected Sprite Pirat to have x-position 87.33333333333333 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 19.666666666666668, 5, "Expected Sprite Pirat to have y-position 19.666666666666668 +-5");
  t.assert.equal(t.getSprite("Pirat").sayText, "Es gab viele aktive Vulkane auf der Insel.", "Expected Sprite Pirat to say Es gab viele aktive Vulkane auf der Insel.");
  await t.runForSteps(85);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -4, 5, "Expected Sprite Pirat to have x-position -4 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 38, 5, "Expected Sprite Pirat to have y-position 38 +-5");
  t.assert.ok(t.getSprite("Vulkaninsel").visible, "Expected Sprite Vulkaninsel to be visible");
  await t.runForSteps(95);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -20, 5, "Expected Sprite Pirat to have x-position -20 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 70, 5, "Expected Sprite Pirat to have y-position 70 +-5");
  t.assert.equal(t.getSprite("Pirat").sayText, "Endlich hatten wir den Schatz erreicht. ", "Expected Sprite Pirat to say Endlich hatten wir den Schatz erreicht. ");
  t.assert.ok(t.getSprite("Schatztruhe").visible, "Expected Sprite Schatztruhe to be visible");
  await t.runForSteps(60);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Pirat").sayText, "Doch den größten Schatz habe ich auf dem Heimweg kennengelernt.", "Expected Sprite Pirat to say Doch den größten Schatz habe ich auf dem Heimweg kennengelernt.");
  await t.runForSteps(16);
  await t.runForSteps(1);
  await t.runForSteps(25);
  await t.runForSteps(1);
  await t.runForSteps(59);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Pirat").sayText, "Was für ein Happy End!", "Expected Sprite Pirat to say Was für ein Happy End!");
  await t.runForSteps(23);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -28, 5, "Expected Sprite Pirat to have x-position -28 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 62, 5, "Expected Sprite Pirat to have y-position 62 +-5");
  t.assert.not(t.getSprite("Pirat").sayText, "Expected Sprite Pirat not to say anything");
  t.assert.withinRange(t.getSprite("Pirat").size, 31, 1, "Expected Sprite Pirat to have size 31 +-1");
  t.assert.withinRange(t.getSprite("Mädchen").size, 31, 1, "Expected Sprite Mädchen to have size 31 +-1");
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
      seed: '1687936642414',
      type: 'standard',
  }
]
