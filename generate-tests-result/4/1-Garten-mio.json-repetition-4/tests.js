const test0 = async function (t) {
  t.keyPress('left arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
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
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).x, -197, 5, "Expected Clone 1 of Kaktus to have x-position -197 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).y, -134, 5, "Expected Clone 1 of Kaktus to have y-position -134 +-5");
  t.assert.not(t.getSprite("Gärtnerin").sayText, "Expected Sprite Gärtnerin not to say anything");
  t.assert.not(t.getSprite("Kaktus").getClone(1).sayText, "Expected Clone 1 of Kaktus not to say anything");
  t.assert.withinRange(t.getSprite("Gärtnerin").size, 20, 1, "Expected Sprite Gärtnerin to have size 20 +-1");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).size, 20, 1, "Expected Clone 1 of Kaktus to have size 20 +-1");
  t.assert.ok(t.getSprite("Kaktus").getClone(1).visible, "Expected Clone 1 of Kaktus to be visible");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).volume, 100, "Expected Clone 1 of Kaktus to have volume 100");
  t.end();
}
const test1 = async function (t) {
  t.keyPress('left arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
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
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).x, -197, 5, "Expected Clone 1 of Kaktus to have x-position -197 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).y, -134, 5, "Expected Clone 1 of Kaktus to have y-position -134 +-5");
  t.assert.not(t.getSprite("Gärtnerin").sayText, "Expected Sprite Gärtnerin not to say anything");
  t.assert.not(t.getSprite("Kaktus").getClone(1).sayText, "Expected Clone 1 of Kaktus not to say anything");
  t.assert.withinRange(t.getSprite("Gärtnerin").size, 20, 1, "Expected Sprite Gärtnerin to have size 20 +-1");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).size, 20, 1, "Expected Clone 1 of Kaktus to have size 20 +-1");
  t.assert.ok(t.getSprite("Kaktus").getClone(1).visible, "Expected Clone 1 of Kaktus to be visible");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).volume, 100, "Expected Clone 1 of Kaktus to have volume 100");
  t.dragSprite('Gärtnerin', -197, -134, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.equal(t.getSprite("Gärtnerin").effects.color, 25, "Expected effect color of Sprite Gärtnerin to be 25");
  t.assert.withinRange(t.getSprite("Gärtnerin").x, -197, 5, "Expected Sprite Gärtnerin to have x-position -197 +-5");
  t.assert.withinRange(t.getSprite("Gärtnerin").y, -134, 5, "Expected Sprite Gärtnerin to have y-position -134 +-5");
  t.assert.equal(t.getSprite("Gärtnerin").sayText, "Autsch!", "Expected Sprite Gärtnerin to say Autsch!");
  t.assert.equal(t.getSprite("Blume").sayText, "Ohje!", "Expected Sprite Blume to say Ohje!");
  t.end();
}
const test2 = async function (t) {
  t.keyPress('left arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  await t.runForSteps(55);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Blume").direction, 90, 1, "Expected Sprite Blume to face in direction 90 +-1");
  t.keyPress('left arrow', 1);
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
  t.assert.withinRange(t.getSprite("Gärtnerin").x, -175, 5, "Expected Sprite Gärtnerin to have x-position -175 +-5");
  t.assert.withinRange(t.getSprite("Gärtnerin").y, 60, 5, "Expected Sprite Gärtnerin to have y-position 60 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).x, -197, 5, "Expected Clone 1 of Kaktus to have x-position -197 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).y, -134, 5, "Expected Clone 1 of Kaktus to have y-position -134 +-5");
  t.assert.not(t.getSprite("Gärtnerin").sayText, "Expected Sprite Gärtnerin not to say anything");
  t.assert.not(t.getSprite("Kaktus").getClone(1).sayText, "Expected Clone 1 of Kaktus not to say anything");
  t.assert.withinRange(t.getSprite("Gärtnerin").size, 20, 1, "Expected Sprite Gärtnerin to have size 20 +-1");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).size, 20, 1, "Expected Clone 1 of Kaktus to have size 20 +-1");
  t.assert.ok(t.getSprite("Kaktus").getClone(1).visible, "Expected Clone 1 of Kaktus to be visible");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).volume, 100, "Expected Clone 1 of Kaktus to have volume 100");
  t.end();
}
const test3 = async function (t) {
  t.keyPress('left arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  await t.runForSteps(55);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Blume").direction, 90, 1, "Expected Sprite Blume to face in direction 90 +-1");
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
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
  t.assert.withinRange(t.getSprite("Gärtnerin").x, -150, 5, "Expected Sprite Gärtnerin to have x-position -150 +-5");
  t.assert.withinRange(t.getSprite("Gärtnerin").y, 60, 5, "Expected Sprite Gärtnerin to have y-position 60 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).x, -197, 5, "Expected Clone 1 of Kaktus to have x-position -197 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).y, -134, 5, "Expected Clone 1 of Kaktus to have y-position -134 +-5");
  t.assert.not(t.getSprite("Gärtnerin").sayText, "Expected Sprite Gärtnerin not to say anything");
  t.assert.not(t.getSprite("Kaktus").getClone(1).sayText, "Expected Clone 1 of Kaktus not to say anything");
  t.assert.withinRange(t.getSprite("Gärtnerin").size, 20, 1, "Expected Sprite Gärtnerin to have size 20 +-1");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).size, 20, 1, "Expected Clone 1 of Kaktus to have size 20 +-1");
  t.assert.ok(t.getSprite("Kaktus").getClone(1).visible, "Expected Clone 1 of Kaktus to be visible");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).volume, 100, "Expected Clone 1 of Kaktus to have volume 100");
  t.end();
}
const test4 = async function (t) {
  t.keyPress('left arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  await t.runForSteps(55);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Blume").direction, 90, 1, "Expected Sprite Blume to face in direction 90 +-1");
  t.keyPress('up arrow', 2);
  await t.runForSteps(2);
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
  t.assert.withinRange(t.getSprite("Gärtnerin").x, -170, 5, "Expected Sprite Gärtnerin to have x-position -170 +-5");
  t.assert.withinRange(t.getSprite("Gärtnerin").y, 70, 5, "Expected Sprite Gärtnerin to have y-position 70 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).x, -197, 5, "Expected Clone 1 of Kaktus to have x-position -197 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).y, -134, 5, "Expected Clone 1 of Kaktus to have y-position -134 +-5");
  t.assert.not(t.getSprite("Gärtnerin").sayText, "Expected Sprite Gärtnerin not to say anything");
  t.assert.not(t.getSprite("Kaktus").getClone(1).sayText, "Expected Clone 1 of Kaktus not to say anything");
  t.assert.withinRange(t.getSprite("Gärtnerin").size, 20, 1, "Expected Sprite Gärtnerin to have size 20 +-1");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).size, 20, 1, "Expected Clone 1 of Kaktus to have size 20 +-1");
  t.assert.ok(t.getSprite("Kaktus").getClone(1).visible, "Expected Clone 1 of Kaktus to be visible");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).volume, 100, "Expected Clone 1 of Kaktus to have volume 100");
  t.end();
}
const test5 = async function (t) {
  t.keyPress('left arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  await t.runForSteps(55);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Blume").direction, 90, 1, "Expected Sprite Blume to face in direction 90 +-1");
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
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).x, -197, 5, "Expected Clone 1 of Kaktus to have x-position -197 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).y, -134, 5, "Expected Clone 1 of Kaktus to have y-position -134 +-5");
  t.assert.not(t.getSprite("Gärtnerin").sayText, "Expected Sprite Gärtnerin not to say anything");
  t.assert.not(t.getSprite("Kaktus").getClone(1).sayText, "Expected Clone 1 of Kaktus not to say anything");
  t.assert.withinRange(t.getSprite("Gärtnerin").size, 20, 1, "Expected Sprite Gärtnerin to have size 20 +-1");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).size, 20, 1, "Expected Clone 1 of Kaktus to have size 20 +-1");
  t.assert.ok(t.getSprite("Kaktus").getClone(1).visible, "Expected Clone 1 of Kaktus to be visible");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).volume, 100, "Expected Clone 1 of Kaktus to have volume 100");
  t.end();
}
const test6 = async function (t) {
  t.keyPress('left arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.dragSprite('Blume', -170, 60, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Blume").x, -170, 5, "Expected Sprite Blume to have x-position -170 +-5");
  t.assert.withinRange(t.getSprite("Blume").y, 60, 5, "Expected Sprite Blume to have y-position 60 +-5");
  await t.runForSteps(55);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Kaktus").getClone(1).currentCostume, 0, "Expected Clone 1 of Kaktus to have costume 0");
  t.assert.equal(t.getSprite("Kaktus").getCloneCount(), 1, "Expected Sprite Kaktus to have 1 clones");
  t.assert.equal(t.getSprite("Blume").direction, 90, 1, "Expected Sprite Blume to face in direction 90 +-1");
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
  t.assert.withinRange(t.getSprite("Blume").x, 178, 5, "Expected Sprite Blume to have x-position 178 +-5");
  t.assert.withinRange(t.getSprite("Blume").y, -96, 5, "Expected Sprite Blume to have y-position -96 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).x, -197, 5, "Expected Clone 1 of Kaktus to have x-position -197 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).y, -134, 5, "Expected Clone 1 of Kaktus to have y-position -134 +-5");
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
      seed: '1687937279335',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937279335',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937279335',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937279335',
      type: 'standard',
  },
  {
      test: test4,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937279335',
      type: 'standard',
  },
  {
      test: test5,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937279335',
      type: 'standard',
  },
  {
      test: test6,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937279335',
      type: 'standard',
  }
]
