const test0 = async function (t) {
  await t.runForSteps(65);
  await t.runForSteps(1);
  t.dragSprite('Skikatze', -101, 120, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Skikatze").currentCostume, 1, "Expected Sprite Skikatze to have costume 1");
  t.assert.equal(t.getSprite("Hindernis").getCloneCount(), 0, "Expected Sprite Hindernis to have 0 clones");
  t.assert.equal(t.getSprite("Skikatze").layerOrder, 2, "Expected Sprite Skikatze to be at layer 2");
  t.assert.equal(t.getSprite("Hindernis").layerOrder, 1, "Expected Sprite Hindernis to be at layer 1");
  t.assert.withinRange(t.getSprite("Skikatze").x, -99, 5, "Expected Sprite Skikatze to have x-position -99 +-5");
  t.assert.withinRange(t.getSprite("Skikatze").y, 120, 5, "Expected Sprite Skikatze to have y-position 120 +-5");
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(36);
  await t.runForSteps(1);
  t.keyPress('left arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Skikatze").x, 14, 5, "Expected Sprite Skikatze to have x-position 14 +-5");
  t.assert.withinRange(t.getSprite("Skikatze").y, 100, 5, "Expected Sprite Skikatze to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(1).x, -101, 5, "Expected Clone 1 of Hindernis to have x-position -101 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(1).y, -24, 5, "Expected Clone 1 of Hindernis to have y-position -24 +-5");
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Skikatze").x, 18, 5, "Expected Sprite Skikatze to have x-position 18 +-5");
  t.assert.withinRange(t.getSprite("Skikatze").y, 100, 5, "Expected Sprite Skikatze to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(1).x, -101, 5, "Expected Clone 1 of Hindernis to have x-position -101 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(1).y, -12, 5, "Expected Clone 1 of Hindernis to have y-position -12 +-5");
  await t.runForSteps(200);
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
  t.assert.withinRange(t.getSprite("Skikatze").x, 266, 5, "Expected Sprite Skikatze to have x-position 266 +-5");
  t.assert.withinRange(t.getSprite("Skikatze").y, 100, 5, "Expected Sprite Skikatze to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(1).x, 163, 5, "Expected Clone 1 of Hindernis to have x-position 163 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(1).y, 102, 5, "Expected Clone 1 of Hindernis to have y-position 102 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(2).x, 53, 5, "Expected Clone 2 of Hindernis to have x-position 53 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(2).y, -79.6, 5, "Expected Clone 2 of Hindernis to have y-position -79.6 +-5");
  t.assert.not(t.getSprite("Hindernis").getClone(2).sayText, "Expected Clone 2 of Hindernis not to say anything");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(2).size, 60, 1, "Expected Clone 2 of Hindernis to have size 60 +-1");
  t.assert.ok(t.getSprite("Hindernis").getClone(2).visible, "Expected Clone 2 of Hindernis to be visible");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).volume, 100, "Expected Clone 2 of Hindernis to have volume 100");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687939188161',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687939188161',
      type: 'standard',
  }
]
