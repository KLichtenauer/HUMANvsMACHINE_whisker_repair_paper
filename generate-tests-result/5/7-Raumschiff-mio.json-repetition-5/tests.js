const test0 = async function (t) {
  t.dragSprite('Raumschiff', 124.37651748030686, 89.05532701039814, null);
  await t.runForSteps(1);
  t.end();
}
const test1 = async function (t) {
  t.keyPress('right arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.dragSprite('Raumschiff', 240, -158.42930961143693, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Stern").getClone(3).currentCostume, 0, "Expected Clone 3 of Stern to have costume 0");
  t.assert.equal(t.getSprite("Stern").getCloneCount(), 3, "Expected Sprite Stern to have 3 clones");
  t.assert.equal(t.getSprite("Schwarzes Loch").direction, 120, 1, "Expected Sprite Schwarzes Loch to face in direction 120 +-1");
  t.assert.equal(t.getSprite("Stern").getClone(3).direction, 90, 1, "Expected Clone 3 of Stern to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Stern").getClone(3).effects.color, 0, "Expected effect color of Clone 3 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(3).effects.fisheye, 0, "Expected effect fisheye of Clone 3 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(3).effects.whirl, 0, "Expected effect whirl of Clone 3 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(3).effects.pixelate, 0, "Expected effect pixelate of Clone 3 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(3).effects.mosaic, 0, "Expected effect mosaic of Clone 3 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(3).effects.brightness, 0, "Expected effect brightness of Clone 3 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(3).effects.ghost, 0, "Expected effect ghost of Clone 3 of Stern to be 0");
  t.assert.equal(t.getSprite("Raumschiff").layerOrder, 7, "Expected Sprite Raumschiff to be at layer 7");
  t.assert.equal(t.getSprite("Stern").layerOrder, 6, "Expected Sprite Stern to be at layer 6");
  t.assert.equal(t.getSprite("Stern").getClone(3).getLayerOrder(), 5, "Expected Clone 3 of Stern to be at layer 5");
  t.assert.withinRange(t.getSprite("Raumschiff").x, 239, 5, "Expected Sprite Raumschiff to have x-position 239 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, -157.42930961143693, 5, "Expected Sprite Raumschiff to have y-position -157.42930961143693 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").x, 4.622501868990582, 5, "Expected Sprite Schwarzes Loch to have x-position 4.622501868990582 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").y, -72.578341604963, 5, "Expected Sprite Schwarzes Loch to have y-position -72.578341604963 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(1).x, 140.63333333333333, 5, "Expected Clone 1 of Stern to have x-position 140.63333333333333 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(1).y, 20.166666666666668, 5, "Expected Clone 1 of Stern to have y-position 20.166666666666668 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(2).x, 140.3, 5, "Expected Clone 2 of Stern to have x-position 140.3 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(2).y, 20.016666666666666, 5, "Expected Clone 2 of Stern to have y-position 20.016666666666666 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(3).x, 140, 5, "Expected Clone 3 of Stern to have x-position 140 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(3).y, 20, 5, "Expected Clone 3 of Stern to have y-position 20 +-5");
  t.assert.not(t.getSprite("Stern").getClone(3).sayText, "Expected Clone 3 of Stern not to say anything");
  t.assert.withinRange(t.getSprite("Stern").getClone(3).size, 50, 1, "Expected Clone 3 of Stern to have size 50 +-1");
  t.assert.ok(t.getSprite("Stern").getClone(3).visible, "Expected Clone 3 of Stern to be visible");
  t.assert.equal(t.getSprite("Stern").getClone(3).volume, 100, "Expected Clone 3 of Stern to have volume 100");
  await t.runForSteps(200);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Stern").getCloneCount(), 0, "Expected Sprite Stern to have 0 clones");
  t.assert.equal(t.getSprite("Schwarzes Loch").direction, 110, 1, "Expected Sprite Schwarzes Loch to face in direction 110 +-1");
  t.assert.equal(t.getSprite("Raumschiff").layerOrder, 4, "Expected Sprite Raumschiff to be at layer 4");
  t.assert.equal(t.getSprite("Stern").layerOrder, 3, "Expected Sprite Stern to be at layer 3");
  t.assert.withinRange(t.getSprite("Raumschiff").x, 239, 5, "Expected Sprite Raumschiff to have x-position 239 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, -83, 5, "Expected Sprite Raumschiff to have y-position -83 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").x, -0.07596123493896023, 5, "Expected Sprite Schwarzes Loch to have x-position -0.07596123493896023 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").y, -70.86824088833465, 5, "Expected Sprite Schwarzes Loch to have y-position -70.86824088833465 +-5");
  t.assert.equal(t.getSprite("Stern").getVariable("xPosition").value, "-210", "Expected xPosition to have value -210 in Sprite Stern");
  t.assert.equal(t.getSprite("Stern").getVariable("yPosition").value, "150", "Expected yPosition to have value 150 in Sprite Stern");
  t.end();
}
const test2 = async function (t) {
  t.dragSprite('Raumschiff', 124.37651748030686, 89.05532701039814, null);
  await t.runForSteps(1);
  t.dragSprite('Raumschiff', 98.15141267618576, 104.98414518888805, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Stern").getClone(2).currentCostume, 0, "Expected Clone 2 of Stern to have costume 0");
  t.assert.equal(t.getSprite("Stern").getCloneCount(), 2, "Expected Sprite Stern to have 2 clones");
  t.assert.equal(t.getSprite("Schwarzes Loch").direction, 110, 1, "Expected Sprite Schwarzes Loch to face in direction 110 +-1");
  t.assert.equal(t.getSprite("Stern").getClone(2).direction, 90, 1, "Expected Clone 2 of Stern to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Stern").getClone(2).effects.color, 0, "Expected effect color of Clone 2 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(2).effects.fisheye, 0, "Expected effect fisheye of Clone 2 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(2).effects.whirl, 0, "Expected effect whirl of Clone 2 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(2).effects.pixelate, 0, "Expected effect pixelate of Clone 2 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(2).effects.mosaic, 0, "Expected effect mosaic of Clone 2 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(2).effects.brightness, 0, "Expected effect brightness of Clone 2 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(2).effects.ghost, 0, "Expected effect ghost of Clone 2 of Stern to be 0");
  t.assert.equal(t.getSprite("Raumschiff").layerOrder, 6, "Expected Sprite Raumschiff to be at layer 6");
  t.assert.equal(t.getSprite("Stern").layerOrder, 5, "Expected Sprite Stern to be at layer 5");
  t.assert.equal(t.getSprite("Stern").getClone(2).getLayerOrder(), 4, "Expected Clone 2 of Stern to be at layer 4");
  t.assert.withinRange(t.getSprite("Raumschiff").x, 97.89259363108323, 5, "Expected Sprite Raumschiff to have x-position 97.89259363108323 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 105.95007101517712, 5, "Expected Sprite Raumschiff to have y-position 105.95007101517712 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").x, -0.07596123493896023, 5, "Expected Sprite Schwarzes Loch to have x-position -0.07596123493896023 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").y, -70.86824088833465, 5, "Expected Sprite Schwarzes Loch to have y-position -70.86824088833465 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(1).x, 140.31666666666666, 5, "Expected Clone 1 of Stern to have x-position 140.31666666666666 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(1).y, 20.083333333333332, 5, "Expected Clone 1 of Stern to have y-position 20.083333333333332 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(2).x, 140, 5, "Expected Clone 2 of Stern to have x-position 140 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(2).y, 20, 5, "Expected Clone 2 of Stern to have y-position 20 +-5");
  t.assert.not(t.getSprite("Stern").getClone(2).sayText, "Expected Clone 2 of Stern not to say anything");
  t.assert.withinRange(t.getSprite("Stern").getClone(2).size, 50, 1, "Expected Clone 2 of Stern to have size 50 +-1");
  t.assert.ok(t.getSprite("Stern").getClone(2).visible, "Expected Clone 2 of Stern to be visible");
  t.assert.equal(t.getSprite("Stern").getClone(2).volume, 100, "Expected Clone 2 of Stern to have volume 100");
  await t.runForSteps(81);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Stern").getCloneCount(), 0, "Expected Sprite Stern to have 0 clones");
  t.assert.equal(t.getSprite("Schwarzes Loch").direction, 80, 1, "Expected Sprite Schwarzes Loch to face in direction 80 +-1");
  t.assert.equal(t.getSprite("Raumschiff").layerOrder, 4, "Expected Sprite Raumschiff to be at layer 4");
  t.assert.equal(t.getSprite("Stern").layerOrder, 3, "Expected Sprite Stern to be at layer 3");
  t.assert.withinRange(t.getSprite("Raumschiff").x, 89.35156514269984, 5, "Expected Sprite Raumschiff to have x-position 89.35156514269984 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 137.8256232827163, 5, "Expected Sprite Raumschiff to have y-position 137.8256232827163 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").x, -14.92403876506104, 5, "Expected Sprite Schwarzes Loch to have x-position -14.92403876506104 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").y, -70.86824088833465, 5, "Expected Sprite Schwarzes Loch to have y-position -70.86824088833465 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").size, 5, 1, "Expected Sprite Raumschiff to have size 5 +-1");
  t.assert.equal(t.getSprite("Stern").getVariable("xPosition").value, "-210", "Expected xPosition to have value -210 in Sprite Stern");
  t.assert.equal(t.getSprite("Stern").getVariable("yPosition").value, "150", "Expected yPosition to have value 150 in Sprite Stern");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938098463',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938098463',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938098463',
      type: 'standard',
  }
]
