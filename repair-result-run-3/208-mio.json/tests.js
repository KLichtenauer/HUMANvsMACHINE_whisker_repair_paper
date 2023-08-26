const test0 = async function (t) {
  await t.runForSteps(47);
  await t.runForSteps(1);
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(47);
  await t.runForSteps(1);
  t.dragSprite('Raumschiff', 240, -180, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Schwarzes Loch").direction, -140, 1, "Expected Sprite Schwarzes Loch to face in direction -140 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, 239.7411809548975, 5, "Expected Sprite Raumschiff to have x-position 239.7411809548975 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, -179.03407417371093, 5, "Expected Sprite Raumschiff to have y-position -179.03407417371093 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").x, 15.99678915194036, 5, "Expected Sprite Schwarzes Loch to have x-position 15.99678915194036 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").y, -115.02775964481614, 5, "Expected Sprite Schwarzes Loch to have y-position -115.02775964481614 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(1).x, 137.6, 5, "Expected Clone 1 of Stern to have x-position 137.6 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(1).y, 30.4, 5, "Expected Clone 1 of Stern to have y-position 30.4 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(2).x, 133.73333333333332, 5, "Expected Clone 2 of Stern to have x-position 133.73333333333332 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(2).y, 9.033333333333333, 5, "Expected Clone 2 of Stern to have y-position 9.033333333333333 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(3).x, 124.66666666666667, 5, "Expected Clone 3 of Stern to have x-position 124.66666666666667 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(3).y, 8.5, 5, "Expected Clone 3 of Stern to have y-position 8.5 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(4).x, -215.13333333333333, 5, "Expected Clone 4 of Stern to have x-position -215.13333333333333 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(4).y, 161, 5, "Expected Clone 4 of Stern to have y-position 161 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(5).x, -207.85, 5, "Expected Clone 5 of Stern to have x-position -207.85 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(5).y, 135.66666666666666, 5, "Expected Clone 5 of Stern to have y-position 135.66666666666666 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(6).x, -210.7, 5, "Expected Clone 6 of Stern to have x-position -210.7 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(6).y, 147.9, 5, "Expected Clone 6 of Stern to have y-position 147.9 +-5");
  t.assert.equal(t.getSprite("Raumschiff").sayText, "Überstanden!", "Expected Sprite Raumschiff to say Überstanden!");
  await t.runForSteps(43);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Schwarzes Loch").direction, -60, 1, "Expected Sprite Schwarzes Loch to face in direction -60 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, 242.37653336856482, 5, "Expected Sprite Raumschiff to have x-position 242.37653336856482 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, -186.47703843195308, 5, "Expected Sprite Raumschiff to have y-position -186.47703843195308 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").x, -19.622501868990582, 5, "Expected Sprite Schwarzes Loch to have x-position -19.622501868990582 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").y, -124.57191990884373, 5, "Expected Sprite Schwarzes Loch to have y-position -124.57191990884373 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(1).x, 128.73333333333332, 5, "Expected Clone 1 of Stern to have x-position 128.73333333333332 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(1).y, 24.733333333333334, 5, "Expected Clone 1 of Stern to have y-position 24.733333333333334 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(2).x, 136.5, 5, "Expected Clone 2 of Stern to have x-position 136.5 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(2).y, 20.5, 5, "Expected Clone 2 of Stern to have y-position 20.5 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(3).x, 120.96666666666667, 5, "Expected Clone 3 of Stern to have x-position 120.96666666666667 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(3).y, 4.516666666666667, 5, "Expected Clone 3 of Stern to have y-position 4.516666666666667 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(4).x, -205.75, 5, "Expected Clone 4 of Stern to have x-position -205.75 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(4).y, 156.9, 5, "Expected Clone 4 of Stern to have y-position 156.9 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(5).x, -204.83333333333334, 5, "Expected Clone 5 of Stern to have x-position -204.83333333333334 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(5).y, 145.16666666666666, 5, "Expected Clone 5 of Stern to have y-position 145.16666666666666 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(6).x, -212.25, 5, "Expected Clone 6 of Stern to have x-position -212.25 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(6).y, 149.91666666666666, 5, "Expected Clone 6 of Stern to have y-position 149.91666666666666 +-5");
  await t.runForSteps(100);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Stern").getCloneCount(), 0, "Expected Sprite Stern to have 0 clones");
  t.assert.equal(t.getSprite("Schwarzes Loch").direction, -160, 1, "Expected Sprite Schwarzes Loch to face in direction -160 +-1");
  t.assert.equal(t.getSprite("Raumschiff").layerOrder, 4, "Expected Sprite Raumschiff to be at layer 4");
  t.assert.equal(t.getSprite("Stern").layerOrder, 3, "Expected Sprite Stern to be at layer 3");
  t.assert.withinRange(t.getSprite("Raumschiff").x, 217.01226694851857, 5, "Expected Sprite Raumschiff to have x-position 217.01226694851857 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, -91.81630745562461, 5, "Expected Sprite Raumschiff to have y-position -91.81630745562461 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").x, 20.20688986856871, 5, "Expected Sprite Schwarzes Loch to have x-position 20.20688986856871 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").y, -105.9991695219644, 5, "Expected Sprite Schwarzes Loch to have y-position -105.9991695219644 +-5");
  t.assert.not(t.getSprite("Raumschiff").sayText, "Expected Sprite Raumschiff not to say anything");
  t.end();
}
const test2 = async function (t) {
  t.dragSprite('Raumschiff', -127.06300017749957, -64.46674010967678, null);
  await t.runForSteps(1);
  t.dragSprite('Raumschiff', -166.22940554715072, -23.220530155638677, null);
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
  t.assert.withinRange(t.getSprite("Raumschiff").x, -166.48822459225323, 5, "Expected Sprite Raumschiff to have x-position -166.48822459225323 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, -22.254604329349608, 5, "Expected Sprite Raumschiff to have y-position -22.254604329349608 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").x, -0.07596123493896023, 5, "Expected Sprite Schwarzes Loch to have x-position -0.07596123493896023 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").y, -70.86824088833465, 5, "Expected Sprite Schwarzes Loch to have y-position -70.86824088833465 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(1).x, 139.95, 5, "Expected Clone 1 of Stern to have x-position 139.95 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(1).y, 20.216666666666665, 5, "Expected Clone 1 of Stern to have y-position 20.216666666666665 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(2).x, 140, 5, "Expected Clone 2 of Stern to have x-position 140 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(2).y, 20, 5, "Expected Clone 2 of Stern to have y-position 20 +-5");
  t.assert.not(t.getSprite("Stern").getClone(2).sayText, "Expected Clone 2 of Stern not to say anything");
  t.assert.withinRange(t.getSprite("Stern").getClone(2).size, 50, 1, "Expected Clone 2 of Stern to have size 50 +-1");
  t.assert.ok(t.getSprite("Stern").getClone(2).visible, "Expected Clone 2 of Stern to be visible");
  t.assert.equal(t.getSprite("Stern").getClone(2).volume, 100, "Expected Clone 2 of Stern to have volume 100");
  await t.runForSteps(34);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Stern").getCloneCount(), 0, "Expected Sprite Stern to have 0 clones");
  t.assert.equal(t.getSprite("Schwarzes Loch").direction, 80, 1, "Expected Sprite Schwarzes Loch to face in direction 80 +-1");
  t.assert.equal(t.getSprite("Raumschiff").layerOrder, 4, "Expected Sprite Raumschiff to be at layer 4");
  t.assert.equal(t.getSprite("Stern").layerOrder, 3, "Expected Sprite Stern to be at layer 3");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -175.02925308063615, 5, "Expected Sprite Raumschiff to have x-position -175.02925308063615 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 9.620947938189651, 5, "Expected Sprite Raumschiff to have y-position 9.620947938189651 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").x, -14.92403876506104, 5, "Expected Sprite Schwarzes Loch to have x-position -14.92403876506104 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").y, -70.86824088833465, 5, "Expected Sprite Schwarzes Loch to have y-position -70.86824088833465 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").size, 5, 1, "Expected Sprite Raumschiff to have size 5 +-1");
  t.assert.equal(t.getSprite("Stern").getVariable("xPosition").value, "-210", "Expected xPosition to have value -210 in Sprite Stern");
  t.assert.equal(t.getSprite("Stern").getVariable("yPosition").value, "150", "Expected yPosition to have value 150 in Sprite Stern");
  t.end();
}
const test3 = async function (t) {
  await t.runForSteps(47);
  await t.runForSteps(1);
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Raumschiff").direction, 45, 1, "Expected Sprite Raumschiff to face in direction 45 +-1");
  t.assert.equal(t.getSprite("Schwarzes Loch").direction, -100, 1, "Expected Sprite Schwarzes Loch to face in direction -100 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -211.21620738373406, 5, "Expected Sprite Raumschiff to have x-position -211.21620738373406 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, -119.13057650057571, 5, "Expected Sprite Raumschiff to have y-position -119.13057650057571 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").x, -0.07596123493896201, 5, "Expected Sprite Schwarzes Loch to have x-position -0.07596123493896201 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").y, -126.28202062547207, 5, "Expected Sprite Schwarzes Loch to have y-position -126.28202062547207 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(1).x, 137.4, 5, "Expected Clone 1 of Stern to have x-position 137.4 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(1).y, 31.266666666666666, 5, "Expected Clone 1 of Stern to have y-position 31.266666666666666 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(2).x, 133.2, 5, "Expected Clone 2 of Stern to have x-position 133.2 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(2).y, 8.1, 5, "Expected Clone 2 of Stern to have y-position 8.1 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(3).x, 123.33333333333333, 5, "Expected Clone 3 of Stern to have x-position 123.33333333333333 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(3).y, 7.5, 5, "Expected Clone 3 of Stern to have y-position 7.5 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(4).x, -215.6, 5, "Expected Clone 4 of Stern to have x-position -215.6 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(4).y, 162, 5, "Expected Clone 4 of Stern to have y-position 162 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(5).x, -207.65, 5, "Expected Clone 5 of Stern to have x-position -207.65 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(5).y, 134.33333333333334, 5, "Expected Clone 5 of Stern to have y-position 134.33333333333334 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(6).x, -210.76666666666668, 5, "Expected Clone 6 of Stern to have x-position -210.76666666666668 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(6).y, 147.7, 5, "Expected Clone 6 of Stern to have y-position 147.7 +-5");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938857956',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938857956',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938857956',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938857956',
      type: 'standard',
  }
]
