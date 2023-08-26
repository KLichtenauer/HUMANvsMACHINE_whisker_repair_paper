const test0 = async function (t) {
  t.dragSprite('Münzen', -1.7402941723679248, -116.67424192343213, null);
  await t.runForSteps(1);
  t.dragSprite('Spieler', -121.22172476020569, -96.65270761246298, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, -121.22172476020569, 5, "Expected Sprite Spieler to have x-position -121.22172476020569 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -96.65270761246298, 5, "Expected Sprite Spieler to have y-position -96.65270761246298 +-5");
  await t.runForSteps(41);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spieler").direction, 90, 1, "Expected Sprite Spieler to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Spieler").x, -116.22172476020569, 5, "Expected Sprite Spieler to have x-position -116.22172476020569 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -101.65270761246298, 5, "Expected Sprite Spieler to have y-position -101.65270761246298 +-5");
  t.assert.not(t.getSprite("Freundin").sayText, "Expected Sprite Freundin not to say anything");
  t.dragSprite('Spieler', -140, -73, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spieler").direction, 180, 1, "Expected Sprite Spieler to face in direction 180 +-1");
  t.assert.withinRange(t.getSprite("Spieler").x, -140, 5, "Expected Sprite Spieler to have x-position -140 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -78, 5, "Expected Sprite Spieler to have y-position -78 +-5");
  await t.runForSteps(83);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spieler").direction, 90, 1, "Expected Sprite Spieler to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Spieler").x, -210, 5, "Expected Sprite Spieler to have x-position -210 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, 102, 5, "Expected Sprite Spieler to have y-position 102 +-5");
  t.dragSprite('Münzen', -210, 102, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, -205, 5, "Expected Sprite Spieler to have x-position -205 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, 102, 5, "Expected Sprite Spieler to have y-position 102 +-5");
  t.assert.withinRange(t.getSprite("Münzen").x, -210, 5, "Expected Sprite Münzen to have x-position -210 +-5");
  t.assert.withinRange(t.getSprite("Münzen").y, 102, 5, "Expected Sprite Münzen to have y-position 102 +-5");
  t.assert.equal(t.getSprite("Freundin").sayText, "Super!", "Expected Sprite Freundin to say Super!");
  t.assert.not(t.getSprite("Münzen").visible, "Expected Sprite Münzen not to be visible");
  t.dragSprite('Spieler', 210.96259103955882, -147.0582565774854, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, 210.96259103955882, 5, "Expected Sprite Spieler to have x-position 210.96259103955882 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -147.0582565774854, 5, "Expected Sprite Spieler to have y-position -147.0582565774854 +-5");
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
      seed: '1687849520382',
      type: 'standard',
  }
]
