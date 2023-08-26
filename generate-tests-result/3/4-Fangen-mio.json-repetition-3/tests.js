const test0 = async function (t) {
  t.keyPress('left arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.dragSprite('Rot', 17.22203823490273, -4.930052286501774, 1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Rot").getCloneCount(), 0, "Expected Sprite Rot to have 0 clones");
  t.assert.equal(t.getSprite("Scheibe").layerOrder, 2, "Expected Sprite Scheibe to be at layer 2");
  t.assert.equal(t.getSprite("Rot").layerOrder, 1, "Expected Sprite Rot to be at layer 1");
  t.end();
}
const test1 = async function (t) {
  t.keyPress('left arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.dragSprite('Rot', 17.22203823490273, -4.930052286501774, 1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Rot").getCloneCount(), 0, "Expected Sprite Rot to have 0 clones");
  t.assert.equal(t.getSprite("Scheibe").layerOrder, 2, "Expected Sprite Scheibe to be at layer 2");
  t.assert.equal(t.getSprite("Rot").layerOrder, 1, "Expected Sprite Rot to be at layer 1");
  t.keyPress('left arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Scheibe").direction, 72, 1, "Expected Sprite Scheibe to face in direction 72 +-1");
  t.dragSprite('Rot', 23.36842302769908, -21.813929309208486, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Rot").x, 23.36842302769908, 5, "Expected Sprite Rot to have x-position 23.36842302769908 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, -21.813929309208486, 5, "Expected Sprite Rot to have y-position -21.813929309208486 +-5");
  t.keyPress('left arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Scheibe").direction, 69, 1, "Expected Sprite Scheibe to face in direction 69 +-1");
  t.keyPress('left arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Scheibe").direction, 57, 1, "Expected Sprite Scheibe to face in direction 57 +-1");
  await t.runForSteps(10);
  await t.runForSteps(1);
  t.keyPress('right arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Scheibe").direction, 60, 1, "Expected Sprite Scheibe to face in direction 60 +-1");
  await t.runForSteps(92);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Rot").getClone(1).currentCostume, 0, "Expected Clone 1 of Rot to have costume 0");
  t.assert.equal(t.getSprite("Rot").getCloneCount(), 1, "Expected Sprite Rot to have 1 clones");
  t.assert.equal(t.getSprite("Rot").direction, 119.85543741542662, 1, "Expected Sprite Rot to face in direction 119.85543741542662 +-1");
  t.assert.equal(t.getSprite("Rot").getClone(1).direction, 119.85543741542662, 1, "Expected Clone 1 of Rot to face in direction 119.85543741542662 +-1");
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
  t.assert.withinRange(t.getSprite("Rot").x, -223, 5, "Expected Sprite Rot to have x-position -223 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, 128, 5, "Expected Sprite Rot to have y-position 128 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).x, -113.97777777777777, 5, "Expected Clone 1 of Rot to have x-position -113.97777777777777 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).y, 65.42222222222222, 5, "Expected Clone 1 of Rot to have y-position 65.42222222222222 +-5");
  t.assert.not(t.getSprite("Rot").getClone(1).sayText, "Expected Clone 1 of Rot not to say anything");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).size, 80, 1, "Expected Clone 1 of Rot to have size 80 +-1");
  t.assert.ok(t.getSprite("Rot").getClone(1).visible, "Expected Clone 1 of Rot to be visible");
  t.assert.equal(t.getSprite("Rot").getClone(1).volume, 100, "Expected Clone 1 of Rot to have volume 100");
  t.keyPress('right arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Scheibe").direction, 63, 1, "Expected Sprite Scheibe to face in direction 63 +-1");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).x, -109.02222222222223, 5, "Expected Clone 1 of Rot to have x-position -109.02222222222223 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).y, 62.57777777777778, 5, "Expected Clone 1 of Rot to have y-position 62.57777777777778 +-5");
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Scheibe").direction, 75, 1, "Expected Sprite Scheibe to face in direction 75 +-1");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).x, -96.63333333333334, 5, "Expected Clone 1 of Rot to have x-position -96.63333333333334 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).y, 55.46666666666667, 5, "Expected Clone 1 of Rot to have y-position 55.46666666666667 +-5");
  t.keyPress('left arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Scheibe").direction, 66, 1, "Expected Sprite Scheibe to face in direction 66 +-1");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).x, -86.7222222222222, 5, "Expected Clone 1 of Rot to have x-position -86.7222222222222 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).y, 49.77777777777777, 5, "Expected Clone 1 of Rot to have y-position 49.77777777777777 +-5");
  await t.runForSteps(15);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Rot").getClone(1).currentCostume, 0, "Expected Clone 1 of Rot to have costume 0");
  t.assert.equal(t.getSprite("Rot").direction, -49.85456667823672, 1, "Expected Sprite Rot to face in direction -49.85456667823672 +-1");
  t.assert.equal(t.getSprite("Rot").getClone(1).direction, -49.85456667823672, 1, "Expected Clone 1 of Rot to face in direction -49.85456667823672 +-1");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).getLayerOrder(), 1, "Expected Clone 1 of Rot to be at layer 1");
  t.assert.withinRange(t.getSprite("Rot").x, 198, 5, "Expected Sprite Rot to have x-position 198 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, -167, 5, "Expected Sprite Rot to have y-position -167 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).x, 178.2, 5, "Expected Clone 1 of Rot to have x-position 178.2 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).y, -150.3, 5, "Expected Clone 1 of Rot to have y-position -150.3 +-5");
  t.assert.not(t.getSprite("Rot").getClone(1).sayText, "Expected Clone 1 of Rot not to say anything");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).size, 80, 1, "Expected Clone 1 of Rot to have size 80 +-1");
  t.assert.ok(t.getSprite("Rot").getClone(1).visible, "Expected Clone 1 of Rot to be visible");
  t.assert.equal(t.getSprite("Rot").getClone(1).volume, 100, "Expected Clone 1 of Rot to have volume 100");
  t.end();
}
const test2 = async function (t) {
  t.keyPress('left arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.dragSprite('Rot', 17.22203823490273, -4.930052286501774, 1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Rot").getCloneCount(), 0, "Expected Sprite Rot to have 0 clones");
  t.assert.equal(t.getSprite("Scheibe").layerOrder, 2, "Expected Sprite Scheibe to be at layer 2");
  t.assert.equal(t.getSprite("Rot").layerOrder, 1, "Expected Sprite Rot to be at layer 1");
  t.keyPress('left arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Scheibe").direction, 72, 1, "Expected Sprite Scheibe to face in direction 72 +-1");
  t.keyPress('left arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Scheibe").direction, 69, 1, "Expected Sprite Scheibe to face in direction 69 +-1");
  t.keyPress('left arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Scheibe").direction, 57, 1, "Expected Sprite Scheibe to face in direction 57 +-1");
  await t.runForSteps(10);
  await t.runForSteps(1);
  t.keyPress('right arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Scheibe").direction, 60, 1, "Expected Sprite Scheibe to face in direction 60 +-1");
  await t.runForSteps(92);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Rot").getClone(1).currentCostume, 0, "Expected Clone 1 of Rot to have costume 0");
  t.assert.equal(t.getSprite("Rot").getCloneCount(), 1, "Expected Sprite Rot to have 1 clones");
  t.assert.equal(t.getSprite("Rot").direction, 119.85543741542662, 1, "Expected Sprite Rot to face in direction 119.85543741542662 +-1");
  t.assert.equal(t.getSprite("Rot").getClone(1).direction, 119.85543741542662, 1, "Expected Clone 1 of Rot to face in direction 119.85543741542662 +-1");
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
  t.assert.withinRange(t.getSprite("Rot").x, -223, 5, "Expected Sprite Rot to have x-position -223 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, 128, 5, "Expected Sprite Rot to have y-position 128 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).x, -116.45555555555555, 5, "Expected Clone 1 of Rot to have x-position -116.45555555555555 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).y, 66.84444444444443, 5, "Expected Clone 1 of Rot to have y-position 66.84444444444443 +-5");
  t.assert.not(t.getSprite("Rot").getClone(1).sayText, "Expected Clone 1 of Rot not to say anything");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).size, 80, 1, "Expected Clone 1 of Rot to have size 80 +-1");
  t.assert.ok(t.getSprite("Rot").getClone(1).visible, "Expected Clone 1 of Rot to be visible");
  t.assert.equal(t.getSprite("Rot").getClone(1).volume, 100, "Expected Clone 1 of Rot to have volume 100");
  t.keyPress('right arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Scheibe").direction, 63, 1, "Expected Sprite Scheibe to face in direction 63 +-1");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).x, -111.5, 5, "Expected Clone 1 of Rot to have x-position -111.5 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).y, 64, 5, "Expected Clone 1 of Rot to have y-position 64 +-5");
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Scheibe").direction, 75, 1, "Expected Sprite Scheibe to face in direction 75 +-1");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).x, -99.1111111111111, 5, "Expected Clone 1 of Rot to have x-position -99.1111111111111 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).y, 56.888888888888886, 5, "Expected Clone 1 of Rot to have y-position 56.888888888888886 +-5");
  t.keyPress('left arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Scheibe").direction, 66, 1, "Expected Sprite Scheibe to face in direction 66 +-1");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).x, -89.20000000000002, 5, "Expected Clone 1 of Rot to have x-position -89.20000000000002 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).y, 51.2, 5, "Expected Clone 1 of Rot to have y-position 51.2 +-5");
  t.keyPress('left arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Scheibe").direction, 63, 1, "Expected Sprite Scheibe to face in direction 63 +-1");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).x, -84.24444444444444, 5, "Expected Clone 1 of Rot to have x-position -84.24444444444444 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).y, 48.355555555555554, 5, "Expected Clone 1 of Rot to have y-position 48.355555555555554 +-5");
  t.keyPress('left arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Scheibe").direction, 60, 1, "Expected Sprite Scheibe to face in direction 60 +-1");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).x, -79.28888888888889, 5, "Expected Clone 1 of Rot to have x-position -79.28888888888889 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).y, 45.511111111111106, 5, "Expected Clone 1 of Rot to have y-position 45.511111111111106 +-5");
  t.keyPress('left arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Scheibe").direction, 57, 1, "Expected Sprite Scheibe to face in direction 57 +-1");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).x, -74.33333333333334, 5, "Expected Clone 1 of Rot to have x-position -74.33333333333334 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).y, 42.66666666666667, 5, "Expected Clone 1 of Rot to have y-position 42.66666666666667 +-5");
  t.keyPress('left arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Rot").getClone(2).currentCostume, 0, "Expected Clone 2 of Rot to have costume 0");
  t.assert.equal(t.getSprite("Rot").getCloneCount(), 2, "Expected Sprite Rot to have 2 clones");
  t.assert.equal(t.getSprite("Scheibe").direction, 51, 1, "Expected Sprite Scheibe to face in direction 51 +-1");
  t.assert.equal(t.getSprite("Rot").direction, -49.85456667823672, 1, "Expected Sprite Rot to face in direction -49.85456667823672 +-1");
  t.assert.equal(t.getSprite("Rot").getClone(2).direction, -49.85456667823672, 1, "Expected Clone 2 of Rot to face in direction -49.85456667823672 +-1");
  t.assert.equal(t.getSprite("Rot").getClone(2).effects.color, 0, "Expected effect color of Clone 2 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(2).effects.fisheye, 0, "Expected effect fisheye of Clone 2 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(2).effects.whirl, 0, "Expected effect whirl of Clone 2 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(2).effects.pixelate, 0, "Expected effect pixelate of Clone 2 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(2).effects.mosaic, 0, "Expected effect mosaic of Clone 2 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(2).effects.brightness, 0, "Expected effect brightness of Clone 2 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(2).effects.ghost, 0, "Expected effect ghost of Clone 2 of Rot to be 0");
  t.assert.equal(t.getSprite("Scheibe").layerOrder, 4, "Expected Sprite Scheibe to be at layer 4");
  t.assert.equal(t.getSprite("Rot").layerOrder, 3, "Expected Sprite Rot to be at layer 3");
  t.assert.equal(t.getSprite("Rot").getClone(2).getLayerOrder(), 2, "Expected Clone 2 of Rot to be at layer 2");
  t.assert.withinRange(t.getSprite("Rot").x, 198, 5, "Expected Sprite Rot to have x-position 198 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, -167, 5, "Expected Sprite Rot to have y-position -167 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).x, -66.9, 5, "Expected Clone 1 of Rot to have x-position -66.9 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).y, 38.400000000000006, 5, "Expected Clone 1 of Rot to have y-position 38.400000000000006 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(2).x, 195.8, 5, "Expected Clone 2 of Rot to have x-position 195.8 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(2).y, -165.14444444444445, 5, "Expected Clone 2 of Rot to have y-position -165.14444444444445 +-5");
  t.assert.not(t.getSprite("Rot").getClone(2).sayText, "Expected Clone 2 of Rot not to say anything");
  t.assert.withinRange(t.getSprite("Rot").getClone(2).size, 80, 1, "Expected Clone 2 of Rot to have size 80 +-1");
  t.assert.ok(t.getSprite("Rot").getClone(2).visible, "Expected Clone 2 of Rot to be visible");
  t.assert.equal(t.getSprite("Rot").getClone(2).volume, 100, "Expected Clone 2 of Rot to have volume 100");
  t.keyPress('left arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Scheibe").direction, 48, 1, "Expected Sprite Scheibe to face in direction 48 +-1");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).x, -61.94444444444446, 5, "Expected Clone 1 of Rot to have x-position -61.94444444444446 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).y, 35.55555555555556, 5, "Expected Clone 1 of Rot to have y-position 35.55555555555556 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(2).x, 191.4, 5, "Expected Clone 2 of Rot to have x-position 191.4 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(2).y, -161.43333333333334, 5, "Expected Clone 2 of Rot to have y-position -161.43333333333334 +-5");
  t.keyPress('left arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Scheibe").direction, 42, 1, "Expected Sprite Scheibe to face in direction 42 +-1");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).x, -54.51111111111112, 5, "Expected Clone 1 of Rot to have x-position -54.51111111111112 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).y, 31.28888888888889, 5, "Expected Clone 1 of Rot to have y-position 31.28888888888889 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(2).x, 184.8, 5, "Expected Clone 2 of Rot to have x-position 184.8 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(2).y, -155.86666666666667, 5, "Expected Clone 2 of Rot to have y-position -155.86666666666667 +-5");
  t.keyPress('left arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Rot").getCloneCount(), 1, "Expected Sprite Rot to have 1 clones");
  t.assert.equal(t.getSprite("Scheibe").direction, 33, 1, "Expected Sprite Scheibe to face in direction 33 +-1");
  t.assert.equal(t.getSprite("Scheibe").layerOrder, 3, "Expected Sprite Scheibe to be at layer 3");
  t.assert.equal(t.getSprite("Rot").layerOrder, 2, "Expected Sprite Rot to be at layer 2");
  t.assert.equal(t.getSprite("Rot").getClone(1).getLayerOrder(), 1, "Expected Clone 1 of Rot to be at layer 1");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).x, 176, 5, "Expected Clone 1 of Rot to have x-position 176 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).y, -148.44444444444446, 5, "Expected Clone 1 of Rot to have y-position -148.44444444444446 +-5");
  await t.runForSteps(84);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Rot").getClone(1).currentCostume, 0, "Expected Clone 1 of Rot to have costume 0");
  t.assert.equal(t.getSprite("Rot").direction, -49.67605266601316, 1, "Expected Sprite Rot to face in direction -49.67605266601316 +-1");
  t.assert.equal(t.getSprite("Rot").getClone(1).direction, -49.67605266601316, 1, "Expected Clone 1 of Rot to face in direction -49.67605266601316 +-1");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).getLayerOrder(), 1, "Expected Clone 1 of Rot to be at layer 1");
  t.assert.withinRange(t.getSprite("Rot").x, 205, 5, "Expected Sprite Rot to have x-position 205 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, -174, 5, "Expected Sprite Rot to have y-position -174 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).x, 164, 5, "Expected Clone 1 of Rot to have x-position 164 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).y, -139.2, 5, "Expected Clone 1 of Rot to have y-position -139.2 +-5");
  t.assert.not(t.getSprite("Rot").getClone(1).sayText, "Expected Clone 1 of Rot not to say anything");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).size, 80, 1, "Expected Clone 1 of Rot to have size 80 +-1");
  t.assert.ok(t.getSprite("Rot").getClone(1).visible, "Expected Clone 1 of Rot to be visible");
  t.assert.equal(t.getSprite("Rot").getClone(1).volume, 100, "Expected Clone 1 of Rot to have volume 100");
  await t.runForSteps(88);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Rot").getClone(1).currentCostume, 0, "Expected Clone 1 of Rot to have costume 0");
  t.assert.equal(t.getSprite("Rot").direction, -127.95423087513251, 1, "Expected Sprite Rot to face in direction -127.95423087513251 +-1");
  t.assert.equal(t.getSprite("Rot").getClone(1).direction, -127.95423087513251, 1, "Expected Clone 1 of Rot to face in direction -127.95423087513251 +-1");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Rot to be 0");
  t.assert.equal(t.getSprite("Rot").getClone(1).getLayerOrder(), 1, "Expected Clone 1 of Rot to be at layer 1");
  t.assert.withinRange(t.getSprite("Rot").x, 200, 5, "Expected Sprite Rot to have x-position 200 +-5");
  t.assert.withinRange(t.getSprite("Rot").y, 156, 5, "Expected Sprite Rot to have y-position 156 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).x, 155.55555555555554, 5, "Expected Clone 1 of Rot to have x-position 155.55555555555554 +-5");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).y, 121.33333333333334, 5, "Expected Clone 1 of Rot to have y-position 121.33333333333334 +-5");
  t.assert.not(t.getSprite("Rot").getClone(1).sayText, "Expected Clone 1 of Rot not to say anything");
  t.assert.withinRange(t.getSprite("Rot").getClone(1).size, 80, 1, "Expected Clone 1 of Rot to have size 80 +-1");
  t.assert.ok(t.getSprite("Rot").getClone(1).visible, "Expected Clone 1 of Rot to be visible");
  t.assert.equal(t.getSprite("Rot").getClone(1).volume, 100, "Expected Clone 1 of Rot to have volume 100");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936643996',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936643996',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936643996',
      type: 'standard',
  }
]
