const test0 = async function (t) {
  t.keyPress('down arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.dragSprite('Aus-Linie Spieler', -82.89547153673234, -180, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Ball").x, -78.21443859939893, 5, "Expected Sprite Ball to have x-position -78.21443859939893 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, 33.54682271781696, 5, "Expected Sprite Ball to have y-position 33.54682271781696 +-5");
  t.assert.withinRange(t.getSprite("Aus-Linie Spieler").x, -62, 5, "Expected Sprite Aus-Linie Spieler to have x-position -62 +-5");
  t.assert.withinRange(t.getSprite("Aus-Linie Spieler").y, -180, 5, "Expected Sprite Aus-Linie Spieler to have y-position -180 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 13.600000000000001, 5, "Expected Sprite Computer to have y-position 13.600000000000001 +-5");
  t.dragSprite('Aus-Linie Computer', -79.19106749801148, 102.90425240186687, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Ball").x, -72.76804824924866, 5, "Expected Sprite Ball to have x-position -72.76804824924866 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, 41.933528397271196, 5, "Expected Sprite Ball to have y-position 41.933528397271196 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 18.133333333333333, 5, "Expected Sprite Computer to have y-position 18.133333333333333 +-5");
  t.assert.withinRange(t.getSprite("Aus-Linie Computer").x, -26, 5, "Expected Sprite Aus-Linie Computer to have x-position -26 +-5");
  t.assert.withinRange(t.getSprite("Aus-Linie Computer").y, 102.90425240186687, 5, "Expected Sprite Aus-Linie Computer to have y-position 102.90425240186687 +-5");
  t.dragSprite('Aus-Linie Spieler', -72.24192189559967, 180, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Ball").x, -67.3216578990984, 5, "Expected Sprite Ball to have x-position -67.3216578990984 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, 50.320234076725434, 5, "Expected Sprite Ball to have y-position 50.320234076725434 +-5");
  t.assert.withinRange(t.getSprite("Aus-Linie Spieler").x, -62, 5, "Expected Sprite Aus-Linie Spieler to have x-position -62 +-5");
  t.assert.withinRange(t.getSprite("Aus-Linie Spieler").y, 180, 5, "Expected Sprite Aus-Linie Spieler to have y-position 180 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 22.666666666666664, 5, "Expected Sprite Computer to have y-position 22.666666666666664 +-5");
  t.dragSprite('Ball', 207, 22, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Ball").x, 211.4550878599159, 5, "Expected Sprite Ball to have x-position 211.4550878599159 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, 47.16011703836272, 5, "Expected Sprite Ball to have y-position 47.16011703836272 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 27.200000000000003, 5, "Expected Sprite Computer to have y-position 27.200000000000003 +-5");
  t.dragSprite('Aus-Linie Spieler', 211, 47, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Ball").x, 211.91017571983178, 5, "Expected Sprite Ball to have x-position 211.91017571983178 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, 72.32023407672544, 5, "Expected Sprite Ball to have y-position 72.32023407672544 +-5");
  t.assert.withinRange(t.getSprite("Aus-Linie Spieler").x, 211, 5, "Expected Sprite Aus-Linie Spieler to have x-position 211 +-5");
  t.assert.withinRange(t.getSprite("Aus-Linie Spieler").y, 47, 5, "Expected Sprite Aus-Linie Spieler to have y-position 47 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 31.733333333333334, 5, "Expected Sprite Computer to have y-position 31.733333333333334 +-5");
  t.keyPress('up arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Ball").direction, -33.000000000000014, 1, "Expected Sprite Ball to face in direction -33.000000000000014 +-1");
  t.assert.withinRange(t.getSprite("Ball").x, 194.93626824912866, 5, "Expected Sprite Ball to have x-position 194.93626824912866 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, 139.41387951235936, 5, "Expected Sprite Ball to have y-position 139.41387951235936 +-5");
  t.assert.withinRange(t.getSprite("Spieler").x, -210, 5, "Expected Sprite Spieler to have x-position -210 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -74, 5, "Expected Sprite Spieler to have y-position -74 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 49.86666666666666, 5, "Expected Sprite Computer to have y-position 49.86666666666666 +-5");
  await t.runForSteps(34);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Ball").x, 87.09495779744546, 5, "Expected Sprite Ball to have x-position 87.09495779744546 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, -71.49962734216071, 5, "Expected Sprite Ball to have y-position -71.49962734216071 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, -9.066666666666663, 5, "Expected Sprite Computer to have y-position -9.066666666666663 +-5");
  t.keyPress('down arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Ball").x, 76.20217709714493, 5, "Expected Sprite Ball to have x-position 76.20217709714493 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, -54.72621598325223, 5, "Expected Sprite Ball to have y-position -54.72621598325223 +-5");
  t.assert.withinRange(t.getSprite("Spieler").x, -210, 5, "Expected Sprite Spieler to have x-position -210 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -89, 5, "Expected Sprite Spieler to have y-position -89 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, -27.19999999999999, 5, "Expected Sprite Computer to have y-position -27.19999999999999 +-5");
  t.keyPress('up arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.withinRange(t.getSprite("Ball").x, 65.30939639684439, 5, "Expected Sprite Ball to have x-position 65.30939639684439 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, -37.952804624343756, 5, "Expected Sprite Ball to have y-position -37.952804624343756 +-5");
  t.assert.withinRange(t.getSprite("Spieler").x, -210, 5, "Expected Sprite Spieler to have x-position -210 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -74, 5, "Expected Sprite Spieler to have y-position -74 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, -45.333333333333314, 5, "Expected Sprite Computer to have y-position -45.333333333333314 +-5");
  t.dragSprite('Aus-Linie Computer', 65.97083026894568, 180, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Ball").x, 59.863006046694125, 5, "Expected Sprite Ball to have x-position 59.863006046694125 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, -29.566098944889514, 5, "Expected Sprite Ball to have y-position -29.566098944889514 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, -54.39999999999998, 5, "Expected Sprite Computer to have y-position -54.39999999999998 +-5");
  t.assert.withinRange(t.getSprite("Aus-Linie Computer").x, 65.97083026894568, 5, "Expected Sprite Aus-Linie Computer to have x-position 65.97083026894568 +-5");
  t.assert.withinRange(t.getSprite("Aus-Linie Computer").y, 180, 5, "Expected Sprite Aus-Linie Computer to have y-position 180 +-5");
  t.dragSprite('Aus-Linie Computer', 59.04187982206225, 180, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Ball").x, 54.41661569654386, 5, "Expected Sprite Ball to have x-position 54.41661569654386 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, -21.179393265435273, 5, "Expected Sprite Ball to have y-position -21.179393265435273 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, -63.46666666666664, 5, "Expected Sprite Computer to have y-position -63.46666666666664 +-5");
  t.assert.withinRange(t.getSprite("Aus-Linie Computer").x, 59.04187982206225, 5, "Expected Sprite Aus-Linie Computer to have x-position 59.04187982206225 +-5");
  t.assert.withinRange(t.getSprite("Aus-Linie Computer").y, 180, 5, "Expected Sprite Aus-Linie Computer to have y-position 180 +-5");
  t.keyPress('up arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Ball").x, 48.97022534639359, 5, "Expected Sprite Ball to have x-position 48.97022534639359 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, -12.792687585981032, 5, "Expected Sprite Ball to have y-position -12.792687585981032 +-5");
  t.assert.withinRange(t.getSprite("Spieler").x, -210, 5, "Expected Sprite Spieler to have x-position -210 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -59, 5, "Expected Sprite Spieler to have y-position -59 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, -72.53333333333336, 5, "Expected Sprite Computer to have y-position -72.53333333333336 +-5");
  t.clickSprite('Reset-Button', 1);
  await t.runForSteps(1);
  await t.runForSteps(25);
  await t.runForSteps(1);
  t.clickSprite('Reset-Button', 1);
  await t.runForSteps(1);
  await t.runForSteps(68);
  await t.runForSteps(1);
  t.clickSprite('Reset-Button', 1);
  await t.runForSteps(1);
  await t.runForSteps(23);
  await t.runForSteps(1);
  await t.runForSteps(37);
  await t.runForSteps(1);
  await t.runForSteps(44);
  await t.runForSteps(1);
  t.end();
}
const test1 = async function (t) {
  t.dragSprite('Ball', -193.88242159508053, -154.36636062216442, null);
  await t.runForSteps(1);
  t.dragSprite('Ball', 207, 0, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.withinRange(t.getSprite("Ball").x, 211.4550878599159, 5, "Expected Sprite Ball to have x-position 211.4550878599159 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, 25.16011703836272, 5, "Expected Sprite Ball to have y-position 25.16011703836272 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 4.533333333333333, 5, "Expected Sprite Computer to have y-position 4.533333333333333 +-5");
  t.dragSprite('Aus-Linie Spieler', 210.28066019966136, 180, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Ball").x, 211.91017571983178, 5, "Expected Sprite Ball to have x-position 211.91017571983178 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, 50.32023407672544, 5, "Expected Sprite Ball to have y-position 50.32023407672544 +-5");
  t.assert.withinRange(t.getSprite("Aus-Linie Spieler").x, 210.28066019966136, 5, "Expected Sprite Aus-Linie Spieler to have x-position 210.28066019966136 +-5");
  t.assert.withinRange(t.getSprite("Aus-Linie Spieler").y, 180, 5, "Expected Sprite Aus-Linie Spieler to have y-position 180 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 9.066666666666666, 5, "Expected Sprite Computer to have y-position 9.066666666666666 +-5");
  await t.runForSteps(22);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Ball").x, 211.82035143966357, 5, "Expected Sprite Ball to have x-position 211.82035143966357 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, 100.64046815345087, 5, "Expected Sprite Ball to have y-position 100.64046815345087 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 18.133333333333333, 5, "Expected Sprite Computer to have y-position 18.133333333333333 +-5");
  await t.runForSteps(46);
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
      seed: '1687939134371',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687939134371',
      type: 'standard',
  }
]
