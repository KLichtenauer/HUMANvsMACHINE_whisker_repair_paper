const test0 = async function (t) {
  await t.runForSteps(77);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.equal(t.getSprite("Schorsch").currentCostume, 0, "Expected Sprite Schorsch to have costume 0");
  t.assert.equal(t.getSprite("Stella").currentCostume, 0, "Expected Sprite Stella to have costume 0");
  t.assert.equal(t.getSprite("Schorsch").getCloneCount(), 0, "Expected Sprite Schorsch to have 0 clones");
  t.assert.equal(t.getSprite("Stella").getCloneCount(), 0, "Expected Sprite Stella to have 0 clones");
  t.assert.equal(t.getSprite("Schorsch").direction, 90, 1, "Expected Sprite Schorsch to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Stella").direction, -120, 1, "Expected Sprite Stella to face in direction -120 +-1");
  t.assert.equal(t.getSprite("Schorsch").effects.color, 0, "Expected effect color of Sprite Schorsch to be 0");
  t.assert.equal(t.getSprite("Schorsch").effects.fisheye, 0, "Expected effect fisheye of Sprite Schorsch to be 0");
  t.assert.equal(t.getSprite("Schorsch").effects.whirl, 0, "Expected effect whirl of Sprite Schorsch to be 0");
  t.assert.equal(t.getSprite("Schorsch").effects.pixelate, 0, "Expected effect pixelate of Sprite Schorsch to be 0");
  t.assert.equal(t.getSprite("Schorsch").effects.mosaic, 0, "Expected effect mosaic of Sprite Schorsch to be 0");
  t.assert.equal(t.getSprite("Schorsch").effects.brightness, 0, "Expected effect brightness of Sprite Schorsch to be 0");
  t.assert.equal(t.getSprite("Schorsch").effects.ghost, 0, "Expected effect ghost of Sprite Schorsch to be 0");
  t.assert.equal(t.getSprite("Stella").effects.color, 0, "Expected effect color of Sprite Stella to be 0");
  t.assert.equal(t.getSprite("Stella").effects.fisheye, 0, "Expected effect fisheye of Sprite Stella to be 0");
  t.assert.equal(t.getSprite("Stella").effects.whirl, 0, "Expected effect whirl of Sprite Stella to be 0");
  t.assert.equal(t.getSprite("Stella").effects.pixelate, 0, "Expected effect pixelate of Sprite Stella to be 0");
  t.assert.equal(t.getSprite("Stella").effects.mosaic, 0, "Expected effect mosaic of Sprite Stella to be 0");
  t.assert.equal(t.getSprite("Stella").effects.brightness, 0, "Expected effect brightness of Sprite Stella to be 0");
  t.assert.equal(t.getSprite("Stella").effects.ghost, 0, "Expected effect ghost of Sprite Stella to be 0");
  t.assert.equal(t.getSprite("Schorsch").layerOrder, 3, "Expected Sprite Schorsch to be at layer 3");
  t.assert.equal(t.getSprite("Stella").layerOrder, 2, "Expected Sprite Stella to be at layer 2");
  t.assert.withinRange(t.getSprite("Schorsch").x, -70.00000000000001, 5, "Expected Sprite Schorsch to have x-position -70.00000000000001 +-5");
  t.assert.withinRange(t.getSprite("Schorsch").y, -80, 5, "Expected Sprite Schorsch to have y-position -80 +-5");
  t.assert.withinRange(t.getSprite("Stella").x, 93.30127018922192, 5, "Expected Sprite Stella to have x-position 93.30127018922192 +-5");
  t.assert.withinRange(t.getSprite("Stella").y, 125.00000000000003, 5, "Expected Sprite Stella to have y-position 125.00000000000003 +-5");
  t.assert.not(t.getSprite("Schorsch").sayText, "Expected Sprite Schorsch not to say anything");
  t.assert.not(t.getSprite("Stella").sayText, "Expected Sprite Stella not to say anything");
  t.assert.withinRange(t.getSprite("Schorsch").size, 20, 1, "Expected Sprite Schorsch to have size 20 +-1");
  t.assert.withinRange(t.getSprite("Stella").size, 100, 1, "Expected Sprite Stella to have size 100 +-1");
  t.assert.ok(t.getSprite("Schorsch").visible, "Expected Sprite Schorsch to be visible");
  t.assert.ok(t.getSprite("Stella").visible, "Expected Sprite Stella to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Schorsch").volume, 100, "Expected Sprite Schorsch to have volume 100");
  t.assert.equal(t.getSprite("Stella").volume, 100, "Expected Sprite Stella to have volume 100");
  await t.runForSteps(42);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.equal(t.getSprite("Schorsch").currentCostume, 0, "Expected Sprite Schorsch to have costume 0");
  t.assert.equal(t.getSprite("Stella").currentCostume, 0, "Expected Sprite Stella to have costume 0");
  t.assert.equal(t.getSprite("Schorsch").getCloneCount(), 0, "Expected Sprite Schorsch to have 0 clones");
  t.assert.equal(t.getSprite("Stella").getCloneCount(), 0, "Expected Sprite Stella to have 0 clones");
  t.assert.equal(t.getSprite("Schorsch").direction, 60, 1, "Expected Sprite Schorsch to face in direction 60 +-1");
  t.assert.equal(t.getSprite("Stella").direction, 90, 1, "Expected Sprite Stella to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Schorsch").effects.color, 0, "Expected effect color of Sprite Schorsch to be 0");
  t.assert.equal(t.getSprite("Schorsch").effects.fisheye, 0, "Expected effect fisheye of Sprite Schorsch to be 0");
  t.assert.equal(t.getSprite("Schorsch").effects.whirl, 0, "Expected effect whirl of Sprite Schorsch to be 0");
  t.assert.equal(t.getSprite("Schorsch").effects.pixelate, 0, "Expected effect pixelate of Sprite Schorsch to be 0");
  t.assert.equal(t.getSprite("Schorsch").effects.mosaic, 0, "Expected effect mosaic of Sprite Schorsch to be 0");
  t.assert.equal(t.getSprite("Schorsch").effects.brightness, 0, "Expected effect brightness of Sprite Schorsch to be 0");
  t.assert.equal(t.getSprite("Schorsch").effects.ghost, 0, "Expected effect ghost of Sprite Schorsch to be 0");
  t.assert.equal(t.getSprite("Stella").effects.color, 0, "Expected effect color of Sprite Stella to be 0");
  t.assert.equal(t.getSprite("Stella").effects.fisheye, 0, "Expected effect fisheye of Sprite Stella to be 0");
  t.assert.equal(t.getSprite("Stella").effects.whirl, 0, "Expected effect whirl of Sprite Stella to be 0");
  t.assert.equal(t.getSprite("Stella").effects.pixelate, 0, "Expected effect pixelate of Sprite Stella to be 0");
  t.assert.equal(t.getSprite("Stella").effects.mosaic, 0, "Expected effect mosaic of Sprite Stella to be 0");
  t.assert.equal(t.getSprite("Stella").effects.brightness, 0, "Expected effect brightness of Sprite Stella to be 0");
  t.assert.equal(t.getSprite("Stella").effects.ghost, 0, "Expected effect ghost of Sprite Stella to be 0");
  t.assert.equal(t.getSprite("Schorsch").layerOrder, 3, "Expected Sprite Schorsch to be at layer 3");
  t.assert.equal(t.getSprite("Stella").layerOrder, 2, "Expected Sprite Stella to be at layer 2");
  t.assert.withinRange(t.getSprite("Schorsch").x, -70.00000000000001, 5, "Expected Sprite Schorsch to have x-position -70.00000000000001 +-5");
  t.assert.withinRange(t.getSprite("Schorsch").y, -80, 5, "Expected Sprite Schorsch to have y-position -80 +-5");
  t.assert.withinRange(t.getSprite("Stella").x, 100, 5, "Expected Sprite Stella to have x-position 100 +-5");
  t.assert.withinRange(t.getSprite("Stella").y, 100.00000000000003, 5, "Expected Sprite Stella to have y-position 100.00000000000003 +-5");
  t.assert.not(t.getSprite("Schorsch").sayText, "Expected Sprite Schorsch not to say anything");
  t.assert.not(t.getSprite("Stella").sayText, "Expected Sprite Stella not to say anything");
  t.assert.withinRange(t.getSprite("Schorsch").size, 20, 1, "Expected Sprite Schorsch to have size 20 +-1");
  t.assert.withinRange(t.getSprite("Stella").size, 100, 1, "Expected Sprite Stella to have size 100 +-1");
  t.assert.ok(t.getSprite("Schorsch").visible, "Expected Sprite Schorsch to be visible");
  t.assert.ok(t.getSprite("Stella").visible, "Expected Sprite Stella to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Schorsch").volume, 100, "Expected Sprite Schorsch to have volume 100");
  t.assert.equal(t.getSprite("Stella").volume, 100, "Expected Sprite Stella to have volume 100");
  await t.runForSteps(92);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.equal(t.getSprite("Schorsch").currentCostume, 0, "Expected Sprite Schorsch to have costume 0");
  t.assert.equal(t.getSprite("Stella").currentCostume, 0, "Expected Sprite Stella to have costume 0");
  t.assert.equal(t.getSprite("Schorsch").getCloneCount(), 0, "Expected Sprite Schorsch to have 0 clones");
  t.assert.equal(t.getSprite("Stella").getCloneCount(), 0, "Expected Sprite Stella to have 0 clones");
  t.assert.equal(t.getSprite("Schorsch").direction, 90, 1, "Expected Sprite Schorsch to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Stella").direction, 90, 1, "Expected Sprite Stella to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Schorsch").effects.color, 0, "Expected effect color of Sprite Schorsch to be 0");
  t.assert.equal(t.getSprite("Schorsch").effects.fisheye, 0, "Expected effect fisheye of Sprite Schorsch to be 0");
  t.assert.equal(t.getSprite("Schorsch").effects.whirl, 0, "Expected effect whirl of Sprite Schorsch to be 0");
  t.assert.equal(t.getSprite("Schorsch").effects.pixelate, 0, "Expected effect pixelate of Sprite Schorsch to be 0");
  t.assert.equal(t.getSprite("Schorsch").effects.mosaic, 0, "Expected effect mosaic of Sprite Schorsch to be 0");
  t.assert.equal(t.getSprite("Schorsch").effects.brightness, 0, "Expected effect brightness of Sprite Schorsch to be 0");
  t.assert.equal(t.getSprite("Schorsch").effects.ghost, 0, "Expected effect ghost of Sprite Schorsch to be 0");
  t.assert.equal(t.getSprite("Stella").effects.color, 0, "Expected effect color of Sprite Stella to be 0");
  t.assert.equal(t.getSprite("Stella").effects.fisheye, 0, "Expected effect fisheye of Sprite Stella to be 0");
  t.assert.equal(t.getSprite("Stella").effects.whirl, 0, "Expected effect whirl of Sprite Stella to be 0");
  t.assert.equal(t.getSprite("Stella").effects.pixelate, 0, "Expected effect pixelate of Sprite Stella to be 0");
  t.assert.equal(t.getSprite("Stella").effects.mosaic, 0, "Expected effect mosaic of Sprite Stella to be 0");
  t.assert.equal(t.getSprite("Stella").effects.brightness, 0, "Expected effect brightness of Sprite Stella to be 0");
  t.assert.equal(t.getSprite("Stella").effects.ghost, 0, "Expected effect ghost of Sprite Stella to be 0");
  t.assert.equal(t.getSprite("Schorsch").layerOrder, 3, "Expected Sprite Schorsch to be at layer 3");
  t.assert.equal(t.getSprite("Stella").layerOrder, 2, "Expected Sprite Stella to be at layer 2");
  t.assert.withinRange(t.getSprite("Schorsch").x, -70.00000000000001, 5, "Expected Sprite Schorsch to have x-position -70.00000000000001 +-5");
  t.assert.withinRange(t.getSprite("Schorsch").y, -80, 5, "Expected Sprite Schorsch to have y-position -80 +-5");
  t.assert.withinRange(t.getSprite("Stella").x, 100, 5, "Expected Sprite Stella to have x-position 100 +-5");
  t.assert.withinRange(t.getSprite("Stella").y, 100.00000000000003, 5, "Expected Sprite Stella to have y-position 100.00000000000003 +-5");
  t.assert.not(t.getSprite("Schorsch").sayText, "Expected Sprite Schorsch not to say anything");
  t.assert.not(t.getSprite("Stella").sayText, "Expected Sprite Stella not to say anything");
  t.assert.withinRange(t.getSprite("Schorsch").size, 20, 1, "Expected Sprite Schorsch to have size 20 +-1");
  t.assert.withinRange(t.getSprite("Stella").size, 100, 1, "Expected Sprite Stella to have size 100 +-1");
  t.assert.ok(t.getSprite("Schorsch").visible, "Expected Sprite Schorsch to be visible");
  t.assert.ok(t.getSprite("Stella").visible, "Expected Sprite Stella to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Schorsch").volume, 100, "Expected Sprite Schorsch to have volume 100");
  t.assert.equal(t.getSprite("Stella").volume, 100, "Expected Sprite Stella to have volume 100");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687939103921',
      type: 'standard',
  }
]
