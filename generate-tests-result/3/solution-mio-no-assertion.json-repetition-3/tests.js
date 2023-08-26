const test0 = async function (t) {
  t.mouseMove(-217, -169);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.equal(t.getSprite("Raumschiff").currentCostume, 0, "Expected Sprite Raumschiff to have costume 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").currentCostume, 0, "Expected Sprite Großes Schwarzes Loch to have costume 0");
  t.assert.equal(t.getSprite("Stern").currentCostume, 0, "Expected Sprite Stern to have costume 0");
  t.assert.equal(t.getSprite("Raumschiff").getCloneCount(), 0, "Expected Sprite Raumschiff to have 0 clones");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").getCloneCount(), 0, "Expected Sprite Großes Schwarzes Loch to have 0 clones");
  t.assert.equal(t.getSprite("Stern").getCloneCount(), 0, "Expected Sprite Stern to have 0 clones");
  t.assert.equal(t.getSprite("Raumschiff").direction, -177.12916520509322, 1, "Expected Sprite Raumschiff to face in direction -177.12916520509322 +-1");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").direction, -114, 1, "Expected Sprite Großes Schwarzes Loch to face in direction -114 +-1");
  t.assert.equal(t.getSprite("Stern").direction, 90, 1, "Expected Sprite Stern to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Raumschiff").effects.color, 0, "Expected effect color of Sprite Raumschiff to be 0");
  t.assert.equal(t.getSprite("Raumschiff").effects.fisheye, 0, "Expected effect fisheye of Sprite Raumschiff to be 0");
  t.assert.equal(t.getSprite("Raumschiff").effects.whirl, 0, "Expected effect whirl of Sprite Raumschiff to be 0");
  t.assert.equal(t.getSprite("Raumschiff").effects.pixelate, 0, "Expected effect pixelate of Sprite Raumschiff to be 0");
  t.assert.equal(t.getSprite("Raumschiff").effects.mosaic, 0, "Expected effect mosaic of Sprite Raumschiff to be 0");
  t.assert.equal(t.getSprite("Raumschiff").effects.brightness, 0, "Expected effect brightness of Sprite Raumschiff to be 0");
  t.assert.equal(t.getSprite("Raumschiff").effects.ghost, 0, "Expected effect ghost of Sprite Raumschiff to be 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").effects.color, 0, "Expected effect color of Sprite Großes Schwarzes Loch to be 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").effects.fisheye, 0, "Expected effect fisheye of Sprite Großes Schwarzes Loch to be 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").effects.whirl, 0, "Expected effect whirl of Sprite Großes Schwarzes Loch to be 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").effects.pixelate, 0, "Expected effect pixelate of Sprite Großes Schwarzes Loch to be 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").effects.mosaic, 0, "Expected effect mosaic of Sprite Großes Schwarzes Loch to be 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").effects.brightness, 0, "Expected effect brightness of Sprite Großes Schwarzes Loch to be 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").effects.ghost, 0, "Expected effect ghost of Sprite Großes Schwarzes Loch to be 0");
  t.assert.equal(t.getSprite("Stern").effects.color, 0, "Expected effect color of Sprite Stern to be 0");
  t.assert.equal(t.getSprite("Stern").effects.fisheye, 0, "Expected effect fisheye of Sprite Stern to be 0");
  t.assert.equal(t.getSprite("Stern").effects.whirl, 0, "Expected effect whirl of Sprite Stern to be 0");
  t.assert.equal(t.getSprite("Stern").effects.pixelate, 0, "Expected effect pixelate of Sprite Stern to be 0");
  t.assert.equal(t.getSprite("Stern").effects.mosaic, 0, "Expected effect mosaic of Sprite Stern to be 0");
  t.assert.equal(t.getSprite("Stern").effects.brightness, 0, "Expected effect brightness of Sprite Stern to be 0");
  t.assert.equal(t.getSprite("Stern").effects.ghost, 0, "Expected effect ghost of Sprite Stern to be 0");
  t.assert.equal(t.getSprite("Raumschiff").layerOrder, 2, "Expected Sprite Raumschiff to be at layer 2");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").layerOrder, 3, "Expected Sprite Großes Schwarzes Loch to be at layer 3");
  t.assert.equal(t.getSprite("Stern").layerOrder, 1, "Expected Sprite Stern to be at layer 1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -200.1001691131447, 5, "Expected Sprite Raumschiff to have x-position -200.1001691131447 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 168.00251003787957, 5, "Expected Sprite Raumschiff to have y-position 168.00251003787957 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, 20, 5, "Expected Sprite Großes Schwarzes Loch to have x-position 20 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 70, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 70 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, 140, 5, "Expected Sprite Stern to have x-position 140 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 10, 5, "Expected Sprite Stern to have y-position 10 +-5");
  t.assert.not(t.getSprite("Raumschiff").sayText, "Expected Sprite Raumschiff not to say anything");
  t.assert.not(t.getSprite("Großes Schwarzes Loch").sayText, "Expected Sprite Großes Schwarzes Loch not to say anything");
  t.assert.not(t.getSprite("Stern").sayText, "Expected Sprite Stern not to say anything");
  t.assert.withinRange(t.getSprite("Raumschiff").size, 32, 1, "Expected Sprite Raumschiff to have size 32 +-1");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").size, 100, 1, "Expected Sprite Großes Schwarzes Loch to have size 100 +-1");
  t.assert.withinRange(t.getSprite("Stern").size, 50, 1, "Expected Sprite Stern to have size 50 +-1");
  t.assert.ok(t.getSprite("Raumschiff").visible, "Expected Sprite Raumschiff to be visible");
  t.assert.ok(t.getSprite("Großes Schwarzes Loch").visible, "Expected Sprite Großes Schwarzes Loch to be visible");
  t.assert.ok(t.getSprite("Stern").visible, "Expected Sprite Stern to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Raumschiff").volume, 100, "Expected Sprite Raumschiff to have volume 100");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").volume, 100, "Expected Sprite Großes Schwarzes Loch to have volume 100");
  t.assert.equal(t.getSprite("Stern").volume, 100, "Expected Sprite Stern to have volume 100");
  t.dragSprite('Raumschiff', 117, 167, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.equal(t.getSprite("Raumschiff").currentCostume, 0, "Expected Sprite Raumschiff to have costume 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").currentCostume, 0, "Expected Sprite Großes Schwarzes Loch to have costume 0");
  t.assert.equal(t.getSprite("Stern").currentCostume, 0, "Expected Sprite Stern to have costume 0");
  t.assert.equal(t.getSprite("Raumschiff").getCloneCount(), 0, "Expected Sprite Raumschiff to have 0 clones");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").getCloneCount(), 0, "Expected Sprite Großes Schwarzes Loch to have 0 clones");
  t.assert.equal(t.getSprite("Stern").getCloneCount(), 0, "Expected Sprite Stern to have 0 clones");
  t.assert.equal(t.getSprite("Raumschiff").direction, -135.1710316696499, 1, "Expected Sprite Raumschiff to face in direction -135.1710316696499 +-1");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").direction, -114, 1, "Expected Sprite Großes Schwarzes Loch to face in direction -114 +-1");
  t.assert.equal(t.getSprite("Stern").direction, 90, 1, "Expected Sprite Stern to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Raumschiff").effects.color, 0, "Expected effect color of Sprite Raumschiff to be 0");
  t.assert.equal(t.getSprite("Raumschiff").effects.fisheye, 0, "Expected effect fisheye of Sprite Raumschiff to be 0");
  t.assert.equal(t.getSprite("Raumschiff").effects.whirl, 0, "Expected effect whirl of Sprite Raumschiff to be 0");
  t.assert.equal(t.getSprite("Raumschiff").effects.pixelate, 0, "Expected effect pixelate of Sprite Raumschiff to be 0");
  t.assert.equal(t.getSprite("Raumschiff").effects.mosaic, 0, "Expected effect mosaic of Sprite Raumschiff to be 0");
  t.assert.equal(t.getSprite("Raumschiff").effects.brightness, 0, "Expected effect brightness of Sprite Raumschiff to be 0");
  t.assert.equal(t.getSprite("Raumschiff").effects.ghost, 0, "Expected effect ghost of Sprite Raumschiff to be 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").effects.color, 0, "Expected effect color of Sprite Großes Schwarzes Loch to be 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").effects.fisheye, 0, "Expected effect fisheye of Sprite Großes Schwarzes Loch to be 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").effects.whirl, 0, "Expected effect whirl of Sprite Großes Schwarzes Loch to be 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").effects.pixelate, 0, "Expected effect pixelate of Sprite Großes Schwarzes Loch to be 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").effects.mosaic, 0, "Expected effect mosaic of Sprite Großes Schwarzes Loch to be 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").effects.brightness, 0, "Expected effect brightness of Sprite Großes Schwarzes Loch to be 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").effects.ghost, 0, "Expected effect ghost of Sprite Großes Schwarzes Loch to be 0");
  t.assert.equal(t.getSprite("Stern").effects.color, 0, "Expected effect color of Sprite Stern to be 0");
  t.assert.equal(t.getSprite("Stern").effects.fisheye, 0, "Expected effect fisheye of Sprite Stern to be 0");
  t.assert.equal(t.getSprite("Stern").effects.whirl, 0, "Expected effect whirl of Sprite Stern to be 0");
  t.assert.equal(t.getSprite("Stern").effects.pixelate, 0, "Expected effect pixelate of Sprite Stern to be 0");
  t.assert.equal(t.getSprite("Stern").effects.mosaic, 0, "Expected effect mosaic of Sprite Stern to be 0");
  t.assert.equal(t.getSprite("Stern").effects.brightness, 0, "Expected effect brightness of Sprite Stern to be 0");
  t.assert.equal(t.getSprite("Stern").effects.ghost, 0, "Expected effect ghost of Sprite Stern to be 0");
  t.assert.equal(t.getSprite("Raumschiff").layerOrder, 2, "Expected Sprite Raumschiff to be at layer 2");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").layerOrder, 3, "Expected Sprite Großes Schwarzes Loch to be at layer 3");
  t.assert.equal(t.getSprite("Stern").layerOrder, 1, "Expected Sprite Stern to be at layer 1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, 115.59001425259414, 5, "Expected Sprite Raumschiff to have x-position 115.59001425259414 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 165.58157122416657, 5, "Expected Sprite Raumschiff to have y-position 165.58157122416657 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, 18.77777777777778, 5, "Expected Sprite Großes Schwarzes Loch to have x-position 18.77777777777778 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 68.88888888888889, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 68.88888888888889 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, 141.95, 5, "Expected Sprite Stern to have x-position 141.95 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 7.633333333333333, 5, "Expected Sprite Stern to have y-position 7.633333333333333 +-5");
  t.assert.not(t.getSprite("Raumschiff").sayText, "Expected Sprite Raumschiff not to say anything");
  t.assert.not(t.getSprite("Großes Schwarzes Loch").sayText, "Expected Sprite Großes Schwarzes Loch not to say anything");
  t.assert.not(t.getSprite("Stern").sayText, "Expected Sprite Stern not to say anything");
  t.assert.withinRange(t.getSprite("Raumschiff").size, 32, 1, "Expected Sprite Raumschiff to have size 32 +-1");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").size, 100, 1, "Expected Sprite Großes Schwarzes Loch to have size 100 +-1");
  t.assert.withinRange(t.getSprite("Stern").size, 50, 1, "Expected Sprite Stern to have size 50 +-1");
  t.assert.ok(t.getSprite("Raumschiff").visible, "Expected Sprite Raumschiff to be visible");
  t.assert.not(t.getSprite("Großes Schwarzes Loch").visible, "Expected Sprite Großes Schwarzes Loch not to be visible");
  t.assert.not(t.getSprite("Stern").visible, "Expected Sprite Stern not to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Raumschiff").volume, 100, "Expected Sprite Raumschiff to have volume 100");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").volume, 100, "Expected Sprite Großes Schwarzes Loch to have volume 100");
  t.assert.equal(t.getSprite("Stern").volume, 100, "Expected Sprite Stern to have volume 100");
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(63);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.equal(t.getSprite("Raumschiff").currentCostume, 0, "Expected Sprite Raumschiff to have costume 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").currentCostume, 0, "Expected Sprite Großes Schwarzes Loch to have costume 0");
  t.assert.equal(t.getSprite("Stern").currentCostume, 0, "Expected Sprite Stern to have costume 0");
  t.assert.equal(t.getSprite("Raumschiff").getCloneCount(), 0, "Expected Sprite Raumschiff to have 0 clones");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").getCloneCount(), 0, "Expected Sprite Großes Schwarzes Loch to have 0 clones");
  t.assert.equal(t.getSprite("Stern").getCloneCount(), 0, "Expected Sprite Stern to have 0 clones");
  t.assert.equal(t.getSprite("Raumschiff").direction, 130.36453657309733, 1, "Expected Sprite Raumschiff to face in direction 130.36453657309733 +-1");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").direction, -114, 1, "Expected Sprite Großes Schwarzes Loch to face in direction -114 +-1");
  t.assert.equal(t.getSprite("Stern").direction, 90, 1, "Expected Sprite Stern to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Raumschiff").effects.color, 0, "Expected effect color of Sprite Raumschiff to be 0");
  t.assert.equal(t.getSprite("Raumschiff").effects.fisheye, 0, "Expected effect fisheye of Sprite Raumschiff to be 0");
  t.assert.equal(t.getSprite("Raumschiff").effects.whirl, 0, "Expected effect whirl of Sprite Raumschiff to be 0");
  t.assert.equal(t.getSprite("Raumschiff").effects.pixelate, 0, "Expected effect pixelate of Sprite Raumschiff to be 0");
  t.assert.equal(t.getSprite("Raumschiff").effects.mosaic, 0, "Expected effect mosaic of Sprite Raumschiff to be 0");
  t.assert.equal(t.getSprite("Raumschiff").effects.brightness, 0, "Expected effect brightness of Sprite Raumschiff to be 0");
  t.assert.equal(t.getSprite("Raumschiff").effects.ghost, 0, "Expected effect ghost of Sprite Raumschiff to be 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").effects.color, 0, "Expected effect color of Sprite Großes Schwarzes Loch to be 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").effects.fisheye, 0, "Expected effect fisheye of Sprite Großes Schwarzes Loch to be 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").effects.whirl, 0, "Expected effect whirl of Sprite Großes Schwarzes Loch to be 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").effects.pixelate, 0, "Expected effect pixelate of Sprite Großes Schwarzes Loch to be 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").effects.mosaic, 0, "Expected effect mosaic of Sprite Großes Schwarzes Loch to be 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").effects.brightness, 0, "Expected effect brightness of Sprite Großes Schwarzes Loch to be 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").effects.ghost, 0, "Expected effect ghost of Sprite Großes Schwarzes Loch to be 0");
  t.assert.equal(t.getSprite("Stern").effects.color, 0, "Expected effect color of Sprite Stern to be 0");
  t.assert.equal(t.getSprite("Stern").effects.fisheye, 0, "Expected effect fisheye of Sprite Stern to be 0");
  t.assert.equal(t.getSprite("Stern").effects.whirl, 0, "Expected effect whirl of Sprite Stern to be 0");
  t.assert.equal(t.getSprite("Stern").effects.pixelate, 0, "Expected effect pixelate of Sprite Stern to be 0");
  t.assert.equal(t.getSprite("Stern").effects.mosaic, 0, "Expected effect mosaic of Sprite Stern to be 0");
  t.assert.equal(t.getSprite("Stern").effects.brightness, 0, "Expected effect brightness of Sprite Stern to be 0");
  t.assert.equal(t.getSprite("Stern").effects.ghost, 0, "Expected effect ghost of Sprite Stern to be 0");
  t.assert.equal(t.getSprite("Raumschiff").layerOrder, 2, "Expected Sprite Raumschiff to be at layer 2");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").layerOrder, 3, "Expected Sprite Großes Schwarzes Loch to be at layer 3");
  t.assert.equal(t.getSprite("Stern").layerOrder, 1, "Expected Sprite Stern to be at layer 1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -107.04340323334625, 5, "Expected Sprite Raumschiff to have x-position -107.04340323334625 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 90.98689274834426, 5, "Expected Sprite Raumschiff to have y-position 90.98689274834426 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, -53.33333333333333, 5, "Expected Sprite Großes Schwarzes Loch to have x-position -53.33333333333333 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 3.333333333333343, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 3.333333333333343 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, 141.95, 5, "Expected Sprite Stern to have x-position 141.95 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 7.633333333333333, 5, "Expected Sprite Stern to have y-position 7.633333333333333 +-5");
  t.assert.not(t.getSprite("Raumschiff").sayText, "Expected Sprite Raumschiff not to say anything");
  t.assert.not(t.getSprite("Großes Schwarzes Loch").sayText, "Expected Sprite Großes Schwarzes Loch not to say anything");
  t.assert.not(t.getSprite("Stern").sayText, "Expected Sprite Stern not to say anything");
  t.assert.withinRange(t.getSprite("Raumschiff").size, 32, 1, "Expected Sprite Raumschiff to have size 32 +-1");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").size, 100, 1, "Expected Sprite Großes Schwarzes Loch to have size 100 +-1");
  t.assert.withinRange(t.getSprite("Stern").size, 50, 1, "Expected Sprite Stern to have size 50 +-1");
  t.assert.not(t.getSprite("Raumschiff").visible, "Expected Sprite Raumschiff not to be visible");
  t.assert.ok(t.getSprite("Großes Schwarzes Loch").visible, "Expected Sprite Großes Schwarzes Loch to be visible");
  t.assert.ok(t.getSprite("Stern").visible, "Expected Sprite Stern to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Raumschiff").volume, 100, "Expected Sprite Raumschiff to have volume 100");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").volume, 100, "Expected Sprite Großes Schwarzes Loch to have volume 100");
  t.assert.equal(t.getSprite("Stern").volume, 100, "Expected Sprite Stern to have volume 100");
  t.end();
}
const test2 = async function (t) {
  t.mouseMove(-217, -169);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.equal(t.getSprite("Raumschiff").currentCostume, 0, "Expected Sprite Raumschiff to have costume 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").currentCostume, 0, "Expected Sprite Großes Schwarzes Loch to have costume 0");
  t.assert.equal(t.getSprite("Stern").currentCostume, 0, "Expected Sprite Stern to have costume 0");
  t.assert.equal(t.getSprite("Raumschiff").getCloneCount(), 0, "Expected Sprite Raumschiff to have 0 clones");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").getCloneCount(), 0, "Expected Sprite Großes Schwarzes Loch to have 0 clones");
  t.assert.equal(t.getSprite("Stern").getCloneCount(), 0, "Expected Sprite Stern to have 0 clones");
  t.assert.equal(t.getSprite("Raumschiff").direction, -177.12916520509322, 1, "Expected Sprite Raumschiff to face in direction -177.12916520509322 +-1");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").direction, -114, 1, "Expected Sprite Großes Schwarzes Loch to face in direction -114 +-1");
  t.assert.equal(t.getSprite("Stern").direction, 90, 1, "Expected Sprite Stern to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Raumschiff").effects.color, 0, "Expected effect color of Sprite Raumschiff to be 0");
  t.assert.equal(t.getSprite("Raumschiff").effects.fisheye, 0, "Expected effect fisheye of Sprite Raumschiff to be 0");
  t.assert.equal(t.getSprite("Raumschiff").effects.whirl, 0, "Expected effect whirl of Sprite Raumschiff to be 0");
  t.assert.equal(t.getSprite("Raumschiff").effects.pixelate, 0, "Expected effect pixelate of Sprite Raumschiff to be 0");
  t.assert.equal(t.getSprite("Raumschiff").effects.mosaic, 0, "Expected effect mosaic of Sprite Raumschiff to be 0");
  t.assert.equal(t.getSprite("Raumschiff").effects.brightness, 0, "Expected effect brightness of Sprite Raumschiff to be 0");
  t.assert.equal(t.getSprite("Raumschiff").effects.ghost, 0, "Expected effect ghost of Sprite Raumschiff to be 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").effects.color, 0, "Expected effect color of Sprite Großes Schwarzes Loch to be 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").effects.fisheye, 0, "Expected effect fisheye of Sprite Großes Schwarzes Loch to be 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").effects.whirl, 0, "Expected effect whirl of Sprite Großes Schwarzes Loch to be 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").effects.pixelate, 0, "Expected effect pixelate of Sprite Großes Schwarzes Loch to be 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").effects.mosaic, 0, "Expected effect mosaic of Sprite Großes Schwarzes Loch to be 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").effects.brightness, 0, "Expected effect brightness of Sprite Großes Schwarzes Loch to be 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").effects.ghost, 0, "Expected effect ghost of Sprite Großes Schwarzes Loch to be 0");
  t.assert.equal(t.getSprite("Stern").effects.color, 0, "Expected effect color of Sprite Stern to be 0");
  t.assert.equal(t.getSprite("Stern").effects.fisheye, 0, "Expected effect fisheye of Sprite Stern to be 0");
  t.assert.equal(t.getSprite("Stern").effects.whirl, 0, "Expected effect whirl of Sprite Stern to be 0");
  t.assert.equal(t.getSprite("Stern").effects.pixelate, 0, "Expected effect pixelate of Sprite Stern to be 0");
  t.assert.equal(t.getSprite("Stern").effects.mosaic, 0, "Expected effect mosaic of Sprite Stern to be 0");
  t.assert.equal(t.getSprite("Stern").effects.brightness, 0, "Expected effect brightness of Sprite Stern to be 0");
  t.assert.equal(t.getSprite("Stern").effects.ghost, 0, "Expected effect ghost of Sprite Stern to be 0");
  t.assert.equal(t.getSprite("Raumschiff").layerOrder, 2, "Expected Sprite Raumschiff to be at layer 2");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").layerOrder, 3, "Expected Sprite Großes Schwarzes Loch to be at layer 3");
  t.assert.equal(t.getSprite("Stern").layerOrder, 1, "Expected Sprite Stern to be at layer 1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -200.1001691131447, 5, "Expected Sprite Raumschiff to have x-position -200.1001691131447 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 168.00251003787957, 5, "Expected Sprite Raumschiff to have y-position 168.00251003787957 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, 20, 5, "Expected Sprite Großes Schwarzes Loch to have x-position 20 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 70, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 70 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, 140, 5, "Expected Sprite Stern to have x-position 140 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 10, 5, "Expected Sprite Stern to have y-position 10 +-5");
  t.assert.not(t.getSprite("Raumschiff").sayText, "Expected Sprite Raumschiff not to say anything");
  t.assert.not(t.getSprite("Großes Schwarzes Loch").sayText, "Expected Sprite Großes Schwarzes Loch not to say anything");
  t.assert.not(t.getSprite("Stern").sayText, "Expected Sprite Stern not to say anything");
  t.assert.withinRange(t.getSprite("Raumschiff").size, 32, 1, "Expected Sprite Raumschiff to have size 32 +-1");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").size, 100, 1, "Expected Sprite Großes Schwarzes Loch to have size 100 +-1");
  t.assert.withinRange(t.getSprite("Stern").size, 50, 1, "Expected Sprite Stern to have size 50 +-1");
  t.assert.ok(t.getSprite("Raumschiff").visible, "Expected Sprite Raumschiff to be visible");
  t.assert.ok(t.getSprite("Großes Schwarzes Loch").visible, "Expected Sprite Großes Schwarzes Loch to be visible");
  t.assert.ok(t.getSprite("Stern").visible, "Expected Sprite Stern to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Raumschiff").volume, 100, "Expected Sprite Raumschiff to have volume 100");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").volume, 100, "Expected Sprite Großes Schwarzes Loch to have volume 100");
  t.assert.equal(t.getSprite("Stern").volume, 100, "Expected Sprite Stern to have volume 100");
  t.dragSprite('Stern', -214.21814492651734, 151.14702266232075, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.equal(t.getSprite("Raumschiff").currentCostume, 0, "Expected Sprite Raumschiff to have costume 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").currentCostume, 0, "Expected Sprite Großes Schwarzes Loch to have costume 0");
  t.assert.equal(t.getSprite("Stern").currentCostume, 0, "Expected Sprite Stern to have costume 0");
  t.assert.equal(t.getSprite("Raumschiff").getCloneCount(), 0, "Expected Sprite Raumschiff to have 0 clones");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").getCloneCount(), 0, "Expected Sprite Großes Schwarzes Loch to have 0 clones");
  t.assert.equal(t.getSprite("Stern").getCloneCount(), 0, "Expected Sprite Stern to have 0 clones");
  t.assert.equal(t.getSprite("Raumschiff").direction, -177.12916520509322, 1, "Expected Sprite Raumschiff to face in direction -177.12916520509322 +-1");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").direction, -114, 1, "Expected Sprite Großes Schwarzes Loch to face in direction -114 +-1");
  t.assert.equal(t.getSprite("Stern").direction, 90, 1, "Expected Sprite Stern to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Raumschiff").effects.color, 0, "Expected effect color of Sprite Raumschiff to be 0");
  t.assert.equal(t.getSprite("Raumschiff").effects.fisheye, 0, "Expected effect fisheye of Sprite Raumschiff to be 0");
  t.assert.equal(t.getSprite("Raumschiff").effects.whirl, 0, "Expected effect whirl of Sprite Raumschiff to be 0");
  t.assert.equal(t.getSprite("Raumschiff").effects.pixelate, 0, "Expected effect pixelate of Sprite Raumschiff to be 0");
  t.assert.equal(t.getSprite("Raumschiff").effects.mosaic, 0, "Expected effect mosaic of Sprite Raumschiff to be 0");
  t.assert.equal(t.getSprite("Raumschiff").effects.brightness, 0, "Expected effect brightness of Sprite Raumschiff to be 0");
  t.assert.equal(t.getSprite("Raumschiff").effects.ghost, 0, "Expected effect ghost of Sprite Raumschiff to be 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").effects.color, 0, "Expected effect color of Sprite Großes Schwarzes Loch to be 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").effects.fisheye, 0, "Expected effect fisheye of Sprite Großes Schwarzes Loch to be 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").effects.whirl, 0, "Expected effect whirl of Sprite Großes Schwarzes Loch to be 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").effects.pixelate, 0, "Expected effect pixelate of Sprite Großes Schwarzes Loch to be 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").effects.mosaic, 0, "Expected effect mosaic of Sprite Großes Schwarzes Loch to be 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").effects.brightness, 0, "Expected effect brightness of Sprite Großes Schwarzes Loch to be 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").effects.ghost, 0, "Expected effect ghost of Sprite Großes Schwarzes Loch to be 0");
  t.assert.equal(t.getSprite("Stern").effects.color, 0, "Expected effect color of Sprite Stern to be 0");
  t.assert.equal(t.getSprite("Stern").effects.fisheye, 0, "Expected effect fisheye of Sprite Stern to be 0");
  t.assert.equal(t.getSprite("Stern").effects.whirl, 0, "Expected effect whirl of Sprite Stern to be 0");
  t.assert.equal(t.getSprite("Stern").effects.pixelate, 0, "Expected effect pixelate of Sprite Stern to be 0");
  t.assert.equal(t.getSprite("Stern").effects.mosaic, 0, "Expected effect mosaic of Sprite Stern to be 0");
  t.assert.equal(t.getSprite("Stern").effects.brightness, 0, "Expected effect brightness of Sprite Stern to be 0");
  t.assert.equal(t.getSprite("Stern").effects.ghost, 0, "Expected effect ghost of Sprite Stern to be 0");
  t.assert.equal(t.getSprite("Raumschiff").layerOrder, 2, "Expected Sprite Raumschiff to be at layer 2");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").layerOrder, 3, "Expected Sprite Großes Schwarzes Loch to be at layer 3");
  t.assert.equal(t.getSprite("Stern").layerOrder, 1, "Expected Sprite Stern to be at layer 1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -200.20033822628938, 5, "Expected Sprite Raumschiff to have x-position -200.20033822628938 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 166.00502007575915, 5, "Expected Sprite Raumschiff to have y-position 166.00502007575915 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, 18.77777777777778, 5, "Expected Sprite Großes Schwarzes Loch to have x-position 18.77777777777778 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 68.88888888888889, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 68.88888888888889 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, -210.26450917774204, 5, "Expected Sprite Stern to have x-position -210.26450917774204 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 151.16123895128206, 5, "Expected Sprite Stern to have y-position 151.16123895128206 +-5");
  t.assert.not(t.getSprite("Raumschiff").sayText, "Expected Sprite Raumschiff not to say anything");
  t.assert.not(t.getSprite("Großes Schwarzes Loch").sayText, "Expected Sprite Großes Schwarzes Loch not to say anything");
  t.assert.equal(t.getSprite("Stern").sayText, "Du schaffst das!", "Expected Sprite Stern to say Du schaffst das!");
  t.assert.withinRange(t.getSprite("Raumschiff").size, 32, 1, "Expected Sprite Raumschiff to have size 32 +-1");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").size, 100, 1, "Expected Sprite Großes Schwarzes Loch to have size 100 +-1");
  t.assert.withinRange(t.getSprite("Stern").size, 50, 1, "Expected Sprite Stern to have size 50 +-1");
  t.assert.ok(t.getSprite("Raumschiff").visible, "Expected Sprite Raumschiff to be visible");
  t.assert.ok(t.getSprite("Großes Schwarzes Loch").visible, "Expected Sprite Großes Schwarzes Loch to be visible");
  t.assert.ok(t.getSprite("Stern").visible, "Expected Sprite Stern to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Raumschiff").volume, 100, "Expected Sprite Raumschiff to have volume 100");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").volume, 100, "Expected Sprite Großes Schwarzes Loch to have volume 100");
  t.assert.equal(t.getSprite("Stern").volume, 100, "Expected Sprite Stern to have volume 100");
  await t.runForSteps(50);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.equal(t.getSprite("Raumschiff").currentCostume, 0, "Expected Sprite Raumschiff to have costume 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").currentCostume, 0, "Expected Sprite Großes Schwarzes Loch to have costume 0");
  t.assert.equal(t.getSprite("Stern").currentCostume, 0, "Expected Sprite Stern to have costume 0");
  t.assert.equal(t.getSprite("Raumschiff").getCloneCount(), 0, "Expected Sprite Raumschiff to have 0 clones");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").getCloneCount(), 0, "Expected Sprite Großes Schwarzes Loch to have 0 clones");
  t.assert.equal(t.getSprite("Stern").getCloneCount(), 0, "Expected Sprite Stern to have 0 clones");
  t.assert.equal(t.getSprite("Raumschiff").direction, -177.12916520509333, 1, "Expected Sprite Raumschiff to face in direction -177.12916520509333 +-1");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").direction, -114, 1, "Expected Sprite Großes Schwarzes Loch to face in direction -114 +-1");
  t.assert.equal(t.getSprite("Stern").direction, 90, 1, "Expected Sprite Stern to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Raumschiff").effects.color, 0, "Expected effect color of Sprite Raumschiff to be 0");
  t.assert.equal(t.getSprite("Raumschiff").effects.fisheye, 0, "Expected effect fisheye of Sprite Raumschiff to be 0");
  t.assert.equal(t.getSprite("Raumschiff").effects.whirl, 0, "Expected effect whirl of Sprite Raumschiff to be 0");
  t.assert.equal(t.getSprite("Raumschiff").effects.pixelate, 0, "Expected effect pixelate of Sprite Raumschiff to be 0");
  t.assert.equal(t.getSprite("Raumschiff").effects.mosaic, 0, "Expected effect mosaic of Sprite Raumschiff to be 0");
  t.assert.equal(t.getSprite("Raumschiff").effects.brightness, 0, "Expected effect brightness of Sprite Raumschiff to be 0");
  t.assert.equal(t.getSprite("Raumschiff").effects.ghost, 0, "Expected effect ghost of Sprite Raumschiff to be 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").effects.color, 0, "Expected effect color of Sprite Großes Schwarzes Loch to be 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").effects.fisheye, 0, "Expected effect fisheye of Sprite Großes Schwarzes Loch to be 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").effects.whirl, 0, "Expected effect whirl of Sprite Großes Schwarzes Loch to be 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").effects.pixelate, 0, "Expected effect pixelate of Sprite Großes Schwarzes Loch to be 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").effects.mosaic, 0, "Expected effect mosaic of Sprite Großes Schwarzes Loch to be 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").effects.brightness, 0, "Expected effect brightness of Sprite Großes Schwarzes Loch to be 0");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").effects.ghost, 0, "Expected effect ghost of Sprite Großes Schwarzes Loch to be 0");
  t.assert.equal(t.getSprite("Stern").effects.color, 0, "Expected effect color of Sprite Stern to be 0");
  t.assert.equal(t.getSprite("Stern").effects.fisheye, 0, "Expected effect fisheye of Sprite Stern to be 0");
  t.assert.equal(t.getSprite("Stern").effects.whirl, 0, "Expected effect whirl of Sprite Stern to be 0");
  t.assert.equal(t.getSprite("Stern").effects.pixelate, 0, "Expected effect pixelate of Sprite Stern to be 0");
  t.assert.equal(t.getSprite("Stern").effects.mosaic, 0, "Expected effect mosaic of Sprite Stern to be 0");
  t.assert.equal(t.getSprite("Stern").effects.brightness, 0, "Expected effect brightness of Sprite Stern to be 0");
  t.assert.equal(t.getSprite("Stern").effects.ghost, 0, "Expected effect ghost of Sprite Stern to be 0");
  t.assert.equal(t.getSprite("Raumschiff").layerOrder, 2, "Expected Sprite Raumschiff to be at layer 2");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").layerOrder, 3, "Expected Sprite Großes Schwarzes Loch to be at layer 3");
  t.assert.equal(t.getSprite("Stern").layerOrder, 1, "Expected Sprite Stern to be at layer 1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -205.30896299666844, 5, "Expected Sprite Raumschiff to have x-position -205.30896299666844 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 64.13303200761789, 5, "Expected Sprite Raumschiff to have y-position 64.13303200761789 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, -43.55555555555555, 5, "Expected Sprite Großes Schwarzes Loch to have x-position -43.55555555555555 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 12.222222222222229, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 12.222222222222229 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, -91.65543671448337, 5, "Expected Sprite Stern to have x-position -91.65543671448337 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 151.58772762012168, 5, "Expected Sprite Stern to have y-position 151.58772762012168 +-5");
  t.assert.not(t.getSprite("Raumschiff").sayText, "Expected Sprite Raumschiff not to say anything");
  t.assert.not(t.getSprite("Großes Schwarzes Loch").sayText, "Expected Sprite Großes Schwarzes Loch not to say anything");
  t.assert.not(t.getSprite("Stern").sayText, "Expected Sprite Stern not to say anything");
  t.assert.withinRange(t.getSprite("Raumschiff").size, 32, 1, "Expected Sprite Raumschiff to have size 32 +-1");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").size, 100, 1, "Expected Sprite Großes Schwarzes Loch to have size 100 +-1");
  t.assert.withinRange(t.getSprite("Stern").size, 50, 1, "Expected Sprite Stern to have size 50 +-1");
  t.assert.ok(t.getSprite("Raumschiff").visible, "Expected Sprite Raumschiff to be visible");
  t.assert.ok(t.getSprite("Großes Schwarzes Loch").visible, "Expected Sprite Großes Schwarzes Loch to be visible");
  t.assert.not(t.getSprite("Stern").visible, "Expected Sprite Stern not to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Raumschiff").volume, 100, "Expected Sprite Raumschiff to have volume 100");
  t.assert.equal(t.getSprite("Großes Schwarzes Loch").volume, 100, "Expected Sprite Großes Schwarzes Loch to have volume 100");
  t.assert.equal(t.getSprite("Stern").volume, 100, "Expected Sprite Stern to have volume 100");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936914003',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936914003',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936914003',
      type: 'standard',
  }
]
