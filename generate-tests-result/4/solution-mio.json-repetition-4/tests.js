const test0 = async function (t) {
  t.dragSprite('Raumschiff', 50.71429445008458, 144.93071440505824, null);
  await t.runForSteps(1);
  t.dragSprite('Raumschiff', 117, 167, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.equal(t.getSprite("Raumschiff").direction, -144.98496020464333, 1, "Expected Sprite Raumschiff to face in direction -144.98496020464333 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, 115.85241712191612, 5, "Expected Sprite Raumschiff to have x-position 115.85241712191612 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 165.36199708854693, 5, "Expected Sprite Raumschiff to have y-position 165.36199708854693 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, 18.77777777777778, 5, "Expected Sprite Großes Schwarzes Loch to have x-position 18.77777777777778 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 68.88888888888889, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 68.88888888888889 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, 145.38333333333333, 5, "Expected Sprite Stern to have x-position 145.38333333333333 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 9.15, 5, "Expected Sprite Stern to have y-position 9.15 +-5");
  t.assert.not(t.getSprite("Großes Schwarzes Loch").visible, "Expected Sprite Großes Schwarzes Loch not to be visible");
  t.assert.not(t.getSprite("Stern").visible, "Expected Sprite Stern not to be visible");
  t.end();
}
const test1 = async function (t) {
  t.mouseMove(7, 152);
  await t.runForSteps(1);
  await t.runForSteps(47);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Raumschiff").direction, 94.96974072811015, 1, "Expected Sprite Raumschiff to face in direction 94.96974072811015 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -104.36090353321396, 5, "Expected Sprite Raumschiff to have x-position -104.36090353321396 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 161.68355682897482, 5, "Expected Sprite Raumschiff to have y-position 161.68355682897482 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, -37.44444444444445, 5, "Expected Sprite Großes Schwarzes Loch to have x-position -37.44444444444445 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 17.77777777777777, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 17.77777777777777 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, 145.38333333333333, 5, "Expected Sprite Stern to have x-position 145.38333333333333 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 9.15, 5, "Expected Sprite Stern to have y-position 9.15 +-5");
  t.assert.not(t.getSprite("Raumschiff").visible, "Expected Sprite Raumschiff not to be visible");
  t.end();
}
const test2 = async function (t) {
  t.dragSprite('Raumschiff', 50.71429445008458, 144.93071440505824, null);
  await t.runForSteps(1);
  t.mouseMove(-197, -174);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Raumschiff").direction, 179.75321318782946, 1, "Expected Sprite Raumschiff to face in direction 179.75321318782946 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -198.46750690627178, 5, "Expected Sprite Raumschiff to have x-position -198.46750690627178 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 166.70472171211753, 5, "Expected Sprite Raumschiff to have y-position 166.70472171211753 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, 18.77777777777778, 5, "Expected Sprite Großes Schwarzes Loch to have x-position 18.77777777777778 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 68.88888888888889, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 68.88888888888889 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, 134.61666666666667, 5, "Expected Sprite Stern to have x-position 134.61666666666667 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 10.85, 5, "Expected Sprite Stern to have y-position 10.85 +-5");
  await t.runForSteps(44);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Raumschiff").direction, 179.7532131878295, 1, "Expected Sprite Raumschiff to face in direction 179.7532131878295 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -198.0798562868529, 5, "Expected Sprite Raumschiff to have x-position -198.0798562868529 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 76.70555656600467, 5, "Expected Sprite Raumschiff to have y-position 76.70555656600467 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, -36.222222222222214, 5, "Expected Sprite Großes Schwarzes Loch to have x-position -36.222222222222214 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 18.888888888888893, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 18.888888888888893 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, -107.63333333333335, 5, "Expected Sprite Stern to have x-position -107.63333333333335 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 49.1, 5, "Expected Sprite Stern to have y-position 49.1 +-5");
  await t.runForSteps(62);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Raumschiff").direction, 179.75321318782954, 1, "Expected Sprite Raumschiff to face in direction 179.75321318782954 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -197.53714541966647, 5, "Expected Sprite Raumschiff to have x-position -197.53714541966647 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, -49.29327463855304, 5, "Expected Sprite Raumschiff to have y-position -49.29327463855304 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, -49.888888888888886, 5, "Expected Sprite Großes Schwarzes Loch to have x-position -49.888888888888886 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, -21.555555555555557, 5, "Expected Sprite Großes Schwarzes Loch to have y-position -21.555555555555557 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, -166.35, 5, "Expected Sprite Stern to have x-position -166.35 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 9.699999999999996, 5, "Expected Sprite Stern to have y-position 9.699999999999996 +-5");
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
      seed: '1687937305418',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937305418',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937305418',
      type: 'standard',
  }
]
