const test0 = async function (t) {
  t.keyPress('right arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.dragSprite('Rot', 5.2389925878491175, -16.83152403976737, 1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Rot").getCloneCount(), 0, "Expected Sprite Rot to have 0 clones");
  t.assert.equal(t.getSprite("Scheibe").layerOrder, 2, "Expected Sprite Scheibe to be at layer 2");
  t.assert.equal(t.getSprite("Rot").layerOrder, 1, "Expected Sprite Rot to be at layer 1");
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(18);
  await t.runForSteps(1);
  t.dragSprite('Rot', -13.523588178877395, 11.54701831448706, 1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Rot").getCloneCount(), 0, "Expected Sprite Rot to have 0 clones");
  t.assert.equal(t.getSprite("Scheibe").layerOrder, 2, "Expected Sprite Scheibe to be at layer 2");
  t.assert.equal(t.getSprite("Rot").layerOrder, 1, "Expected Sprite Rot to be at layer 1");
  t.end();
}
const test2 = async function (t) {
  t.keyPress('right arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.keyPress('left arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Scheibe").direction, 90, 1, "Expected Sprite Scheibe to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).x, -204.94444444444446, 5, "Expected Clone 1 of Rot to have x-position -204.94444444444446 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).y, 153.94444444444446, 5, "Expected Clone 1 of Rot to have y-position 153.94444444444446 +-5");
  t.end();
}
const test3 = async function (t) {
  await t.runForSteps(18);
  await t.runForSteps(1);
  await t.runForSteps(100);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Rot").getClone(1).currentCostume, 0, "Expected Clone 1 of Rot to have costume 0");
  t.assert.equal(t.getSprite("Rot").direction, 50.959839110713055, 1, "Expected Sprite Rot to face in direction 50.959839110713055 +-1");
  t.assert.equal(t.getSprite("Rot").getClone(1).direction, 50.959839110713055, 1, "Expected Clone 1 of Rot to face in direction 50.959839110713055 +-1");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).getLayerOrder(), 1, "Expected Clone 1 of Rot to be at layer 1");
  t.assert.withinRange(t.getSprite("Rot").x, -201, 5, "Expected Sprite Rot to have x-position -201 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, -163, 5, "Expected Sprite Rot to have y-position -163 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).x, -80.4, 5, "Expected Clone 1 of Rot to have x-position -80.4 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).y, -65.2, 5, "Expected Clone 1 of Rot to have y-position -65.2 +-5");
  t.assert.not(t.getSprite("Rot").getClone(1).sayText, "Expected Clone 1 of Rot not to say anything");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).size, 80, 1, "Expected Clone 1 of Rot to have size 80 +-1");
  t.assert.ok(t.getSprite("Rot").getClone(1).visible, "Expected Clone 1 of Rot to be visible");
  t.assert.equal(t.getSprite("Rot").getClone(1).volume, 100, "Expected Clone 1 of Rot to have volume 100");
  await t.runForSteps(100);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Rot").getCloneCount(), 0, "Expected Sprite Rot to have 0 clones");
  t.assert.equal(t.getSprite("Rot").direction, -112.00691713989892, 1, "Expected Sprite Rot to face in direction -112.00691713989892 +-1");
  t.assert.equal(t.getSprite("Scheibe").layerOrder, 2, "Expected Sprite Scheibe to be at layer 2");
  t.assert.equal(t.getSprite("Rot").layerOrder, 1, "Expected Sprite Rot to be at layer 1");
  t.assert.withinRange(t.getSprite("Rot").x, 240, 5, "Expected Sprite Rot to have x-position 240 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, 97, 5, "Expected Sprite Rot to have y-position 97 +-5");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938936008',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938936008',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938936008',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938936008',
      type: 'standard',
  }
]
