const test0 = async function (t) {
  await t.runForSteps(88);
  await t.runForSteps(1);
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(88);
  await t.runForSteps(1);
  t.clickCloneByCoords(118, 6, 1);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Kreatur").getClone(1).visible, "Expected Clone 1 of Kreatur not to be visible");
  await t.runForSteps(63);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).x, 124, 5, "Expected Clone 1 of Kreatur to have x-position 124 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).y, -163, 5, "Expected Clone 1 of Kreatur to have y-position -163 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).x, 195, 5, "Expected Clone 2 of Kreatur to have x-position 195 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).y, 174, 5, "Expected Clone 2 of Kreatur to have y-position 174 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).x, 62, 5, "Expected Clone 3 of Kreatur to have x-position 62 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).y, -58, 5, "Expected Clone 3 of Kreatur to have y-position -58 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).size, 63, 1, "Expected Clone 1 of Kreatur to have size 63 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).size, 88, 1, "Expected Clone 3 of Kreatur to have size 88 +-1");
  t.assert.ok(t.getSprite("Kreatur").getClone(1).visible, "Expected Clone 1 of Kreatur to be visible");
  t.assert.ok(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur to be visible");
  t.clickCloneByCoords(195, 174, 1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).x, -99, 5, "Expected Clone 3 of Kreatur to have x-position -99 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).y, -50, 5, "Expected Clone 3 of Kreatur to have y-position -50 +-5");
  t.assert.not(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur not to be visible");
  t.assert.ok(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur to be visible");
  t.clickCloneByCoords(124, -163, 1);
  await t.runForSteps(1);
  t.clickCloneByCoords(124, -163, 1);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Kreatur").getClone(1).visible, "Expected Clone 1 of Kreatur not to be visible");
  await t.runForSteps(66);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).x, 131, 5, "Expected Clone 2 of Kreatur to have x-position 131 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).y, -180, 5, "Expected Clone 2 of Kreatur to have y-position -180 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).size, 56, 1, "Expected Clone 1 of Kreatur to have size 56 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).size, 75, 1, "Expected Clone 2 of Kreatur to have size 75 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).size, 50, 1, "Expected Clone 3 of Kreatur to have size 50 +-1");
  t.assert.ok(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur to be visible");
  t.assert.not(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur not to be visible");
  t.end();
}
const test2 = async function (t) {
  await t.runForSteps(88);
  await t.runForSteps(1);
  t.clickCloneByCoords(118, 6, 1);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Kreatur").getClone(1).visible, "Expected Clone 1 of Kreatur not to be visible");
  await t.runForSteps(63);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).x, 124, 5, "Expected Clone 1 of Kreatur to have x-position 124 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).y, -163, 5, "Expected Clone 1 of Kreatur to have y-position -163 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).x, 195, 5, "Expected Clone 2 of Kreatur to have x-position 195 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).y, 174, 5, "Expected Clone 2 of Kreatur to have y-position 174 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).x, 62, 5, "Expected Clone 3 of Kreatur to have x-position 62 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).y, -58, 5, "Expected Clone 3 of Kreatur to have y-position -58 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).size, 63, 1, "Expected Clone 1 of Kreatur to have size 63 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).size, 88, 1, "Expected Clone 3 of Kreatur to have size 88 +-1");
  t.assert.ok(t.getSprite("Kreatur").getClone(1).visible, "Expected Clone 1 of Kreatur to be visible");
  t.assert.ok(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur to be visible");
  await t.runForSteps(48);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).x, -99, 5, "Expected Clone 3 of Kreatur to have x-position -99 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).y, -50, 5, "Expected Clone 3 of Kreatur to have y-position -50 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).size, 100, 1, "Expected Clone 2 of Kreatur to have size 100 +-1");
  t.assert.not(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur not to be visible");
  t.assert.ok(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur to be visible");
  await t.runForSteps(66);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).x, -60, 5, "Expected Clone 1 of Kreatur to have x-position -60 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).y, 48, 5, "Expected Clone 1 of Kreatur to have y-position 48 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).x, 174, 5, "Expected Clone 2 of Kreatur to have x-position 174 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).y, 74, 5, "Expected Clone 2 of Kreatur to have y-position 74 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).x, -91, 5, "Expected Clone 3 of Kreatur to have x-position -91 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).y, 68, 5, "Expected Clone 3 of Kreatur to have y-position 68 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).size, 60, 1, "Expected Clone 1 of Kreatur to have size 60 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).size, 91, 1, "Expected Clone 3 of Kreatur to have size 91 +-1");
  t.assert.ok(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur to be visible");
  await t.runForSteps(42);
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
      seed: '1687938808967',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938808967',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938808967',
      type: 'standard',
  }
]
