const test0 = async function (t) {
  t.dragSprite('Milch', 28.131678294160963, -17.982117954574655, null);
  await t.runForSteps(1);
  await t.runForSteps(77);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Papagei").currentCostume, 0, "Expected Sprite Papagei to have costume 0");
  t.assert.equal(t.getSprite("Papagei").direction, 75, 1, "Expected Sprite Papagei to face in direction 75 +-1");
  t.assert.equal(t.getSprite("Sonne").direction, 135, 1, "Expected Sprite Sonne to face in direction 135 +-1");
  t.assert.withinRange(t.getSprite("Papagei").x, -34.42964258242108, 5, "Expected Sprite Papagei to have x-position -34.42964258242108 +-5");
  t.assert.withinRange(t.getSprite("Papagei").y, -6.35352413667232, 5, "Expected Sprite Papagei to have y-position -6.35352413667232 +-5");
  t.assert.withinRange(t.getSprite("Sonne").x, -221.336097539853, 5, "Expected Sprite Sonne to have x-position -221.336097539853 +-5");
  t.assert.withinRange(t.getSprite("Sonne").y, 128.48236190979495, 5, "Expected Sprite Sonne to have y-position 128.48236190979495 +-5");
  t.assert.not(t.getSprite("Papagei").sayText, "Expected Sprite Papagei not to say anything");
  await t.runForSteps(62);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Papagei").currentCostume, 1, "Expected Sprite Papagei to have costume 1");
  t.assert.equal(t.getSprite("Milch").currentCostume, 4, "Expected Sprite Milch to have costume 4");
  t.assert.equal(t.getSprite("Sonne").direction, 165, 1, "Expected Sprite Sonne to face in direction 165 +-1");
  t.assert.withinRange(t.getSprite("Papagei").x, -24.7703843195304, 5, "Expected Sprite Papagei to have x-position -24.7703843195304 +-5");
  t.assert.withinRange(t.getSprite("Papagei").y, -3.7653336856471125, 5, "Expected Sprite Papagei to have y-position -3.7653336856471125 +-5");
  t.assert.withinRange(t.getSprite("Sonne").x, -218.9218839774799, 5, "Expected Sprite Sonne to have x-position -218.9218839774799 +-5");
  t.assert.withinRange(t.getSprite("Sonne").y, 125.33609753985297, 5, "Expected Sprite Sonne to have y-position 125.33609753985297 +-5");
  t.assert.equal(t.getSprite("Papagei").sayText, "Lecker!", "Expected Sprite Papagei to say Lecker!");
  await t.runForSteps(87);
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
      seed: '1687939146792',
      type: 'standard',
  }
]
