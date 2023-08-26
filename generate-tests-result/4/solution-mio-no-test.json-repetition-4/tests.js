const test0 = async function (t) {
  t.mouseMove(-189, -167);
  await t.runForSteps(1);
  t.dragSprite('Stern', -177.00166613691195, 170.29962613581495, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Raumschiff").direction, 178.13047511296156, 1, "Expected Sprite Raumschiff to face in direction 178.13047511296156 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -199.86950569964887, 5, "Expected Sprite Raumschiff to have x-position -199.86950569964887 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 166.00212916196938, 5, "Expected Sprite Raumschiff to have y-position 166.00212916196938 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, 18.77777777777778, 5, "Expected Sprite Großes Schwarzes Loch to have x-position 18.77777777777778 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 68.88888888888889, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 68.88888888888889 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, -172.93497170129675, 5, "Expected Sprite Stern to have x-position -172.93497170129675 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 165.4946323668847, 5, "Expected Sprite Stern to have y-position 165.4946323668847 +-5");
  t.assert.equal(t.getSprite("Stern").sayText, "Du schaffst das!", "Expected Sprite Stern to say Du schaffst das!");
  await t.runForSteps(300);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Raumschiff").direction, 178.1304751129611, 1, "Expected Sprite Raumschiff to face in direction 178.1304751129611 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -188.97323162032794, 5, "Expected Sprite Raumschiff to have x-position -188.97323162032794 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, -167.82008581358926, 5, "Expected Sprite Raumschiff to have y-position -167.82008581358926 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, -24.555555555555557, 5, "Expected Sprite Großes Schwarzes Loch to have x-position -24.555555555555557 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, -16.22222222222222, 5, "Expected Sprite Großes Schwarzes Loch to have y-position -16.22222222222222 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, -50.93413863284076, 5, "Expected Sprite Stern to have x-position -50.93413863284076 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 21.3448192989772, 5, "Expected Sprite Stern to have y-position 21.3448192989772 +-5");
  t.assert.not(t.getSprite("Stern").sayText, "Expected Sprite Stern not to say anything");
  t.assert.not(t.getSprite("Stern").visible, "Expected Sprite Stern not to be visible");
  t.end();
}
const test1 = async function (t) {
  t.dragSprite('Raumschiff', 117, 167, null);
  await t.runForSteps(1);
  t.dragSprite('Raumschiff', -143, -43, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Raumschiff").direction, 73.26400414852392, 1, "Expected Sprite Raumschiff to face in direction 73.26400414852392 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -141.08471645459795, 5, "Expected Sprite Raumschiff to have x-position -141.08471645459795 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, -42.42407557725673, 5, "Expected Sprite Raumschiff to have y-position -42.42407557725673 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, 18.77777777777778, 5, "Expected Sprite Großes Schwarzes Loch to have x-position 18.77777777777778 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 68.88888888888889, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 68.88888888888889 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, 138.78333333333333, 5, "Expected Sprite Stern to have x-position 138.78333333333333 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 7.866666666666667, 5, "Expected Sprite Stern to have y-position 7.866666666666667 +-5");
  t.assert.equal(t.getSprite("Raumschiff").sayText, "Hilfe!", "Expected Sprite Raumschiff to say Hilfe!");
  t.dragSprite('Stern', -141, -42, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Raumschiff").x, -139.1694329091959, 5, "Expected Sprite Raumschiff to have x-position -139.1694329091959 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, -41.84815115451346, 5, "Expected Sprite Raumschiff to have y-position -41.84815115451346 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, 17.555555555555557, 5, "Expected Sprite Großes Schwarzes Loch to have x-position 17.555555555555557 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 67.77777777777777, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 67.77777777777777 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, -134.06666666666666, 5, "Expected Sprite Stern to have x-position -134.06666666666666 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, -44.53333333333333, 5, "Expected Sprite Stern to have y-position -44.53333333333333 +-5");
  t.assert.equal(t.getSprite("Stern").sayText, "Du schaffst das!", "Expected Sprite Stern to say Du schaffst das!");
  t.dragSprite('Raumschiff', 168.21594153276413, 180, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.equal(t.getSprite("Raumschiff").direction, -136.93822042032613, 1, "Expected Sprite Raumschiff to face in direction -136.93822042032613 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, 166.85036843125474, 5, "Expected Sprite Raumschiff to have x-position 166.85036843125474 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 178.53876418589127, 5, "Expected Sprite Raumschiff to have y-position 178.53876418589127 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, 16.333333333333332, 5, "Expected Sprite Großes Schwarzes Loch to have x-position 16.333333333333332 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 66.66666666666667, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 66.66666666666667 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, -144.46666666666667, 5, "Expected Sprite Stern to have x-position -144.46666666666667 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, -40.733333333333334, 5, "Expected Sprite Stern to have y-position -40.733333333333334 +-5");
  t.assert.not(t.getSprite("Raumschiff").sayText, "Expected Sprite Raumschiff not to say anything");
  t.assert.not(t.getSprite("Stern").sayText, "Expected Sprite Stern not to say anything");
  t.assert.not(t.getSprite("Großes Schwarzes Loch").visible, "Expected Sprite Großes Schwarzes Loch not to be visible");
  t.assert.not(t.getSprite("Stern").visible, "Expected Sprite Stern not to be visible");
  t.end();
}
const test2 = async function (t) {
  t.mouseMove(-97, 60);
  await t.runForSteps(1);
  t.mouseMove(-213, 32);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Raumschiff").direction, -173.99333598858087, 1, "Expected Sprite Raumschiff to face in direction -173.99333598858087 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -198.84228921094865, 5, "Expected Sprite Raumschiff to have x-position -198.84228921094865 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 166.55107863157357, 5, "Expected Sprite Raumschiff to have y-position 166.55107863157357 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, 18.77777777777778, 5, "Expected Sprite Großes Schwarzes Loch to have x-position 18.77777777777778 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 68.88888888888889, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 68.88888888888889 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, 138.78333333333333, 5, "Expected Sprite Stern to have x-position 138.78333333333333 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 7.866666666666667, 5, "Expected Sprite Stern to have y-position 7.866666666666667 +-5");
  t.dragSprite('Stern', -178.84394516089458, 176.99999976158142, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Raumschiff").x, -199.05157747964563, 5, "Expected Sprite Raumschiff to have x-position -199.05157747964563 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 164.5620591694803, 5, "Expected Sprite Raumschiff to have y-position 164.5620591694803 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, 17.555555555555557, 5, "Expected Sprite Großes Schwarzes Loch to have x-position 17.555555555555557 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 67.77777777777777, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 67.77777777777777 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, -170.64914698886477, 5, "Expected Sprite Stern to have x-position -170.64914698886477 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 167.16666643619538, 5, "Expected Sprite Stern to have y-position 167.16666643619538 +-5");
  t.dragSprite('Stern', -177.1528209984301, 160.55844176911492, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Raumschiff").x, -199.2608657483426, 5, "Expected Sprite Raumschiff to have x-position -199.2608657483426 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 162.57303970738704, 5, "Expected Sprite Raumschiff to have y-position 162.57303970738704 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, 16.333333333333332, 5, "Expected Sprite Großes Schwarzes Loch to have x-position 16.333333333333332 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 66.66666666666667, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 66.66666666666667 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, -164.94517994850858, 5, "Expected Sprite Stern to have x-position -164.94517994850858 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 146.63051968065918, 5, "Expected Sprite Stern to have y-position 146.63051968065918 +-5");
  t.dragSprite('Raumschiff', 97.7658729906667, 101.5755661749362, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Raumschiff").direction, -102.6195184041676, 1, "Expected Sprite Raumschiff to face in direction -102.6195184041676 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, 95.81418820557636, 5, "Expected Sprite Raumschiff to have x-position 95.81418820557636 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 101.13861480504833, 5, "Expected Sprite Raumschiff to have y-position 101.13861480504833 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, 15.11111111111111, 5, "Expected Sprite Großes Schwarzes Loch to have x-position 15.11111111111111 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 65.55555555555556, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 65.55555555555556 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, -160.8759662652014, 5, "Expected Sprite Stern to have x-position -160.8759662652014 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 141.98787898450726, 5, "Expected Sprite Stern to have y-position 141.98787898450726 +-5");
  t.assert.equal(t.getSprite("Raumschiff").sayText, "Hilfe!", "Expected Sprite Raumschiff to say Hilfe!");
  await t.runForSteps(52);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Raumschiff").x, 66.53891642922132, 5, "Expected Sprite Raumschiff to have x-position 66.53891642922132 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 94.58434425673036, 5, "Expected Sprite Raumschiff to have y-position 94.58434425673036 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, -3.2222222222222214, 5, "Expected Sprite Großes Schwarzes Loch to have x-position -3.2222222222222214 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 48.888888888888886, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 48.888888888888886 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, -181.22203468173726, 5, "Expected Sprite Stern to have x-position -181.22203468173726 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 165.20108246526684, 5, "Expected Sprite Stern to have y-position 165.20108246526684 +-5");
  t.assert.not(t.getSprite("Raumschiff").sayText, "Expected Sprite Raumschiff not to say anything");
  t.assert.not(t.getSprite("Raumschiff").visible, "Expected Sprite Raumschiff not to be visible");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937564453',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937564453',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937564453',
      type: 'standard',
  }
]
