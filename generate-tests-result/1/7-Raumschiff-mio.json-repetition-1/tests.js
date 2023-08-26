const test0 = async function (t) {
  await t.runForSteps(39);
  await t.runForSteps(1);
  t.end();
}
const test1 = async function (t) {
  t.dragSprite('Raumschiff', 113.61655954560314, 44.22915788298045, null);
  await t.runForSteps(1);
  t.dragSprite('Raumschiff', 240, -180, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Stern").getClone(2).currentCostume, 0, "Expected Clone 2 of Stern to have costume 0");
  t.assert.equal(t.getSprite("Stern").getCloneCount(), 2, "Expected Sprite Stern to have 2 clones");
  t.assert.equal(t.getSprite("Schwarzes Loch").direction, 110, 1, "Expected Sprite Schwarzes Loch to face in direction 110 +-1");
  t.assert.equal(t.getSprite("Stern").getClone(2).direction, 90, 1, "Expected Clone 2 of Stern to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Stern").getClone(2).effects.color, 0, "Expected effect color of Clone 2 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(2).effects.fisheye, 0, "Expected effect fisheye of Clone 2 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(2).effects.whirl, 0, "Expected effect whirl of Clone 2 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(2).effects.pixelate, 0, "Expected effect pixelate of Clone 2 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(2).effects.mosaic, 0, "Expected effect mosaic of Clone 2 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(2).effects.brightness, 0, "Expected effect brightness of Clone 2 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(2).effects.ghost, 0, "Expected effect ghost of Clone 2 of Stern to be 0");
  t.assert.equal(t.getSprite("Raumschiff").layerOrder, 6, "Expected Sprite Raumschiff to be at layer 6");
  t.assert.equal(t.getSprite("Stern").layerOrder, 5, "Expected Sprite Stern to be at layer 5");
  t.assert.equal(t.getSprite("Stern").getClone(2).getLayerOrder(), 4, "Expected Clone 2 of Stern to be at layer 4");
  t.assert.withinRange(t.getSprite("Raumschiff").x, 239.7411809548975, 5, "Expected Sprite Raumschiff to have x-position 239.7411809548975 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, -179.03407417371093, 5, "Expected Sprite Raumschiff to have y-position -179.03407417371093 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").x, -0.07596123493896023, 5, "Expected Sprite Schwarzes Loch to have x-position -0.07596123493896023 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").y, -70.86824088833465, 5, "Expected Sprite Schwarzes Loch to have y-position -70.86824088833465 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(1).x, 140.33333333333334, 5, "Expected Clone 1 of Stern to have x-position 140.33333333333334 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(1).y, 19.7, 5, "Expected Clone 1 of Stern to have y-position 19.7 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(2).x, 140, 5, "Expected Clone 2 of Stern to have x-position 140 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(2).y, 20, 5, "Expected Clone 2 of Stern to have y-position 20 +-5");
  t.assert.not(t.getSprite("Stern").getClone(2).sayText, "Expected Clone 2 of Stern not to say anything");
  t.assert.withinRange(t.getSprite("Stern").getClone(2).size, 50, 1, "Expected Clone 2 of Stern to have size 50 +-1");
  t.assert.ok(t.getSprite("Stern").getClone(2).visible, "Expected Clone 2 of Stern to be visible");
  t.assert.equal(t.getSprite("Stern").getClone(2).volume, 100, "Expected Clone 2 of Stern to have volume 100");
  await t.runForSteps(70);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Stern").getClone(3).currentCostume, 0, "Expected Clone 3 of Stern to have costume 0");
  t.assert.equal(t.getSprite("Stern").getClone(4).currentCostume, 0, "Expected Clone 4 of Stern to have costume 0");
  t.assert.equal(t.getSprite("Stern").getClone(5).currentCostume, 0, "Expected Clone 5 of Stern to have costume 0");
  t.assert.equal(t.getSprite("Stern").getClone(6).currentCostume, 0, "Expected Clone 6 of Stern to have costume 0");
  t.assert.equal(t.getSprite("Stern").getCloneCount(), 6, "Expected Sprite Stern to have 6 clones");
  t.assert.equal(t.getSprite("Schwarzes Loch").direction, 100, 1, "Expected Sprite Schwarzes Loch to face in direction 100 +-1");
  t.assert.equal(t.getSprite("Stern").getClone(3).direction, 90, 1, "Expected Clone 3 of Stern to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Stern").getClone(4).direction, 90, 1, "Expected Clone 4 of Stern to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Stern").getClone(5).direction, 90, 1, "Expected Clone 5 of Stern to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Stern").getClone(6).direction, 90, 1, "Expected Clone 6 of Stern to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Stern").getClone(3).effects.color, 0, "Expected effect color of Clone 3 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(3).effects.fisheye, 0, "Expected effect fisheye of Clone 3 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(3).effects.whirl, 0, "Expected effect whirl of Clone 3 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(3).effects.pixelate, 0, "Expected effect pixelate of Clone 3 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(3).effects.mosaic, 0, "Expected effect mosaic of Clone 3 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(3).effects.brightness, 0, "Expected effect brightness of Clone 3 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(3).effects.ghost, 0, "Expected effect ghost of Clone 3 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(4).effects.color, 0, "Expected effect color of Clone 4 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(4).effects.fisheye, 0, "Expected effect fisheye of Clone 4 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(4).effects.whirl, 0, "Expected effect whirl of Clone 4 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(4).effects.pixelate, 0, "Expected effect pixelate of Clone 4 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(4).effects.mosaic, 0, "Expected effect mosaic of Clone 4 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(4).effects.brightness, 0, "Expected effect brightness of Clone 4 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(4).effects.ghost, 0, "Expected effect ghost of Clone 4 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(5).effects.color, 0, "Expected effect color of Clone 5 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(5).effects.fisheye, 0, "Expected effect fisheye of Clone 5 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(5).effects.whirl, 0, "Expected effect whirl of Clone 5 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(5).effects.pixelate, 0, "Expected effect pixelate of Clone 5 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(5).effects.mosaic, 0, "Expected effect mosaic of Clone 5 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(5).effects.brightness, 0, "Expected effect brightness of Clone 5 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(5).effects.ghost, 0, "Expected effect ghost of Clone 5 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(6).effects.color, 0, "Expected effect color of Clone 6 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(6).effects.fisheye, 0, "Expected effect fisheye of Clone 6 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(6).effects.whirl, 0, "Expected effect whirl of Clone 6 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(6).effects.pixelate, 0, "Expected effect pixelate of Clone 6 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(6).effects.mosaic, 0, "Expected effect mosaic of Clone 6 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(6).effects.brightness, 0, "Expected effect brightness of Clone 6 of Stern to be 0");
  t.assert.equal(t.getSprite("Stern").getClone(6).effects.ghost, 0, "Expected effect ghost of Clone 6 of Stern to be 0");
  t.assert.equal(t.getSprite("Raumschiff").layerOrder, 10, "Expected Sprite Raumschiff to be at layer 10");
  t.assert.equal(t.getSprite("Stern").layerOrder, 9, "Expected Sprite Stern to be at layer 9");
  t.assert.equal(t.getSprite("Stern").getClone(3).getLayerOrder(), 5, "Expected Clone 3 of Stern to be at layer 5");
  t.assert.equal(t.getSprite("Stern").getClone(4).getLayerOrder(), 6, "Expected Clone 4 of Stern to be at layer 6");
  t.assert.equal(t.getSprite("Stern").getClone(5).getLayerOrder(), 7, "Expected Clone 5 of Stern to be at layer 7");
  t.assert.equal(t.getSprite("Stern").getClone(6).getLayerOrder(), 8, "Expected Clone 6 of Stern to be at layer 8");
  t.assert.withinRange(t.getSprite("Raumschiff").x, 235.906057241002, 5, "Expected Sprite Raumschiff to have x-position 235.906057241002 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, -162.32889277472643, 5, "Expected Sprite Raumschiff to have y-position -162.32889277472643 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").x, -5, 5, "Expected Sprite Schwarzes Loch to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").y, -70, 5, "Expected Sprite Schwarzes Loch to have y-position -70 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(1).x, 155.78333333333333, 5, "Expected Clone 1 of Stern to have x-position 155.78333333333333 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(1).y, 2.3666666666666667, 5, "Expected Clone 1 of Stern to have y-position 2.3666666666666667 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(2).x, 126, 5, "Expected Clone 2 of Stern to have x-position 126 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(2).y, 16.5, 5, "Expected Clone 2 of Stern to have y-position 16.5 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(3).x, 138.8, 5, "Expected Clone 3 of Stern to have x-position 138.8 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(3).y, 23.4, 5, "Expected Clone 3 of Stern to have y-position 23.4 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(4).x, -193.8, 5, "Expected Clone 4 of Stern to have x-position -193.8 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(4).y, 134.96666666666667, 5, "Expected Clone 4 of Stern to have y-position 134.96666666666667 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(5).x, -211.8, 5, "Expected Clone 5 of Stern to have x-position -211.8 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(5).y, 149.5, 5, "Expected Clone 5 of Stern to have y-position 149.5 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(6).x, -213.08333333333334, 5, "Expected Clone 6 of Stern to have x-position -213.08333333333334 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(6).y, 135.91666666666666, 5, "Expected Clone 6 of Stern to have y-position 135.91666666666666 +-5");
  t.assert.equal(t.getSprite("Raumschiff").sayText, "Überstanden!", "Expected Sprite Raumschiff to say Überstanden!");
  t.assert.not(t.getSprite("Stern").getClone(3).sayText, "Expected Clone 3 of Stern not to say anything");
  t.assert.not(t.getSprite("Stern").getClone(4).sayText, "Expected Clone 4 of Stern not to say anything");
  t.assert.not(t.getSprite("Stern").getClone(5).sayText, "Expected Clone 5 of Stern not to say anything");
  t.assert.not(t.getSprite("Stern").getClone(6).sayText, "Expected Clone 6 of Stern not to say anything");
  t.assert.withinRange(t.getSprite("Stern").getClone(3).size, 50, 1, "Expected Clone 3 of Stern to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Stern").getClone(4).size, 50, 1, "Expected Clone 4 of Stern to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Stern").getClone(5).size, 50, 1, "Expected Clone 5 of Stern to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Stern").getClone(6).size, 50, 1, "Expected Clone 6 of Stern to have size 50 +-1");
  t.assert.equal(t.getSprite("Stern").getVariable("xPosition").value, "-210", "Expected xPosition to have value -210 in Sprite Stern");
  t.assert.equal(t.getSprite("Stern").getVariable("yPosition").value, "150", "Expected yPosition to have value 150 in Sprite Stern");
  t.assert.ok(t.getSprite("Stern").getClone(3).visible, "Expected Clone 3 of Stern to be visible");
  t.assert.ok(t.getSprite("Stern").getClone(4).visible, "Expected Clone 4 of Stern to be visible");
  t.assert.ok(t.getSprite("Stern").getClone(5).visible, "Expected Clone 5 of Stern to be visible");
  t.assert.ok(t.getSprite("Stern").getClone(6).visible, "Expected Clone 6 of Stern to be visible");
  t.assert.equal(t.getSprite("Stern").getClone(3).volume, 100, "Expected Clone 3 of Stern to have volume 100");
  t.assert.equal(t.getSprite("Stern").getClone(4).volume, 100, "Expected Clone 4 of Stern to have volume 100");
  t.assert.equal(t.getSprite("Stern").getClone(5).volume, 100, "Expected Clone 5 of Stern to have volume 100");
  t.assert.equal(t.getSprite("Stern").getClone(6).volume, 100, "Expected Clone 6 of Stern to have volume 100");
  await t.runForSteps(85);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Stern").getCloneCount(), 0, "Expected Sprite Stern to have 0 clones");
  t.assert.equal(t.getSprite("Schwarzes Loch").direction, 110, 1, "Expected Sprite Schwarzes Loch to face in direction 110 +-1");
  t.assert.equal(t.getSprite("Raumschiff").layerOrder, 4, "Expected Sprite Raumschiff to be at layer 4");
  t.assert.equal(t.getSprite("Stern").layerOrder, 3, "Expected Sprite Stern to be at layer 3");
  t.assert.withinRange(t.getSprite("Raumschiff").x, 217.01226694851857, 5, "Expected Sprite Raumschiff to have x-position 217.01226694851857 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, -91.81630745562461, 5, "Expected Sprite Raumschiff to have y-position -91.81630745562461 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").x, -0.07596123493896023, 5, "Expected Sprite Schwarzes Loch to have x-position -0.07596123493896023 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").y, -70.86824088833465, 5, "Expected Sprite Schwarzes Loch to have y-position -70.86824088833465 +-5");
  t.assert.not(t.getSprite("Raumschiff").sayText, "Expected Sprite Raumschiff not to say anything");
  t.end();
}
const test2 = async function (t) {
  await t.runForSteps(39);
  await t.runForSteps(1);
  t.dragSprite('Raumschiff', -141.75189419350127, -7.961190915904723, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Schwarzes Loch").direction, 140, 1, "Expected Sprite Schwarzes Loch to face in direction 140 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -142.01071323860378, 5, "Expected Sprite Raumschiff to have x-position -142.01071323860378 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, -6.995265089615654, 5, "Expected Sprite Raumschiff to have y-position -6.995265089615654 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").x, 12.782851103507667, 5, "Expected Sprite Schwarzes Loch to have x-position 12.782851103507667 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").y, -78.2922796533957, 5, "Expected Sprite Schwarzes Loch to have y-position -78.2922796533957 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(1).x, 153.33333333333334, 5, "Expected Clone 1 of Stern to have x-position 153.33333333333334 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(1).y, 8, 5, "Expected Clone 1 of Stern to have y-position 8 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(2).x, 128.95, 5, "Expected Clone 2 of Stern to have x-position 128.95 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(2).y, 16.1, 5, "Expected Clone 2 of Stern to have y-position 16.1 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(3).x, 140, 5, "Expected Clone 3 of Stern to have x-position 140 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(3).y, 20.633333333333333, 5, "Expected Clone 3 of Stern to have y-position 20.633333333333333 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(4).x, -220.2, 5, "Expected Clone 4 of Stern to have x-position -220.2 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(4).y, 146.4, 5, "Expected Clone 4 of Stern to have y-position 146.4 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(5).x, -201.25, 5, "Expected Clone 5 of Stern to have x-position -201.25 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(5).y, 154.08333333333334, 5, "Expected Clone 5 of Stern to have y-position 154.08333333333334 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(6).x, -210.56666666666666, 5, "Expected Clone 6 of Stern to have x-position -210.56666666666666 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(6).y, 158.5, 5, "Expected Clone 6 of Stern to have y-position 158.5 +-5");
  await t.runForSteps(53);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Stern").getCloneCount(), 0, "Expected Sprite Stern to have 0 clones");
  t.assert.equal(t.getSprite("Schwarzes Loch").direction, 90, 1, "Expected Sprite Schwarzes Loch to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Raumschiff").layerOrder, 4, "Expected Sprite Raumschiff to be at layer 4");
  t.assert.equal(t.getSprite("Stern").layerOrder, 3, "Expected Sprite Stern to be at layer 3");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -150.03410363678168, 5, "Expected Sprite Raumschiff to have x-position -150.03410363678168 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 22.94843552534547, 5, "Expected Sprite Raumschiff to have y-position 22.94843552534547 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").x, -10, 5, "Expected Sprite Schwarzes Loch to have x-position -10 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").y, -70, 5, "Expected Sprite Schwarzes Loch to have y-position -70 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").size, 5, 1, "Expected Sprite Raumschiff to have size 5 +-1");
  t.end();
}
const test3 = async function (t) {
  await t.runForSteps(39);
  await t.runForSteps(1);
  t.keyPress('right arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Raumschiff").direction, 15, 1, "Expected Sprite Raumschiff to face in direction 15 +-1");
  t.assert.equal(t.getSprite("Schwarzes Loch").direction, 160, 1, "Expected Sprite Schwarzes Loch to face in direction 160 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -210.3527618041005, 5, "Expected Sprite Raumschiff to have x-position -210.3527618041005 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, -128.43111529585923, 5, "Expected Sprite Raumschiff to have y-position -128.43111529585923 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").x, 18.496789151940366, 5, "Expected Sprite Schwarzes Loch to have x-position 18.496789151940366 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").y, -86.45262888791278, 5, "Expected Sprite Schwarzes Loch to have y-position -86.45262888791278 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(1).x, 154, 5, "Expected Clone 1 of Stern to have x-position 154 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(1).y, 7.4, 5, "Expected Clone 1 of Stern to have y-position 7.4 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(2).x, 128.38333333333333, 5, "Expected Clone 2 of Stern to have x-position 128.38333333333333 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(2).y, 15.9, 5, "Expected Clone 2 of Stern to have y-position 15.9 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(3).x, 140, 5, "Expected Clone 3 of Stern to have x-position 140 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(3).y, 20.666666666666668, 5, "Expected Clone 3 of Stern to have y-position 20.666666666666668 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(4).x, -220.76666666666665, 5, "Expected Clone 4 of Stern to have x-position -220.76666666666665 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(4).y, 146.2, 5, "Expected Clone 4 of Stern to have y-position 146.2 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(5).x, -200.75, 5, "Expected Clone 5 of Stern to have x-position -200.75 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(5).y, 154.31666666666666, 5, "Expected Clone 5 of Stern to have y-position 154.31666666666666 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(6).x, -210.6, 5, "Expected Clone 6 of Stern to have x-position -210.6 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(6).y, 159, 5, "Expected Clone 6 of Stern to have y-position 159 +-5");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849343576',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849343576',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849343576',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849343576',
      type: 'standard',
  }
]
