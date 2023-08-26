const test0 = async function (t) {
  await t.runForSteps(30);
  await t.runForSteps(1);
  await t.runForSteps(32);
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
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).x, -86, 5, "Expected Clone 1 of Kaktus to have x-position -86 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).y, -32, 5, "Expected Clone 1 of Kaktus to have y-position -32 +-5");
  t.assert.not(t.getSprite("Gärtnerin").sayText, "Expected Sprite Gärtnerin not to say anything");
  t.assert.not(t.getSprite("Kaktus").getClone(1).sayText, "Expected Clone 1 of Kaktus not to say anything");
  t.assert.withinRange(t.getSprite("Gärtnerin").size, 20, 1, "Expected Sprite Gärtnerin to have size 20 +-1");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).size, 20, 1, "Expected Clone 1 of Kaktus to have size 20 +-1");
  t.assert.ok(t.getSprite("Kaktus").getClone(1).visible, "Expected Clone 1 of Kaktus to be visible");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).volume, 100, "Expected Clone 1 of Kaktus to have volume 100");
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(30);
  await t.runForSteps(1);
  await t.runForSteps(32);
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
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).x, -86, 5, "Expected Clone 1 of Kaktus to have x-position -86 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).y, -32, 5, "Expected Clone 1 of Kaktus to have y-position -32 +-5");
  t.assert.not(t.getSprite("Gärtnerin").sayText, "Expected Sprite Gärtnerin not to say anything");
  t.assert.not(t.getSprite("Kaktus").getClone(1).sayText, "Expected Clone 1 of Kaktus not to say anything");
  t.assert.withinRange(t.getSprite("Gärtnerin").size, 20, 1, "Expected Sprite Gärtnerin to have size 20 +-1");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).size, 20, 1, "Expected Clone 1 of Kaktus to have size 20 +-1");
  t.assert.ok(t.getSprite("Kaktus").getClone(1).visible, "Expected Clone 1 of Kaktus to be visible");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).volume, 100, "Expected Clone 1 of Kaktus to have volume 100");
  await t.runForSteps(68);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Kaktus").getClone(2).currentCostume, 0, "Expected Clone 2 of Kaktus to have costume 0");
  t.assert.equal(t.getSprite("Kaktus").getCloneCount(), 2, "Expected Sprite Kaktus to have 2 clones");
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
  t.assert.withinRange(t.getSprite("Kaktus").getClone(2).x, 193, 5, "Expected Clone 2 of Kaktus to have x-position 193 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(2).y, -81, 5, "Expected Clone 2 of Kaktus to have y-position -81 +-5");
  t.assert.not(t.getSprite("Kaktus").getClone(2).sayText, "Expected Clone 2 of Kaktus not to say anything");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(2).size, 20, 1, "Expected Clone 2 of Kaktus to have size 20 +-1");
  t.assert.ok(t.getSprite("Kaktus").getClone(2).visible, "Expected Clone 2 of Kaktus to be visible");
  t.assert.equal(t.getSprite("Kaktus").getClone(2).volume, 100, "Expected Clone 2 of Kaktus to have volume 100");
  await t.runForSteps(79);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Kaktus").getClone(3).currentCostume, 0, "Expected Clone 3 of Kaktus to have costume 0");
  t.assert.equal(t.getSprite("Kaktus").getCloneCount(), 3, "Expected Sprite Kaktus to have 3 clones");
  t.assert.equal(t.getSprite("Blume").direction, 90, 1, "Expected Sprite Blume to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Kaktus").getClone(3).direction, 90, 1, "Expected Clone 3 of Kaktus to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Kaktus").getClone(3).effects.color, 0, "Expected effect color of Clone 3 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(3).effects.fisheye, 0, "Expected effect fisheye of Clone 3 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(3).effects.whirl, 0, "Expected effect whirl of Clone 3 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(3).effects.pixelate, 0, "Expected effect pixelate of Clone 3 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(3).effects.mosaic, 0, "Expected effect mosaic of Clone 3 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(3).effects.brightness, 0, "Expected effect brightness of Clone 3 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(3).effects.ghost, 0, "Expected effect ghost of Clone 3 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Gärtnerin").layerOrder, 5, "Expected Sprite Gärtnerin to be at layer 5");
  t.assert.equal(t.getSprite("Blume").layerOrder, 6, "Expected Sprite Blume to be at layer 6");
  t.assert.equal(t.getSprite("Kaktus").layerOrder, 4, "Expected Sprite Kaktus to be at layer 4");
  t.assert.equal(t.getSprite("Kaktus").getClone(3).getLayerOrder(), 3, "Expected Clone 3 of Kaktus to be at layer 3");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(3).x, 135, 5, "Expected Clone 3 of Kaktus to have x-position 135 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(3).y, -45, 5, "Expected Clone 3 of Kaktus to have y-position -45 +-5");
  t.assert.not(t.getSprite("Kaktus").getClone(3).sayText, "Expected Clone 3 of Kaktus not to say anything");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(3).size, 20, 1, "Expected Clone 3 of Kaktus to have size 20 +-1");
  t.assert.ok(t.getSprite("Kaktus").getClone(3).visible, "Expected Clone 3 of Kaktus to be visible");
  t.assert.equal(t.getSprite("Kaktus").getClone(3).volume, 100, "Expected Clone 3 of Kaktus to have volume 100");
  t.end();
}
const test2 = async function (t) {
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.keyPress('down arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.keyPress('right arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(39);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Blume").direction, 90, 1, "Expected Sprite Blume to face in direction 90 +-1");
  t.keyPress('down arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.keyPress('down arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.keyPress('up arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.keyPress('left arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.keyPress('right arrow', 1);
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
  t.assert.withinRange(t.getSprite("Gärtnerin").x, -165, 5, "Expected Sprite Gärtnerin to have x-position -165 +-5");
  t.assert.withinRange(t.getSprite("Gärtnerin").y, 60, 5, "Expected Sprite Gärtnerin to have y-position 60 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).x, -86, 5, "Expected Clone 1 of Kaktus to have x-position -86 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).y, -32, 5, "Expected Clone 1 of Kaktus to have y-position -32 +-5");
  t.assert.not(t.getSprite("Gärtnerin").sayText, "Expected Sprite Gärtnerin not to say anything");
  t.assert.not(t.getSprite("Kaktus").getClone(1).sayText, "Expected Clone 1 of Kaktus not to say anything");
  t.assert.withinRange(t.getSprite("Gärtnerin").size, 20, 1, "Expected Sprite Gärtnerin to have size 20 +-1");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).size, 20, 1, "Expected Clone 1 of Kaktus to have size 20 +-1");
  t.assert.ok(t.getSprite("Kaktus").getClone(1).visible, "Expected Clone 1 of Kaktus to be visible");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).volume, 100, "Expected Clone 1 of Kaktus to have volume 100");
  t.dragSprite('Gärtnerin', -86, -32, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.equal(t.getSprite("Blume").direction, 95, 1, "Expected Sprite Blume to face in direction 95 +-1");
  t.assert.equal(t.getSprite("Gärtnerin").effects.color, 25, "Expected effect color of Sprite Gärtnerin to be 25");
  t.assert.withinRange(t.getSprite("Gärtnerin").x, -86, 5, "Expected Sprite Gärtnerin to have x-position -86 +-5");
  t.assert.withinRange(t.getSprite("Gärtnerin").y, -32, 5, "Expected Sprite Gärtnerin to have y-position -32 +-5");
  t.assert.equal(t.getSprite("Gärtnerin").sayText, "Autsch!", "Expected Sprite Gärtnerin to say Autsch!");
  t.assert.equal(t.getSprite("Blume").sayText, "Ohje!", "Expected Sprite Blume to say Ohje!");
  t.end();
}
const test3 = async function (t) {
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.keyPress('down arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.keyPress('right arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(39);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Blume").direction, 90, 1, "Expected Sprite Blume to face in direction 90 +-1");
  t.keyPress('down arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.keyPress('down arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.keyPress('up arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.keyPress('left arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.keyPress('left arrow', 2);
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
  t.assert.withinRange(t.getSprite("Gärtnerin").x, -180, 5, "Expected Sprite Gärtnerin to have x-position -180 +-5");
  t.assert.withinRange(t.getSprite("Gärtnerin").y, 60, 5, "Expected Sprite Gärtnerin to have y-position 60 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).x, -86, 5, "Expected Clone 1 of Kaktus to have x-position -86 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).y, -32, 5, "Expected Clone 1 of Kaktus to have y-position -32 +-5");
  t.assert.not(t.getSprite("Gärtnerin").sayText, "Expected Sprite Gärtnerin not to say anything");
  t.assert.not(t.getSprite("Kaktus").getClone(1).sayText, "Expected Clone 1 of Kaktus not to say anything");
  t.assert.withinRange(t.getSprite("Gärtnerin").size, 20, 1, "Expected Sprite Gärtnerin to have size 20 +-1");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).size, 20, 1, "Expected Clone 1 of Kaktus to have size 20 +-1");
  t.assert.ok(t.getSprite("Kaktus").getClone(1).visible, "Expected Clone 1 of Kaktus to be visible");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).volume, 100, "Expected Clone 1 of Kaktus to have volume 100");
  t.end();
}
const test4 = async function (t) {
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.keyPress('down arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.keyPress('right arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(39);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Blume").direction, 90, 1, "Expected Sprite Blume to face in direction 90 +-1");
  t.keyPress('down arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.keyPress('down arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.keyPress('up arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.keyPress('left arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.keyPress('up arrow', 1);
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
  t.assert.withinRange(t.getSprite("Gärtnerin").y, 65, 5, "Expected Sprite Gärtnerin to have y-position 65 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).x, -86, 5, "Expected Clone 1 of Kaktus to have x-position -86 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).y, -32, 5, "Expected Clone 1 of Kaktus to have y-position -32 +-5");
  t.assert.not(t.getSprite("Gärtnerin").sayText, "Expected Sprite Gärtnerin not to say anything");
  t.assert.not(t.getSprite("Kaktus").getClone(1).sayText, "Expected Clone 1 of Kaktus not to say anything");
  t.assert.withinRange(t.getSprite("Gärtnerin").size, 20, 1, "Expected Sprite Gärtnerin to have size 20 +-1");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).size, 20, 1, "Expected Clone 1 of Kaktus to have size 20 +-1");
  t.assert.ok(t.getSprite("Kaktus").getClone(1).visible, "Expected Clone 1 of Kaktus to be visible");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).volume, 100, "Expected Clone 1 of Kaktus to have volume 100");
  t.end();
}
const test5 = async function (t) {
  await t.runForSteps(30);
  await t.runForSteps(1);
  await t.runForSteps(32);
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
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).x, -86, 5, "Expected Clone 1 of Kaktus to have x-position -86 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).y, -32, 5, "Expected Clone 1 of Kaktus to have y-position -32 +-5");
  t.assert.not(t.getSprite("Gärtnerin").sayText, "Expected Sprite Gärtnerin not to say anything");
  t.assert.not(t.getSprite("Kaktus").getClone(1).sayText, "Expected Clone 1 of Kaktus not to say anything");
  t.assert.withinRange(t.getSprite("Gärtnerin").size, 20, 1, "Expected Sprite Gärtnerin to have size 20 +-1");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).size, 20, 1, "Expected Clone 1 of Kaktus to have size 20 +-1");
  t.assert.ok(t.getSprite("Kaktus").getClone(1).visible, "Expected Clone 1 of Kaktus to be visible");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).volume, 100, "Expected Clone 1 of Kaktus to have volume 100");
  t.keyPress('down arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Gärtnerin").x, -170, 5, "Expected Sprite Gärtnerin to have x-position -170 +-5");
  t.assert.withinRange(t.getSprite("Gärtnerin").y, 55, 5, "Expected Sprite Gärtnerin to have y-position 55 +-5");
  t.end();
}
const test6 = async function (t) {
  await t.runForSteps(30);
  await t.runForSteps(1);
  await t.runForSteps(32);
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
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).x, -86, 5, "Expected Clone 1 of Kaktus to have x-position -86 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).y, -32, 5, "Expected Clone 1 of Kaktus to have y-position -32 +-5");
  t.assert.not(t.getSprite("Gärtnerin").sayText, "Expected Sprite Gärtnerin not to say anything");
  t.assert.not(t.getSprite("Kaktus").getClone(1).sayText, "Expected Clone 1 of Kaktus not to say anything");
  t.assert.withinRange(t.getSprite("Gärtnerin").size, 20, 1, "Expected Sprite Gärtnerin to have size 20 +-1");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).size, 20, 1, "Expected Clone 1 of Kaktus to have size 20 +-1");
  t.assert.ok(t.getSprite("Kaktus").getClone(1).visible, "Expected Clone 1 of Kaktus to be visible");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).volume, 100, "Expected Clone 1 of Kaktus to have volume 100");
  t.dragSprite('Gärtnerin', -134.9852822490671, 1.3821501272451968, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Gärtnerin").x, -134.9852822490671, 5, "Expected Sprite Gärtnerin to have x-position -134.9852822490671 +-5");
  t.assert.withinRange(t.getSprite("Gärtnerin").y, 1.3821501272451968, 5, "Expected Sprite Gärtnerin to have y-position 1.3821501272451968 +-5");
  t.dragSprite('Blume', -148.5241782125651, -73.2884655558875, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Blume").x, -89, 5, "Expected Sprite Blume to have x-position -89 +-5");
  t.assert.withinRange(t.getSprite("Blume").y, -15, 5, "Expected Sprite Blume to have y-position -15 +-5");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849335712',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849335712',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849335712',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849335712',
      type: 'standard',
  },
  {
      test: test4,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849335712',
      type: 'standard',
  },
  {
      test: test5,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849335712',
      type: 'standard',
  },
  {
      test: test6,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849335712',
      type: 'standard',
  }
]
