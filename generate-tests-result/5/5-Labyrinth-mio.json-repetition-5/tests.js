const test0 = async function (t) {
  t.mouseMove(-172, -76);
  await t.runForSteps(1);
  t.dragSprite('Spieler', -126, -75, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, -126, 5, "Expected Sprite Spieler to have x-position -126 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -75, 5, "Expected Sprite Spieler to have y-position -75 +-5");
  await t.runForSteps(71);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spieler").direction, 90, 1, "Expected Sprite Spieler to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Spieler").x, -196, 5, "Expected Sprite Spieler to have x-position -196 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -35, 5, "Expected Sprite Spieler to have y-position -35 +-5");
  t.assert.not(t.getSprite("Freundin").sayText, "Expected Sprite Freundin not to say anything");
  t.end();
}
const test1 = async function (t) {
  t.mouseMove(-172, -76);
  await t.runForSteps(1);
  t.dragSprite('Spieler', 201.07427586669112, -180, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, 201.07427586669112, 5, "Expected Sprite Spieler to have x-position 201.07427586669112 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -180, 5, "Expected Sprite Spieler to have y-position -180 +-5");
  t.dragSprite('Münzen', 201, -180, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Münzen").x, 201, 5, "Expected Sprite Münzen to have x-position 201 +-5");
  t.assert.withinRange(t.getSprite("Münzen").y, -180, 5, "Expected Sprite Münzen to have y-position -180 +-5");
  t.assert.equal(t.getSprite("Freundin").sayText, "Super!", "Expected Sprite Freundin to say Super!");
  t.assert.not(t.getSprite("Münzen").visible, "Expected Sprite Münzen not to be visible");
  t.end();
}
const test2 = async function (t) {
  t.mouseMove(-172, -76);
  await t.runForSteps(1);
  t.dragSprite('Spieler', 201.07427586669112, -180, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, 201.07427586669112, 5, "Expected Sprite Spieler to have x-position 201.07427586669112 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -180, 5, "Expected Sprite Spieler to have y-position -180 +-5");
  await t.runForSteps(71);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spieler").direction, 90, 1, "Expected Sprite Spieler to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Spieler").x, 201.07427586669112, 5, "Expected Sprite Spieler to have x-position 201.07427586669112 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -175, 5, "Expected Sprite Spieler to have y-position -175 +-5");
  t.assert.not(t.getSprite("Freundin").sayText, "Expected Sprite Freundin not to say anything");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938201852',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938201852',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938201852',
      type: 'standard',
  }
]
