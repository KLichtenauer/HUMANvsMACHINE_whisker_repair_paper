const test0 = async function (t) {
  await t.runForSteps(93);
  await t.runForSteps(1);
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(93);
  await t.runForSteps(1);
  await t.runForSteps(47);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Luftballon").getClone(4).currentCostume, 2, "Expected Clone 4 of Luftballon to have costume 2");
  t.assert.equal(t.getSprite("Luftballon").getClone(8).currentCostume, 1, "Expected Clone 8 of Luftballon to have costume 1");
  t.assert.equal(t.getSprite("Luftballon").getClone(13).currentCostume, 0, "Expected Clone 13 of Luftballon to have costume 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(18).currentCostume, 2, "Expected Clone 18 of Luftballon to have costume 2");
  t.assert.equal(t.getSprite("Luftballon").getClone(20).currentCostume, 2, "Expected Clone 20 of Luftballon to have costume 2");
  t.assert.equal(t.getSprite("Luftballon").getCloneCount(), 20, "Expected Sprite Luftballon to have 20 clones");
  t.assert.equal(t.getSprite("Luftballon").getClone(4).direction, 90, 1, "Expected Clone 4 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(8).direction, 90, 1, "Expected Clone 8 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(13).direction, 90, 1, "Expected Clone 13 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(18).direction, 90, 1, "Expected Clone 18 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(20).direction, 90, 1, "Expected Clone 20 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(4).effects.color, 0, "Expected effect color of Clone 4 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(4).effects.fisheye, 0, "Expected effect fisheye of Clone 4 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(4).effects.whirl, 0, "Expected effect whirl of Clone 4 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(4).effects.pixelate, 0, "Expected effect pixelate of Clone 4 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(4).effects.mosaic, 0, "Expected effect mosaic of Clone 4 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(4).effects.brightness, 0, "Expected effect brightness of Clone 4 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(4).effects.ghost, 0, "Expected effect ghost of Clone 4 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(8).effects.color, 0, "Expected effect color of Clone 8 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(8).effects.fisheye, 0, "Expected effect fisheye of Clone 8 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(8).effects.whirl, 0, "Expected effect whirl of Clone 8 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(8).effects.pixelate, 0, "Expected effect pixelate of Clone 8 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(8).effects.mosaic, 0, "Expected effect mosaic of Clone 8 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(8).effects.brightness, 0, "Expected effect brightness of Clone 8 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(8).effects.ghost, 0, "Expected effect ghost of Clone 8 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(13).effects.color, 0, "Expected effect color of Clone 13 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(13).effects.fisheye, 0, "Expected effect fisheye of Clone 13 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(13).effects.whirl, 0, "Expected effect whirl of Clone 13 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(13).effects.pixelate, 0, "Expected effect pixelate of Clone 13 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(13).effects.mosaic, 0, "Expected effect mosaic of Clone 13 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(13).effects.brightness, 0, "Expected effect brightness of Clone 13 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(13).effects.ghost, 0, "Expected effect ghost of Clone 13 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(18).effects.color, 0, "Expected effect color of Clone 18 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(18).effects.fisheye, 0, "Expected effect fisheye of Clone 18 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(18).effects.whirl, 0, "Expected effect whirl of Clone 18 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(18).effects.pixelate, 0, "Expected effect pixelate of Clone 18 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(18).effects.mosaic, 0, "Expected effect mosaic of Clone 18 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(18).effects.brightness, 0, "Expected effect brightness of Clone 18 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(18).effects.ghost, 0, "Expected effect ghost of Clone 18 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(20).effects.color, 0, "Expected effect color of Clone 20 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(20).effects.fisheye, 0, "Expected effect fisheye of Clone 20 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(20).effects.whirl, 0, "Expected effect whirl of Clone 20 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(20).effects.pixelate, 0, "Expected effect pixelate of Clone 20 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(20).effects.mosaic, 0, "Expected effect mosaic of Clone 20 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(20).effects.brightness, 0, "Expected effect brightness of Clone 20 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(20).effects.ghost, 0, "Expected effect ghost of Clone 20 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Einhorn").layerOrder, 23, "Expected Sprite Einhorn to be at layer 23");
  t.assert.equal(t.getSprite("Luftballon").layerOrder, 21, "Expected Sprite Luftballon to be at layer 21");
  t.assert.equal(t.getSprite("Luftballon").getClone(4).getLayerOrder(), 17, "Expected Clone 4 of Luftballon to be at layer 17");
  t.assert.equal(t.getSprite("Luftballon").getClone(8).getLayerOrder(), 18, "Expected Clone 8 of Luftballon to be at layer 18");
  t.assert.equal(t.getSprite("Luftballon").getClone(13).getLayerOrder(), 19, "Expected Clone 13 of Luftballon to be at layer 19");
  t.assert.equal(t.getSprite("Luftballon").getClone(18).getLayerOrder(), 20, "Expected Clone 18 of Luftballon to be at layer 20");
  t.assert.equal(t.getSprite("Luftballon").getClone(20).getLayerOrder(), 16, "Expected Clone 20 of Luftballon to be at layer 16");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(4).x, -145, 5, "Expected Clone 4 of Luftballon to have x-position -145 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(4).y, 134, 5, "Expected Clone 4 of Luftballon to have y-position 134 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(8).x, 226, 5, "Expected Clone 8 of Luftballon to have x-position 226 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(8).y, 4, 5, "Expected Clone 8 of Luftballon to have y-position 4 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(13).x, -63, 5, "Expected Clone 13 of Luftballon to have x-position -63 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(13).y, 126, 5, "Expected Clone 13 of Luftballon to have y-position 126 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(18).x, -203, 5, "Expected Clone 18 of Luftballon to have x-position -203 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(18).y, 59, 5, "Expected Clone 18 of Luftballon to have y-position 59 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(20).x, -165, 5, "Expected Clone 20 of Luftballon to have x-position -165 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(20).y, 14, 5, "Expected Clone 20 of Luftballon to have y-position 14 +-5");
  t.assert.not(t.getSprite("Luftballon").getClone(4).sayText, "Expected Clone 4 of Luftballon not to say anything");
  t.assert.not(t.getSprite("Luftballon").getClone(8).sayText, "Expected Clone 8 of Luftballon not to say anything");
  t.assert.not(t.getSprite("Luftballon").getClone(13).sayText, "Expected Clone 13 of Luftballon not to say anything");
  t.assert.not(t.getSprite("Luftballon").getClone(18).sayText, "Expected Clone 18 of Luftballon not to say anything");
  t.assert.not(t.getSprite("Luftballon").getClone(20).sayText, "Expected Clone 20 of Luftballon not to say anything");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(4).size, 50, 1, "Expected Clone 4 of Luftballon to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(8).size, 50, 1, "Expected Clone 8 of Luftballon to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(13).size, 50, 1, "Expected Clone 13 of Luftballon to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(18).size, 50, 1, "Expected Clone 18 of Luftballon to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(20).size, 50, 1, "Expected Clone 20 of Luftballon to have size 50 +-1");
  t.assert.ok(t.getSprite("Luftballon").getClone(4).visible, "Expected Clone 4 of Luftballon to be visible");
  t.assert.ok(t.getSprite("Luftballon").getClone(8).visible, "Expected Clone 8 of Luftballon to be visible");
  t.assert.ok(t.getSprite("Luftballon").getClone(13).visible, "Expected Clone 13 of Luftballon to be visible");
  t.assert.ok(t.getSprite("Luftballon").getClone(18).visible, "Expected Clone 18 of Luftballon to be visible");
  t.assert.ok(t.getSprite("Luftballon").getClone(20).visible, "Expected Clone 20 of Luftballon to be visible");
  t.assert.equal(t.getSprite("Luftballon").getClone(4).volume, 100, "Expected Clone 4 of Luftballon to have volume 100");
  t.assert.equal(t.getSprite("Luftballon").getClone(8).volume, 100, "Expected Clone 8 of Luftballon to have volume 100");
  t.assert.equal(t.getSprite("Luftballon").getClone(13).volume, 100, "Expected Clone 13 of Luftballon to have volume 100");
  t.assert.equal(t.getSprite("Luftballon").getClone(18).volume, 100, "Expected Clone 18 of Luftballon to have volume 100");
  t.assert.equal(t.getSprite("Luftballon").getClone(20).volume, 100, "Expected Clone 20 of Luftballon to have volume 100");
  await t.runForSteps(87);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Luftballon").getClone(3).currentCostume, 0, "Expected Clone 3 of Luftballon to have costume 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(10).currentCostume, 2, "Expected Clone 10 of Luftballon to have costume 2");
  t.assert.equal(t.getSprite("Luftballon").getClone(30).currentCostume, 2, "Expected Clone 30 of Luftballon to have costume 2");
  t.assert.equal(t.getSprite("Luftballon").getCloneCount(), 30, "Expected Sprite Luftballon to have 30 clones");
  t.assert.equal(t.getSprite("Luftballon").getClone(3).direction, 90, 1, "Expected Clone 3 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(10).direction, 90, 1, "Expected Clone 10 of Luftballon to face in direction 90 +-1");
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
  t.assert.equal(t.getSprite("Luftballon").getClone(30).effects.color, 0, "Expected effect color of Clone 30 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(30).effects.fisheye, 0, "Expected effect fisheye of Clone 30 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(30).effects.whirl, 0, "Expected effect whirl of Clone 30 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(30).effects.pixelate, 0, "Expected effect pixelate of Clone 30 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(30).effects.mosaic, 0, "Expected effect mosaic of Clone 30 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(30).effects.brightness, 0, "Expected effect brightness of Clone 30 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(30).effects.ghost, 0, "Expected effect ghost of Clone 30 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Einhorn").layerOrder, 33, "Expected Sprite Einhorn to be at layer 33");
  t.assert.equal(t.getSprite("Luftballon").layerOrder, 31, "Expected Sprite Luftballon to be at layer 31");
  t.assert.equal(t.getSprite("Luftballon").getClone(3).getLayerOrder(), 29, "Expected Clone 3 of Luftballon to be at layer 29");
  t.assert.equal(t.getSprite("Luftballon").getClone(10).getLayerOrder(), 30, "Expected Clone 10 of Luftballon to be at layer 30");
  t.assert.equal(t.getSprite("Luftballon").getClone(30).getLayerOrder(), 20, "Expected Clone 30 of Luftballon to be at layer 20");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(3).x, -190, 5, "Expected Clone 3 of Luftballon to have x-position -190 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(3).y, -5, 5, "Expected Clone 3 of Luftballon to have y-position -5 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(10).x, -218, 5, "Expected Clone 10 of Luftballon to have x-position -218 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(10).y, -33, 5, "Expected Clone 10 of Luftballon to have y-position -33 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(30).x, 62, 5, "Expected Clone 30 of Luftballon to have x-position 62 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(30).y, -21, 5, "Expected Clone 30 of Luftballon to have y-position -21 +-5");
  t.assert.not(t.getSprite("Luftballon").getClone(3).sayText, "Expected Clone 3 of Luftballon not to say anything");
  t.assert.not(t.getSprite("Luftballon").getClone(10).sayText, "Expected Clone 10 of Luftballon not to say anything");
  t.assert.not(t.getSprite("Luftballon").getClone(30).sayText, "Expected Clone 30 of Luftballon not to say anything");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(3).size, 50, 1, "Expected Clone 3 of Luftballon to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(10).size, 50, 1, "Expected Clone 10 of Luftballon to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(30).size, 50, 1, "Expected Clone 30 of Luftballon to have size 50 +-1");
  t.assert.not(t.getSprite("Luftballon").visible, "Expected Sprite Luftballon not to be visible");
  t.assert.ok(t.getSprite("Luftballon").getClone(3).visible, "Expected Clone 3 of Luftballon to be visible");
  t.assert.ok(t.getSprite("Luftballon").getClone(10).visible, "Expected Clone 10 of Luftballon to be visible");
  t.assert.ok(t.getSprite("Luftballon").getClone(30).visible, "Expected Clone 30 of Luftballon to be visible");
  t.assert.equal(t.getSprite("Luftballon").getClone(3).volume, 100, "Expected Clone 3 of Luftballon to have volume 100");
  t.assert.equal(t.getSprite("Luftballon").getClone(10).volume, 100, "Expected Clone 10 of Luftballon to have volume 100");
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
      seed: '1687849345468',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849345468',
      type: 'standard',
  }
]
