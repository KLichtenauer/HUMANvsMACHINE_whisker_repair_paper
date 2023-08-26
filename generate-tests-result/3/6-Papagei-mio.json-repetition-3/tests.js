const test0 = async function (t) {
  await t.runForSteps(86);
  await t.runForSteps(1);
  await t.runForSteps(77);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Milch").currentCostume, 2, "Expected Sprite Milch to have costume 2");
  t.assert.equal(t.getSprite("Sonne").direction, 180, 1, "Expected Sprite Sonne to face in direction 180 +-1");
  t.assert.withinRange(t.getSprite("Papagei").x, 139.43700614961122, 5, "Expected Sprite Papagei to have x-position 139.43700614961122 +-5");
  t.assert.withinRange(t.getSprite("Papagei").y, 40.233903981781395, 5, "Expected Sprite Papagei to have y-position 40.233903981781395 +-5");
  t.assert.withinRange(t.getSprite("Sonne").x, -218.40424588727484, 5, "Expected Sprite Sonne to have x-position -218.40424588727484 +-5");
  t.assert.withinRange(t.getSprite("Sonne").y, 123.40424588727484, 5, "Expected Sprite Sonne to have y-position 123.40424588727484 +-5");
  t.assert.equal(t.getSprite("Papagei").sayText, "Lecker!", "Expected Sprite Papagei to say Lecker!");
  await t.runForSteps(72);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Milch").currentCostume, 4, "Expected Sprite Milch to have costume 4");
  t.assert.equal(t.getSprite("Sonne").direction, -165, 1, "Expected Sprite Sonne to face in direction -165 +-1");
  t.assert.withinRange(t.getSprite("Sonne").x, -218.40424588727484, 5, "Expected Sprite Sonne to have x-position -218.40424588727484 +-5");
  t.assert.withinRange(t.getSprite("Sonne").y, 121.40424588727484, 5, "Expected Sprite Sonne to have y-position 121.40424588727484 +-5");
  t.assert.not(t.getSprite("Papagei").sayText, "Expected Sprite Papagei not to say anything");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936643989',
      type: 'standard',
  }
]
