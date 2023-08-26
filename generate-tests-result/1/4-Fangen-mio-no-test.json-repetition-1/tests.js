const test0 = async function (t) {
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  await t.runForSteps(31);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Rot").getClone(1).currentCostume, 0, "Expected Clone 1 of Rot to have costume 0");
  t.assert.equal(t.getSprite("Rot").getCloneCount(), 1, "Expected Sprite Rot to have 1 clones");
  t.assert.equal(t.getSprite("Rot").direction, -130.05698928138645, 1, "Expected Sprite Rot to face in direction -130.05698928138645 +-1");
  t.assert.equal(t.getSprite("Rot").getClone(1).direction, -130.05698928138645, 1, "Expected Clone 1 of Rot to face in direction -130.05698928138645 +-1");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Scheibe").layerOrder, 3, "Expected Sprite Scheibe to be at layer 3");
  t.assert.equal(t.getSprite("Rot").layerOrder, 2, "Expected Sprite Rot to be at layer 2");
  t.assert.equal(t.getSprite("Rot").getClone(1).getLayerOrder(), 1, "Expected Clone 1 of Rot to be at layer 1");
  t.assert.withinRange(t.getSprite("Rot").x, 201, 5, "Expected Sprite Rot to have x-position 201 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, 169, 5, "Expected Sprite Rot to have y-position 169 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).x, 196.53333333333333, 5, "Expected Clone 1 of Rot to have x-position 196.53333333333333 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).y, 165.24444444444444, 5, "Expected Clone 1 of Rot to have y-position 165.24444444444444 +-5");
  t.assert.not(t.getSprite("Rot").getClone(1).sayText, "Expected Clone 1 of Rot not to say anything");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).size, 80, 1, "Expected Clone 1 of Rot to have size 80 +-1");
  t.assert.ok(t.getSprite("Rot").getClone(1).visible, "Expected Clone 1 of Rot to be visible");
  t.assert.equal(t.getSprite("Rot").getClone(1).volume, 100, "Expected Clone 1 of Rot to have volume 100");
  t.dragSprite('Rot', 41, 9, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Rot").x, 41, 5, "Expected Sprite Rot to have x-position 41 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, 9, 5, "Expected Sprite Rot to have y-position 9 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).x, 194.3, 5, "Expected Clone 1 of Rot to have x-position 194.3 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).y, 163.36666666666667, 5, "Expected Clone 1 of Rot to have y-position 163.36666666666667 +-5");
  t.dragSprite('Rot', -17.122209940491167, -4.909714694429425, 1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Rot").getCloneCount(), 0, "Expected Sprite Rot to have 0 clones");
  t.assert.equal(t.getSprite("Scheibe").layerOrder, 2, "Expected Sprite Scheibe to be at layer 2");
  t.assert.equal(t.getSprite("Rot").layerOrder, 1, "Expected Sprite Rot to be at layer 1");
  t.keyPress('left arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Scheibe").direction, 93, 1, "Expected Sprite Scheibe to face in direction 93 +-1");
  t.keyPress('left arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Scheibe").direction, 81, 1, "Expected Sprite Scheibe to face in direction 81 +-1");
  await t.runForSteps(51);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Rot").x, 93, 5, "Expected Sprite Rot to have x-position 93 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, -127, 5, "Expected Sprite Rot to have y-position -127 +-5");
  t.keyPress('right arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Scheibe").direction, 87, 1, "Expected Sprite Scheibe to face in direction 87 +-1");
  t.assert.withinRange(t.getSprite("Rot").x, -147, 5, "Expected Sprite Rot to have x-position -147 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, 160, 5, "Expected Sprite Rot to have y-position 160 +-5");
  await t.runForSteps(30);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Rot").getClone(1).currentCostume, 0, "Expected Clone 1 of Rot to have costume 0");
  t.assert.equal(t.getSprite("Rot").getCloneCount(), 1, "Expected Sprite Rot to have 1 clones");
  t.assert.equal(t.getSprite("Rot").direction, 57.12838793570882, 1, "Expected Sprite Rot to face in direction 57.12838793570882 +-1");
  t.assert.equal(t.getSprite("Rot").getClone(1).direction, 57.12838793570882, 1, "Expected Clone 1 of Rot to face in direction 57.12838793570882 +-1");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Scheibe").layerOrder, 3, "Expected Sprite Scheibe to be at layer 3");
  t.assert.equal(t.getSprite("Rot").layerOrder, 2, "Expected Sprite Rot to be at layer 2");
  t.assert.equal(t.getSprite("Rot").getClone(1).getLayerOrder(), 1, "Expected Clone 1 of Rot to be at layer 1");
  t.assert.withinRange(t.getSprite("Rot").x, -212, 5, "Expected Sprite Rot to have x-position -212 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, -137, 5, "Expected Sprite Rot to have y-position -137 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).x, -186.0888888888889, 5, "Expected Clone 1 of Rot to have x-position -186.0888888888889 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).y, -120.25555555555556, 5, "Expected Clone 1 of Rot to have y-position -120.25555555555556 +-5");
  t.assert.not(t.getSprite("Rot").getClone(1).sayText, "Expected Clone 1 of Rot not to say anything");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).size, 80, 1, "Expected Clone 1 of Rot to have size 80 +-1");
  t.assert.ok(t.getSprite("Rot").getClone(1).visible, "Expected Clone 1 of Rot to be visible");
  t.assert.equal(t.getSprite("Rot").getClone(1).volume, 100, "Expected Clone 1 of Rot to have volume 100");
  t.dragSprite('Rot', -11.067617903762693, 14.165898912186428, 1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Rot").getCloneCount(), 0, "Expected Sprite Rot to have 0 clones");
  t.assert.equal(t.getSprite("Scheibe").layerOrder, 2, "Expected Sprite Scheibe to be at layer 2");
  t.assert.equal(t.getSprite("Rot").layerOrder, 1, "Expected Sprite Rot to be at layer 1");
  t.keyPress('left arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Scheibe").direction, 78, 1, "Expected Sprite Scheibe to face in direction 78 +-1");
  await t.runForSteps(400);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Rot").direction, -58.612978115611156, 1, "Expected Sprite Rot to face in direction -58.612978115611156 +-1");
  t.assert.withinRange(t.getSprite("Rot").x, 218, 5, "Expected Sprite Rot to have x-position 218 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, -133, 5, "Expected Sprite Rot to have y-position -133 +-5");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849467579',
      type: 'standard',
  }
]
