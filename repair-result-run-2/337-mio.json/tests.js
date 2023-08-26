const test0 = async function (t) {
  await t.runForSteps(25);
  await t.runForSteps(1);
  await t.runForSteps(11);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).x, -141, 5, "Expected Clone 1 of Kreatur to have x-position -141 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).y, 130, 5, "Expected Clone 1 of Kreatur to have y-position 130 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).x, 138, 5, "Expected Clone 2 of Kreatur to have x-position 138 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).y, -64, 5, "Expected Clone 2 of Kreatur to have y-position -64 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).x, 96, 5, "Expected Clone 3 of Kreatur to have x-position 96 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).y, -40, 5, "Expected Clone 3 of Kreatur to have y-position -40 +-5");
  t.assert.ok(t.getSprite("Kreatur").getClone(1).visible, "Expected Clone 1 of Kreatur to be visible");
  t.assert.ok(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur to be visible");
  t.assert.ok(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur to be visible");
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(25);
  await t.runForSteps(1);
  await t.runForSteps(11);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).x, -141, 5, "Expected Clone 1 of Kreatur to have x-position -141 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).y, 130, 5, "Expected Clone 1 of Kreatur to have y-position 130 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).x, 138, 5, "Expected Clone 2 of Kreatur to have x-position 138 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).y, -64, 5, "Expected Clone 2 of Kreatur to have y-position -64 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).x, 96, 5, "Expected Clone 3 of Kreatur to have x-position 96 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).y, -40, 5, "Expected Clone 3 of Kreatur to have y-position -40 +-5");
  t.assert.ok(t.getSprite("Kreatur").getClone(1).visible, "Expected Clone 1 of Kreatur to be visible");
  t.assert.ok(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur to be visible");
  t.assert.ok(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur to be visible");
  t.clickCloneByCoords(-141, 130, 1);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Kreatur").getClone(1).visible, "Expected Clone 1 of Kreatur not to be visible");
  t.clickCloneByCoords(138, -64, 1);
  await t.runForSteps(1);
  t.clickCloneByCoords(96, -40, 1);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur not to be visible");
  t.clickCloneByCoords(138, -64, 1);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur not to be visible");
  await t.runForSteps(24);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Gobo").sayText, "Schon drei Punkte!", "Expected Sprite Gobo to say Schon drei Punkte!");
  t.assert.ok(t.getSprite("Gobo").visible, "Expected Sprite Gobo to be visible");
  await t.runForSteps(42);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Gobo").sayText, "Expected Sprite Gobo not to say anything");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).size, 90, 1, "Expected Clone 1 of Kreatur to have size 90 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).size, 93, 1, "Expected Clone 2 of Kreatur to have size 93 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).size, 69, 1, "Expected Clone 3 of Kreatur to have size 69 +-1");
  t.assert.not(t.getSprite("Gobo").visible, "Expected Sprite Gobo not to be visible");
  t.end();
}
const test2 = async function (t) {
  await t.runForSteps(25);
  await t.runForSteps(1);
  await t.runForSteps(11);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).x, -141, 5, "Expected Clone 1 of Kreatur to have x-position -141 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).y, 130, 5, "Expected Clone 1 of Kreatur to have y-position 130 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).x, 138, 5, "Expected Clone 2 of Kreatur to have x-position 138 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).y, -64, 5, "Expected Clone 2 of Kreatur to have y-position -64 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).x, 96, 5, "Expected Clone 3 of Kreatur to have x-position 96 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).y, -40, 5, "Expected Clone 3 of Kreatur to have y-position -40 +-5");
  t.assert.ok(t.getSprite("Kreatur").getClone(1).visible, "Expected Clone 1 of Kreatur to be visible");
  t.assert.ok(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur to be visible");
  t.assert.ok(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur to be visible");
  t.clickCloneByCoords(-141, 130, 1);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Kreatur").getClone(1).visible, "Expected Clone 1 of Kreatur not to be visible");
  t.clickCloneByCoords(138, -64, 1);
  await t.runForSteps(1);
  t.clickCloneByCoords(96, -40, 1);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur not to be visible");
  t.clickCloneByCoords(138, -64, 1);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur not to be visible");
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Gobo").sayText, "Schon drei Punkte!", "Expected Sprite Gobo to say Schon drei Punkte!");
  t.assert.ok(t.getSprite("Gobo").visible, "Expected Sprite Gobo to be visible");
  await t.runForSteps(42);
  await t.runForSteps(1);
  await t.runForSteps(92);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).x, -236, 5, "Expected Clone 1 of Kreatur to have x-position -236 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).y, -32, 5, "Expected Clone 1 of Kreatur to have y-position -32 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).x, 223, 5, "Expected Clone 2 of Kreatur to have x-position 223 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).y, 90, 5, "Expected Clone 2 of Kreatur to have y-position 90 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).x, -81, 5, "Expected Clone 3 of Kreatur to have x-position -81 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).y, -88, 5, "Expected Clone 3 of Kreatur to have y-position -88 +-5");
  t.assert.not(t.getSprite("Gobo").sayText, "Expected Sprite Gobo not to say anything");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).size, 90, 1, "Expected Clone 1 of Kreatur to have size 90 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).size, 93, 1, "Expected Clone 2 of Kreatur to have size 93 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).size, 69, 1, "Expected Clone 3 of Kreatur to have size 69 +-1");
  t.assert.not(t.getSprite("Gobo").visible, "Expected Sprite Gobo not to be visible");
  t.assert.ok(t.getSprite("Kreatur").getClone(1).visible, "Expected Clone 1 of Kreatur to be visible");
  t.assert.ok(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur to be visible");
  t.assert.ok(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur to be visible");
  await t.runForSteps(39);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).x, -233, 5, "Expected Clone 1 of Kreatur to have x-position -233 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).y, 146, 5, "Expected Clone 1 of Kreatur to have y-position 146 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).size, 96, 1, "Expected Clone 1 of Kreatur to have size 96 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).size, 80, 1, "Expected Clone 2 of Kreatur to have size 80 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).size, 76, 1, "Expected Clone 3 of Kreatur to have size 76 +-1");
  t.assert.not(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur not to be visible");
  t.assert.not(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur not to be visible");
  await t.runForSteps(92);
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
      seed: '1687938032557',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938032557',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938032557',
      type: 'standard',
  }
]
