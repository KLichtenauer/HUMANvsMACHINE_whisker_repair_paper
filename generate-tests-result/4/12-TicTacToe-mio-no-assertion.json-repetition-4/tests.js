const test0 = async function (t) {
  t.dragSprite('Katze', -148.62551206438414, 5.350633416130819, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.equal(t.getSprite("Katze").currentCostume, 0, "Expected Sprite Katze to have costume 0");
  t.assert.equal(t.getSprite("Tera").currentCostume, 0, "Expected Sprite Tera to have costume 0");
  t.assert.equal(t.getSprite("Katze").getCloneCount(), 0, "Expected Sprite Katze to have 0 clones");
  t.assert.equal(t.getSprite("Tera").getCloneCount(), 0, "Expected Sprite Tera to have 0 clones");
  t.assert.equal(t.getSprite("Katze").direction, 90, 1, "Expected Sprite Katze to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Tera").direction, 90, 1, "Expected Sprite Tera to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Katze").effects.color, 0, "Expected effect color of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Katze").effects.fisheye, 0, "Expected effect fisheye of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Katze").effects.whirl, 0, "Expected effect whirl of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Katze").effects.pixelate, 0, "Expected effect pixelate of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Katze").effects.mosaic, 0, "Expected effect mosaic of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Katze").effects.brightness, 0, "Expected effect brightness of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Katze").effects.ghost, 0, "Expected effect ghost of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Tera").effects.color, 0, "Expected effect color of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Tera").effects.fisheye, 0, "Expected effect fisheye of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Tera").effects.whirl, 0, "Expected effect whirl of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Tera").effects.pixelate, 0, "Expected effect pixelate of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Tera").effects.mosaic, 0, "Expected effect mosaic of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Tera").effects.brightness, 0, "Expected effect brightness of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Tera").effects.ghost, 0, "Expected effect ghost of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Katze").layerOrder, 3, "Expected Sprite Katze to be at layer 3");
  t.assert.equal(t.getSprite("Tera").layerOrder, 2, "Expected Sprite Tera to be at layer 2");
  t.assert.withinRange(t.getSprite("Katze").x, -195, 5, "Expected Sprite Katze to have x-position -195 +-5");
  t.assert.withinRange(t.getSprite("Katze").y, 0, 5, "Expected Sprite Katze to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("Tera").x, -74, 5, "Expected Sprite Tera to have x-position -74 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -107, 5, "Expected Sprite Tera to have y-position -107 +-5");
  t.assert.not(t.getSprite("Katze").sayText, "Expected Sprite Katze not to say anything");
  t.assert.not(t.getSprite("Tera").sayText, "Expected Sprite Tera not to say anything");
  t.assert.withinRange(t.getSprite("Katze").size, 70, 1, "Expected Sprite Katze to have size 70 +-1");
  t.assert.withinRange(t.getSprite("Tera").size, 60, 1, "Expected Sprite Tera to have size 60 +-1");
  t.assert.equal(t.getSprite("Katze").getVariable("Meine Züge").value, "0", "Expected Meine Züge to have value 0 in Sprite Katze");
  t.assert.ok(t.getSprite("Katze").visible, "Expected Sprite Katze to be visible");
  t.assert.not(t.getSprite("Tera").visible, "Expected Sprite Tera not to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Katze").volume, 100, "Expected Sprite Katze to have volume 100");
  t.assert.equal(t.getSprite("Tera").volume, 100, "Expected Sprite Tera to have volume 100");
  t.mouseMove(141, -19);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.equal(t.getSprite("Katze").currentCostume, 0, "Expected Sprite Katze to have costume 0");
  t.assert.equal(t.getSprite("Tera").currentCostume, 0, "Expected Sprite Tera to have costume 0");
  t.assert.equal(t.getSprite("Katze").getCloneCount(), 0, "Expected Sprite Katze to have 0 clones");
  t.assert.equal(t.getSprite("Tera").getCloneCount(), 0, "Expected Sprite Tera to have 0 clones");
  t.assert.equal(t.getSprite("Katze").direction, 90, 1, "Expected Sprite Katze to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Tera").direction, 90, 1, "Expected Sprite Tera to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Katze").effects.color, 0, "Expected effect color of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Katze").effects.fisheye, 0, "Expected effect fisheye of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Katze").effects.whirl, 0, "Expected effect whirl of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Katze").effects.pixelate, 0, "Expected effect pixelate of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Katze").effects.mosaic, 0, "Expected effect mosaic of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Katze").effects.brightness, 0, "Expected effect brightness of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Katze").effects.ghost, 0, "Expected effect ghost of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Tera").effects.color, 0, "Expected effect color of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Tera").effects.fisheye, 0, "Expected effect fisheye of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Tera").effects.whirl, 0, "Expected effect whirl of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Tera").effects.pixelate, 0, "Expected effect pixelate of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Tera").effects.mosaic, 0, "Expected effect mosaic of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Tera").effects.brightness, 0, "Expected effect brightness of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Tera").effects.ghost, 0, "Expected effect ghost of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Katze").layerOrder, 3, "Expected Sprite Katze to be at layer 3");
  t.assert.equal(t.getSprite("Tera").layerOrder, 2, "Expected Sprite Tera to be at layer 2");
  t.assert.withinRange(t.getSprite("Katze").x, -195, 5, "Expected Sprite Katze to have x-position -195 +-5");
  t.assert.withinRange(t.getSprite("Katze").y, 0, 5, "Expected Sprite Katze to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("Tera").x, -74, 5, "Expected Sprite Tera to have x-position -74 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -107, 5, "Expected Sprite Tera to have y-position -107 +-5");
  t.assert.not(t.getSprite("Katze").sayText, "Expected Sprite Katze not to say anything");
  t.assert.not(t.getSprite("Tera").sayText, "Expected Sprite Tera not to say anything");
  t.assert.withinRange(t.getSprite("Katze").size, 70, 1, "Expected Sprite Katze to have size 70 +-1");
  t.assert.withinRange(t.getSprite("Tera").size, 60, 1, "Expected Sprite Tera to have size 60 +-1");
  t.assert.equal(t.getSprite("Katze").getVariable("Meine Züge").value, "0", "Expected Meine Züge to have value 0 in Sprite Katze");
  t.assert.ok(t.getSprite("Katze").visible, "Expected Sprite Katze to be visible");
  t.assert.not(t.getSprite("Tera").visible, "Expected Sprite Tera not to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Katze").volume, 100, "Expected Sprite Katze to have volume 100");
  t.assert.equal(t.getSprite("Tera").volume, 100, "Expected Sprite Tera to have volume 100");
  t.mouseDown(true);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.equal(t.getSprite("Katze").currentCostume, 0, "Expected Sprite Katze to have costume 0");
  t.assert.equal(t.getSprite("Tera").currentCostume, 0, "Expected Sprite Tera to have costume 0");
  t.assert.equal(t.getSprite("Katze").getCloneCount(), 0, "Expected Sprite Katze to have 0 clones");
  t.assert.equal(t.getSprite("Tera").getCloneCount(), 0, "Expected Sprite Tera to have 0 clones");
  t.assert.equal(t.getSprite("Katze").direction, 90, 1, "Expected Sprite Katze to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Tera").direction, 90, 1, "Expected Sprite Tera to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Katze").effects.color, 0, "Expected effect color of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Katze").effects.fisheye, 0, "Expected effect fisheye of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Katze").effects.whirl, 0, "Expected effect whirl of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Katze").effects.pixelate, 0, "Expected effect pixelate of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Katze").effects.mosaic, 0, "Expected effect mosaic of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Katze").effects.brightness, 0, "Expected effect brightness of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Katze").effects.ghost, 0, "Expected effect ghost of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Tera").effects.color, 0, "Expected effect color of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Tera").effects.fisheye, 0, "Expected effect fisheye of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Tera").effects.whirl, 0, "Expected effect whirl of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Tera").effects.pixelate, 0, "Expected effect pixelate of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Tera").effects.mosaic, 0, "Expected effect mosaic of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Tera").effects.brightness, 0, "Expected effect brightness of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Tera").effects.ghost, 0, "Expected effect ghost of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Katze").layerOrder, 3, "Expected Sprite Katze to be at layer 3");
  t.assert.equal(t.getSprite("Tera").layerOrder, 2, "Expected Sprite Tera to be at layer 2");
  t.assert.withinRange(t.getSprite("Katze").x, -195, 5, "Expected Sprite Katze to have x-position -195 +-5");
  t.assert.withinRange(t.getSprite("Katze").y, 0, 5, "Expected Sprite Katze to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("Tera").x, 26, 5, "Expected Sprite Tera to have x-position 26 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -107, 5, "Expected Sprite Tera to have y-position -107 +-5");
  t.assert.not(t.getSprite("Katze").sayText, "Expected Sprite Katze not to say anything");
  t.assert.not(t.getSprite("Tera").sayText, "Expected Sprite Tera not to say anything");
  t.assert.withinRange(t.getSprite("Katze").size, 70, 1, "Expected Sprite Katze to have size 70 +-1");
  t.assert.withinRange(t.getSprite("Tera").size, 60, 1, "Expected Sprite Tera to have size 60 +-1");
  t.assert.equal(t.getSprite("Katze").getVariable("Meine Züge").value, "1", "Expected Meine Züge to have value 1 in Sprite Katze");
  t.assert.ok(t.getSprite("Katze").visible, "Expected Sprite Katze to be visible");
  t.assert.not(t.getSprite("Tera").visible, "Expected Sprite Tera not to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Katze").volume, 100, "Expected Sprite Katze to have volume 100");
  t.assert.equal(t.getSprite("Tera").volume, 100, "Expected Sprite Tera to have volume 100");
  t.end();
}
const test1 = async function (t) {
  t.dragSprite('Katze', -148.62551206438414, 5.350633416130819, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.equal(t.getSprite("Katze").currentCostume, 0, "Expected Sprite Katze to have costume 0");
  t.assert.equal(t.getSprite("Tera").currentCostume, 0, "Expected Sprite Tera to have costume 0");
  t.assert.equal(t.getSprite("Katze").getCloneCount(), 0, "Expected Sprite Katze to have 0 clones");
  t.assert.equal(t.getSprite("Tera").getCloneCount(), 0, "Expected Sprite Tera to have 0 clones");
  t.assert.equal(t.getSprite("Katze").direction, 90, 1, "Expected Sprite Katze to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Tera").direction, 90, 1, "Expected Sprite Tera to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Katze").effects.color, 0, "Expected effect color of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Katze").effects.fisheye, 0, "Expected effect fisheye of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Katze").effects.whirl, 0, "Expected effect whirl of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Katze").effects.pixelate, 0, "Expected effect pixelate of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Katze").effects.mosaic, 0, "Expected effect mosaic of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Katze").effects.brightness, 0, "Expected effect brightness of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Katze").effects.ghost, 0, "Expected effect ghost of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Tera").effects.color, 0, "Expected effect color of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Tera").effects.fisheye, 0, "Expected effect fisheye of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Tera").effects.whirl, 0, "Expected effect whirl of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Tera").effects.pixelate, 0, "Expected effect pixelate of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Tera").effects.mosaic, 0, "Expected effect mosaic of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Tera").effects.brightness, 0, "Expected effect brightness of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Tera").effects.ghost, 0, "Expected effect ghost of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Katze").layerOrder, 3, "Expected Sprite Katze to be at layer 3");
  t.assert.equal(t.getSprite("Tera").layerOrder, 2, "Expected Sprite Tera to be at layer 2");
  t.assert.withinRange(t.getSprite("Katze").x, -195, 5, "Expected Sprite Katze to have x-position -195 +-5");
  t.assert.withinRange(t.getSprite("Katze").y, 0, 5, "Expected Sprite Katze to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("Tera").x, -74, 5, "Expected Sprite Tera to have x-position -74 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -107, 5, "Expected Sprite Tera to have y-position -107 +-5");
  t.assert.not(t.getSprite("Katze").sayText, "Expected Sprite Katze not to say anything");
  t.assert.not(t.getSprite("Tera").sayText, "Expected Sprite Tera not to say anything");
  t.assert.withinRange(t.getSprite("Katze").size, 70, 1, "Expected Sprite Katze to have size 70 +-1");
  t.assert.withinRange(t.getSprite("Tera").size, 60, 1, "Expected Sprite Tera to have size 60 +-1");
  t.assert.equal(t.getSprite("Katze").getVariable("Meine Züge").value, "0", "Expected Meine Züge to have value 0 in Sprite Katze");
  t.assert.ok(t.getSprite("Katze").visible, "Expected Sprite Katze to be visible");
  t.assert.not(t.getSprite("Tera").visible, "Expected Sprite Tera not to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Katze").volume, 100, "Expected Sprite Katze to have volume 100");
  t.assert.equal(t.getSprite("Tera").volume, 100, "Expected Sprite Tera to have volume 100");
  t.mouseDown(true);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.equal(t.getSprite("Katze").currentCostume, 0, "Expected Sprite Katze to have costume 0");
  t.assert.equal(t.getSprite("Tera").currentCostume, 0, "Expected Sprite Tera to have costume 0");
  t.assert.equal(t.getSprite("Katze").getCloneCount(), 0, "Expected Sprite Katze to have 0 clones");
  t.assert.equal(t.getSprite("Tera").getCloneCount(), 0, "Expected Sprite Tera to have 0 clones");
  t.assert.equal(t.getSprite("Katze").direction, 90, 1, "Expected Sprite Katze to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Tera").direction, 90, 1, "Expected Sprite Tera to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Katze").effects.color, 0, "Expected effect color of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Katze").effects.fisheye, 0, "Expected effect fisheye of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Katze").effects.whirl, 0, "Expected effect whirl of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Katze").effects.pixelate, 0, "Expected effect pixelate of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Katze").effects.mosaic, 0, "Expected effect mosaic of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Katze").effects.brightness, 0, "Expected effect brightness of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Katze").effects.ghost, 0, "Expected effect ghost of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Tera").effects.color, 0, "Expected effect color of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Tera").effects.fisheye, 0, "Expected effect fisheye of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Tera").effects.whirl, 0, "Expected effect whirl of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Tera").effects.pixelate, 0, "Expected effect pixelate of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Tera").effects.mosaic, 0, "Expected effect mosaic of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Tera").effects.brightness, 0, "Expected effect brightness of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Tera").effects.ghost, 0, "Expected effect ghost of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Katze").layerOrder, 3, "Expected Sprite Katze to be at layer 3");
  t.assert.equal(t.getSprite("Tera").layerOrder, 2, "Expected Sprite Tera to be at layer 2");
  t.assert.withinRange(t.getSprite("Katze").x, 0, 5, "Expected Sprite Katze to have x-position 0 +-5");
  t.assert.withinRange(t.getSprite("Katze").y, 0, 5, "Expected Sprite Katze to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("Tera").x, -74, 5, "Expected Sprite Tera to have x-position -74 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -107, 5, "Expected Sprite Tera to have y-position -107 +-5");
  t.assert.not(t.getSprite("Katze").sayText, "Expected Sprite Katze not to say anything");
  t.assert.not(t.getSprite("Tera").sayText, "Expected Sprite Tera not to say anything");
  t.assert.withinRange(t.getSprite("Katze").size, 70, 1, "Expected Sprite Katze to have size 70 +-1");
  t.assert.withinRange(t.getSprite("Tera").size, 60, 1, "Expected Sprite Tera to have size 60 +-1");
  t.assert.equal(t.getSprite("Katze").getVariable("Meine Züge").value, "0", "Expected Meine Züge to have value 0 in Sprite Katze");
  t.assert.ok(t.getSprite("Katze").visible, "Expected Sprite Katze to be visible");
  t.assert.not(t.getSprite("Tera").visible, "Expected Sprite Tera not to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Katze").volume, 100, "Expected Sprite Katze to have volume 100");
  t.assert.equal(t.getSprite("Tera").volume, 100, "Expected Sprite Tera to have volume 100");
  t.end();
}
const test2 = async function (t) {
  t.dragSprite('Katze', -148.62551206438414, 5.350633416130819, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.equal(t.getSprite("Katze").currentCostume, 0, "Expected Sprite Katze to have costume 0");
  t.assert.equal(t.getSprite("Tera").currentCostume, 0, "Expected Sprite Tera to have costume 0");
  t.assert.equal(t.getSprite("Katze").getCloneCount(), 0, "Expected Sprite Katze to have 0 clones");
  t.assert.equal(t.getSprite("Tera").getCloneCount(), 0, "Expected Sprite Tera to have 0 clones");
  t.assert.equal(t.getSprite("Katze").direction, 90, 1, "Expected Sprite Katze to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Tera").direction, 90, 1, "Expected Sprite Tera to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Katze").effects.color, 0, "Expected effect color of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Katze").effects.fisheye, 0, "Expected effect fisheye of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Katze").effects.whirl, 0, "Expected effect whirl of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Katze").effects.pixelate, 0, "Expected effect pixelate of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Katze").effects.mosaic, 0, "Expected effect mosaic of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Katze").effects.brightness, 0, "Expected effect brightness of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Katze").effects.ghost, 0, "Expected effect ghost of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Tera").effects.color, 0, "Expected effect color of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Tera").effects.fisheye, 0, "Expected effect fisheye of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Tera").effects.whirl, 0, "Expected effect whirl of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Tera").effects.pixelate, 0, "Expected effect pixelate of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Tera").effects.mosaic, 0, "Expected effect mosaic of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Tera").effects.brightness, 0, "Expected effect brightness of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Tera").effects.ghost, 0, "Expected effect ghost of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Katze").layerOrder, 3, "Expected Sprite Katze to be at layer 3");
  t.assert.equal(t.getSprite("Tera").layerOrder, 2, "Expected Sprite Tera to be at layer 2");
  t.assert.withinRange(t.getSprite("Katze").x, -195, 5, "Expected Sprite Katze to have x-position -195 +-5");
  t.assert.withinRange(t.getSprite("Katze").y, 0, 5, "Expected Sprite Katze to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("Tera").x, -74, 5, "Expected Sprite Tera to have x-position -74 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -107, 5, "Expected Sprite Tera to have y-position -107 +-5");
  t.assert.not(t.getSprite("Katze").sayText, "Expected Sprite Katze not to say anything");
  t.assert.not(t.getSprite("Tera").sayText, "Expected Sprite Tera not to say anything");
  t.assert.withinRange(t.getSprite("Katze").size, 70, 1, "Expected Sprite Katze to have size 70 +-1");
  t.assert.withinRange(t.getSprite("Tera").size, 60, 1, "Expected Sprite Tera to have size 60 +-1");
  t.assert.equal(t.getSprite("Katze").getVariable("Meine Züge").value, "0", "Expected Meine Züge to have value 0 in Sprite Katze");
  t.assert.ok(t.getSprite("Katze").visible, "Expected Sprite Katze to be visible");
  t.assert.not(t.getSprite("Tera").visible, "Expected Sprite Tera not to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Katze").volume, 100, "Expected Sprite Katze to have volume 100");
  t.assert.equal(t.getSprite("Tera").volume, 100, "Expected Sprite Tera to have volume 100");
  await t.runForSteps(28);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.equal(t.getSprite("Katze").currentCostume, 0, "Expected Sprite Katze to have costume 0");
  t.assert.equal(t.getSprite("Tera").currentCostume, 0, "Expected Sprite Tera to have costume 0");
  t.assert.equal(t.getSprite("Katze").getCloneCount(), 0, "Expected Sprite Katze to have 0 clones");
  t.assert.equal(t.getSprite("Tera").getCloneCount(), 0, "Expected Sprite Tera to have 0 clones");
  t.assert.equal(t.getSprite("Katze").direction, 90, 1, "Expected Sprite Katze to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Tera").direction, 90, 1, "Expected Sprite Tera to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Katze").effects.color, 0, "Expected effect color of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Katze").effects.fisheye, 0, "Expected effect fisheye of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Katze").effects.whirl, 0, "Expected effect whirl of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Katze").effects.pixelate, 0, "Expected effect pixelate of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Katze").effects.mosaic, 0, "Expected effect mosaic of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Katze").effects.brightness, 0, "Expected effect brightness of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Katze").effects.ghost, 0, "Expected effect ghost of Sprite Katze to be 0");
  t.assert.equal(t.getSprite("Tera").effects.color, 0, "Expected effect color of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Tera").effects.fisheye, 0, "Expected effect fisheye of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Tera").effects.whirl, 0, "Expected effect whirl of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Tera").effects.pixelate, 0, "Expected effect pixelate of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Tera").effects.mosaic, 0, "Expected effect mosaic of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Tera").effects.brightness, 0, "Expected effect brightness of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Tera").effects.ghost, 0, "Expected effect ghost of Sprite Tera to be 0");
  t.assert.equal(t.getSprite("Katze").layerOrder, 3, "Expected Sprite Katze to be at layer 3");
  t.assert.equal(t.getSprite("Tera").layerOrder, 2, "Expected Sprite Tera to be at layer 2");
  t.assert.withinRange(t.getSprite("Katze").x, -195, 5, "Expected Sprite Katze to have x-position -195 +-5");
  t.assert.withinRange(t.getSprite("Katze").y, 0, 5, "Expected Sprite Katze to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("Tera").x, 26, 5, "Expected Sprite Tera to have x-position 26 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -107, 5, "Expected Sprite Tera to have y-position -107 +-5");
  t.assert.not(t.getSprite("Katze").sayText, "Expected Sprite Katze not to say anything");
  t.assert.not(t.getSprite("Tera").sayText, "Expected Sprite Tera not to say anything");
  t.assert.withinRange(t.getSprite("Katze").size, 70, 1, "Expected Sprite Katze to have size 70 +-1");
  t.assert.withinRange(t.getSprite("Tera").size, 60, 1, "Expected Sprite Tera to have size 60 +-1");
  t.assert.equal(t.getSprite("Katze").getVariable("Meine Züge").value, "0", "Expected Meine Züge to have value 0 in Sprite Katze");
  t.assert.ok(t.getSprite("Katze").visible, "Expected Sprite Katze to be visible");
  t.assert.not(t.getSprite("Tera").visible, "Expected Sprite Tera not to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Katze").volume, 100, "Expected Sprite Katze to have volume 100");
  t.assert.equal(t.getSprite("Tera").volume, 100, "Expected Sprite Tera to have volume 100");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937800143',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937800143',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937800143',
      type: 'standard',
  }
]
