const test0 = async function (t) {
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.equal(t.getSprite("Einhorn").currentCostume, 0, "Expected Sprite Einhorn to have costume 0");
  t.assert.equal(t.getSprite("Luftballon").currentCostume, 1, "Expected Sprite Luftballon to have costume 1");
  t.assert.equal(t.getSprite("Einhorn").getCloneCount(), 0, "Expected Sprite Einhorn to have 0 clones");
  t.assert.equal(t.getSprite("Luftballon").getCloneCount(), 0, "Expected Sprite Luftballon to have 0 clones");
  t.assert.equal(t.getSprite("Einhorn").direction, 90, 1, "Expected Sprite Einhorn to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").direction, 90, 1, "Expected Sprite Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Einhorn").effects.color, 0, "Expected effect color of Sprite Einhorn to be 0");
  t.assert.equal(t.getSprite("Einhorn").effects.fisheye, 0, "Expected effect fisheye of Sprite Einhorn to be 0");
  t.assert.equal(t.getSprite("Einhorn").effects.whirl, 0, "Expected effect whirl of Sprite Einhorn to be 0");
  t.assert.equal(t.getSprite("Einhorn").effects.pixelate, 0, "Expected effect pixelate of Sprite Einhorn to be 0");
  t.assert.equal(t.getSprite("Einhorn").effects.mosaic, 0, "Expected effect mosaic of Sprite Einhorn to be 0");
  t.assert.equal(t.getSprite("Einhorn").effects.brightness, 0, "Expected effect brightness of Sprite Einhorn to be 0");
  t.assert.equal(t.getSprite("Einhorn").effects.ghost, 0, "Expected effect ghost of Sprite Einhorn to be 0");
  t.assert.equal(t.getSprite("Luftballon").effects.color, 0, "Expected effect color of Sprite Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").effects.fisheye, 0, "Expected effect fisheye of Sprite Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").effects.whirl, 0, "Expected effect whirl of Sprite Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").effects.pixelate, 0, "Expected effect pixelate of Sprite Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").effects.mosaic, 0, "Expected effect mosaic of Sprite Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").effects.brightness, 0, "Expected effect brightness of Sprite Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").effects.ghost, 0, "Expected effect ghost of Sprite Luftballon to be 0");
  t.assert.equal(t.getSprite("Einhorn").layerOrder, 1, "Expected Sprite Einhorn to be at layer 1");
  t.assert.equal(t.getSprite("Luftballon").layerOrder, 2, "Expected Sprite Luftballon to be at layer 2");
  t.assert.withinRange(t.getSprite("Einhorn").x, -7, 5, "Expected Sprite Einhorn to have x-position -7 +-5");
  t.assert.withinRange(t.getSprite("Einhorn").y, -57, 5, "Expected Sprite Einhorn to have y-position -57 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").x, 90, 5, "Expected Sprite Luftballon to have x-position 90 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").y, -60, 5, "Expected Sprite Luftballon to have y-position -60 +-5");
  t.assert.equal(t.getSprite("Einhorn").sayText, "Nicht mehr lange bis Neujahr!", "Expected Sprite Einhorn to say Nicht mehr lange bis Neujahr!");
  t.assert.not(t.getSprite("Luftballon").sayText, "Expected Sprite Luftballon not to say anything");
  t.assert.withinRange(t.getSprite("Einhorn").size, 100, 1, "Expected Sprite Einhorn to have size 100 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").size, 50, 1, "Expected Sprite Luftballon to have size 50 +-1");
  t.assert.ok(t.getSprite("Einhorn").visible, "Expected Sprite Einhorn to be visible");
  t.assert.ok(t.getSprite("Luftballon").visible, "Expected Sprite Luftballon to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Einhorn").volume, 100, "Expected Sprite Einhorn to have volume 100");
  t.assert.equal(t.getSprite("Luftballon").volume, 100, "Expected Sprite Luftballon to have volume 100");
  await t.runForSteps(300);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.equal(t.getSprite("Einhorn").currentCostume, 0, "Expected Sprite Einhorn to have costume 0");
  t.assert.equal(t.getSprite("Luftballon").currentCostume, 1, "Expected Sprite Luftballon to have costume 1");
  t.assert.equal(t.getSprite("Luftballon").getClone(30).currentCostume, 2, "Expected Clone 30 of Luftballon to have costume 2");
  t.assert.equal(t.getSprite("Einhorn").getCloneCount(), 0, "Expected Sprite Einhorn to have 0 clones");
  t.assert.equal(t.getSprite("Luftballon").getCloneCount(), 30, "Expected Sprite Luftballon to have 30 clones");
  t.assert.equal(t.getSprite("Einhorn").direction, 90, 1, "Expected Sprite Einhorn to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").direction, 90, 1, "Expected Sprite Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Luftballon").getClone(30).direction, 90, 1, "Expected Clone 30 of Luftballon to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Einhorn").effects.color, 0, "Expected effect color of Sprite Einhorn to be 0");
  t.assert.equal(t.getSprite("Einhorn").effects.fisheye, 0, "Expected effect fisheye of Sprite Einhorn to be 0");
  t.assert.equal(t.getSprite("Einhorn").effects.whirl, 0, "Expected effect whirl of Sprite Einhorn to be 0");
  t.assert.equal(t.getSprite("Einhorn").effects.pixelate, 0, "Expected effect pixelate of Sprite Einhorn to be 0");
  t.assert.equal(t.getSprite("Einhorn").effects.mosaic, 0, "Expected effect mosaic of Sprite Einhorn to be 0");
  t.assert.equal(t.getSprite("Einhorn").effects.brightness, 0, "Expected effect brightness of Sprite Einhorn to be 0");
  t.assert.equal(t.getSprite("Einhorn").effects.ghost, 0, "Expected effect ghost of Sprite Einhorn to be 0");
  t.assert.equal(t.getSprite("Luftballon").effects.color, 0, "Expected effect color of Sprite Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").effects.fisheye, 0, "Expected effect fisheye of Sprite Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").effects.whirl, 0, "Expected effect whirl of Sprite Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").effects.pixelate, 0, "Expected effect pixelate of Sprite Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").effects.mosaic, 0, "Expected effect mosaic of Sprite Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").effects.brightness, 0, "Expected effect brightness of Sprite Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").effects.ghost, 0, "Expected effect ghost of Sprite Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(30).effects.color, 0, "Expected effect color of Clone 30 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(30).effects.fisheye, 0, "Expected effect fisheye of Clone 30 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(30).effects.whirl, 0, "Expected effect whirl of Clone 30 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(30).effects.pixelate, 0, "Expected effect pixelate of Clone 30 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(30).effects.mosaic, 0, "Expected effect mosaic of Clone 30 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(30).effects.brightness, 0, "Expected effect brightness of Clone 30 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Luftballon").getClone(30).effects.ghost, 0, "Expected effect ghost of Clone 30 of Luftballon to be 0");
  t.assert.equal(t.getSprite("Einhorn").layerOrder, 33, "Expected Sprite Einhorn to be at layer 33");
  t.assert.equal(t.getSprite("Luftballon").layerOrder, 31, "Expected Sprite Luftballon to be at layer 31");
  t.assert.equal(t.getSprite("Luftballon").getClone(30).getLayerOrder(), 18, "Expected Clone 30 of Luftballon to be at layer 18");
  t.assert.withinRange(t.getSprite("Einhorn").x, -7, 5, "Expected Sprite Einhorn to have x-position -7 +-5");
  t.assert.withinRange(t.getSprite("Einhorn").y, -57, 5, "Expected Sprite Einhorn to have y-position -57 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").x, 90, 5, "Expected Sprite Luftballon to have x-position 90 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").y, -60, 5, "Expected Sprite Luftballon to have y-position -60 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(30).x, 85, 5, "Expected Clone 30 of Luftballon to have x-position 85 +-5");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(30).y, 70, 5, "Expected Clone 30 of Luftballon to have y-position 70 +-5");
  t.assert.equal(t.getSprite("Einhorn").sayText, "Frohes neues Jahr!", "Expected Sprite Einhorn to say Frohes neues Jahr!");
  t.assert.not(t.getSprite("Luftballon").sayText, "Expected Sprite Luftballon not to say anything");
  t.assert.not(t.getSprite("Luftballon").getClone(30).sayText, "Expected Clone 30 of Luftballon not to say anything");
  t.assert.withinRange(t.getSprite("Einhorn").size, 180, 1, "Expected Sprite Einhorn to have size 180 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").size, 50, 1, "Expected Sprite Luftballon to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Luftballon").getClone(30).size, 50, 1, "Expected Clone 30 of Luftballon to have size 50 +-1");
  t.assert.ok(t.getSprite("Einhorn").visible, "Expected Sprite Einhorn to be visible");
  t.assert.not(t.getSprite("Luftballon").visible, "Expected Sprite Luftballon not to be visible");
  t.assert.ok(t.getSprite("Luftballon").getClone(30).visible, "Expected Clone 30 of Luftballon to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Einhorn").volume, 100, "Expected Sprite Einhorn to have volume 100");
  t.assert.equal(t.getSprite("Luftballon").volume, 100, "Expected Sprite Luftballon to have volume 100");
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
      seed: '1687938570715',
      type: 'standard',
  }
]
