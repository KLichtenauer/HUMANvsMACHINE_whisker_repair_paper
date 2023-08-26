const test0 = async function (t) {
  t.dragSprite('Raumschiff', 117, 167, null);
  await t.runForSteps(1);
  t.dragSprite('Raumschiff', 146.0891005033001, 134.2744915008767, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.equal(t.getSprite("Raumschiff").direction, -132.5869657080361, 1, "Expected Sprite Raumschiff to face in direction -132.5869657080361 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, 144.61659840035531, 5, "Expected Sprite Raumschiff to have x-position 144.61659840035531 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 132.9210745079203, 5, "Expected Sprite Raumschiff to have y-position 132.9210745079203 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, 18.77777777777778, 5, "Expected Sprite Großes Schwarzes Loch to have x-position 18.77777777777778 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 68.88888888888889, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 68.88888888888889 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, 144.91666666666666, 5, "Expected Sprite Stern to have x-position 144.91666666666666 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 11.866666666666667, 5, "Expected Sprite Stern to have y-position 11.866666666666667 +-5");
  t.assert.not(t.getSprite("Großes Schwarzes Loch").visible, "Expected Sprite Großes Schwarzes Loch not to be visible");
  t.assert.not(t.getSprite("Stern").visible, "Expected Sprite Stern not to be visible");
  t.end();
}
const test1 = async function (t) {
  t.mouseMove(-154, -121);
  await t.runForSteps(1);
  t.mouseMove(-59, -81);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Raumschiff").direction, 150.53549337429322, 1, "Expected Sprite Raumschiff to face in direction 150.53549337429322 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -198.70395765424578, 5, "Expected Sprite Raumschiff to have x-position -198.70395765424578 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 166.28320799523848, 5, "Expected Sprite Raumschiff to have y-position 166.28320799523848 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, 18.77777777777778, 5, "Expected Sprite Großes Schwarzes Loch to have x-position 18.77777777777778 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 68.88888888888889, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 68.88888888888889 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, 135.08333333333334, 5, "Expected Sprite Stern to have x-position 135.08333333333334 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 8.133333333333333, 5, "Expected Sprite Stern to have y-position 8.133333333333333 +-5");
  await t.runForSteps(100);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Raumschiff").x, -154.43437056636387, 5, "Expected Sprite Raumschiff to have x-position -154.43437056636387 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 87.92375636961495, 5, "Expected Sprite Raumschiff to have y-position 87.92375636961495 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, -36.222222222222214, 5, "Expected Sprite Großes Schwarzes Loch to have x-position -36.222222222222214 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 18.888888888888893, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 18.888888888888893 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, 144.91666666666666, 5, "Expected Sprite Stern to have x-position 144.91666666666666 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 11.866666666666667, 5, "Expected Sprite Stern to have y-position 11.866666666666667 +-5");
  t.assert.not(t.getSprite("Raumschiff").visible, "Expected Sprite Raumschiff not to be visible");
  t.end();
}
const test2 = async function (t) {
  t.mouseMove(-154, -121);
  await t.runForSteps(1);
  await t.runForSteps(100);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Raumschiff").direction, 171.01726296002545, 1, "Expected Sprite Raumschiff to face in direction 171.01726296002545 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -168.14807813226994, 5, "Expected Sprite Raumschiff to have x-position -168.14807813226994 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, -31.498027467595712, 5, "Expected Sprite Raumschiff to have y-position -31.498027467595712 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, -66.77777777777777, 5, "Expected Sprite Großes Schwarzes Loch to have x-position -66.77777777777777 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, -25.11111111111111, 5, "Expected Sprite Großes Schwarzes Loch to have y-position -25.11111111111111 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, -208.33333333333331, 5, "Expected Sprite Stern to have x-position -208.33333333333331 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, -112.66666666666667, 5, "Expected Sprite Stern to have y-position -112.66666666666667 +-5");
  t.assert.equal(t.getSprite("Raumschiff").sayText, "Hilfe!", "Expected Sprite Raumschiff to say Hilfe!");
  t.end();
}
const test3 = async function (t) {
  t.mouseMove(-94, -158);
  await t.runForSteps(1);
  t.dragSprite('Stern', -177.21446982013182, 173.5244429900768, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Raumschiff").x, -198.76995476605015, 5, "Expected Sprite Raumschiff to have x-position -198.76995476605015 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 166.19382229494767, 5, "Expected Sprite Raumschiff to have y-position 166.19382229494767 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, 18.77777777777778, 5, "Expected Sprite Großes Schwarzes Loch to have x-position 18.77777777777778 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 68.88888888888889, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 68.88888888888889 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, -176.84422865646297, 5, "Expected Sprite Stern to have x-position -176.84422865646297 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 168.93236894024218, 5, "Expected Sprite Stern to have y-position 168.93236894024218 +-5");
  t.assert.equal(t.getSprite("Stern").sayText, "Du schaffst das!", "Expected Sprite Stern to say Du schaffst das!");
  await t.runForSteps(99);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Raumschiff").direction, 162.09068578353572, 1, "Expected Sprite Raumschiff to face in direction 162.09068578353572 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -164.94371083242922, 5, "Expected Sprite Raumschiff to have x-position -164.94371083242922 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 61.523935406008945, 5, "Expected Sprite Raumschiff to have y-position 61.523935406008945 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, -48.44444444444444, 5, "Expected Sprite Großes Schwarzes Loch to have x-position -48.44444444444444 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 7.777777777777779, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 7.777777777777779 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, -165.73699374639705, 5, "Expected Sprite Stern to have x-position -165.73699374639705 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 31.17014744520378, 5, "Expected Sprite Stern to have y-position 31.17014744520378 +-5");
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
  }
]
