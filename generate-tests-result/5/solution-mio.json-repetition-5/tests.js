const test0 = async function (t) {
  t.dragSprite('Raumschiff', 117, 167, null);
  await t.runForSteps(1);
  t.dragSprite('Raumschiff', 117, 167, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.equal(t.getSprite("Raumschiff").direction, -144.98496020464333, 1, "Expected Sprite Raumschiff to face in direction -144.98496020464333 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, 115.85241712191612, 5, "Expected Sprite Raumschiff to have x-position 115.85241712191612 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 165.36199708854693, 5, "Expected Sprite Raumschiff to have y-position 165.36199708854693 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, 18.77777777777778, 5, "Expected Sprite Großes Schwarzes Loch to have x-position 18.77777777777778 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 68.88888888888889, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 68.88888888888889 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, 143.25, 5, "Expected Sprite Stern to have x-position 143.25 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 13.016666666666666, 5, "Expected Sprite Stern to have y-position 13.016666666666666 +-5");
  t.assert.not(t.getSprite("Großes Schwarzes Loch").visible, "Expected Sprite Großes Schwarzes Loch not to be visible");
  t.assert.not(t.getSprite("Stern").visible, "Expected Sprite Stern not to be visible");
  t.end();
}
const test1 = async function (t) {
  t.mouseMove(-7, -120);
  await t.runForSteps(1);
  t.dragSprite('Raumschiff', -116.3921667464787, 119.03043372579829, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Raumschiff").direction, 155.4088208989691, 1, "Expected Sprite Raumschiff to face in direction 155.4088208989691 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -115.55988513240425, 5, "Expected Sprite Raumschiff to have x-position -115.55988513240425 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 117.21183335329376, 5, "Expected Sprite Raumschiff to have y-position 117.21183335329376 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, 18.77777777777778, 5, "Expected Sprite Großes Schwarzes Loch to have x-position 18.77777777777778 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 68.88888888888889, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 68.88888888888889 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, 136.75, 5, "Expected Sprite Stern to have x-position 136.75 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 6.983333333333333, 5, "Expected Sprite Stern to have y-position 6.983333333333333 +-5");
  t.assert.equal(t.getSprite("Raumschiff").sayText, "Hilfe!", "Expected Sprite Raumschiff to say Hilfe!");
  await t.runForSteps(39);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Raumschiff").x, -103.07566092128755, 5, "Expected Sprite Raumschiff to have x-position -103.07566092128755 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 89.93282776572575, 5, "Expected Sprite Raumschiff to have y-position 89.93282776572575 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, 0.44444444444444287, 5, "Expected Sprite Großes Schwarzes Loch to have x-position 0.44444444444444287 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 52.22222222222222, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 52.22222222222222 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, 143.25, 5, "Expected Sprite Stern to have x-position 143.25 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 13.016666666666666, 5, "Expected Sprite Stern to have y-position 13.016666666666666 +-5");
  t.assert.not(t.getSprite("Raumschiff").sayText, "Expected Sprite Raumschiff not to say anything");
  t.assert.not(t.getSprite("Raumschiff").visible, "Expected Sprite Raumschiff not to be visible");
  t.end();
}
const test2 = async function (t) {
  t.mouseMove(-206, 40);
  await t.runForSteps(1);
  await t.runForSteps(300);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Raumschiff").x, -206.0858291923089, 5, "Expected Sprite Raumschiff to have x-position -206.0858291923089 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 38.140367499973706, 5, "Expected Sprite Raumschiff to have y-position 38.140367499973706 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, -26.66666666666667, 5, "Expected Sprite Großes Schwarzes Loch to have x-position -26.66666666666667 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, -16.666666666666668, 5, "Expected Sprite Großes Schwarzes Loch to have y-position -16.666666666666668 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, -18.650000000000002, 5, "Expected Sprite Stern to have x-position -18.650000000000002 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, -67.75, 5, "Expected Sprite Stern to have y-position -67.75 +-5");
  t.end();
}
const test3 = async function (t) {
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.dragSprite('Raumschiff', -104.90322166852296, 73.78223100750807, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Raumschiff").direction, 125.12010710237837, 1, "Expected Sprite Raumschiff to face in direction 125.12010710237837 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -103.26732591352096, 5, "Expected Sprite Raumschiff to have x-position -103.26732591352096 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 72.63164633927785, 5, "Expected Sprite Raumschiff to have y-position 72.63164633927785 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, 13.88888888888889, 5, "Expected Sprite Großes Schwarzes Loch to have x-position 13.88888888888889 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 64.44444444444444, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 64.44444444444444 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, 123.75, 5, "Expected Sprite Stern to have x-position 123.75 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, -5.083333333333332, 5, "Expected Sprite Stern to have y-position -5.083333333333332 +-5");
  t.dragSprite('Stern', -102, 70, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Raumschiff").x, -101.63143015851897, 5, "Expected Sprite Raumschiff to have x-position -101.63143015851897 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 71.48106167104763, 5, "Expected Sprite Raumschiff to have y-position 71.48106167104763 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, 12.666666666666668, 5, "Expected Sprite Großes Schwarzes Loch to have x-position 12.666666666666668 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 63.333333333333336, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 63.333333333333336 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, -97.3, 5, "Expected Sprite Stern to have x-position -97.3 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 45.9, 5, "Expected Sprite Stern to have y-position 45.9 +-5");
  t.assert.equal(t.getSprite("Stern").sayText, "Du schaffst das!", "Expected Sprite Stern to say Du schaffst das!");
  await t.runForSteps(100);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Raumschiff").direction, 125.1201071023784, 1, "Expected Sprite Raumschiff to face in direction 125.1201071023784 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -37.8314957134411, 5, "Expected Sprite Raumschiff to have x-position -37.8314957134411 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 26.608259610068913, 5, "Expected Sprite Raumschiff to have y-position 26.608259610068913 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, -35, 5, "Expected Sprite Großes Schwarzes Loch to have x-position -35 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 20, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 20 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, -73.8, 5, "Expected Sprite Stern to have x-position -73.8 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, -74.6, 5, "Expected Sprite Stern to have y-position -74.6 +-5");
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
      seed: '1687938106816',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938106816',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938106816',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938106816',
      type: 'standard',
  }
]
