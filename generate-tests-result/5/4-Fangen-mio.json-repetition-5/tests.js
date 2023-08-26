const test0 = async function (t) {
  await t.runForSteps(69);
  await t.runForSteps(1);
  await t.runForSteps(35);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Rot").getCloneCount(), 0, "Expected Sprite Rot to have 0 clones");
  t.assert.equal(t.getSprite("Scheibe").layerOrder, 2, "Expected Sprite Scheibe to be at layer 2");
  t.assert.equal(t.getSprite("Rot").layerOrder, 1, "Expected Sprite Rot to be at layer 1");
  t.assert.withinRange(t.getSprite("Rot").x, 123, 5, "Expected Sprite Rot to have x-position 123 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, 65, 5, "Expected Sprite Rot to have y-position 65 +-5");
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(69);
  await t.runForSteps(1);
  await t.runForSteps(35);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Rot").getCloneCount(), 0, "Expected Sprite Rot to have 0 clones");
  t.assert.equal(t.getSprite("Scheibe").layerOrder, 2, "Expected Sprite Scheibe to be at layer 2");
  t.assert.equal(t.getSprite("Rot").layerOrder, 1, "Expected Sprite Rot to be at layer 1");
  t.assert.withinRange(t.getSprite("Rot").x, 123, 5, "Expected Sprite Rot to have x-position 123 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, 65, 5, "Expected Sprite Rot to have y-position 65 +-5");
  t.keyPress('right arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Scheibe").direction, 99, 1, "Expected Sprite Scheibe to face in direction 99 +-1");
  t.assert.withinRange(t.getSprite("Rot").x, -111, 5, "Expected Sprite Rot to have x-position -111 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, 62, 5, "Expected Sprite Rot to have y-position 62 +-5");
  t.keyPress('right arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Scheibe").direction, 108, 1, "Expected Sprite Scheibe to face in direction 108 +-1");
  t.assert.withinRange(t.getSprite("Rot").x, 39, 5, "Expected Sprite Rot to have x-position 39 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, -172, 5, "Expected Sprite Rot to have y-position -172 +-5");
  t.keyPress('left arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Scheibe").direction, 105, 1, "Expected Sprite Scheibe to face in direction 105 +-1");
  t.assert.withinRange(t.getSprite("Rot").x, -1, 5, "Expected Sprite Rot to have x-position -1 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, -24, 5, "Expected Sprite Rot to have y-position -24 +-5");
  t.keyPress('left arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Rot").getClone(1).currentCostume, 0, "Expected Clone 1 of Rot to have costume 0");
  t.assert.equal(t.getSprite("Rot").getCloneCount(), 1, "Expected Sprite Rot to have 1 clones");
  t.assert.equal(t.getSprite("Scheibe").direction, 99, 1, "Expected Sprite Scheibe to face in direction 99 +-1");
  t.assert.equal(t.getSprite("Rot").direction, -119.35775354279127, 1, "Expected Sprite Rot to face in direction -119.35775354279127 +-1");
  t.assert.equal(t.getSprite("Rot").getClone(1).direction, -119.35775354279127, 1, "Expected Clone 1 of Rot to face in direction -119.35775354279127 +-1");
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
  t.assert.withinRange(t.getSprite("Rot").x, 240, 5, "Expected Sprite Rot to have x-position 240 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, 135, 5, "Expected Sprite Rot to have y-position 135 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).x, 237.33333333333334, 5, "Expected Clone 1 of Rot to have x-position 237.33333333333334 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).y, 133.5, 5, "Expected Clone 1 of Rot to have y-position 133.5 +-5");
  t.assert.not(t.getSprite("Rot").getClone(1).sayText, "Expected Clone 1 of Rot not to say anything");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).size, 80, 1, "Expected Clone 1 of Rot to have size 80 +-1");
  t.assert.ok(t.getSprite("Rot").getClone(1).visible, "Expected Clone 1 of Rot to be visible");
  t.assert.equal(t.getSprite("Rot").getClone(1).volume, 100, "Expected Clone 1 of Rot to have volume 100");
  t.dragSprite('Rot', -16.76193255880264, 6.434301699948265, 1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Rot").getCloneCount(), 0, "Expected Sprite Rot to have 0 clones");
  t.assert.equal(t.getSprite("Scheibe").layerOrder, 2, "Expected Sprite Scheibe to be at layer 2");
  t.assert.equal(t.getSprite("Rot").layerOrder, 1, "Expected Sprite Rot to be at layer 1");
  t.end();
}
const test2 = async function (t) {
  await t.runForSteps(69);
  await t.runForSteps(1);
  await t.runForSteps(35);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Rot").getCloneCount(), 0, "Expected Sprite Rot to have 0 clones");
  t.assert.equal(t.getSprite("Scheibe").layerOrder, 2, "Expected Sprite Scheibe to be at layer 2");
  t.assert.equal(t.getSprite("Rot").layerOrder, 1, "Expected Sprite Rot to be at layer 1");
  t.assert.withinRange(t.getSprite("Rot").x, 123, 5, "Expected Sprite Rot to have x-position 123 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, 65, 5, "Expected Sprite Rot to have y-position 65 +-5");
  t.keyPress('right arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Scheibe").direction, 99, 1, "Expected Sprite Scheibe to face in direction 99 +-1");
  t.assert.withinRange(t.getSprite("Rot").x, -111, 5, "Expected Sprite Rot to have x-position -111 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, 62, 5, "Expected Sprite Rot to have y-position 62 +-5");
  t.keyPress('right arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Scheibe").direction, 108, 1, "Expected Sprite Scheibe to face in direction 108 +-1");
  t.assert.withinRange(t.getSprite("Rot").x, 39, 5, "Expected Sprite Rot to have x-position 39 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, -172, 5, "Expected Sprite Rot to have y-position -172 +-5");
  t.keyPress('left arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Scheibe").direction, 105, 1, "Expected Sprite Scheibe to face in direction 105 +-1");
  t.assert.withinRange(t.getSprite("Rot").x, -1, 5, "Expected Sprite Rot to have x-position -1 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, -24, 5, "Expected Sprite Rot to have y-position -24 +-5");
  await t.runForSteps(46);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Rot").getClone(1).currentCostume, 0, "Expected Clone 1 of Rot to have costume 0");
  t.assert.equal(t.getSprite("Rot").getCloneCount(), 1, "Expected Sprite Rot to have 1 clones");
  t.assert.equal(t.getSprite("Rot").direction, -119.35775354279127, 1, "Expected Sprite Rot to face in direction -119.35775354279127 +-1");
  t.assert.equal(t.getSprite("Rot").getClone(1).direction, -119.35775354279127, 1, "Expected Clone 1 of Rot to face in direction -119.35775354279127 +-1");
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
  t.assert.withinRange(t.getSprite("Rot").x, 240, 5, "Expected Sprite Rot to have x-position 240 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, 135, 5, "Expected Sprite Rot to have y-position 135 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).x, 120, 5, "Expected Clone 1 of Rot to have x-position 120 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).y, 67.5, 5, "Expected Clone 1 of Rot to have y-position 67.5 +-5");
  t.assert.not(t.getSprite("Rot").getClone(1).sayText, "Expected Clone 1 of Rot not to say anything");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).size, 80, 1, "Expected Clone 1 of Rot to have size 80 +-1");
  t.assert.ok(t.getSprite("Rot").getClone(1).visible, "Expected Clone 1 of Rot to be visible");
  t.assert.equal(t.getSprite("Rot").getClone(1).volume, 100, "Expected Clone 1 of Rot to have volume 100");
  t.dragSprite('Rot', -16.76193255880264, 6.434301699948265, 1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Rot").getCloneCount(), 0, "Expected Sprite Rot to have 0 clones");
  t.assert.equal(t.getSprite("Scheibe").layerOrder, 2, "Expected Sprite Scheibe to be at layer 2");
  t.assert.equal(t.getSprite("Rot").layerOrder, 1, "Expected Sprite Rot to be at layer 1");
  t.keyPress('left arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Scheibe").direction, 96, 1, "Expected Sprite Scheibe to face in direction 96 +-1");
  await t.runForSteps(53);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Rot").getClone(1).currentCostume, 0, "Expected Clone 1 of Rot to have costume 0");
  t.assert.equal(t.getSprite("Rot").getCloneCount(), 1, "Expected Sprite Rot to have 1 clones");
  t.assert.equal(t.getSprite("Rot").direction, 129.13612798923106, 1, "Expected Sprite Rot to face in direction 129.13612798923106 +-1");
  t.assert.equal(t.getSprite("Rot").getClone(1).direction, 129.13612798923106, 1, "Expected Clone 1 of Rot to face in direction 129.13612798923106 +-1");
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
  t.assert.withinRange(t.getSprite("Rot").x, -204, 5, "Expected Sprite Rot to have x-position -204 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, 166, 5, "Expected Sprite Rot to have y-position 166 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).x, -126.93333333333334, 5, "Expected Clone 1 of Rot to have x-position -126.93333333333334 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).y, 103.28888888888889, 5, "Expected Clone 1 of Rot to have y-position 103.28888888888889 +-5");
  t.assert.not(t.getSprite("Rot").getClone(1).sayText, "Expected Clone 1 of Rot not to say anything");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).size, 80, 1, "Expected Clone 1 of Rot to have size 80 +-1");
  t.assert.ok(t.getSprite("Rot").getClone(1).visible, "Expected Clone 1 of Rot to be visible");
  t.assert.equal(t.getSprite("Rot").getClone(1).volume, 100, "Expected Clone 1 of Rot to have volume 100");
  await t.runForSteps(39);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Rot").getClone(1).currentCostume, 0, "Expected Clone 1 of Rot to have costume 0");
  t.assert.equal(t.getSprite("Rot").direction, 49.47213006428441, 1, "Expected Sprite Rot to face in direction 49.47213006428441 +-1");
  t.assert.equal(t.getSprite("Rot").getClone(1).direction, 49.47213006428441, 1, "Expected Clone 1 of Rot to face in direction 49.47213006428441 +-1");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).getLayerOrder(), 1, "Expected Clone 1 of Rot to be at layer 1");
  t.assert.withinRange(t.getSprite("Rot").x, -193, 5, "Expected Sprite Rot to have x-position -193 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, -165, 5, "Expected Sprite Rot to have y-position -165 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).x, -167.26666666666665, 5, "Expected Clone 1 of Rot to have x-position -167.26666666666665 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).y, -143, 5, "Expected Clone 1 of Rot to have y-position -143 +-5");
  t.assert.not(t.getSprite("Rot").getClone(1).sayText, "Expected Clone 1 of Rot not to say anything");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).size, 80, 1, "Expected Clone 1 of Rot to have size 80 +-1");
  t.assert.ok(t.getSprite("Rot").getClone(1).visible, "Expected Clone 1 of Rot to be visible");
  t.assert.equal(t.getSprite("Rot").getClone(1).volume, 100, "Expected Clone 1 of Rot to have volume 100");
  await t.runForSteps(51);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Rot").x, -62, 5, "Expected Sprite Rot to have x-position -62 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, 94, 5, "Expected Sprite Rot to have y-position 94 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).x, -55.75555555555556, 5, "Expected Clone 1 of Rot to have x-position -55.75555555555556 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).y, -47.66666666666666, 5, "Expected Clone 1 of Rot to have y-position -47.66666666666666 +-5");
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Rot").getCloneCount(), 0, "Expected Sprite Rot to have 0 clones");
  t.assert.equal(t.getSprite("Scheibe").direction, 108, 1, "Expected Sprite Scheibe to face in direction 108 +-1");
  t.assert.equal(t.getSprite("Scheibe").layerOrder, 2, "Expected Sprite Scheibe to be at layer 2");
  t.assert.equal(t.getSprite("Rot").layerOrder, 1, "Expected Sprite Rot to be at layer 1");
  t.assert.withinRange(t.getSprite("Rot").x, 221, 5, "Expected Sprite Rot to have x-position 221 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, -159, 5, "Expected Sprite Rot to have y-position -159 +-5");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938175635',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938175635',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938175635',
      type: 'standard',
  }
]
