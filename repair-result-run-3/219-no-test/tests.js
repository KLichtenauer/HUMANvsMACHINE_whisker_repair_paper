const test0 = async function (t) {
  t.mouseMove(23, 36);
  await t.runForSteps(1);
  await t.runForSteps(94);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, -113, 5, "Expected Sprite Spieler to have x-position -113 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -50, 5, "Expected Sprite Spieler to have y-position -50 +-5");
  t.assert.not(t.getSprite("Freundin").sayText, "Expected Sprite Freundin not to say anything");
  await t.runForSteps(51);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spieler").direction, 0, 1, "Expected Sprite Spieler to face in direction 0 +-1");
  t.assert.withinRange(t.getSprite("Spieler").x, -218, 5, "Expected Sprite Spieler to have x-position -218 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, 45.00000000000001, 5, "Expected Sprite Spieler to have y-position 45.00000000000001 +-5");
  t.dragSprite('Münzen', -111.06950258695844, 100.82550108904027, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, -218, 5, "Expected Sprite Spieler to have x-position -218 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, 50.00000000000001, 5, "Expected Sprite Spieler to have y-position 50.00000000000001 +-5");
  t.assert.withinRange(t.getSprite("Münzen").x, -111.06950258695844, 5, "Expected Sprite Münzen to have x-position -111.06950258695844 +-5");
  t.assert.withinRange(t.getSprite("Münzen").y, 100.82550108904027, 5, "Expected Sprite Münzen to have y-position 100.82550108904027 +-5");
  t.dragSprite('Spieler', -142.39756841562075, -55.82326851058149, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, -142.39756841562075, 5, "Expected Sprite Spieler to have x-position -142.39756841562075 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -50.82326851058149, 5, "Expected Sprite Spieler to have y-position -50.82326851058149 +-5");
  t.dragSprite('Münzen', -240, -76.52895212300834, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, -142.39756841562075, 5, "Expected Sprite Spieler to have x-position -142.39756841562075 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -45.82326851058149, 5, "Expected Sprite Spieler to have y-position -45.82326851058149 +-5");
  t.assert.withinRange(t.getSprite("Münzen").x, -240, 5, "Expected Sprite Münzen to have x-position -240 +-5");
  t.assert.withinRange(t.getSprite("Münzen").y, -76.52895212300834, 5, "Expected Sprite Münzen to have y-position -76.52895212300834 +-5");
  t.dragSprite('Münzen', -142, -45, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, -142.39756841562075, 5, "Expected Sprite Spieler to have x-position -142.39756841562075 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -40.82326851058149, 5, "Expected Sprite Spieler to have y-position -40.82326851058149 +-5");
  t.assert.withinRange(t.getSprite("Münzen").x, -142, 5, "Expected Sprite Münzen to have x-position -142 +-5");
  t.assert.withinRange(t.getSprite("Münzen").y, -45, 5, "Expected Sprite Münzen to have y-position -45 +-5");
  t.assert.equal(t.getSprite("Freundin").sayText, "Super!", "Expected Sprite Freundin to say Super!");
  t.assert.not(t.getSprite("Münzen").visible, "Expected Sprite Münzen not to be visible");
  await t.runForSteps(59);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spieler").direction, 90, 1, "Expected Sprite Spieler to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Spieler").x, -212.39756841562075, 5, "Expected Sprite Spieler to have x-position -212.39756841562075 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, 99.17673148941851, 5, "Expected Sprite Spieler to have y-position 99.17673148941851 +-5");
  t.assert.not(t.getSprite("Freundin").sayText, "Expected Sprite Freundin not to say anything");
  t.dragSprite('Spieler', -135.7820936025356, -34.399857218689164, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, -130.7820936025356, 5, "Expected Sprite Spieler to have x-position -130.7820936025356 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -34.399857218689164, 5, "Expected Sprite Spieler to have y-position -34.399857218689164 +-5");
  t.dragSprite('Spieler', -112.90397176614678, -48.451447767790356, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spieler").direction, 0, 1, "Expected Sprite Spieler to face in direction 0 +-1");
  t.assert.withinRange(t.getSprite("Spieler").x, -112.90397176614678, 5, "Expected Sprite Spieler to have x-position -112.90397176614678 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -43.451447767790356, 5, "Expected Sprite Spieler to have y-position -43.451447767790356 +-5");
  t.dragSprite('Spieler', -122, -67, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spieler").direction, 90, 1, "Expected Sprite Spieler to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Spieler").x, -117, 5, "Expected Sprite Spieler to have x-position -117 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -67, 5, "Expected Sprite Spieler to have y-position -67 +-5");
  t.dragSprite('Spieler', -112.69519300178885, -53.38522188952597, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, -107.69519300178885, 5, "Expected Sprite Spieler to have x-position -107.69519300178885 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -53.38522188952597, 5, "Expected Sprite Spieler to have y-position -53.38522188952597 +-5");
  t.dragSprite('Spieler', -111.30758763415152, -56.82459240833914, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, -106.30758763415152, 5, "Expected Sprite Spieler to have x-position -106.30758763415152 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -56.82459240833914, 5, "Expected Sprite Spieler to have y-position -56.82459240833914 +-5");
  t.dragSprite('Spieler', 191.004870510546, -133.67972035809615, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, 191.004870510546, 5, "Expected Sprite Spieler to have x-position 191.004870510546 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -133.67972035809615, 5, "Expected Sprite Spieler to have y-position -133.67972035809615 +-5");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936833663',
      type: 'standard',
  }
]
