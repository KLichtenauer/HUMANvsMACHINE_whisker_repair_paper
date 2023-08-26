const test0 = async function (t) {
  await t.runForSteps(73);
  await t.runForSteps(1);
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(73);
  await t.runForSteps(1);
  t.clickCloneByCoords(-156, 54, 1);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur not to be visible");
  await t.runForSteps(39);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).x, 8, 5, "Expected Clone 1 of Kreatur to have x-position 8 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).y, -42, 5, "Expected Clone 1 of Kreatur to have y-position -42 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).size, 51, 1, "Expected Clone 2 of Kreatur to have size 51 +-1");
  t.assert.ok(t.getSprite("Kreatur").getClone(1).visible, "Expected Clone 1 of Kreatur to be visible");
  await t.runForSteps(39);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).x, 136, 5, "Expected Clone 2 of Kreatur to have x-position 136 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).y, 14, 5, "Expected Clone 2 of Kreatur to have y-position 14 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).x, -175, 5, "Expected Clone 3 of Kreatur to have x-position -175 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).y, -37, 5, "Expected Clone 3 of Kreatur to have y-position -37 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).size, 100, 1, "Expected Clone 3 of Kreatur to have size 100 +-1");
  t.assert.ok(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur to be visible");
  t.clickCloneByCoords(-175, -37, 1);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur not to be visible");
  t.clickCloneByCoords(136, 14, 1);
  await t.runForSteps(1);
  t.clickCloneByCoords(8, -42, 1);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Kreatur").getClone(1).visible, "Expected Clone 1 of Kreatur not to be visible");
  await t.runForSteps(38);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Gobo").sayText, "Schon drei Punkte!", "Expected Sprite Gobo to say Schon drei Punkte!");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).size, 61, 1, "Expected Clone 1 of Kreatur to have size 61 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).size, 95, 1, "Expected Clone 2 of Kreatur to have size 95 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).size, 98, 1, "Expected Clone 3 of Kreatur to have size 98 +-1");
  t.assert.ok(t.getSprite("Gobo").visible, "Expected Sprite Gobo to be visible");
  t.assert.not(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur not to be visible");
  await t.runForSteps(32);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).x, 115, 5, "Expected Clone 1 of Kreatur to have x-position 115 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).y, -67, 5, "Expected Clone 1 of Kreatur to have y-position -67 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).x, -83, 5, "Expected Clone 2 of Kreatur to have x-position -83 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).y, 46, 5, "Expected Clone 2 of Kreatur to have y-position 46 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).x, -200, 5, "Expected Clone 3 of Kreatur to have x-position -200 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).y, 87, 5, "Expected Clone 3 of Kreatur to have y-position 87 +-5");
  t.assert.not(t.getSprite("Gobo").sayText, "Expected Sprite Gobo not to say anything");
  t.assert.not(t.getSprite("Gobo").visible, "Expected Sprite Gobo not to be visible");
  t.assert.ok(t.getSprite("Kreatur").getClone(1).visible, "Expected Clone 1 of Kreatur to be visible");
  t.assert.ok(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur to be visible");
  t.assert.ok(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur to be visible");
  t.end();
}
const test2 = async function (t) {
  await t.runForSteps(73);
  await t.runForSteps(1);
  await t.runForSteps(22);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).x, 8, 5, "Expected Clone 1 of Kreatur to have x-position 8 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).y, -42, 5, "Expected Clone 1 of Kreatur to have y-position -42 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).size, 51, 1, "Expected Clone 2 of Kreatur to have size 51 +-1");
  t.assert.ok(t.getSprite("Kreatur").getClone(1).visible, "Expected Clone 1 of Kreatur to be visible");
  t.assert.not(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur not to be visible");
  await t.runForSteps(39);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).x, 136, 5, "Expected Clone 2 of Kreatur to have x-position 136 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).y, 14, 5, "Expected Clone 2 of Kreatur to have y-position 14 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).size, 100, 1, "Expected Clone 3 of Kreatur to have size 100 +-1");
  t.assert.ok(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur to be visible");
  t.assert.not(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur not to be visible");
  await t.runForSteps(39);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).x, -175, 5, "Expected Clone 3 of Kreatur to have x-position -175 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).y, -37, 5, "Expected Clone 3 of Kreatur to have y-position -37 +-5");
  t.assert.ok(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur to be visible");
  await t.runForSteps(38);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).x, -217, 5, "Expected Clone 1 of Kreatur to have x-position -217 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).y, 159, 5, "Expected Clone 1 of Kreatur to have y-position 159 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).x, -144, 5, "Expected Clone 2 of Kreatur to have x-position -144 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).y, 110, 5, "Expected Clone 2 of Kreatur to have y-position 110 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).x, 112, 5, "Expected Clone 3 of Kreatur to have x-position 112 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).y, 168, 5, "Expected Clone 3 of Kreatur to have y-position 168 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).size, 71, 1, "Expected Clone 1 of Kreatur to have size 71 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).size, 56, 1, "Expected Clone 2 of Kreatur to have size 56 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).size, 81, 1, "Expected Clone 3 of Kreatur to have size 81 +-1");
  await t.runForSteps(32);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).size, 65, 1, "Expected Clone 1 of Kreatur to have size 65 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).size, 61, 1, "Expected Clone 2 of Kreatur to have size 61 +-1");
  t.assert.not(t.getSprite("Kreatur").getClone(1).visible, "Expected Clone 1 of Kreatur not to be visible");
  t.assert.not(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur not to be visible");
  await t.runForSteps(65);
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
      seed: '1687936637692',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936637692',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936637692',
      type: 'standard',
  }
]
