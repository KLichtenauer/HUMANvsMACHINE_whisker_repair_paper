const test0 = async function (t) {
  t.keyPress('left arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(40);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Hindernis").currentCostume, 0, "Expected Sprite Hindernis to have costume 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).currentCostume, 1, "Expected Clone 1 of Hindernis to have costume 1");
  t.assert.equal(t.getSprite("Hindernis").getCloneCount(), 1, "Expected Sprite Hindernis to have 1 clones");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).direction, 90, 1, "Expected Clone 1 of Hindernis to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Skikatze").layerOrder, 3, "Expected Sprite Skikatze to be at layer 3");
  t.assert.equal(t.getSprite("Hindernis").layerOrder, 2, "Expected Sprite Hindernis to be at layer 2");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).getLayerOrder(), 1, "Expected Clone 1 of Hindernis to be at layer 1");
  t.assert.withinRange(t.getSprite("Skikatze").x, 56, 5, "Expected Sprite Skikatze to have x-position 56 +-5");
  t.assert.withinRange(t.getSprite("Skikatze").y, 100, 5, "Expected Sprite Skikatze to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(1).x, 183, 5, "Expected Clone 1 of Hindernis to have x-position 183 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(1).y, -18, 5, "Expected Clone 1 of Hindernis to have y-position -18 +-5");
  t.assert.not(t.getSprite("Hindernis").getClone(1).sayText, "Expected Clone 1 of Hindernis not to say anything");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(1).size, 60, 1, "Expected Clone 1 of Hindernis to have size 60 +-1");
  t.assert.ok(t.getSprite("Hindernis").getClone(1).visible, "Expected Clone 1 of Hindernis to be visible");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).volume, 100, "Expected Clone 1 of Hindernis to have volume 100");
  t.keyPress('left arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Skikatze").x, 50, 5, "Expected Sprite Skikatze to have x-position 50 +-5");
  t.assert.withinRange(t.getSprite("Skikatze").y, 100, 5, "Expected Sprite Skikatze to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(1).x, 183, 5, "Expected Clone 1 of Hindernis to have x-position 183 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(1).y, -6, 5, "Expected Clone 1 of Hindernis to have y-position -6 +-5");
  t.keyPress('left arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Hindernis").currentCostume, 1, "Expected Sprite Hindernis to have costume 1");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).currentCostume, 0, "Expected Clone 2 of Hindernis to have costume 0");
  t.assert.equal(t.getSprite("Hindernis").getCloneCount(), 2, "Expected Sprite Hindernis to have 2 clones");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).direction, 90, 1, "Expected Clone 2 of Hindernis to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).effects.color, 0, "Expected effect color of Clone 2 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).effects.fisheye, 0, "Expected effect fisheye of Clone 2 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).effects.whirl, 0, "Expected effect whirl of Clone 2 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).effects.pixelate, 0, "Expected effect pixelate of Clone 2 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).effects.mosaic, 0, "Expected effect mosaic of Clone 2 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).effects.brightness, 0, "Expected effect brightness of Clone 2 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).effects.ghost, 0, "Expected effect ghost of Clone 2 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Skikatze").layerOrder, 4, "Expected Sprite Skikatze to be at layer 4");
  t.assert.equal(t.getSprite("Hindernis").layerOrder, 3, "Expected Sprite Hindernis to be at layer 3");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).getLayerOrder(), 2, "Expected Clone 2 of Hindernis to be at layer 2");
  t.assert.withinRange(t.getSprite("Skikatze").x, 28, 5, "Expected Sprite Skikatze to have x-position 28 +-5");
  t.assert.withinRange(t.getSprite("Skikatze").y, 100, 5, "Expected Sprite Skikatze to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(1).x, 183, 5, "Expected Clone 1 of Hindernis to have x-position 183 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(1).y, 18.00000000000003, 5, "Expected Clone 1 of Hindernis to have y-position 18.00000000000003 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(2).x, -94, 5, "Expected Clone 2 of Hindernis to have x-position -94 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(2).y, -162.2, 5, "Expected Clone 2 of Hindernis to have y-position -162.2 +-5");
  t.assert.not(t.getSprite("Hindernis").getClone(2).sayText, "Expected Clone 2 of Hindernis not to say anything");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(2).size, 60, 1, "Expected Clone 2 of Hindernis to have size 60 +-1");
  t.assert.ok(t.getSprite("Hindernis").getClone(2).visible, "Expected Clone 2 of Hindernis to be visible");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).volume, 100, "Expected Clone 2 of Hindernis to have volume 100");
  await t.runForSteps(70);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Skikatze").x, 170, 5, "Expected Sprite Skikatze to have x-position 170 +-5");
  t.assert.withinRange(t.getSprite("Skikatze").y, 100, 5, "Expected Sprite Skikatze to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(1).x, -39, 5, "Expected Clone 1 of Hindernis to have x-position -39 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(1).y, -102, 5, "Expected Clone 1 of Hindernis to have y-position -102 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(2).x, -94, 5, "Expected Clone 2 of Hindernis to have x-position -94 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(2).y, 180, 5, "Expected Clone 2 of Hindernis to have y-position 180 +-5");
  t.assert.not(t.getSprite("Hindernis").getClone(2).visible, "Expected Clone 2 of Hindernis not to be visible");
  t.end();
}
const test1 = async function (t) {
  t.keyPress('left arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(70);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Skikatze").currentCostume, 1, "Expected Sprite Skikatze to have costume 1");
  t.assert.withinRange(t.getSprite("Skikatze").x, 104, 5, "Expected Sprite Skikatze to have x-position 104 +-5");
  t.assert.withinRange(t.getSprite("Skikatze").y, 100, 5, "Expected Sprite Skikatze to have y-position 100 +-5");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938870761',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938870761',
      type: 'standard',
  }
]
