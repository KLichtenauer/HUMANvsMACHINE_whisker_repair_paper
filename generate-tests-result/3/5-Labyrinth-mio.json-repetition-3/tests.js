const test0 = async function (t) {
  t.dragSprite('Münzen', -94.20626504398527, 15.116524156682928, null);
  await t.runForSteps(1);
  await t.runForSteps(75);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spieler").direction, 90, 1, "Expected Sprite Spieler to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Spieler").x, -148, 5, "Expected Sprite Spieler to have x-position -148 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -80, 5, "Expected Sprite Spieler to have y-position -80 +-5");
  t.assert.not(t.getSprite("Freundin").sayText, "Expected Sprite Freundin not to say anything");
  t.dragSprite('Spieler', -130.58862869222546, -52.83272029634682, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spieler").direction, 0, 1, "Expected Sprite Spieler to face in direction 0 +-1");
  t.assert.withinRange(t.getSprite("Spieler").x, -130.58862869222546, 5, "Expected Sprite Spieler to have x-position -130.58862869222546 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -47.83272029634682, 5, "Expected Sprite Spieler to have y-position -47.83272029634682 +-5");
  t.end();
}
const test1 = async function (t) {
  t.dragSprite('Spieler', -151.17672668808495, -54.60243751353238, null);
  await t.runForSteps(1);
  t.dragSprite('Münzen', -121, -144, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Münzen").x, -121, 5, "Expected Sprite Münzen to have x-position -121 +-5");
  t.assert.withinRange(t.getSprite("Münzen").y, -144, 5, "Expected Sprite Münzen to have y-position -144 +-5");
  t.assert.equal(t.getSprite("Freundin").sayText, "Super!", "Expected Sprite Freundin to say Super!");
  t.assert.not(t.getSprite("Münzen").visible, "Expected Sprite Münzen not to be visible");
  t.end();
}
const test2 = async function (t) {
  t.dragSprite('Münzen', -94.20626504398527, 15.116524156682928, null);
  await t.runForSteps(1);
  await t.runForSteps(75);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spieler").direction, 90, 1, "Expected Sprite Spieler to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Spieler").x, -148, 5, "Expected Sprite Spieler to have x-position -148 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -80, 5, "Expected Sprite Spieler to have y-position -80 +-5");
  t.assert.not(t.getSprite("Freundin").sayText, "Expected Sprite Freundin not to say anything");
  t.dragSprite('Spieler', 187.28693374570224, -141.10923423892217, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, 187.28693374570224, 5, "Expected Sprite Spieler to have x-position 187.28693374570224 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -141.10923423892217, 5, "Expected Sprite Spieler to have y-position -141.10923423892217 +-5");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936643969',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936643969',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936643969',
      type: 'standard',
  }
]
