const test0 = async function (t) {
  t.mouseMove(-220, -169);
  await t.runForSteps(1);
  t.dragSprite('Spieler', 191.30748951316963, -133.58542931853114, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, 191.30748951316963, 5, "Expected Sprite Spieler to have x-position 191.30748951316963 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -133.58542931853114, 5, "Expected Sprite Spieler to have y-position -133.58542931853114 +-5");
  t.dragSprite('Spieler', -112.22451812118283, -91.33867759050062, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, -112.22451812118283, 5, "Expected Sprite Spieler to have x-position -112.22451812118283 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -91.33867759050062, 5, "Expected Sprite Spieler to have y-position -91.33867759050062 +-5");
  t.dragSprite('Münzen', -112, -91, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Münzen").x, -112, 5, "Expected Sprite Münzen to have x-position -112 +-5");
  t.assert.withinRange(t.getSprite("Münzen").y, -91, 5, "Expected Sprite Münzen to have y-position -91 +-5");
  t.assert.equal(t.getSprite("Freundin").sayText, "Super!", "Expected Sprite Freundin to say Super!");
  t.assert.not(t.getSprite("Münzen").visible, "Expected Sprite Münzen not to be visible");
  t.dragSprite('Spieler', 211.58038324627987, -149.05513630744497, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, 211.58038324627987, 5, "Expected Sprite Spieler to have x-position 211.58038324627987 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -149.05513630744497, 5, "Expected Sprite Spieler to have y-position -149.05513630744497 +-5");
  t.dragSprite('Spieler', -139, -142, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, -139, 5, "Expected Sprite Spieler to have x-position -139 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -142, 5, "Expected Sprite Spieler to have y-position -142 +-5");
  t.dragSprite('Spieler', -130.2965352283686, -99.21858784228552, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, -130.2965352283686, 5, "Expected Sprite Spieler to have x-position -130.2965352283686 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -99.21858784228552, 5, "Expected Sprite Spieler to have y-position -99.21858784228552 +-5");
  await t.runForSteps(91);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spieler").direction, 180, 1, "Expected Sprite Spieler to face in direction 180 +-1");
  t.assert.withinRange(t.getSprite("Spieler").x, -130.2965352283686, 5, "Expected Sprite Spieler to have x-position -130.2965352283686 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -104.21858784228552, 5, "Expected Sprite Spieler to have y-position -104.21858784228552 +-5");
  t.assert.not(t.getSprite("Freundin").sayText, "Expected Sprite Freundin not to say anything");
  await t.runForSteps(19);
  await t.runForSteps(1);
  t.dragSprite('Spieler', -162.8553498782235, -171.2232865519089, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spieler").direction, -90, 1, "Expected Sprite Spieler to face in direction -90 +-1");
  t.assert.withinRange(t.getSprite("Spieler").x, -167.8553498782235, 5, "Expected Sprite Spieler to have x-position -167.8553498782235 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -171.2232865519089, 5, "Expected Sprite Spieler to have y-position -171.2232865519089 +-5");
  await t.runForSteps(71);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, -167.8553498782235, 5, "Expected Sprite Spieler to have x-position -167.8553498782235 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -51.2232865519089, 5, "Expected Sprite Spieler to have y-position -51.2232865519089 +-5");
  await t.runForSteps(95);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spieler").direction, 90, 1, "Expected Sprite Spieler to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Spieler").x, -182.8553498782235, 5, "Expected Sprite Spieler to have x-position -182.8553498782235 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, 153.7767134480911, 5, "Expected Sprite Spieler to have y-position 153.7767134480911 +-5");
  await t.runForSteps(51);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spieler").direction, 180, 1, "Expected Sprite Spieler to face in direction 180 +-1");
  t.assert.withinRange(t.getSprite("Spieler").x, 37.14465012177649, 5, "Expected Sprite Spieler to have x-position 37.14465012177649 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, 113.7767134480911, 5, "Expected Sprite Spieler to have y-position 113.7767134480911 +-5");
  t.dragSprite('Spieler', -149, -156, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spieler").direction, 90, 1, "Expected Sprite Spieler to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Spieler").x, -144, 5, "Expected Sprite Spieler to have x-position -144 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -156, 5, "Expected Sprite Spieler to have y-position -156 +-5");
  t.dragSprite('Spieler', -137.22172237320518, -49.347292387537024, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spieler").direction, 0, 1, "Expected Sprite Spieler to face in direction 0 +-1");
  t.assert.withinRange(t.getSprite("Spieler").x, -137.22172237320518, 5, "Expected Sprite Spieler to have x-position -137.22172237320518 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -44.347292387537024, 5, "Expected Sprite Spieler to have y-position -44.347292387537024 +-5");
  t.dragSprite('Spieler', -111.32887615646776, -137.6318564516542, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spieler").direction, -90, 1, "Expected Sprite Spieler to face in direction -90 +-1");
  t.assert.withinRange(t.getSprite("Spieler").x, -116.32887615646776, 5, "Expected Sprite Spieler to have x-position -116.32887615646776 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -137.6318564516542, 5, "Expected Sprite Spieler to have y-position -137.6318564516542 +-5");
  t.dragSprite('Spieler', -135.91600931851323, -116.41919187294683, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spieler").direction, 0, 1, "Expected Sprite Spieler to face in direction 0 +-1");
  t.assert.withinRange(t.getSprite("Spieler").x, -135.91600931851323, 5, "Expected Sprite Spieler to have x-position -135.91600931851323 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -111.41919187294683, 5, "Expected Sprite Spieler to have y-position -111.41919187294683 +-5");
  t.dragSprite('Spieler', -107.07420010785977, -82.92948629538468, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spieler").direction, 90, 1, "Expected Sprite Spieler to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Spieler").x, -102.07420010785977, 5, "Expected Sprite Spieler to have x-position -102.07420010785977 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -82.92948629538468, 5, "Expected Sprite Spieler to have y-position -82.92948629538468 +-5");
  t.dragSprite('Spieler', 184.31176849468827, -138.06605840039222, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, 184.31176849468827, 5, "Expected Sprite Spieler to have x-position 184.31176849468827 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -138.06605840039222, 5, "Expected Sprite Spieler to have y-position -138.06605840039222 +-5");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937672954',
      type: 'standard',
  }
]
