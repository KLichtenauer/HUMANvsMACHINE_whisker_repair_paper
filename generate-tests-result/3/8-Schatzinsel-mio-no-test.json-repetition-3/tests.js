const test0 = async function (t) {
  await t.runForSteps(93);
  await t.runForSteps(1);
  await t.runForSteps(5);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -22.14285714285714, 5, "Expected Sprite Pirat to have x-position -22.14285714285714 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, -68.94285714285714, 5, "Expected Sprite Pirat to have y-position -68.94285714285714 +-5");
  t.assert.withinRange(t.getSprite("Pirat").size, 44, 1, "Expected Sprite Pirat to have size 44 +-1");
  await t.runForSteps(17);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -0.7142857142857224, 5, "Expected Sprite Pirat to have x-position -0.7142857142857224 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, -69.11428571428571, 5, "Expected Sprite Pirat to have y-position -69.11428571428571 +-5");
  t.assert.withinRange(t.getSprite("Pirat").size, 39, 1, "Expected Sprite Pirat to have size 39 +-1");
  await t.runForSteps(77);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 92.14285714285714, 5, "Expected Sprite Pirat to have x-position 92.14285714285714 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, -69.85714285714286, 5, "Expected Sprite Pirat to have y-position -69.85714285714286 +-5");
  t.assert.withinRange(t.getSprite("Pirat").size, 20, 1, "Expected Sprite Pirat to have size 20 +-1");
  await t.runForSteps(43);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 103.55555555555556, 5, "Expected Sprite Pirat to have x-position 103.55555555555556 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, -41, 5, "Expected Sprite Pirat to have y-position -41 +-5");
  t.assert.equal(t.getSprite("Pirat").sayText, "Wir sind vielen Gefahren begegnet.", "Expected Sprite Pirat to say Wir sind vielen Gefahren begegnet.");
  t.assert.withinRange(t.getSprite("Pirat").size, 19, 1, "Expected Sprite Pirat to have size 19 +-1");
  await t.runForSteps(33);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 96, 5, "Expected Sprite Pirat to have x-position 96 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, -7.000000000000007, 5, "Expected Sprite Pirat to have y-position -7.000000000000007 +-5");
  await t.runForSteps(23);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 90.66666666666667, 5, "Expected Sprite Pirat to have x-position 90.66666666666667 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 17, 5, "Expected Sprite Pirat to have y-position 17 +-5");
  await t.runForSteps(56);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 18, 5, "Expected Sprite Pirat to have x-position 18 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 11, 5, "Expected Sprite Pirat to have y-position 11 +-5");
  t.assert.equal(t.getSprite("Pirat").sayText, "Es gab viele aktive Vulkane auf der Insel.", "Expected Sprite Pirat to say Es gab viele aktive Vulkane auf der Insel.");
  await t.runForSteps(18);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, 3.5, 5, "Expected Sprite Pirat to have x-position 3.5 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 23, 5, "Expected Sprite Pirat to have y-position 23 +-5");
  t.assert.ok(t.getSprite("Vulkaninsel").visible, "Expected Sprite Vulkaninsel to be visible");
  await t.runForSteps(31);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -12.5, 5, "Expected Sprite Pirat to have x-position -12.5 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 55, 5, "Expected Sprite Pirat to have y-position 55 +-5");
  await t.runForSteps(5);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -15.5, 5, "Expected Sprite Pirat to have x-position -15.5 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 61, 5, "Expected Sprite Pirat to have y-position 61 +-5");
  await t.runForSteps(72);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -20, 5, "Expected Sprite Pirat to have x-position -20 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 70, 5, "Expected Sprite Pirat to have y-position 70 +-5");
  t.assert.equal(t.getSprite("Pirat").sayText, "Endlich hatten wir den Schatz erreicht. ", "Expected Sprite Pirat to say Endlich hatten wir den Schatz erreicht. ");
  t.assert.ok(t.getSprite("Schatztruhe").visible, "Expected Sprite Schatztruhe to be visible");
  await t.runForSteps(22);
  await t.runForSteps(1);
  await t.runForSteps(29);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Pirat").sayText, "Doch den größten Schatz habe ich auf dem Heimweg kennengelernt.", "Expected Sprite Pirat to say Doch den größten Schatz habe ich auf dem Heimweg kennengelernt.");
  await t.runForSteps(35);
  await t.runForSteps(1);
  await t.runForSteps(94);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pirat").x, -26, 5, "Expected Sprite Pirat to have x-position -26 +-5");
  t.assert.withinRange(t.getSprite("Pirat").y, 64, 5, "Expected Sprite Pirat to have y-position 64 +-5");
  t.assert.not(t.getSprite("Pirat").sayText, "Expected Sprite Pirat not to say anything");
  t.assert.withinRange(t.getSprite("Pirat").size, 28, 1, "Expected Sprite Pirat to have size 28 +-1");
  t.assert.withinRange(t.getSprite("Mädchen").size, 28, 1, "Expected Sprite Mädchen to have size 28 +-1");
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
      seed: '1687936793858',
      type: 'standard',
  }
]
