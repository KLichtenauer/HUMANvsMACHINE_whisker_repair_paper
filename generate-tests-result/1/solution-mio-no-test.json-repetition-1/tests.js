const test0 = async function (t) {
  t.mouseMove(-215, 147);
  await t.runForSteps(1);
  t.dragSprite('Stern', -197.15898794704825, 146.33422996202347, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Raumschiff").direction, -146.88865803962798, 1, "Expected Sprite Raumschiff to face in direction -146.88865803962798 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -202.1850711221877, 5, "Expected Sprite Raumschiff to have x-position -202.1850711221877 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 166.64955761264554, 5, "Expected Sprite Raumschiff to have y-position 166.64955761264554 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, 18.77777777777778, 5, "Expected Sprite Großes Schwarzes Loch to have x-position 18.77777777777778 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 68.88888888888889, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 68.88888888888889 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, -191.1896714812641, 5, "Expected Sprite Stern to have x-position -191.1896714812641 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 146.66199279598976, 5, "Expected Sprite Stern to have y-position 146.66199279598976 +-5");
  t.assert.equal(t.getSprite("Stern").sayText, "Du schaffst das!", "Expected Sprite Stern to say Du schaffst das!");
  await t.runForSteps(88);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Raumschiff").direction, 33.11134196037114, 1, "Expected Sprite Raumschiff to face in direction 33.11134196037114 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -214.20296229422001, 5, "Expected Sprite Raumschiff to have x-position -214.20296229422001 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 148.222124482196, 5, "Expected Sprite Raumschiff to have y-position 148.222124482196 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, -90, 5, "Expected Sprite Großes Schwarzes Loch to have x-position -90 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, -30, 5, "Expected Sprite Großes Schwarzes Loch to have y-position -30 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, -12.11017750773999, 5, "Expected Sprite Stern to have x-position -12.11017750773999 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 156.49487781497803, 5, "Expected Sprite Stern to have y-position 156.49487781497803 +-5");
  t.assert.not(t.getSprite("Stern").sayText, "Expected Sprite Stern not to say anything");
  t.assert.not(t.getSprite("Stern").visible, "Expected Sprite Stern not to be visible");
  t.mouseMove(188, -131);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Raumschiff").direction, 124.7696145319328, 1, "Expected Sprite Raumschiff to face in direction 124.7696145319328 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -212.5600587779111, 5, "Expected Sprite Raumschiff to have x-position -212.5600587779111 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 147.08156846160787, 5, "Expected Sprite Raumschiff to have y-position 147.08156846160787 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, -87.88888888888889, 5, "Expected Sprite Großes Schwarzes Loch to have x-position -87.88888888888889 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, -29.555555555555557, 5, "Expected Sprite Großes Schwarzes Loch to have y-position -29.555555555555557 +-5");
  await t.runForSteps(40);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Raumschiff").direction, 124.76961453193275, 1, "Expected Sprite Raumschiff to face in direction 124.76961453193275 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -145.201014609246, 5, "Expected Sprite Raumschiff to have x-position -145.201014609246 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 100.31877161749524, 5, "Expected Sprite Raumschiff to have y-position 100.31877161749524 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, -1.3333333333333286, 5, "Expected Sprite Großes Schwarzes Loch to have x-position -1.3333333333333286 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, -11.333333333333332, 5, "Expected Sprite Großes Schwarzes Loch to have y-position -11.333333333333332 +-5");
  t.assert.equal(t.getSprite("Raumschiff").sayText, "Hilfe!", "Expected Sprite Raumschiff to say Hilfe!");
  t.dragSprite('Raumschiff', 147.63634913454288, 116.07367275912391, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.equal(t.getSprite("Raumschiff").direction, 170.7217306059093, 1, "Expected Sprite Raumschiff to face in direction 170.7217306059093 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, 147.95880818275953, 5, "Expected Sprite Raumschiff to have x-position 147.95880818275953 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 114.09983888510533, 5, "Expected Sprite Raumschiff to have y-position 114.09983888510533 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, 0.7777777777777857, 5, "Expected Sprite Großes Schwarzes Loch to have x-position 0.7777777777777857 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, -10.88888888888889, 5, "Expected Sprite Großes Schwarzes Loch to have y-position -10.88888888888889 +-5");
  t.assert.not(t.getSprite("Raumschiff").sayText, "Expected Sprite Raumschiff not to say anything");
  t.assert.not(t.getSprite("Großes Schwarzes Loch").visible, "Expected Sprite Großes Schwarzes Loch not to be visible");
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(96);
  await t.runForSteps(1);
  await t.runForSteps(18);
  await t.runForSteps(1);
  await t.runForSteps(200);
  await t.runForSteps(1);
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849452479',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849452479',
      type: 'standard',
  }
]
