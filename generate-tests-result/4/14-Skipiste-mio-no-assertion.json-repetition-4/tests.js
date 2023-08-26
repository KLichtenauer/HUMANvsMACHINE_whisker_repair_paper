const test0 = async function (t) {
  t.keyPress('left arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.equal(t.getSprite("Skikatze").currentCostume, 0, "Expected Sprite Skikatze to have costume 0");
  t.assert.equal(t.getSprite("Hindernis").currentCostume, 1, "Expected Sprite Hindernis to have costume 1");
  t.assert.equal(t.getSprite("Skikatze").getCloneCount(), 0, "Expected Sprite Skikatze to have 0 clones");
  t.assert.equal(t.getSprite("Hindernis").getCloneCount(), 0, "Expected Sprite Hindernis to have 0 clones");
  t.assert.equal(t.getSprite("Skikatze").direction, 90, 1, "Expected Sprite Skikatze to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Hindernis").direction, 90, 1, "Expected Sprite Hindernis to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Skikatze").effects.color, 0, "Expected effect color of Sprite Skikatze to be 0");
  t.assert.equal(t.getSprite("Skikatze").effects.fisheye, 0, "Expected effect fisheye of Sprite Skikatze to be 0");
  t.assert.equal(t.getSprite("Skikatze").effects.whirl, 0, "Expected effect whirl of Sprite Skikatze to be 0");
  t.assert.equal(t.getSprite("Skikatze").effects.pixelate, 0, "Expected effect pixelate of Sprite Skikatze to be 0");
  t.assert.equal(t.getSprite("Skikatze").effects.mosaic, 0, "Expected effect mosaic of Sprite Skikatze to be 0");
  t.assert.equal(t.getSprite("Skikatze").effects.brightness, 0, "Expected effect brightness of Sprite Skikatze to be 0");
  t.assert.equal(t.getSprite("Skikatze").effects.ghost, 0, "Expected effect ghost of Sprite Skikatze to be 0");
  t.assert.equal(t.getSprite("Hindernis").effects.color, 0, "Expected effect color of Sprite Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").effects.fisheye, 0, "Expected effect fisheye of Sprite Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").effects.whirl, 0, "Expected effect whirl of Sprite Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").effects.pixelate, 0, "Expected effect pixelate of Sprite Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").effects.mosaic, 0, "Expected effect mosaic of Sprite Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").effects.brightness, 0, "Expected effect brightness of Sprite Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").effects.ghost, 0, "Expected effect ghost of Sprite Hindernis to be 0");
  t.assert.equal(t.getSprite("Skikatze").layerOrder, 2, "Expected Sprite Skikatze to be at layer 2");
  t.assert.equal(t.getSprite("Hindernis").layerOrder, 1, "Expected Sprite Hindernis to be at layer 1");
  t.assert.withinRange(t.getSprite("Skikatze").x, 0, 5, "Expected Sprite Skikatze to have x-position 0 +-5");
  t.assert.withinRange(t.getSprite("Skikatze").y, 100, 5, "Expected Sprite Skikatze to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").x, -70, 5, "Expected Sprite Hindernis to have x-position -70 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").y, -32.04599999999999, 5, "Expected Sprite Hindernis to have y-position -32.04599999999999 +-5");
  t.assert.not(t.getSprite("Skikatze").sayText, "Expected Sprite Skikatze not to say anything");
  t.assert.not(t.getSprite("Hindernis").sayText, "Expected Sprite Hindernis not to say anything");
  t.assert.withinRange(t.getSprite("Skikatze").size, 100, 1, "Expected Sprite Skikatze to have size 100 +-1");
  t.assert.withinRange(t.getSprite("Hindernis").size, 60, 1, "Expected Sprite Hindernis to have size 60 +-1");
  t.assert.equal(t.getSprite("Hindernis").getVariable("Hindernis_x").value, "-70", "Expected Hindernis_x to have value -70 in Sprite Hindernis");
  t.assert.ok(t.getSprite("Skikatze").visible, "Expected Sprite Skikatze to be visible");
  t.assert.not(t.getSprite("Hindernis").visible, "Expected Sprite Hindernis not to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Skikatze").volume, 100, "Expected Sprite Skikatze to have volume 100");
  t.assert.equal(t.getSprite("Hindernis").volume, 100, "Expected Sprite Hindernis to have volume 100");
  await t.runForSteps(94);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.equal(t.getSprite("Skikatze").currentCostume, 1, "Expected Sprite Skikatze to have costume 1");
  t.assert.equal(t.getSprite("Hindernis").currentCostume, 1, "Expected Sprite Hindernis to have costume 1");
  t.assert.equal(t.getSprite("Skikatze").getCloneCount(), 0, "Expected Sprite Skikatze to have 0 clones");
  t.assert.equal(t.getSprite("Hindernis").getCloneCount(), 0, "Expected Sprite Hindernis to have 0 clones");
  t.assert.equal(t.getSprite("Skikatze").direction, 90, 1, "Expected Sprite Skikatze to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Hindernis").direction, 90, 1, "Expected Sprite Hindernis to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Skikatze").effects.color, 0, "Expected effect color of Sprite Skikatze to be 0");
  t.assert.equal(t.getSprite("Skikatze").effects.fisheye, 0, "Expected effect fisheye of Sprite Skikatze to be 0");
  t.assert.equal(t.getSprite("Skikatze").effects.whirl, 0, "Expected effect whirl of Sprite Skikatze to be 0");
  t.assert.equal(t.getSprite("Skikatze").effects.pixelate, 0, "Expected effect pixelate of Sprite Skikatze to be 0");
  t.assert.equal(t.getSprite("Skikatze").effects.mosaic, 0, "Expected effect mosaic of Sprite Skikatze to be 0");
  t.assert.equal(t.getSprite("Skikatze").effects.brightness, 0, "Expected effect brightness of Sprite Skikatze to be 0");
  t.assert.equal(t.getSprite("Skikatze").effects.ghost, 0, "Expected effect ghost of Sprite Skikatze to be 0");
  t.assert.equal(t.getSprite("Hindernis").effects.color, 0, "Expected effect color of Sprite Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").effects.fisheye, 0, "Expected effect fisheye of Sprite Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").effects.whirl, 0, "Expected effect whirl of Sprite Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").effects.pixelate, 0, "Expected effect pixelate of Sprite Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").effects.mosaic, 0, "Expected effect mosaic of Sprite Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").effects.brightness, 0, "Expected effect brightness of Sprite Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").effects.ghost, 0, "Expected effect ghost of Sprite Hindernis to be 0");
  t.assert.equal(t.getSprite("Skikatze").layerOrder, 2, "Expected Sprite Skikatze to be at layer 2");
  t.assert.equal(t.getSprite("Hindernis").layerOrder, 1, "Expected Sprite Hindernis to be at layer 1");
  t.assert.withinRange(t.getSprite("Skikatze").x, 146, 5, "Expected Sprite Skikatze to have x-position 146 +-5");
  t.assert.withinRange(t.getSprite("Skikatze").y, 100, 5, "Expected Sprite Skikatze to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").x, -70, 5, "Expected Sprite Hindernis to have x-position -70 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").y, -32.04599999999999, 5, "Expected Sprite Hindernis to have y-position -32.04599999999999 +-5");
  t.assert.not(t.getSprite("Skikatze").sayText, "Expected Sprite Skikatze not to say anything");
  t.assert.not(t.getSprite("Hindernis").sayText, "Expected Sprite Hindernis not to say anything");
  t.assert.withinRange(t.getSprite("Skikatze").size, 100, 1, "Expected Sprite Skikatze to have size 100 +-1");
  t.assert.withinRange(t.getSprite("Hindernis").size, 60, 1, "Expected Sprite Hindernis to have size 60 +-1");
  t.assert.equal(t.getSprite("Hindernis").getVariable("Hindernis_x").value, "-70", "Expected Hindernis_x to have value -70 in Sprite Hindernis");
  t.assert.ok(t.getSprite("Skikatze").visible, "Expected Sprite Skikatze to be visible");
  t.assert.not(t.getSprite("Hindernis").visible, "Expected Sprite Hindernis not to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Skikatze").volume, 100, "Expected Sprite Skikatze to have volume 100");
  t.assert.equal(t.getSprite("Hindernis").volume, 100, "Expected Sprite Hindernis to have volume 100");
  t.end();
}
const test1 = async function (t) {
  t.keyPress('left arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.equal(t.getSprite("Skikatze").currentCostume, 0, "Expected Sprite Skikatze to have costume 0");
  t.assert.equal(t.getSprite("Hindernis").currentCostume, 1, "Expected Sprite Hindernis to have costume 1");
  t.assert.equal(t.getSprite("Skikatze").getCloneCount(), 0, "Expected Sprite Skikatze to have 0 clones");
  t.assert.equal(t.getSprite("Hindernis").getCloneCount(), 0, "Expected Sprite Hindernis to have 0 clones");
  t.assert.equal(t.getSprite("Skikatze").direction, 90, 1, "Expected Sprite Skikatze to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Hindernis").direction, 90, 1, "Expected Sprite Hindernis to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Skikatze").effects.color, 0, "Expected effect color of Sprite Skikatze to be 0");
  t.assert.equal(t.getSprite("Skikatze").effects.fisheye, 0, "Expected effect fisheye of Sprite Skikatze to be 0");
  t.assert.equal(t.getSprite("Skikatze").effects.whirl, 0, "Expected effect whirl of Sprite Skikatze to be 0");
  t.assert.equal(t.getSprite("Skikatze").effects.pixelate, 0, "Expected effect pixelate of Sprite Skikatze to be 0");
  t.assert.equal(t.getSprite("Skikatze").effects.mosaic, 0, "Expected effect mosaic of Sprite Skikatze to be 0");
  t.assert.equal(t.getSprite("Skikatze").effects.brightness, 0, "Expected effect brightness of Sprite Skikatze to be 0");
  t.assert.equal(t.getSprite("Skikatze").effects.ghost, 0, "Expected effect ghost of Sprite Skikatze to be 0");
  t.assert.equal(t.getSprite("Hindernis").effects.color, 0, "Expected effect color of Sprite Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").effects.fisheye, 0, "Expected effect fisheye of Sprite Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").effects.whirl, 0, "Expected effect whirl of Sprite Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").effects.pixelate, 0, "Expected effect pixelate of Sprite Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").effects.mosaic, 0, "Expected effect mosaic of Sprite Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").effects.brightness, 0, "Expected effect brightness of Sprite Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").effects.ghost, 0, "Expected effect ghost of Sprite Hindernis to be 0");
  t.assert.equal(t.getSprite("Skikatze").layerOrder, 2, "Expected Sprite Skikatze to be at layer 2");
  t.assert.equal(t.getSprite("Hindernis").layerOrder, 1, "Expected Sprite Hindernis to be at layer 1");
  t.assert.withinRange(t.getSprite("Skikatze").x, 0, 5, "Expected Sprite Skikatze to have x-position 0 +-5");
  t.assert.withinRange(t.getSprite("Skikatze").y, 100, 5, "Expected Sprite Skikatze to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").x, -70, 5, "Expected Sprite Hindernis to have x-position -70 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").y, -32.04599999999999, 5, "Expected Sprite Hindernis to have y-position -32.04599999999999 +-5");
  t.assert.not(t.getSprite("Skikatze").sayText, "Expected Sprite Skikatze not to say anything");
  t.assert.not(t.getSprite("Hindernis").sayText, "Expected Sprite Hindernis not to say anything");
  t.assert.withinRange(t.getSprite("Skikatze").size, 100, 1, "Expected Sprite Skikatze to have size 100 +-1");
  t.assert.withinRange(t.getSprite("Hindernis").size, 60, 1, "Expected Sprite Hindernis to have size 60 +-1");
  t.assert.equal(t.getSprite("Hindernis").getVariable("Hindernis_x").value, "-70", "Expected Hindernis_x to have value -70 in Sprite Hindernis");
  t.assert.ok(t.getSprite("Skikatze").visible, "Expected Sprite Skikatze to be visible");
  t.assert.not(t.getSprite("Hindernis").visible, "Expected Sprite Hindernis not to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Skikatze").volume, 100, "Expected Sprite Skikatze to have volume 100");
  t.assert.equal(t.getSprite("Hindernis").volume, 100, "Expected Sprite Hindernis to have volume 100");
  await t.runForSteps(12);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.equal(t.getSprite("Skikatze").currentCostume, 0, "Expected Sprite Skikatze to have costume 0");
  t.assert.equal(t.getSprite("Hindernis").currentCostume, 0, "Expected Sprite Hindernis to have costume 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).currentCostume, 1, "Expected Clone 1 of Hindernis to have costume 1");
  t.assert.equal(t.getSprite("Skikatze").getCloneCount(), 0, "Expected Sprite Skikatze to have 0 clones");
  t.assert.equal(t.getSprite("Hindernis").getCloneCount(), 1, "Expected Sprite Hindernis to have 1 clones");
  t.assert.equal(t.getSprite("Skikatze").direction, 90, 1, "Expected Sprite Skikatze to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Hindernis").direction, 90, 1, "Expected Sprite Hindernis to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).direction, 90, 1, "Expected Clone 1 of Hindernis to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Skikatze").effects.color, 0, "Expected effect color of Sprite Skikatze to be 0");
  t.assert.equal(t.getSprite("Skikatze").effects.fisheye, 0, "Expected effect fisheye of Sprite Skikatze to be 0");
  t.assert.equal(t.getSprite("Skikatze").effects.whirl, 0, "Expected effect whirl of Sprite Skikatze to be 0");
  t.assert.equal(t.getSprite("Skikatze").effects.pixelate, 0, "Expected effect pixelate of Sprite Skikatze to be 0");
  t.assert.equal(t.getSprite("Skikatze").effects.mosaic, 0, "Expected effect mosaic of Sprite Skikatze to be 0");
  t.assert.equal(t.getSprite("Skikatze").effects.brightness, 0, "Expected effect brightness of Sprite Skikatze to be 0");
  t.assert.equal(t.getSprite("Skikatze").effects.ghost, 0, "Expected effect ghost of Sprite Skikatze to be 0");
  t.assert.equal(t.getSprite("Hindernis").effects.color, 0, "Expected effect color of Sprite Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").effects.fisheye, 0, "Expected effect fisheye of Sprite Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").effects.whirl, 0, "Expected effect whirl of Sprite Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").effects.pixelate, 0, "Expected effect pixelate of Sprite Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").effects.mosaic, 0, "Expected effect mosaic of Sprite Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").effects.brightness, 0, "Expected effect brightness of Sprite Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").effects.ghost, 0, "Expected effect ghost of Sprite Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Skikatze").layerOrder, 3, "Expected Sprite Skikatze to be at layer 3");
  t.assert.equal(t.getSprite("Hindernis").layerOrder, 2, "Expected Sprite Hindernis to be at layer 2");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).getLayerOrder(), 1, "Expected Clone 1 of Hindernis to be at layer 1");
  t.assert.withinRange(t.getSprite("Skikatze").x, 2, 5, "Expected Sprite Skikatze to have x-position 2 +-5");
  t.assert.withinRange(t.getSprite("Skikatze").y, 100, 5, "Expected Sprite Skikatze to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").x, -70, 5, "Expected Sprite Hindernis to have x-position -70 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").y, -32.04599999999999, 5, "Expected Sprite Hindernis to have y-position -32.04599999999999 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(1).x, -10, 5, "Expected Clone 1 of Hindernis to have x-position -10 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(1).y, -180, 5, "Expected Clone 1 of Hindernis to have y-position -180 +-5");
  t.assert.not(t.getSprite("Skikatze").sayText, "Expected Sprite Skikatze not to say anything");
  t.assert.not(t.getSprite("Hindernis").sayText, "Expected Sprite Hindernis not to say anything");
  t.assert.not(t.getSprite("Hindernis").getClone(1).sayText, "Expected Clone 1 of Hindernis not to say anything");
  t.assert.withinRange(t.getSprite("Skikatze").size, 100, 1, "Expected Sprite Skikatze to have size 100 +-1");
  t.assert.withinRange(t.getSprite("Hindernis").size, 60, 1, "Expected Sprite Hindernis to have size 60 +-1");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(1).size, 60, 1, "Expected Clone 1 of Hindernis to have size 60 +-1");
  t.assert.equal(t.getSprite("Hindernis").getVariable("Hindernis_x").value, "-70", "Expected Hindernis_x to have value -70 in Sprite Hindernis");
  t.assert.ok(t.getSprite("Skikatze").visible, "Expected Sprite Skikatze to be visible");
  t.assert.not(t.getSprite("Hindernis").visible, "Expected Sprite Hindernis not to be visible");
  t.assert.ok(t.getSprite("Hindernis").getClone(1).visible, "Expected Clone 1 of Hindernis to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Skikatze").volume, 100, "Expected Sprite Skikatze to have volume 100");
  t.assert.equal(t.getSprite("Hindernis").volume, 100, "Expected Sprite Hindernis to have volume 100");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).volume, 100, "Expected Clone 1 of Hindernis to have volume 100");
  t.keyPress('left arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.equal(t.getSprite("Skikatze").currentCostume, 0, "Expected Sprite Skikatze to have costume 0");
  t.assert.equal(t.getSprite("Hindernis").currentCostume, 0, "Expected Sprite Hindernis to have costume 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).currentCostume, 1, "Expected Clone 1 of Hindernis to have costume 1");
  t.assert.equal(t.getSprite("Skikatze").getCloneCount(), 0, "Expected Sprite Skikatze to have 0 clones");
  t.assert.equal(t.getSprite("Hindernis").getCloneCount(), 1, "Expected Sprite Hindernis to have 1 clones");
  t.assert.equal(t.getSprite("Skikatze").direction, 90, 1, "Expected Sprite Skikatze to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Hindernis").direction, 90, 1, "Expected Sprite Hindernis to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).direction, 90, 1, "Expected Clone 1 of Hindernis to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Skikatze").effects.color, 0, "Expected effect color of Sprite Skikatze to be 0");
  t.assert.equal(t.getSprite("Skikatze").effects.fisheye, 0, "Expected effect fisheye of Sprite Skikatze to be 0");
  t.assert.equal(t.getSprite("Skikatze").effects.whirl, 0, "Expected effect whirl of Sprite Skikatze to be 0");
  t.assert.equal(t.getSprite("Skikatze").effects.pixelate, 0, "Expected effect pixelate of Sprite Skikatze to be 0");
  t.assert.equal(t.getSprite("Skikatze").effects.mosaic, 0, "Expected effect mosaic of Sprite Skikatze to be 0");
  t.assert.equal(t.getSprite("Skikatze").effects.brightness, 0, "Expected effect brightness of Sprite Skikatze to be 0");
  t.assert.equal(t.getSprite("Skikatze").effects.ghost, 0, "Expected effect ghost of Sprite Skikatze to be 0");
  t.assert.equal(t.getSprite("Hindernis").effects.color, 0, "Expected effect color of Sprite Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").effects.fisheye, 0, "Expected effect fisheye of Sprite Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").effects.whirl, 0, "Expected effect whirl of Sprite Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").effects.pixelate, 0, "Expected effect pixelate of Sprite Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").effects.mosaic, 0, "Expected effect mosaic of Sprite Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").effects.brightness, 0, "Expected effect brightness of Sprite Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").effects.ghost, 0, "Expected effect ghost of Sprite Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Hindernis to be 0");
  t.assert.equal(t.getSprite("Skikatze").layerOrder, 3, "Expected Sprite Skikatze to be at layer 3");
  t.assert.equal(t.getSprite("Hindernis").layerOrder, 2, "Expected Sprite Hindernis to be at layer 2");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).getLayerOrder(), 1, "Expected Clone 1 of Hindernis to be at layer 1");
  t.assert.withinRange(t.getSprite("Skikatze").x, -20, 5, "Expected Sprite Skikatze to have x-position -20 +-5");
  t.assert.withinRange(t.getSprite("Skikatze").y, 100, 5, "Expected Sprite Skikatze to have y-position 100 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").x, -70, 5, "Expected Sprite Hindernis to have x-position -70 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").y, -32.04599999999999, 5, "Expected Sprite Hindernis to have y-position -32.04599999999999 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(1).x, -10, 5, "Expected Clone 1 of Hindernis to have x-position -10 +-5");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(1).y, -156, 5, "Expected Clone 1 of Hindernis to have y-position -156 +-5");
  t.assert.not(t.getSprite("Skikatze").sayText, "Expected Sprite Skikatze not to say anything");
  t.assert.not(t.getSprite("Hindernis").sayText, "Expected Sprite Hindernis not to say anything");
  t.assert.not(t.getSprite("Hindernis").getClone(1).sayText, "Expected Clone 1 of Hindernis not to say anything");
  t.assert.withinRange(t.getSprite("Skikatze").size, 100, 1, "Expected Sprite Skikatze to have size 100 +-1");
  t.assert.withinRange(t.getSprite("Hindernis").size, 60, 1, "Expected Sprite Hindernis to have size 60 +-1");
  t.assert.withinRange(t.getSprite("Hindernis").getClone(1).size, 60, 1, "Expected Clone 1 of Hindernis to have size 60 +-1");
  t.assert.equal(t.getSprite("Hindernis").getVariable("Hindernis_x").value, "-70", "Expected Hindernis_x to have value -70 in Sprite Hindernis");
  t.assert.ok(t.getSprite("Skikatze").visible, "Expected Sprite Skikatze to be visible");
  t.assert.not(t.getSprite("Hindernis").visible, "Expected Sprite Hindernis not to be visible");
  t.assert.ok(t.getSprite("Hindernis").getClone(1).visible, "Expected Clone 1 of Hindernis to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Skikatze").volume, 100, "Expected Sprite Skikatze to have volume 100");
  t.assert.equal(t.getSprite("Hindernis").volume, 100, "Expected Sprite Hindernis to have volume 100");
  t.assert.equal(t.getSprite("Hindernis").getClone(1).volume, 100, "Expected Clone 1 of Hindernis to have volume 100");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937773465',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937773465',
      type: 'standard',
  }
]
