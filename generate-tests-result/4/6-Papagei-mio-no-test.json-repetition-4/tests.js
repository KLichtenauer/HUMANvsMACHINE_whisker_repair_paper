const test0 = async function (t) {
  await t.runForSteps(42);
  await t.runForSteps(1);
  t.dragSprite('Papagei', 154.2137528609685, 12.728824083565542, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Papagei").x, 154.2137528609685, 5, "Expected Sprite Papagei to have x-position 154.2137528609685 +-5");
  t.assert.withinRange(t.getSprite("Papagei").y, 12.728824083565542, 5, "Expected Sprite Papagei to have y-position 12.728824083565542 +-5");
  t.dragSprite('Milch', 168.80945809775017, -37.445068568277684, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Milch").currentCostume, 2, "Expected Sprite Milch to have costume 2");
  t.assert.withinRange(t.getSprite("Milch").x, 168.80945809775017, 5, "Expected Sprite Milch to have x-position 168.80945809775017 +-5");
  t.assert.withinRange(t.getSprite("Milch").y, -37.445068568277684, 5, "Expected Sprite Milch to have y-position -37.445068568277684 +-5");
  await t.runForSteps(90);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Milch").currentCostume, 4, "Expected Sprite Milch to have costume 4");
  t.assert.equal(t.getSprite("Sonne").direction, 150, 1, "Expected Sprite Sonne to face in direction 150 +-1");
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
      seed: '1687937545658',
      type: 'standard',
  }
]
