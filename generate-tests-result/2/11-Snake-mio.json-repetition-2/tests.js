const test0 = async function (t) {
  t.dragSprite('Punkt', 67.9894111011112, 101.66329352654208, null);
  await t.runForSteps(1);
  t.keyPress('right arrow', 1);
  await t.runForSteps(1);
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
  t.assert.withinRange(t.getSprite("Kopf").x, 9, 5, "Expected Sprite Kopf to have x-position 9 +-5");
  t.assert.withinRange(t.getSprite("Kopf").y, 100, 5, "Expected Sprite Kopf to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Körper").x, 6, 5, "Expected Sprite Körper to have x-position 6 +-5");
  t.assert.withinRange(t.getSprite("Körper").y, 100, 5, "Expected Sprite Körper to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).x, 6, 5, "Expected Clone 1 of Körper to have x-position 6 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).y, 100, 5, "Expected Clone 1 of Körper to have y-position 100 +-5");
  t.assert.not(t.getSprite("Körper").getClone(1).sayText, "Expected Clone 1 of Körper not to say anything");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).size, 90, 1, "Expected Clone 1 of Körper to have size 90 +-1");
  t.assert.ok(t.getSprite("Körper").getClone(1).visible, "Expected Clone 1 of Körper to be visible");
  t.assert.equal(t.getSprite("Körper").getClone(1).volume, 100, "Expected Clone 1 of Körper to have volume 100");
  t.end();
}
const test1 = async function (t) {
  t.dragSprite('Kopf', 204.1146295557816, 172.05963078686943, null);
  await t.runForSteps(1);
  await t.runForSteps(51);
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
  t.assert.withinRange(t.getSprite("Kopf").x, 159, 5, "Expected Sprite Kopf to have x-position 159 +-5");
  t.assert.withinRange(t.getSprite("Kopf").y, 100, 5, "Expected Sprite Kopf to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Körper").x, 156, 5, "Expected Sprite Körper to have x-position 156 +-5");
  t.assert.withinRange(t.getSprite("Körper").y, 100, 5, "Expected Sprite Körper to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).x, 156, 5, "Expected Clone 1 of Körper to have x-position 156 +-5");
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
  t.assert.withinRange(t.getSprite("Kopf").x, 162, 5, "Expected Sprite Kopf to have x-position 162 +-5");
  t.assert.withinRange(t.getSprite("Kopf").y, 97, 5, "Expected Sprite Kopf to have y-position 97 +-5");
  t.assert.withinRange(t.getSprite("Körper").x, 162, 5, "Expected Sprite Körper to have x-position 162 +-5");
  t.assert.withinRange(t.getSprite("Körper").y, 100, 5, "Expected Sprite Körper to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).x, 162, 5, "Expected Clone 1 of Körper to have x-position 162 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).y, 100, 5, "Expected Clone 1 of Körper to have y-position 100 +-5");
  t.assert.not(t.getSprite("Körper").getClone(1).sayText, "Expected Clone 1 of Körper not to say anything");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).size, 90, 1, "Expected Clone 1 of Körper to have size 90 +-1");
  t.assert.ok(t.getSprite("Körper").getClone(1).visible, "Expected Clone 1 of Körper to be visible");
  t.assert.equal(t.getSprite("Körper").getClone(1).volume, 100, "Expected Clone 1 of Körper to have volume 100");
  t.dragSprite('Punkt', 156, 97, null);
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
  t.assert.withinRange(t.getSprite("Kopf").x, 162, 5, "Expected Sprite Kopf to have x-position 162 +-5");
  t.assert.withinRange(t.getSprite("Kopf").y, 94, 5, "Expected Sprite Kopf to have y-position 94 +-5");
  t.assert.withinRange(t.getSprite("Körper").x, 162, 5, "Expected Sprite Körper to have x-position 162 +-5");
  t.assert.withinRange(t.getSprite("Körper").y, 97, 5, "Expected Sprite Körper to have y-position 97 +-5");
  t.assert.withinRange(t.getSprite("Punkt").x, -116, 5, "Expected Sprite Punkt to have x-position -116 +-5");
  t.assert.withinRange(t.getSprite("Punkt").y, -69, 5, "Expected Sprite Punkt to have y-position -69 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).x, 162, 5, "Expected Clone 1 of Körper to have x-position 162 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).y, 97, 5, "Expected Clone 1 of Körper to have y-position 97 +-5");
  t.assert.not(t.getSprite("Körper").getClone(1).sayText, "Expected Clone 1 of Körper not to say anything");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).size, 90, 1, "Expected Clone 1 of Körper to have size 90 +-1");
  t.assert.ok(t.getSprite("Körper").getClone(1).visible, "Expected Clone 1 of Körper to be visible");
  t.assert.equal(t.getSprite("Körper").getClone(1).volume, 100, "Expected Clone 1 of Körper to have volume 100");
  t.keyPress('up arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Körper").getClone(2).currentCostume, 0, "Expected Clone 2 of Körper to have costume 0");
  t.assert.equal(t.getSprite("Körper").getClone(3).currentCostume, 0, "Expected Clone 3 of Körper to have costume 0");
  t.assert.equal(t.getSprite("Körper").getClone(4).currentCostume, 0, "Expected Clone 4 of Körper to have costume 0");
  t.assert.equal(t.getSprite("Körper").getClone(5).currentCostume, 0, "Expected Clone 5 of Körper to have costume 0");
  t.assert.equal(t.getSprite("Körper").getClone(6).currentCostume, 0, "Expected Clone 6 of Körper to have costume 0");
  t.assert.equal(t.getSprite("Körper").getCloneCount(), 6, "Expected Sprite Körper to have 6 clones");
  t.assert.equal(t.getSprite("Kopf").direction, 0, 1, "Expected Sprite Kopf to face in direction 0 +-1");
  t.assert.equal(t.getSprite("Körper").getClone(2).direction, 90, 1, "Expected Clone 2 of Körper to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Körper").getClone(3).direction, 90, 1, "Expected Clone 3 of Körper to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Körper").getClone(4).direction, 90, 1, "Expected Clone 4 of Körper to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Körper").getClone(5).direction, 90, 1, "Expected Clone 5 of Körper to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Körper").getClone(6).direction, 90, 1, "Expected Clone 6 of Körper to face in direction 90 +-1");
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
  t.assert.equal(t.getSprite("Körper").getClone(6).effects.color, 0, "Expected effect color of Clone 6 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(6).effects.fisheye, 0, "Expected effect fisheye of Clone 6 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(6).effects.whirl, 0, "Expected effect whirl of Clone 6 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(6).effects.pixelate, 0, "Expected effect pixelate of Clone 6 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(6).effects.mosaic, 0, "Expected effect mosaic of Clone 6 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(6).effects.brightness, 0, "Expected effect brightness of Clone 6 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(6).effects.ghost, 0, "Expected effect ghost of Clone 6 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").layerOrder, 8, "Expected Sprite Körper to be at layer 8");
  t.assert.equal(t.getSprite("Punkt").layerOrder, 10, "Expected Sprite Punkt to be at layer 10");
  t.assert.equal(t.getSprite("Goodie").layerOrder, 9, "Expected Sprite Goodie to be at layer 9");
  t.assert.equal(t.getSprite("Körper").getClone(2).getLayerOrder(), 3, "Expected Clone 2 of Körper to be at layer 3");
  t.assert.equal(t.getSprite("Körper").getClone(3).getLayerOrder(), 4, "Expected Clone 3 of Körper to be at layer 4");
  t.assert.equal(t.getSprite("Körper").getClone(4).getLayerOrder(), 5, "Expected Clone 4 of Körper to be at layer 5");
  t.assert.equal(t.getSprite("Körper").getClone(5).getLayerOrder(), 6, "Expected Clone 5 of Körper to be at layer 6");
  t.assert.equal(t.getSprite("Körper").getClone(6).getLayerOrder(), 7, "Expected Clone 6 of Körper to be at layer 7");
  t.assert.withinRange(t.getSprite("Kopf").x, 162, 5, "Expected Sprite Kopf to have x-position 162 +-5");
  t.assert.withinRange(t.getSprite("Kopf").y, 103, 5, "Expected Sprite Kopf to have y-position 103 +-5");
  t.assert.withinRange(t.getSprite("Körper").x, 162, 5, "Expected Sprite Körper to have x-position 162 +-5");
  t.assert.withinRange(t.getSprite("Körper").y, 100, 5, "Expected Sprite Körper to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(2).x, 162, 5, "Expected Clone 2 of Körper to have x-position 162 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(2).y, 94, 5, "Expected Clone 2 of Körper to have y-position 94 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(3).x, 162, 5, "Expected Clone 3 of Körper to have x-position 162 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(3).y, 91, 5, "Expected Clone 3 of Körper to have y-position 91 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(4).x, 162, 5, "Expected Clone 4 of Körper to have x-position 162 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(4).y, 94, 5, "Expected Clone 4 of Körper to have y-position 94 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(5).x, 162, 5, "Expected Clone 5 of Körper to have x-position 162 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(5).y, 97, 5, "Expected Clone 5 of Körper to have y-position 97 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(6).x, 162, 5, "Expected Clone 6 of Körper to have x-position 162 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(6).y, 100, 5, "Expected Clone 6 of Körper to have y-position 100 +-5");
  t.assert.equal(t.getSprite("Kopf").sayText, "Verloren!", "Expected Sprite Kopf to say Verloren!");
  t.assert.not(t.getSprite("Körper").getClone(2).sayText, "Expected Clone 2 of Körper not to say anything");
  t.assert.not(t.getSprite("Körper").getClone(3).sayText, "Expected Clone 3 of Körper not to say anything");
  t.assert.not(t.getSprite("Körper").getClone(4).sayText, "Expected Clone 4 of Körper not to say anything");
  t.assert.not(t.getSprite("Körper").getClone(5).sayText, "Expected Clone 5 of Körper not to say anything");
  t.assert.not(t.getSprite("Körper").getClone(6).sayText, "Expected Clone 6 of Körper not to say anything");
  t.assert.withinRange(t.getSprite("Körper").getClone(2).size, 90, 1, "Expected Clone 2 of Körper to have size 90 +-1");
  t.assert.withinRange(t.getSprite("Körper").getClone(3).size, 90, 1, "Expected Clone 3 of Körper to have size 90 +-1");
  t.assert.withinRange(t.getSprite("Körper").getClone(4).size, 90, 1, "Expected Clone 4 of Körper to have size 90 +-1");
  t.assert.withinRange(t.getSprite("Körper").getClone(5).size, 90, 1, "Expected Clone 5 of Körper to have size 90 +-1");
  t.assert.withinRange(t.getSprite("Körper").getClone(6).size, 90, 1, "Expected Clone 6 of Körper to have size 90 +-1");
  t.assert.ok(t.getSprite("Körper").getClone(2).visible, "Expected Clone 2 of Körper to be visible");
  t.assert.ok(t.getSprite("Körper").getClone(3).visible, "Expected Clone 3 of Körper to be visible");
  t.assert.ok(t.getSprite("Körper").getClone(4).visible, "Expected Clone 4 of Körper to be visible");
  t.assert.ok(t.getSprite("Körper").getClone(5).visible, "Expected Clone 5 of Körper to be visible");
  t.assert.ok(t.getSprite("Körper").getClone(6).visible, "Expected Clone 6 of Körper to be visible");
  t.assert.equal(t.getSprite("Körper").getClone(2).volume, 100, "Expected Clone 2 of Körper to have volume 100");
  t.assert.equal(t.getSprite("Körper").getClone(3).volume, 100, "Expected Clone 3 of Körper to have volume 100");
  t.assert.equal(t.getSprite("Körper").getClone(4).volume, 100, "Expected Clone 4 of Körper to have volume 100");
  t.assert.equal(t.getSprite("Körper").getClone(5).volume, 100, "Expected Clone 5 of Körper to have volume 100");
  t.assert.equal(t.getSprite("Körper").getClone(6).volume, 100, "Expected Clone 6 of Körper to have volume 100");
  await t.runForSteps(77);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Körper").getCloneCount(), 0, "Expected Sprite Körper to have 0 clones");
  t.assert.equal(t.getSprite("Körper").layerOrder, 2, "Expected Sprite Körper to be at layer 2");
  t.assert.equal(t.getSprite("Punkt").layerOrder, 4, "Expected Sprite Punkt to be at layer 4");
  t.assert.equal(t.getSprite("Goodie").layerOrder, 3, "Expected Sprite Goodie to be at layer 3");
  t.assert.withinRange(t.getSprite("Kopf").x, 162, 5, "Expected Sprite Kopf to have x-position 162 +-5");
  t.assert.withinRange(t.getSprite("Kopf").y, 173, 5, "Expected Sprite Kopf to have y-position 173 +-5");
  t.assert.withinRange(t.getSprite("Körper").x, 162, 5, "Expected Sprite Körper to have x-position 162 +-5");
  t.assert.withinRange(t.getSprite("Körper").y, 173, 5, "Expected Sprite Körper to have y-position 173 +-5");
  t.assert.not(t.getSprite("Kopf").sayText, "Expected Sprite Kopf not to say anything");
  t.end();
}
const test2 = async function (t) {
  t.dragSprite('Punkt', 67.9894111011112, 101.66329352654208, null);
  await t.runForSteps(1);
  t.dragSprite('Kopf', -28.07785545006744, 180, null);
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
  t.assert.withinRange(t.getSprite("Kopf").x, -25.07785545006744, 5, "Expected Sprite Kopf to have x-position -25.07785545006744 +-5");
  t.assert.withinRange(t.getSprite("Kopf").y, 179, 5, "Expected Sprite Kopf to have y-position 179 +-5");
  t.assert.withinRange(t.getSprite("Körper").x, -28.07785545006744, 5, "Expected Sprite Körper to have x-position -28.07785545006744 +-5");
  t.assert.withinRange(t.getSprite("Körper").y, 179, 5, "Expected Sprite Körper to have y-position 179 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).x, -28.07785545006744, 5, "Expected Clone 1 of Körper to have x-position -28.07785545006744 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).y, 179, 5, "Expected Clone 1 of Körper to have y-position 179 +-5");
  t.assert.equal(t.getSprite("Kopf").sayText, "Verloren!", "Expected Sprite Kopf to say Verloren!");
  t.assert.not(t.getSprite("Körper").getClone(1).sayText, "Expected Clone 1 of Körper not to say anything");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).size, 90, 1, "Expected Clone 1 of Körper to have size 90 +-1");
  t.assert.ok(t.getSprite("Körper").getClone(1).visible, "Expected Clone 1 of Körper to be visible");
  t.assert.equal(t.getSprite("Körper").getClone(1).volume, 100, "Expected Clone 1 of Körper to have volume 100");
  await t.runForSteps(46);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Körper").getCloneCount(), 0, "Expected Sprite Körper to have 0 clones");
  t.assert.equal(t.getSprite("Körper").layerOrder, 2, "Expected Sprite Körper to be at layer 2");
  t.assert.equal(t.getSprite("Punkt").layerOrder, 4, "Expected Sprite Punkt to be at layer 4");
  t.assert.equal(t.getSprite("Goodie").layerOrder, 3, "Expected Sprite Goodie to be at layer 3");
  t.assert.withinRange(t.getSprite("Kopf").x, 64.92214454993257, 5, "Expected Sprite Kopf to have x-position 64.92214454993257 +-5");
  t.assert.withinRange(t.getSprite("Kopf").y, 179, 5, "Expected Sprite Kopf to have y-position 179 +-5");
  t.assert.withinRange(t.getSprite("Körper").x, 61.92214454993256, 5, "Expected Sprite Körper to have x-position 61.92214454993256 +-5");
  t.assert.withinRange(t.getSprite("Körper").y, 179, 5, "Expected Sprite Körper to have y-position 179 +-5");
  t.assert.not(t.getSprite("Kopf").sayText, "Expected Sprite Kopf not to say anything");
  t.end();
}
const test3 = async function (t) {
  t.dragSprite('Punkt', 67.9894111011112, 101.66329352654208, null);
  await t.runForSteps(1);
  t.keyPress('left arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Körper").getClone(1).currentCostume, 0, "Expected Clone 1 of Körper to have costume 0");
  t.assert.equal(t.getSprite("Kopf").direction, -90, 1, "Expected Sprite Kopf to face in direction -90 +-1");
  t.assert.equal(t.getSprite("Körper").getClone(1).direction, 90, 1, "Expected Clone 1 of Körper to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Körper to be 0");
  t.assert.equal(t.getSprite("Körper").getClone(1).getLayerOrder(), 2, "Expected Clone 1 of Körper to be at layer 2");
  t.assert.withinRange(t.getSprite("Kopf").x, -3, 5, "Expected Sprite Kopf to have x-position -3 +-5");
  t.assert.withinRange(t.getSprite("Kopf").y, 100, 5, "Expected Sprite Kopf to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Körper").x, 0, 5, "Expected Sprite Körper to have x-position 0 +-5");
  t.assert.withinRange(t.getSprite("Körper").y, 100, 5, "Expected Sprite Körper to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).x, 0, 5, "Expected Clone 1 of Körper to have x-position 0 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).y, 100, 5, "Expected Clone 1 of Körper to have y-position 100 +-5");
  t.assert.not(t.getSprite("Körper").getClone(1).sayText, "Expected Clone 1 of Körper not to say anything");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).size, 90, 1, "Expected Clone 1 of Körper to have size 90 +-1");
  t.assert.ok(t.getSprite("Körper").getClone(1).visible, "Expected Clone 1 of Körper to be visible");
  t.assert.equal(t.getSprite("Körper").getClone(1).volume, 100, "Expected Clone 1 of Körper to have volume 100");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938990547',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938990547',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938990547',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938990547',
      type: 'standard',
  }
]
