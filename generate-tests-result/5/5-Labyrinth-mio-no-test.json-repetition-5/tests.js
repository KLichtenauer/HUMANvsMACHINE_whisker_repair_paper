const test0 = async function (t) {
  t.dragSprite('Münzen', -123.00000000000003, -180, null);
  await t.runForSteps(1);
  await t.runForSteps(18);
  await t.runForSteps(1);
  t.dragSprite('Spieler', -124, -72, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, -124, 5, "Expected Sprite Spieler to have x-position -124 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -72, 5, "Expected Sprite Spieler to have y-position -72 +-5");
  await t.runForSteps(69);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spieler").direction, 0, 1, "Expected Sprite Spieler to face in direction 0 +-1");
  t.assert.withinRange(t.getSprite("Spieler").x, -214, 5, "Expected Sprite Spieler to have x-position -214 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, 13.000000000000004, 5, "Expected Sprite Spieler to have y-position 13.000000000000004 +-5");
  t.assert.not(t.getSprite("Freundin").sayText, "Expected Sprite Freundin not to say anything");
  t.dragSprite('Spieler', -202, 26, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spieler").direction, -90, 1, "Expected Sprite Spieler to face in direction -90 +-1");
  t.assert.withinRange(t.getSprite("Spieler").x, -207, 5, "Expected Sprite Spieler to have x-position -207 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, 26, 5, "Expected Sprite Spieler to have y-position 26 +-5");
  t.dragSprite('Münzen', -174.00057174942862, 125.0073971946295, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spieler").direction, 180, 1, "Expected Sprite Spieler to face in direction 180 +-1");
  t.assert.withinRange(t.getSprite("Spieler").x, -207, 5, "Expected Sprite Spieler to have x-position -207 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, 21, 5, "Expected Sprite Spieler to have y-position 21 +-5");
  t.assert.withinRange(t.getSprite("Münzen").x, -174.00057174942862, 5, "Expected Sprite Münzen to have x-position -174.00057174942862 +-5");
  t.assert.withinRange(t.getSprite("Münzen").y, 125.0073971946295, 5, "Expected Sprite Münzen to have y-position 125.0073971946295 +-5");
  await t.runForSteps(37);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spieler").direction, 0, 1, "Expected Sprite Spieler to face in direction 0 +-1");
  t.assert.withinRange(t.getSprite("Spieler").x, -202, 5, "Expected Sprite Spieler to have x-position -202 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, 26, 5, "Expected Sprite Spieler to have y-position 26 +-5");
  t.dragSprite('Spieler', -133, -82, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spieler").direction, -90, 1, "Expected Sprite Spieler to face in direction -90 +-1");
  t.assert.withinRange(t.getSprite("Spieler").x, -138, 5, "Expected Sprite Spieler to have x-position -138 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -82, 5, "Expected Sprite Spieler to have y-position -82 +-5");
  t.dragSprite('Spieler', -126, -75, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spieler").direction, 180, 1, "Expected Sprite Spieler to face in direction 180 +-1");
  t.assert.withinRange(t.getSprite("Spieler").x, -126, 5, "Expected Sprite Spieler to have x-position -126 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -80, 5, "Expected Sprite Spieler to have y-position -80 +-5");
  t.dragSprite('Münzen', -197.29709519252026, -164.97635118689175, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, -126, 5, "Expected Sprite Spieler to have x-position -126 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -85, 5, "Expected Sprite Spieler to have y-position -85 +-5");
  t.assert.withinRange(t.getSprite("Münzen").x, -197.29709519252026, 5, "Expected Sprite Münzen to have x-position -197.29709519252026 +-5");
  t.assert.withinRange(t.getSprite("Münzen").y, -164.97635118689175, 5, "Expected Sprite Münzen to have y-position -164.97635118689175 +-5");
  t.dragSprite('Münzen', -126, -85, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, -126, 5, "Expected Sprite Spieler to have x-position -126 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -90, 5, "Expected Sprite Spieler to have y-position -90 +-5");
  t.assert.withinRange(t.getSprite("Münzen").x, -126, 5, "Expected Sprite Münzen to have x-position -126 +-5");
  t.assert.withinRange(t.getSprite("Münzen").y, -85, 5, "Expected Sprite Münzen to have y-position -85 +-5");
  t.assert.equal(t.getSprite("Freundin").sayText, "Super!", "Expected Sprite Freundin to say Super!");
  t.assert.not(t.getSprite("Münzen").visible, "Expected Sprite Münzen not to be visible");
  t.dragSprite('Spieler', -148.37522775762992, -81.40363799901289, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, -148.37522775762992, 5, "Expected Sprite Spieler to have x-position -148.37522775762992 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -86.40363799901289, 5, "Expected Sprite Spieler to have y-position -86.40363799901289 +-5");
  t.dragSprite('Spieler', 195, -158, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, 195, 5, "Expected Sprite Spieler to have x-position 195 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -158, 5, "Expected Sprite Spieler to have y-position -158 +-5");
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
      seed: '1687938515917',
      type: 'standard',
  }
]
