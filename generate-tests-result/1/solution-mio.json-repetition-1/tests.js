const test0 = async function (t) {
  t.mouseMove(-239, -110);
  await t.runForSteps(1);
  t.dragSprite('Raumschiff', 155.402777981126, 172.6551492010595, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.equal(t.getSprite("Raumschiff").direction, -125.62789049359705, 1, "Expected Sprite Raumschiff to face in direction -125.62789049359705 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, 153.77714338441544, 5, "Expected Sprite Raumschiff to have x-position 153.77714338441544 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 171.49011179480263, 5, "Expected Sprite Raumschiff to have y-position 171.49011179480263 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, 18.77777777777778, 5, "Expected Sprite Großes Schwarzes Loch to have x-position 18.77777777777778 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 68.88888888888889, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 68.88888888888889 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, 141.01666666666668, 5, "Expected Sprite Stern to have x-position 141.01666666666668 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 9.833333333333334, 5, "Expected Sprite Stern to have y-position 9.833333333333334 +-5");
  t.assert.not(t.getSprite("Großes Schwarzes Loch").visible, "Expected Sprite Großes Schwarzes Loch not to be visible");
  t.assert.not(t.getSprite("Stern").visible, "Expected Sprite Stern not to be visible");
  t.end();
}
const test1 = async function (t) {
  t.mouseMove(-148, -116);
  await t.runForSteps(1);
  await t.runForSteps(58);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Raumschiff").x, -178.53374741600192, 5, "Expected Sprite Raumschiff to have x-position -178.53374741600192 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 51.93561078801104, 5, "Expected Sprite Raumschiff to have y-position 51.93561078801104 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, -52.111111111111114, 5, "Expected Sprite Großes Schwarzes Loch to have x-position -52.111111111111114 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 4.444444444444443, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 4.444444444444443 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, 80.01666666666668, 5, "Expected Sprite Stern to have x-position 80.01666666666668 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 19.833333333333332, 5, "Expected Sprite Stern to have y-position 19.833333333333332 +-5");
  await t.runForSteps(69);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Raumschiff").direction, 169.6951535312341, 1, "Expected Sprite Raumschiff to face in direction 169.6951535312341 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -161.36074534880345, 5, "Expected Sprite Raumschiff to have x-position -161.36074534880345 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, -42.51590058158012, 5, "Expected Sprite Raumschiff to have y-position -42.51590058158012 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, -54.111111111111114, 5, "Expected Sprite Großes Schwarzes Loch to have x-position -54.111111111111114 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, -22.444444444444443, 5, "Expected Sprite Großes Schwarzes Loch to have y-position -22.444444444444443 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, 46.96666666666666, 5, "Expected Sprite Stern to have x-position 46.96666666666666 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 128.5, 5, "Expected Sprite Stern to have y-position 128.5 +-5");
  t.assert.not(t.getSprite("Raumschiff").visible, "Expected Sprite Raumschiff not to be visible");
  t.end();
}
const test2 = async function (t) {
  t.mouseMove(-148, -116);
  await t.runForSteps(1);
  t.dragSprite('Stern', -198.22804034411826, 146.0134023416949, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Raumschiff").x, -199.28445824720006, 5, "Expected Sprite Raumschiff to have x-position -199.28445824720006 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 166.06452035960035, 5, "Expected Sprite Raumschiff to have y-position 166.06452035960035 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, 18.77777777777778, 5, "Expected Sprite Großes Schwarzes Loch to have x-position 18.77777777777778 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 68.88888888888889, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 68.88888888888889 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, -193.60757300504963, 5, "Expected Sprite Stern to have x-position -193.60757300504963 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 143.91317896933333, 5, "Expected Sprite Stern to have y-position 143.91317896933333 +-5");
  t.assert.equal(t.getSprite("Stern").sayText, "Du schaffst das!", "Expected Sprite Stern to say Du schaffst das!");
  await t.runForSteps(58);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Raumschiff").x, -178.17597653960195, 5, "Expected Sprite Raumschiff to have x-position -178.17597653960195 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 49.96787096781122, 5, "Expected Sprite Raumschiff to have y-position 49.96787096781122 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, -53.33333333333333, 5, "Expected Sprite Großes Schwarzes Loch to have x-position -53.33333333333333 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 3.333333333333343, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 3.333333333333343 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, -54.993552832990474, 5, "Expected Sprite Stern to have x-position -54.993552832990474 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 80.90647779848587, 5, "Expected Sprite Stern to have y-position 80.90647779848587 +-5");
  t.assert.not(t.getSprite("Stern").sayText, "Expected Sprite Stern not to say anything");
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
      seed: '1687849345531',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849345531',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849345531',
      type: 'standard',
  }
]
