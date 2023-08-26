const test0 = async function (t) {
  t.dragSprite('Raumschiff', 103.88540360492374, 34.37904427671741, null);
  await t.runForSteps(1);
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(97);
  await t.runForSteps(1);
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Raumschiff").direction, 45, 1, "Expected Sprite Raumschiff to face in direction 45 +-1");
  t.assert.equal(t.getSprite("Schwarzes Loch").direction, 40, 1, "Expected Sprite Schwarzes Loch to face in direction 40 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -224.1571596388597, 5, "Expected Sprite Raumschiff to have x-position -224.1571596388597 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, -70.83428518612241, 5, "Expected Sprite Raumschiff to have y-position -70.83428518612241 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").x, -30.996789151940362, 5, "Expected Sprite Schwarzes Loch to have x-position -30.996789151940362 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").y, -82.12250186899058, 5, "Expected Sprite Schwarzes Loch to have y-position -82.12250186899058 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(1).x, 148.36666666666667, 5, "Expected Clone 1 of Stern to have x-position 148.36666666666667 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(1).y, 28.53333333333333, 5, "Expected Clone 1 of Stern to have y-position 28.53333333333333 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(2).x, 136.66666666666666, 5, "Expected Clone 2 of Stern to have x-position 136.66666666666666 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(2).y, 26.666666666666664, 5, "Expected Clone 2 of Stern to have y-position 26.666666666666664 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(3).x, 143.5, 5, "Expected Clone 3 of Stern to have x-position 143.5 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(3).y, 21.75, 5, "Expected Clone 3 of Stern to have y-position 21.75 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(4).x, -227, 5, "Expected Clone 4 of Stern to have x-position -227 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(4).y, 151.15, 5, "Expected Clone 4 of Stern to have y-position 151.15 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(5).x, -219.8, 5, "Expected Clone 5 of Stern to have x-position -219.8 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(5).y, 153.4, 5, "Expected Clone 5 of Stern to have y-position 153.4 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(6).x, -223.75, 5, "Expected Clone 6 of Stern to have x-position -223.75 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(6).y, 143.66666666666666, 5, "Expected Clone 6 of Stern to have y-position 143.66666666666666 +-5");
  await t.runForSteps(36);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Schwarzes Loch").direction, 50, 1, "Expected Sprite Schwarzes Loch to face in direction 50 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -197.99420873495723, 5, "Expected Sprite Raumschiff to have x-position -197.99420873495723 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, -44.671334282220144, 5, "Expected Sprite Raumschiff to have y-position -44.671334282220144 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").x, -27.782851103507667, 5, "Expected Sprite Schwarzes Loch to have x-position -27.782851103507667 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").y, -78.2922796533957, 5, "Expected Sprite Schwarzes Loch to have y-position -78.2922796533957 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(1).x, 150.7, 5, "Expected Clone 1 of Stern to have x-position 150.7 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(1).y, 22.03333333333333, 5, "Expected Clone 1 of Stern to have y-position 22.03333333333333 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(2).x, 138.6, 5, "Expected Clone 2 of Stern to have x-position 138.6 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(2).y, 32.13333333333333, 5, "Expected Clone 2 of Stern to have y-position 32.13333333333333 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(3).x, 140.75, 5, "Expected Clone 3 of Stern to have x-position 140.75 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(3).y, 11.75, 5, "Expected Clone 3 of Stern to have y-position 11.75 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(4).x, -226.13333333333333, 5, "Expected Clone 4 of Stern to have x-position -226.13333333333333 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(4).y, 146.75, 5, "Expected Clone 4 of Stern to have y-position 146.75 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(5).x, -216.2, 5, "Expected Clone 5 of Stern to have x-position -216.2 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(5).y, 162.2, 5, "Expected Clone 5 of Stern to have y-position 162.2 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(6).x, -220.91666666666666, 5, "Expected Clone 6 of Stern to have x-position -220.91666666666666 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(6).y, 152.55, 5, "Expected Clone 6 of Stern to have y-position 152.55 +-5");
  await t.runForSteps(98);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Stern").getCloneCount(), 0, "Expected Sprite Stern to have 0 clones");
  t.assert.equal(t.getSprite("Schwarzes Loch").direction, 130, 1, "Expected Sprite Schwarzes Loch to face in direction 130 +-1");
  t.assert.equal(t.getSprite("Raumschiff").layerOrder, 4, "Expected Sprite Raumschiff to be at layer 4");
  t.assert.equal(t.getSprite("Stern").layerOrder, 3, "Expected Sprite Stern to be at layer 3");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -141.42566624003297, 5, "Expected Sprite Raumschiff to have x-position -141.42566624003297 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 11.897208212703612, 5, "Expected Sprite Raumschiff to have y-position 11.897208212703612 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").x, 8.952628887912777, 5, "Expected Sprite Schwarzes Loch to have x-position 8.952628887912777 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").y, -75.078341604963, 5, "Expected Sprite Schwarzes Loch to have y-position -75.078341604963 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").size, 5, 1, "Expected Sprite Raumschiff to have size 5 +-1");
  t.end();
}
const test2 = async function (t) {
  t.dragSprite('Raumschiff', -129.57726458529396, -63.999386125106184, null);
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
  t.assert.withinRange(t.getSprite("Stern").getClone(1).x, 140.11666666666667, 5, "Expected Clone 1 of Stern to have x-position 140.11666666666667 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(1).y, 20.233333333333334, 5, "Expected Clone 1 of Stern to have y-position 20.233333333333334 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(2).x, 140, 5, "Expected Clone 2 of Stern to have x-position 140 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(2).y, 20, 5, "Expected Clone 2 of Stern to have y-position 20 +-5");
  t.assert.not(t.getSprite("Stern").getClone(2).sayText, "Expected Clone 2 of Stern not to say anything");
  t.assert.withinRange(t.getSprite("Stern").getClone(2).size, 50, 1, "Expected Clone 2 of Stern to have size 50 +-1");
  t.assert.ok(t.getSprite("Stern").getClone(2).visible, "Expected Clone 2 of Stern to be visible");
  t.assert.equal(t.getSprite("Stern").getClone(2).volume, 100, "Expected Clone 2 of Stern to have volume 100");
  await t.runForSteps(50);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Stern").getClone(3).currentCostume, 0, "Expected Clone 3 of Stern to have costume 0");
  t.assert.equal(t.getSprite("Stern").getClone(4).currentCostume, 0, "Expected Clone 4 of Stern to have costume 0");
  t.assert.equal(t.getSprite("Stern").getClone(5).currentCostume, 0, "Expected Clone 5 of Stern to have costume 0");
  t.assert.equal(t.getSprite("Stern").getClone(6).currentCostume, 0, "Expected Clone 6 of Stern to have costume 0");
  t.assert.equal(t.getSprite("Stern").getCloneCount(), 6, "Expected Sprite Stern to have 6 clones");
  t.assert.equal(t.getSprite("Schwarzes Loch").direction, -100, 1, "Expected Sprite Schwarzes Loch to face in direction -100 +-1");
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
  t.assert.withinRange(t.getSprite("Raumschiff").x, 241.08243814305226, 5, "Expected Sprite Raumschiff to have x-position 241.08243814305226 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, -181.64740930050775, 5, "Expected Sprite Raumschiff to have y-position -181.64740930050775 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").x, -0.07596123493896201, 5, "Expected Sprite Schwarzes Loch to have x-position -0.07596123493896201 +-5");
  t.assert.withinRange(t.getSprite("Schwarzes Loch").y, -126.28202062547207, 5, "Expected Sprite Schwarzes Loch to have y-position -126.28202062547207 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(1).x, 146.06666666666666, 5, "Expected Clone 1 of Stern to have x-position 146.06666666666666 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(1).y, 32.13333333333333, 5, "Expected Clone 1 of Stern to have y-position 32.13333333333333 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(2).x, 123, 5, "Expected Clone 2 of Stern to have x-position 123 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(2).y, 20, 5, "Expected Clone 2 of Stern to have y-position 20 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(3).x, 148.33333333333334, 5, "Expected Clone 3 of Stern to have x-position 148.33333333333334 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(3).y, 35, 5, "Expected Clone 3 of Stern to have y-position 35 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(4).x, -207.6, 5, "Expected Clone 4 of Stern to have x-position -207.6 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(4).y, 158.8, 5, "Expected Clone 4 of Stern to have y-position 158.8 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(5).x, -206.86666666666667, 5, "Expected Clone 5 of Stern to have x-position -206.86666666666667 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(5).y, 149.21666666666667, 5, "Expected Clone 5 of Stern to have y-position 149.21666666666667 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(6).x, -219.2, 5, "Expected Clone 6 of Stern to have x-position -219.2 +-5");
  t.assert.withinRange(t.getSprite("Stern").getClone(6).y, 164.56666666666666, 5, "Expected Clone 6 of Stern to have y-position 164.56666666666666 +-5");
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
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937301643',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937301643',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937301643',
      type: 'standard',
  }
]
