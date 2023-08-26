const test0 = async function (t) {
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.dragSprite('Stern', -192, 163, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Raumschiff").x, -190.85672818688653, 5, "Expected Sprite Raumschiff to have x-position -190.85672818688653 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 162.22821895885357, 5, "Expected Sprite Raumschiff to have y-position 162.22821895885357 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, 13.88888888888889, 5, "Expected Sprite Großes Schwarzes Loch to have x-position 13.88888888888889 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 64.44444444444444, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 64.44444444444444 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, -164.16666666666666, 5, "Expected Sprite Stern to have x-position -164.16666666666666 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 147.75, 5, "Expected Sprite Stern to have y-position 147.75 +-5");
  t.assert.equal(t.getSprite("Stern").sayText, "Du schaffst das!", "Expected Sprite Stern to say Du schaffst das!");
  t.mouseMove(177, 142);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Raumschiff").direction, 93.14749031451201, 1, "Expected Sprite Raumschiff to face in direction 93.14749031451201 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -188.8597451800154, 5, "Expected Sprite Raumschiff to have x-position -188.8597451800154 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 162.11840607132206, 5, "Expected Sprite Raumschiff to have y-position 162.11840607132206 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, 12.666666666666668, 5, "Expected Sprite Großes Schwarzes Loch to have x-position 12.666666666666668 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 63.333333333333336, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 63.333333333333336 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, -158.6, 5, "Expected Sprite Stern to have x-position -158.6 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 144.7, 5, "Expected Sprite Stern to have y-position 144.7 +-5");
  t.dragSprite('Stern', -201.31185151858162, 144.43001877895955, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Raumschiff").x, -186.8627621731443, 5, "Expected Sprite Raumschiff to have x-position -186.8627621731443 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 162.00859318379054, 5, "Expected Sprite Raumschiff to have y-position 162.00859318379054 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, 11.444444444444445, 5, "Expected Sprite Großes Schwarzes Loch to have x-position 11.444444444444445 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 62.22222222222222, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 62.22222222222222 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, -161.2588021747471, 5, "Expected Sprite Stern to have x-position -161.2588021747471 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 125.24651658808094, 5, "Expected Sprite Stern to have y-position 125.24651658808094 +-5");
  await t.runForSteps(86);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Raumschiff").x, -104.98645889142841, 5, "Expected Sprite Raumschiff to have x-position -104.98645889142841 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 157.5062647949983, 5, "Expected Sprite Raumschiff to have y-position 157.5062647949983 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, -38.666666666666664, 5, "Expected Sprite Großes Schwarzes Loch to have x-position -38.666666666666664 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 16.666666666666664, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 16.666666666666664 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, -1.046604799408982, 5, "Expected Sprite Stern to have x-position -1.046604799408982 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 48.51250782456647, 5, "Expected Sprite Stern to have y-position 48.51250782456647 +-5");
  t.assert.not(t.getSprite("Stern").sayText, "Expected Sprite Stern not to say anything");
  t.assert.not(t.getSprite("Raumschiff").visible, "Expected Sprite Raumschiff not to be visible");
  t.assert.not(t.getSprite("Stern").visible, "Expected Sprite Stern not to be visible");
  t.end();
}
const test1 = async function (t) {
  t.mouseMove(-206, 48);
  await t.runForSteps(1);
  await t.runForSteps(88);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Raumschiff").x, -206.0909989407744, 5, "Expected Sprite Raumschiff to have x-position -206.0909989407744 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 46.14968820425406, 5, "Expected Sprite Raumschiff to have y-position 46.14968820425406 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, -88.77777777777779, 5, "Expected Sprite Großes Schwarzes Loch to have x-position -88.77777777777779 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, -28.888888888888886, 5, "Expected Sprite Großes Schwarzes Loch to have y-position -28.888888888888886 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, -4.533333333333331, 5, "Expected Sprite Stern to have x-position -4.533333333333331 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 47.66666666666667, 5, "Expected Sprite Stern to have y-position 47.66666666666667 +-5");
  t.dragSprite('Raumschiff', -150, 88, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Raumschiff").direction, -125.53767779197437, 1, "Expected Sprite Raumschiff to face in direction -125.53767779197437 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -151.62746694241346, 5, "Expected Sprite Raumschiff to have x-position -151.62746694241346 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 86.83752361256181, 5, "Expected Sprite Raumschiff to have y-position 86.83752361256181 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, -90, 5, "Expected Sprite Großes Schwarzes Loch to have x-position -90 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, -30, 5, "Expected Sprite Großes Schwarzes Loch to have y-position -30 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, -9.76666666666668, 5, "Expected Sprite Stern to have x-position -9.76666666666668 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 50.08333333333333, 5, "Expected Sprite Stern to have y-position 50.08333333333333 +-5");
  t.assert.equal(t.getSprite("Raumschiff").sayText, "Hilfe!", "Expected Sprite Raumschiff to say Hilfe!");
  t.mouseMove(-87, -88);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Raumschiff").direction, 159.71351987195618, 1, "Expected Sprite Raumschiff to face in direction 159.71351987195618 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -150.9340382789063, 5, "Expected Sprite Raumschiff to have x-position -150.9340382789063 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 84.96158206533102, 5, "Expected Sprite Raumschiff to have y-position 84.96158206533102 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, -87.88888888888889, 5, "Expected Sprite Großes Schwarzes Loch to have x-position -87.88888888888889 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, -29.555555555555557, 5, "Expected Sprite Großes Schwarzes Loch to have y-position -29.555555555555557 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, -15, 5, "Expected Sprite Stern to have x-position -15 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 52.5, 5, "Expected Sprite Stern to have y-position 52.5 +-5");
  t.dragSprite('Raumschiff', 124.7833996223311, 180, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.equal(t.getSprite("Raumschiff").direction, -141.68291971257085, 1, "Expected Sprite Raumschiff to face in direction -141.68291971257085 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, 123.54337371877043, 5, "Expected Sprite Raumschiff to have x-position 123.54337371877043 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 178.43081684991887, 5, "Expected Sprite Raumschiff to have y-position 178.43081684991887 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, -85.77777777777777, 5, "Expected Sprite Großes Schwarzes Loch to have x-position -85.77777777777777 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, -29.11111111111111, 5, "Expected Sprite Großes Schwarzes Loch to have y-position -29.11111111111111 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, 239, 5, "Expected Sprite Stern to have x-position 239 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, -169.83333333333334, 5, "Expected Sprite Stern to have y-position -169.83333333333334 +-5");
  t.assert.not(t.getSprite("Raumschiff").sayText, "Expected Sprite Raumschiff not to say anything");
  t.assert.not(t.getSprite("Großes Schwarzes Loch").visible, "Expected Sprite Großes Schwarzes Loch not to be visible");
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
      seed: '1687938433909',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938433909',
      type: 'standard',
  }
]
