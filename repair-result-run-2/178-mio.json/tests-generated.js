const test0 = async function (t) {
  t.mouseMove(-103, -111);
  await t.runForSteps(1);
  t.dragSprite('Boot', -130.98491368427278, -142.50910325950628, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 2, "Expected backdrop 2");
  t.assert.equal(t.getSprite("Boot").currentCostume, 1, "Expected Sprite Boot to have costume 1");
  t.assert.equal(t.getSprite("Holzdrehtor").direction, 162, 1, "Expected Sprite Holzdrehtor to face in direction 162 +-1");
  t.assert.withinRange(t.getSprite("Boot").x, -191, 5, "Expected Sprite Boot to have x-position -191 +-5");
  t.assert.withinRange(t.getSprite("Boot").y, -150, 5, "Expected Sprite Boot to have y-position -150 +-5");
  t.assert.equal(t.getSprite("Boot").sayText, "Oh nein!", "Expected Sprite Boot to say Oh nein!");
  t.assert.not(t.getSprite("Holzdrehtor").visible, "Expected Sprite Holzdrehtor not to be visible");
  t.assert.not(t.getSprite("Krebs").visible, "Expected Sprite Krebs not to be visible");
  t.end();
}
const test1 = async function (t) {
  t.mouseMove(-229, 77);
  await t.runForSteps(1);
  await t.runForSteps(7);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Boot").direction, -9.748594241685353, 1, "Expected Sprite Boot to face in direction -9.748594241685353 +-1");
  t.assert.equal(t.getSprite("Holzdrehtor").direction, 169, 1, "Expected Sprite Holzdrehtor to face in direction 169 +-1");
  t.assert.withinRange(t.getSprite("Boot").x, -193.04785581527213, 5, "Expected Sprite Boot to have x-position -193.04785581527213 +-5");
  t.assert.withinRange(t.getSprite("Boot").y, -132.2599161521341, 5, "Expected Sprite Boot to have y-position -132.2599161521341 +-5");
  t.end();
}
const test2 = async function (t) {
  t.mouseMove(-103, -111);
  await t.runForSteps(1);
  t.dragSprite('Boot', -29.430663927685657, -62.160470058576294, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Boot").direction, -123.68602166417347, 1, "Expected Sprite Boot to face in direction -123.68602166417347 +-1");
  t.assert.equal(t.getSprite("Holzdrehtor").direction, 162, 1, "Expected Sprite Holzdrehtor to face in direction 162 +-1");
  t.assert.withinRange(t.getSprite("Boot").x, -32.007352175493594, 5, "Expected Sprite Boot to have x-position -32.007352175493594 +-5");
  t.assert.withinRange(t.getSprite("Boot").y, -63.67880884420456, 5, "Expected Sprite Boot to have y-position -63.67880884420456 +-5");
  t.end();
}
const test3 = async function (t) {
  t.mouseMove(-229, 77);
  await t.runForSteps(1);
  t.dragSprite('Boot', 161.54359045858752, -165.83575591843112, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.equal(t.getSprite("Holzdrehtor").direction, 162, 1, "Expected Sprite Holzdrehtor to face in direction 162 +-1");
  t.assert.withinRange(t.getSprite("Boot").x, -191, 5, "Expected Sprite Boot to have x-position -191 +-5");
  t.assert.withinRange(t.getSprite("Boot").y, -150, 5, "Expected Sprite Boot to have y-position -150 +-5");
  t.assert.equal(t.getSprite("Boot").sayText, "Yeah!", "Expected Sprite Boot to say Yeah!");
  t.assert.not(t.getSprite("Holzdrehtor").visible, "Expected Sprite Holzdrehtor not to be visible");
  t.assert.not(t.getSprite("Krebs").visible, "Expected Sprite Krebs not to be visible");
  await t.runForSteps(67);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Holzdrehtor").direction, -138, 1, "Expected Sprite Holzdrehtor to face in direction -138 +-1");
  t.assert.not(t.getSprite("Boot").sayText, "Expected Sprite Boot not to say anything");
  t.end();
}
const test4 = async function (t) {
  t.mouseMove(-103, -111);
  await t.runForSteps(1);
  t.dragSprite('Boot', -130.98491368427278, -142.50910325950628, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 2, "Expected backdrop 2");
  t.assert.equal(t.getSprite("Boot").currentCostume, 1, "Expected Sprite Boot to have costume 1");
  t.assert.equal(t.getSprite("Holzdrehtor").direction, 162, 1, "Expected Sprite Holzdrehtor to face in direction 162 +-1");
  t.assert.withinRange(t.getSprite("Boot").x, -191, 5, "Expected Sprite Boot to have x-position -191 +-5");
  t.assert.withinRange(t.getSprite("Boot").y, -150, 5, "Expected Sprite Boot to have y-position -150 +-5");
  t.assert.equal(t.getSprite("Boot").sayText, "Oh nein!", "Expected Sprite Boot to say Oh nein!");
  t.assert.not(t.getSprite("Holzdrehtor").visible, "Expected Sprite Holzdrehtor not to be visible");
  t.assert.not(t.getSprite("Krebs").visible, "Expected Sprite Krebs not to be visible");
  await t.runForSteps(19);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Holzdrehtor").direction, -178, 1, "Expected Sprite Holzdrehtor to face in direction -178 +-1");
  await t.runForSteps(19);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Holzdrehtor").direction, -158, 1, "Expected Sprite Holzdrehtor to face in direction -158 +-1");
  await t.runForSteps(5);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Holzdrehtor").direction, -152, 1, "Expected Sprite Holzdrehtor to face in direction -152 +-1");
  await t.runForSteps(16);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Holzdrehtor").direction, -138, 1, "Expected Sprite Holzdrehtor to face in direction -138 +-1");
  t.assert.not(t.getSprite("Boot").sayText, "Expected Sprite Boot not to say anything");
  t.end();
}
const test5 = async function (t) {
  t.mouseMove(-103, -111);
  await t.runForSteps(1);
  t.dragSprite('Boot', -29.430663927685657, -62.160470058576294, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Boot").direction, -123.68602166417347, 1, "Expected Sprite Boot to face in direction -123.68602166417347 +-1");
  t.assert.equal(t.getSprite("Holzdrehtor").direction, 162, 1, "Expected Sprite Holzdrehtor to face in direction 162 +-1");
  t.assert.withinRange(t.getSprite("Boot").x, -32.007352175493594, 5, "Expected Sprite Boot to have x-position -32.007352175493594 +-5");
  t.assert.withinRange(t.getSprite("Boot").y, -63.67880884420456, 5, "Expected Sprite Boot to have y-position -63.67880884420456 +-5");
  t.dragSprite('Krebs', -31, -62, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Holzdrehtor").direction, 163, 1, "Expected Sprite Holzdrehtor to face in direction 163 +-1");
  t.assert.withinRange(t.getSprite("Boot").x, -32.83944163714009, 5, "Expected Sprite Boot to have x-position -32.83944163714009 +-5");
  t.assert.withinRange(t.getSprite("Boot").y, -64.23345028497224, 5, "Expected Sprite Boot to have y-position -64.23345028497224 +-5");
  t.assert.withinRange(t.getSprite("Krebs").x, 12, 5, "Expected Sprite Krebs to have x-position 12 +-5");
  t.assert.withinRange(t.getSprite("Krebs").y, 40, 5, "Expected Sprite Krebs to have y-position 40 +-5");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1',
      type: 'standard',
  },
  {
      test: test4,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1',
      type: 'standard',
  },
  {
      test: test5,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1',
      type: 'standard',
  }
]
