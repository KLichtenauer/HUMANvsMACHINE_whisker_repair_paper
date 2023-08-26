const test0 = async function (t) {
  await t.runForSteps(59);
  await t.runForSteps(1);
  await t.runForSteps(94);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Luftballon").getClone(1).currentCostume, 0, "Expected Clone 1 of Luftballon to have costume 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).currentCostume, 2, "Expected Clone 6 of Luftballon to have costume 2");
  t.assert.equal(t.getSprite("Luftballon").getClone(11).currentCostume, 1, "Expected Clone 11 of Luftballon to have costume 1");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).currentCostume, 0, "Expected Clone 16 of Luftballon to have costume 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(21).currentCostume, 2, "Expected Clone 21 of Luftballon to have costume 2");
  t.assert.equal(t.getSprite("Luftballon").getClone(22).currentCostume, 2, "Expected Clone 22 of Luftballon to have costume 2");
  t.assert.equal(t.getSprite("Luftballon").getCloneCount(), 22, "Expected Sprite Luftballon to have 22 clones");
  t.assert.equal(t.getSprite("Luftballon").getClone(1).direction, 90, 1, "Expected Clone 1 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).direction, 90, 1, "Expected Clone 6 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(11).direction, 90, 1, "Expected Clone 11 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).direction, 90, 1, "Expected Clone 16 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(21).direction, 90, 1, "Expected Clone 21 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(22).direction, 90, 1, "Expected Clone 22 of Luftballon to face in direction 90 +-1");
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
  t.assert.equal(t.getSprite("Luftballon").getClone(21).effects.color, 0, "Expected effect color of Clone 21 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(21).effects.fisheye, 0, "Expected effect fisheye of Clone 21 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(21).effects.whirl, 0, "Expected effect whirl of Clone 21 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(21).effects.pixelate, 0, "Expected effect pixelate of Clone 21 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(21).effects.mosaic, 0, "Expected effect mosaic of Clone 21 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(21).effects.brightness, 0, "Expected effect brightness of Clone 21 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(21).effects.ghost, 0, "Expected effect ghost of Clone 21 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(22).effects.color, 0, "Expected effect color of Clone 22 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(22).effects.fisheye, 0, "Expected effect fisheye of Clone 22 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(22).effects.whirl, 0, "Expected effect whirl of Clone 22 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(22).effects.pixelate, 0, "Expected effect pixelate of Clone 22 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(22).effects.mosaic, 0, "Expected effect mosaic of Clone 22 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(22).effects.brightness, 0, "Expected effect brightness of Clone 22 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(22).effects.ghost, 0, "Expected effect ghost of Clone 22 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Einhorn").layerOrder, 25, "Expected Sprite Einhorn to be at layer 25");
  t.assert.equal(t.getSprite("Luftballon").layerOrder, 23, "Expected Sprite Luftballon to be at layer 23");
  t.assert.equal(t.getSprite("Luftballon").getClone(1).getLayerOrder(), 18, "Expected Clone 1 of Luftballon to be at layer 18");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).getLayerOrder(), 19, "Expected Clone 6 of Luftballon to be at layer 19");
  t.assert.equal(t.getSprite("Luftballon").getClone(11).getLayerOrder(), 20, "Expected Clone 11 of Luftballon to be at layer 20");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).getLayerOrder(), 21, "Expected Clone 16 of Luftballon to be at layer 21");
  t.assert.equal(t.getSprite("Luftballon").getClone(21).getLayerOrder(), 22, "Expected Clone 21 of Luftballon to be at layer 22");
  t.assert.equal(t.getSprite("Luftballon").getClone(22).getLayerOrder(), 5, "Expected Clone 22 of Luftballon to be at layer 5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(1).x, -166, 5, "Expected Clone 1 of Luftballon to have x-position -166 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(1).y, 102, 5, "Expected Clone 1 of Luftballon to have y-position 102 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(6).x, 60, 5, "Expected Clone 6 of Luftballon to have x-position 60 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(6).y, -159, 5, "Expected Clone 6 of Luftballon to have y-position -159 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(11).x, 213, 5, "Expected Clone 11 of Luftballon to have x-position 213 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(11).y, 98, 5, "Expected Clone 11 of Luftballon to have y-position 98 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(16).x, 62, 5, "Expected Clone 16 of Luftballon to have x-position 62 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(16).y, 53, 5, "Expected Clone 16 of Luftballon to have y-position 53 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(21).x, -228, 5, "Expected Clone 21 of Luftballon to have x-position -228 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(21).y, 176, 5, "Expected Clone 21 of Luftballon to have y-position 176 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(22).x, -220, 5, "Expected Clone 22 of Luftballon to have x-position -220 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(22).y, -9, 5, "Expected Clone 22 of Luftballon to have y-position -9 +-5");
  t.assert.equal(t.getSprite("Einhorn").sayText, "Frohes neues Jahr!", "Expected Sprite Einhorn to say Frohes neues Jahr!");
  t.assert.not(t.getSprite("Luftballon").getClone(1).sayText, "Expected Clone 1 of Luftballon not to say anything");
  t.assert.not(t.getSprite("Luftballon").getClone(6).sayText, "Expected Clone 6 of Luftballon not to say anything");
  t.assert.not(t.getSprite("Luftballon").getClone(11).sayText, "Expected Clone 11 of Luftballon not to say anything");
  t.assert.not(t.getSprite("Luftballon").getClone(16).sayText, "Expected Clone 16 of Luftballon not to say anything");
  t.assert.not(t.getSprite("Luftballon").getClone(21).sayText, "Expected Clone 21 of Luftballon not to say anything");
  t.assert.not(t.getSprite("Luftballon").getClone(22).sayText, "Expected Clone 22 of Luftballon not to say anything");
  t.assert.withinRange(t.getSprite("Einhorn").size, 180, 1, "Expected Sprite Einhorn to have size 180 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(1).size, 50, 1, "Expected Clone 1 of Luftballon to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(6).size, 50, 1, "Expected Clone 6 of Luftballon to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(11).size, 50, 1, "Expected Clone 11 of Luftballon to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(16).size, 50, 1, "Expected Clone 16 of Luftballon to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(21).size, 50, 1, "Expected Clone 21 of Luftballon to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(22).size, 50, 1, "Expected Clone 22 of Luftballon to have size 50 +-1");
  t.assert.ok(t.getSprite("Luftballon").getClone(1).visible, "Expected Clone 1 of Luftballon to be visible");
  t.assert.ok(t.getSprite("Luftballon").getClone(6).visible, "Expected Clone 6 of Luftballon to be visible");
  t.assert.ok(t.getSprite("Luftballon").getClone(11).visible, "Expected Clone 11 of Luftballon to be visible");
  t.assert.ok(t.getSprite("Luftballon").getClone(16).visible, "Expected Clone 16 of Luftballon to be visible");
  t.assert.ok(t.getSprite("Luftballon").getClone(21).visible, "Expected Clone 21 of Luftballon to be visible");
  t.assert.ok(t.getSprite("Luftballon").getClone(22).visible, "Expected Clone 22 of Luftballon to be visible");
  t.assert.equal(t.getSprite("Luftballon").getClone(1).volume, 100, "Expected Clone 1 of Luftballon to have volume 100");
  t.assert.equal(t.getSprite("Luftballon").getClone(6).volume, 100, "Expected Clone 6 of Luftballon to have volume 100");
  t.assert.equal(t.getSprite("Luftballon").getClone(11).volume, 100, "Expected Clone 11 of Luftballon to have volume 100");
  t.assert.equal(t.getSprite("Luftballon").getClone(16).volume, 100, "Expected Clone 16 of Luftballon to have volume 100");
  t.assert.equal(t.getSprite("Luftballon").getClone(21).volume, 100, "Expected Clone 21 of Luftballon to have volume 100");
  t.assert.equal(t.getSprite("Luftballon").getClone(22).volume, 100, "Expected Clone 22 of Luftballon to have volume 100");
  await t.runForSteps(67);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Luftballon").getClone(3).currentCostume, 0, "Expected Clone 3 of Luftballon to have costume 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(10).currentCostume, 2, "Expected Clone 10 of Luftballon to have costume 2");
  t.assert.equal(t.getSprite("Luftballon").getClone(17).currentCostume, 1, "Expected Clone 17 of Luftballon to have costume 1");
  t.assert.equal(t.getSprite("Luftballon").getClone(30).currentCostume, 2, "Expected Clone 30 of Luftballon to have costume 2");
  t.assert.equal(t.getSprite("Luftballon").getCloneCount(), 30, "Expected Sprite Luftballon to have 30 clones");
  t.assert.equal(t.getSprite("Luftballon").getClone(3).direction, 90, 1, "Expected Clone 3 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(10).direction, 90, 1, "Expected Clone 10 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(17).direction, 90, 1, "Expected Clone 17 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(30).direction, 90, 1, "Expected Clone 30 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(3).effects.color, 0, "Expected effect color of Clone 3 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(3).effects.fisheye, 0, "Expected effect fisheye of Clone 3 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(3).effects.whirl, 0, "Expected effect whirl of Clone 3 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(3).effects.pixelate, 0, "Expected effect pixelate of Clone 3 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(3).effects.mosaic, 0, "Expected effect mosaic of Clone 3 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(3).effects.brightness, 0, "Expected effect brightness of Clone 3 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(3).effects.ghost, 0, "Expected effect ghost of Clone 3 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(10).effects.color, 0, "Expected effect color of Clone 10 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(10).effects.fisheye, 0, "Expected effect fisheye of Clone 10 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(10).effects.whirl, 0, "Expected effect whirl of Clone 10 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(10).effects.pixelate, 0, "Expected effect pixelate of Clone 10 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(10).effects.mosaic, 0, "Expected effect mosaic of Clone 10 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(10).effects.brightness, 0, "Expected effect brightness of Clone 10 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(10).effects.ghost, 0, "Expected effect ghost of Clone 10 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(17).effects.color, 0, "Expected effect color of Clone 17 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(17).effects.fisheye, 0, "Expected effect fisheye of Clone 17 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(17).effects.whirl, 0, "Expected effect whirl of Clone 17 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(17).effects.pixelate, 0, "Expected effect pixelate of Clone 17 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(17).effects.mosaic, 0, "Expected effect mosaic of Clone 17 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(17).effects.brightness, 0, "Expected effect brightness of Clone 17 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(17).effects.ghost, 0, "Expected effect ghost of Clone 17 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(30).effects.color, 0, "Expected effect color of Clone 30 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(30).effects.fisheye, 0, "Expected effect fisheye of Clone 30 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(30).effects.whirl, 0, "Expected effect whirl of Clone 30 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(30).effects.pixelate, 0, "Expected effect pixelate of Clone 30 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(30).effects.mosaic, 0, "Expected effect mosaic of Clone 30 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(30).effects.brightness, 0, "Expected effect brightness of Clone 30 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(30).effects.ghost, 0, "Expected effect ghost of Clone 30 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Einhorn").layerOrder, 33, "Expected Sprite Einhorn to be at layer 33");
  t.assert.equal(t.getSprite("Luftballon").layerOrder, 31, "Expected Sprite Luftballon to be at layer 31");
  t.assert.equal(t.getSprite("Luftballon").getClone(3).getLayerOrder(), 28, "Expected Clone 3 of Luftballon to be at layer 28");
  t.assert.equal(t.getSprite("Luftballon").getClone(10).getLayerOrder(), 29, "Expected Clone 10 of Luftballon to be at layer 29");
  t.assert.equal(t.getSprite("Luftballon").getClone(17).getLayerOrder(), 30, "Expected Clone 17 of Luftballon to be at layer 30");
  t.assert.equal(t.getSprite("Luftballon").getClone(30).getLayerOrder(), 19, "Expected Clone 30 of Luftballon to be at layer 19");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(3).x, -95, 5, "Expected Clone 3 of Luftballon to have x-position -95 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(3).y, 91, 5, "Expected Clone 3 of Luftballon to have y-position 91 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(10).x, 130, 5, "Expected Clone 10 of Luftballon to have x-position 130 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(10).y, 7, 5, "Expected Clone 10 of Luftballon to have y-position 7 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(17).x, -53, 5, "Expected Clone 17 of Luftballon to have x-position -53 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(17).y, 168, 5, "Expected Clone 17 of Luftballon to have y-position 168 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(30).x, 15, 5, "Expected Clone 30 of Luftballon to have x-position 15 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(30).y, 137, 5, "Expected Clone 30 of Luftballon to have y-position 137 +-5");
  t.assert.not(t.getSprite("Luftballon").getClone(3).sayText, "Expected Clone 3 of Luftballon not to say anything");
  t.assert.not(t.getSprite("Luftballon").getClone(10).sayText, "Expected Clone 10 of Luftballon not to say anything");
  t.assert.not(t.getSprite("Luftballon").getClone(17).sayText, "Expected Clone 17 of Luftballon not to say anything");
  t.assert.not(t.getSprite("Luftballon").getClone(30).sayText, "Expected Clone 30 of Luftballon not to say anything");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(3).size, 50, 1, "Expected Clone 3 of Luftballon to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(10).size, 50, 1, "Expected Clone 10 of Luftballon to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(17).size, 50, 1, "Expected Clone 17 of Luftballon to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(30).size, 50, 1, "Expected Clone 30 of Luftballon to have size 50 +-1");
  t.assert.not(t.getSprite("Luftballon").visible, "Expected Sprite Luftballon not to be visible");
  t.assert.ok(t.getSprite("Luftballon").getClone(3).visible, "Expected Clone 3 of Luftballon to be visible");
  t.assert.ok(t.getSprite("Luftballon").getClone(10).visible, "Expected Clone 10 of Luftballon to be visible");
  t.assert.ok(t.getSprite("Luftballon").getClone(17).visible, "Expected Clone 17 of Luftballon to be visible");
  t.assert.ok(t.getSprite("Luftballon").getClone(30).visible, "Expected Clone 30 of Luftballon to be visible");
  t.assert.equal(t.getSprite("Luftballon").getClone(3).volume, 100, "Expected Clone 3 of Luftballon to have volume 100");
  t.assert.equal(t.getSprite("Luftballon").getClone(10).volume, 100, "Expected Clone 10 of Luftballon to have volume 100");
  t.assert.equal(t.getSprite("Luftballon").getClone(17).volume, 100, "Expected Clone 17 of Luftballon to have volume 100");
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
      seed: '1687937557708',
      type: 'standard',
  }
]
