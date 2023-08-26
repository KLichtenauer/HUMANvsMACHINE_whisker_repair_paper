const test0 = async function (t) {
  await t.runForSteps(19);
  await t.runForSteps(1);
  await t.runForSteps(98);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Papagei").currentCostume, 0, "Expected Sprite Papagei to have costume 0");
  t.assert.equal(t.getSprite("Papagei").direction, 75, 1, "Expected Sprite Papagei to face in direction 75 +-1");
  t.assert.equal(t.getSprite("Sonne").direction, 150, 1, "Expected Sprite Sonne to face in direction 150 +-1");
  t.assert.withinRange(t.getSprite("Papagei").x, 62.16294004648574, 5, "Expected Sprite Papagei to have x-position 62.16294004648574 +-5");
  t.assert.withinRange(t.getSprite("Papagei").y, 19.52838037357975, 5, "Expected Sprite Papagei to have y-position 19.52838037357975 +-5");
  t.assert.withinRange(t.getSprite("Sonne").x, -219.9218839774799, 5, "Expected Sprite Sonne to have x-position -219.9218839774799 +-5");
  t.assert.withinRange(t.getSprite("Sonne").y, 127.06814834742185, 5, "Expected Sprite Sonne to have y-position 127.06814834742185 +-5");
  t.assert.not(t.getSprite("Papagei").sayText, "Expected Sprite Papagei not to say anything");
  t.dragSprite('Milch', 62, 19, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Milch").currentCostume, 2, "Expected Sprite Milch to have costume 2");
  t.assert.withinRange(t.getSprite("Milch").x, 62, 5, "Expected Sprite Milch to have x-position 62 +-5");
  t.assert.withinRange(t.getSprite("Milch").y, 19, 5, "Expected Sprite Milch to have y-position 19 +-5");
  await t.runForSteps(13);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sonne").direction, 165, 1, "Expected Sprite Sonne to face in direction 165 +-1");
  t.assert.withinRange(t.getSprite("Sonne").x, -218.9218839774799, 5, "Expected Sprite Sonne to have x-position -218.9218839774799 +-5");
  t.assert.withinRange(t.getSprite("Sonne").y, 125.33609753985297, 5, "Expected Sprite Sonne to have y-position 125.33609753985297 +-5");
  t.assert.equal(t.getSprite("Papagei").sayText, "Lecker!", "Expected Sprite Papagei to say Lecker!");
  await t.runForSteps(29);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Milch").currentCostume, 4, "Expected Sprite Milch to have costume 4");
  t.assert.equal(t.getSprite("Sonne").direction, 180, 1, "Expected Sprite Sonne to face in direction 180 +-1");
  t.assert.withinRange(t.getSprite("Sonne").x, -218.40424588727484, 5, "Expected Sprite Sonne to have x-position -218.40424588727484 +-5");
  t.assert.withinRange(t.getSprite("Sonne").y, 123.40424588727484, 5, "Expected Sprite Sonne to have y-position 123.40424588727484 +-5");
  await t.runForSteps(3);
  await t.runForSteps(1);
  await t.runForSteps(16);
  await t.runForSteps(1);
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
      seed: '1687849340767',
      type: 'standard',
  }
]
