const test0 = async function (t) {
  await t.runForSteps(30);
  await t.runForSteps(1);
  await t.runForSteps(79);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 89.16666666666666, 5, "Expected Sprite Pirat to have x-position 89.16666666666666 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, -69.83333333333333, 5, "Expected Sprite Pirat to have y-position -69.83333333333333 +-5");
  t.assert.withinRange(t.getSprite("Pirat").size, 41, 1, "Expected Sprite Pirat to have size 41 +-1");
  await t.runForSteps(41);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 102.88888888888889, 5, "Expected Sprite Pirat to have x-position 102.88888888888889 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, -38, 5, "Expected Sprite Pirat to have y-position -38 +-5");
  t.assert.equal(t.getSprite("Pirat").sayText, "Wir sind vielen Gefahren begegnet.", "Expected Sprite Pirat to say Wir sind vielen Gefahren begegnet.");
  t.assert.withinRange(t.getSprite("Pirat").size, 30, 1, "Expected Sprite Pirat to have size 30 +-1");
  await t.runForSteps(51);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 91.33333333333333, 5, "Expected Sprite Pirat to have x-position 91.33333333333333 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 14, 5, "Expected Sprite Pirat to have y-position 14 +-5");
  t.assert.withinRange(t.getSprite("Pirat").size, 19, 1, "Expected Sprite Pirat to have size 19 +-1");
  await t.runForSteps(16);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 75.33333333333333, 5, "Expected Sprite Pirat to have x-position 75.33333333333333 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 18.166666666666668, 5, "Expected Sprite Pirat to have y-position 18.166666666666668 +-5");
  t.assert.equal(t.getSprite("Pirat").sayText, "Es gab viele aktive Vulkane auf der Insel.", "Expected Sprite Pirat to say Es gab viele aktive Vulkane auf der Insel.");
  await t.runForSteps(72);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -2, 5, "Expected Sprite Pirat to have x-position -2 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 34, 5, "Expected Sprite Pirat to have y-position 34 +-5");
  t.assert.ok(t.getSprite("Vulkaninsel").visible, "Expected Sprite Vulkaninsel to be visible");
  await t.runForSteps(61);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -20, 5, "Expected Sprite Pirat to have x-position -20 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 70, 5, "Expected Sprite Pirat to have y-position 70 +-5");
  t.assert.equal(t.getSprite("Pirat").sayText, "Endlich hatten wir den Schatz erreicht. ", "Expected Sprite Pirat to say Endlich hatten wir den Schatz erreicht. ");
  t.assert.ok(t.getSprite("Schatztruhe").visible, "Expected Sprite Schatztruhe to be visible");
  await t.runForSteps(15);
  await t.runForSteps(1);
  await t.runForSteps(59);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Pirat").sayText, "Doch den größten Schatz habe ich auf dem Heimweg kennengelernt.", "Expected Sprite Pirat to say Doch den größten Schatz habe ich auf dem Heimweg kennengelernt.");
  await t.runForSteps(79);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Pirat").sayText, "Was für ein Happy End!", "Expected Sprite Pirat to say Was für ein Happy End!");
  await t.runForSteps(57);
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
      seed: '1687849298528',
      type: 'standard',
  }
]
