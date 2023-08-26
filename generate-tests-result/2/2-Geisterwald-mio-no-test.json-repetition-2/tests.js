const test0 = async function (t) {
  await t.runForSteps(10);
  await t.runForSteps(1);
  await t.runForSteps(8);
  await t.runForSteps(1);
  await t.runForSteps(98);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).x, 10, 5, "Expected Clone 1 of Kreatur to have x-position 10 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).y, -85, 5, "Expected Clone 1 of Kreatur to have y-position -85 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).x, 112, 5, "Expected Clone 2 of Kreatur to have x-position 112 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).y, 154, 5, "Expected Clone 2 of Kreatur to have y-position 154 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).x, 179, 5, "Expected Clone 3 of Kreatur to have x-position 179 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).y, 32, 5, "Expected Clone 3 of Kreatur to have y-position 32 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).size, 67, 1, "Expected Clone 1 of Kreatur to have size 67 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).size, 54, 1, "Expected Clone 2 of Kreatur to have size 54 +-1");
  t.assert.ok(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur to be visible");
  t.assert.ok(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur to be visible");
  t.clickCloneByCoords(112, 154, 1);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur not to be visible");
  t.clickCloneByCoords(179, 32, 1);
  await t.runForSteps(1);
  await t.runForSteps(25);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).x, 149, 5, "Expected Clone 1 of Kreatur to have x-position 149 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).y, -19, 5, "Expected Clone 1 of Kreatur to have y-position -19 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).size, 61, 1, "Expected Clone 3 of Kreatur to have size 61 +-1");
  t.assert.ok(t.getSprite("Kreatur").getClone(1).visible, "Expected Clone 1 of Kreatur to be visible");
  t.assert.not(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur not to be visible");
  t.clickCloneByCoords(149, -19, 1);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Kreatur").getClone(1).visible, "Expected Clone 1 of Kreatur not to be visible");
  await t.runForSteps(29);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).x, -167, 5, "Expected Clone 3 of Kreatur to have x-position -167 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).y, -156, 5, "Expected Clone 3 of Kreatur to have y-position -156 +-5");
  t.assert.ok(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur to be visible");
  t.clickCloneByCoords(-167, -156, 1);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur not to be visible");
  await t.runForSteps(46);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).x, 100, 5, "Expected Clone 1 of Kreatur to have x-position 100 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).y, 91, 5, "Expected Clone 1 of Kreatur to have y-position 91 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).x, 41, 5, "Expected Clone 2 of Kreatur to have x-position 41 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).y, -84, 5, "Expected Clone 2 of Kreatur to have y-position -84 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).x, 31, 5, "Expected Clone 3 of Kreatur to have x-position 31 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).y, -55, 5, "Expected Clone 3 of Kreatur to have y-position -55 +-5");
  t.assert.equal(t.getSprite("Gobo").sayText, "Schon drei Punkte!", "Expected Sprite Gobo to say Schon drei Punkte!");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).size, 97, 1, "Expected Clone 1 of Kreatur to have size 97 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).size, 92, 1, "Expected Clone 2 of Kreatur to have size 92 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).size, 90, 1, "Expected Clone 3 of Kreatur to have size 90 +-1");
  t.assert.ok(t.getSprite("Gobo").visible, "Expected Sprite Gobo to be visible");
  t.assert.ok(t.getSprite("Kreatur").getClone(1).visible, "Expected Clone 1 of Kreatur to be visible");
  t.assert.ok(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur to be visible");
  t.assert.ok(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur to be visible");
  await t.runForSteps(13);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Gobo").sayText, "Expected Sprite Gobo not to say anything");
  t.assert.not(t.getSprite("Gobo").visible, "Expected Sprite Gobo not to be visible");
  t.clickCloneByCoords(31, -55, 1);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur not to be visible");
  t.clickCloneByCoords(100, 91, 1);
  await t.runForSteps(1);
  t.clickCloneByCoords(41, -84, 1);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur not to be visible");
  await t.runForSteps(59);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).x, -199, 5, "Expected Clone 3 of Kreatur to have x-position -199 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).y, -21, 5, "Expected Clone 3 of Kreatur to have y-position -21 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).size, 100, 1, "Expected Clone 1 of Kreatur to have size 100 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).size, 68, 1, "Expected Clone 2 of Kreatur to have size 68 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).size, 89, 1, "Expected Clone 3 of Kreatur to have size 89 +-1");
  t.assert.not(t.getSprite("Kreatur").getClone(1).visible, "Expected Clone 1 of Kreatur not to be visible");
  t.assert.ok(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur to be visible");
  t.clickCloneByCoords(-199, -21, 1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).x, 65, 5, "Expected Clone 1 of Kreatur to have x-position 65 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).y, -107, 5, "Expected Clone 1 of Kreatur to have y-position -107 +-5");
  t.assert.ok(t.getSprite("Kreatur").getClone(1).visible, "Expected Clone 1 of Kreatur to be visible");
  t.assert.not(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur not to be visible");
  t.clickCloneByCoords(65, -107, 1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).x, 81, 5, "Expected Clone 2 of Kreatur to have x-position 81 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).y, 29, 5, "Expected Clone 2 of Kreatur to have y-position 29 +-5");
  t.assert.ok(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur to be visible");
  await t.runForSteps(8);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Kreatur").getCloneCount(), 0, "Expected Sprite Kreatur to have 0 clones");
  t.assert.equal(t.getSprite("Kreatur").layerOrder, 1, "Expected Sprite Kreatur to be at layer 1");
  t.assert.equal(t.getSprite("Gobo").layerOrder, 2, "Expected Sprite Gobo to be at layer 2");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687939145880',
      type: 'standard',
  }
]
