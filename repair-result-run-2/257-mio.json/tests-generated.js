const test0 = async function (t) {
  await t.runForSteps(98);
  await t.runForSteps(1);
  await t.runForSteps(200);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Apple").x, -156, 5, "Expected Sprite Apple to have x-position -156 +-5");
  t.assert.withinRange(t.getSprite("Apple").y, -155, 5, "Expected Sprite Apple to have y-position -155 +-5");
  t.assert.withinRange(t.getSprite("Bananas").x, 31, 5, "Expected Sprite Bananas to have x-position 31 +-5");
  t.assert.withinRange(t.getSprite("Bananas").y, 58, 5, "Expected Sprite Bananas to have y-position 58 +-5");
  t.assert.not(t.getSprite("Bananas").sayText, "Expected Sprite Bananas not to say anything");
  t.assert.equal(t.getStage().getVariable("Zeit", false).value, "26", "Expected Zeit to have value 26");
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(98);
  await t.runForSteps(1);
  t.keyPress('right arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Bowl").x, 10, 5, "Expected Sprite Bowl to have x-position 10 +-5");
  t.assert.withinRange(t.getSprite("Bowl").y, -145, 5, "Expected Sprite Bowl to have y-position -145 +-5");
  t.assert.withinRange(t.getSprite("Apple").x, -156, 5, "Expected Sprite Apple to have x-position -156 +-5");
  t.assert.withinRange(t.getSprite("Apple").y, -50, 5, "Expected Sprite Apple to have y-position -50 +-5");
  t.end();
}
const test2 = async function (t) {
  await t.runForSteps(17);
  await t.runForSteps(1);
  t.keyPress('left arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Bowl").x, -20, 5, "Expected Sprite Bowl to have x-position -20 +-5");
  t.assert.withinRange(t.getSprite("Bowl").y, -145, 5, "Expected Sprite Bowl to have y-position -145 +-5");
  t.assert.withinRange(t.getSprite("Apple").x, 12, 5, "Expected Sprite Apple to have x-position 12 +-5");
  t.assert.withinRange(t.getSprite("Apple").y, 65, 5, "Expected Sprite Apple to have y-position 65 +-5");
  t.end();
}
const test3 = async function (t) {
  await t.runForSteps(17);
  await t.runForSteps(1);
  await t.runForSteps(56);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Apple").x, -156, 5, "Expected Sprite Apple to have x-position -156 +-5");
  t.assert.withinRange(t.getSprite("Apple").y, 80, 5, "Expected Sprite Apple to have y-position 80 +-5");
  t.assert.withinRange(t.getSprite("Bananas").x, -155, 5, "Expected Sprite Bananas to have x-position -155 +-5");
  t.assert.withinRange(t.getSprite("Bananas").y, -145, 5, "Expected Sprite Bananas to have y-position -145 +-5");
  t.assert.equal(t.getStage().getVariable("Punkte", false).value, "5", "Expected Punkte to have value 5");
  t.assert.equal(t.getStage().getVariable("Zeit", false).value, "28", "Expected Zeit to have value 28");
  t.assert.ok(t.getSprite("Bananas").visible, "Expected Sprite Bananas to be visible");
  t.dragSprite('Apple', 52.01755383810591, -123.11826265549728, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Apple").x, 52.01755383810591, 5, "Expected Sprite Apple to have x-position 52.01755383810591 +-5");
  t.assert.withinRange(t.getSprite("Apple").y, -128.1182626554973, 5, "Expected Sprite Apple to have y-position -128.1182626554973 +-5");
  t.assert.withinRange(t.getSprite("Bananas").x, -155, 5, "Expected Sprite Bananas to have x-position -155 +-5");
  t.assert.withinRange(t.getSprite("Bananas").y, -152, 5, "Expected Sprite Bananas to have y-position -152 +-5");
  t.assert.equal(t.getSprite("Bananas").sayText, "-8", "Expected Sprite Bananas to say -8");
  t.assert.equal(t.getStage().getVariable("Punkte", false).value, "-3", "Expected Punkte to have value -3");
  await t.runForSteps(84);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Apple").x, -82, 5, "Expected Sprite Apple to have x-position -82 +-5");
  t.assert.withinRange(t.getSprite("Apple").y, -155, 5, "Expected Sprite Apple to have y-position -155 +-5");
  t.assert.withinRange(t.getSprite("Bananas").x, 50, 5, "Expected Sprite Bananas to have x-position 50 +-5");
  t.assert.withinRange(t.getSprite("Bananas").y, -5, 5, "Expected Sprite Bananas to have y-position -5 +-5");
  t.assert.equal(t.getSprite("Apple").sayText, "Game over!", "Expected Sprite Apple to say Game over!");
  t.assert.not(t.getSprite("Bananas").sayText, "Expected Sprite Bananas not to say anything");
  t.assert.equal(t.getStage().getVariable("Punkte", false).value, "2", "Expected Punkte to have value 2");
  t.assert.equal(t.getStage().getVariable("Zeit", false).value, "25", "Expected Zeit to have value 25");
  t.dragSprite('Bananas', -4.1895983355034545, -128.56108199540958, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Bananas").x, 162, 5, "Expected Sprite Bananas to have x-position 162 +-5");
  t.assert.withinRange(t.getSprite("Bananas").y, 170, 5, "Expected Sprite Bananas to have y-position 170 +-5");
  t.assert.equal(t.getStage().getVariable("Punkte", false).value, "10", "Expected Punkte to have value 10");
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
