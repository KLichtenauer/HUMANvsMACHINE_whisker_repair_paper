const test0 = async function (t) {
  await t.runForSteps(73);
  await t.runForSteps(1);
  await t.runForSteps(11);
  await t.runForSteps(1);
  t.clickCloneByCoords(-119, 145, 1);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur not to be visible");
  t.clickCloneByCoords(-207, 106, 1);
  await t.runForSteps(1);
  t.clickCloneByCoords(-169, -46, 1);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Kreatur").getClone(1).visible, "Expected Clone 1 of Kreatur not to be visible");
  await t.runForSteps(33);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).x, -27, 5, "Expected Clone 1 of Kreatur to have x-position -27 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).y, 61, 5, "Expected Clone 1 of Kreatur to have y-position 61 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).x, 158, 5, "Expected Clone 2 of Kreatur to have x-position 158 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).y, 81, 5, "Expected Clone 2 of Kreatur to have y-position 81 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).size, 85, 1, "Expected Clone 1 of Kreatur to have size 85 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).size, 80, 1, "Expected Clone 2 of Kreatur to have size 80 +-1");
  t.assert.ok(t.getSprite("Kreatur").getClone(1).visible, "Expected Clone 1 of Kreatur to be visible");
  t.assert.ok(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur to be visible");
  await t.runForSteps(17);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).size, 94, 1, "Expected Clone 3 of Kreatur to have size 94 +-1");
  t.assert.not(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur not to be visible");
  t.clickCloneByCoords(-27, 61, 1);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Kreatur").getClone(1).visible, "Expected Clone 1 of Kreatur not to be visible");
  t.clickCloneByCoords(158, 81, 1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Gobo").sayText, "Schon drei Punkte!", "Expected Sprite Gobo to say Schon drei Punkte!");
  t.assert.ok(t.getSprite("Gobo").visible, "Expected Sprite Gobo to be visible");
  t.clickCloneByCoords(158, 81, 1);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur not to be visible");
  await t.runForSteps(69);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).x, -213, 5, "Expected Clone 1 of Kreatur to have x-position -213 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).y, 116, 5, "Expected Clone 1 of Kreatur to have y-position 116 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).x, -133, 5, "Expected Clone 2 of Kreatur to have x-position -133 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).y, 169, 5, "Expected Clone 2 of Kreatur to have y-position 169 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).x, 31, 5, "Expected Clone 3 of Kreatur to have x-position 31 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).y, -143, 5, "Expected Clone 3 of Kreatur to have y-position -143 +-5");
  t.assert.not(t.getSprite("Gobo").sayText, "Expected Sprite Gobo not to say anything");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).size, 99, 1, "Expected Clone 1 of Kreatur to have size 99 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).size, 61, 1, "Expected Clone 2 of Kreatur to have size 61 +-1");
  t.assert.not(t.getSprite("Gobo").visible, "Expected Sprite Gobo not to be visible");
  t.assert.ok(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur to be visible");
  t.assert.ok(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur to be visible");
  t.clickCloneByCoords(-133, 169, 1);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur not to be visible");
  await t.runForSteps(97);
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
      seed: '1687936755511',
      type: 'standard',
  }
]
