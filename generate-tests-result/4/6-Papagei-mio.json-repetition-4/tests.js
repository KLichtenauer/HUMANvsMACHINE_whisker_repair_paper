const test0 = async function (t) {
  await t.runForSteps(54);
  await t.runForSteps(1);
  t.dragSprite('Papagei', 171, 88, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Milch").currentCostume, 2, "Expected Sprite Milch to have costume 2");
  t.assert.withinRange(t.getSprite("Papagei").x, 171, 5, "Expected Sprite Papagei to have x-position 171 +-5");
  t.assert.withinRange(t.getSprite("Papagei").y, 88, 5, "Expected Sprite Papagei to have y-position 88 +-5");
  await t.runForSteps(18);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sonne").direction, 135, 1, "Expected Sprite Sonne to face in direction 135 +-1");
  t.assert.withinRange(t.getSprite("Sonne").x, -221.336097539853, 5, "Expected Sprite Sonne to have x-position -221.336097539853 +-5");
  t.assert.withinRange(t.getSprite("Sonne").y, 128.48236190979495, 5, "Expected Sprite Sonne to have y-position 128.48236190979495 +-5");
  t.assert.equal(t.getSprite("Papagei").sayText, "Lecker!", "Expected Sprite Papagei to say Lecker!");
  await t.runForSteps(51);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Milch").currentCostume, 4, "Expected Sprite Milch to have costume 4");
  t.assert.equal(t.getSprite("Sonne").direction, 150, 1, "Expected Sprite Sonne to face in direction 150 +-1");
  t.assert.withinRange(t.getSprite("Sonne").x, -219.9218839774799, 5, "Expected Sprite Sonne to have x-position -219.9218839774799 +-5");
  t.assert.withinRange(t.getSprite("Sonne").y, 127.06814834742185, 5, "Expected Sprite Sonne to have y-position 127.06814834742185 +-5");
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
      seed: '1687937278143',
      type: 'standard',
  }
]
