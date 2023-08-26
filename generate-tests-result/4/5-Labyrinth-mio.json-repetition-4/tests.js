const test0 = async function (t) {
  await t.runForSteps(22);
  await t.runForSteps(1);
  t.dragSprite('Münzen', -128, -155, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Münzen").x, -128, 5, "Expected Sprite Münzen to have x-position -128 +-5");
  t.assert.withinRange(t.getSprite("Münzen").y, -155, 5, "Expected Sprite Münzen to have y-position -155 +-5");
  t.assert.equal(t.getSprite("Freundin").sayText, "Super!", "Expected Sprite Freundin to say Super!");
  t.assert.not(t.getSprite("Münzen").visible, "Expected Sprite Münzen not to be visible");
  t.dragSprite('Spieler', -112.00493334461697, -59.63308544240219, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, -112.00493334461697, 5, "Expected Sprite Spieler to have x-position -112.00493334461697 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -59.63308544240219, 5, "Expected Sprite Spieler to have y-position -59.63308544240219 +-5");
  t.dragSprite('Spieler', 180.27629726546186, -171.9574564918251, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, 180.27629726546186, 5, "Expected Sprite Spieler to have x-position 180.27629726546186 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -171.9574564918251, 5, "Expected Sprite Spieler to have y-position -171.9574564918251 +-5");
  t.dragSprite('Spieler', -136.65161476169789, -92.83755618938027, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, -136.65161476169789, 5, "Expected Sprite Spieler to have x-position -136.65161476169789 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -92.83755618938027, 5, "Expected Sprite Spieler to have y-position -92.83755618938027 +-5");
  t.dragSprite('Spieler', -119.00486707806532, -95.32027592497704, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, -119.00486707806532, 5, "Expected Sprite Spieler to have x-position -119.00486707806532 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -95.32027592497704, 5, "Expected Sprite Spieler to have y-position -95.32027592497704 +-5");
  t.dragSprite('Spieler', -127.85642493344153, -50.176734402119884, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, -127.85642493344153, 5, "Expected Sprite Spieler to have x-position -127.85642493344153 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -50.176734402119884, 5, "Expected Sprite Spieler to have y-position -50.176734402119884 +-5");
  t.dragSprite('Spieler', 212.30480699821115, -163.61477811047405, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, 212.30480699821115, 5, "Expected Sprite Spieler to have x-position 212.30480699821115 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -163.61477811047405, 5, "Expected Sprite Spieler to have y-position -163.61477811047405 +-5");
  t.dragSprite('Spieler', -120.52828436783692, -95.71709764431789, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spieler").direction, 180, 1, "Expected Sprite Spieler to face in direction 180 +-1");
  t.assert.withinRange(t.getSprite("Spieler").x, -120.52828436783692, 5, "Expected Sprite Spieler to have x-position -120.52828436783692 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -100.71709764431789, 5, "Expected Sprite Spieler to have y-position -100.71709764431789 +-5");
  t.assert.not(t.getSprite("Freundin").sayText, "Expected Sprite Freundin not to say anything");
  t.end();
}
const test1 = async function (t) {
  t.dragSprite('Spieler', -132, -68, null);
  await t.runForSteps(1);
  await t.runForSteps(62);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spieler").direction, 90, 1, "Expected Sprite Spieler to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Spieler").x, -213, 5, "Expected Sprite Spieler to have x-position -213 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -80, 5, "Expected Sprite Spieler to have y-position -80 +-5");
  t.assert.not(t.getSprite("Freundin").sayText, "Expected Sprite Freundin not to say anything");
  t.end();
}
const test2 = async function (t) {
  t.dragSprite('Spieler', -132, -68, null);
  await t.runForSteps(1);
  await t.runForSteps(62);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spieler").direction, 90, 1, "Expected Sprite Spieler to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Spieler").x, -213, 5, "Expected Sprite Spieler to have x-position -213 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -80, 5, "Expected Sprite Spieler to have y-position -80 +-5");
  t.assert.not(t.getSprite("Freundin").sayText, "Expected Sprite Freundin not to say anything");
  t.dragSprite('Spieler', 208.9950786794729, -173.36690986047353, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spieler").x, 208.9950786794729, 5, "Expected Sprite Spieler to have x-position 208.9950786794729 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -173.36690986047353, 5, "Expected Sprite Spieler to have y-position -173.36690986047353 +-5");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937396880',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937396880',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937396880',
      type: 'standard',
  }
]
