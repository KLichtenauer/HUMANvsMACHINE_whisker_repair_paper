const test0 = async function (t) {
  t.keyPress('up arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.dragSprite('Ball', 240, 84.58674589854647, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.withinRange(t.getSprite("Ball").x, 211.21812977253805, 5, "Expected Sprite Ball to have x-position 211.21812977253805 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, 110.30176491960984, 5, "Expected Sprite Ball to have y-position 110.30176491960984 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 22.666666666666664, 5, "Expected Sprite Computer to have y-position 22.666666666666664 +-5");
  t.end();
}
const test1 = async function (t) {
  t.keyPress('up arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.keyPress('down arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Ball").x, -63.947334756296165, 5, "Expected Sprite Ball to have x-position -63.947334756296165 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, 60.00171104914784, 5, "Expected Sprite Ball to have y-position 60.00171104914784 +-5");
  t.assert.withinRange(t.getSprite("Spieler").x, -210, 5, "Expected Sprite Spieler to have x-position -210 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -44, 5, "Expected Sprite Spieler to have y-position -44 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 27.200000000000003, 5, "Expected Sprite Computer to have y-position 27.200000000000003 +-5");
  t.end();
}
const test2 = async function (t) {
  t.clickSprite('Reset-Button', 1);
  await t.runForSteps(1);
  t.dragSprite('Ball', -240, -48.303086820783236, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.equal(t.getSprite("Ball").direction, -31, 1, "Expected Sprite Ball to face in direction -31 +-1");
  t.assert.withinRange(t.getSprite("Ball").x, -211.73531116902242, 5, "Expected Sprite Ball to have x-position -211.73531116902242 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, -22.58806779971987, 5, "Expected Sprite Ball to have y-position -22.58806779971987 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 4.533333333333333, 5, "Expected Sprite Computer to have y-position 4.533333333333333 +-5");
  t.keyPress('down arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Ball").direction, 31, 1, "Expected Sprite Ball to face in direction 31 +-1");
  t.assert.withinRange(t.getSprite("Ball").x, -196.75479125976562, 5, "Expected Sprite Ball to have x-position -196.75479125976562 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, 20.270297235385744, 5, "Expected Sprite Ball to have y-position 20.270297235385744 +-5");
  t.assert.withinRange(t.getSprite("Spieler").x, -210, 5, "Expected Sprite Spieler to have x-position -210 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -134, 5, "Expected Sprite Spieler to have y-position -134 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 18.133333333333333, 5, "Expected Sprite Computer to have y-position 18.133333333333333 +-5");
  t.end();
}
const test3 = async function (t) {
  t.keyPress('up arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  await t.runForSteps(92);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.withinRange(t.getSprite("Ball").x, 178.12056045142947, 5, "Expected Sprite Ball to have x-position 178.12056045142947 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, -86.53856844911743, 5, "Expected Sprite Ball to have y-position -86.53856844911743 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, -90.66666666666669, 5, "Expected Sprite Computer to have y-position -90.66666666666669 +-5");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937217949',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937217949',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937217949',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937217949',
      type: 'standard',
  }
]
