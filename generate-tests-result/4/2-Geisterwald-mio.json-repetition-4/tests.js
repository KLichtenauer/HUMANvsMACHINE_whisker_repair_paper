const test0 = async function (t) {
  await t.runForSteps(20);
  await t.runForSteps(1);
  await t.runForSteps(41);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).x, 66, 5, "Expected Clone 1 of Kreatur to have x-position 66 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).y, 9, 5, "Expected Clone 1 of Kreatur to have y-position 9 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).x, -2, 5, "Expected Clone 2 of Kreatur to have x-position -2 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).y, 110, 5, "Expected Clone 2 of Kreatur to have y-position 110 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).x, -157, 5, "Expected Clone 3 of Kreatur to have x-position -157 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).y, -73, 5, "Expected Clone 3 of Kreatur to have y-position -73 +-5");
  t.assert.ok(t.getSprite("Kreatur").getClone(1).visible, "Expected Clone 1 of Kreatur to be visible");
  t.assert.ok(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur to be visible");
  t.assert.ok(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur to be visible");
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(20);
  await t.runForSteps(1);
  await t.runForSteps(41);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).x, 66, 5, "Expected Clone 1 of Kreatur to have x-position 66 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).y, 9, 5, "Expected Clone 1 of Kreatur to have y-position 9 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).x, -2, 5, "Expected Clone 2 of Kreatur to have x-position -2 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).y, 110, 5, "Expected Clone 2 of Kreatur to have y-position 110 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).x, -157, 5, "Expected Clone 3 of Kreatur to have x-position -157 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).y, -73, 5, "Expected Clone 3 of Kreatur to have y-position -73 +-5");
  t.assert.ok(t.getSprite("Kreatur").getClone(1).visible, "Expected Clone 1 of Kreatur to be visible");
  t.assert.ok(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur to be visible");
  t.assert.ok(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur to be visible");
  t.clickCloneByCoords(-157, -73, 1);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur not to be visible");
  t.clickCloneByCoords(-2, 110, 1);
  await t.runForSteps(1);
  t.clickCloneByCoords(66, 9, 1);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Kreatur").getClone(1).visible, "Expected Clone 1 of Kreatur not to be visible");
  await t.runForSteps(90);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).x, 230, 5, "Expected Clone 1 of Kreatur to have x-position 230 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).y, -154, 5, "Expected Clone 1 of Kreatur to have y-position -154 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).x, -228, 5, "Expected Clone 2 of Kreatur to have x-position -228 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).y, 24, 5, "Expected Clone 2 of Kreatur to have y-position 24 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).x, 143, 5, "Expected Clone 3 of Kreatur to have x-position 143 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).y, 162, 5, "Expected Clone 3 of Kreatur to have y-position 162 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).size, 80, 1, "Expected Clone 1 of Kreatur to have size 80 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).size, 82, 1, "Expected Clone 2 of Kreatur to have size 82 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).size, 75, 1, "Expected Clone 3 of Kreatur to have size 75 +-1");
  t.assert.ok(t.getSprite("Kreatur").getClone(1).visible, "Expected Clone 1 of Kreatur to be visible");
  t.assert.ok(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur to be visible");
  t.clickCloneByCoords(-228, 24, 1);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur not to be visible");
  t.clickCloneByCoords(143, 162, 1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Gobo").sayText, "Schon drei Punkte!", "Expected Sprite Gobo to say Schon drei Punkte!");
  t.assert.ok(t.getSprite("Gobo").visible, "Expected Sprite Gobo to be visible");
  await t.runForSteps(59);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Gobo").sayText, "Expected Sprite Gobo not to say anything");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).size, 65, 1, "Expected Clone 2 of Kreatur to have size 65 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).size, 85, 1, "Expected Clone 3 of Kreatur to have size 85 +-1");
  t.assert.not(t.getSprite("Gobo").visible, "Expected Sprite Gobo not to be visible");
  t.assert.not(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur not to be visible");
  t.end();
}
const test2 = async function (t) {
  await t.runForSteps(20);
  await t.runForSteps(1);
  await t.runForSteps(41);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).x, 66, 5, "Expected Clone 1 of Kreatur to have x-position 66 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).y, 9, 5, "Expected Clone 1 of Kreatur to have y-position 9 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).x, -2, 5, "Expected Clone 2 of Kreatur to have x-position -2 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).y, 110, 5, "Expected Clone 2 of Kreatur to have y-position 110 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).x, -157, 5, "Expected Clone 3 of Kreatur to have x-position -157 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).y, -73, 5, "Expected Clone 3 of Kreatur to have y-position -73 +-5");
  t.assert.ok(t.getSprite("Kreatur").getClone(1).visible, "Expected Clone 1 of Kreatur to be visible");
  t.assert.ok(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur to be visible");
  t.assert.ok(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur to be visible");
  await t.runForSteps(90);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).x, 230, 5, "Expected Clone 1 of Kreatur to have x-position 230 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).y, -154, 5, "Expected Clone 1 of Kreatur to have y-position -154 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).x, -228, 5, "Expected Clone 2 of Kreatur to have x-position -228 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).y, 24, 5, "Expected Clone 2 of Kreatur to have y-position 24 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).x, 143, 5, "Expected Clone 3 of Kreatur to have x-position 143 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).y, 162, 5, "Expected Clone 3 of Kreatur to have y-position 162 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).size, 80, 1, "Expected Clone 1 of Kreatur to have size 80 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).size, 82, 1, "Expected Clone 2 of Kreatur to have size 82 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).size, 75, 1, "Expected Clone 3 of Kreatur to have size 75 +-1");
  await t.runForSteps(59);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).size, 88, 1, "Expected Clone 2 of Kreatur to have size 88 +-1");
  t.assert.not(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur not to be visible");
  await t.runForSteps(98);
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
      seed: '1687937259452',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937259452',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937259452',
      type: 'standard',
  }
]
