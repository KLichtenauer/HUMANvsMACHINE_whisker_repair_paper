const test0 = async function (t) {
  await t.runForSteps(99);
  await t.runForSteps(1);
  t.clickSprite('Reset-Button', 1);
  await t.runForSteps(1);
  await t.runForSteps(75);
  await t.runForSteps(1);
  await t.runForSteps(86);
  await t.runForSteps(1);
  await t.runForSteps(32);
  await t.runForSteps(1);
  await t.runForSteps(96);
  await t.runForSteps(1);
  t.clickSprite('Reset-Button', 1);
  await t.runForSteps(1);
  await t.runForSteps(80);
  await t.runForSteps(1);
  await t.runForSteps(20);
  await t.runForSteps(1);
  t.clickSprite('Reset-Button', 1);
  await t.runForSteps(1);
  t.clickSprite('Reset-Button', 1);
  await t.runForSteps(1);
  t.end();
}
const test1 = async function (t) {
  t.dragSprite('Aus-Linie Computer', -58.15352576927754, 180, null);
  await t.runForSteps(1);
  t.dragSprite('Ball', 240, 34.53543915661672, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.withinRange(t.getSprite("Ball").x, 216.46072480405567, 5, "Expected Sprite Ball to have x-position 216.46072480405567 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, 46.25737301129493, 5, "Expected Sprite Ball to have y-position 46.25737301129493 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 4.533333333333333, 5, "Expected Sprite Computer to have y-position 4.533333333333333 +-5");
  t.keyPress('down arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Ball").x, 216.38217441216702, 5, "Expected Sprite Ball to have x-position 216.38217441216702 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, 69.70124072065136, 5, "Expected Sprite Ball to have y-position 69.70124072065136 +-5");
  t.assert.withinRange(t.getSprite("Spieler").x, -210, 5, "Expected Sprite Spieler to have x-position -210 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -104, 5, "Expected Sprite Spieler to have y-position -104 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 13.600000000000001, 5, "Expected Sprite Computer to have y-position 13.600000000000001 +-5");
  t.keyPress('up arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Ball").x, 216.8428992162227, 5, "Expected Sprite Ball to have x-position 216.8428992162227 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, 81.42317457532957, 5, "Expected Sprite Ball to have y-position 81.42317457532957 +-5");
  t.assert.withinRange(t.getSprite("Spieler").x, -210, 5, "Expected Sprite Spieler to have x-position -210 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -89, 5, "Expected Sprite Spieler to have y-position -89 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 18.133333333333333, 5, "Expected Sprite Computer to have y-position 18.133333333333333 +-5");
  t.clickSprite('Reset-Button', 1);
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
      seed: '1687936752698',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936752698',
      type: 'standard',
  }
]
