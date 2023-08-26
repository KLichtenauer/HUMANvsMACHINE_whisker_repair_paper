const test0 = async function (t) {
  await t.runForSteps(67);
  await t.runForSteps(1);
  t.clickCloneByCoords(155, -57, 1);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur not to be visible");
  t.clickCloneByCoords(-68, 150, 1);
  await t.runForSteps(1);
  t.clickCloneByCoords(-191, -56, 1);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur not to be visible");
  await t.runForSteps(92);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).x, 239, 5, "Expected Clone 1 of Kreatur to have x-position 239 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).y, -53, 5, "Expected Clone 1 of Kreatur to have y-position -53 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).x, -130, 5, "Expected Clone 2 of Kreatur to have x-position -130 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).y, -121, 5, "Expected Clone 2 of Kreatur to have y-position -121 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).x, -73, 5, "Expected Clone 3 of Kreatur to have x-position -73 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).y, -125, 5, "Expected Clone 3 of Kreatur to have y-position -125 +-5");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(1).size, 98, 1, "Expected Clone 1 of Kreatur to have size 98 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).size, 64, 1, "Expected Clone 2 of Kreatur to have size 64 +-1");
  t.assert.withinRange(t.getSprite("Kreatur").getClone(3).size, 51, 1, "Expected Clone 3 of Kreatur to have size 51 +-1");
  t.assert.ok(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur to be visible");
  t.assert.ok(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur to be visible");
  t.clickCloneByCoords(-73, -125, 1);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Kreatur").getClone(3).visible, "Expected Clone 3 of Kreatur not to be visible");
  t.clickCloneByCoords(239, -53, 1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Gobo").sayText, "Schon drei Punkte!", "Expected Sprite Gobo to say Schon drei Punkte!");
  t.assert.ok(t.getSprite("Gobo").visible, "Expected Sprite Gobo to be visible");
  await t.runForSteps(33);
  await t.runForSteps(1);
  t.clickCloneByCoords(-130, -121, 1);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Kreatur").getClone(2).visible, "Expected Clone 2 of Kreatur not to be visible");
  t.clickCloneByCoords(239, -53, 1);
  await t.runForSteps(1);
  t.clickCloneByCoords(239, -53, 1);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Kreatur").getClone(1).visible, "Expected Clone 1 of Kreatur not to be visible");
  await t.runForSteps(16);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kreatur").getClone(2).size, 88, 1, "Expected Clone 2 of Kreatur to have size 88 +-1");
  await t.runForSteps(400);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Kreatur").getCloneCount(), 0, "Expected Sprite Kreatur to have 0 clones");
  t.assert.equal(t.getSprite("Kreatur").layerOrder, 1, "Expected Sprite Kreatur to be at layer 1");
  t.assert.equal(t.getSprite("Gobo").layerOrder, 2, "Expected Sprite Gobo to be at layer 2");
  t.assert.not(t.getSprite("Gobo").sayText, "Expected Sprite Gobo not to say anything");
  t.assert.not(t.getSprite("Gobo").visible, "Expected Sprite Gobo not to be visible");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849436761',
      type: 'standard',
  }
]
