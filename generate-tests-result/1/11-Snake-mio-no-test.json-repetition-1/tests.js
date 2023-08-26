const test0 = async function (t) {
  t.dragSprite('Kopf', -92.7971357244284, 180, null);
  await t.runForSteps(1);
  t.keyPress('up arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Körper").getClone(1).currentCostume, 0, "Expected Clone 1 of Körper to have costume 0");
  t.assert.equal(t.getSprite("Kopf").direction, 0, 1, "Expected Sprite Kopf to face in direction 0 +-1");
  t.assert.equal(t.getSprite("Körper").getClone(1).direction, 90, 1, "Expected Clone 1 of Körper to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).getLayerOrder(), 2, "Expected Clone 1 of Körper to be at layer 2");
  t.assert.withinRange(t.getSprite("Kopf").x, 6, 5, "Expected Sprite Kopf to have x-position 6 +-5");
  t.assert.withinRange(t.getSprite("Kopf").y, 112, 5, "Expected Sprite Kopf to have y-position 112 +-5");
  t.assert.withinRange(t.getSprite("Körper").x, 6, 5, "Expected Sprite Körper to have x-position 6 +-5");
  t.assert.withinRange(t.getSprite("Körper").y, 109, 5, "Expected Sprite Körper to have y-position 109 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).x, 6, 5, "Expected Clone 1 of Körper to have x-position 6 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).y, 109, 5, "Expected Clone 1 of Körper to have y-position 109 +-5");
  t.assert.not(t.getSprite("Körper").getClone(1).sayText, "Expected Clone 1 of Körper not to say anything");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).size, 90, 1, "Expected Clone 1 of Körper to have size 90 +-1");
  t.assert.ok(t.getSprite("Körper").getClone(1).visible, "Expected Clone 1 of Körper to be visible");
  t.assert.equal(t.getSprite("Körper").getClone(1).volume, 100, "Expected Clone 1 of Körper to have volume 100");
  t.dragSprite('Punkt', 12.328270486124646, 115.75577250228713, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Körper").getClone(1).currentCostume, 0, "Expected Clone 1 of Körper to have costume 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).direction, 90, 1, "Expected Clone 1 of Körper to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).getLayerOrder(), 2, "Expected Clone 1 of Körper to be at layer 2");
  t.assert.withinRange(t.getSprite("Kopf").x, 6, 5, "Expected Sprite Kopf to have x-position 6 +-5");
  t.assert.withinRange(t.getSprite("Kopf").y, 115, 5, "Expected Sprite Kopf to have y-position 115 +-5");
  t.assert.withinRange(t.getSprite("Körper").x, 6, 5, "Expected Sprite Körper to have x-position 6 +-5");
  t.assert.withinRange(t.getSprite("Körper").y, 112, 5, "Expected Sprite Körper to have y-position 112 +-5");
  t.assert.withinRange(t.getSprite("Punkt").x, 133, 5, "Expected Sprite Punkt to have x-position 133 +-5");
  t.assert.withinRange(t.getSprite("Punkt").y, 91, 5, "Expected Sprite Punkt to have y-position 91 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).x, 6, 5, "Expected Clone 1 of Körper to have x-position 6 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).y, 112, 5, "Expected Clone 1 of Körper to have y-position 112 +-5");
  t.assert.not(t.getSprite("Körper").getClone(1).sayText, "Expected Clone 1 of Körper not to say anything");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).size, 90, 1, "Expected Clone 1 of Körper to have size 90 +-1");
  t.assert.ok(t.getSprite("Körper").getClone(1).visible, "Expected Clone 1 of Körper to be visible");
  t.assert.equal(t.getSprite("Körper").getClone(1).volume, 100, "Expected Clone 1 of Körper to have volume 100");
  t.keyPress('down arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Körper").getClone(2).currentCostume, 0, "Expected Clone 2 of Körper to have costume 0");
  t.assert.equal(t.getSprite("Körper").getClone(3).currentCostume, 0, "Expected Clone 3 of Körper to have costume 0");
  t.assert.equal(t.getSprite("Körper").getCloneCount(), 3, "Expected Sprite Körper to have 3 clones");
  t.assert.equal(t.getSprite("Kopf").direction, 180, 1, "Expected Sprite Kopf to face in direction 180 +-1");
  t.assert.equal(t.getSprite("Körper").getClone(2).direction, 90, 1, "Expected Clone 2 of Körper to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Körper").getClone(3).direction, 90, 1, "Expected Clone 3 of Körper to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Körper").getClone(2).effects.color, 0, "Expected effect color of Clone 2 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(2).effects.fisheye, 0, "Expected effect fisheye of Clone 2 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(2).effects.whirl, 0, "Expected effect whirl of Clone 2 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(2).effects.pixelate, 0, "Expected effect pixelate of Clone 2 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(2).effects.mosaic, 0, "Expected effect mosaic of Clone 2 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(2).effects.brightness, 0, "Expected effect brightness of Clone 2 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(2).effects.ghost, 0, "Expected effect ghost of Clone 2 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(3).effects.color, 0, "Expected effect color of Clone 3 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(3).effects.fisheye, 0, "Expected effect fisheye of Clone 3 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(3).effects.whirl, 0, "Expected effect whirl of Clone 3 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(3).effects.pixelate, 0, "Expected effect pixelate of Clone 3 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(3).effects.mosaic, 0, "Expected effect mosaic of Clone 3 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(3).effects.brightness, 0, "Expected effect brightness of Clone 3 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(3).effects.ghost, 0, "Expected effect ghost of Clone 3 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").layerOrder, 5, "Expected Sprite Körper to be at layer 5");
  t.assert.equal(t.getSprite("Punkt").layerOrder, 7, "Expected Sprite Punkt to be at layer 7");
  t.assert.equal(t.getSprite("Goodie").layerOrder, 6, "Expected Sprite Goodie to be at layer 6");
  t.assert.equal(t.getSprite("Körper").getClone(2).getLayerOrder(), 3, "Expected Clone 2 of Körper to be at layer 3");
  t.assert.equal(t.getSprite("Körper").getClone(3).getLayerOrder(), 4, "Expected Clone 3 of Körper to be at layer 4");
  t.assert.withinRange(t.getSprite("Körper").x, 6, 5, "Expected Sprite Körper to have x-position 6 +-5");
  t.assert.withinRange(t.getSprite("Körper").y, 118, 5, "Expected Sprite Körper to have y-position 118 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(2).x, 6, 5, "Expected Clone 2 of Körper to have x-position 6 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(2).y, 115, 5, "Expected Clone 2 of Körper to have y-position 115 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(3).x, 6, 5, "Expected Clone 3 of Körper to have x-position 6 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(3).y, 118, 5, "Expected Clone 3 of Körper to have y-position 118 +-5");
  t.assert.equal(t.getSprite("Kopf").sayText, "Verloren!", "Expected Sprite Kopf to say Verloren!");
  t.assert.not(t.getSprite("Körper").getClone(2).sayText, "Expected Clone 2 of Körper not to say anything");
  t.assert.not(t.getSprite("Körper").getClone(3).sayText, "Expected Clone 3 of Körper not to say anything");
  t.assert.withinRange(t.getSprite("Körper").getClone(2).size, 90, 1, "Expected Clone 2 of Körper to have size 90 +-1");
  t.assert.withinRange(t.getSprite("Körper").getClone(3).size, 90, 1, "Expected Clone 3 of Körper to have size 90 +-1");
  t.assert.ok(t.getSprite("Körper").getClone(2).visible, "Expected Clone 2 of Körper to be visible");
  t.assert.ok(t.getSprite("Körper").getClone(3).visible, "Expected Clone 3 of Körper to be visible");
  t.assert.equal(t.getSprite("Körper").getClone(2).volume, 100, "Expected Clone 2 of Körper to have volume 100");
  t.assert.equal(t.getSprite("Körper").getClone(3).volume, 100, "Expected Clone 3 of Körper to have volume 100");
  t.keyPress('left arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Körper").getClone(4).currentCostume, 0, "Expected Clone 4 of Körper to have costume 0");
  t.assert.equal(t.getSprite("Körper").getClone(5).currentCostume, 0, "Expected Clone 5 of Körper to have costume 0");
  t.assert.equal(t.getSprite("Körper").getCloneCount(), 5, "Expected Sprite Körper to have 5 clones");
  t.assert.equal(t.getSprite("Kopf").direction, -90, 1, "Expected Sprite Kopf to face in direction -90 +-1");
  t.assert.equal(t.getSprite("Körper").getClone(4).direction, 90, 1, "Expected Clone 4 of Körper to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Körper").getClone(5).direction, 90, 1, "Expected Clone 5 of Körper to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Körper").getClone(4).effects.color, 0, "Expected effect color of Clone 4 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(4).effects.fisheye, 0, "Expected effect fisheye of Clone 4 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(4).effects.whirl, 0, "Expected effect whirl of Clone 4 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(4).effects.pixelate, 0, "Expected effect pixelate of Clone 4 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(4).effects.mosaic, 0, "Expected effect mosaic of Clone 4 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(4).effects.brightness, 0, "Expected effect brightness of Clone 4 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(4).effects.ghost, 0, "Expected effect ghost of Clone 4 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(5).effects.color, 0, "Expected effect color of Clone 5 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(5).effects.fisheye, 0, "Expected effect fisheye of Clone 5 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(5).effects.whirl, 0, "Expected effect whirl of Clone 5 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(5).effects.pixelate, 0, "Expected effect pixelate of Clone 5 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(5).effects.mosaic, 0, "Expected effect mosaic of Clone 5 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(5).effects.brightness, 0, "Expected effect brightness of Clone 5 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(5).effects.ghost, 0, "Expected effect ghost of Clone 5 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").layerOrder, 7, "Expected Sprite Körper to be at layer 7");
  t.assert.equal(t.getSprite("Punkt").layerOrder, 9, "Expected Sprite Punkt to be at layer 9");
  t.assert.equal(t.getSprite("Goodie").layerOrder, 8, "Expected Sprite Goodie to be at layer 8");
  t.assert.equal(t.getSprite("Körper").getClone(4).getLayerOrder(), 5, "Expected Clone 4 of Körper to be at layer 5");
  t.assert.equal(t.getSprite("Körper").getClone(5).getLayerOrder(), 6, "Expected Clone 5 of Körper to be at layer 6");
  t.assert.withinRange(t.getSprite("Kopf").x, 3, 5, "Expected Sprite Kopf to have x-position 3 +-5");
  t.assert.withinRange(t.getSprite("Kopf").y, 112, 5, "Expected Sprite Kopf to have y-position 112 +-5");
  t.assert.withinRange(t.getSprite("Körper").x, 6, 5, "Expected Sprite Körper to have x-position 6 +-5");
  t.assert.withinRange(t.getSprite("Körper").y, 112, 5, "Expected Sprite Körper to have y-position 112 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(4).x, 6, 5, "Expected Clone 4 of Körper to have x-position 6 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(4).y, 115, 5, "Expected Clone 4 of Körper to have y-position 115 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(5).x, 6, 5, "Expected Clone 5 of Körper to have x-position 6 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(5).y, 112, 5, "Expected Clone 5 of Körper to have y-position 112 +-5");
  t.assert.not(t.getSprite("Körper").getClone(4).sayText, "Expected Clone 4 of Körper not to say anything");
  t.assert.not(t.getSprite("Körper").getClone(5).sayText, "Expected Clone 5 of Körper not to say anything");
  t.assert.withinRange(t.getSprite("Körper").getClone(4).size, 90, 1, "Expected Clone 4 of Körper to have size 90 +-1");
  t.assert.withinRange(t.getSprite("Körper").getClone(5).size, 90, 1, "Expected Clone 5 of Körper to have size 90 +-1");
  t.assert.ok(t.getSprite("Körper").getClone(4).visible, "Expected Clone 4 of Körper to be visible");
  t.assert.ok(t.getSprite("Körper").getClone(5).visible, "Expected Clone 5 of Körper to be visible");
  t.assert.equal(t.getSprite("Körper").getClone(4).volume, 100, "Expected Clone 4 of Körper to have volume 100");
  t.assert.equal(t.getSprite("Körper").getClone(5).volume, 100, "Expected Clone 5 of Körper to have volume 100");
  await t.runForSteps(100);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Körper").getCloneCount(), 0, "Expected Sprite Körper to have 0 clones");
  t.assert.equal(t.getSprite("Körper").layerOrder, 2, "Expected Sprite Körper to be at layer 2");
  t.assert.equal(t.getSprite("Punkt").layerOrder, 4, "Expected Sprite Punkt to be at layer 4");
  t.assert.equal(t.getSprite("Goodie").layerOrder, 3, "Expected Sprite Goodie to be at layer 3");
  t.assert.withinRange(t.getSprite("Kopf").x, -81, 5, "Expected Sprite Kopf to have x-position -81 +-5");
  t.assert.withinRange(t.getSprite("Kopf").y, 112, 5, "Expected Sprite Kopf to have y-position 112 +-5");
  t.assert.withinRange(t.getSprite("Körper").x, -78, 5, "Expected Sprite Körper to have x-position -78 +-5");
  t.assert.withinRange(t.getSprite("Körper").y, 112, 5, "Expected Sprite Körper to have y-position 112 +-5");
  t.assert.not(t.getSprite("Kopf").sayText, "Expected Sprite Kopf not to say anything");
  t.end();
}
const test1 = async function (t) {
  t.keyPress('left arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Körper").getClone(1).currentCostume, 0, "Expected Clone 1 of Körper to have costume 0");
  t.assert.equal(t.getSprite("Kopf").direction, 90, 1, "Expected Sprite Kopf to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Körper").getClone(1).direction, 90, 1, "Expected Clone 1 of Körper to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).getLayerOrder(), 2, "Expected Clone 1 of Körper to be at layer 2");
  t.assert.withinRange(t.getSprite("Kopf").x, 3, 5, "Expected Sprite Kopf to have x-position 3 +-5");
  t.assert.withinRange(t.getSprite("Kopf").y, 100, 5, "Expected Sprite Kopf to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Körper").x, 0, 5, "Expected Sprite Körper to have x-position 0 +-5");
  t.assert.withinRange(t.getSprite("Körper").y, 100, 5, "Expected Sprite Körper to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).x, 0, 5, "Expected Clone 1 of Körper to have x-position 0 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).y, 100, 5, "Expected Clone 1 of Körper to have y-position 100 +-5");
  t.assert.not(t.getSprite("Körper").getClone(1).sayText, "Expected Clone 1 of Körper not to say anything");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).size, 90, 1, "Expected Clone 1 of Körper to have size 90 +-1");
  t.assert.ok(t.getSprite("Körper").getClone(1).visible, "Expected Clone 1 of Körper to be visible");
  t.assert.equal(t.getSprite("Körper").getClone(1).volume, 100, "Expected Clone 1 of Körper to have volume 100");
  await t.runForSteps(37);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Körper").getClone(1).currentCostume, 0, "Expected Clone 1 of Körper to have costume 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).direction, 90, 1, "Expected Clone 1 of Körper to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).getLayerOrder(), 2, "Expected Clone 1 of Körper to be at layer 2");
  t.assert.withinRange(t.getSprite("Kopf").x, 117, 5, "Expected Sprite Kopf to have x-position 117 +-5");
  t.assert.withinRange(t.getSprite("Kopf").y, 100, 5, "Expected Sprite Kopf to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Körper").x, 114, 5, "Expected Sprite Körper to have x-position 114 +-5");
  t.assert.withinRange(t.getSprite("Körper").y, 100, 5, "Expected Sprite Körper to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).x, 114, 5, "Expected Clone 1 of Körper to have x-position 114 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).y, 100, 5, "Expected Clone 1 of Körper to have y-position 100 +-5");
  t.assert.not(t.getSprite("Körper").getClone(1).sayText, "Expected Clone 1 of Körper not to say anything");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).size, 90, 1, "Expected Clone 1 of Körper to have size 90 +-1");
  t.assert.ok(t.getSprite("Körper").getClone(1).visible, "Expected Clone 1 of Körper to be visible");
  t.assert.equal(t.getSprite("Körper").getClone(1).volume, 100, "Expected Clone 1 of Körper to have volume 100");
  await t.runForSteps(35);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Körper").getClone(1).currentCostume, 0, "Expected Clone 1 of Körper to have costume 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).direction, 90, 1, "Expected Clone 1 of Körper to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).getLayerOrder(), 2, "Expected Clone 1 of Körper to be at layer 2");
  t.assert.withinRange(t.getSprite("Kopf").x, 225, 5, "Expected Sprite Kopf to have x-position 225 +-5");
  t.assert.withinRange(t.getSprite("Kopf").y, 100, 5, "Expected Sprite Kopf to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Körper").x, 222, 5, "Expected Sprite Körper to have x-position 222 +-5");
  t.assert.withinRange(t.getSprite("Körper").y, 100, 5, "Expected Sprite Körper to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).x, 222, 5, "Expected Clone 1 of Körper to have x-position 222 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).y, 100, 5, "Expected Clone 1 of Körper to have y-position 100 +-5");
  t.assert.not(t.getSprite("Körper").getClone(1).sayText, "Expected Clone 1 of Körper not to say anything");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).size, 90, 1, "Expected Clone 1 of Körper to have size 90 +-1");
  t.assert.ok(t.getSprite("Körper").getClone(1).visible, "Expected Clone 1 of Körper to be visible");
  t.assert.equal(t.getSprite("Körper").getClone(1).volume, 100, "Expected Clone 1 of Körper to have volume 100");
  t.keyPress('down arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Körper").getClone(1).currentCostume, 0, "Expected Clone 1 of Körper to have costume 0");
  t.assert.equal(t.getSprite("Kopf").direction, 180, 1, "Expected Sprite Kopf to face in direction 180 +-1");
  t.assert.equal(t.getSprite("Körper").getClone(1).direction, 90, 1, "Expected Clone 1 of Körper to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).getLayerOrder(), 2, "Expected Clone 1 of Körper to be at layer 2");
  t.assert.withinRange(t.getSprite("Kopf").x, 228, 5, "Expected Sprite Kopf to have x-position 228 +-5");
  t.assert.withinRange(t.getSprite("Kopf").y, 97, 5, "Expected Sprite Kopf to have y-position 97 +-5");
  t.assert.withinRange(t.getSprite("Körper").x, 228, 5, "Expected Sprite Körper to have x-position 228 +-5");
  t.assert.withinRange(t.getSprite("Körper").y, 100, 5, "Expected Sprite Körper to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).x, 228, 5, "Expected Clone 1 of Körper to have x-position 228 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).y, 100, 5, "Expected Clone 1 of Körper to have y-position 100 +-5");
  t.assert.equal(t.getSprite("Kopf").sayText, "Verloren!", "Expected Sprite Kopf to say Verloren!");
  t.assert.not(t.getSprite("Körper").getClone(1).sayText, "Expected Clone 1 of Körper not to say anything");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).size, 90, 1, "Expected Clone 1 of Körper to have size 90 +-1");
  t.assert.ok(t.getSprite("Körper").getClone(1).visible, "Expected Clone 1 of Körper to be visible");
  t.assert.equal(t.getSprite("Körper").getClone(1).volume, 100, "Expected Clone 1 of Körper to have volume 100");
  t.keyPress('up arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Körper").getClone(1).currentCostume, 0, "Expected Clone 1 of Körper to have costume 0");
  t.assert.equal(t.getSprite("Kopf").direction, 0, 1, "Expected Sprite Kopf to face in direction 0 +-1");
  t.assert.equal(t.getSprite("Körper").getClone(1).direction, 90, 1, "Expected Clone 1 of Körper to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).getLayerOrder(), 2, "Expected Clone 1 of Körper to be at layer 2");
  t.assert.withinRange(t.getSprite("Kopf").x, 228, 5, "Expected Sprite Kopf to have x-position 228 +-5");
  t.assert.withinRange(t.getSprite("Kopf").y, 100, 5, "Expected Sprite Kopf to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Körper").x, 228, 5, "Expected Sprite Körper to have x-position 228 +-5");
  t.assert.withinRange(t.getSprite("Körper").y, 97, 5, "Expected Sprite Körper to have y-position 97 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).x, 228, 5, "Expected Clone 1 of Körper to have x-position 228 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).y, 97, 5, "Expected Clone 1 of Körper to have y-position 97 +-5");
  t.assert.not(t.getSprite("Körper").getClone(1).sayText, "Expected Clone 1 of Körper not to say anything");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).size, 90, 1, "Expected Clone 1 of Körper to have size 90 +-1");
  t.assert.ok(t.getSprite("Körper").getClone(1).visible, "Expected Clone 1 of Körper to be visible");
  t.assert.equal(t.getSprite("Körper").getClone(1).volume, 100, "Expected Clone 1 of Körper to have volume 100");
  await t.runForSteps(34);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Körper").getCloneCount(), 0, "Expected Sprite Körper to have 0 clones");
  t.assert.equal(t.getSprite("Körper").layerOrder, 2, "Expected Sprite Körper to be at layer 2");
  t.assert.equal(t.getSprite("Punkt").layerOrder, 4, "Expected Sprite Punkt to be at layer 4");
  t.assert.equal(t.getSprite("Goodie").layerOrder, 3, "Expected Sprite Goodie to be at layer 3");
  t.assert.withinRange(t.getSprite("Kopf").x, 228, 5, "Expected Sprite Kopf to have x-position 228 +-5");
  t.assert.withinRange(t.getSprite("Kopf").y, 173, 5, "Expected Sprite Kopf to have y-position 173 +-5");
  t.assert.withinRange(t.getSprite("Körper").x, 228, 5, "Expected Sprite Körper to have x-position 228 +-5");
  t.assert.withinRange(t.getSprite("Körper").y, 173, 5, "Expected Sprite Körper to have y-position 173 +-5");
  t.assert.not(t.getSprite("Kopf").sayText, "Expected Sprite Kopf not to say anything");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849525022',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849525022',
      type: 'standard',
  }
]
