const test0 = async function (t) {
  t.mouseMove(190, -128);
  await t.runForSteps(1);
  t.dragSprite('Raumschiff', 122, 148, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.equal(t.getSprite("Raumschiff").direction, 166.1593045083444, 1, "Expected Sprite Raumschiff to face in direction 166.1593045083444 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, 122.4784463304166, 5, "Expected Sprite Raumschiff to have x-position 122.4784463304166 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 146.05807077654438, 5, "Expected Sprite Raumschiff to have y-position 146.05807077654438 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, 18.77777777777778, 5, "Expected Sprite Großes Schwarzes Loch to have x-position 18.77777777777778 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 68.88888888888889, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 68.88888888888889 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, 140.73333333333332, 5, "Expected Sprite Stern to have x-position 140.73333333333332 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 9.533333333333333, 5, "Expected Sprite Stern to have y-position 9.533333333333333 +-5");
  t.assert.not(t.getSprite("Großes Schwarzes Loch").visible, "Expected Sprite Großes Schwarzes Loch not to be visible");
  t.assert.not(t.getSprite("Stern").visible, "Expected Sprite Stern not to be visible");
  t.end();
}
const test1 = async function (t) {
  t.mouseMove(-240, -147);
  await t.runForSteps(1);
  await t.runForSteps(54);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Raumschiff").direction, 147.7515648865174, 1, "Expected Sprite Raumschiff to face in direction 147.7515648865174 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -149.84240681691875, 5, "Expected Sprite Raumschiff to have x-position -149.84240681691875 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 90.50021480481578, 5, "Expected Sprite Raumschiff to have y-position 90.50021480481578 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, -36.222222222222214, 5, "Expected Sprite Großes Schwarzes Loch to have x-position -36.222222222222214 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 18.888888888888893, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 18.888888888888893 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, 140.73333333333332, 5, "Expected Sprite Stern to have x-position 140.73333333333332 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 9.533333333333333, 5, "Expected Sprite Stern to have y-position 9.533333333333333 +-5");
  t.assert.not(t.getSprite("Raumschiff").visible, "Expected Sprite Raumschiff not to be visible");
  t.end();
}
const test2 = async function (t) {
  t.mouseMove(-156, -63);
  await t.runForSteps(1);
  await t.runForSteps(95);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Raumschiff").direction, 169.30612743437928, 1, "Expected Sprite Raumschiff to face in direction 169.30612743437928 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -164.0010632042775, 5, "Expected Sprite Raumschiff to have x-position -164.0010632042775 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, -20.630733486438686, 5, "Expected Sprite Raumschiff to have y-position -20.630733486438686 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, -77.33333333333333, 5, "Expected Sprite Großes Schwarzes Loch to have x-position -77.33333333333333 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, -27.333333333333332, 5, "Expected Sprite Großes Schwarzes Loch to have y-position -27.333333333333332 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, -94.16666666666669, 5, "Expected Sprite Stern to have x-position -94.16666666666669 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, -5.166666666666671, 5, "Expected Sprite Stern to have y-position -5.166666666666671 +-5");
  t.assert.equal(t.getSprite("Raumschiff").sayText, "Hilfe!", "Expected Sprite Raumschiff to say Hilfe!");
  t.end();
}
const test3 = async function (t) {
  t.mouseMove(-240, -147);
  await t.runForSteps(1);
  t.dragSprite('Stern', -220.11613792790814, 167.61604706774196, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Raumschiff").direction, 147.75156488651746, 1, "Expected Sprite Raumschiff to face in direction 147.75156488651746 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -197.86563433263484, 5, "Expected Sprite Raumschiff to have x-position -197.86563433263484 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 166.6170304172262, 5, "Expected Sprite Raumschiff to have y-position 166.6170304172262 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, 18.77777777777778, 5, "Expected Sprite Großes Schwarzes Loch to have x-position 18.77777777777778 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 68.88888888888889, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 68.88888888888889 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, -214.84753562910967, 5, "Expected Sprite Stern to have x-position -214.84753562910967 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 165.45577961661292, 5, "Expected Sprite Stern to have y-position 165.45577961661292 +-5");
  t.assert.equal(t.getSprite("Stern").sayText, "Du schaffst das!", "Expected Sprite Stern to say Du schaffst das!");
  await t.runForSteps(54);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Raumschiff").direction, 147.7515648865174, 1, "Expected Sprite Raumschiff to face in direction 147.7515648865174 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -149.84240681691875, 5, "Expected Sprite Raumschiff to have x-position -149.84240681691875 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 90.50021480481578, 5, "Expected Sprite Raumschiff to have y-position 90.50021480481578 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, -36.222222222222214, 5, "Expected Sprite Großes Schwarzes Loch to have x-position -36.222222222222214 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 18.888888888888893, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 18.888888888888893 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, -56.78946666515557, 5, "Expected Sprite Stern to have x-position -56.78946666515557 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 100.64775608274194, 5, "Expected Sprite Stern to have y-position 100.64775608274194 +-5");
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
      seed: '1687938869711',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938869711',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938869711',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938869711',
      type: 'standard',
  }
]
