const test0 = async function (t) {
  t.mouseMove(-201, 138);
  await t.runForSteps(1);
  t.dragSprite('Stern', -188.94024658203125, 180, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Raumschiff").direction, -178.21008939175397, 1, "Expected Sprite Raumschiff to face in direction -178.21008939175397 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -200.1249390095109, 5, "Expected Sprite Raumschiff to have x-position -200.1249390095109 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 166.0019516956517, 5, "Expected Sprite Raumschiff to have y-position 166.0019516956517 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, 18.77777777777778, 5, "Expected Sprite Großes Schwarzes Loch to have x-position 18.77777777777778 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 68.88888888888889, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 68.88888888888889 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, -182.87457580566405, 5, "Expected Sprite Stern to have x-position -182.87457580566405 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 176.21666666666667, 5, "Expected Sprite Stern to have y-position 176.21666666666667 +-5");
  t.assert.equal(t.getSprite("Stern").sayText, "Du schaffst das!", "Expected Sprite Stern to say Du schaffst das!");
  t.mouseMove(225, 79);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Raumschiff").direction, 101.56589733363921, 1, "Expected Sprite Raumschiff to face in direction 101.56589733363921 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -198.16554949266788, 5, "Expected Sprite Raumschiff to have x-position -198.16554949266788 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 165.60096201837115, 5, "Expected Sprite Raumschiff to have y-position 165.60096201837115 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, 17.555555555555557, 5, "Expected Sprite Großes Schwarzes Loch to have x-position 17.555555555555557 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 67.77777777777777, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 67.77777777777777 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, -176.80890502929688, 5, "Expected Sprite Stern to have x-position -176.80890502929688 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 172.43333333333334, 5, "Expected Sprite Stern to have y-position 172.43333333333334 +-5");
  t.mouseMove(-223, -153);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Raumschiff").direction, -175.54289539650608, 1, "Expected Sprite Raumschiff to face in direction -175.54289539650608 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -198.32097492425493, 5, "Expected Sprite Raumschiff to have x-position -198.32097492425493 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 163.60701043038915, 5, "Expected Sprite Raumschiff to have y-position 163.60701043038915 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, 16.333333333333332, 5, "Expected Sprite Großes Schwarzes Loch to have x-position 16.333333333333332 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 66.66666666666667, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 66.66666666666667 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, -170.74323425292968, 5, "Expected Sprite Stern to have x-position -170.74323425292968 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 168.65, 5, "Expected Sprite Stern to have y-position 168.65 +-5");
  t.dragSprite('Raumschiff', -110.97685226265446, 81.84024050380387, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Raumschiff").direction, -154.49799278236836, 1, "Expected Sprite Raumschiff to face in direction -154.49799278236836 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -111.83793769548258, 5, "Expected Sprite Raumschiff to have x-position -111.83793769548258 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 80.03510010002049, 5, "Expected Sprite Raumschiff to have y-position 80.03510010002049 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, 15.11111111111111, 5, "Expected Sprite Großes Schwarzes Loch to have x-position 15.11111111111111 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 65.55555555555556, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 65.55555555555556 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, -164.6775634765625, 5, "Expected Sprite Stern to have x-position -164.6775634765625 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 164.86666666666667, 5, "Expected Sprite Stern to have y-position 164.86666666666667 +-5");
  t.assert.equal(t.getSprite("Raumschiff").sayText, "Hilfe!", "Expected Sprite Raumschiff to say Hilfe!");
  t.dragSprite('Raumschiff', 98.35793085339982, 102.33841795130576, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Raumschiff").direction, -128.46927744388185, 1, "Expected Sprite Raumschiff to face in direction -128.46927744388185 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, 96.79204716789675, 5, "Expected Sprite Raumschiff to have x-position 96.79204716789675 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 101.09422814123845, 5, "Expected Sprite Raumschiff to have y-position 101.09422814123845 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, 13.88888888888889, 5, "Expected Sprite Großes Schwarzes Loch to have x-position 13.88888888888889 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 64.44444444444444, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 64.44444444444444 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, -158.6118927001953, 5, "Expected Sprite Stern to have x-position -158.6118927001953 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 161.08333333333334, 5, "Expected Sprite Stern to have y-position 161.08333333333334 +-5");
  t.dragSprite('Stern', 117.26263465443252, 94.93597817202603, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Raumschiff").x, 95.22616348239369, 5, "Expected Sprite Raumschiff to have x-position 95.22616348239369 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 99.85003833117113, 5, "Expected Sprite Raumschiff to have y-position 99.85003833117113 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, 12.666666666666668, 5, "Expected Sprite Großes Schwarzes Loch to have x-position 12.666666666666668 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 63.333333333333336, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 63.333333333333336 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, 123.03637118898926, 5, "Expected Sprite Stern to have x-position 123.03637118898926 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 80.74238035482342, 5, "Expected Sprite Stern to have y-position 80.74238035482342 +-5");
  t.dragSprite('Raumschiff', 120, 148, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.equal(t.getSprite("Raumschiff").direction, -131.26860300083953, 1, "Expected Sprite Raumschiff to face in direction -131.26860300083953 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, 118.49674862185915, 5, "Expected Sprite Raumschiff to have x-position 118.49674862185915 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 146.68082021918252, 5, "Expected Sprite Raumschiff to have y-position 146.68082021918252 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, 11.444444444444445, 5, "Expected Sprite Großes Schwarzes Loch to have x-position 11.444444444444445 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 62.22222222222222, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 62.22222222222222 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, 116.30034523200639, 5, "Expected Sprite Stern to have x-position 116.30034523200639 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 97.30157780822645, 5, "Expected Sprite Stern to have y-position 97.30157780822645 +-5");
  t.assert.not(t.getSprite("Raumschiff").sayText, "Expected Sprite Raumschiff not to say anything");
  t.assert.not(t.getSprite("Stern").sayText, "Expected Sprite Stern not to say anything");
  t.assert.not(t.getSprite("Großes Schwarzes Loch").visible, "Expected Sprite Großes Schwarzes Loch not to be visible");
  t.assert.not(t.getSprite("Stern").visible, "Expected Sprite Stern not to be visible");
  t.end();
}
const test1 = async function (t) {
  t.mouseMove(-122, -179);
  await t.runForSteps(1);
  await t.runForSteps(59);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Raumschiff").direction, 167.4016797019474, 1, "Expected Sprite Raumschiff to face in direction 167.4016797019474 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -173.39001501732832, 5, "Expected Sprite Raumschiff to have x-position -173.39001501732832 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 50.937374885222944, 5, "Expected Sprite Raumschiff to have y-position 50.937374885222944 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, -53.33333333333333, 5, "Expected Sprite Großes Schwarzes Loch to have x-position -53.33333333333333 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 3.333333333333343, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 3.333333333333343 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, 175, 5, "Expected Sprite Stern to have x-position 175 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, -47, 5, "Expected Sprite Stern to have y-position -47 +-5");
  await t.runForSteps(86);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Raumschiff").x, -154.19592748884324, 5, "Expected Sprite Raumschiff to have x-position -154.19592748884324 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, -34.94386290248513, 5, "Expected Sprite Raumschiff to have y-position -34.94386290248513 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, -60.44444444444444, 5, "Expected Sprite Großes Schwarzes Loch to have x-position -60.44444444444444 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, -23.77777777777778, 5, "Expected Sprite Großes Schwarzes Loch to have y-position -23.77777777777778 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, 139.86666666666667, 5, "Expected Sprite Stern to have x-position 139.86666666666667 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, -180, 5, "Expected Sprite Stern to have y-position -180 +-5");
  t.assert.not(t.getSprite("Raumschiff").visible, "Expected Sprite Raumschiff not to be visible");
  t.end();
}
const test2 = async function (t) {
  t.dragSprite('Raumschiff', 122, 145, null);
  await t.runForSteps(1);
  t.dragSprite('Stern', -219.26263465443253, 161.93597831988944, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Raumschiff").x, -196.95224272896218, 5, "Expected Sprite Raumschiff to have x-position -196.95224272896218 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 167.40940631961786, 5, "Expected Sprite Raumschiff to have y-position 167.40940631961786 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, 18.77777777777778, 5, "Expected Sprite Großes Schwarzes Loch to have x-position 18.77777777777778 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 68.88888888888889, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 68.88888888888889 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, -212.69159074352532, 5, "Expected Sprite Stern to have x-position -212.69159074352532 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 158.45371201455796, 5, "Expected Sprite Stern to have y-position 158.45371201455796 +-5");
  t.assert.equal(t.getSprite("Stern").sayText, "Du schaffst das!", "Expected Sprite Stern to say Du schaffst das!");
  await t.runForSteps(100);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Raumschiff").direction, 130.36453657309733, 1, "Expected Sprite Raumschiff to face in direction 130.36453657309733 +-1");
  t.assert.withinRange(t.getSprite("Raumschiff").x, -107.04340323334625, 5, "Expected Sprite Raumschiff to have x-position -107.04340323334625 +-5");
  t.assert.withinRange(t.getSprite("Raumschiff").y, 90.98689274834426, 5, "Expected Sprite Raumschiff to have y-position 90.98689274834426 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").x, -53.33333333333333, 5, "Expected Sprite Großes Schwarzes Loch to have x-position -53.33333333333333 +-5");
  t.assert.withinRange(t.getSprite("Großes Schwarzes Loch").y, 3.333333333333343, 5, "Expected Sprite Großes Schwarzes Loch to have y-position 3.333333333333343 +-5");
  t.assert.withinRange(t.getSprite("Stern").x, -15.56027341630903, 5, "Expected Sprite Stern to have x-position -15.56027341630903 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 53.985722854613215, 5, "Expected Sprite Stern to have y-position 53.985722854613215 +-5");
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
      seed: '1687936769452',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936769452',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936769452',
      type: 'standard',
  }
]
