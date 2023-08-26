const test0 = async function (t) {
  t.dragSprite('Milch', 7.325594846492459, -50.54827530478401, null);
  await t.runForSteps(1);
  await t.runForSteps(33);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Papagei").direction, 75, 1, "Expected Sprite Papagei to face in direction 75 +-1");
  t.assert.equal(t.getSprite("Sonne").direction, 120, 1, "Expected Sprite Sonne to face in direction 120 +-1");
  t.assert.withinRange(t.getSprite("Papagei").x, -140.68148347421862, 5, "Expected Sprite Papagei to have x-position -140.68148347421862 +-5");
  t.assert.withinRange(t.getSprite("Papagei").y, -34.82361909794959, 5, "Expected Sprite Papagei to have y-position -34.82361909794959 +-5");
  t.assert.withinRange(t.getSprite("Sonne").x, -223.06814834742187, 5, "Expected Sprite Sonne to have x-position -223.06814834742187 +-5");
  t.assert.withinRange(t.getSprite("Sonne").y, 129.48236190979495, 5, "Expected Sprite Sonne to have y-position 129.48236190979495 +-5");
  t.assert.not(t.getSprite("Papagei").sayText, "Expected Sprite Papagei not to say anything");
  t.dragSprite('Milch', -161.51361100322242, 6.955805895727067, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Milch").x, -161.51361100322242, 5, "Expected Sprite Milch to have x-position -161.51361100322242 +-5");
  t.assert.withinRange(t.getSprite("Milch").y, 6.955805895727067, 5, "Expected Sprite Milch to have y-position 6.955805895727067 +-5");
  await t.runForSteps(67);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Papagei").currentCostume, 0, "Expected Sprite Papagei to have costume 0");
  t.assert.equal(t.getSprite("Milch").currentCostume, 4, "Expected Sprite Milch to have costume 4");
  t.assert.equal(t.getSprite("Sonne").direction, 150, 1, "Expected Sprite Sonne to face in direction 150 +-1");
  t.assert.withinRange(t.getSprite("Papagei").x, -131.02222521132794, 5, "Expected Sprite Papagei to have x-position -131.02222521132794 +-5");
  t.assert.withinRange(t.getSprite("Papagei").y, -32.23542864692438, 5, "Expected Sprite Papagei to have y-position -32.23542864692438 +-5");
  t.assert.withinRange(t.getSprite("Sonne").x, -219.9218839774799, 5, "Expected Sprite Sonne to have x-position -219.9218839774799 +-5");
  t.assert.withinRange(t.getSprite("Sonne").y, 127.06814834742185, 5, "Expected Sprite Sonne to have y-position 127.06814834742185 +-5");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936759855',
      type: 'standard',
  }
]
