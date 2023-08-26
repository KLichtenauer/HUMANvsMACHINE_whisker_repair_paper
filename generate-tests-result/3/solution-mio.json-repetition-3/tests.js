const test0 = async function (t) {
  await t.runForSteps(6);
  await t.runForSteps(1);
  t.dragSprite('Raumschiff', 134.32193597774486, 128.74488387056556, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.equal(t.getSprite("Raumschiff").direction, -133.78550366495762, 1, "Expected Sprite Raumschiff to face in direction -133.78550366495762 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, 132.8780653311598, 5, "Expected Sprite Raumschiff to have x-position 132.8780653311598 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 127.360962790471, 5, "Expected Sprite Raumschiff to have y-position 127.360962790471 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, 11.444444444444445, 5, "Expected Sprite Großes Schwarzes Loch to have x-position 11.444444444444445 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 62.22222222222222, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 62.22222222222222 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, 139.9, 5, "Expected Sprite Stern to have x-position 139.9 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 11.416666666666666, 5, "Expected Sprite Stern to have y-position 11.416666666666666 +-5");
  t.assert.not(t.getSprite("Großes Schwarzes Loch").visible, "Expected Sprite Großes Schwarzes Loch not to be visible");
  t.assert.not(t.getSprite("Stern").visible, "Expected Sprite Stern not to be visible");
  t.end();
}
const test1 = async function (t) {
  t.mouseMove(239, -113);
  await t.runForSteps(1);
  await t.runForSteps(100);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Raumschiff").direction, 122.80772750738382, 1, "Expected Sprite Raumschiff to face in direction 122.80772750738382 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -104.18373696182735, 5, "Expected Sprite Raumschiff to have x-position -104.18373696182735 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 108.23234068381998, 5, "Expected Sprite Raumschiff to have y-position 108.23234068381998 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, -48.44444444444444, 5, "Expected Sprite Großes Schwarzes Loch to have x-position -48.44444444444444 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 7.777777777777779, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 7.777777777777779 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, 139.9, 5, "Expected Sprite Stern to have x-position 139.9 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 11.416666666666666, 5, "Expected Sprite Stern to have y-position 11.416666666666666 +-5");
  t.assert.not(t.getSprite("Raumschiff").visible, "Expected Sprite Raumschiff not to be visible");
  t.end();
}
const test2 = async function (t) {
  await t.runForSteps(19);
  await t.runForSteps(1);
  t.mouseMove(-158, 162);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Raumschiff").direction, 32.76118359193732, 1, "Expected Sprite Raumschiff to face in direction 32.76118359193732 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -168.44015004184516, 5, "Expected Sprite Raumschiff to have x-position -168.44015004184516 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 145.77593000390894, 5, "Expected Sprite Raumschiff to have y-position 145.77593000390894 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, -4.444444444444443, 5, "Expected Sprite Großes Schwarzes Loch to have x-position -4.444444444444443 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 47.77777777777778, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 47.77777777777778 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, 142, 5, "Expected Sprite Stern to have x-position 142 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, -18.333333333333332, 5, "Expected Sprite Stern to have y-position -18.333333333333332 +-5");
  await t.runForSteps(79);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Raumschiff").direction, 32.76118359193955, 1, "Expected Sprite Raumschiff to face in direction 32.76118359193955 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -157.6173775640793, 5, "Expected Sprite Raumschiff to have x-position -157.6173775640793 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 162.5945980812125, 5, "Expected Sprite Raumschiff to have y-position 162.5945980812125 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, -68.88888888888889, 5, "Expected Sprite Großes Schwarzes Loch to have x-position -68.88888888888889 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, -25.555555555555557, 5, "Expected Sprite Großes Schwarzes Loch to have y-position -25.555555555555557 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, 63.45, 5, "Expected Sprite Stern to have x-position 63.45 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, -121.15, 5, "Expected Sprite Stern to have y-position -121.15 +-5");
  t.end();
}
const test3 = async function (t) {
  t.mouseMove(239, -113);
  await t.runForSteps(1);
  t.dragSprite('Stern', -198, 168, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Raumschiff").x, -196.63802585830973, 5, "Expected Sprite Raumschiff to have x-position -196.63802585830973 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 167.8327137082042, 5, "Expected Sprite Raumschiff to have y-position 167.8327137082042 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, 18.77777777777778, 5, "Expected Sprite Großes Schwarzes Loch to have x-position 18.77777777777778 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 68.88888888888889, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 68.88888888888889 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, -192.26666666666668, 5, "Expected Sprite Stern to have x-position -192.26666666666668 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 163.95, 5, "Expected Sprite Stern to have y-position 163.95 +-5");
  t.assert.equal(t.getSprite("Stern").sayText, "Du schaffst das!", "Expected Sprite Stern to say Du schaffst das!");
  await t.runForSteps(100);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Raumschiff").direction, 122.80772750738382, 1, "Expected Sprite Raumschiff to face in direction 122.80772750738382 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -104.18373696182735, 5, "Expected Sprite Raumschiff to have x-position -104.18373696182735 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 108.23234068381998, 5, "Expected Sprite Raumschiff to have y-position 108.23234068381998 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, -48.44444444444444, 5, "Expected Sprite Großes Schwarzes Loch to have x-position -48.44444444444444 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 7.777777777777779, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 7.777777777777779 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, -20.26666666666665, 5, "Expected Sprite Stern to have x-position -20.26666666666665 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 42.44999999999999, 5, "Expected Sprite Stern to have y-position 42.44999999999999 +-5");
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
      seed: '1687936638148',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936638148',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936638148',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936638148',
      type: 'standard',
  }
]
