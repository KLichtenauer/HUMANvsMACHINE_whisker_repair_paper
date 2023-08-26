const test0 = async function (t) {
  t.dragSprite('Milch', 28.131678294160963, -17.982117954574655, null);
  await t.runForSteps(1);
  await t.runForSteps(23);
  await t.runForSteps(1);
  t.dragSprite('Milch', -136.29330008893845, 19.97870526801087, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Milch").x, -136.29330008893845, 5, "Expected Sprite Milch to have x-position -136.29330008893845 +-5");
  t.assert.withinRange(t.getSprite("Milch").y, 19.97870526801087, 5, "Expected Sprite Milch to have y-position 19.97870526801087 +-5");
  await t.runForSteps(90);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Papagei").currentCostume, 0, "Expected Sprite Papagei to have costume 0");
  t.assert.equal(t.getSprite("Milch").currentCostume, 4, "Expected Sprite Milch to have costume 4");
  t.assert.equal(t.getSprite("Papagei").direction, 75, 1, "Expected Sprite Papagei to face in direction 75 +-1");
  t.assert.equal(t.getSprite("Sonne").direction, 150, 1, "Expected Sprite Sonne to face in direction 150 +-1");
  t.assert.withinRange(t.getSprite("Papagei").x, -150.3407417371093, 5, "Expected Sprite Papagei to have x-position -150.3407417371093 +-5");
  t.assert.withinRange(t.getSprite("Papagei").y, -37.411809548974794, 5, "Expected Sprite Papagei to have y-position -37.411809548974794 +-5");
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
      seed: '1687938038367',
      type: 'standard',
  }
]
