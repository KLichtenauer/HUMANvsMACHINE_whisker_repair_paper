const test0 = async function (t) {
  t.dragSprite('Spieler', -121.83560113057288, -47.22604896373575, null);
  await t.runForSteps(1);
  t.dragSprite('Spieler', -126, -75, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, -126, 5, "Expected Sprite Spieler to have x-position -126 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -75, 5, "Expected Sprite Spieler to have y-position -75 +-5");
  await t.runForSteps(41);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, -101, 5, "Expected Sprite Spieler to have x-position -101 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -50, 5, "Expected Sprite Spieler to have y-position -50 +-5");
  t.assert.not(t.getSprite("Freundin").sayText, "Expected Sprite Freundin not to say anything");
  t.dragSprite('Münzen', -53.2376593394712, 45.036345093095704, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, -106, 5, "Expected Sprite Spieler to have x-position -106 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -50, 5, "Expected Sprite Spieler to have y-position -50 +-5");
  t.assert.withinRange(t.getSprite("Münzen").x, -53.2376593394712, 5, "Expected Sprite Münzen to have x-position -53.2376593394712 +-5");
  t.assert.withinRange(t.getSprite("Münzen").y, 45.036345093095704, 5, "Expected Sprite Münzen to have y-position 45.036345093095704 +-5");
  await t.runForSteps(74);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spieler").direction, 90, 1, "Expected Sprite Spieler to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Spieler").x, -161, 5, "Expected Sprite Spieler to have x-position -161 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, 100, 5, "Expected Sprite Spieler to have y-position 100 +-5");
  await t.runForSteps(99);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spieler").direction, 180, 1, "Expected Sprite Spieler to face in direction 180 +-1");
  t.assert.withinRange(t.getSprite("Spieler").x, 34, 5, "Expected Sprite Spieler to have x-position 34 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, 35, 5, "Expected Sprite Spieler to have y-position 35 +-5");
  await t.runForSteps(43);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, -16, 5, "Expected Sprite Spieler to have x-position -16 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -35, 5, "Expected Sprite Spieler to have y-position -35 +-5");
  t.assert.equal(t.getSprite("Freundin").sayText, "Super!", "Expected Sprite Freundin to say Super!");
  t.assert.not(t.getSprite("Münzen").visible, "Expected Sprite Münzen not to be visible");
  t.dragSprite('Spieler', -107.1767334536699, -66.14357426906959, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spieler").direction, -90, 1, "Expected Sprite Spieler to face in direction -90 +-1");
  t.assert.withinRange(t.getSprite("Spieler").x, -112.1767334536699, 5, "Expected Sprite Spieler to have x-position -112.1767334536699 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -66.14357426906959, 5, "Expected Sprite Spieler to have y-position -66.14357426906959 +-5");
  t.dragSprite('Spieler', -120.51185987738198, -98.7383697760088, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spieler").direction, 180, 1, "Expected Sprite Spieler to face in direction 180 +-1");
  t.assert.withinRange(t.getSprite("Spieler").x, -120.51185987738198, 5, "Expected Sprite Spieler to have x-position -120.51185987738198 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -103.7383697760088, 5, "Expected Sprite Spieler to have y-position -103.7383697760088 +-5");
  t.dragSprite('Spieler', -3.366905163349223, 37.99506665538303, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spieler").direction, -90, 1, "Expected Sprite Spieler to face in direction -90 +-1");
  t.assert.withinRange(t.getSprite("Spieler").x, -8.366905163349223, 5, "Expected Sprite Spieler to have x-position -8.366905163349223 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, 37.99506665538303, 5, "Expected Sprite Spieler to have y-position 37.99506665538303 +-5");
  t.dragSprite('Spieler', 6.318850548734789, 25.28198932723228, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spieler").direction, 0, 1, "Expected Sprite Spieler to face in direction 0 +-1");
  t.assert.withinRange(t.getSprite("Spieler").x, 6.318850548734789, 5, "Expected Sprite Spieler to have x-position 6.318850548734789 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, 30.28198932723228, 5, "Expected Sprite Spieler to have y-position 30.28198932723228 +-5");
  t.dragSprite('Spieler', 25.847853179365114, 11.775432463173445, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, 25.847853179365114, 5, "Expected Sprite Spieler to have x-position 25.847853179365114 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, 16.775432463173445, 5, "Expected Sprite Spieler to have y-position 16.775432463173445 +-5");
  t.dragSprite('Spieler', -133, -82, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spieler").direction, -90, 1, "Expected Sprite Spieler to face in direction -90 +-1");
  t.assert.withinRange(t.getSprite("Spieler").x, -138, 5, "Expected Sprite Spieler to have x-position -138 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -82, 5, "Expected Sprite Spieler to have y-position -82 +-5");
  t.dragSprite('Spieler', -112.39504320930419, -58.95602185071361, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spieler").direction, 0, 1, "Expected Sprite Spieler to face in direction 0 +-1");
  t.assert.withinRange(t.getSprite("Spieler").x, -112.39504320930419, 5, "Expected Sprite Spieler to have x-position -112.39504320930419 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -53.95602185071361, 5, "Expected Sprite Spieler to have y-position -53.95602185071361 +-5");
  t.dragSprite('Spieler', 170.89049226015635, -162.5966267939179, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, 170.89049226015635, 5, "Expected Sprite Spieler to have x-position 170.89049226015635 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -157.5966267939179, 5, "Expected Sprite Spieler to have y-position -157.5966267939179 +-5");
  await t.runForSteps(49);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spieler").direction, 90, 1, "Expected Sprite Spieler to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Spieler").x, 55.89049226015635, 5, "Expected Sprite Spieler to have x-position 55.89049226015635 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -142.5966267939179, 5, "Expected Sprite Spieler to have y-position -142.5966267939179 +-5");
  t.assert.not(t.getSprite("Freundin").sayText, "Expected Sprite Freundin not to say anything");
  t.dragSprite('Spieler', 191.6112318345006, -133.49857891063178, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, 191.6112318345006, 5, "Expected Sprite Spieler to have x-position 191.6112318345006 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -133.49857891063178, 5, "Expected Sprite Spieler to have y-position -133.49857891063178 +-5");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687939255292',
      type: 'standard',
  }
]
