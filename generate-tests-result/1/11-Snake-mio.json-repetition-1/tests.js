const test0 = async function (t) {
  t.dragSprite('Punkt', 78.69138584786255, 93.1426615943831, null);
  await t.runForSteps(1);
  await t.runForSteps(94);
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
  t.assert.withinRange(t.getSprite("Kopf").x, 233, 5, "Expected Sprite Kopf to have x-position 233 +-5");
  t.assert.withinRange(t.getSprite("Kopf").y, 100, 5, "Expected Sprite Kopf to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Körper").x, 233, 5, "Expected Sprite Körper to have x-position 233 +-5");
  t.assert.withinRange(t.getSprite("Körper").y, 100, 5, "Expected Sprite Körper to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).x, 233, 5, "Expected Clone 1 of Körper to have x-position 233 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).y, 100, 5, "Expected Clone 1 of Körper to have y-position 100 +-5");
  t.assert.equal(t.getSprite("Kopf").sayText, "Verloren!", "Expected Sprite Kopf to say Verloren!");
  t.assert.not(t.getSprite("Körper").getClone(1).sayText, "Expected Clone 1 of Körper not to say anything");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).size, 90, 1, "Expected Clone 1 of Körper to have size 90 +-1");
  t.assert.ok(t.getSprite("Körper").getClone(1).visible, "Expected Clone 1 of Körper to be visible");
  t.assert.equal(t.getSprite("Körper").getClone(1).volume, 100, "Expected Clone 1 of Körper to have volume 100");
  t.end();
}
const test1 = async function (t) {
  t.dragSprite('Punkt', 75, 100, null);
  await t.runForSteps(1);
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
  t.assert.withinRange(t.getSprite("Kopf").x, 6, 5, "Expected Sprite Kopf to have x-position 6 +-5");
  t.assert.withinRange(t.getSprite("Kopf").y, 97, 5, "Expected Sprite Kopf to have y-position 97 +-5");
  t.assert.withinRange(t.getSprite("Körper").x, 6, 5, "Expected Sprite Körper to have x-position 6 +-5");
  t.assert.withinRange(t.getSprite("Körper").y, 100, 5, "Expected Sprite Körper to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).x, 6, 5, "Expected Clone 1 of Körper to have x-position 6 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).y, 100, 5, "Expected Clone 1 of Körper to have y-position 100 +-5");
  t.assert.not(t.getSprite("Körper").getClone(1).sayText, "Expected Clone 1 of Körper not to say anything");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).size, 90, 1, "Expected Clone 1 of Körper to have size 90 +-1");
  t.assert.ok(t.getSprite("Körper").getClone(1).visible, "Expected Clone 1 of Körper to be visible");
  t.assert.equal(t.getSprite("Körper").getClone(1).volume, 100, "Expected Clone 1 of Körper to have volume 100");
  t.dragSprite('Kopf', -235.1854798147836, -160.3044025586981, null);
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
  t.assert.withinRange(t.getSprite("Kopf").x, -235.1854798147836, 5, "Expected Sprite Kopf to have x-position -235.1854798147836 +-5");
  t.assert.withinRange(t.getSprite("Kopf").y, -163.3044025586981, 5, "Expected Sprite Kopf to have y-position -163.3044025586981 +-5");
  t.assert.withinRange(t.getSprite("Körper").x, -235.1854798147836, 5, "Expected Sprite Körper to have x-position -235.1854798147836 +-5");
  t.assert.withinRange(t.getSprite("Körper").y, -160.3044025586981, 5, "Expected Sprite Körper to have y-position -160.3044025586981 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).x, -235.1854798147836, 5, "Expected Clone 1 of Körper to have x-position -235.1854798147836 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).y, -160.3044025586981, 5, "Expected Clone 1 of Körper to have y-position -160.3044025586981 +-5");
  t.assert.not(t.getSprite("Körper").getClone(1).sayText, "Expected Clone 1 of Körper not to say anything");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).size, 90, 1, "Expected Clone 1 of Körper to have size 90 +-1");
  t.assert.ok(t.getSprite("Körper").getClone(1).visible, "Expected Clone 1 of Körper to be visible");
  t.assert.equal(t.getSprite("Körper").getClone(1).volume, 100, "Expected Clone 1 of Körper to have volume 100");
  t.keyPress('left arrow', 1);
  await t.runForSteps(1);
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
  t.assert.withinRange(t.getSprite("Kopf").x, -233, 5, "Expected Sprite Kopf to have x-position -233 +-5");
  t.assert.withinRange(t.getSprite("Kopf").y, -166.3044025586981, 5, "Expected Sprite Kopf to have y-position -166.3044025586981 +-5");
  t.assert.withinRange(t.getSprite("Körper").x, -235.1854798147836, 5, "Expected Sprite Körper to have x-position -235.1854798147836 +-5");
  t.assert.withinRange(t.getSprite("Körper").y, -166.3044025586981, 5, "Expected Sprite Körper to have y-position -166.3044025586981 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).x, -235.1854798147836, 5, "Expected Clone 1 of Körper to have x-position -235.1854798147836 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).y, -166.3044025586981, 5, "Expected Clone 1 of Körper to have y-position -166.3044025586981 +-5");
  t.assert.equal(t.getSprite("Kopf").sayText, "Verloren!", "Expected Sprite Kopf to say Verloren!");
  t.assert.not(t.getSprite("Körper").getClone(1).sayText, "Expected Clone 1 of Körper not to say anything");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).size, 90, 1, "Expected Clone 1 of Körper to have size 90 +-1");
  t.assert.ok(t.getSprite("Körper").getClone(1).visible, "Expected Clone 1 of Körper to be visible");
  t.assert.equal(t.getSprite("Körper").getClone(1).volume, 100, "Expected Clone 1 of Körper to have volume 100");
  await t.runForSteps(81);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Körper").getCloneCount(), 0, "Expected Sprite Körper to have 0 clones");
  t.assert.equal(t.getSprite("Körper").layerOrder, 2, "Expected Sprite Körper to be at layer 2");
  t.assert.equal(t.getSprite("Punkt").layerOrder, 4, "Expected Sprite Punkt to be at layer 4");
  t.assert.equal(t.getSprite("Goodie").layerOrder, 3, "Expected Sprite Goodie to be at layer 3");
  t.assert.withinRange(t.getSprite("Körper").x, -233, 5, "Expected Sprite Körper to have x-position -233 +-5");
  t.assert.withinRange(t.getSprite("Körper").y, -166.3044025586981, 5, "Expected Sprite Körper to have y-position -166.3044025586981 +-5");
  t.assert.not(t.getSprite("Kopf").sayText, "Expected Sprite Kopf not to say anything");
  t.end();
}
const test2 = async function (t) {
  t.dragSprite('Punkt', 78.69138584786255, 93.1426615943831, null);
  await t.runForSteps(1);
  await t.runForSteps(94);
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
  t.assert.withinRange(t.getSprite("Kopf").x, 233, 5, "Expected Sprite Kopf to have x-position 233 +-5");
  t.assert.withinRange(t.getSprite("Kopf").y, 100, 5, "Expected Sprite Kopf to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Körper").x, 233, 5, "Expected Sprite Körper to have x-position 233 +-5");
  t.assert.withinRange(t.getSprite("Körper").y, 100, 5, "Expected Sprite Körper to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).x, 233, 5, "Expected Clone 1 of Körper to have x-position 233 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).y, 100, 5, "Expected Clone 1 of Körper to have y-position 100 +-5");
  t.assert.equal(t.getSprite("Kopf").sayText, "Verloren!", "Expected Sprite Kopf to say Verloren!");
  t.assert.not(t.getSprite("Körper").getClone(1).sayText, "Expected Clone 1 of Körper not to say anything");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).size, 90, 1, "Expected Clone 1 of Körper to have size 90 +-1");
  t.assert.ok(t.getSprite("Körper").getClone(1).visible, "Expected Clone 1 of Körper to be visible");
  t.assert.equal(t.getSprite("Körper").getClone(1).volume, 100, "Expected Clone 1 of Körper to have volume 100");
  await t.runForSteps(69);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Körper").getCloneCount(), 0, "Expected Sprite Körper to have 0 clones");
  t.assert.equal(t.getSprite("Körper").layerOrder, 2, "Expected Sprite Körper to be at layer 2");
  t.assert.equal(t.getSprite("Punkt").layerOrder, 4, "Expected Sprite Punkt to be at layer 4");
  t.assert.equal(t.getSprite("Goodie").layerOrder, 3, "Expected Sprite Goodie to be at layer 3");
  t.assert.not(t.getSprite("Kopf").sayText, "Expected Sprite Kopf not to say anything");
  t.end();
}
const test3 = async function (t) {
  t.dragSprite('Punkt', 75, 100, null);
  await t.runForSteps(1);
  await t.runForSteps(8);
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
  t.assert.withinRange(t.getSprite("Kopf").x, 30, 5, "Expected Sprite Kopf to have x-position 30 +-5");
  t.assert.withinRange(t.getSprite("Kopf").y, 100, 5, "Expected Sprite Kopf to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Körper").x, 27, 5, "Expected Sprite Körper to have x-position 27 +-5");
  t.assert.withinRange(t.getSprite("Körper").y, 100, 5, "Expected Sprite Körper to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).x, 27, 5, "Expected Clone 1 of Körper to have x-position 27 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).y, 100, 5, "Expected Clone 1 of Körper to have y-position 100 +-5");
  t.assert.not(t.getSprite("Körper").getClone(1).sayText, "Expected Clone 1 of Körper not to say anything");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).size, 90, 1, "Expected Clone 1 of Körper to have size 90 +-1");
  t.assert.ok(t.getSprite("Körper").getClone(1).visible, "Expected Clone 1 of Körper to be visible");
  t.assert.equal(t.getSprite("Körper").getClone(1).volume, 100, "Expected Clone 1 of Körper to have volume 100");
  t.keyPress('left arrow', 1);
  await t.runForSteps(1);
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
  t.assert.withinRange(t.getSprite("Körper").x, 33, 5, "Expected Sprite Körper to have x-position 33 +-5");
  t.assert.withinRange(t.getSprite("Körper").y, 100, 5, "Expected Sprite Körper to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).x, 33, 5, "Expected Clone 1 of Körper to have x-position 33 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).y, 100, 5, "Expected Clone 1 of Körper to have y-position 100 +-5");
  t.assert.not(t.getSprite("Körper").getClone(1).sayText, "Expected Clone 1 of Körper not to say anything");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).size, 90, 1, "Expected Clone 1 of Körper to have size 90 +-1");
  t.assert.ok(t.getSprite("Körper").getClone(1).visible, "Expected Clone 1 of Körper to be visible");
  t.assert.equal(t.getSprite("Körper").getClone(1).volume, 100, "Expected Clone 1 of Körper to have volume 100");
  await t.runForSteps(61);
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
  t.assert.withinRange(t.getSprite("Kopf").x, -156, 5, "Expected Sprite Kopf to have x-position -156 +-5");
  t.assert.withinRange(t.getSprite("Kopf").y, 100, 5, "Expected Sprite Kopf to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Körper").x, -153, 5, "Expected Sprite Körper to have x-position -153 +-5");
  t.assert.withinRange(t.getSprite("Körper").y, 100, 5, "Expected Sprite Körper to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).x, -153, 5, "Expected Clone 1 of Körper to have x-position -153 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).y, 100, 5, "Expected Clone 1 of Körper to have y-position 100 +-5");
  t.assert.not(t.getSprite("Körper").getClone(1).sayText, "Expected Clone 1 of Körper not to say anything");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).size, 90, 1, "Expected Clone 1 of Körper to have size 90 +-1");
  t.assert.ok(t.getSprite("Körper").getClone(1).visible, "Expected Clone 1 of Körper to be visible");
  t.assert.equal(t.getSprite("Körper").getClone(1).volume, 100, "Expected Clone 1 of Körper to have volume 100");
  t.dragSprite('Punkt', -163.0355277976074, 92.52647196301236, null);
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
  t.assert.withinRange(t.getSprite("Kopf").x, -159, 5, "Expected Sprite Kopf to have x-position -159 +-5");
  t.assert.withinRange(t.getSprite("Kopf").y, 100, 5, "Expected Sprite Kopf to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Körper").x, -156, 5, "Expected Sprite Körper to have x-position -156 +-5");
  t.assert.withinRange(t.getSprite("Körper").y, 100, 5, "Expected Sprite Körper to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Punkt").x, -204, 5, "Expected Sprite Punkt to have x-position -204 +-5");
  t.assert.withinRange(t.getSprite("Punkt").y, -127, 5, "Expected Sprite Punkt to have y-position -127 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).x, -156, 5, "Expected Clone 1 of Körper to have x-position -156 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).y, 100, 5, "Expected Clone 1 of Körper to have y-position 100 +-5");
  t.assert.not(t.getSprite("Körper").getClone(1).sayText, "Expected Clone 1 of Körper not to say anything");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).size, 90, 1, "Expected Clone 1 of Körper to have size 90 +-1");
  t.assert.ok(t.getSprite("Körper").getClone(1).visible, "Expected Clone 1 of Körper to be visible");
  t.assert.equal(t.getSprite("Körper").getClone(1).volume, 100, "Expected Clone 1 of Körper to have volume 100");
  t.end();
}
const test4 = async function (t) {
  t.dragSprite('Punkt', 78.69138584786255, 93.1426615943831, null);
  await t.runForSteps(1);
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
  t.assert.withinRange(t.getSprite("Kopf").x, 6, 5, "Expected Sprite Kopf to have x-position 6 +-5");
  t.assert.withinRange(t.getSprite("Kopf").y, 106, 5, "Expected Sprite Kopf to have y-position 106 +-5");
  t.assert.withinRange(t.getSprite("Körper").x, 6, 5, "Expected Sprite Körper to have x-position 6 +-5");
  t.assert.withinRange(t.getSprite("Körper").y, 103, 5, "Expected Sprite Körper to have y-position 103 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).x, 6, 5, "Expected Clone 1 of Körper to have x-position 6 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).y, 103, 5, "Expected Clone 1 of Körper to have y-position 103 +-5");
  t.assert.not(t.getSprite("Körper").getClone(1).sayText, "Expected Clone 1 of Körper not to say anything");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).size, 90, 1, "Expected Clone 1 of Körper to have size 90 +-1");
  t.assert.ok(t.getSprite("Körper").getClone(1).visible, "Expected Clone 1 of Körper to be visible");
  t.assert.equal(t.getSprite("Körper").getClone(1).volume, 100, "Expected Clone 1 of Körper to have volume 100");
  t.end();
}
const test5 = async function (t) {
  t.dragSprite('Punkt', 75, 100, null);
  await t.runForSteps(1);
  t.keyPress('right arrow', 2);
  await t.runForSteps(2);
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
  t.assert.withinRange(t.getSprite("Kopf").x, 12, 5, "Expected Sprite Kopf to have x-position 12 +-5");
  t.assert.withinRange(t.getSprite("Kopf").y, 100, 5, "Expected Sprite Kopf to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Körper").x, 9, 5, "Expected Sprite Körper to have x-position 9 +-5");
  t.assert.withinRange(t.getSprite("Körper").y, 100, 5, "Expected Sprite Körper to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Körper").getClone(1).x, 9, 5, "Expected Clone 1 of Körper to have x-position 9 +-5");
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
      seed: '1687849340600',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849340600',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849340600',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849340600',
      type: 'standard',
  },
  {
      test: test4,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849340600',
      type: 'standard',
  },
  {
      test: test5,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849340600',
      type: 'standard',
  }
]
