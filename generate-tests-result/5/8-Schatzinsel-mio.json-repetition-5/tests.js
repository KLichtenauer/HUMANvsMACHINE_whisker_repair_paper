const test0 = async function (t) {
  await t.runForSteps(61);
  await t.runForSteps(1);
  await t.runForSteps(40);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 30, 5, "Expected Sprite Pirat to have x-position 30 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, -69.36, 5, "Expected Sprite Pirat to have y-position -69.36 +-5");
  t.assert.withinRange(t.getSprite("Pirat").size, 43, 1, "Expected Sprite Pirat to have size 43 +-1");
  await t.runForSteps(17);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 60, 5, "Expected Sprite Pirat to have x-position 60 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, -69.6, 5, "Expected Sprite Pirat to have y-position -69.6 +-5");
  t.assert.withinRange(t.getSprite("Pirat").size, 38, 1, "Expected Sprite Pirat to have size 38 +-1");
  await t.runForSteps(94);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 95.55555555555556, 5, "Expected Sprite Pirat to have x-position 95.55555555555556 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, -5, 5, "Expected Sprite Pirat to have y-position -5 +-5");
  t.assert.equal(t.getSprite("Pirat").sayText, "Wir sind vielen Gefahren begegnet.", "Expected Sprite Pirat to say Wir sind vielen Gefahren begegnet.");
  t.assert.withinRange(t.getSprite("Pirat").size, 19, 1, "Expected Sprite Pirat to have size 19 +-1");
  await t.runForSteps(74);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 23.33333333333333, 5, "Expected Sprite Pirat to have x-position 23.33333333333333 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 11.666666666666666, 5, "Expected Sprite Pirat to have y-position 11.666666666666666 +-5");
  t.assert.equal(t.getSprite("Pirat").sayText, "Es gab viele aktive Vulkane auf der Insel.", "Expected Sprite Pirat to say Es gab viele aktive Vulkane auf der Insel.");
  await t.runForSteps(43);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -7, 5, "Expected Sprite Pirat to have x-position -7 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 44, 5, "Expected Sprite Pirat to have y-position 44 +-5");
  t.assert.ok(t.getSprite("Vulkaninsel").visible, "Expected Sprite Vulkaninsel to be visible");
  await t.runForSteps(22);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -18.5, 5, "Expected Sprite Pirat to have x-position -18.5 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 67, 5, "Expected Sprite Pirat to have y-position 67 +-5");
  t.assert.ok(t.getSprite("Schatztruhe").visible, "Expected Sprite Schatztruhe to be visible");
  await t.runForSteps(43);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -20, 5, "Expected Sprite Pirat to have x-position -20 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 70, 5, "Expected Sprite Pirat to have y-position 70 +-5");
  t.assert.equal(t.getSprite("Pirat").sayText, "Endlich hatten wir den Schatz erreicht. ", "Expected Sprite Pirat to say Endlich hatten wir den Schatz erreicht. ");
  await t.runForSteps(37);
  await t.runForSteps(1);
  await t.runForSteps(53);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Pirat").sayText, "Doch den größten Schatz habe ich auf dem Heimweg kennengelernt.", "Expected Sprite Pirat to say Doch den größten Schatz habe ich auf dem Heimweg kennengelernt.");
  await t.runForSteps(65);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Pirat").sayText, "Was für ein Happy End!", "Expected Sprite Pirat to say Was für ein Happy End!");
  await t.runForSteps(47);
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
      seed: '1687938123789',
      type: 'standard',
  }
]
