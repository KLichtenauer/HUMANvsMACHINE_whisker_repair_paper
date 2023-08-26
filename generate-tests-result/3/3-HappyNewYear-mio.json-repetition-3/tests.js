const test0 = async function (t) {
  await t.runForSteps(60);
  await t.runForSteps(1);
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(60);
  await t.runForSteps(1);
  await t.runForSteps(100);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Luftballon").getClone(1).currentCostume, 0, "Expected Clone 1 of Luftballon to have costume 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).currentCostume, 2, "Expected Clone 6 of Luftballon to have costume 2");
  t.assert.equal(t.getSprite("Luftballon").getClone(11).currentCostume, 1, "Expected Clone 11 of Luftballon to have costume 1");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).currentCostume, 0, "Expected Clone 16 of Luftballon to have costume 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(22).currentCostume, 2, "Expected Clone 22 of Luftballon to have costume 2");
  t.assert.equal(t.getSprite("Luftballon").getClone(23).currentCostume, 2, "Expected Clone 23 of Luftballon to have costume 2");
  t.assert.equal(t.getSprite("Luftballon").getCloneCount(), 23, "Expected Sprite Luftballon to have 23 clones");
  t.assert.equal(t.getSprite("Luftballon").getClone(1).direction, 90, 1, "Expected Clone 1 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).direction, 90, 1, "Expected Clone 6 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(11).direction, 90, 1, "Expected Clone 11 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).direction, 90, 1, "Expected Clone 16 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(22).direction, 90, 1, "Expected Clone 22 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(23).direction, 90, 1, "Expected Clone 23 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).effects.color, 0, "Expected effect color of Clone 6 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).effects.fisheye, 0, "Expected effect fisheye of Clone 6 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).effects.whirl, 0, "Expected effect whirl of Clone 6 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).effects.pixelate, 0, "Expected effect pixelate of Clone 6 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).effects.mosaic, 0, "Expected effect mosaic of Clone 6 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).effects.brightness, 0, "Expected effect brightness of Clone 6 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).effects.ghost, 0, "Expected effect ghost of Clone 6 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(11).effects.color, 0, "Expected effect color of Clone 11 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(11).effects.fisheye, 0, "Expected effect fisheye of Clone 11 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(11).effects.whirl, 0, "Expected effect whirl of Clone 11 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(11).effects.pixelate, 0, "Expected effect pixelate of Clone 11 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(11).effects.mosaic, 0, "Expected effect mosaic of Clone 11 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(11).effects.brightness, 0, "Expected effect brightness of Clone 11 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(11).effects.ghost, 0, "Expected effect ghost of Clone 11 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).effects.color, 0, "Expected effect color of Clone 16 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).effects.fisheye, 0, "Expected effect fisheye of Clone 16 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).effects.whirl, 0, "Expected effect whirl of Clone 16 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).effects.pixelate, 0, "Expected effect pixelate of Clone 16 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).effects.mosaic, 0, "Expected effect mosaic of Clone 16 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).effects.brightness, 0, "Expected effect brightness of Clone 16 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).effects.ghost, 0, "Expected effect ghost of Clone 16 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(22).effects.color, 0, "Expected effect color of Clone 22 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(22).effects.fisheye, 0, "Expected effect fisheye of Clone 22 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(22).effects.whirl, 0, "Expected effect whirl of Clone 22 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(22).effects.pixelate, 0, "Expected effect pixelate of Clone 22 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(22).effects.mosaic, 0, "Expected effect mosaic of Clone 22 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(22).effects.brightness, 0, "Expected effect brightness of Clone 22 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(22).effects.ghost, 0, "Expected effect ghost of Clone 22 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(23).effects.color, 0, "Expected effect color of Clone 23 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(23).effects.fisheye, 0, "Expected effect fisheye of Clone 23 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(23).effects.whirl, 0, "Expected effect whirl of Clone 23 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(23).effects.pixelate, 0, "Expected effect pixelate of Clone 23 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(23).effects.mosaic, 0, "Expected effect mosaic of Clone 23 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(23).effects.brightness, 0, "Expected effect brightness of Clone 23 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(23).effects.ghost, 0, "Expected effect ghost of Clone 23 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Einhorn").layerOrder, 26, "Expected Sprite Einhorn to be at layer 26");
  t.assert.equal(t.getSprite("Luftballon").layerOrder, 24, "Expected Sprite Luftballon to be at layer 24");
  t.assert.equal(t.getSprite("Luftballon").getClone(1).getLayerOrder(), 19, "Expected Clone 1 of Luftballon to be at layer 19");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).getLayerOrder(), 20, "Expected Clone 6 of Luftballon to be at layer 20");
  t.assert.equal(t.getSprite("Luftballon").getClone(11).getLayerOrder(), 21, "Expected Clone 11 of Luftballon to be at layer 21");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).getLayerOrder(), 22, "Expected Clone 16 of Luftballon to be at layer 22");
  t.assert.equal(t.getSprite("Luftballon").getClone(22).getLayerOrder(), 23, "Expected Clone 22 of Luftballon to be at layer 23");
  t.assert.equal(t.getSprite("Luftballon").getClone(23).getLayerOrder(), 6, "Expected Clone 23 of Luftballon to be at layer 6");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(1).x, -110, 5, "Expected Clone 1 of Luftballon to have x-position -110 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(1).y, -121, 5, "Expected Clone 1 of Luftballon to have y-position -121 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(6).x, -226, 5, "Expected Clone 6 of Luftballon to have x-position -226 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(6).y, -79, 5, "Expected Clone 6 of Luftballon to have y-position -79 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(11).x, -187, 5, "Expected Clone 11 of Luftballon to have x-position -187 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(11).y, 27, 5, "Expected Clone 11 of Luftballon to have y-position 27 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(16).x, 71, 5, "Expected Clone 16 of Luftballon to have x-position 71 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(16).y, 62, 5, "Expected Clone 16 of Luftballon to have y-position 62 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(22).x, -7, 5, "Expected Clone 22 of Luftballon to have x-position -7 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(22).y, -75, 5, "Expected Clone 22 of Luftballon to have y-position -75 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(23).x, -28, 5, "Expected Clone 23 of Luftballon to have x-position -28 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(23).y, 73, 5, "Expected Clone 23 of Luftballon to have y-position 73 +-5");
  t.assert.equal(t.getSprite("Einhorn").sayText, "Frohes neues Jahr!", "Expected Sprite Einhorn to say Frohes neues Jahr!");
  t.assert.not(t.getSprite("Luftballon").getClone(1).sayText, "Expected Clone 1 of Luftballon not to say anything");
  t.assert.not(t.getSprite("Luftballon").getClone(6).sayText, "Expected Clone 6 of Luftballon not to say anything");
  t.assert.not(t.getSprite("Luftballon").getClone(11).sayText, "Expected Clone 11 of Luftballon not to say anything");
  t.assert.not(t.getSprite("Luftballon").getClone(16).sayText, "Expected Clone 16 of Luftballon not to say anything");
  t.assert.not(t.getSprite("Luftballon").getClone(22).sayText, "Expected Clone 22 of Luftballon not to say anything");
  t.assert.not(t.getSprite("Luftballon").getClone(23).sayText, "Expected Clone 23 of Luftballon not to say anything");
  t.assert.withinRange(t.getSprite("Einhorn").size, 180, 1, "Expected Sprite Einhorn to have size 180 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(1).size, 50, 1, "Expected Clone 1 of Luftballon to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(6).size, 50, 1, "Expected Clone 6 of Luftballon to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(11).size, 50, 1, "Expected Clone 11 of Luftballon to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(16).size, 50, 1, "Expected Clone 16 of Luftballon to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(22).size, 50, 1, "Expected Clone 22 of Luftballon to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(23).size, 50, 1, "Expected Clone 23 of Luftballon to have size 50 +-1");
  t.assert.ok(t.getSprite("Luftballon").getClone(1).visible, "Expected Clone 1 of Luftballon to be visible");
  t.assert.ok(t.getSprite("Luftballon").getClone(6).visible, "Expected Clone 6 of Luftballon to be visible");
  t.assert.ok(t.getSprite("Luftballon").getClone(11).visible, "Expected Clone 11 of Luftballon to be visible");
  t.assert.ok(t.getSprite("Luftballon").getClone(16).visible, "Expected Clone 16 of Luftballon to be visible");
  t.assert.ok(t.getSprite("Luftballon").getClone(22).visible, "Expected Clone 22 of Luftballon to be visible");
  t.assert.ok(t.getSprite("Luftballon").getClone(23).visible, "Expected Clone 23 of Luftballon to be visible");
  t.assert.equal(t.getSprite("Luftballon").getClone(1).volume, 100, "Expected Clone 1 of Luftballon to have volume 100");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).volume, 100, "Expected Clone 6 of Luftballon to have volume 100");
  t.assert.equal(t.getSprite("Luftballon").getClone(11).volume, 100, "Expected Clone 11 of Luftballon to have volume 100");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).volume, 100, "Expected Clone 16 of Luftballon to have volume 100");
  t.assert.equal(t.getSprite("Luftballon").getClone(22).volume, 100, "Expected Clone 22 of Luftballon to have volume 100");
  t.assert.equal(t.getSprite("Luftballon").getClone(23).volume, 100, "Expected Clone 23 of Luftballon to have volume 100");
  t.end();
}
const test2 = async function (t) {
  await t.runForSteps(60);
  await t.runForSteps(1);
  await t.runForSteps(100);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Luftballon").getClone(1).currentCostume, 0, "Expected Clone 1 of Luftballon to have costume 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).currentCostume, 2, "Expected Clone 6 of Luftballon to have costume 2");
  t.assert.equal(t.getSprite("Luftballon").getClone(11).currentCostume, 1, "Expected Clone 11 of Luftballon to have costume 1");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).currentCostume, 0, "Expected Clone 16 of Luftballon to have costume 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(22).currentCostume, 2, "Expected Clone 22 of Luftballon to have costume 2");
  t.assert.equal(t.getSprite("Luftballon").getClone(23).currentCostume, 2, "Expected Clone 23 of Luftballon to have costume 2");
  t.assert.equal(t.getSprite("Luftballon").getCloneCount(), 23, "Expected Sprite Luftballon to have 23 clones");
  t.assert.equal(t.getSprite("Luftballon").getClone(1).direction, 90, 1, "Expected Clone 1 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).direction, 90, 1, "Expected Clone 6 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(11).direction, 90, 1, "Expected Clone 11 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).direction, 90, 1, "Expected Clone 16 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(22).direction, 90, 1, "Expected Clone 22 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(23).direction, 90, 1, "Expected Clone 23 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).effects.color, 0, "Expected effect color of Clone 6 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).effects.fisheye, 0, "Expected effect fisheye of Clone 6 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).effects.whirl, 0, "Expected effect whirl of Clone 6 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).effects.pixelate, 0, "Expected effect pixelate of Clone 6 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).effects.mosaic, 0, "Expected effect mosaic of Clone 6 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).effects.brightness, 0, "Expected effect brightness of Clone 6 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).effects.ghost, 0, "Expected effect ghost of Clone 6 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(11).effects.color, 0, "Expected effect color of Clone 11 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(11).effects.fisheye, 0, "Expected effect fisheye of Clone 11 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(11).effects.whirl, 0, "Expected effect whirl of Clone 11 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(11).effects.pixelate, 0, "Expected effect pixelate of Clone 11 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(11).effects.mosaic, 0, "Expected effect mosaic of Clone 11 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(11).effects.brightness, 0, "Expected effect brightness of Clone 11 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(11).effects.ghost, 0, "Expected effect ghost of Clone 11 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).effects.color, 0, "Expected effect color of Clone 16 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).effects.fisheye, 0, "Expected effect fisheye of Clone 16 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).effects.whirl, 0, "Expected effect whirl of Clone 16 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).effects.pixelate, 0, "Expected effect pixelate of Clone 16 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).effects.mosaic, 0, "Expected effect mosaic of Clone 16 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).effects.brightness, 0, "Expected effect brightness of Clone 16 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).effects.ghost, 0, "Expected effect ghost of Clone 16 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(22).effects.color, 0, "Expected effect color of Clone 22 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(22).effects.fisheye, 0, "Expected effect fisheye of Clone 22 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(22).effects.whirl, 0, "Expected effect whirl of Clone 22 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(22).effects.pixelate, 0, "Expected effect pixelate of Clone 22 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(22).effects.mosaic, 0, "Expected effect mosaic of Clone 22 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(22).effects.brightness, 0, "Expected effect brightness of Clone 22 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(22).effects.ghost, 0, "Expected effect ghost of Clone 22 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(23).effects.color, 0, "Expected effect color of Clone 23 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(23).effects.fisheye, 0, "Expected effect fisheye of Clone 23 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(23).effects.whirl, 0, "Expected effect whirl of Clone 23 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(23).effects.pixelate, 0, "Expected effect pixelate of Clone 23 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(23).effects.mosaic, 0, "Expected effect mosaic of Clone 23 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(23).effects.brightness, 0, "Expected effect brightness of Clone 23 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(23).effects.ghost, 0, "Expected effect ghost of Clone 23 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Einhorn").layerOrder, 26, "Expected Sprite Einhorn to be at layer 26");
  t.assert.equal(t.getSprite("Luftballon").layerOrder, 24, "Expected Sprite Luftballon to be at layer 24");
  t.assert.equal(t.getSprite("Luftballon").getClone(1).getLayerOrder(), 19, "Expected Clone 1 of Luftballon to be at layer 19");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).getLayerOrder(), 20, "Expected Clone 6 of Luftballon to be at layer 20");
  t.assert.equal(t.getSprite("Luftballon").getClone(11).getLayerOrder(), 21, "Expected Clone 11 of Luftballon to be at layer 21");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).getLayerOrder(), 22, "Expected Clone 16 of Luftballon to be at layer 22");
  t.assert.equal(t.getSprite("Luftballon").getClone(22).getLayerOrder(), 23, "Expected Clone 22 of Luftballon to be at layer 23");
  t.assert.equal(t.getSprite("Luftballon").getClone(23).getLayerOrder(), 6, "Expected Clone 23 of Luftballon to be at layer 6");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(1).x, -110, 5, "Expected Clone 1 of Luftballon to have x-position -110 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(1).y, -121, 5, "Expected Clone 1 of Luftballon to have y-position -121 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(6).x, -226, 5, "Expected Clone 6 of Luftballon to have x-position -226 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(6).y, -79, 5, "Expected Clone 6 of Luftballon to have y-position -79 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(11).x, -187, 5, "Expected Clone 11 of Luftballon to have x-position -187 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(11).y, 27, 5, "Expected Clone 11 of Luftballon to have y-position 27 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(16).x, 71, 5, "Expected Clone 16 of Luftballon to have x-position 71 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(16).y, 62, 5, "Expected Clone 16 of Luftballon to have y-position 62 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(22).x, -7, 5, "Expected Clone 22 of Luftballon to have x-position -7 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(22).y, -75, 5, "Expected Clone 22 of Luftballon to have y-position -75 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(23).x, -28, 5, "Expected Clone 23 of Luftballon to have x-position -28 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(23).y, 73, 5, "Expected Clone 23 of Luftballon to have y-position 73 +-5");
  t.assert.equal(t.getSprite("Einhorn").sayText, "Frohes neues Jahr!", "Expected Sprite Einhorn to say Frohes neues Jahr!");
  t.assert.not(t.getSprite("Luftballon").getClone(1).sayText, "Expected Clone 1 of Luftballon not to say anything");
  t.assert.not(t.getSprite("Luftballon").getClone(6).sayText, "Expected Clone 6 of Luftballon not to say anything");
  t.assert.not(t.getSprite("Luftballon").getClone(11).sayText, "Expected Clone 11 of Luftballon not to say anything");
  t.assert.not(t.getSprite("Luftballon").getClone(16).sayText, "Expected Clone 16 of Luftballon not to say anything");
  t.assert.not(t.getSprite("Luftballon").getClone(22).sayText, "Expected Clone 22 of Luftballon not to say anything");
  t.assert.not(t.getSprite("Luftballon").getClone(23).sayText, "Expected Clone 23 of Luftballon not to say anything");
  t.assert.withinRange(t.getSprite("Einhorn").size, 180, 1, "Expected Sprite Einhorn to have size 180 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(1).size, 50, 1, "Expected Clone 1 of Luftballon to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(6).size, 50, 1, "Expected Clone 6 of Luftballon to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(11).size, 50, 1, "Expected Clone 11 of Luftballon to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(16).size, 50, 1, "Expected Clone 16 of Luftballon to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(22).size, 50, 1, "Expected Clone 22 of Luftballon to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(23).size, 50, 1, "Expected Clone 23 of Luftballon to have size 50 +-1");
  t.assert.ok(t.getSprite("Luftballon").getClone(1).visible, "Expected Clone 1 of Luftballon to be visible");
  t.assert.ok(t.getSprite("Luftballon").getClone(6).visible, "Expected Clone 6 of Luftballon to be visible");
  t.assert.ok(t.getSprite("Luftballon").getClone(11).visible, "Expected Clone 11 of Luftballon to be visible");
  t.assert.ok(t.getSprite("Luftballon").getClone(16).visible, "Expected Clone 16 of Luftballon to be visible");
  t.assert.ok(t.getSprite("Luftballon").getClone(22).visible, "Expected Clone 22 of Luftballon to be visible");
  t.assert.ok(t.getSprite("Luftballon").getClone(23).visible, "Expected Clone 23 of Luftballon to be visible");
  t.assert.equal(t.getSprite("Luftballon").getClone(1).volume, 100, "Expected Clone 1 of Luftballon to have volume 100");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).volume, 100, "Expected Clone 6 of Luftballon to have volume 100");
  t.assert.equal(t.getSprite("Luftballon").getClone(11).volume, 100, "Expected Clone 11 of Luftballon to have volume 100");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).volume, 100, "Expected Clone 16 of Luftballon to have volume 100");
  t.assert.equal(t.getSprite("Luftballon").getClone(22).volume, 100, "Expected Clone 22 of Luftballon to have volume 100");
  t.assert.equal(t.getSprite("Luftballon").getClone(23).volume, 100, "Expected Clone 23 of Luftballon to have volume 100");
  await t.runForSteps(48);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Luftballon").getClone(1).currentCostume, 0, "Expected Clone 1 of Luftballon to have costume 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(8).currentCostume, 2, "Expected Clone 8 of Luftballon to have costume 2");
  t.assert.equal(t.getSprite("Luftballon").getClone(15).currentCostume, 1, "Expected Clone 15 of Luftballon to have costume 1");
  t.assert.equal(t.getSprite("Luftballon").getClone(22).currentCostume, 0, "Expected Clone 22 of Luftballon to have costume 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(29).currentCostume, 2, "Expected Clone 29 of Luftballon to have costume 2");
  t.assert.equal(t.getSprite("Luftballon").getClone(30).currentCostume, 2, "Expected Clone 30 of Luftballon to have costume 2");
  t.assert.equal(t.getSprite("Luftballon").getCloneCount(), 30, "Expected Sprite Luftballon to have 30 clones");
  t.assert.equal(t.getSprite("Luftballon").getClone(1).direction, 90, 1, "Expected Clone 1 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(8).direction, 90, 1, "Expected Clone 8 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(15).direction, 90, 1, "Expected Clone 15 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(22).direction, 90, 1, "Expected Clone 22 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(29).direction, 90, 1, "Expected Clone 29 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(30).direction, 90, 1, "Expected Clone 30 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(8).effects.color, 0, "Expected effect color of Clone 8 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(8).effects.fisheye, 0, "Expected effect fisheye of Clone 8 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(8).effects.whirl, 0, "Expected effect whirl of Clone 8 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(8).effects.pixelate, 0, "Expected effect pixelate of Clone 8 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(8).effects.mosaic, 0, "Expected effect mosaic of Clone 8 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(8).effects.brightness, 0, "Expected effect brightness of Clone 8 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(8).effects.ghost, 0, "Expected effect ghost of Clone 8 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(15).effects.color, 0, "Expected effect color of Clone 15 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(15).effects.fisheye, 0, "Expected effect fisheye of Clone 15 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(15).effects.whirl, 0, "Expected effect whirl of Clone 15 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(15).effects.pixelate, 0, "Expected effect pixelate of Clone 15 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(15).effects.mosaic, 0, "Expected effect mosaic of Clone 15 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(15).effects.brightness, 0, "Expected effect brightness of Clone 15 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(15).effects.ghost, 0, "Expected effect ghost of Clone 15 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(22).effects.color, 0, "Expected effect color of Clone 22 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(22).effects.fisheye, 0, "Expected effect fisheye of Clone 22 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(22).effects.whirl, 0, "Expected effect whirl of Clone 22 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(22).effects.pixelate, 0, "Expected effect pixelate of Clone 22 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(22).effects.mosaic, 0, "Expected effect mosaic of Clone 22 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(22).effects.brightness, 0, "Expected effect brightness of Clone 22 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(22).effects.ghost, 0, "Expected effect ghost of Clone 22 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(29).effects.color, 0, "Expected effect color of Clone 29 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(29).effects.fisheye, 0, "Expected effect fisheye of Clone 29 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(29).effects.whirl, 0, "Expected effect whirl of Clone 29 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(29).effects.pixelate, 0, "Expected effect pixelate of Clone 29 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(29).effects.mosaic, 0, "Expected effect mosaic of Clone 29 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(29).effects.brightness, 0, "Expected effect brightness of Clone 29 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(29).effects.ghost, 0, "Expected effect ghost of Clone 29 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(30).effects.color, 0, "Expected effect color of Clone 30 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(30).effects.fisheye, 0, "Expected effect fisheye of Clone 30 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(30).effects.whirl, 0, "Expected effect whirl of Clone 30 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(30).effects.pixelate, 0, "Expected effect pixelate of Clone 30 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(30).effects.mosaic, 0, "Expected effect mosaic of Clone 30 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(30).effects.brightness, 0, "Expected effect brightness of Clone 30 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(30).effects.ghost, 0, "Expected effect ghost of Clone 30 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Einhorn").layerOrder, 33, "Expected Sprite Einhorn to be at layer 33");
  t.assert.equal(t.getSprite("Luftballon").layerOrder, 31, "Expected Sprite Luftballon to be at layer 31");
  t.assert.equal(t.getSprite("Luftballon").getClone(1).getLayerOrder(), 26, "Expected Clone 1 of Luftballon to be at layer 26");
  t.assert.equal(t.getSprite("Luftballon").getClone(8).getLayerOrder(), 27, "Expected Clone 8 of Luftballon to be at layer 27");
  t.assert.equal(t.getSprite("Luftballon").getClone(15).getLayerOrder(), 28, "Expected Clone 15 of Luftballon to be at layer 28");
  t.assert.equal(t.getSprite("Luftballon").getClone(22).getLayerOrder(), 29, "Expected Clone 22 of Luftballon to be at layer 29");
  t.assert.equal(t.getSprite("Luftballon").getClone(29).getLayerOrder(), 30, "Expected Clone 29 of Luftballon to be at layer 30");
  t.assert.equal(t.getSprite("Luftballon").getClone(30).getLayerOrder(), 13, "Expected Clone 30 of Luftballon to be at layer 13");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(1).x, -156, 5, "Expected Clone 1 of Luftballon to have x-position -156 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(1).y, -25, 5, "Expected Clone 1 of Luftballon to have y-position -25 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(8).x, 129, 5, "Expected Clone 8 of Luftballon to have x-position 129 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(8).y, 77, 5, "Expected Clone 8 of Luftballon to have y-position 77 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(15).x, 76, 5, "Expected Clone 15 of Luftballon to have x-position 76 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(15).y, 98, 5, "Expected Clone 15 of Luftballon to have y-position 98 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(22).x, 91, 5, "Expected Clone 22 of Luftballon to have x-position 91 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(22).y, 109, 5, "Expected Clone 22 of Luftballon to have y-position 109 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(29).x, 151, 5, "Expected Clone 29 of Luftballon to have x-position 151 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(29).y, 67, 5, "Expected Clone 29 of Luftballon to have y-position 67 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(30).x, -140, 5, "Expected Clone 30 of Luftballon to have x-position -140 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(30).y, 41, 5, "Expected Clone 30 of Luftballon to have y-position 41 +-5");
  t.assert.not(t.getSprite("Luftballon").getClone(1).sayText, "Expected Clone 1 of Luftballon not to say anything");
  t.assert.not(t.getSprite("Luftballon").getClone(8).sayText, "Expected Clone 8 of Luftballon not to say anything");
  t.assert.not(t.getSprite("Luftballon").getClone(15).sayText, "Expected Clone 15 of Luftballon not to say anything");
  t.assert.not(t.getSprite("Luftballon").getClone(22).sayText, "Expected Clone 22 of Luftballon not to say anything");
  t.assert.not(t.getSprite("Luftballon").getClone(29).sayText, "Expected Clone 29 of Luftballon not to say anything");
  t.assert.not(t.getSprite("Luftballon").getClone(30).sayText, "Expected Clone 30 of Luftballon not to say anything");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(1).size, 50, 1, "Expected Clone 1 of Luftballon to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(8).size, 50, 1, "Expected Clone 8 of Luftballon to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(15).size, 50, 1, "Expected Clone 15 of Luftballon to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(22).size, 50, 1, "Expected Clone 22 of Luftballon to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(29).size, 50, 1, "Expected Clone 29 of Luftballon to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(30).size, 50, 1, "Expected Clone 30 of Luftballon to have size 50 +-1");
  t.assert.not(t.getSprite("Luftballon").visible, "Expected Sprite Luftballon not to be visible");
  t.assert.ok(t.getSprite("Luftballon").getClone(1).visible, "Expected Clone 1 of Luftballon to be visible");
  t.assert.ok(t.getSprite("Luftballon").getClone(8).visible, "Expected Clone 8 of Luftballon to be visible");
  t.assert.ok(t.getSprite("Luftballon").getClone(15).visible, "Expected Clone 15 of Luftballon to be visible");
  t.assert.ok(t.getSprite("Luftballon").getClone(22).visible, "Expected Clone 22 of Luftballon to be visible");
  t.assert.ok(t.getSprite("Luftballon").getClone(29).visible, "Expected Clone 29 of Luftballon to be visible");
  t.assert.ok(t.getSprite("Luftballon").getClone(30).visible, "Expected Clone 30 of Luftballon to be visible");
  t.assert.equal(t.getSprite("Luftballon").getClone(1).volume, 100, "Expected Clone 1 of Luftballon to have volume 100");
  t.assert.equal(t.getSprite("Luftballon").getClone(8).volume, 100, "Expected Clone 8 of Luftballon to have volume 100");
  t.assert.equal(t.getSprite("Luftballon").getClone(15).volume, 100, "Expected Clone 15 of Luftballon to have volume 100");
  t.assert.equal(t.getSprite("Luftballon").getClone(22).volume, 100, "Expected Clone 22 of Luftballon to have volume 100");
  t.assert.equal(t.getSprite("Luftballon").getClone(29).volume, 100, "Expected Clone 29 of Luftballon to have volume 100");
  t.assert.equal(t.getSprite("Luftballon").getClone(30).volume, 100, "Expected Clone 30 of Luftballon to have volume 100");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936640618',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936640618',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936640618',
      type: 'standard',
  }
]
