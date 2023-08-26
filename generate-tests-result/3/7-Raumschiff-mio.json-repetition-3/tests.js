const test0 = async function (t) {
  t.dragSprite('Raumschiff', -82.69752401599479, -51.343422102091125, null);
  await t.runForSteps(1);
  t.end();
}
const test1 = async function (t) {
  t.dragSprite('Raumschiff', -82.69752401599479, -51.343422102091125, null);
  await t.runForSteps(1);
  t.dragSprite('Raumschiff', 309, -217, null);
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
  t.assert.withinRange(t.getSprite("Raumschiff").x, 245.7411809548975, 5, "Expected Sprite Raumschiff to have x-position 245.7411809548975 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, -199.03407417371093, 5, "Expected Sprite Raumschiff to have y-position -199.03407417371093 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").x, -0.07596123493896023, 5, "Expected Sprite Schwarzes Loch to have x-position -0.07596123493896023 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").y, -70.86824088833465, 5, "Expected Sprite Schwarzes Loch to have y-position -70.86824088833465 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(1).x, 139.86666666666667, 5, "Expected Clone 1 of Stern to have x-position 139.86666666666667 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(1).y, 20.266666666666666, 5, "Expected Clone 1 of Stern to have y-position 20.266666666666666 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(2).x, 140, 5, "Expected Clone 2 of Stern to have x-position 140 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(2).y, 20, 5, "Expected Clone 2 of Stern to have y-position 20 +-5");
  t.assert.not(t.getSprite("Stern").getClone(2).sayText, "Expected Clone 2 of Stern not to say anything");
  t.assert.withinRange(t.getSprite("Stern").getClone(2).size, 50, 1, "Expected Clone 2 of Stern to have size 50 +-1");
  t.assert.ok(t.getSprite("Stern").getClone(2).visible, "Expected Clone 2 of Stern to be visible");
  t.assert.equal(t.getSprite("Stern").getClone(2).volume, 100, "Expected Clone 2 of Stern to have volume 100");
  await t.runForSteps(67);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Stern").getClone(3).currentCostume, 0, "Expected Clone 3 of Stern to have costume 0");
  t.assert.equal(t.getSprite("Stern").getClone(4).currentCostume, 0, "Expected Clone 4 of Stern to have costume 0");
  t.assert.equal(t.getSprite("Stern").getClone(5).currentCostume, 0, "Expected Clone 5 of Stern to have costume 0");
  t.assert.equal(t.getSprite("Stern").getClone(6).currentCostume, 0, "Expected Clone 6 of Stern to have costume 0");
  t.assert.equal(t.getSprite("Stern").getCloneCount(), 6, "Expected Sprite Stern to have 6 clones");
  t.assert.equal(t.getSprite("Schwarzes Loch").direction, 70, 1, "Expected Sprite Schwarzes Loch to face in direction 70 +-1");
  t.assert.equal(t.getSprite("Stern").getClone(3).direction, 90, 1, "Expected Clone 3 of Stern to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Stern").getClone(4).direction, 90, 1, "Expected Clone 4 of Stern to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Stern").getClone(5).direction, 90, 1, "Expected Clone 5 of Stern to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Stern").getClone(6).direction, 90, 1, "Expected Clone 6 of Stern to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Stern").getClone(3).effects.color, 0, "Expected effect color of Clone 3 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(3).effects.fisheye, 0, "Expected effect fisheye of Clone 3 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(3).effects.whirl, 0, "Expected effect whirl of Clone 3 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(3).effects.pixelate, 0, "Expected effect pixelate of Clone 3 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(3).effects.mosaic, 0, "Expected effect mosaic of Clone 3 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(3).effects.brightness, 0, "Expected effect brightness of Clone 3 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(3).effects.ghost, 0, "Expected effect ghost of Clone 3 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(4).effects.color, 0, "Expected effect color of Clone 4 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(4).effects.fisheye, 0, "Expected effect fisheye of Clone 4 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(4).effects.whirl, 0, "Expected effect whirl of Clone 4 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(4).effects.pixelate, 0, "Expected effect pixelate of Clone 4 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(4).effects.mosaic, 0, "Expected effect mosaic of Clone 4 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(4).effects.brightness, 0, "Expected effect brightness of Clone 4 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(4).effects.ghost, 0, "Expected effect ghost of Clone 4 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(5).effects.color, 0, "Expected effect color of Clone 5 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(5).effects.fisheye, 0, "Expected effect fisheye of Clone 5 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(5).effects.whirl, 0, "Expected effect whirl of Clone 5 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(5).effects.pixelate, 0, "Expected effect pixelate of Clone 5 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(5).effects.mosaic, 0, "Expected effect mosaic of Clone 5 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(5).effects.brightness, 0, "Expected effect brightness of Clone 5 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(5).effects.ghost, 0, "Expected effect ghost of Clone 5 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(6).effects.color, 0, "Expected effect color of Clone 6 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(6).effects.fisheye, 0, "Expected effect fisheye of Clone 6 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(6).effects.whirl, 0, "Expected effect whirl of Clone 6 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(6).effects.pixelate, 0, "Expected effect pixelate of Clone 6 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(6).effects.mosaic, 0, "Expected effect mosaic of Clone 6 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(6).effects.brightness, 0, "Expected effect brightness of Clone 6 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(6).effects.ghost, 0, "Expected effect ghost of Clone 6 of Stern to be 0");
  t.assert.equal(t.getSprite("Raumschiff").layerOrder, 10, "Expected Sprite Raumschiff to be at layer 10");
  t.assert.equal(t.getSprite("Stern").layerOrder, 9, "Expected Sprite Stern to be at layer 9");
  t.assert.equal(t.getSprite("Stern").getClone(3).getLayerOrder(), 5, "Expected Clone 3 of Stern to be at layer 5");
  t.assert.equal(t.getSprite("Stern").getClone(4).getLayerOrder(), 6, "Expected Clone 4 of Stern to be at layer 6");
  t.assert.equal(t.getSprite("Stern").getClone(5).getLayerOrder(), 7, "Expected Clone 5 of Stern to be at layer 7");
  t.assert.equal(t.getSprite("Stern").getClone(6).getLayerOrder(), 8, "Expected Clone 6 of Stern to be at layer 8");
  t.assert.withinRange(t.getSprite("Raumschiff").x, 236.68251437630954, 5, "Expected Sprite Raumschiff to have x-position 236.68251437630954 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, -165.22667025359362, 5, "Expected Sprite Raumschiff to have y-position -165.22667025359362 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").x, -19.622501868990582, 5, "Expected Sprite Schwarzes Loch to have x-position -19.622501868990582 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").y, -72.578341604963, 5, "Expected Sprite Schwarzes Loch to have y-position -72.578341604963 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(1).x, 135.73333333333332, 5, "Expected Clone 1 of Stern to have x-position 135.73333333333332 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(1).y, 35.6, 5, "Expected Clone 1 of Stern to have y-position 35.6 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(2).x, 156.78333333333333, 5, "Expected Clone 2 of Stern to have x-position 156.78333333333333 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(2).y, 26.883333333333333, 5, "Expected Clone 2 of Stern to have y-position 26.883333333333333 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(3).x, 127.8, 5, "Expected Clone 3 of Stern to have x-position 127.8 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(3).y, 15, 5, "Expected Clone 3 of Stern to have y-position 15 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(4).x, -214.06666666666666, 5, "Expected Clone 4 of Stern to have x-position -214.06666666666666 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(4).y, 142.93333333333334, 5, "Expected Clone 4 of Stern to have y-position 142.93333333333334 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(5).x, -199.5, 5, "Expected Clone 5 of Stern to have x-position -199.5 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(5).y, 142.2, 5, "Expected Clone 5 of Stern to have y-position 142.2 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(6).x, -211.5, 5, "Expected Clone 6 of Stern to have x-position -211.5 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(6).y, 165.33333333333334, 5, "Expected Clone 6 of Stern to have y-position 165.33333333333334 +-5");
  t.assert.equal(t.getSprite("Raumschiff").sayText, "Überstanden!", "Expected Sprite Raumschiff to say Überstanden!");
  t.assert.not(t.getSprite("Stern").getClone(3).sayText, "Expected Clone 3 of Stern not to say anything");
  t.assert.not(t.getSprite("Stern").getClone(4).sayText, "Expected Clone 4 of Stern not to say anything");
  t.assert.not(t.getSprite("Stern").getClone(5).sayText, "Expected Clone 5 of Stern not to say anything");
  t.assert.not(t.getSprite("Stern").getClone(6).sayText, "Expected Clone 6 of Stern not to say anything");
  t.assert.withinRange(t.getSprite("Stern").getClone(3).size, 50, 1, "Expected Clone 3 of Stern to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Stern").getClone(4).size, 50, 1, "Expected Clone 4 of Stern to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Stern").getClone(5).size, 50, 1, "Expected Clone 5 of Stern to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Stern").getClone(6).size, 50, 1, "Expected Clone 6 of Stern to have size 50 +-1");
  t.assert.equal(t.getSprite("Stern").getVariable("xPosition").value, "-210", "Expected xPosition to have value -210 in Sprite Stern");
  t.assert.equal(t.getSprite("Stern").getVariable("yPosition").value, "150", "Expected yPosition to have value 150 in Sprite Stern");
  t.assert.ok(t.getSprite("Stern").getClone(3).visible, "Expected Clone 3 of Stern to be visible");
  t.assert.ok(t.getSprite("Stern").getClone(4).visible, "Expected Clone 4 of Stern to be visible");
  t.assert.ok(t.getSprite("Stern").getClone(5).visible, "Expected Clone 5 of Stern to be visible");
  t.assert.ok(t.getSprite("Stern").getClone(6).visible, "Expected Clone 6 of Stern to be visible");
  t.assert.equal(t.getSprite("Stern").getClone(3).volume, 100, "Expected Clone 3 of Stern to have volume 100");
  t.assert.equal(t.getSprite("Stern").getClone(4).volume, 100, "Expected Clone 4 of Stern to have volume 100");
  t.assert.equal(t.getSprite("Stern").getClone(5).volume, 100, "Expected Clone 5 of Stern to have volume 100");
  t.assert.equal(t.getSprite("Stern").getClone(6).volume, 100, "Expected Clone 6 of Stern to have volume 100");
  await t.runForSteps(80);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Stern").getCloneCount(), 0, "Expected Sprite Stern to have 0 clones");
  t.assert.equal(t.getSprite("Schwarzes Loch").direction, 110, 1, "Expected Sprite Schwarzes Loch to face in direction 110 +-1");
  t.assert.equal(t.getSprite("Raumschiff").layerOrder, 4, "Expected Sprite Raumschiff to be at layer 4");
  t.assert.equal(t.getSprite("Stern").layerOrder, 3, "Expected Sprite Stern to be at layer 3");
  t.assert.withinRange(t.getSprite("Raumschiff").x, 217.01226694851857, 5, "Expected Sprite Raumschiff to have x-position 217.01226694851857 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, -91.81630745562461, 5, "Expected Sprite Raumschiff to have y-position -91.81630745562461 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").x, -0.07596123493896023, 5, "Expected Sprite Schwarzes Loch to have x-position -0.07596123493896023 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").y, -70.86824088833465, 5, "Expected Sprite Schwarzes Loch to have y-position -70.86824088833465 +-5");
  t.assert.not(t.getSprite("Raumschiff").sayText, "Expected Sprite Raumschiff not to say anything");
  t.end();
}
const test2 = async function (t) {
  t.keyPress('right arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.dragSprite('Raumschiff', 83.48153352794247, 93.73892794668407, null);
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
  t.assert.withinRange(t.getSprite("Raumschiff").x, 83.48153352794247, 5, "Expected Sprite Raumschiff to have x-position 83.48153352794247 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 94.73892794668407, 5, "Expected Sprite Raumschiff to have y-position 94.73892794668407 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").x, 4.622501868990582, 5, "Expected Sprite Schwarzes Loch to have x-position 4.622501868990582 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").y, -72.578341604963, 5, "Expected Sprite Schwarzes Loch to have y-position -72.578341604963 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(1).x, 139.73333333333332, 5, "Expected Clone 1 of Stern to have x-position 139.73333333333332 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(1).y, 20.533333333333335, 5, "Expected Clone 1 of Stern to have y-position 20.533333333333335 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(2).x, 140.31666666666666, 5, "Expected Clone 2 of Stern to have x-position 140.31666666666666 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(2).y, 20.116666666666667, 5, "Expected Clone 2 of Stern to have y-position 20.116666666666667 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(3).x, 140, 5, "Expected Clone 3 of Stern to have x-position 140 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(3).y, 20, 5, "Expected Clone 3 of Stern to have y-position 20 +-5");
  t.assert.not(t.getSprite("Stern").getClone(3).sayText, "Expected Clone 3 of Stern not to say anything");
  t.assert.withinRange(t.getSprite("Stern").getClone(3).size, 50, 1, "Expected Clone 3 of Stern to have size 50 +-1");
  t.assert.ok(t.getSprite("Stern").getClone(3).visible, "Expected Clone 3 of Stern to be visible");
  t.assert.equal(t.getSprite("Stern").getClone(3).volume, 100, "Expected Clone 3 of Stern to have volume 100");
  await t.runForSteps(45);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Stern").getCloneCount(), 0, "Expected Sprite Stern to have 0 clones");
  t.assert.equal(t.getSprite("Schwarzes Loch").direction, 80, 1, "Expected Sprite Schwarzes Loch to face in direction 80 +-1");
  t.assert.equal(t.getSprite("Raumschiff").layerOrder, 4, "Expected Sprite Raumschiff to be at layer 4");
  t.assert.equal(t.getSprite("Stern").layerOrder, 3, "Expected Sprite Stern to be at layer 3");
  t.assert.withinRange(t.getSprite("Raumschiff").x, 83.48153352794247, 5, "Expected Sprite Raumschiff to have x-position 83.48153352794247 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 126.73892794668407, 5, "Expected Sprite Raumschiff to have y-position 126.73892794668407 +-5");
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
      seed: '1687936642429',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936642429',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936642429',
      type: 'standard',
  }
]
