const test0 = async function (t) {
  await t.runForSteps(56);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.equal(t.getSprite("Sprite1").currentCostume, 0, "Expected Sprite Sprite1 to have costume 0");
  t.assert.equal(t.getSprite("Sprite1").getCloneCount(), 0, "Expected Sprite Sprite1 to have 0 clones");
  t.assert.equal(t.getSprite("Sprite1").direction, 90, 1, "Expected Sprite Sprite1 to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Sprite1").effects.color, 0, "Expected effect color of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.fisheye, 0, "Expected effect fisheye of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.whirl, 0, "Expected effect whirl of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.pixelate, 0, "Expected effect pixelate of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.mosaic, 0, "Expected effect mosaic of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.brightness, 0, "Expected effect brightness of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.ghost, 0, "Expected effect ghost of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").layerOrder, 1, "Expected Sprite Sprite1 to be at layer 1");
  t.assert.withinRange(t.getSprite("Sprite1").x, 0, 5, "Expected Sprite Sprite1 to have x-position 0 +-5");
  t.assert.withinRange(t.getSprite("Sprite1").y, 0, 5, "Expected Sprite Sprite1 to have y-position 0 +-5");
  t.assert.equal(t.getSprite("Sprite1").sayText, "x?", "Expected Sprite Sprite1 to say x?");
  t.assert.withinRange(t.getSprite("Sprite1").size, 100, 1, "Expected Sprite Sprite1 to have size 100 +-1");
  t.assert.ok(t.getSprite("Sprite1").visible, "Expected Sprite Sprite1 to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Sprite1").volume, 100, "Expected Sprite Sprite1 to have volume 100");
  t.typeText('10');
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.equal(t.getSprite("Sprite1").currentCostume, 0, "Expected Sprite Sprite1 to have costume 0");
  t.assert.equal(t.getSprite("Sprite1").getCloneCount(), 0, "Expected Sprite Sprite1 to have 0 clones");
  t.assert.equal(t.getSprite("Sprite1").direction, 90, 1, "Expected Sprite Sprite1 to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Sprite1").effects.color, 0, "Expected effect color of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.fisheye, 0, "Expected effect fisheye of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.whirl, 0, "Expected effect whirl of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.pixelate, 0, "Expected effect pixelate of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.mosaic, 0, "Expected effect mosaic of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.brightness, 0, "Expected effect brightness of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.ghost, 0, "Expected effect ghost of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").layerOrder, 1, "Expected Sprite Sprite1 to be at layer 1");
  t.assert.withinRange(t.getSprite("Sprite1").x, 0, 5, "Expected Sprite Sprite1 to have x-position 0 +-5");
  t.assert.withinRange(t.getSprite("Sprite1").y, 0, 5, "Expected Sprite Sprite1 to have y-position 0 +-5");
  t.assert.equal(t.getSprite("Sprite1").sayText, "y?", "Expected Sprite Sprite1 to say y?");
  t.assert.withinRange(t.getSprite("Sprite1").size, 100, 1, "Expected Sprite Sprite1 to have size 100 +-1");
  t.assert.ok(t.getSprite("Sprite1").visible, "Expected Sprite Sprite1 to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Sprite1").volume, 100, "Expected Sprite Sprite1 to have volume 100");
  t.typeText('10');
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.equal(t.getSprite("Sprite1").currentCostume, 0, "Expected Sprite Sprite1 to have costume 0");
  t.assert.equal(t.getSprite("Sprite1").getCloneCount(), 0, "Expected Sprite Sprite1 to have 0 clones");
  t.assert.equal(t.getSprite("Sprite1").direction, 90, 1, "Expected Sprite Sprite1 to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Sprite1").effects.color, 0, "Expected effect color of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.fisheye, 0, "Expected effect fisheye of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.whirl, 0, "Expected effect whirl of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.pixelate, 0, "Expected effect pixelate of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.mosaic, 0, "Expected effect mosaic of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.brightness, 0, "Expected effect brightness of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.ghost, 0, "Expected effect ghost of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").layerOrder, 1, "Expected Sprite Sprite1 to be at layer 1");
  t.assert.withinRange(t.getSprite("Sprite1").x, 0, 5, "Expected Sprite Sprite1 to have x-position 0 +-5");
  t.assert.withinRange(t.getSprite("Sprite1").y, 0, 5, "Expected Sprite Sprite1 to have y-position 0 +-5");
  t.assert.equal(t.getSprite("Sprite1").sayText, "z?", "Expected Sprite Sprite1 to say z?");
  t.assert.withinRange(t.getSprite("Sprite1").size, 100, 1, "Expected Sprite Sprite1 to have size 100 +-1");
  t.assert.ok(t.getSprite("Sprite1").visible, "Expected Sprite Sprite1 to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Sprite1").volume, 100, "Expected Sprite Sprite1 to have volume 100");
  t.typeText('13');
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.equal(t.getSprite("Sprite1").currentCostume, 0, "Expected Sprite Sprite1 to have costume 0");
  t.assert.equal(t.getSprite("Sprite1").getCloneCount(), 0, "Expected Sprite Sprite1 to have 0 clones");
  t.assert.equal(t.getSprite("Sprite1").direction, 90, 1, "Expected Sprite Sprite1 to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Sprite1").effects.color, 0, "Expected effect color of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.fisheye, 0, "Expected effect fisheye of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.whirl, 0, "Expected effect whirl of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.pixelate, 0, "Expected effect pixelate of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.mosaic, 0, "Expected effect mosaic of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.brightness, 0, "Expected effect brightness of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.ghost, 0, "Expected effect ghost of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").layerOrder, 1, "Expected Sprite Sprite1 to be at layer 1");
  t.assert.withinRange(t.getSprite("Sprite1").x, 0, 5, "Expected Sprite Sprite1 to have x-position 0 +-5");
  t.assert.withinRange(t.getSprite("Sprite1").y, 0, 5, "Expected Sprite Sprite1 to have y-position 0 +-5");
  t.assert.equal(t.getSprite("Sprite1").sayText, "isosceles", "Expected Sprite Sprite1 to say isosceles");
  t.assert.withinRange(t.getSprite("Sprite1").size, 100, 1, "Expected Sprite Sprite1 to have size 100 +-1");
  t.assert.ok(t.getSprite("Sprite1").visible, "Expected Sprite Sprite1 to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Sprite1").volume, 100, "Expected Sprite Sprite1 to have volume 100");
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(47);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.equal(t.getSprite("Sprite1").currentCostume, 0, "Expected Sprite Sprite1 to have costume 0");
  t.assert.equal(t.getSprite("Sprite1").getCloneCount(), 0, "Expected Sprite Sprite1 to have 0 clones");
  t.assert.equal(t.getSprite("Sprite1").direction, 90, 1, "Expected Sprite Sprite1 to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Sprite1").effects.color, 0, "Expected effect color of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.fisheye, 0, "Expected effect fisheye of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.whirl, 0, "Expected effect whirl of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.pixelate, 0, "Expected effect pixelate of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.mosaic, 0, "Expected effect mosaic of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.brightness, 0, "Expected effect brightness of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.ghost, 0, "Expected effect ghost of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").layerOrder, 1, "Expected Sprite Sprite1 to be at layer 1");
  t.assert.withinRange(t.getSprite("Sprite1").x, 0, 5, "Expected Sprite Sprite1 to have x-position 0 +-5");
  t.assert.withinRange(t.getSprite("Sprite1").y, 0, 5, "Expected Sprite Sprite1 to have y-position 0 +-5");
  t.assert.equal(t.getSprite("Sprite1").sayText, "x?", "Expected Sprite Sprite1 to say x?");
  t.assert.withinRange(t.getSprite("Sprite1").size, 100, 1, "Expected Sprite Sprite1 to have size 100 +-1");
  t.assert.ok(t.getSprite("Sprite1").visible, "Expected Sprite Sprite1 to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Sprite1").volume, 100, "Expected Sprite Sprite1 to have volume 100");
  t.typeText('10');
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.equal(t.getSprite("Sprite1").currentCostume, 0, "Expected Sprite Sprite1 to have costume 0");
  t.assert.equal(t.getSprite("Sprite1").getCloneCount(), 0, "Expected Sprite Sprite1 to have 0 clones");
  t.assert.equal(t.getSprite("Sprite1").direction, 90, 1, "Expected Sprite Sprite1 to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Sprite1").effects.color, 0, "Expected effect color of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.fisheye, 0, "Expected effect fisheye of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.whirl, 0, "Expected effect whirl of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.pixelate, 0, "Expected effect pixelate of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.mosaic, 0, "Expected effect mosaic of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.brightness, 0, "Expected effect brightness of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.ghost, 0, "Expected effect ghost of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").layerOrder, 1, "Expected Sprite Sprite1 to be at layer 1");
  t.assert.withinRange(t.getSprite("Sprite1").x, 0, 5, "Expected Sprite Sprite1 to have x-position 0 +-5");
  t.assert.withinRange(t.getSprite("Sprite1").y, 0, 5, "Expected Sprite Sprite1 to have y-position 0 +-5");
  t.assert.equal(t.getSprite("Sprite1").sayText, "y?", "Expected Sprite Sprite1 to say y?");
  t.assert.withinRange(t.getSprite("Sprite1").size, 100, 1, "Expected Sprite Sprite1 to have size 100 +-1");
  t.assert.ok(t.getSprite("Sprite1").visible, "Expected Sprite Sprite1 to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Sprite1").volume, 100, "Expected Sprite Sprite1 to have volume 100");
  t.typeText('222');
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.equal(t.getSprite("Sprite1").currentCostume, 0, "Expected Sprite Sprite1 to have costume 0");
  t.assert.equal(t.getSprite("Sprite1").getCloneCount(), 0, "Expected Sprite Sprite1 to have 0 clones");
  t.assert.equal(t.getSprite("Sprite1").direction, 90, 1, "Expected Sprite Sprite1 to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Sprite1").effects.color, 0, "Expected effect color of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.fisheye, 0, "Expected effect fisheye of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.whirl, 0, "Expected effect whirl of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.pixelate, 0, "Expected effect pixelate of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.mosaic, 0, "Expected effect mosaic of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.brightness, 0, "Expected effect brightness of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.ghost, 0, "Expected effect ghost of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").layerOrder, 1, "Expected Sprite Sprite1 to be at layer 1");
  t.assert.withinRange(t.getSprite("Sprite1").x, 0, 5, "Expected Sprite Sprite1 to have x-position 0 +-5");
  t.assert.withinRange(t.getSprite("Sprite1").y, 0, 5, "Expected Sprite Sprite1 to have y-position 0 +-5");
  t.assert.equal(t.getSprite("Sprite1").sayText, "z?", "Expected Sprite Sprite1 to say z?");
  t.assert.withinRange(t.getSprite("Sprite1").size, 100, 1, "Expected Sprite Sprite1 to have size 100 +-1");
  t.assert.ok(t.getSprite("Sprite1").visible, "Expected Sprite Sprite1 to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Sprite1").volume, 100, "Expected Sprite Sprite1 to have volume 100");
  t.typeText('216');
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.equal(t.getSprite("Sprite1").currentCostume, 0, "Expected Sprite Sprite1 to have costume 0");
  t.assert.equal(t.getSprite("Sprite1").getCloneCount(), 0, "Expected Sprite Sprite1 to have 0 clones");
  t.assert.equal(t.getSprite("Sprite1").direction, 90, 1, "Expected Sprite Sprite1 to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Sprite1").effects.color, 0, "Expected effect color of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.fisheye, 0, "Expected effect fisheye of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.whirl, 0, "Expected effect whirl of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.pixelate, 0, "Expected effect pixelate of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.mosaic, 0, "Expected effect mosaic of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.brightness, 0, "Expected effect brightness of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.ghost, 0, "Expected effect ghost of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").layerOrder, 1, "Expected Sprite Sprite1 to be at layer 1");
  t.assert.withinRange(t.getSprite("Sprite1").x, 0, 5, "Expected Sprite Sprite1 to have x-position 0 +-5");
  t.assert.withinRange(t.getSprite("Sprite1").y, 0, 5, "Expected Sprite Sprite1 to have y-position 0 +-5");
  t.assert.equal(t.getSprite("Sprite1").sayText, "scalene", "Expected Sprite Sprite1 to say scalene");
  t.assert.withinRange(t.getSprite("Sprite1").size, 100, 1, "Expected Sprite Sprite1 to have size 100 +-1");
  t.assert.ok(t.getSprite("Sprite1").visible, "Expected Sprite Sprite1 to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Sprite1").volume, 100, "Expected Sprite Sprite1 to have volume 100");
  t.end();
}
const test2 = async function (t) {
  await t.runForSteps(300);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.equal(t.getSprite("Sprite1").currentCostume, 0, "Expected Sprite Sprite1 to have costume 0");
  t.assert.equal(t.getSprite("Sprite1").getCloneCount(), 0, "Expected Sprite Sprite1 to have 0 clones");
  t.assert.equal(t.getSprite("Sprite1").direction, 90, 1, "Expected Sprite Sprite1 to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Sprite1").effects.color, 0, "Expected effect color of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.fisheye, 0, "Expected effect fisheye of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.whirl, 0, "Expected effect whirl of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.pixelate, 0, "Expected effect pixelate of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.mosaic, 0, "Expected effect mosaic of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.brightness, 0, "Expected effect brightness of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.ghost, 0, "Expected effect ghost of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").layerOrder, 1, "Expected Sprite Sprite1 to be at layer 1");
  t.assert.withinRange(t.getSprite("Sprite1").x, 0, 5, "Expected Sprite Sprite1 to have x-position 0 +-5");
  t.assert.withinRange(t.getSprite("Sprite1").y, 0, 5, "Expected Sprite Sprite1 to have y-position 0 +-5");
  t.assert.equal(t.getSprite("Sprite1").sayText, "x?", "Expected Sprite Sprite1 to say x?");
  t.assert.withinRange(t.getSprite("Sprite1").size, 100, 1, "Expected Sprite Sprite1 to have size 100 +-1");
  t.assert.ok(t.getSprite("Sprite1").visible, "Expected Sprite Sprite1 to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Sprite1").volume, 100, "Expected Sprite Sprite1 to have volume 100");
  t.typeText('10');
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.equal(t.getSprite("Sprite1").currentCostume, 0, "Expected Sprite Sprite1 to have costume 0");
  t.assert.equal(t.getSprite("Sprite1").getCloneCount(), 0, "Expected Sprite Sprite1 to have 0 clones");
  t.assert.equal(t.getSprite("Sprite1").direction, 90, 1, "Expected Sprite Sprite1 to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Sprite1").effects.color, 0, "Expected effect color of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.fisheye, 0, "Expected effect fisheye of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.whirl, 0, "Expected effect whirl of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.pixelate, 0, "Expected effect pixelate of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.mosaic, 0, "Expected effect mosaic of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.brightness, 0, "Expected effect brightness of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.ghost, 0, "Expected effect ghost of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").layerOrder, 1, "Expected Sprite Sprite1 to be at layer 1");
  t.assert.withinRange(t.getSprite("Sprite1").x, 0, 5, "Expected Sprite Sprite1 to have x-position 0 +-5");
  t.assert.withinRange(t.getSprite("Sprite1").y, 0, 5, "Expected Sprite Sprite1 to have y-position 0 +-5");
  t.assert.equal(t.getSprite("Sprite1").sayText, "y?", "Expected Sprite Sprite1 to say y?");
  t.assert.withinRange(t.getSprite("Sprite1").size, 100, 1, "Expected Sprite Sprite1 to have size 100 +-1");
  t.assert.ok(t.getSprite("Sprite1").visible, "Expected Sprite Sprite1 to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Sprite1").volume, 100, "Expected Sprite Sprite1 to have volume 100");
  t.typeText('10');
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.equal(t.getSprite("Sprite1").currentCostume, 0, "Expected Sprite Sprite1 to have costume 0");
  t.assert.equal(t.getSprite("Sprite1").getCloneCount(), 0, "Expected Sprite Sprite1 to have 0 clones");
  t.assert.equal(t.getSprite("Sprite1").direction, 90, 1, "Expected Sprite Sprite1 to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Sprite1").effects.color, 0, "Expected effect color of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.fisheye, 0, "Expected effect fisheye of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.whirl, 0, "Expected effect whirl of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.pixelate, 0, "Expected effect pixelate of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.mosaic, 0, "Expected effect mosaic of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.brightness, 0, "Expected effect brightness of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.ghost, 0, "Expected effect ghost of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").layerOrder, 1, "Expected Sprite Sprite1 to be at layer 1");
  t.assert.withinRange(t.getSprite("Sprite1").x, 0, 5, "Expected Sprite Sprite1 to have x-position 0 +-5");
  t.assert.withinRange(t.getSprite("Sprite1").y, 0, 5, "Expected Sprite Sprite1 to have y-position 0 +-5");
  t.assert.equal(t.getSprite("Sprite1").sayText, "z?", "Expected Sprite Sprite1 to say z?");
  t.assert.withinRange(t.getSprite("Sprite1").size, 100, 1, "Expected Sprite Sprite1 to have size 100 +-1");
  t.assert.ok(t.getSprite("Sprite1").visible, "Expected Sprite Sprite1 to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Sprite1").volume, 100, "Expected Sprite Sprite1 to have volume 100");
  t.typeText('10');
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.equal(t.getSprite("Sprite1").currentCostume, 0, "Expected Sprite Sprite1 to have costume 0");
  t.assert.equal(t.getSprite("Sprite1").getCloneCount(), 0, "Expected Sprite Sprite1 to have 0 clones");
  t.assert.equal(t.getSprite("Sprite1").direction, 90, 1, "Expected Sprite Sprite1 to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Sprite1").effects.color, 0, "Expected effect color of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.fisheye, 0, "Expected effect fisheye of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.whirl, 0, "Expected effect whirl of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.pixelate, 0, "Expected effect pixelate of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.mosaic, 0, "Expected effect mosaic of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.brightness, 0, "Expected effect brightness of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.ghost, 0, "Expected effect ghost of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").layerOrder, 1, "Expected Sprite Sprite1 to be at layer 1");
  t.assert.withinRange(t.getSprite("Sprite1").x, 0, 5, "Expected Sprite Sprite1 to have x-position 0 +-5");
  t.assert.withinRange(t.getSprite("Sprite1").y, 0, 5, "Expected Sprite Sprite1 to have y-position 0 +-5");
  t.assert.equal(t.getSprite("Sprite1").sayText, "equilateral", "Expected Sprite Sprite1 to say equilateral");
  t.assert.withinRange(t.getSprite("Sprite1").size, 100, 1, "Expected Sprite Sprite1 to have size 100 +-1");
  t.assert.ok(t.getSprite("Sprite1").visible, "Expected Sprite Sprite1 to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Sprite1").volume, 100, "Expected Sprite Sprite1 to have volume 100");
  t.end();
}
const test3 = async function (t) {
  await t.runForSteps(28);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.equal(t.getSprite("Sprite1").currentCostume, 0, "Expected Sprite Sprite1 to have costume 0");
  t.assert.equal(t.getSprite("Sprite1").getCloneCount(), 0, "Expected Sprite Sprite1 to have 0 clones");
  t.assert.equal(t.getSprite("Sprite1").direction, 90, 1, "Expected Sprite Sprite1 to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Sprite1").effects.color, 0, "Expected effect color of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.fisheye, 0, "Expected effect fisheye of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.whirl, 0, "Expected effect whirl of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.pixelate, 0, "Expected effect pixelate of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.mosaic, 0, "Expected effect mosaic of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.brightness, 0, "Expected effect brightness of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.ghost, 0, "Expected effect ghost of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").layerOrder, 1, "Expected Sprite Sprite1 to be at layer 1");
  t.assert.withinRange(t.getSprite("Sprite1").x, 0, 5, "Expected Sprite Sprite1 to have x-position 0 +-5");
  t.assert.withinRange(t.getSprite("Sprite1").y, 0, 5, "Expected Sprite Sprite1 to have y-position 0 +-5");
  t.assert.equal(t.getSprite("Sprite1").sayText, "x?", "Expected Sprite Sprite1 to say x?");
  t.assert.withinRange(t.getSprite("Sprite1").size, 100, 1, "Expected Sprite Sprite1 to have size 100 +-1");
  t.assert.ok(t.getSprite("Sprite1").visible, "Expected Sprite Sprite1 to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Sprite1").volume, 100, "Expected Sprite Sprite1 to have volume 100");
  t.typeText('0');
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.equal(t.getSprite("Sprite1").currentCostume, 0, "Expected Sprite Sprite1 to have costume 0");
  t.assert.equal(t.getSprite("Sprite1").getCloneCount(), 0, "Expected Sprite Sprite1 to have 0 clones");
  t.assert.equal(t.getSprite("Sprite1").direction, 90, 1, "Expected Sprite Sprite1 to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Sprite1").effects.color, 0, "Expected effect color of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.fisheye, 0, "Expected effect fisheye of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.whirl, 0, "Expected effect whirl of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.pixelate, 0, "Expected effect pixelate of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.mosaic, 0, "Expected effect mosaic of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.brightness, 0, "Expected effect brightness of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.ghost, 0, "Expected effect ghost of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").layerOrder, 1, "Expected Sprite Sprite1 to be at layer 1");
  t.assert.withinRange(t.getSprite("Sprite1").x, 0, 5, "Expected Sprite Sprite1 to have x-position 0 +-5");
  t.assert.withinRange(t.getSprite("Sprite1").y, 0, 5, "Expected Sprite Sprite1 to have y-position 0 +-5");
  t.assert.equal(t.getSprite("Sprite1").sayText, "y?", "Expected Sprite Sprite1 to say y?");
  t.assert.withinRange(t.getSprite("Sprite1").size, 100, 1, "Expected Sprite Sprite1 to have size 100 +-1");
  t.assert.ok(t.getSprite("Sprite1").visible, "Expected Sprite Sprite1 to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Sprite1").volume, 100, "Expected Sprite Sprite1 to have volume 100");
  t.typeText('10');
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.equal(t.getSprite("Sprite1").currentCostume, 0, "Expected Sprite Sprite1 to have costume 0");
  t.assert.equal(t.getSprite("Sprite1").getCloneCount(), 0, "Expected Sprite Sprite1 to have 0 clones");
  t.assert.equal(t.getSprite("Sprite1").direction, 90, 1, "Expected Sprite Sprite1 to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Sprite1").effects.color, 0, "Expected effect color of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.fisheye, 0, "Expected effect fisheye of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.whirl, 0, "Expected effect whirl of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.pixelate, 0, "Expected effect pixelate of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.mosaic, 0, "Expected effect mosaic of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.brightness, 0, "Expected effect brightness of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.ghost, 0, "Expected effect ghost of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").layerOrder, 1, "Expected Sprite Sprite1 to be at layer 1");
  t.assert.withinRange(t.getSprite("Sprite1").x, 0, 5, "Expected Sprite Sprite1 to have x-position 0 +-5");
  t.assert.withinRange(t.getSprite("Sprite1").y, 0, 5, "Expected Sprite Sprite1 to have y-position 0 +-5");
  t.assert.equal(t.getSprite("Sprite1").sayText, "z?", "Expected Sprite Sprite1 to say z?");
  t.assert.withinRange(t.getSprite("Sprite1").size, 100, 1, "Expected Sprite Sprite1 to have size 100 +-1");
  t.assert.ok(t.getSprite("Sprite1").visible, "Expected Sprite Sprite1 to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Sprite1").volume, 100, "Expected Sprite Sprite1 to have volume 100");
  t.typeText('10');
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.equal(t.getSprite("Sprite1").currentCostume, 0, "Expected Sprite Sprite1 to have costume 0");
  t.assert.equal(t.getSprite("Sprite1").getCloneCount(), 0, "Expected Sprite Sprite1 to have 0 clones");
  t.assert.equal(t.getSprite("Sprite1").direction, 90, 1, "Expected Sprite Sprite1 to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Sprite1").effects.color, 0, "Expected effect color of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.fisheye, 0, "Expected effect fisheye of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.whirl, 0, "Expected effect whirl of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.pixelate, 0, "Expected effect pixelate of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.mosaic, 0, "Expected effect mosaic of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.brightness, 0, "Expected effect brightness of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.ghost, 0, "Expected effect ghost of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").layerOrder, 1, "Expected Sprite Sprite1 to be at layer 1");
  t.assert.withinRange(t.getSprite("Sprite1").x, 0, 5, "Expected Sprite Sprite1 to have x-position 0 +-5");
  t.assert.withinRange(t.getSprite("Sprite1").y, 0, 5, "Expected Sprite Sprite1 to have y-position 0 +-5");
  t.assert.equal(t.getSprite("Sprite1").sayText, "invalid", "Expected Sprite Sprite1 to say invalid");
  t.assert.withinRange(t.getSprite("Sprite1").size, 100, 1, "Expected Sprite Sprite1 to have size 100 +-1");
  t.assert.ok(t.getSprite("Sprite1").visible, "Expected Sprite Sprite1 to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Sprite1").volume, 100, "Expected Sprite Sprite1 to have volume 100");
  t.end();
}
const test4 = async function (t) {
  await t.runForSteps(50);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.equal(t.getSprite("Sprite1").currentCostume, 0, "Expected Sprite Sprite1 to have costume 0");
  t.assert.equal(t.getSprite("Sprite1").getCloneCount(), 0, "Expected Sprite Sprite1 to have 0 clones");
  t.assert.equal(t.getSprite("Sprite1").direction, 90, 1, "Expected Sprite Sprite1 to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Sprite1").effects.color, 0, "Expected effect color of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.fisheye, 0, "Expected effect fisheye of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.whirl, 0, "Expected effect whirl of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.pixelate, 0, "Expected effect pixelate of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.mosaic, 0, "Expected effect mosaic of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.brightness, 0, "Expected effect brightness of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.ghost, 0, "Expected effect ghost of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").layerOrder, 1, "Expected Sprite Sprite1 to be at layer 1");
  t.assert.withinRange(t.getSprite("Sprite1").x, 0, 5, "Expected Sprite Sprite1 to have x-position 0 +-5");
  t.assert.withinRange(t.getSprite("Sprite1").y, 0, 5, "Expected Sprite Sprite1 to have y-position 0 +-5");
  t.assert.equal(t.getSprite("Sprite1").sayText, "x?", "Expected Sprite Sprite1 to say x?");
  t.assert.withinRange(t.getSprite("Sprite1").size, 100, 1, "Expected Sprite Sprite1 to have size 100 +-1");
  t.assert.ok(t.getSprite("Sprite1").visible, "Expected Sprite Sprite1 to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Sprite1").volume, 100, "Expected Sprite Sprite1 to have volume 100");
  t.typeText('10');
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.equal(t.getSprite("Sprite1").currentCostume, 0, "Expected Sprite Sprite1 to have costume 0");
  t.assert.equal(t.getSprite("Sprite1").getCloneCount(), 0, "Expected Sprite Sprite1 to have 0 clones");
  t.assert.equal(t.getSprite("Sprite1").direction, 90, 1, "Expected Sprite Sprite1 to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Sprite1").effects.color, 0, "Expected effect color of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.fisheye, 0, "Expected effect fisheye of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.whirl, 0, "Expected effect whirl of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.pixelate, 0, "Expected effect pixelate of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.mosaic, 0, "Expected effect mosaic of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.brightness, 0, "Expected effect brightness of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.ghost, 0, "Expected effect ghost of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").layerOrder, 1, "Expected Sprite Sprite1 to be at layer 1");
  t.assert.withinRange(t.getSprite("Sprite1").x, 0, 5, "Expected Sprite Sprite1 to have x-position 0 +-5");
  t.assert.withinRange(t.getSprite("Sprite1").y, 0, 5, "Expected Sprite Sprite1 to have y-position 0 +-5");
  t.assert.equal(t.getSprite("Sprite1").sayText, "y?", "Expected Sprite Sprite1 to say y?");
  t.assert.withinRange(t.getSprite("Sprite1").size, 100, 1, "Expected Sprite Sprite1 to have size 100 +-1");
  t.assert.ok(t.getSprite("Sprite1").visible, "Expected Sprite Sprite1 to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Sprite1").volume, 100, "Expected Sprite Sprite1 to have volume 100");
  t.typeText('3cH');
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.equal(t.getSprite("Sprite1").currentCostume, 0, "Expected Sprite Sprite1 to have costume 0");
  t.assert.equal(t.getSprite("Sprite1").getCloneCount(), 0, "Expected Sprite Sprite1 to have 0 clones");
  t.assert.equal(t.getSprite("Sprite1").direction, 90, 1, "Expected Sprite Sprite1 to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Sprite1").effects.color, 0, "Expected effect color of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.fisheye, 0, "Expected effect fisheye of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.whirl, 0, "Expected effect whirl of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.pixelate, 0, "Expected effect pixelate of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.mosaic, 0, "Expected effect mosaic of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.brightness, 0, "Expected effect brightness of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.ghost, 0, "Expected effect ghost of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").layerOrder, 1, "Expected Sprite Sprite1 to be at layer 1");
  t.assert.withinRange(t.getSprite("Sprite1").x, 0, 5, "Expected Sprite Sprite1 to have x-position 0 +-5");
  t.assert.withinRange(t.getSprite("Sprite1").y, 0, 5, "Expected Sprite Sprite1 to have y-position 0 +-5");
  t.assert.equal(t.getSprite("Sprite1").sayText, "z?", "Expected Sprite Sprite1 to say z?");
  t.assert.withinRange(t.getSprite("Sprite1").size, 100, 1, "Expected Sprite Sprite1 to have size 100 +-1");
  t.assert.ok(t.getSprite("Sprite1").visible, "Expected Sprite Sprite1 to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Sprite1").volume, 100, "Expected Sprite Sprite1 to have volume 100");
  t.typeText('-43');
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.equal(t.getSprite("Sprite1").currentCostume, 0, "Expected Sprite Sprite1 to have costume 0");
  t.assert.equal(t.getSprite("Sprite1").getCloneCount(), 0, "Expected Sprite Sprite1 to have 0 clones");
  t.assert.equal(t.getSprite("Sprite1").direction, 90, 1, "Expected Sprite Sprite1 to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Sprite1").effects.color, 0, "Expected effect color of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.fisheye, 0, "Expected effect fisheye of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.whirl, 0, "Expected effect whirl of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.pixelate, 0, "Expected effect pixelate of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.mosaic, 0, "Expected effect mosaic of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.brightness, 0, "Expected effect brightness of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").effects.ghost, 0, "Expected effect ghost of Sprite Sprite1 to be 0");
  t.assert.equal(t.getSprite("Sprite1").layerOrder, 1, "Expected Sprite Sprite1 to be at layer 1");
  t.assert.withinRange(t.getSprite("Sprite1").x, 0, 5, "Expected Sprite Sprite1 to have x-position 0 +-5");
  t.assert.withinRange(t.getSprite("Sprite1").y, 0, 5, "Expected Sprite Sprite1 to have y-position 0 +-5");
  t.assert.equal(t.getSprite("Sprite1").sayText, "invalid", "Expected Sprite Sprite1 to say invalid");
  t.assert.withinRange(t.getSprite("Sprite1").size, 100, 1, "Expected Sprite Sprite1 to have size 100 +-1");
  t.assert.ok(t.getSprite("Sprite1").visible, "Expected Sprite Sprite1 to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Sprite1").volume, 100, "Expected Sprite Sprite1 to have volume 100");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937042126',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937042126',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937042126',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937042126',
      type: 'standard',
  },
  {
      test: test4,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937042126',
      type: 'standard',
  }
]
