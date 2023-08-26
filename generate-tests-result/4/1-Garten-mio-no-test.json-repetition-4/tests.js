const test0 = async function (t) {
  await t.runForSteps(96);
  await t.runForSteps(1);
  t.keyPress('up arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Gärtnerin").x, -170, 5, "Expected Sprite Gärtnerin to have x-position -170 +-5");
  t.assert.withinRange(t.getSprite("Gärtnerin").y, 70, 5, "Expected Sprite Gärtnerin to have y-position 70 +-5");
  t.keyPress('down arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Gärtnerin").x, -170, 5, "Expected Sprite Gärtnerin to have x-position -170 +-5");
  t.assert.withinRange(t.getSprite("Gärtnerin").y, 65, 5, "Expected Sprite Gärtnerin to have y-position 65 +-5");
  t.keyPress('up arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Gärtnerin").x, -170, 5, "Expected Sprite Gärtnerin to have x-position -170 +-5");
  t.assert.withinRange(t.getSprite("Gärtnerin").y, 80, 5, "Expected Sprite Gärtnerin to have y-position 80 +-5");
  await t.runForSteps(57);
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
  t.assert.withinRange(t.getSprite("Kaktus").getClone(2).x, 121, 5, "Expected Clone 2 of Kaktus to have x-position 121 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(2).y, 0, 5, "Expected Clone 2 of Kaktus to have y-position 0 +-5");
  t.assert.not(t.getSprite("Kaktus").getClone(2).sayText, "Expected Clone 2 of Kaktus not to say anything");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(2).size, 20, 1, "Expected Clone 2 of Kaktus to have size 20 +-1");
  t.assert.ok(t.getSprite("Kaktus").getClone(2).visible, "Expected Clone 2 of Kaktus to be visible");
  t.assert.equal(t.getSprite("Kaktus").getClone(2).volume, 100, "Expected Clone 2 of Kaktus to have volume 100");
  t.dragSprite('Blume', -170, 80, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Blume").x, -52, 5, "Expected Sprite Blume to have x-position -52 +-5");
  t.assert.withinRange(t.getSprite("Blume").y, 61, 5, "Expected Sprite Blume to have y-position 61 +-5");
  t.dragSprite('Gärtnerin', 61.718033988021574, -160.9540473067315, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Gärtnerin").x, 61.718033988021574, 5, "Expected Sprite Gärtnerin to have x-position 61.718033988021574 +-5");
  t.assert.withinRange(t.getSprite("Gärtnerin").y, -160.9540473067315, 5, "Expected Sprite Gärtnerin to have y-position -160.9540473067315 +-5");
  t.dragSprite('Blume', 61, -160, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Blume").x, 79, 5, "Expected Sprite Blume to have x-position 79 +-5");
  t.assert.withinRange(t.getSprite("Blume").y, -19, 5, "Expected Sprite Blume to have y-position -19 +-5");
  t.keyPress('up arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Blume").direction, 90, 1, "Expected Sprite Blume to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Gärtnerin").x, 61.718033988021574, 5, "Expected Sprite Gärtnerin to have x-position 61.718033988021574 +-5");
  t.assert.withinRange(t.getSprite("Gärtnerin").y, -140.9540473067315, 5, "Expected Sprite Gärtnerin to have y-position -140.9540473067315 +-5");
  t.dragSprite('Gärtnerin', -27.900001525878892, -113.59731753539597, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.equal(t.getSprite("Gärtnerin").effects.color, 25, "Expected effect color of Sprite Gärtnerin to be 25");
  t.assert.withinRange(t.getSprite("Gärtnerin").x, -27.900001525878892, 5, "Expected Sprite Gärtnerin to have x-position -27.900001525878892 +-5");
  t.assert.withinRange(t.getSprite("Gärtnerin").y, -113.59731753539597, 5, "Expected Sprite Gärtnerin to have y-position -113.59731753539597 +-5");
  t.assert.equal(t.getSprite("Gärtnerin").sayText, "Autsch!", "Expected Sprite Gärtnerin to say Autsch!");
  t.assert.equal(t.getSprite("Blume").sayText, "Ohje!", "Expected Sprite Blume to say Ohje!");
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kaktus").x, 93.92499987284343, 5, "Expected Sprite Kaktus to have x-position 93.92499987284343 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").y, 45.53355687205034, 5, "Expected Sprite Kaktus to have y-position 45.53355687205034 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).x, -0.49166679382324086, 5, "Expected Clone 1 of Kaktus to have x-position -0.49166679382324086 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).y, -159.799776461283, 5, "Expected Clone 1 of Kaktus to have y-position -159.799776461283 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(2).x, 108.59166653951009, 5, "Expected Clone 2 of Kaktus to have x-position 108.59166653951009 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(2).y, -9.466443127949663, 5, "Expected Clone 2 of Kaktus to have y-position -9.466443127949663 +-5");
  await t.runForSteps(99);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Gärtnerin").effects.color, 175, "Expected effect color of Sprite Gärtnerin to be 175");
  t.assert.withinRange(t.getSprite("Kaktus").x, -27.900001525878892, 5, "Expected Sprite Kaktus to have x-position -27.900001525878892 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").y, -113.59731753539597, 5, "Expected Sprite Kaktus to have y-position -113.59731753539597 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).x, -27.900001525878892, 5, "Expected Clone 1 of Kaktus to have x-position -27.900001525878892 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).y, -113.59731753539597, 5, "Expected Clone 1 of Kaktus to have y-position -113.59731753539597 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(2).x, -27.900001525878892, 5, "Expected Clone 2 of Kaktus to have x-position -27.900001525878892 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(2).y, -113.59731753539597, 5, "Expected Clone 2 of Kaktus to have y-position -113.59731753539597 +-5");
  await t.runForSteps(20);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Gärtnerin").effects.color, 200, "Expected effect color of Sprite Gärtnerin to be 200");
  await t.runForSteps(91);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Gärtnerin").effects.color, 250, "Expected effect color of Sprite Gärtnerin to be 250");
  t.end();
}
const test1 = async function (t) {
  t.keyPress('down arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.dragSprite('Blume', -186.78616124251312, 141.61521630365758, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Blume").x, -186.78616124251312, 5, "Expected Sprite Blume to have x-position -186.78616124251312 +-5");
  t.assert.withinRange(t.getSprite("Blume").y, 141.61521630365758, 5, "Expected Sprite Blume to have y-position 141.61521630365758 +-5");
  t.keyPress('up arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.dragSprite('Blume', -227.78777422703513, 21.640397062812667, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Blume").x, -227.78777422703513, 5, "Expected Sprite Blume to have x-position -227.78777422703513 +-5");
  t.assert.withinRange(t.getSprite("Blume").y, 21.640397062812667, 5, "Expected Sprite Blume to have y-position 21.640397062812667 +-5");
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  await t.runForSteps(35);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Blume").direction, 90, 1, "Expected Sprite Blume to face in direction 90 +-1");
  t.keyPress('up arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.keyPress('left arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.keyPress('right arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  await t.runForSteps(10);
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
  t.assert.withinRange(t.getSprite("Blume").x, -140, 5, "Expected Sprite Blume to have x-position -140 +-5");
  t.assert.withinRange(t.getSprite("Blume").y, -99, 5, "Expected Sprite Blume to have y-position -99 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).x, -8, 5, "Expected Clone 1 of Kaktus to have x-position -8 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).y, 112, 5, "Expected Clone 1 of Kaktus to have y-position 112 +-5");
  t.assert.not(t.getSprite("Gärtnerin").sayText, "Expected Sprite Gärtnerin not to say anything");
  t.assert.not(t.getSprite("Kaktus").getClone(1).sayText, "Expected Clone 1 of Kaktus not to say anything");
  t.assert.withinRange(t.getSprite("Gärtnerin").size, 20, 1, "Expected Sprite Gärtnerin to have size 20 +-1");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).size, 20, 1, "Expected Clone 1 of Kaktus to have size 20 +-1");
  t.assert.ok(t.getSprite("Kaktus").getClone(1).visible, "Expected Clone 1 of Kaktus to be visible");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).volume, 100, "Expected Clone 1 of Kaktus to have volume 100");
  t.keyPress('down arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Gärtnerin").x, -170, 5, "Expected Sprite Gärtnerin to have x-position -170 +-5");
  t.assert.withinRange(t.getSprite("Gärtnerin").y, 45, 5, "Expected Sprite Gärtnerin to have y-position 45 +-5");
  t.dragSprite('Blume', -170, 45, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Blume").x, 183, 5, "Expected Sprite Blume to have x-position 183 +-5");
  t.assert.withinRange(t.getSprite("Blume").y, -148, 5, "Expected Sprite Blume to have y-position -148 +-5");
  t.keyPress('right arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Blume").direction, 90, 1, "Expected Sprite Blume to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Gärtnerin").x, -165, 5, "Expected Sprite Gärtnerin to have x-position -165 +-5");
  t.assert.withinRange(t.getSprite("Gärtnerin").y, 45, 5, "Expected Sprite Gärtnerin to have y-position 45 +-5");
  t.dragSprite('Blume', -94.5878619480861, 36.50183561734415, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Blume").x, -94.5878619480861, 5, "Expected Sprite Blume to have x-position -94.5878619480861 +-5");
  t.assert.withinRange(t.getSprite("Blume").y, 36.50183561734415, 5, "Expected Sprite Blume to have y-position 36.50183561734415 +-5");
  t.keyPress('right arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Gärtnerin").x, -160, 5, "Expected Sprite Gärtnerin to have x-position -160 +-5");
  t.assert.withinRange(t.getSprite("Gärtnerin").y, 45, 5, "Expected Sprite Gärtnerin to have y-position 45 +-5");
  await t.runForSteps(62);
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
  t.assert.withinRange(t.getSprite("Kaktus").getClone(2).x, 79, 5, "Expected Clone 2 of Kaktus to have x-position 79 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(2).y, -19, 5, "Expected Clone 2 of Kaktus to have y-position -19 +-5");
  t.assert.not(t.getSprite("Kaktus").getClone(2).sayText, "Expected Clone 2 of Kaktus not to say anything");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(2).size, 20, 1, "Expected Clone 2 of Kaktus to have size 20 +-1");
  t.assert.ok(t.getSprite("Kaktus").getClone(2).visible, "Expected Clone 2 of Kaktus to be visible");
  t.assert.equal(t.getSprite("Kaktus").getClone(2).volume, 100, "Expected Clone 2 of Kaktus to have volume 100");
  t.keyPress('left arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Gärtnerin").x, -165, 5, "Expected Sprite Gärtnerin to have x-position -165 +-5");
  t.assert.withinRange(t.getSprite("Gärtnerin").y, 45, 5, "Expected Sprite Gärtnerin to have y-position 45 +-5");
  await t.runForSteps(200);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Kaktus").getClone(3).currentCostume, 0, "Expected Clone 3 of Kaktus to have costume 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(4).currentCostume, 0, "Expected Clone 4 of Kaktus to have costume 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(5).currentCostume, 0, "Expected Clone 5 of Kaktus to have costume 0");
  t.assert.equal(t.getSprite("Kaktus").getCloneCount(), 5, "Expected Sprite Kaktus to have 5 clones");
  t.assert.equal(t.getSprite("Blume").direction, 95, 1, "Expected Sprite Blume to face in direction 95 +-1");
  t.assert.equal(t.getSprite("Kaktus").getClone(3).direction, 90, 1, "Expected Clone 3 of Kaktus to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Kaktus").getClone(4).direction, 90, 1, "Expected Clone 4 of Kaktus to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Kaktus").getClone(5).direction, 90, 1, "Expected Clone 5 of Kaktus to face in direction 90 +-1");
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
  t.assert.equal(t.getSprite("Kaktus").getClone(5).effects.color, 0, "Expected effect color of Clone 5 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(5).effects.fisheye, 0, "Expected effect fisheye of Clone 5 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(5).effects.whirl, 0, "Expected effect whirl of Clone 5 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(5).effects.pixelate, 0, "Expected effect pixelate of Clone 5 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(5).effects.mosaic, 0, "Expected effect mosaic of Clone 5 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(5).effects.brightness, 0, "Expected effect brightness of Clone 5 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(5).effects.ghost, 0, "Expected effect ghost of Clone 5 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Gärtnerin").layerOrder, 7, "Expected Sprite Gärtnerin to be at layer 7");
  t.assert.equal(t.getSprite("Blume").layerOrder, 8, "Expected Sprite Blume to be at layer 8");
  t.assert.equal(t.getSprite("Kaktus").layerOrder, 6, "Expected Sprite Kaktus to be at layer 6");
  t.assert.equal(t.getSprite("Kaktus").getClone(3).getLayerOrder(), 3, "Expected Clone 3 of Kaktus to be at layer 3");
  t.assert.equal(t.getSprite("Kaktus").getClone(4).getLayerOrder(), 4, "Expected Clone 4 of Kaktus to be at layer 4");
  t.assert.equal(t.getSprite("Kaktus").getClone(5).getLayerOrder(), 5, "Expected Clone 5 of Kaktus to be at layer 5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(3).x, 157, 5, "Expected Clone 3 of Kaktus to have x-position 157 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(3).y, -105, 5, "Expected Clone 3 of Kaktus to have y-position -105 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(4).x, 124, 5, "Expected Clone 4 of Kaktus to have x-position 124 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(4).y, 88, 5, "Expected Clone 4 of Kaktus to have y-position 88 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(5).x, 25, 5, "Expected Clone 5 of Kaktus to have x-position 25 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(5).y, -61, 5, "Expected Clone 5 of Kaktus to have y-position -61 +-5");
  t.assert.not(t.getSprite("Kaktus").getClone(3).sayText, "Expected Clone 3 of Kaktus not to say anything");
  t.assert.not(t.getSprite("Kaktus").getClone(4).sayText, "Expected Clone 4 of Kaktus not to say anything");
  t.assert.not(t.getSprite("Kaktus").getClone(5).sayText, "Expected Clone 5 of Kaktus not to say anything");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(3).size, 20, 1, "Expected Clone 3 of Kaktus to have size 20 +-1");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(4).size, 20, 1, "Expected Clone 4 of Kaktus to have size 20 +-1");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(5).size, 20, 1, "Expected Clone 5 of Kaktus to have size 20 +-1");
  t.assert.ok(t.getSprite("Kaktus").getClone(3).visible, "Expected Clone 3 of Kaktus to be visible");
  t.assert.ok(t.getSprite("Kaktus").getClone(4).visible, "Expected Clone 4 of Kaktus to be visible");
  t.assert.ok(t.getSprite("Kaktus").getClone(5).visible, "Expected Clone 5 of Kaktus to be visible");
  t.assert.equal(t.getSprite("Kaktus").getClone(3).volume, 100, "Expected Clone 3 of Kaktus to have volume 100");
  t.assert.equal(t.getSprite("Kaktus").getClone(4).volume, 100, "Expected Clone 4 of Kaktus to have volume 100");
  t.assert.equal(t.getSprite("Kaktus").getClone(5).volume, 100, "Expected Clone 5 of Kaktus to have volume 100");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937558344',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937558344',
      type: 'standard',
  }
]
