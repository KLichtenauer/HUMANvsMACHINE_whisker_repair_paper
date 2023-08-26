const test0 = async function (t) {
  await t.runForSteps(28);
  await t.runForSteps(1);
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(28);
  await t.runForSteps(1);
  await t.runForSteps(25);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Luftballon").getClone(1).currentCostume, 0, "Expected Clone 1 of Luftballon to have costume 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(2).currentCostume, 2, "Expected Clone 2 of Luftballon to have costume 2");
  t.assert.equal(t.getSprite("Luftballon").getClone(4).currentCostume, 1, "Expected Clone 4 of Luftballon to have costume 1");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).currentCostume, 0, "Expected Clone 6 of Luftballon to have costume 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(7).currentCostume, 2, "Expected Clone 7 of Luftballon to have costume 2");
  t.assert.equal(t.getSprite("Luftballon").getCloneCount(), 7, "Expected Sprite Luftballon to have 7 clones");
  t.assert.equal(t.getSprite("Luftballon").getClone(2).direction, 90, 1, "Expected Clone 2 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(4).direction, 90, 1, "Expected Clone 4 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).direction, 90, 1, "Expected Clone 6 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(7).direction, 90, 1, "Expected Clone 7 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(2).effects.color, 0, "Expected effect color of Clone 2 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(2).effects.fisheye, 0, "Expected effect fisheye of Clone 2 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(2).effects.whirl, 0, "Expected effect whirl of Clone 2 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(2).effects.pixelate, 0, "Expected effect pixelate of Clone 2 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(2).effects.mosaic, 0, "Expected effect mosaic of Clone 2 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(2).effects.brightness, 0, "Expected effect brightness of Clone 2 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(2).effects.ghost, 0, "Expected effect ghost of Clone 2 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(4).effects.color, 0, "Expected effect color of Clone 4 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(4).effects.fisheye, 0, "Expected effect fisheye of Clone 4 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(4).effects.whirl, 0, "Expected effect whirl of Clone 4 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(4).effects.pixelate, 0, "Expected effect pixelate of Clone 4 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(4).effects.mosaic, 0, "Expected effect mosaic of Clone 4 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(4).effects.brightness, 0, "Expected effect brightness of Clone 4 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(4).effects.ghost, 0, "Expected effect ghost of Clone 4 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).effects.color, 0, "Expected effect color of Clone 6 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).effects.fisheye, 0, "Expected effect fisheye of Clone 6 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).effects.whirl, 0, "Expected effect whirl of Clone 6 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).effects.pixelate, 0, "Expected effect pixelate of Clone 6 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).effects.mosaic, 0, "Expected effect mosaic of Clone 6 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).effects.brightness, 0, "Expected effect brightness of Clone 6 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).effects.ghost, 0, "Expected effect ghost of Clone 6 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(7).effects.color, 0, "Expected effect color of Clone 7 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(7).effects.fisheye, 0, "Expected effect fisheye of Clone 7 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(7).effects.whirl, 0, "Expected effect whirl of Clone 7 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(7).effects.pixelate, 0, "Expected effect pixelate of Clone 7 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(7).effects.mosaic, 0, "Expected effect mosaic of Clone 7 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(7).effects.brightness, 0, "Expected effect brightness of Clone 7 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(7).effects.ghost, 0, "Expected effect ghost of Clone 7 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").layerOrder, 9, "Expected Sprite Luftballon to be at layer 9");
  t.assert.equal(t.getSprite("Luftballon").getClone(2).getLayerOrder(), 6, "Expected Clone 2 of Luftballon to be at layer 6");
  t.assert.equal(t.getSprite("Luftballon").getClone(4).getLayerOrder(), 7, "Expected Clone 4 of Luftballon to be at layer 7");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).getLayerOrder(), 8, "Expected Clone 6 of Luftballon to be at layer 8");
  t.assert.equal(t.getSprite("Luftballon").getClone(7).getLayerOrder(), 4, "Expected Clone 7 of Luftballon to be at layer 4");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(2).x, 161, 5, "Expected Clone 2 of Luftballon to have x-position 161 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(2).y, 89, 5, "Expected Clone 2 of Luftballon to have y-position 89 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(4).x, 144, 5, "Expected Clone 4 of Luftballon to have x-position 144 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(4).y, 73, 5, "Expected Clone 4 of Luftballon to have y-position 73 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(6).x, 84, 5, "Expected Clone 6 of Luftballon to have x-position 84 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(6).y, -138, 5, "Expected Clone 6 of Luftballon to have y-position -138 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(7).x, 90, 5, "Expected Clone 7 of Luftballon to have x-position 90 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(7).y, 9, 5, "Expected Clone 7 of Luftballon to have y-position 9 +-5");
  t.assert.not(t.getSprite("Luftballon").getClone(2).sayText, "Expected Clone 2 of Luftballon not to say anything");
  t.assert.not(t.getSprite("Luftballon").getClone(4).sayText, "Expected Clone 4 of Luftballon not to say anything");
  t.assert.not(t.getSprite("Luftballon").getClone(6).sayText, "Expected Clone 6 of Luftballon not to say anything");
  t.assert.not(t.getSprite("Luftballon").getClone(7).sayText, "Expected Clone 7 of Luftballon not to say anything");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(2).size, 50, 1, "Expected Clone 2 of Luftballon to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(4).size, 50, 1, "Expected Clone 4 of Luftballon to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(6).size, 50, 1, "Expected Clone 6 of Luftballon to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(7).size, 50, 1, "Expected Clone 7 of Luftballon to have size 50 +-1");
  t.assert.ok(t.getSprite("Luftballon").getClone(2).visible, "Expected Clone 2 of Luftballon to be visible");
  t.assert.ok(t.getSprite("Luftballon").getClone(4).visible, "Expected Clone 4 of Luftballon to be visible");
  t.assert.ok(t.getSprite("Luftballon").getClone(6).visible, "Expected Clone 6 of Luftballon to be visible");
  t.assert.ok(t.getSprite("Luftballon").getClone(7).visible, "Expected Clone 7 of Luftballon to be visible");
  t.assert.equal(t.getSprite("Luftballon").getClone(2).volume, 100, "Expected Clone 2 of Luftballon to have volume 100");
  t.assert.equal(t.getSprite("Luftballon").getClone(4).volume, 100, "Expected Clone 4 of Luftballon to have volume 100");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).volume, 100, "Expected Clone 6 of Luftballon to have volume 100");
  t.assert.equal(t.getSprite("Luftballon").getClone(7).volume, 100, "Expected Clone 7 of Luftballon to have volume 100");
  t.end();
}
const test2 = async function (t) {
  await t.runForSteps(28);
  await t.runForSteps(1);
  await t.runForSteps(87);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Luftballon").getClone(2).currentCostume, 2, "Expected Clone 2 of Luftballon to have costume 2");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).currentCostume, 1, "Expected Clone 6 of Luftballon to have costume 1");
  t.assert.equal(t.getSprite("Luftballon").getClone(10).currentCostume, 0, "Expected Clone 10 of Luftballon to have costume 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(14).currentCostume, 2, "Expected Clone 14 of Luftballon to have costume 2");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).currentCostume, 2, "Expected Clone 16 of Luftballon to have costume 2");
  t.assert.equal(t.getSprite("Luftballon").getCloneCount(), 16, "Expected Sprite Luftballon to have 16 clones");
  t.assert.equal(t.getSprite("Luftballon").getClone(2).direction, 90, 1, "Expected Clone 2 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).direction, 90, 1, "Expected Clone 6 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(10).direction, 90, 1, "Expected Clone 10 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(14).direction, 90, 1, "Expected Clone 14 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).direction, 90, 1, "Expected Clone 16 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(2).effects.color, 0, "Expected effect color of Clone 2 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(2).effects.fisheye, 0, "Expected effect fisheye of Clone 2 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(2).effects.whirl, 0, "Expected effect whirl of Clone 2 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(2).effects.pixelate, 0, "Expected effect pixelate of Clone 2 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(2).effects.mosaic, 0, "Expected effect mosaic of Clone 2 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(2).effects.brightness, 0, "Expected effect brightness of Clone 2 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(2).effects.ghost, 0, "Expected effect ghost of Clone 2 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).effects.color, 0, "Expected effect color of Clone 6 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).effects.fisheye, 0, "Expected effect fisheye of Clone 6 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).effects.whirl, 0, "Expected effect whirl of Clone 6 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).effects.pixelate, 0, "Expected effect pixelate of Clone 6 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).effects.mosaic, 0, "Expected effect mosaic of Clone 6 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).effects.brightness, 0, "Expected effect brightness of Clone 6 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).effects.ghost, 0, "Expected effect ghost of Clone 6 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(10).effects.color, 0, "Expected effect color of Clone 10 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(10).effects.fisheye, 0, "Expected effect fisheye of Clone 10 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(10).effects.whirl, 0, "Expected effect whirl of Clone 10 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(10).effects.pixelate, 0, "Expected effect pixelate of Clone 10 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(10).effects.mosaic, 0, "Expected effect mosaic of Clone 10 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(10).effects.brightness, 0, "Expected effect brightness of Clone 10 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(10).effects.ghost, 0, "Expected effect ghost of Clone 10 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(14).effects.color, 0, "Expected effect color of Clone 14 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(14).effects.fisheye, 0, "Expected effect fisheye of Clone 14 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(14).effects.whirl, 0, "Expected effect whirl of Clone 14 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(14).effects.pixelate, 0, "Expected effect pixelate of Clone 14 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(14).effects.mosaic, 0, "Expected effect mosaic of Clone 14 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(14).effects.brightness, 0, "Expected effect brightness of Clone 14 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(14).effects.ghost, 0, "Expected effect ghost of Clone 14 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).effects.color, 0, "Expected effect color of Clone 16 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).effects.fisheye, 0, "Expected effect fisheye of Clone 16 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).effects.whirl, 0, "Expected effect whirl of Clone 16 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).effects.pixelate, 0, "Expected effect pixelate of Clone 16 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).effects.mosaic, 0, "Expected effect mosaic of Clone 16 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).effects.brightness, 0, "Expected effect brightness of Clone 16 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).effects.ghost, 0, "Expected effect ghost of Clone 16 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Einhorn").layerOrder, 19, "Expected Sprite Einhorn to be at layer 19");
  t.assert.equal(t.getSprite("Luftballon").layerOrder, 17, "Expected Sprite Luftballon to be at layer 17");
  t.assert.equal(t.getSprite("Luftballon").getClone(2).getLayerOrder(), 13, "Expected Clone 2 of Luftballon to be at layer 13");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).getLayerOrder(), 14, "Expected Clone 6 of Luftballon to be at layer 14");
  t.assert.equal(t.getSprite("Luftballon").getClone(10).getLayerOrder(), 15, "Expected Clone 10 of Luftballon to be at layer 15");
  t.assert.equal(t.getSprite("Luftballon").getClone(14).getLayerOrder(), 16, "Expected Clone 14 of Luftballon to be at layer 16");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).getLayerOrder(), 8, "Expected Clone 16 of Luftballon to be at layer 8");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(2).x, 86, 5, "Expected Clone 2 of Luftballon to have x-position 86 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(2).y, -146, 5, "Expected Clone 2 of Luftballon to have y-position -146 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(6).x, -72, 5, "Expected Clone 6 of Luftballon to have x-position -72 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(6).y, 25, 5, "Expected Clone 6 of Luftballon to have y-position 25 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(10).x, 54, 5, "Expected Clone 10 of Luftballon to have x-position 54 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(10).y, -171, 5, "Expected Clone 10 of Luftballon to have y-position -171 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(14).x, 41, 5, "Expected Clone 14 of Luftballon to have x-position 41 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(14).y, 120, 5, "Expected Clone 14 of Luftballon to have y-position 120 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(16).x, -22, 5, "Expected Clone 16 of Luftballon to have x-position -22 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(16).y, 29, 5, "Expected Clone 16 of Luftballon to have y-position 29 +-5");
  t.assert.equal(t.getSprite("Einhorn").sayText, "Frohes neues Jahr!", "Expected Sprite Einhorn to say Frohes neues Jahr!");
  t.assert.not(t.getSprite("Luftballon").getClone(2).sayText, "Expected Clone 2 of Luftballon not to say anything");
  t.assert.not(t.getSprite("Luftballon").getClone(6).sayText, "Expected Clone 6 of Luftballon not to say anything");
  t.assert.not(t.getSprite("Luftballon").getClone(10).sayText, "Expected Clone 10 of Luftballon not to say anything");
  t.assert.not(t.getSprite("Luftballon").getClone(14).sayText, "Expected Clone 14 of Luftballon not to say anything");
  t.assert.not(t.getSprite("Luftballon").getClone(16).sayText, "Expected Clone 16 of Luftballon not to say anything");
  t.assert.withinRange(t.getSprite("Einhorn").size, 180, 1, "Expected Sprite Einhorn to have size 180 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(2).size, 50, 1, "Expected Clone 2 of Luftballon to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(6).size, 50, 1, "Expected Clone 6 of Luftballon to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(10).size, 50, 1, "Expected Clone 10 of Luftballon to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(14).size, 50, 1, "Expected Clone 14 of Luftballon to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(16).size, 50, 1, "Expected Clone 16 of Luftballon to have size 50 +-1");
  t.assert.ok(t.getSprite("Luftballon").getClone(2).visible, "Expected Clone 2 of Luftballon to be visible");
  t.assert.ok(t.getSprite("Luftballon").getClone(6).visible, "Expected Clone 6 of Luftballon to be visible");
  t.assert.ok(t.getSprite("Luftballon").getClone(10).visible, "Expected Clone 10 of Luftballon to be visible");
  t.assert.ok(t.getSprite("Luftballon").getClone(14).visible, "Expected Clone 14 of Luftballon to be visible");
  t.assert.ok(t.getSprite("Luftballon").getClone(16).visible, "Expected Clone 16 of Luftballon to be visible");
  t.assert.equal(t.getSprite("Luftballon").getClone(2).volume, 100, "Expected Clone 2 of Luftballon to have volume 100");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).volume, 100, "Expected Clone 6 of Luftballon to have volume 100");
  t.assert.equal(t.getSprite("Luftballon").getClone(10).volume, 100, "Expected Clone 10 of Luftballon to have volume 100");
  t.assert.equal(t.getSprite("Luftballon").getClone(14).volume, 100, "Expected Clone 14 of Luftballon to have volume 100");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).volume, 100, "Expected Clone 16 of Luftballon to have volume 100");
  t.end();
}
const test3 = async function (t) {
  await t.runForSteps(28);
  await t.runForSteps(1);
  await t.runForSteps(87);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Luftballon").getClone(2).currentCostume, 2, "Expected Clone 2 of Luftballon to have costume 2");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).currentCostume, 1, "Expected Clone 6 of Luftballon to have costume 1");
  t.assert.equal(t.getSprite("Luftballon").getClone(10).currentCostume, 0, "Expected Clone 10 of Luftballon to have costume 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(14).currentCostume, 2, "Expected Clone 14 of Luftballon to have costume 2");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).currentCostume, 2, "Expected Clone 16 of Luftballon to have costume 2");
  t.assert.equal(t.getSprite("Luftballon").getCloneCount(), 16, "Expected Sprite Luftballon to have 16 clones");
  t.assert.equal(t.getSprite("Luftballon").getClone(2).direction, 90, 1, "Expected Clone 2 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).direction, 90, 1, "Expected Clone 6 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(10).direction, 90, 1, "Expected Clone 10 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(14).direction, 90, 1, "Expected Clone 14 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).direction, 90, 1, "Expected Clone 16 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(2).effects.color, 0, "Expected effect color of Clone 2 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(2).effects.fisheye, 0, "Expected effect fisheye of Clone 2 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(2).effects.whirl, 0, "Expected effect whirl of Clone 2 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(2).effects.pixelate, 0, "Expected effect pixelate of Clone 2 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(2).effects.mosaic, 0, "Expected effect mosaic of Clone 2 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(2).effects.brightness, 0, "Expected effect brightness of Clone 2 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(2).effects.ghost, 0, "Expected effect ghost of Clone 2 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).effects.color, 0, "Expected effect color of Clone 6 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).effects.fisheye, 0, "Expected effect fisheye of Clone 6 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).effects.whirl, 0, "Expected effect whirl of Clone 6 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).effects.pixelate, 0, "Expected effect pixelate of Clone 6 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).effects.mosaic, 0, "Expected effect mosaic of Clone 6 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).effects.brightness, 0, "Expected effect brightness of Clone 6 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).effects.ghost, 0, "Expected effect ghost of Clone 6 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(10).effects.color, 0, "Expected effect color of Clone 10 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(10).effects.fisheye, 0, "Expected effect fisheye of Clone 10 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(10).effects.whirl, 0, "Expected effect whirl of Clone 10 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(10).effects.pixelate, 0, "Expected effect pixelate of Clone 10 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(10).effects.mosaic, 0, "Expected effect mosaic of Clone 10 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(10).effects.brightness, 0, "Expected effect brightness of Clone 10 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(10).effects.ghost, 0, "Expected effect ghost of Clone 10 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(14).effects.color, 0, "Expected effect color of Clone 14 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(14).effects.fisheye, 0, "Expected effect fisheye of Clone 14 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(14).effects.whirl, 0, "Expected effect whirl of Clone 14 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(14).effects.pixelate, 0, "Expected effect pixelate of Clone 14 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(14).effects.mosaic, 0, "Expected effect mosaic of Clone 14 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(14).effects.brightness, 0, "Expected effect brightness of Clone 14 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(14).effects.ghost, 0, "Expected effect ghost of Clone 14 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).effects.color, 0, "Expected effect color of Clone 16 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).effects.fisheye, 0, "Expected effect fisheye of Clone 16 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).effects.whirl, 0, "Expected effect whirl of Clone 16 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).effects.pixelate, 0, "Expected effect pixelate of Clone 16 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).effects.mosaic, 0, "Expected effect mosaic of Clone 16 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).effects.brightness, 0, "Expected effect brightness of Clone 16 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).effects.ghost, 0, "Expected effect ghost of Clone 16 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Einhorn").layerOrder, 19, "Expected Sprite Einhorn to be at layer 19");
  t.assert.equal(t.getSprite("Luftballon").layerOrder, 17, "Expected Sprite Luftballon to be at layer 17");
  t.assert.equal(t.getSprite("Luftballon").getClone(2).getLayerOrder(), 13, "Expected Clone 2 of Luftballon to be at layer 13");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).getLayerOrder(), 14, "Expected Clone 6 of Luftballon to be at layer 14");
  t.assert.equal(t.getSprite("Luftballon").getClone(10).getLayerOrder(), 15, "Expected Clone 10 of Luftballon to be at layer 15");
  t.assert.equal(t.getSprite("Luftballon").getClone(14).getLayerOrder(), 16, "Expected Clone 14 of Luftballon to be at layer 16");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).getLayerOrder(), 8, "Expected Clone 16 of Luftballon to be at layer 8");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(2).x, 86, 5, "Expected Clone 2 of Luftballon to have x-position 86 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(2).y, -146, 5, "Expected Clone 2 of Luftballon to have y-position -146 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(6).x, -72, 5, "Expected Clone 6 of Luftballon to have x-position -72 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(6).y, 25, 5, "Expected Clone 6 of Luftballon to have y-position 25 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(10).x, 54, 5, "Expected Clone 10 of Luftballon to have x-position 54 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(10).y, -171, 5, "Expected Clone 10 of Luftballon to have y-position -171 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(14).x, 41, 5, "Expected Clone 14 of Luftballon to have x-position 41 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(14).y, 120, 5, "Expected Clone 14 of Luftballon to have y-position 120 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(16).x, -22, 5, "Expected Clone 16 of Luftballon to have x-position -22 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(16).y, 29, 5, "Expected Clone 16 of Luftballon to have y-position 29 +-5");
  t.assert.equal(t.getSprite("Einhorn").sayText, "Frohes neues Jahr!", "Expected Sprite Einhorn to say Frohes neues Jahr!");
  t.assert.not(t.getSprite("Luftballon").getClone(2).sayText, "Expected Clone 2 of Luftballon not to say anything");
  t.assert.not(t.getSprite("Luftballon").getClone(6).sayText, "Expected Clone 6 of Luftballon not to say anything");
  t.assert.not(t.getSprite("Luftballon").getClone(10).sayText, "Expected Clone 10 of Luftballon not to say anything");
  t.assert.not(t.getSprite("Luftballon").getClone(14).sayText, "Expected Clone 14 of Luftballon not to say anything");
  t.assert.not(t.getSprite("Luftballon").getClone(16).sayText, "Expected Clone 16 of Luftballon not to say anything");
  t.assert.withinRange(t.getSprite("Einhorn").size, 180, 1, "Expected Sprite Einhorn to have size 180 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(2).size, 50, 1, "Expected Clone 2 of Luftballon to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(6).size, 50, 1, "Expected Clone 6 of Luftballon to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(10).size, 50, 1, "Expected Clone 10 of Luftballon to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(14).size, 50, 1, "Expected Clone 14 of Luftballon to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(16).size, 50, 1, "Expected Clone 16 of Luftballon to have size 50 +-1");
  t.assert.ok(t.getSprite("Luftballon").getClone(2).visible, "Expected Clone 2 of Luftballon to be visible");
  t.assert.ok(t.getSprite("Luftballon").getClone(6).visible, "Expected Clone 6 of Luftballon to be visible");
  t.assert.ok(t.getSprite("Luftballon").getClone(10).visible, "Expected Clone 10 of Luftballon to be visible");
  t.assert.ok(t.getSprite("Luftballon").getClone(14).visible, "Expected Clone 14 of Luftballon to be visible");
  t.assert.ok(t.getSprite("Luftballon").getClone(16).visible, "Expected Clone 16 of Luftballon to be visible");
  t.assert.equal(t.getSprite("Luftballon").getClone(2).volume, 100, "Expected Clone 2 of Luftballon to have volume 100");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).volume, 100, "Expected Clone 6 of Luftballon to have volume 100");
  t.assert.equal(t.getSprite("Luftballon").getClone(10).volume, 100, "Expected Clone 10 of Luftballon to have volume 100");
  t.assert.equal(t.getSprite("Luftballon").getClone(14).volume, 100, "Expected Clone 14 of Luftballon to have volume 100");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).volume, 100, "Expected Clone 16 of Luftballon to have volume 100");
  await t.runForSteps(93);
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
  t.assert.withinRange(t.getSprite("Luftballon").getClone(1).x, 90, 5, "Expected Clone 1 of Luftballon to have x-position 90 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(1).y, 163, 5, "Expected Clone 1 of Luftballon to have y-position 163 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(8).x, -213, 5, "Expected Clone 8 of Luftballon to have x-position -213 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(8).y, -13, 5, "Expected Clone 8 of Luftballon to have y-position -13 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(15).x, 82, 5, "Expected Clone 15 of Luftballon to have x-position 82 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(15).y, -111, 5, "Expected Clone 15 of Luftballon to have y-position -111 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(22).x, 124, 5, "Expected Clone 22 of Luftballon to have x-position 124 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(22).y, -152, 5, "Expected Clone 22 of Luftballon to have y-position -152 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(29).x, -195, 5, "Expected Clone 29 of Luftballon to have x-position -195 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(29).y, 31, 5, "Expected Clone 29 of Luftballon to have y-position 31 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(30).x, -131, 5, "Expected Clone 30 of Luftballon to have x-position -131 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(30).y, 171, 5, "Expected Clone 30 of Luftballon to have y-position 171 +-5");
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
      seed: '1687938837806',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938837806',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938837806',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938837806',
      type: 'standard',
  }
]
