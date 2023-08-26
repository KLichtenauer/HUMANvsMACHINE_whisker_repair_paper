const test0 = async function (t) {
  t.keyPress('left arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  await t.runForSteps(52);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Hindernis").getClone(1).currentCostume, 1, "Expected Clone 1 of Hindernis to have costume 1");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).currentCostume, 0, "Expected Clone 2 of Hindernis to have costume 0");
  t.assert.equal(t.getSprite("Hindernis").getCloneCount(), 2, "Expected Sprite Hindernis to have 2 clones");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).direction, 90, 1, "Expected Clone 1 of Hindernis to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).direction, 90, 1, "Expected Clone 2 of Hindernis to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).effects.color, 0, "Expected effect color of Clone 2 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).effects.fisheye, 0, "Expected effect fisheye of Clone 2 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).effects.whirl, 0, "Expected effect whirl of Clone 2 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).effects.pixelate, 0, "Expected effect pixelate of Clone 2 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).effects.mosaic, 0, "Expected effect mosaic of Clone 2 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).effects.brightness, 0, "Expected effect brightness of Clone 2 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).effects.ghost, 0, "Expected effect ghost of Clone 2 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Skikatze").layerOrder, 4, "Expected Sprite Skikatze to be at layer 4");
  t.assert.equal(t.getSprite("Hindernis").layerOrder, 3, "Expected Sprite Hindernis to be at layer 3");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).getLayerOrder(), 1, "Expected Clone 1 of Hindernis to be at layer 1");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).getLayerOrder(), 2, "Expected Clone 2 of Hindernis to be at layer 2");
  t.assert.withinRange(t.getSprite("Skikatze").x, 86, 5, "Expected Sprite Skikatze to have x-position 86 +-5");
  t.assert.withinRange(t.getSprite("Skikatze").y, 100, 5, "Expected Sprite Skikatze to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(1).x, -58, 5, "Expected Clone 1 of Hindernis to have x-position -58 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(1).y, 71.99999999999997, 5, "Expected Clone 1 of Hindernis to have y-position 71.99999999999997 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(2).x, 34, 5, "Expected Clone 2 of Hindernis to have x-position 34 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(2).y, -109.10000000000001, 5, "Expected Clone 2 of Hindernis to have y-position -109.10000000000001 +-5");
  t.assert.not(t.getSprite("Hindernis").getClone(1).sayText, "Expected Clone 1 of Hindernis not to say anything");
  t.assert.not(t.getSprite("Hindernis").getClone(2).sayText, "Expected Clone 2 of Hindernis not to say anything");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(1).size, 60, 1, "Expected Clone 1 of Hindernis to have size 60 +-1");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(2).size, 60, 1, "Expected Clone 2 of Hindernis to have size 60 +-1");
  t.assert.ok(t.getSprite("Hindernis").getClone(1).visible, "Expected Clone 1 of Hindernis to be visible");
  t.assert.ok(t.getSprite("Hindernis").getClone(2).visible, "Expected Clone 2 of Hindernis to be visible");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).volume, 100, "Expected Clone 1 of Hindernis to have volume 100");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).volume, 100, "Expected Clone 2 of Hindernis to have volume 100");
  await t.runForSteps(23);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Skikatze").x, 134, 5, "Expected Sprite Skikatze to have x-position 134 +-5");
  t.assert.withinRange(t.getSprite("Skikatze").y, 100, 5, "Expected Sprite Skikatze to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(1).x, -58, 5, "Expected Clone 1 of Hindernis to have x-position -58 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(1).y, 180, 5, "Expected Clone 1 of Hindernis to have y-position 180 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(2).x, 34, 5, "Expected Clone 2 of Hindernis to have x-position 34 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(2).y, 32.5, 5, "Expected Clone 2 of Hindernis to have y-position 32.5 +-5");
  t.assert.not(t.getSprite("Hindernis").getClone(1).visible, "Expected Clone 1 of Hindernis not to be visible");
  t.end();
}
const test1 = async function (t) {
  t.keyPress('left arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  await t.runForSteps(52);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Hindernis").getClone(1).currentCostume, 1, "Expected Clone 1 of Hindernis to have costume 1");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).currentCostume, 0, "Expected Clone 2 of Hindernis to have costume 0");
  t.assert.equal(t.getSprite("Hindernis").getCloneCount(), 2, "Expected Sprite Hindernis to have 2 clones");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).direction, 90, 1, "Expected Clone 1 of Hindernis to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).direction, 90, 1, "Expected Clone 2 of Hindernis to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).effects.color, 0, "Expected effect color of Clone 2 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).effects.fisheye, 0, "Expected effect fisheye of Clone 2 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).effects.whirl, 0, "Expected effect whirl of Clone 2 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).effects.pixelate, 0, "Expected effect pixelate of Clone 2 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).effects.mosaic, 0, "Expected effect mosaic of Clone 2 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).effects.brightness, 0, "Expected effect brightness of Clone 2 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).effects.ghost, 0, "Expected effect ghost of Clone 2 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Skikatze").layerOrder, 4, "Expected Sprite Skikatze to be at layer 4");
  t.assert.equal(t.getSprite("Hindernis").layerOrder, 3, "Expected Sprite Hindernis to be at layer 3");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).getLayerOrder(), 1, "Expected Clone 1 of Hindernis to be at layer 1");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).getLayerOrder(), 2, "Expected Clone 2 of Hindernis to be at layer 2");
  t.assert.withinRange(t.getSprite("Skikatze").x, 86, 5, "Expected Sprite Skikatze to have x-position 86 +-5");
  t.assert.withinRange(t.getSprite("Skikatze").y, 100, 5, "Expected Sprite Skikatze to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(1).x, -58, 5, "Expected Clone 1 of Hindernis to have x-position -58 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(1).y, 71.99999999999997, 5, "Expected Clone 1 of Hindernis to have y-position 71.99999999999997 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(2).x, 34, 5, "Expected Clone 2 of Hindernis to have x-position 34 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(2).y, -109.10000000000001, 5, "Expected Clone 2 of Hindernis to have y-position -109.10000000000001 +-5");
  t.assert.not(t.getSprite("Hindernis").getClone(1).sayText, "Expected Clone 1 of Hindernis not to say anything");
  t.assert.not(t.getSprite("Hindernis").getClone(2).sayText, "Expected Clone 2 of Hindernis not to say anything");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(1).size, 60, 1, "Expected Clone 1 of Hindernis to have size 60 +-1");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(2).size, 60, 1, "Expected Clone 2 of Hindernis to have size 60 +-1");
  t.assert.ok(t.getSprite("Hindernis").getClone(1).visible, "Expected Clone 1 of Hindernis to be visible");
  t.assert.ok(t.getSprite("Hindernis").getClone(2).visible, "Expected Clone 2 of Hindernis to be visible");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).volume, 100, "Expected Clone 1 of Hindernis to have volume 100");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).volume, 100, "Expected Clone 2 of Hindernis to have volume 100");
  t.keyPress('left arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Skikatze").x, 80, 5, "Expected Sprite Skikatze to have x-position 80 +-5");
  t.assert.withinRange(t.getSprite("Skikatze").y, 100, 5, "Expected Sprite Skikatze to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(1).x, -58, 5, "Expected Clone 1 of Hindernis to have x-position -58 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(1).y, 84, 5, "Expected Clone 1 of Hindernis to have y-position 84 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(2).x, 34, 5, "Expected Clone 2 of Hindernis to have x-position 34 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(2).y, -97.3, 5, "Expected Clone 2 of Hindernis to have y-position -97.3 +-5");
  t.end();
}
const test2 = async function (t) {
  t.keyPress('left arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.keyPress('left arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(52);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Hindernis").getClone(1).currentCostume, 1, "Expected Clone 1 of Hindernis to have costume 1");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).currentCostume, 0, "Expected Clone 2 of Hindernis to have costume 0");
  t.assert.equal(t.getSprite("Hindernis").getCloneCount(), 2, "Expected Sprite Hindernis to have 2 clones");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).direction, 90, 1, "Expected Clone 1 of Hindernis to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).direction, 90, 1, "Expected Clone 2 of Hindernis to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).effects.color, 0, "Expected effect color of Clone 2 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).effects.fisheye, 0, "Expected effect fisheye of Clone 2 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).effects.whirl, 0, "Expected effect whirl of Clone 2 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).effects.pixelate, 0, "Expected effect pixelate of Clone 2 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).effects.mosaic, 0, "Expected effect mosaic of Clone 2 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).effects.brightness, 0, "Expected effect brightness of Clone 2 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).effects.ghost, 0, "Expected effect ghost of Clone 2 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Skikatze").layerOrder, 4, "Expected Sprite Skikatze to be at layer 4");
  t.assert.equal(t.getSprite("Hindernis").layerOrder, 3, "Expected Sprite Hindernis to be at layer 3");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).getLayerOrder(), 1, "Expected Clone 1 of Hindernis to be at layer 1");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).getLayerOrder(), 2, "Expected Clone 2 of Hindernis to be at layer 2");
  t.assert.withinRange(t.getSprite("Skikatze").x, 90, 5, "Expected Sprite Skikatze to have x-position 90 +-5");
  t.assert.withinRange(t.getSprite("Skikatze").y, 100, 5, "Expected Sprite Skikatze to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(1).x, -58, 5, "Expected Clone 1 of Hindernis to have x-position -58 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(1).y, 84, 5, "Expected Clone 1 of Hindernis to have y-position 84 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(2).x, 34, 5, "Expected Clone 2 of Hindernis to have x-position 34 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(2).y, -97.3, 5, "Expected Clone 2 of Hindernis to have y-position -97.3 +-5");
  t.assert.not(t.getSprite("Hindernis").getClone(1).sayText, "Expected Clone 1 of Hindernis not to say anything");
  t.assert.not(t.getSprite("Hindernis").getClone(2).sayText, "Expected Clone 2 of Hindernis not to say anything");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(1).size, 60, 1, "Expected Clone 1 of Hindernis to have size 60 +-1");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(2).size, 60, 1, "Expected Clone 2 of Hindernis to have size 60 +-1");
  t.assert.ok(t.getSprite("Hindernis").getClone(1).visible, "Expected Clone 1 of Hindernis to be visible");
  t.assert.ok(t.getSprite("Hindernis").getClone(2).visible, "Expected Clone 2 of Hindernis to be visible");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).volume, 100, "Expected Clone 1 of Hindernis to have volume 100");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).volume, 100, "Expected Clone 2 of Hindernis to have volume 100");
  await t.runForSteps(23);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Skikatze").x, 138, 5, "Expected Sprite Skikatze to have x-position 138 +-5");
  t.assert.withinRange(t.getSprite("Skikatze").y, 100, 5, "Expected Sprite Skikatze to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(1).x, -58, 5, "Expected Clone 1 of Hindernis to have x-position -58 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(1).y, 180, 5, "Expected Clone 1 of Hindernis to have y-position 180 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(2).x, 34, 5, "Expected Clone 2 of Hindernis to have x-position 34 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(2).y, 44.30000000000001, 5, "Expected Clone 2 of Hindernis to have y-position 44.30000000000001 +-5");
  t.assert.not(t.getSprite("Hindernis").getClone(1).visible, "Expected Clone 1 of Hindernis not to be visible");
  await t.runForSteps(100);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Skikatze").currentCostume, 1, "Expected Sprite Skikatze to have costume 1");
  t.assert.equal(t.getSprite("Hindernis").getCloneCount(), 0, "Expected Sprite Hindernis to have 0 clones");
  t.assert.equal(t.getSprite("Skikatze").layerOrder, 2, "Expected Sprite Skikatze to be at layer 2");
  t.assert.equal(t.getSprite("Hindernis").layerOrder, 1, "Expected Sprite Hindernis to be at layer 1");
  t.assert.withinRange(t.getSprite("Skikatze").x, 266, 5, "Expected Sprite Skikatze to have x-position 266 +-5");
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
      seed: '1687937318036',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937318036',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937318036',
      type: 'standard',
  }
]
