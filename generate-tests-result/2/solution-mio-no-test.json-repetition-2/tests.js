const test0 = async function (t) {
  t.dragSprite('Raumschiff', 51.42610774882205, 180, null);
  await t.runForSteps(1);
  t.dragSprite('Raumschiff', 117, 167, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.equal(t.getSprite("Raumschiff").direction, -144.98496020464333, 1, "Expected Sprite Raumschiff to face in direction -144.98496020464333 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, 115.85241712191612, 5, "Expected Sprite Raumschiff to have x-position 115.85241712191612 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 165.36199708854693, 5, "Expected Sprite Raumschiff to have y-position 165.36199708854693 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, 18.77777777777778, 5, "Expected Sprite Großes Schwarzes Loch to have x-position 18.77777777777778 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 68.88888888888889, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 68.88888888888889 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, 141.26666666666668, 5, "Expected Sprite Stern to have x-position 141.26666666666668 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 12.533333333333333, 5, "Expected Sprite Stern to have y-position 12.533333333333333 +-5");
  t.assert.not(t.getSprite("Großes Schwarzes Loch").visible, "Expected Sprite Großes Schwarzes Loch not to be visible");
  t.assert.not(t.getSprite("Stern").visible, "Expected Sprite Stern not to be visible");
  t.end();
}
const test1 = async function (t) {
  t.mouseMove(224, -170);
  await t.runForSteps(1);
  t.dragSprite('Stern', -218.7855373491539, 175.52444296969082, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Raumschiff").x, -196.87939898480084, 5, "Expected Sprite Raumschiff to have x-position -196.87939898480084 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 167.49763126139692, 5, "Expected Sprite Raumschiff to have y-position 167.49763126139692 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, 18.77777777777778, 5, "Expected Sprite Großes Schwarzes Loch to have x-position 18.77777777777778 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 68.88888888888889, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 68.88888888888889 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, -214.07244506000134, 5, "Expected Sprite Stern to have x-position -214.07244506000134 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 170.23236892019597, 5, "Expected Sprite Stern to have y-position 170.23236892019597 +-5");
  t.assert.equal(t.getSprite("Stern").sayText, "Du schaffst das!", "Expected Sprite Stern to say Du schaffst das!");
  t.dragSprite('Raumschiff', 121.1408769585293, 108.12333812784587, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Raumschiff").direction, 159.7039548270124, 1, "Expected Sprite Raumschiff to face in direction 159.7039548270124 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, 121.8346187849194, 5, "Expected Sprite Raumschiff to have x-position 121.8346187849194 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 106.2475123687955, 5, "Expected Sprite Raumschiff to have y-position 106.2475123687955 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, 17.555555555555557, 5, "Expected Sprite Großes Schwarzes Loch to have x-position 17.555555555555557 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 67.77777777777777, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 67.77777777777777 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, -209.35935277084877, 5, "Expected Sprite Stern to have x-position -209.35935277084877 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 164.94029487070114, 5, "Expected Sprite Stern to have y-position 164.94029487070114 +-5");
  await t.runForSteps(200);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Raumschiff").direction, 159.70395482701213, 1, "Expected Sprite Raumschiff to face in direction 159.70395482701213 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, 202.30867064617053, 5, "Expected Sprite Raumschiff to have x-position 202.30867064617053 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, -111.3482756810481, 5, "Expected Sprite Raumschiff to have y-position -111.3482756810481 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, -30.888888888888886, 5, "Expected Sprite Großes Schwarzes Loch to have x-position -30.888888888888886 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, -17.555555555555557, 5, "Expected Sprite Großes Schwarzes Loch to have y-position -17.555555555555557 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, -72.67967638542439, 5, "Expected Sprite Stern to have x-position -72.67967638542439 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 11.470147435350555, 5, "Expected Sprite Stern to have y-position 11.470147435350555 +-5");
  t.assert.not(t.getSprite("Stern").sayText, "Expected Sprite Stern not to say anything");
  t.assert.not(t.getSprite("Raumschiff").visible, "Expected Sprite Raumschiff not to be visible");
  t.assert.not(t.getSprite("Stern").visible, "Expected Sprite Stern not to be visible");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687939180146',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687939180146',
      type: 'standard',
  }
]
