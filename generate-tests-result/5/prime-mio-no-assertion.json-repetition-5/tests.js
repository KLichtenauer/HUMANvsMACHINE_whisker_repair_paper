const test0 = async function (t) {
  await t.runForSteps(84);
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
  t.typeText('true');
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
  t.assert.equal(t.getSprite("Sprite1").sayText, "false", "Expected Sprite Sprite1 to say false");
  t.assert.withinRange(t.getSprite("Sprite1").size, 100, 1, "Expected Sprite Sprite1 to have size 100 +-1");
  t.assert.ok(t.getSprite("Sprite1").visible, "Expected Sprite Sprite1 to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Sprite1").volume, 100, "Expected Sprite Sprite1 to have volume 100");
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(14);
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
  t.typeText('149');
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
  t.assert.not(t.getSprite("Sprite1").sayText, "Expected Sprite Sprite1 not to say anything");
  t.assert.withinRange(t.getSprite("Sprite1").size, 100, 1, "Expected Sprite Sprite1 to have size 100 +-1");
  t.assert.ok(t.getSprite("Sprite1").visible, "Expected Sprite Sprite1 to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Sprite1").volume, 100, "Expected Sprite Sprite1 to have volume 100");
  await t.runForSteps(73);
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
  t.assert.not(t.getSprite("Sprite1").sayText, "Expected Sprite Sprite1 not to say anything");
  t.assert.withinRange(t.getSprite("Sprite1").size, 100, 1, "Expected Sprite Sprite1 to have size 100 +-1");
  t.assert.ok(t.getSprite("Sprite1").visible, "Expected Sprite Sprite1 to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Sprite1").volume, 100, "Expected Sprite Sprite1 to have volume 100");
  await t.runForSteps(53);
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
  t.assert.not(t.getSprite("Sprite1").sayText, "Expected Sprite Sprite1 not to say anything");
  t.assert.withinRange(t.getSprite("Sprite1").size, 100, 1, "Expected Sprite Sprite1 to have size 100 +-1");
  t.assert.ok(t.getSprite("Sprite1").visible, "Expected Sprite Sprite1 to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Sprite1").volume, 100, "Expected Sprite Sprite1 to have volume 100");
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
  t.assert.equal(t.getSprite("Sprite1").sayText, "true", "Expected Sprite Sprite1 to say true");
  t.assert.withinRange(t.getSprite("Sprite1").size, 100, 1, "Expected Sprite Sprite1 to have size 100 +-1");
  t.assert.ok(t.getSprite("Sprite1").visible, "Expected Sprite Sprite1 to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Sprite1").volume, 100, "Expected Sprite Sprite1 to have volume 100");
  t.end();
}
const test2 = async function (t) {
  await t.runForSteps(30);
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
  t.assert.equal(t.getSprite("Sprite1").sayText, "false", "Expected Sprite Sprite1 to say false");
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
      seed: '1687938645536',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938645536',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938645536',
      type: 'standard',
  }
]
