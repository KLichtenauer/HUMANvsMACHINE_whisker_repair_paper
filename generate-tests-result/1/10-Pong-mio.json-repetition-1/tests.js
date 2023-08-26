const test0 = async function (t) {
  t.keyPress('up arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(45);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Ball").direction, -140, 1, "Expected Sprite Ball to face in direction -140 +-1");
  t.assert.withinRange(t.getSprite("Ball").x, 131.4035394871541, 5, "Expected Sprite Ball to have x-position 131.4035394871541 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, -82.7547891605306, 5, "Expected Sprite Ball to have y-position -82.7547891605306 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, -18.133333333333326, 5, "Expected Sprite Computer to have y-position -18.133333333333326 +-5");
  t.end();
}
const test1 = async function (t) {
  t.keyPress('up arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.keyPress('down arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Ball").x, -55.00486732194227, 5, "Expected Sprite Ball to have x-position -55.00486732194227 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, 53.62311101832846, 5, "Expected Sprite Ball to have y-position 53.62311101832846 +-5");
  t.assert.withinRange(t.getSprite("Spieler").x, -210, 5, "Expected Sprite Spieler to have x-position -210 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -134, 5, "Expected Sprite Spieler to have y-position -134 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 27.200000000000003, 5, "Expected Sprite Computer to have y-position 27.200000000000003 +-5");
  t.end();
}
const test2 = async function (t) {
  t.clickSprite('Reset-Button', 1);
  await t.runForSteps(1);
  await t.runForSteps(79);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Ball").direction, -40, 1, "Expected Sprite Ball to face in direction -40 +-1");
  t.assert.withinRange(t.getSprite("Ball").x, -80.71637170940382, 5, "Expected Sprite Ball to have x-position -80.71637170940382 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, 37.302222155948904, 5, "Expected Sprite Ball to have y-position 37.302222155948904 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 36.26666666666665, 5, "Expected Sprite Computer to have y-position 36.26666666666665 +-5");
  await t.runForSteps(69);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.equal(t.getSprite("Ball").direction, -140, 1, "Expected Sprite Ball to face in direction -140 +-1");
  t.assert.withinRange(t.getSprite("Ball").x, -196.41814145298085, 5, "Expected Sprite Ball to have x-position -196.41814145298085 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, 122.60682779116371, 5, "Expected Sprite Ball to have y-position 122.60682779116371 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 72.53333333333333, 5, "Expected Sprite Computer to have y-position 72.53333333333333 +-5");
  t.end();
}
const test3 = async function (t) {
  t.keyPress('up arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.dragSprite('Ball', 207, -117, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.equal(t.getSprite("Ball").direction, -40, 1, "Expected Sprite Ball to face in direction -40 +-1");
  t.assert.withinRange(t.getSprite("Ball").x, 199.0143846453221, 5, "Expected Sprite Ball to have x-position 199.0143846453221 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, -109.33955556881023, 5, "Expected Sprite Ball to have y-position -109.33955556881023 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 9.066666666666666, 5, "Expected Sprite Computer to have y-position 9.066666666666666 +-5");
  t.keyPress('down arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Ball").x, 179.73075635472594, 5, "Expected Sprite Ball to have x-position 179.73075635472594 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, -86.3582222752409, 5, "Expected Sprite Ball to have y-position -86.3582222752409 +-5");
  t.assert.withinRange(t.getSprite("Spieler").x, -210, 5, "Expected Sprite Spieler to have x-position -210 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -119, 5, "Expected Sprite Spieler to have y-position -119 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 22.666666666666664, 5, "Expected Sprite Computer to have y-position 22.666666666666664 +-5");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849298523',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849298523',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849298523',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849298523',
      type: 'standard',
  }
]
