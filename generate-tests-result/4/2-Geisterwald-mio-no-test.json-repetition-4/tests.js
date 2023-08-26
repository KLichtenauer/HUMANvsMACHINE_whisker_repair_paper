const test0 = async function (t) {
  await t.runForSteps(50);
  await t.runForSteps(1);
  await t.runForSteps(27);
  await t.runForSteps(1);
  await t.runForSteps(35);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).size, 54, 1, "Expected Clone 1 of Kreatur to have size 54 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).size, 100, 1, "Expected Clone 3 of Kreatur to have size 100 +-1");
  t.assert.not(t.getSprite("Kreatur").getClone(1).visible, "Expected Clone 1 of Kreatur not to be visible");
  t.assert.not(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur not to be visible");
  await t.runForSteps(10);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).x, 91, 5, "Expected Clone 1 of Kreatur to have x-position 91 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).y, -127, 5, "Expected Clone 1 of Kreatur to have y-position -127 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).x, -168, 5, "Expected Clone 3 of Kreatur to have x-position -168 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).y, 136, 5, "Expected Clone 3 of Kreatur to have y-position 136 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).size, 66, 1, "Expected Clone 2 of Kreatur to have size 66 +-1");
  t.assert.ok(t.getSprite("Kreatur").getClone(1).visible, "Expected Clone 1 of Kreatur to be visible");
  t.assert.not(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur not to be visible");
  t.assert.ok(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur to be visible");
  t.clickCloneByCoords(-168, 136, 1);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur not to be visible");
  t.clickCloneByCoords(91, -127, 1);
  await t.runForSteps(1);
  t.clickCloneByCoords(91, -127, 1);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Kreatur").getClone(1).visible, "Expected Clone 1 of Kreatur not to be visible");
  await t.runForSteps(56);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).x, 217, 5, "Expected Clone 1 of Kreatur to have x-position 217 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).y, 85, 5, "Expected Clone 1 of Kreatur to have y-position 85 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).x, -229, 5, "Expected Clone 2 of Kreatur to have x-position -229 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).y, -177, 5, "Expected Clone 2 of Kreatur to have y-position -177 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).x, 38, 5, "Expected Clone 3 of Kreatur to have x-position 38 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).y, 66, 5, "Expected Clone 3 of Kreatur to have y-position 66 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).size, 95, 1, "Expected Clone 1 of Kreatur to have size 95 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).size, 52, 1, "Expected Clone 2 of Kreatur to have size 52 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).size, 56, 1, "Expected Clone 3 of Kreatur to have size 56 +-1");
  t.assert.ok(t.getSprite("Kreatur").getClone(1).visible, "Expected Clone 1 of Kreatur to be visible");
  t.assert.ok(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur to be visible");
  t.clickCloneByCoords(38, 66, 1);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur not to be visible");
  t.clickCloneByCoords(217, 85, 1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Gobo").sayText, "Schon drei Punkte!", "Expected Sprite Gobo to say Schon drei Punkte!");
  t.assert.ok(t.getSprite("Gobo").visible, "Expected Sprite Gobo to be visible");
  t.clickCloneByCoords(217, 85, 1);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Kreatur").getClone(1).visible, "Expected Clone 1 of Kreatur not to be visible");
  await t.runForSteps(78);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).x, 56, 5, "Expected Clone 1 of Kreatur to have x-position 56 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).y, -35, 5, "Expected Clone 1 of Kreatur to have y-position -35 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).x, 49, 5, "Expected Clone 2 of Kreatur to have x-position 49 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).y, 75, 5, "Expected Clone 2 of Kreatur to have y-position 75 +-5");
  t.assert.not(t.getSprite("Gobo").sayText, "Expected Sprite Gobo not to say anything");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).size, 87, 1, "Expected Clone 1 of Kreatur to have size 87 +-1");
  t.assert.not(t.getSprite("Gobo").visible, "Expected Sprite Gobo not to be visible");
  t.assert.ok(t.getSprite("Kreatur").getClone(1).visible, "Expected Clone 1 of Kreatur to be visible");
  t.assert.ok(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur to be visible");
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.clickCloneByCoords(49, 75, 1);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur not to be visible");
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).size, 69, 1, "Expected Clone 1 of Kreatur to have size 69 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).size, 84, 1, "Expected Clone 2 of Kreatur to have size 84 +-1");
  t.assert.not(t.getSprite("Kreatur").getClone(1).visible, "Expected Clone 1 of Kreatur not to be visible");
  await t.runForSteps(29);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).x, 73, 5, "Expected Clone 1 of Kreatur to have x-position 73 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).y, 157, 5, "Expected Clone 1 of Kreatur to have y-position 157 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).x, 199, 5, "Expected Clone 2 of Kreatur to have x-position 199 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).y, 49, 5, "Expected Clone 2 of Kreatur to have y-position 49 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).size, 94, 1, "Expected Clone 3 of Kreatur to have size 94 +-1");
  t.assert.ok(t.getSprite("Kreatur").getClone(1).visible, "Expected Clone 1 of Kreatur to be visible");
  t.assert.ok(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur to be visible");
  t.clickCloneByCoords(199, 49, 1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).x, 135, 5, "Expected Clone 3 of Kreatur to have x-position 135 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).y, 165, 5, "Expected Clone 3 of Kreatur to have y-position 165 +-5");
  t.assert.not(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur not to be visible");
  t.assert.ok(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur to be visible");
  await t.runForSteps(77);
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
      seed: '1687937541407',
      type: 'standard',
  }
]
