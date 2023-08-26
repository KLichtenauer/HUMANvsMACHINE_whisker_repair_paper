const test0 = async function (t) {
  t.mouseDown(true);
  await t.runForSteps(1);
  await t.runForSteps(5);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Tera").x, 126, 5, "Expected Sprite Tera to have x-position 126 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -7, 5, "Expected Sprite Tera to have y-position -7 +-5");
  t.mouseDown(false);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Tera").x, 126, 5, "Expected Sprite Tera to have x-position 126 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, 93, 5, "Expected Sprite Tera to have y-position 93 +-5");
  await t.runForSteps(19);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Tera").x, -74, 5, "Expected Sprite Tera to have x-position -74 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -7, 5, "Expected Sprite Tera to have y-position -7 +-5");
  await t.runForSteps(24);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Tera").x, 126, 5, "Expected Sprite Tera to have x-position 126 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -107, 5, "Expected Sprite Tera to have y-position -107 +-5");
  t.mouseDown(true);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Tera").x, -74, 5, "Expected Sprite Tera to have x-position -74 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -107, 5, "Expected Sprite Tera to have y-position -107 +-5");
  await t.runForSteps(12);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Tera").x, 26, 5, "Expected Sprite Tera to have x-position 26 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, 93, 5, "Expected Sprite Tera to have y-position 93 +-5");
  t.mouseDown(false);
  await t.runForSteps(1);
  t.dragSprite('Katze', -140.3720335288784, -53.42604023134655, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Katze").x, -140.3720335288784, 5, "Expected Sprite Katze to have x-position -140.3720335288784 +-5");
  t.assert.withinRange(t.getSprite("Katze").y, -53.42604023134655, 5, "Expected Sprite Katze to have y-position -53.42604023134655 +-5");
  t.assert.withinRange(t.getSprite("Tera").x, 126, 5, "Expected Sprite Tera to have x-position 126 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, 93, 5, "Expected Sprite Tera to have y-position 93 +-5");
  t.mouseMove(-45, -149);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Tera").x, 126, 5, "Expected Sprite Tera to have x-position 126 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -107, 5, "Expected Sprite Tera to have y-position -107 +-5");
  t.mouseDown(true);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Katze").x, -45, 5, "Expected Sprite Katze to have x-position -45 +-5");
  t.assert.withinRange(t.getSprite("Katze").y, -149, 5, "Expected Sprite Katze to have y-position -149 +-5");
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Tera").x, 26, 5, "Expected Sprite Tera to have x-position 26 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, 93, 5, "Expected Sprite Tera to have y-position 93 +-5");
  t.mouseDown(false);
  await t.runForSteps(1);
  t.mouseMove(-57, 65);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Tera").x, 126, 5, "Expected Sprite Tera to have x-position 126 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -107, 5, "Expected Sprite Tera to have y-position -107 +-5");
  t.mouseMove(131, -15);
  await t.runForSteps(1);
  t.mouseDown(true);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.withinRange(t.getSprite("Katze").x, -195, 5, "Expected Sprite Katze to have x-position -195 +-5");
  t.assert.withinRange(t.getSprite("Katze").y, 0, 5, "Expected Sprite Katze to have y-position 0 +-5");
  t.assert.equal(t.getSprite("Katze").getVariable("Meine Züge").value, "1", "Expected Meine Züge to have value 1 in Sprite Katze");
  t.mouseDown(false);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Tera").x, -74, 5, "Expected Sprite Tera to have x-position -74 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -107, 5, "Expected Sprite Tera to have y-position -107 +-5");
  t.mouseDown(true);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.withinRange(t.getSprite("Katze").x, 131, 5, "Expected Sprite Katze to have x-position 131 +-5");
  t.assert.withinRange(t.getSprite("Katze").y, -15, 5, "Expected Sprite Katze to have y-position -15 +-5");
  t.assert.withinRange(t.getSprite("Tera").x, -74, 5, "Expected Sprite Tera to have x-position -74 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -7, 5, "Expected Sprite Tera to have y-position -7 +-5");
  t.dragSprite('Katze', -185.68454512011374, -87.35118048477011, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Katze").x, -185.68454512011374, 5, "Expected Sprite Katze to have x-position -185.68454512011374 +-5");
  t.assert.withinRange(t.getSprite("Katze").y, -87.35118048477011, 5, "Expected Sprite Katze to have y-position -87.35118048477011 +-5");
  t.mouseMove(-28, -28);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Tera").x, 26, 5, "Expected Sprite Tera to have x-position 26 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -7, 5, "Expected Sprite Tera to have y-position -7 +-5");
  t.dragSprite('Katze', -150.75906411766567, 4.435343253118177, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Katze").x, -150.75906411766567, 5, "Expected Sprite Katze to have x-position -150.75906411766567 +-5");
  t.assert.withinRange(t.getSprite("Katze").y, 4.435343253118177, 5, "Expected Sprite Katze to have y-position 4.435343253118177 +-5");
  t.mouseMove(-134, 38);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Tera").x, 26, 5, "Expected Sprite Tera to have x-position 26 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, 93, 5, "Expected Sprite Tera to have y-position 93 +-5");
  t.mouseMove(152, -90);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Tera").x, 126, 5, "Expected Sprite Tera to have x-position 126 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, 93, 5, "Expected Sprite Tera to have y-position 93 +-5");
  t.dragSprite('Katze', -182.65955375658817, -93.93667434194458, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Katze").x, -182.65955375658817, 5, "Expected Sprite Katze to have x-position -182.65955375658817 +-5");
  t.assert.withinRange(t.getSprite("Katze").y, -93.93667434194458, 5, "Expected Sprite Katze to have y-position -93.93667434194458 +-5");
  t.mouseMove(-1, -150);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Tera").x, 126, 5, "Expected Sprite Tera to have x-position 126 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -107, 5, "Expected Sprite Tera to have y-position -107 +-5");
  t.dragSprite('Katze', -186.5465631267186, -85.08575510110579, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Katze").x, -186.5465631267186, 5, "Expected Sprite Katze to have x-position -186.5465631267186 +-5");
  t.assert.withinRange(t.getSprite("Katze").y, -85.08575510110579, 5, "Expected Sprite Katze to have y-position -85.08575510110579 +-5");
  t.assert.withinRange(t.getSprite("Tera").x, -74, 5, "Expected Sprite Tera to have x-position -74 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -107, 5, "Expected Sprite Tera to have y-position -107 +-5");
  t.mouseDown(false);
  await t.runForSteps(1);
  t.mouseDown(true);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Katze").x, -1, 5, "Expected Sprite Katze to have x-position -1 +-5");
  t.assert.withinRange(t.getSprite("Katze").y, -150, 5, "Expected Sprite Katze to have y-position -150 +-5");
  t.assert.withinRange(t.getSprite("Tera").x, -74, 5, "Expected Sprite Tera to have x-position -74 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -7, 5, "Expected Sprite Tera to have y-position -7 +-5");
  await t.runForSteps(41);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Tera").x, 126, 5, "Expected Sprite Tera to have x-position 126 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, 93, 5, "Expected Sprite Tera to have y-position 93 +-5");
  await t.runForSteps(12);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Tera").x, 26, 5, "Expected Sprite Tera to have x-position 26 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -107, 5, "Expected Sprite Tera to have y-position -107 +-5");
  t.mouseMove(-5, 164);
  await t.runForSteps(1);
  t.mouseDown(false);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Tera").x, 26, 5, "Expected Sprite Tera to have x-position 26 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -7, 5, "Expected Sprite Tera to have y-position -7 +-5");
  t.mouseMove(198, -74);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Tera").x, 126, 5, "Expected Sprite Tera to have x-position 126 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -7, 5, "Expected Sprite Tera to have y-position -7 +-5");
  t.mouseMove(98, -175);
  await t.runForSteps(1);
  await t.runForSteps(50);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Tera").x, 26, 5, "Expected Sprite Tera to have x-position 26 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -107, 5, "Expected Sprite Tera to have y-position -107 +-5");
  await t.runForSteps(54);
  await t.runForSteps(1);
  t.mouseMove(-49, 77);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Tera").x, 126, 5, "Expected Sprite Tera to have x-position 126 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -107, 5, "Expected Sprite Tera to have y-position -107 +-5");
  t.mouseDown(true);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Katze").x, -49, 5, "Expected Sprite Katze to have x-position -49 +-5");
  t.assert.withinRange(t.getSprite("Katze").y, 77, 5, "Expected Sprite Katze to have y-position 77 +-5");
  t.assert.withinRange(t.getSprite("Tera").x, 126, 5, "Expected Sprite Tera to have x-position 126 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -7, 5, "Expected Sprite Tera to have y-position -7 +-5");
  await t.runForSteps(100);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Tera").x, -74, 5, "Expected Sprite Tera to have x-position -74 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, -107, 5, "Expected Sprite Tera to have y-position -107 +-5");
  await t.runForSteps(100);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Tera").x, -74, 5, "Expected Sprite Tera to have x-position -74 +-5");
  t.assert.withinRange(t.getSprite("Tera").y, 93, 5, "Expected Sprite Tera to have y-position 93 +-5");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936794916',
      type: 'standard',
  }
]
