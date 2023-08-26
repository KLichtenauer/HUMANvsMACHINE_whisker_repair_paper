const test0 = async function (t) {
  await t.runForSteps(26);
  await t.runForSteps(1);
  await t.runForSteps(52);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).x, -58, 5, "Expected Clone 1 of Kreatur to have x-position -58 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).y, -153, 5, "Expected Clone 1 of Kreatur to have y-position -153 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).x, -162, 5, "Expected Clone 2 of Kreatur to have x-position -162 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).y, 151, 5, "Expected Clone 2 of Kreatur to have y-position 151 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).x, 213, 5, "Expected Clone 3 of Kreatur to have x-position 213 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).y, 144, 5, "Expected Clone 3 of Kreatur to have y-position 144 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).size, 83, 1, "Expected Clone 1 of Kreatur to have size 83 +-1");
  t.assert.ok(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur to be visible");
  t.assert.ok(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur to be visible");
  t.clickCloneByCoords(213, 144, 1);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur not to be visible");
  t.clickCloneByCoords(-162, 151, 1);
  await t.runForSteps(1);
  t.clickCloneByCoords(-162, 151, 1);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur not to be visible");
  await t.runForSteps(84);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).x, -159, 5, "Expected Clone 1 of Kreatur to have x-position -159 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).y, 46, 5, "Expected Clone 1 of Kreatur to have y-position 46 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).x, -48, 5, "Expected Clone 2 of Kreatur to have x-position -48 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).y, -129, 5, "Expected Clone 2 of Kreatur to have y-position -129 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).x, 24, 5, "Expected Clone 3 of Kreatur to have x-position 24 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).y, 57, 5, "Expected Clone 3 of Kreatur to have y-position 57 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).size, 72, 1, "Expected Clone 1 of Kreatur to have size 72 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).size, 77, 1, "Expected Clone 2 of Kreatur to have size 77 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).size, 87, 1, "Expected Clone 3 of Kreatur to have size 87 +-1");
  t.assert.ok(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur to be visible");
  t.assert.ok(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur to be visible");
  t.clickCloneByCoords(24, 57, 1);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur not to be visible");
  t.clickCloneByCoords(-48, -129, 1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Gobo").sayText, "Schon drei Punkte!", "Expected Sprite Gobo to say Schon drei Punkte!");
  t.assert.ok(t.getSprite("Gobo").visible, "Expected Sprite Gobo to be visible");
  await t.runForSteps(44);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).x, -90, 5, "Expected Clone 1 of Kreatur to have x-position -90 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).y, -161, 5, "Expected Clone 1 of Kreatur to have y-position -161 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).x, -78, 5, "Expected Clone 2 of Kreatur to have x-position -78 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).y, -78, 5, "Expected Clone 2 of Kreatur to have y-position -78 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).size, 50, 1, "Expected Clone 2 of Kreatur to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).size, 56, 1, "Expected Clone 3 of Kreatur to have size 56 +-1");
  t.assert.ok(t.getSprite("Kreatur").getClone(1).visible, "Expected Clone 1 of Kreatur to be visible");
  t.clickCloneByCoords(-78, -78, 1);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur not to be visible");
  t.clickCloneByCoords(-90, -161, 1);
  await t.runForSteps(1);
  await t.runForSteps(39);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).x, 39, 5, "Expected Clone 3 of Kreatur to have x-position 39 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).y, -33, 5, "Expected Clone 3 of Kreatur to have y-position -33 +-5");
  t.assert.not(t.getSprite("Gobo").sayText, "Expected Sprite Gobo not to say anything");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).size, 98, 1, "Expected Clone 2 of Kreatur to have size 98 +-1");
  t.assert.not(t.getSprite("Gobo").visible, "Expected Sprite Gobo not to be visible");
  t.assert.ok(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur to be visible");
  await t.runForSteps(56);
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
      seed: '1687938391602',
      type: 'standard',
  }
]
