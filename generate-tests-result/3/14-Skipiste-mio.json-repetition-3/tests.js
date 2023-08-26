const test0 = async function (t) {
  t.keyPress('left arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.dragSprite('Skikatze', 197.62619372760008, 98.07652030498173, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Skikatze").x, 197.62619372760008, 5, "Expected Sprite Skikatze to have x-position 197.62619372760008 +-5");
  t.assert.withinRange(t.getSprite("Skikatze").y, 98.07652030498173, 5, "Expected Sprite Skikatze to have y-position 98.07652030498173 +-5");
  await t.runForSteps(72);
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
  t.assert.withinRange(t.getSprite("Skikatze").x, 266, 5, "Expected Sprite Skikatze to have x-position 266 +-5");
  t.assert.withinRange(t.getSprite("Skikatze").y, 98.07652030498173, 5, "Expected Sprite Skikatze to have y-position 98.07652030498173 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(1).x, 139, 5, "Expected Clone 1 of Hindernis to have x-position 139 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(1).y, 180, 5, "Expected Clone 1 of Hindernis to have y-position 180 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(2).x, -21, 5, "Expected Clone 2 of Hindernis to have x-position -21 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(2).y, 3, 5, "Expected Clone 2 of Hindernis to have y-position 3 +-5");
  t.assert.not(t.getSprite("Hindernis").getClone(1).sayText, "Expected Clone 1 of Hindernis not to say anything");
  t.assert.not(t.getSprite("Hindernis").getClone(2).sayText, "Expected Clone 2 of Hindernis not to say anything");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(1).size, 60, 1, "Expected Clone 1 of Hindernis to have size 60 +-1");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(2).size, 60, 1, "Expected Clone 2 of Hindernis to have size 60 +-1");
  t.assert.not(t.getSprite("Hindernis").getClone(1).visible, "Expected Clone 1 of Hindernis not to be visible");
  t.assert.ok(t.getSprite("Hindernis").getClone(2).visible, "Expected Clone 2 of Hindernis to be visible");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).volume, 100, "Expected Clone 1 of Hindernis to have volume 100");
  t.assert.equal(t.getSprite("Hindernis").getClone(2).volume, 100, "Expected Clone 2 of Hindernis to have volume 100");
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(39);
  await t.runForSteps(1);
  t.keyPress('left arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Skikatze").x, 20, 5, "Expected Sprite Skikatze to have x-position 20 +-5");
  t.assert.withinRange(t.getSprite("Skikatze").y, 100, 5, "Expected Sprite Skikatze to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(1).x, 139, 5, "Expected Clone 1 of Hindernis to have x-position 139 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(1).y, -6, 5, "Expected Clone 1 of Hindernis to have y-position -6 +-5");
  t.end();
}
const test2 = async function (t) {
  t.keyPress('left arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  await t.runForSteps(72);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Skikatze").currentCostume, 1, "Expected Sprite Skikatze to have costume 1");
  t.assert.withinRange(t.getSprite("Skikatze").x, 86, 5, "Expected Sprite Skikatze to have x-position 86 +-5");
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
      seed: '1687936644021',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936644021',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936644021',
      type: 'standard',
  }
]
