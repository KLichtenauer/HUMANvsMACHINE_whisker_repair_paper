const test0 = async function (t) {
  await t.runForSteps(25);
  await t.runForSteps(1);
  await t.runForSteps(91);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).x, 151, 5, "Expected Clone 1 of Kreatur to have x-position 151 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).y, 135, 5, "Expected Clone 1 of Kreatur to have y-position 135 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).x, 5, 5, "Expected Clone 2 of Kreatur to have x-position 5 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).y, 155, 5, "Expected Clone 2 of Kreatur to have y-position 155 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).x, -131, 5, "Expected Clone 3 of Kreatur to have x-position -131 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).y, -136, 5, "Expected Clone 3 of Kreatur to have y-position -136 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).size, 94, 1, "Expected Clone 1 of Kreatur to have size 94 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).size, 55, 1, "Expected Clone 2 of Kreatur to have size 55 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).size, 72, 1, "Expected Clone 3 of Kreatur to have size 72 +-1");
  t.assert.ok(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur to be visible");
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(25);
  await t.runForSteps(1);
  await t.runForSteps(91);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).x, 151, 5, "Expected Clone 1 of Kreatur to have x-position 151 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).y, 135, 5, "Expected Clone 1 of Kreatur to have y-position 135 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).x, 5, 5, "Expected Clone 2 of Kreatur to have x-position 5 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).y, 155, 5, "Expected Clone 2 of Kreatur to have y-position 155 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).x, -131, 5, "Expected Clone 3 of Kreatur to have x-position -131 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).y, -136, 5, "Expected Clone 3 of Kreatur to have y-position -136 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).size, 94, 1, "Expected Clone 1 of Kreatur to have size 94 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).size, 55, 1, "Expected Clone 2 of Kreatur to have size 55 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).size, 72, 1, "Expected Clone 3 of Kreatur to have size 72 +-1");
  t.assert.ok(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur to be visible");
  t.clickCloneByCoords(-131, -136, 1);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur not to be visible");
  await t.runForSteps(13);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).x, 7, 5, "Expected Clone 1 of Kreatur to have x-position 7 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).y, -167, 5, "Expected Clone 1 of Kreatur to have y-position -167 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).x, 91, 5, "Expected Clone 2 of Kreatur to have x-position 91 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).y, 168, 5, "Expected Clone 2 of Kreatur to have y-position 168 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).size, 67, 1, "Expected Clone 3 of Kreatur to have size 67 +-1");
  t.assert.ok(t.getSprite("Kreatur").getClone(1).visible, "Expected Clone 1 of Kreatur to be visible");
  t.assert.ok(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur to be visible");
  t.clickCloneByCoords(7, -167, 1);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Kreatur").getClone(1).visible, "Expected Clone 1 of Kreatur not to be visible");
  await t.runForSteps(24);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).x, -95, 5, "Expected Clone 3 of Kreatur to have x-position -95 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).y, -112, 5, "Expected Clone 3 of Kreatur to have y-position -112 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).size, 96, 1, "Expected Clone 2 of Kreatur to have size 96 +-1");
  t.assert.not(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur not to be visible");
  t.assert.ok(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur to be visible");
  t.clickCloneByCoords(-95, -112, 1);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur not to be visible");
  await t.runForSteps(96);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).x, 178, 5, "Expected Clone 1 of Kreatur to have x-position 178 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).y, 62, 5, "Expected Clone 1 of Kreatur to have y-position 62 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).x, -7, 5, "Expected Clone 2 of Kreatur to have x-position -7 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).y, -98, 5, "Expected Clone 2 of Kreatur to have y-position -98 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).x, -168, 5, "Expected Clone 3 of Kreatur to have x-position -168 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).y, 175, 5, "Expected Clone 3 of Kreatur to have y-position 175 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).size, 50, 1, "Expected Clone 1 of Kreatur to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).size, 57, 1, "Expected Clone 3 of Kreatur to have size 57 +-1");
  t.assert.ok(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur to be visible");
  t.end();
}
const test2 = async function (t) {
  await t.runForSteps(25);
  await t.runForSteps(1);
  await t.runForSteps(91);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).x, 151, 5, "Expected Clone 1 of Kreatur to have x-position 151 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).y, 135, 5, "Expected Clone 1 of Kreatur to have y-position 135 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).x, 5, 5, "Expected Clone 2 of Kreatur to have x-position 5 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).y, 155, 5, "Expected Clone 2 of Kreatur to have y-position 155 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).x, -131, 5, "Expected Clone 3 of Kreatur to have x-position -131 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).y, -136, 5, "Expected Clone 3 of Kreatur to have y-position -136 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).size, 94, 1, "Expected Clone 1 of Kreatur to have size 94 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).size, 55, 1, "Expected Clone 2 of Kreatur to have size 55 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).size, 72, 1, "Expected Clone 3 of Kreatur to have size 72 +-1");
  t.assert.ok(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur to be visible");
  t.clickCloneByCoords(-131, -136, 1);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur not to be visible");
  await t.runForSteps(96);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).x, 152, 5, "Expected Clone 1 of Kreatur to have x-position 152 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).y, -23, 5, "Expected Clone 1 of Kreatur to have y-position -23 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).x, 168, 5, "Expected Clone 2 of Kreatur to have x-position 168 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).y, 22, 5, "Expected Clone 2 of Kreatur to have y-position 22 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).x, -52, 5, "Expected Clone 3 of Kreatur to have x-position -52 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).y, -45, 5, "Expected Clone 3 of Kreatur to have y-position -45 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).size, 68, 1, "Expected Clone 1 of Kreatur to have size 68 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).size, 96, 1, "Expected Clone 2 of Kreatur to have size 96 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).size, 83, 1, "Expected Clone 3 of Kreatur to have size 83 +-1");
  t.assert.ok(t.getSprite("Kreatur").getClone(1).visible, "Expected Clone 1 of Kreatur to be visible");
  t.assert.ok(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur to be visible");
  t.assert.ok(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur to be visible");
  await t.runForSteps(96);
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
      seed: '1687849336508',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849336508',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849336508',
      type: 'standard',
  }
]
