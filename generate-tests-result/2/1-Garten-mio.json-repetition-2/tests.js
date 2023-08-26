const test0 = async function (t) {
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.keyPress('up arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.keyPress('down arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.keyPress('down arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.keyPress('down arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Blume").direction, 90, 1, "Expected Sprite Blume to face in direction 90 +-1");
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  await t.runForSteps(21);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Blume").direction, 95, 1, "Expected Sprite Blume to face in direction 95 +-1");
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Blume").direction, 90, 1, "Expected Sprite Blume to face in direction 90 +-1");
  t.keyPress('left arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.keyPress('down arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.keyPress('up arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Kaktus").getClone(1).currentCostume, 0, "Expected Clone 1 of Kaktus to have costume 0");
  t.assert.equal(t.getSprite("Kaktus").getCloneCount(), 1, "Expected Sprite Kaktus to have 1 clones");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).direction, 90, 1, "Expected Clone 1 of Kaktus to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Gärtnerin").layerOrder, 3, "Expected Sprite Gärtnerin to be at layer 3");
  t.assert.equal(t.getSprite("Blume").layerOrder, 4, "Expected Sprite Blume to be at layer 4");
  t.assert.equal(t.getSprite("Kaktus").layerOrder, 2, "Expected Sprite Kaktus to be at layer 2");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).getLayerOrder(), 1, "Expected Clone 1 of Kaktus to be at layer 1");
  t.assert.withinRange(t.getSprite("Gärtnerin").x, -170, 5, "Expected Sprite Gärtnerin to have x-position -170 +-5");
  t.assert.withinRange(t.getSprite("Gärtnerin").y, 65, 5, "Expected Sprite Gärtnerin to have y-position 65 +-5");
  t.assert.withinRange(t.getSprite("Blume").x, -50, 5, "Expected Sprite Blume to have x-position -50 +-5");
  t.assert.withinRange(t.getSprite("Blume").y, 71, 5, "Expected Sprite Blume to have y-position 71 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).x, 233, 5, "Expected Clone 1 of Kaktus to have x-position 233 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).y, -133, 5, "Expected Clone 1 of Kaktus to have y-position -133 +-5");
  t.assert.not(t.getSprite("Gärtnerin").sayText, "Expected Sprite Gärtnerin not to say anything");
  t.assert.not(t.getSprite("Kaktus").getClone(1).sayText, "Expected Clone 1 of Kaktus not to say anything");
  t.assert.withinRange(t.getSprite("Gärtnerin").size, 20, 1, "Expected Sprite Gärtnerin to have size 20 +-1");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).size, 20, 1, "Expected Clone 1 of Kaktus to have size 20 +-1");
  t.assert.ok(t.getSprite("Kaktus").getClone(1).visible, "Expected Clone 1 of Kaktus to be visible");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).volume, 100, "Expected Clone 1 of Kaktus to have volume 100");
  t.end();
}
const test1 = async function (t) {
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.keyPress('up arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.keyPress('down arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Blume").direction, 90, 1, "Expected Sprite Blume to face in direction 90 +-1");
  await t.runForSteps(21);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Blume").direction, 95, 1, "Expected Sprite Blume to face in direction 95 +-1");
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.keyPress('left arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Blume").direction, 90, 1, "Expected Sprite Blume to face in direction 90 +-1");
  await t.runForSteps(50);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Kaktus").getClone(1).currentCostume, 0, "Expected Clone 1 of Kaktus to have costume 0");
  t.assert.equal(t.getSprite("Kaktus").getCloneCount(), 1, "Expected Sprite Kaktus to have 1 clones");
  t.assert.equal(t.getSprite("Blume").direction, 95, 1, "Expected Sprite Blume to face in direction 95 +-1");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).direction, 90, 1, "Expected Clone 1 of Kaktus to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Gärtnerin").layerOrder, 3, "Expected Sprite Gärtnerin to be at layer 3");
  t.assert.equal(t.getSprite("Blume").layerOrder, 4, "Expected Sprite Blume to be at layer 4");
  t.assert.equal(t.getSprite("Kaktus").layerOrder, 2, "Expected Sprite Kaktus to be at layer 2");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).getLayerOrder(), 1, "Expected Clone 1 of Kaktus to be at layer 1");
  t.assert.withinRange(t.getSprite("Blume").x, -50, 5, "Expected Sprite Blume to have x-position -50 +-5");
  t.assert.withinRange(t.getSprite("Blume").y, 71, 5, "Expected Sprite Blume to have y-position 71 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).x, 233, 5, "Expected Clone 1 of Kaktus to have x-position 233 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).y, -133, 5, "Expected Clone 1 of Kaktus to have y-position -133 +-5");
  t.assert.not(t.getSprite("Gärtnerin").sayText, "Expected Sprite Gärtnerin not to say anything");
  t.assert.not(t.getSprite("Kaktus").getClone(1).sayText, "Expected Clone 1 of Kaktus not to say anything");
  t.assert.withinRange(t.getSprite("Gärtnerin").size, 20, 1, "Expected Sprite Gärtnerin to have size 20 +-1");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).size, 20, 1, "Expected Clone 1 of Kaktus to have size 20 +-1");
  t.assert.ok(t.getSprite("Kaktus").getClone(1).visible, "Expected Clone 1 of Kaktus to be visible");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).volume, 100, "Expected Clone 1 of Kaktus to have volume 100");
  t.dragSprite('Gärtnerin', 180.69775218957423, -161.2159211929182, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Gärtnerin").x, 180.69775218957423, 5, "Expected Sprite Gärtnerin to have x-position 180.69775218957423 +-5");
  t.assert.withinRange(t.getSprite("Gärtnerin").y, -161.2159211929182, 5, "Expected Sprite Gärtnerin to have y-position -161.2159211929182 +-5");
  await t.runForSteps(68);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Kaktus").getClone(2).currentCostume, 0, "Expected Clone 2 of Kaktus to have costume 0");
  t.assert.equal(t.getSprite("Kaktus").getCloneCount(), 2, "Expected Sprite Kaktus to have 2 clones");
  t.assert.equal(t.getSprite("Blume").direction, 90, 1, "Expected Sprite Blume to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Kaktus").getClone(2).direction, 90, 1, "Expected Clone 2 of Kaktus to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Kaktus").getClone(2).effects.color, 0, "Expected effect color of Clone 2 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(2).effects.fisheye, 0, "Expected effect fisheye of Clone 2 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(2).effects.whirl, 0, "Expected effect whirl of Clone 2 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(2).effects.pixelate, 0, "Expected effect pixelate of Clone 2 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(2).effects.mosaic, 0, "Expected effect mosaic of Clone 2 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(2).effects.brightness, 0, "Expected effect brightness of Clone 2 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(2).effects.ghost, 0, "Expected effect ghost of Clone 2 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Gärtnerin").layerOrder, 4, "Expected Sprite Gärtnerin to be at layer 4");
  t.assert.equal(t.getSprite("Blume").layerOrder, 5, "Expected Sprite Blume to be at layer 5");
  t.assert.equal(t.getSprite("Kaktus").layerOrder, 3, "Expected Sprite Kaktus to be at layer 3");
  t.assert.equal(t.getSprite("Kaktus").getClone(2).getLayerOrder(), 2, "Expected Clone 2 of Kaktus to be at layer 2");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(2).x, -49, 5, "Expected Clone 2 of Kaktus to have x-position -49 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(2).y, 144, 5, "Expected Clone 2 of Kaktus to have y-position 144 +-5");
  t.assert.not(t.getSprite("Kaktus").getClone(2).sayText, "Expected Clone 2 of Kaktus not to say anything");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(2).size, 20, 1, "Expected Clone 2 of Kaktus to have size 20 +-1");
  t.assert.ok(t.getSprite("Kaktus").getClone(2).visible, "Expected Clone 2 of Kaktus to be visible");
  t.assert.equal(t.getSprite("Kaktus").getClone(2).volume, 100, "Expected Clone 2 of Kaktus to have volume 100");
  await t.runForSteps(72);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Kaktus").getClone(3).currentCostume, 0, "Expected Clone 3 of Kaktus to have costume 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(4).currentCostume, 0, "Expected Clone 4 of Kaktus to have costume 0");
  t.assert.equal(t.getSprite("Kaktus").getCloneCount(), 4, "Expected Sprite Kaktus to have 4 clones");
  t.assert.equal(t.getSprite("Kaktus").getClone(3).direction, 90, 1, "Expected Clone 3 of Kaktus to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Kaktus").getClone(4).direction, 90, 1, "Expected Clone 4 of Kaktus to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Kaktus").getClone(3).effects.color, 0, "Expected effect color of Clone 3 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(3).effects.fisheye, 0, "Expected effect fisheye of Clone 3 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(3).effects.whirl, 0, "Expected effect whirl of Clone 3 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(3).effects.pixelate, 0, "Expected effect pixelate of Clone 3 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(3).effects.mosaic, 0, "Expected effect mosaic of Clone 3 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(3).effects.brightness, 0, "Expected effect brightness of Clone 3 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(3).effects.ghost, 0, "Expected effect ghost of Clone 3 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(4).effects.color, 0, "Expected effect color of Clone 4 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(4).effects.fisheye, 0, "Expected effect fisheye of Clone 4 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(4).effects.whirl, 0, "Expected effect whirl of Clone 4 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(4).effects.pixelate, 0, "Expected effect pixelate of Clone 4 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(4).effects.mosaic, 0, "Expected effect mosaic of Clone 4 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(4).effects.brightness, 0, "Expected effect brightness of Clone 4 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(4).effects.ghost, 0, "Expected effect ghost of Clone 4 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Gärtnerin").layerOrder, 6, "Expected Sprite Gärtnerin to be at layer 6");
  t.assert.equal(t.getSprite("Blume").layerOrder, 7, "Expected Sprite Blume to be at layer 7");
  t.assert.equal(t.getSprite("Kaktus").layerOrder, 5, "Expected Sprite Kaktus to be at layer 5");
  t.assert.equal(t.getSprite("Kaktus").getClone(3).getLayerOrder(), 3, "Expected Clone 3 of Kaktus to be at layer 3");
  t.assert.equal(t.getSprite("Kaktus").getClone(4).getLayerOrder(), 4, "Expected Clone 4 of Kaktus to be at layer 4");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(3).x, -184, 5, "Expected Clone 3 of Kaktus to have x-position -184 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(3).y, -43, 5, "Expected Clone 3 of Kaktus to have y-position -43 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(4).x, -79, 5, "Expected Clone 4 of Kaktus to have x-position -79 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(4).y, -120, 5, "Expected Clone 4 of Kaktus to have y-position -120 +-5");
  t.assert.not(t.getSprite("Kaktus").getClone(3).sayText, "Expected Clone 3 of Kaktus not to say anything");
  t.assert.not(t.getSprite("Kaktus").getClone(4).sayText, "Expected Clone 4 of Kaktus not to say anything");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(3).size, 20, 1, "Expected Clone 3 of Kaktus to have size 20 +-1");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(4).size, 20, 1, "Expected Clone 4 of Kaktus to have size 20 +-1");
  t.assert.ok(t.getSprite("Kaktus").getClone(3).visible, "Expected Clone 3 of Kaktus to be visible");
  t.assert.not(t.getSprite("Kaktus").getClone(4).visible, "Expected Clone 4 of Kaktus not to be visible");
  t.assert.equal(t.getSprite("Kaktus").getClone(3).volume, 100, "Expected Clone 3 of Kaktus to have volume 100");
  t.assert.equal(t.getSprite("Kaktus").getClone(4).volume, 100, "Expected Clone 4 of Kaktus to have volume 100");
  t.end();
}
const test2 = async function (t) {
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.keyPress('up arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.keyPress('down arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.keyPress('down arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.keyPress('down arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Blume").direction, 90, 1, "Expected Sprite Blume to face in direction 90 +-1");
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  await t.runForSteps(21);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Blume").direction, 95, 1, "Expected Sprite Blume to face in direction 95 +-1");
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Blume").direction, 90, 1, "Expected Sprite Blume to face in direction 90 +-1");
  t.keyPress('left arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.keyPress('down arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.keyPress('up arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Kaktus").getClone(1).currentCostume, 0, "Expected Clone 1 of Kaktus to have costume 0");
  t.assert.equal(t.getSprite("Kaktus").getCloneCount(), 1, "Expected Sprite Kaktus to have 1 clones");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).direction, 90, 1, "Expected Clone 1 of Kaktus to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Gärtnerin").layerOrder, 3, "Expected Sprite Gärtnerin to be at layer 3");
  t.assert.equal(t.getSprite("Blume").layerOrder, 4, "Expected Sprite Blume to be at layer 4");
  t.assert.equal(t.getSprite("Kaktus").layerOrder, 2, "Expected Sprite Kaktus to be at layer 2");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).getLayerOrder(), 1, "Expected Clone 1 of Kaktus to be at layer 1");
  t.assert.withinRange(t.getSprite("Gärtnerin").x, -170, 5, "Expected Sprite Gärtnerin to have x-position -170 +-5");
  t.assert.withinRange(t.getSprite("Gärtnerin").y, 65, 5, "Expected Sprite Gärtnerin to have y-position 65 +-5");
  t.assert.withinRange(t.getSprite("Blume").x, -50, 5, "Expected Sprite Blume to have x-position -50 +-5");
  t.assert.withinRange(t.getSprite("Blume").y, 71, 5, "Expected Sprite Blume to have y-position 71 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).x, 233, 5, "Expected Clone 1 of Kaktus to have x-position 233 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).y, -133, 5, "Expected Clone 1 of Kaktus to have y-position -133 +-5");
  t.assert.not(t.getSprite("Gärtnerin").sayText, "Expected Sprite Gärtnerin not to say anything");
  t.assert.not(t.getSprite("Kaktus").getClone(1).sayText, "Expected Clone 1 of Kaktus not to say anything");
  t.assert.withinRange(t.getSprite("Gärtnerin").size, 20, 1, "Expected Sprite Gärtnerin to have size 20 +-1");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).size, 20, 1, "Expected Clone 1 of Kaktus to have size 20 +-1");
  t.assert.ok(t.getSprite("Kaktus").getClone(1).visible, "Expected Clone 1 of Kaktus to be visible");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).volume, 100, "Expected Clone 1 of Kaktus to have volume 100");
  t.dragSprite('Gärtnerin', 233, -133, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.equal(t.getSprite("Blume").direction, 95, 1, "Expected Sprite Blume to face in direction 95 +-1");
  t.assert.equal(t.getSprite("Gärtnerin").effects.color, 25, "Expected effect color of Sprite Gärtnerin to be 25");
  t.assert.withinRange(t.getSprite("Gärtnerin").x, 233, 5, "Expected Sprite Gärtnerin to have x-position 233 +-5");
  t.assert.withinRange(t.getSprite("Gärtnerin").y, -133, 5, "Expected Sprite Gärtnerin to have y-position -133 +-5");
  t.assert.equal(t.getSprite("Gärtnerin").sayText, "Autsch!", "Expected Sprite Gärtnerin to say Autsch!");
  t.assert.equal(t.getSprite("Blume").sayText, "Ohje!", "Expected Sprite Blume to say Ohje!");
  t.end();
}
const test3 = async function (t) {
  await t.runForSteps(23);
  await t.runForSteps(1);
  await t.runForSteps(55);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Kaktus").getClone(1).currentCostume, 0, "Expected Clone 1 of Kaktus to have costume 0");
  t.assert.equal(t.getSprite("Kaktus").getCloneCount(), 1, "Expected Sprite Kaktus to have 1 clones");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).direction, 90, 1, "Expected Clone 1 of Kaktus to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Gärtnerin").layerOrder, 3, "Expected Sprite Gärtnerin to be at layer 3");
  t.assert.equal(t.getSprite("Blume").layerOrder, 4, "Expected Sprite Blume to be at layer 4");
  t.assert.equal(t.getSprite("Kaktus").layerOrder, 2, "Expected Sprite Kaktus to be at layer 2");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).getLayerOrder(), 1, "Expected Clone 1 of Kaktus to be at layer 1");
  t.assert.withinRange(t.getSprite("Blume").x, -50, 5, "Expected Sprite Blume to have x-position -50 +-5");
  t.assert.withinRange(t.getSprite("Blume").y, 71, 5, "Expected Sprite Blume to have y-position 71 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).x, 233, 5, "Expected Clone 1 of Kaktus to have x-position 233 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).y, -133, 5, "Expected Clone 1 of Kaktus to have y-position -133 +-5");
  t.assert.not(t.getSprite("Gärtnerin").sayText, "Expected Sprite Gärtnerin not to say anything");
  t.assert.not(t.getSprite("Kaktus").getClone(1).sayText, "Expected Clone 1 of Kaktus not to say anything");
  t.assert.withinRange(t.getSprite("Gärtnerin").size, 20, 1, "Expected Sprite Gärtnerin to have size 20 +-1");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).size, 20, 1, "Expected Clone 1 of Kaktus to have size 20 +-1");
  t.assert.ok(t.getSprite("Kaktus").getClone(1).visible, "Expected Clone 1 of Kaktus to be visible");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).volume, 100, "Expected Clone 1 of Kaktus to have volume 100");
  t.keyPress('left arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Gärtnerin").x, -180, 5, "Expected Sprite Gärtnerin to have x-position -180 +-5");
  t.assert.withinRange(t.getSprite("Gärtnerin").y, 60, 5, "Expected Sprite Gärtnerin to have y-position 60 +-5");
  t.end();
}
const test4 = async function (t) {
  await t.runForSteps(23);
  await t.runForSteps(1);
  await t.runForSteps(55);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Kaktus").getClone(1).currentCostume, 0, "Expected Clone 1 of Kaktus to have costume 0");
  t.assert.equal(t.getSprite("Kaktus").getCloneCount(), 1, "Expected Sprite Kaktus to have 1 clones");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).direction, 90, 1, "Expected Clone 1 of Kaktus to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Gärtnerin").layerOrder, 3, "Expected Sprite Gärtnerin to be at layer 3");
  t.assert.equal(t.getSprite("Blume").layerOrder, 4, "Expected Sprite Blume to be at layer 4");
  t.assert.equal(t.getSprite("Kaktus").layerOrder, 2, "Expected Sprite Kaktus to be at layer 2");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).getLayerOrder(), 1, "Expected Clone 1 of Kaktus to be at layer 1");
  t.assert.withinRange(t.getSprite("Blume").x, -50, 5, "Expected Sprite Blume to have x-position -50 +-5");
  t.assert.withinRange(t.getSprite("Blume").y, 71, 5, "Expected Sprite Blume to have y-position 71 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).x, 233, 5, "Expected Clone 1 of Kaktus to have x-position 233 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).y, -133, 5, "Expected Clone 1 of Kaktus to have y-position -133 +-5");
  t.assert.not(t.getSprite("Gärtnerin").sayText, "Expected Sprite Gärtnerin not to say anything");
  t.assert.not(t.getSprite("Kaktus").getClone(1).sayText, "Expected Clone 1 of Kaktus not to say anything");
  t.assert.withinRange(t.getSprite("Gärtnerin").size, 20, 1, "Expected Sprite Gärtnerin to have size 20 +-1");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).size, 20, 1, "Expected Clone 1 of Kaktus to have size 20 +-1");
  t.assert.ok(t.getSprite("Kaktus").getClone(1).visible, "Expected Clone 1 of Kaktus to be visible");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).volume, 100, "Expected Clone 1 of Kaktus to have volume 100");
  t.keyPress('right arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Gärtnerin").x, -165, 5, "Expected Sprite Gärtnerin to have x-position -165 +-5");
  t.assert.withinRange(t.getSprite("Gärtnerin").y, 60, 5, "Expected Sprite Gärtnerin to have y-position 60 +-5");
  t.end();
}
const test5 = async function (t) {
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.keyPress('up arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.keyPress('down arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.keyPress('down arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Blume").direction, 90, 1, "Expected Sprite Blume to face in direction 90 +-1");
  await t.runForSteps(21);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Blume").direction, 95, 1, "Expected Sprite Blume to face in direction 95 +-1");
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Blume").direction, 90, 1, "Expected Sprite Blume to face in direction 90 +-1");
  t.keyPress('left arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.keyPress('down arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.keyPress('up arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.keyPress('down arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Kaktus").getClone(1).currentCostume, 0, "Expected Clone 1 of Kaktus to have costume 0");
  t.assert.equal(t.getSprite("Kaktus").getCloneCount(), 1, "Expected Sprite Kaktus to have 1 clones");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).direction, 90, 1, "Expected Clone 1 of Kaktus to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Gärtnerin").layerOrder, 3, "Expected Sprite Gärtnerin to be at layer 3");
  t.assert.equal(t.getSprite("Blume").layerOrder, 4, "Expected Sprite Blume to be at layer 4");
  t.assert.equal(t.getSprite("Kaktus").layerOrder, 2, "Expected Sprite Kaktus to be at layer 2");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).getLayerOrder(), 1, "Expected Clone 1 of Kaktus to be at layer 1");
  t.assert.withinRange(t.getSprite("Gärtnerin").x, -170, 5, "Expected Sprite Gärtnerin to have x-position -170 +-5");
  t.assert.withinRange(t.getSprite("Gärtnerin").y, 55, 5, "Expected Sprite Gärtnerin to have y-position 55 +-5");
  t.assert.withinRange(t.getSprite("Blume").x, -50, 5, "Expected Sprite Blume to have x-position -50 +-5");
  t.assert.withinRange(t.getSprite("Blume").y, 71, 5, "Expected Sprite Blume to have y-position 71 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).x, 233, 5, "Expected Clone 1 of Kaktus to have x-position 233 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).y, -133, 5, "Expected Clone 1 of Kaktus to have y-position -133 +-5");
  t.assert.not(t.getSprite("Gärtnerin").sayText, "Expected Sprite Gärtnerin not to say anything");
  t.assert.not(t.getSprite("Kaktus").getClone(1).sayText, "Expected Clone 1 of Kaktus not to say anything");
  t.assert.withinRange(t.getSprite("Gärtnerin").size, 20, 1, "Expected Sprite Gärtnerin to have size 20 +-1");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).size, 20, 1, "Expected Clone 1 of Kaktus to have size 20 +-1");
  t.assert.ok(t.getSprite("Kaktus").getClone(1).visible, "Expected Clone 1 of Kaktus to be visible");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).volume, 100, "Expected Clone 1 of Kaktus to have volume 100");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938821107',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938821107',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938821107',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938821107',
      type: 'standard',
  },
  {
      test: test4,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938821107',
      type: 'standard',
  },
  {
      test: test5,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938821107',
      type: 'standard',
  }
]
