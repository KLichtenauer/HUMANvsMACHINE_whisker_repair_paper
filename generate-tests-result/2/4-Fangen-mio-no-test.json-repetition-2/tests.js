const test0 = async function (t) {
  t.keyPress('left arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  await t.runForSteps(56);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Rot").getClone(1).currentCostume, 0, "Expected Clone 1 of Rot to have costume 0");
  t.assert.equal(t.getSprite("Rot").getCloneCount(), 1, "Expected Sprite Rot to have 1 clones");
  t.assert.equal(t.getSprite("Rot").direction, 52.46918540273977, 1, "Expected Sprite Rot to face in direction 52.46918540273977 +-1");
  t.assert.equal(t.getSprite("Rot").getClone(1).direction, 52.46918540273977, 1, "Expected Clone 1 of Rot to face in direction 52.46918540273977 +-1");
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
  t.assert.withinRange(t.getSprite("Rot").x, -220, 5, "Expected Sprite Rot to have x-position -220 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, -169, 5, "Expected Sprite Rot to have y-position -169 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).x, -102.66666666666667, 5, "Expected Clone 1 of Rot to have x-position -102.66666666666667 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).y, -78.86666666666667, 5, "Expected Clone 1 of Rot to have y-position -78.86666666666667 +-5");
  t.assert.not(t.getSprite("Rot").getClone(1).sayText, "Expected Clone 1 of Rot not to say anything");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).size, 80, 1, "Expected Clone 1 of Rot to have size 80 +-1");
  t.assert.ok(t.getSprite("Rot").getClone(1).visible, "Expected Clone 1 of Rot to be visible");
  t.assert.equal(t.getSprite("Rot").getClone(1).volume, 100, "Expected Clone 1 of Rot to have volume 100");
  t.keyPress('left arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Scheibe").direction, 75, 1, "Expected Sprite Scheibe to face in direction 75 +-1");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).x, -95.33333333333334, 5, "Expected Clone 1 of Rot to have x-position -95.33333333333334 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).y, -73.23333333333333, 5, "Expected Clone 1 of Rot to have y-position -73.23333333333333 +-5");
  await t.runForSteps(39);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Rot").getClone(1).currentCostume, 0, "Expected Clone 1 of Rot to have costume 0");
  t.assert.equal(t.getSprite("Rot").direction, 62.429862817667825, 1, "Expected Sprite Rot to face in direction 62.429862817667825 +-1");
  t.assert.equal(t.getSprite("Rot").getClone(1).direction, 62.429862817667825, 1, "Expected Clone 1 of Rot to face in direction 62.429862817667825 +-1");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).getLayerOrder(), 1, "Expected Clone 1 of Rot to be at layer 1");
  t.assert.withinRange(t.getSprite("Rot").x, -226, 5, "Expected Sprite Rot to have x-position -226 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, -118, 5, "Expected Sprite Rot to have y-position -118 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).x, -175.77777777777777, 5, "Expected Clone 1 of Rot to have x-position -175.77777777777777 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).y, -91.77777777777777, 5, "Expected Clone 1 of Rot to have y-position -91.77777777777777 +-5");
  t.assert.not(t.getSprite("Rot").getClone(1).sayText, "Expected Clone 1 of Rot not to say anything");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).size, 80, 1, "Expected Clone 1 of Rot to have size 80 +-1");
  t.assert.ok(t.getSprite("Rot").getClone(1).visible, "Expected Clone 1 of Rot to be visible");
  t.assert.equal(t.getSprite("Rot").getClone(1).volume, 100, "Expected Clone 1 of Rot to have volume 100");
  t.dragSprite('Rot', 3.93623714011911, 43.3235101304615, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Rot").x, 3.93623714011911, 5, "Expected Sprite Rot to have x-position 3.93623714011911 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, 43.3235101304615, 5, "Expected Sprite Rot to have y-position 43.3235101304615 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).x, -173.26666666666665, 5, "Expected Clone 1 of Rot to have x-position -173.26666666666665 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).y, -90.46666666666667, 5, "Expected Clone 1 of Rot to have y-position -90.46666666666667 +-5");
  t.dragSprite('Rot', -13.725352569567356, 32.51693337482183, 2);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Rot").getCloneCount(), 0, "Expected Sprite Rot to have 0 clones");
  t.assert.equal(t.getSprite("Scheibe").layerOrder, 2, "Expected Sprite Scheibe to be at layer 2");
  t.assert.equal(t.getSprite("Rot").layerOrder, 1, "Expected Sprite Rot to be at layer 1");
  t.keyPress('right arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Scheibe").direction, 81, 1, "Expected Sprite Scheibe to face in direction 81 +-1");
  await t.runForSteps(41);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Rot").x, 205, 5, "Expected Sprite Rot to have x-position 205 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, 84, 5, "Expected Sprite Rot to have y-position 84 +-5");
  await t.runForSteps(72);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Rot").x, -161, 5, "Expected Sprite Rot to have x-position -161 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, 165, 5, "Expected Sprite Rot to have y-position 165 +-5");
  await t.runForSteps(67);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Rot").getClone(1).currentCostume, 0, "Expected Clone 1 of Rot to have costume 0");
  t.assert.equal(t.getSprite("Rot").getCloneCount(), 1, "Expected Sprite Rot to have 1 clones");
  t.assert.equal(t.getSprite("Rot").direction, 132.90278181804825, 1, "Expected Sprite Rot to face in direction 132.90278181804825 +-1");
  t.assert.equal(t.getSprite("Rot").getClone(1).direction, 132.90278181804825, 1, "Expected Clone 1 of Rot to face in direction 132.90278181804825 +-1");
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
  t.assert.withinRange(t.getSprite("Rot").x, 103, 5, "Expected Sprite Rot to have x-position 103 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, -14, 5, "Expected Sprite Rot to have y-position -14 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).x, -49.06666666666666, 5, "Expected Clone 1 of Rot to have x-position -49.06666666666666 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).y, 45.60000000000001, 5, "Expected Clone 1 of Rot to have y-position 45.60000000000001 +-5");
  t.assert.not(t.getSprite("Rot").getClone(1).sayText, "Expected Clone 1 of Rot not to say anything");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).size, 80, 1, "Expected Clone 1 of Rot to have size 80 +-1");
  t.assert.ok(t.getSprite("Rot").getClone(1).visible, "Expected Clone 1 of Rot to be visible");
  t.assert.equal(t.getSprite("Rot").getClone(1).volume, 100, "Expected Clone 1 of Rot to have volume 100");
  t.keyPress('left arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Scheibe").direction, 78, 1, "Expected Sprite Scheibe to face in direction 78 +-1");
  t.assert.withinRange(t.getSprite("Rot").x, -70, 5, "Expected Sprite Rot to have x-position -70 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, -86, 5, "Expected Sprite Rot to have y-position -86 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).x, -44.97777777777779, 5, "Expected Clone 1 of Rot to have x-position -44.97777777777779 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).y, 41.80000000000001, 5, "Expected Clone 1 of Rot to have y-position 41.80000000000001 +-5");
  t.dragSprite('Rot', 10.633716812853496, 14.045287311694185, 1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Rot").getCloneCount(), 0, "Expected Sprite Rot to have 0 clones");
  t.assert.equal(t.getSprite("Scheibe").layerOrder, 2, "Expected Sprite Scheibe to be at layer 2");
  t.assert.equal(t.getSprite("Rot").layerOrder, 1, "Expected Sprite Rot to be at layer 1");
  t.assert.withinRange(t.getSprite("Rot").x, 88, 5, "Expected Sprite Rot to have x-position 88 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, -39, 5, "Expected Sprite Rot to have y-position -39 +-5");
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Scheibe").direction, 90, 1, "Expected Sprite Scheibe to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Rot").x, 201, 5, "Expected Sprite Rot to have x-position 201 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, -128, 5, "Expected Sprite Rot to have y-position -128 +-5");
  t.keyPress('left arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Scheibe").direction, 84, 1, "Expected Sprite Scheibe to face in direction 84 +-1");
  t.assert.withinRange(t.getSprite("Rot").x, -159, 5, "Expected Sprite Rot to have x-position -159 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, -94, 5, "Expected Sprite Rot to have y-position -94 +-5");
  t.keyPress('left arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Scheibe").direction, 78, 1, "Expected Sprite Scheibe to face in direction 78 +-1");
  t.assert.withinRange(t.getSprite("Rot").x, 143, 5, "Expected Sprite Rot to have x-position 143 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, -93, 5, "Expected Sprite Rot to have y-position -93 +-5");
  t.keyPress('left arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Scheibe").direction, 69, 1, "Expected Sprite Scheibe to face in direction 69 +-1");
  t.assert.withinRange(t.getSprite("Rot").x, -141, 5, "Expected Sprite Rot to have x-position -141 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, -68, 5, "Expected Sprite Rot to have y-position -68 +-5");
  await t.runForSteps(14);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Rot").x, -45, 5, "Expected Sprite Rot to have x-position -45 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, 163, 5, "Expected Sprite Rot to have y-position 163 +-5");
  await t.runForSteps(21);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Rot").getClone(1).currentCostume, 0, "Expected Clone 1 of Rot to have costume 0");
  t.assert.equal(t.getSprite("Rot").getCloneCount(), 1, "Expected Sprite Rot to have 1 clones");
  t.assert.equal(t.getSprite("Rot").direction, 61.821409890040826, 1, "Expected Sprite Rot to face in direction 61.821409890040826 +-1");
  t.assert.equal(t.getSprite("Rot").getClone(1).direction, 61.821409890040826, 1, "Expected Clone 1 of Rot to face in direction 61.821409890040826 +-1");
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
  t.assert.withinRange(t.getSprite("Rot").x, -224, 5, "Expected Sprite Rot to have x-position -224 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, -120, 5, "Expected Sprite Rot to have y-position -120 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).x, -189.15555555555557, 5, "Expected Clone 1 of Rot to have x-position -189.15555555555557 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).y, -101.33333333333333, 5, "Expected Clone 1 of Rot to have y-position -101.33333333333333 +-5");
  t.assert.not(t.getSprite("Rot").getClone(1).sayText, "Expected Clone 1 of Rot not to say anything");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).size, 80, 1, "Expected Clone 1 of Rot to have size 80 +-1");
  t.assert.ok(t.getSprite("Rot").getClone(1).visible, "Expected Clone 1 of Rot to be visible");
  t.assert.equal(t.getSprite("Rot").getClone(1).volume, 100, "Expected Clone 1 of Rot to have volume 100");
  t.keyPress('left arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Scheibe").direction, 66, 1, "Expected Sprite Scheibe to face in direction 66 +-1");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).x, -184.17777777777778, 5, "Expected Clone 1 of Rot to have x-position -184.17777777777778 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).y, -98.66666666666666, 5, "Expected Clone 1 of Rot to have y-position -98.66666666666666 +-5");
  await t.runForSteps(96);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Rot").getClone(1).currentCostume, 0, "Expected Clone 1 of Rot to have costume 0");
  t.assert.equal(t.getSprite("Rot").direction, 130.9464457681686, 1, "Expected Sprite Rot to face in direction 130.9464457681686 +-1");
  t.assert.equal(t.getSprite("Rot").getClone(1).direction, 130.9464457681686, 1, "Expected Clone 1 of Rot to face in direction 130.9464457681686 +-1");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).getLayerOrder(), 1, "Expected Clone 1 of Rot to be at layer 1");
  t.assert.withinRange(t.getSprite("Rot").x, -204, 5, "Expected Sprite Rot to have x-position -204 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, 177, 5, "Expected Sprite Rot to have y-position 177 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).x, -115.6, 5, "Expected Clone 1 of Rot to have x-position -115.6 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).y, 100.3, 5, "Expected Clone 1 of Rot to have y-position 100.3 +-5");
  t.assert.not(t.getSprite("Rot").getClone(1).sayText, "Expected Clone 1 of Rot not to say anything");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).size, 80, 1, "Expected Clone 1 of Rot to have size 80 +-1");
  t.assert.ok(t.getSprite("Rot").getClone(1).visible, "Expected Clone 1 of Rot to be visible");
  t.assert.equal(t.getSprite("Rot").getClone(1).volume, 100, "Expected Clone 1 of Rot to have volume 100");
  await t.runForSteps(48);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Rot").getCloneCount(), 0, "Expected Sprite Rot to have 0 clones");
  t.assert.equal(t.getSprite("Rot").direction, 122.22875743509856, 1, "Expected Sprite Rot to face in direction 122.22875743509856 +-1");
  t.assert.equal(t.getSprite("Scheibe").layerOrder, 2, "Expected Sprite Scheibe to be at layer 2");
  t.assert.equal(t.getSprite("Rot").layerOrder, 1, "Expected Sprite Rot to be at layer 1");
  t.assert.withinRange(t.getSprite("Rot").x, -230, 5, "Expected Sprite Rot to have x-position -230 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, 145, 5, "Expected Sprite Rot to have y-position 145 +-5");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687939228856',
      type: 'standard',
  }
]
