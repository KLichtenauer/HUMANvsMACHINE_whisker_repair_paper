const test0 = async function (t) {
  t.dragSprite('Spieler', -147.78546915892937, -51.56610142724332, null);
  await t.runForSteps(1);
  await t.runForSteps(74);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spieler").direction, 90, 1, "Expected Sprite Spieler to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Spieler").x, -153, 5, "Expected Sprite Spieler to have x-position -153 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -80, 5, "Expected Sprite Spieler to have y-position -80 +-5");
  t.assert.not(t.getSprite("Freundin").sayText, "Expected Sprite Freundin not to say anything");
  t.dragSprite('Spieler', -136.91600666885233, -49.41919938643372, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spieler").direction, 0, 1, "Expected Sprite Spieler to face in direction 0 +-1");
  t.assert.withinRange(t.getSprite("Spieler").x, -136.91600666885233, 5, "Expected Sprite Spieler to have x-position -136.91600666885233 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -44.41919938643372, 5, "Expected Sprite Spieler to have y-position -44.41919938643372 +-5");
  t.end();
}
const test1 = async function (t) {
  t.dragSprite('Spieler', -147.78546915892937, -51.56610142724332, null);
  await t.runForSteps(1);
  t.dragSprite('Münzen', -213.31415231075437, -78.82765538856707, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Münzen").x, -213.31415231075437, 5, "Expected Sprite Münzen to have x-position -213.31415231075437 +-5");
  t.assert.withinRange(t.getSprite("Münzen").y, -78.82765538856707, 5, "Expected Sprite Münzen to have y-position -78.82765538856707 +-5");
  await t.runForSteps(74);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spieler").direction, 90, 1, "Expected Sprite Spieler to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Spieler").x, -148, 5, "Expected Sprite Spieler to have x-position -148 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -80, 5, "Expected Sprite Spieler to have y-position -80 +-5");
  t.assert.equal(t.getSprite("Freundin").sayText, "Super!", "Expected Sprite Freundin to say Super!");
  t.assert.not(t.getSprite("Münzen").visible, "Expected Sprite Münzen not to be visible");
  t.end();
}
const test2 = async function (t) {
  t.dragSprite('Spieler', -147.78546915892937, -51.56610142724332, null);
  await t.runForSteps(1);
  await t.runForSteps(74);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spieler").direction, 90, 1, "Expected Sprite Spieler to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Spieler").x, -153, 5, "Expected Sprite Spieler to have x-position -153 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -80, 5, "Expected Sprite Spieler to have y-position -80 +-5");
  t.assert.not(t.getSprite("Freundin").sayText, "Expected Sprite Freundin not to say anything");
  t.dragSprite('Spieler', 183.34838523830214, -139.16244956859686, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, 183.34838523830214, 5, "Expected Sprite Spieler to have x-position 183.34838523830214 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -139.16244956859686, 5, "Expected Sprite Spieler to have y-position -139.16244956859686 +-5");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849336516',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849336516',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849336516',
      type: 'standard',
  }
]
