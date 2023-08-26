const test0 = async function (t) {
  t.dragSprite('Spieler', 195, -158, null);
  await t.runForSteps(1);
  await t.runForSteps(30);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, -138, 5, "Expected Sprite Spieler to have x-position -138 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -155, 5, "Expected Sprite Spieler to have y-position -155 +-5");
  t.assert.not(t.getSprite("Freundin").sayText, "Expected Sprite Freundin not to say anything");
  t.dragSprite('Spieler', -124, -72, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spieler").direction, 180, 1, "Expected Sprite Spieler to face in direction 180 +-1");
  t.assert.withinRange(t.getSprite("Spieler").x, -124, 5, "Expected Sprite Spieler to have x-position -124 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -77, 5, "Expected Sprite Spieler to have y-position -77 +-5");
  t.end();
}
const test1 = async function (t) {
  t.dragSprite('Spieler', 195, -158, null);
  await t.runForSteps(1);
  await t.runForSteps(74);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spieler").direction, 90, 1, "Expected Sprite Spieler to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Spieler").x, -153, 5, "Expected Sprite Spieler to have x-position -153 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -80, 5, "Expected Sprite Spieler to have y-position -80 +-5");
  t.assert.not(t.getSprite("Freundin").sayText, "Expected Sprite Freundin not to say anything");
  t.end();
}
const test2 = async function (t) {
  t.dragSprite('Münzen', -217.75096524836778, -153.58588715178297, null);
  await t.runForSteps(1);
  t.dragSprite('Münzen', -167.50993969328746, -171.91565399893, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Münzen").x, -167.50993969328746, 5, "Expected Sprite Münzen to have x-position -167.50993969328746 +-5");
  t.assert.withinRange(t.getSprite("Münzen").y, -171.91565399893, 5, "Expected Sprite Münzen to have y-position -171.91565399893 +-5");
  t.dragSprite('Spieler', -139, -142, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, -139, 5, "Expected Sprite Spieler to have x-position -139 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -142, 5, "Expected Sprite Spieler to have y-position -142 +-5");
  t.assert.equal(t.getSprite("Freundin").sayText, "Super!", "Expected Sprite Freundin to say Super!");
  t.assert.not(t.getSprite("Münzen").visible, "Expected Sprite Münzen not to be visible");
  t.end();
}
const test3 = async function (t) {
  t.dragSprite('Spieler', 195, -158, null);
  await t.runForSteps(1);
  await t.runForSteps(30);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, -138, 5, "Expected Sprite Spieler to have x-position -138 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -155, 5, "Expected Sprite Spieler to have y-position -155 +-5");
  t.assert.not(t.getSprite("Freundin").sayText, "Expected Sprite Freundin not to say anything");
  t.dragSprite('Spieler', 195, -158, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, 195, 5, "Expected Sprite Spieler to have x-position 195 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -158, 5, "Expected Sprite Spieler to have y-position -158 +-5");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938985070',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938985070',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938985070',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938985070',
      type: 'standard',
  }
]
