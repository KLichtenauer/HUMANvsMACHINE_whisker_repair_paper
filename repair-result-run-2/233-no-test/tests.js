const test0 = async function (t) {
  await t.runForSteps(37);
  await t.runForSteps(1);
  await t.runForSteps(27);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -49.72222222222223, 5, "Expected Sprite Pirat to have x-position -49.72222222222223 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, -68.72222222222223, 5, "Expected Sprite Pirat to have y-position -68.72222222222223 +-5");
  t.assert.withinRange(t.getSprite("Pirat").size, 52, 1, "Expected Sprite Pirat to have size 52 +-1");
  await t.runForSteps(23);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -16.388888888888886, 5, "Expected Sprite Pirat to have x-position -16.388888888888886 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, -68.9888888888889, 5, "Expected Sprite Pirat to have y-position -68.9888888888889 +-5");
  t.assert.withinRange(t.getSprite("Pirat").size, 46, 1, "Expected Sprite Pirat to have size 46 +-1");
  await t.runForSteps(54);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 60, 5, "Expected Sprite Pirat to have x-position 60 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, -69.6, 5, "Expected Sprite Pirat to have y-position -69.6 +-5");
  t.assert.withinRange(t.getSprite("Pirat").size, 32, 1, "Expected Sprite Pirat to have size 32 +-1");
  await t.runForSteps(58);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 104.88888888888889, 5, "Expected Sprite Pirat to have x-position 104.88888888888889 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, -47, 5, "Expected Sprite Pirat to have y-position -47 +-5");
  t.assert.equal(t.getSprite("Pirat").sayText, "Wir sind vielen Gefahren begegnet.", "Expected Sprite Pirat to say Wir sind vielen Gefahren begegnet.");
  t.assert.withinRange(t.getSprite("Pirat").size, 19, 1, "Expected Sprite Pirat to have size 19 +-1");
  await t.runForSteps(53);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 92.88888888888889, 5, "Expected Sprite Pirat to have x-position 92.88888888888889 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 7, 5, "Expected Sprite Pirat to have y-position 7 +-5");
  await t.runForSteps(74);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 9, 5, "Expected Sprite Pirat to have x-position 9 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 12, 5, "Expected Sprite Pirat to have y-position 12 +-5");
  t.assert.equal(t.getSprite("Pirat").sayText, "Es gab viele aktive Vulkane auf der Insel.", "Expected Sprite Pirat to say Es gab viele aktive Vulkane auf der Insel.");
  t.assert.ok(t.getSprite("Vulkaninsel").visible, "Expected Sprite Vulkaninsel to be visible");
  await t.runForSteps(45);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -14, 5, "Expected Sprite Pirat to have x-position -14 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 58, 5, "Expected Sprite Pirat to have y-position 58 +-5");
  await t.runForSteps(71);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -20, 5, "Expected Sprite Pirat to have x-position -20 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 70, 5, "Expected Sprite Pirat to have y-position 70 +-5");
  t.assert.equal(t.getSprite("Pirat").sayText, "Endlich hatten wir den Schatz erreicht. ", "Expected Sprite Pirat to say Endlich hatten wir den Schatz erreicht. ");
  t.assert.ok(t.getSprite("Schatztruhe").visible, "Expected Sprite Schatztruhe to be visible");
  await t.runForSteps(15);
  await t.runForSteps(1);
  await t.runForSteps(87);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Pirat").sayText, "Doch den größten Schatz habe ich auf dem Heimweg kennengelernt.", "Expected Sprite Pirat to say Doch den größten Schatz habe ich auf dem Heimweg kennengelernt.");
  await t.runForSteps(39);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Pirat").sayText, "Was für ein Happy End!", "Expected Sprite Pirat to say Was für ein Happy End!");
  await t.runForSteps(79);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -44, 5, "Expected Sprite Pirat to have x-position -44 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 46, 5, "Expected Sprite Pirat to have y-position 46 +-5");
  t.assert.not(t.getSprite("Pirat").sayText, "Expected Sprite Pirat not to say anything");
  t.assert.withinRange(t.getSprite("Pirat").size, 55, 1, "Expected Sprite Pirat to have size 55 +-1");
  t.assert.withinRange(t.getSprite("Mädchen").size, 56, 1, "Expected Sprite Mädchen to have size 56 +-1");
  t.assert.ok(t.getSprite("Mädchen").visible, "Expected Sprite Mädchen to be visible");
  await t.runForSteps(5);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -46, 5, "Expected Sprite Pirat to have x-position -46 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 44, 5, "Expected Sprite Pirat to have y-position 44 +-5");
  t.assert.withinRange(t.getSprite("Pirat").size, 58, 1, "Expected Sprite Pirat to have size 58 +-1");
  t.assert.withinRange(t.getSprite("Mädchen").size, 59, 1, "Expected Sprite Mädchen to have size 59 +-1");
  await t.runForSteps(35);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -64, 5, "Expected Sprite Pirat to have x-position -64 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 26, 5, "Expected Sprite Pirat to have y-position 26 +-5");
  t.assert.withinRange(t.getSprite("Pirat").size, 85, 1, "Expected Sprite Pirat to have size 85 +-1");
  t.assert.withinRange(t.getSprite("Mädchen").size, 86, 1, "Expected Sprite Mädchen to have size 86 +-1");
  await t.runForSteps(5);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -68, 5, "Expected Sprite Pirat to have x-position -68 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 22, 5, "Expected Sprite Pirat to have y-position 22 +-5");
  t.assert.withinRange(t.getSprite("Pirat").size, 91, 1, "Expected Sprite Pirat to have size 91 +-1");
  t.assert.withinRange(t.getSprite("Mädchen").size, 92, 1, "Expected Sprite Mädchen to have size 92 +-1");
  await t.runForSteps(78);
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
      seed: '1687939188628',
      type: 'standard',
  }
]
