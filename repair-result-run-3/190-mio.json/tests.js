const test0 = async function (t) {
  await t.runForSteps(80);
  await t.runForSteps(1);
  await t.runForSteps(55);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Rot").getClone(1).currentCostume, 0, "Expected Clone 1 of Rot to have costume 0");
  t.assert.equal(t.getSprite("Rot").getCloneCount(), 1, "Expected Sprite Rot to have 1 clones");
  t.assert.equal(t.getSprite("Rot").direction, 120.25643716352927, 1, "Expected Sprite Rot to face in direction 120.25643716352927 +-1");
  t.assert.equal(t.getSprite("Rot").getClone(1).direction, 120.25643716352927, 1, "Expected Clone 1 of Rot to face in direction 120.25643716352927 +-1");
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
  t.assert.withinRange(t.getSprite("Rot").x, -216, 5, "Expected Sprite Rot to have x-position -216 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, 126, 5, "Expected Sprite Rot to have y-position 126 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).x, -98.4, 5, "Expected Clone 1 of Rot to have x-position -98.4 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).y, 57.400000000000006, 5, "Expected Clone 1 of Rot to have y-position 57.400000000000006 +-5");
  t.assert.not(t.getSprite("Rot").getClone(1).sayText, "Expected Clone 1 of Rot not to say anything");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).size, 80, 1, "Expected Clone 1 of Rot to have size 80 +-1");
  t.assert.ok(t.getSprite("Rot").getClone(1).visible, "Expected Clone 1 of Rot to be visible");
  t.assert.equal(t.getSprite("Rot").getClone(1).volume, 100, "Expected Clone 1 of Rot to have volume 100");
  t.dragSprite('Rot', -8.004140532708021, -42.47501982341086, 1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Rot").getCloneCount(), 0, "Expected Sprite Rot to have 0 clones");
  t.assert.equal(t.getSprite("Scheibe").layerOrder, 2, "Expected Sprite Scheibe to be at layer 2");
  t.assert.equal(t.getSprite("Rot").layerOrder, 1, "Expected Sprite Rot to be at layer 1");
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(80);
  await t.runForSteps(1);
  t.keyPress('right arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Scheibe").direction, 99, 1, "Expected Sprite Scheibe to face in direction 99 +-1");
  t.assert.withinRange(t.getSprite("Rot").x, -234, 5, "Expected Sprite Rot to have x-position -234 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, 13, 5, "Expected Sprite Rot to have y-position 13 +-5");
  t.end();
}
const test2 = async function (t) {
  await t.runForSteps(80);
  await t.runForSteps(1);
  t.keyPress('left arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Scheibe").direction, 78, 1, "Expected Sprite Scheibe to face in direction 78 +-1");
  t.assert.withinRange(t.getSprite("Rot").x, 24, 5, "Expected Sprite Rot to have x-position 24 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, 152, 5, "Expected Sprite Rot to have y-position 152 +-5");
  t.end();
}
const test3 = async function (t) {
  await t.runForSteps(80);
  await t.runForSteps(1);
  await t.runForSteps(55);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Rot").getClone(1).currentCostume, 0, "Expected Clone 1 of Rot to have costume 0");
  t.assert.equal(t.getSprite("Rot").getCloneCount(), 1, "Expected Sprite Rot to have 1 clones");
  t.assert.equal(t.getSprite("Rot").direction, 120.25643716352927, 1, "Expected Sprite Rot to face in direction 120.25643716352927 +-1");
  t.assert.equal(t.getSprite("Rot").getClone(1).direction, 120.25643716352927, 1, "Expected Clone 1 of Rot to face in direction 120.25643716352927 +-1");
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
  t.assert.withinRange(t.getSprite("Rot").x, -216, 5, "Expected Sprite Rot to have x-position -216 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, 126, 5, "Expected Sprite Rot to have y-position 126 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).x, -98.4, 5, "Expected Clone 1 of Rot to have x-position -98.4 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).y, 57.400000000000006, 5, "Expected Clone 1 of Rot to have y-position 57.400000000000006 +-5");
  t.assert.not(t.getSprite("Rot").getClone(1).sayText, "Expected Clone 1 of Rot not to say anything");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).size, 80, 1, "Expected Clone 1 of Rot to have size 80 +-1");
  t.assert.ok(t.getSprite("Rot").getClone(1).visible, "Expected Clone 1 of Rot to be visible");
  t.assert.equal(t.getSprite("Rot").getClone(1).volume, 100, "Expected Clone 1 of Rot to have volume 100");
  await t.runForSteps(97);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Rot").getCloneCount(), 0, "Expected Sprite Rot to have 0 clones");
  t.assert.equal(t.getSprite("Rot").direction, 65.28569909984748, 1, "Expected Sprite Rot to face in direction 65.28569909984748 +-1");
  t.assert.equal(t.getSprite("Scheibe").layerOrder, 2, "Expected Sprite Scheibe to be at layer 2");
  t.assert.equal(t.getSprite("Rot").layerOrder, 1, "Expected Sprite Rot to be at layer 1");
  t.assert.withinRange(t.getSprite("Rot").x, 213, 5, "Expected Sprite Rot to have x-position 213 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, 52, 5, "Expected Sprite Rot to have y-position 52 +-5");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937370983',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937370983',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937370983',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937370983',
      type: 'standard',
  }
]
