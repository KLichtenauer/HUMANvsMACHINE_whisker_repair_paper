const test0 = async function (t) {
  t.dragSprite('Aus-Linie Spieler', -57.275637355817, -180, null);
  await t.runForSteps(1);
  t.dragSprite('Aus-Linie Spieler', -90.0218523992662, 103.38178821088896, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Ball").x, -82.02411907401665, 5, "Expected Sprite Ball to have x-position -82.02411907401665 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, 8.767422935781548, 5, "Expected Sprite Ball to have y-position 8.767422935781548 +-5");
  t.assert.withinRange(t.getSprite("Aus-Linie Spieler").x, -62, 5, "Expected Sprite Aus-Linie Spieler to have x-position -62 +-5");
  t.assert.withinRange(t.getSprite("Aus-Linie Spieler").y, 103.38178821088896, 5, "Expected Sprite Aus-Linie Spieler to have y-position 103.38178821088896 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 4.533333333333333, 5, "Expected Sprite Computer to have y-position 4.533333333333333 +-5");
  t.keyPress('up arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Ball").x, -55.06029768504163, 5, "Expected Sprite Ball to have x-position -55.06029768504163 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, 21.91855733945387, 5, "Expected Sprite Ball to have y-position 21.91855733945387 +-5");
  t.assert.withinRange(t.getSprite("Spieler").x, -210, 5, "Expected Sprite Spieler to have x-position -210 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -59, 5, "Expected Sprite Spieler to have y-position -59 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 18.133333333333333, 5, "Expected Sprite Computer to have y-position 18.133333333333333 +-5");
  t.dragSprite('Aus-Linie Computer', -55.56337160619711, -180, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Ball").x, -46.07235722204996, 5, "Expected Sprite Ball to have x-position -46.07235722204996 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, 26.302268807344642, 5, "Expected Sprite Ball to have y-position 26.302268807344642 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 22.666666666666664, 5, "Expected Sprite Computer to have y-position 22.666666666666664 +-5");
  t.assert.withinRange(t.getSprite("Aus-Linie Computer").x, -26, 5, "Expected Sprite Aus-Linie Computer to have x-position -26 +-5");
  t.assert.withinRange(t.getSprite("Aus-Linie Computer").y, -180, 5, "Expected Sprite Aus-Linie Computer to have y-position -180 +-5");
  t.dragSprite('Aus-Linie Spieler', -46.99619469809175, 67.66044503338063, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Ball").x, -37.084416759058286, 5, "Expected Sprite Ball to have x-position -37.084416759058286 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, 30.685980275235416, 5, "Expected Sprite Ball to have y-position 30.685980275235416 +-5");
  t.assert.withinRange(t.getSprite("Aus-Linie Spieler").x, -46.99619469809175, 5, "Expected Sprite Aus-Linie Spieler to have x-position -46.99619469809175 +-5");
  t.assert.withinRange(t.getSprite("Aus-Linie Spieler").y, 67.66044503338063, 5, "Expected Sprite Aus-Linie Spieler to have y-position 67.66044503338063 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 27.200000000000003, 5, "Expected Sprite Computer to have y-position 27.200000000000003 +-5");
  t.clickSprite('Reset-Button', 1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Ball").x, -28.096476296066616, 5, "Expected Sprite Ball to have x-position -28.096476296066616 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, 35.06969174312619, 5, "Expected Sprite Ball to have y-position 35.06969174312619 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 31.733333333333334, 5, "Expected Sprite Computer to have y-position 31.733333333333334 +-5");
  t.dragSprite('Aus-Linie Spieler', -28, 35, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Ball").x, -19.108535833074946, 5, "Expected Sprite Ball to have x-position -19.108535833074946 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, 39.45340321101697, 5, "Expected Sprite Ball to have y-position 39.45340321101697 +-5");
  t.assert.withinRange(t.getSprite("Aus-Linie Spieler").x, -28, 5, "Expected Sprite Aus-Linie Spieler to have x-position -28 +-5");
  t.assert.withinRange(t.getSprite("Aus-Linie Spieler").y, 35, 5, "Expected Sprite Aus-Linie Spieler to have y-position 35 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 36.266666666666666, 5, "Expected Sprite Computer to have y-position 36.266666666666666 +-5");
  t.dragSprite('Ball', -240, -1.610910238655137, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.equal(t.getSprite("Ball").direction, -64, 1, "Expected Sprite Ball to face in direction -64 +-1");
  t.assert.withinRange(t.getSprite("Ball").x, -216.4287668790073, 5, "Expected Sprite Ball to have x-position -216.4287668790073 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, 11.540224165017182, 5, "Expected Sprite Ball to have y-position 11.540224165017182 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 40.8, 5, "Expected Sprite Computer to have y-position 40.8 +-5");
  t.dragSprite('Ball', 150.95047282130548, 75.89029949425895, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Ball").x, 141.9625323583138, 5, "Expected Sprite Ball to have x-position 141.9625323583138 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, 80.27401096214973, 5, "Expected Sprite Ball to have y-position 80.27401096214973 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 45.33333333333333, 5, "Expected Sprite Computer to have y-position 45.33333333333333 +-5");
  t.dragSprite('Ball', 240, 91.19029170916255, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Ball").direction, 64, 1, "Expected Sprite Ball to face in direction 64 +-1");
  t.assert.withinRange(t.getSprite("Ball").x, 215.80810037510105, 5, "Expected Sprite Ball to have x-position 215.80810037510105 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, 104.34142611283488, 5, "Expected Sprite Ball to have y-position 104.34142611283488 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 49.86666666666666, 5, "Expected Sprite Computer to have y-position 49.86666666666666 +-5");
  t.keyPress('down arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Ball").x, 215.6162007502021, 5, "Expected Sprite Ball to have x-position 215.6162007502021 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, 117.49256051650721, 5, "Expected Sprite Ball to have y-position 117.49256051650721 +-5");
  t.assert.withinRange(t.getSprite("Spieler").x, -210, 5, "Expected Sprite Spieler to have x-position -210 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -74, 5, "Expected Sprite Spieler to have y-position -74 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 54.400000000000006, 5, "Expected Sprite Computer to have y-position 54.400000000000006 +-5");
  t.clickSprite('Reset-Button', 1);
  await t.runForSteps(1);
  t.clickSprite('Reset-Button', 1);
  await t.runForSteps(1);
  t.clickSprite('Reset-Button', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.clickSprite('Reset-Button', 1);
  await t.runForSteps(1);
  t.clickSprite('Reset-Button', 1);
  await t.runForSteps(1);
  t.clickSprite('Reset-Button', 1);
  await t.runForSteps(1);
  await t.runForSteps(73);
  await t.runForSteps(1);
  t.clickSprite('Reset-Button', 1);
  await t.runForSteps(1);
  await t.runForSteps(97);
  await t.runForSteps(1);
  await t.runForSteps(73);
  await t.runForSteps(1);
  await t.runForSteps(65);
  await t.runForSteps(1);
  t.clickSprite('Reset-Button', 1);
  await t.runForSteps(1);
  t.clickSprite('Reset-Button', 1);
  await t.runForSteps(1);
  t.clickSprite('Reset-Button', 1);
  await t.runForSteps(1);
  t.clickSprite('Reset-Button', 1);
  await t.runForSteps(1);
  t.clickSprite('Reset-Button', 1);
  await t.runForSteps(1);
  await t.runForSteps(66);
  await t.runForSteps(1);
  await t.runForSteps(97);
  await t.runForSteps(1);
  await t.runForSteps(9);
  await t.runForSteps(1);
  await t.runForSteps(9);
  await t.runForSteps(1);
  await t.runForSteps(95);
  await t.runForSteps(1);
  t.clickSprite('Reset-Button', 1);
  await t.runForSteps(1);
  t.clickSprite('Reset-Button', 1);
  await t.runForSteps(1);
  t.clickSprite('Reset-Button', 1);
  await t.runForSteps(1);
  await t.runForSteps(31);
  await t.runForSteps(1);
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(32);
  await t.runForSteps(1);
  t.dragSprite('Ball', 194.26083261159775, 180, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.equal(t.getSprite("Ball").direction, 116, 1, "Expected Sprite Ball to face in direction 116 +-1");
  t.assert.withinRange(t.getSprite("Ball").x, 203.24877307458942, 5, "Expected Sprite Ball to have x-position 203.24877307458942 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, 132.4303933062886, 5, "Expected Sprite Ball to have y-position 132.4303933062886 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 108.8, 5, "Expected Sprite Computer to have y-position 108.8 +-5");
  t.dragSprite('Ball', -240, -137.71934492798675, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Ball").direction, -116, 1, "Expected Sprite Ball to face in direction -116 +-1");
  t.assert.withinRange(t.getSprite("Ball").x, -215.80810037510105, 5, "Expected Sprite Ball to have x-position -215.80810037510105 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, -150.87047933165908, 5, "Expected Sprite Ball to have y-position -150.87047933165908 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 99.73333333333333, 5, "Expected Sprite Computer to have y-position 99.73333333333333 +-5");
  t.dragSprite('Ball', 153.67991713526357, 139.29273988972977, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Ball").x, 144.6919766722719, 5, "Expected Sprite Ball to have x-position 144.6919766722719 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, 134.909028421839, 5, "Expected Sprite Ball to have y-position 134.909028421839 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 90.66666666666667, 5, "Expected Sprite Computer to have y-position 90.66666666666667 +-5");
  t.dragSprite('Aus-Linie Computer', 144, 134, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Ball").x, 135.70403620928022, 5, "Expected Sprite Ball to have x-position 135.70403620928022 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, 130.52531695394822, 5, "Expected Sprite Ball to have y-position 130.52531695394822 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 81.6, 5, "Expected Sprite Computer to have y-position 81.6 +-5");
  t.assert.withinRange(t.getSprite("Aus-Linie Computer").x, 144, 5, "Expected Sprite Aus-Linie Computer to have x-position 144 +-5");
  t.assert.withinRange(t.getSprite("Aus-Linie Computer").y, 134, 5, "Expected Sprite Aus-Linie Computer to have y-position 134 +-5");
  await t.runForSteps(5);
  await t.runForSteps(1);
  t.clickSprite('Reset-Button', 1);
  await t.runForSteps(1);
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849415196',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849415196',
      type: 'standard',
  }
]
