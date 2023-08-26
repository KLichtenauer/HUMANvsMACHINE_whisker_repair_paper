const test0 = async function (t) {
  t.clickSprite('Reset-Button', 1);
  await t.runForSteps(1);
  t.dragSprite('Aus-Linie Computer', -94, 8, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Ball").x, -89.10721929969947, 5, "Expected Sprite Ball to have x-position -89.10721929969947 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, 16.77341135890848, 5, "Expected Sprite Ball to have y-position 16.77341135890848 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 4.533333333333333, 5, "Expected Sprite Computer to have y-position 4.533333333333333 +-5");
  t.assert.withinRange(t.getSprite("Aus-Linie Computer").x, -26, 5, "Expected Sprite Aus-Linie Computer to have x-position -26 +-5");
  t.assert.withinRange(t.getSprite("Aus-Linie Computer").y, 8, 5, "Expected Sprite Aus-Linie Computer to have y-position 8 +-5");
  await t.runForSteps(200);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.equal(t.getSprite("Ball").direction, -33.000000000000014, 1, "Expected Sprite Ball to face in direction -33.000000000000014 +-1");
  t.assert.withinRange(t.getSprite("Ball").x, -191.13354809263853, 5, "Expected Sprite Ball to have x-position -191.13354809263853 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, 11.877735699728824, 5, "Expected Sprite Ball to have y-position 11.877735699728824 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, -36.26666666666668, 5, "Expected Sprite Computer to have y-position -36.26666666666668 +-5");
  t.end();
}
const test1 = async function (t) {
  t.keyPress('down arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.clickSprite('Reset-Button', 1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Ball").x, -83.6608289495492, 5, "Expected Sprite Ball to have x-position -83.6608289495492 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, 25.16011703836272, 5, "Expected Sprite Ball to have y-position 25.16011703836272 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 9.066666666666666, 5, "Expected Sprite Computer to have y-position 9.066666666666666 +-5");
  t.keyPress('up arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Ball").x, -61.87526754894812, 5, "Expected Sprite Ball to have x-position -61.87526754894812 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, 58.70693975617967, 5, "Expected Sprite Ball to have y-position 58.70693975617967 +-5");
  t.assert.withinRange(t.getSprite("Spieler").x, -210, 5, "Expected Sprite Spieler to have x-position -210 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -59, 5, "Expected Sprite Spieler to have y-position -59 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 27.200000000000003, 5, "Expected Sprite Computer to have y-position 27.200000000000003 +-5");
  t.clickSprite('Reset-Button', 1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Ball").x, -56.42887719879785, 5, "Expected Sprite Ball to have x-position -56.42887719879785 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, 67.09364543563392, 5, "Expected Sprite Ball to have y-position 67.09364543563392 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 31.733333333333334, 5, "Expected Sprite Computer to have y-position 31.733333333333334 +-5");
  t.keyPress('down arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Ball").x, -40.08970614834703, 5, "Expected Sprite Ball to have x-position -40.08970614834703 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, 92.25376247399663, 5, "Expected Sprite Ball to have y-position 92.25376247399663 +-5");
  t.assert.withinRange(t.getSprite("Spieler").x, -210, 5, "Expected Sprite Spieler to have x-position -210 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -89, 5, "Expected Sprite Spieler to have y-position -89 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 45.33333333333333, 5, "Expected Sprite Computer to have y-position 45.33333333333333 +-5");
  t.dragSprite('Aus-Linie Spieler', -39, 92, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Ball").x, -34.64331579819675, 5, "Expected Sprite Ball to have x-position -34.64331579819675 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, 100.64046815345087, 5, "Expected Sprite Ball to have y-position 100.64046815345087 +-5");
  t.assert.withinRange(t.getSprite("Aus-Linie Spieler").x, -39, 5, "Expected Sprite Aus-Linie Spieler to have x-position -39 +-5");
  t.assert.withinRange(t.getSprite("Aus-Linie Spieler").y, 92, 5, "Expected Sprite Aus-Linie Spieler to have y-position 92 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 49.86666666666666, 5, "Expected Sprite Computer to have y-position 49.86666666666666 +-5");
  t.dragSprite('Ball', 158.4927896226055, 95.8837267970334, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Ball").x, 163.93917997275577, 5, "Expected Sprite Ball to have x-position 163.93917997275577 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, 104.27043247648764, 5, "Expected Sprite Ball to have y-position 104.27043247648764 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 54.400000000000006, 5, "Expected Sprite Computer to have y-position 54.400000000000006 +-5");
  t.keyPress('down arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Ball").direction, -147, 1, "Expected Sprite Ball to face in direction -147 +-1");
  t.assert.withinRange(t.getSprite("Ball").x, 136.70722822200443, 5, "Expected Sprite Ball to have x-position 136.70722822200443 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, 129.2890089875066, 5, "Expected Sprite Ball to have y-position 129.2890089875066 +-5");
  t.assert.withinRange(t.getSprite("Spieler").x, -210, 5, "Expected Sprite Spieler to have x-position -210 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -149, 5, "Expected Sprite Spieler to have y-position -149 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 77.06666666666666, 5, "Expected Sprite Computer to have y-position 77.06666666666666 +-5");
  t.keyPress('up arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Ball").x, 125.8144475217039, 5, "Expected Sprite Ball to have x-position 125.8144475217039 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, 112.51559762859813, 5, "Expected Sprite Ball to have y-position 112.51559762859813 +-5");
  t.assert.withinRange(t.getSprite("Spieler").x, -210, 5, "Expected Sprite Spieler to have x-position -210 +-5");
  t.assert.withinRange(t.getSprite("Spieler").y, -134, 5, "Expected Sprite Spieler to have y-position -134 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 86.13333333333333, 5, "Expected Sprite Computer to have y-position 86.13333333333333 +-5");
  t.clickSprite('Reset-Button', 1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Ball").x, 120.36805717155363, 5, "Expected Sprite Ball to have x-position 120.36805717155363 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, 104.12889194914389, 5, "Expected Sprite Ball to have y-position 104.12889194914389 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 90.66666666666666, 5, "Expected Sprite Computer to have y-position 90.66666666666666 +-5");
  t.dragSprite('Ball', 240, 106.32773826941849, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.equal(t.getSprite("Ball").direction, 147, 1, "Expected Sprite Ball to face in direction 147 +-1");
  t.assert.withinRange(t.getSprite("Ball").x, 212.08649655132214, 5, "Expected Sprite Ball to have x-position 212.08649655132214 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, 81.16762123105578, 5, "Expected Sprite Ball to have y-position 81.16762123105578 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 95.19999999999999, 5, "Expected Sprite Computer to have y-position 95.19999999999999 +-5");
  t.dragSprite('Aus-Linie Spieler', 212.61566147532565, 180, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Ball").x, 212.17299310264428, 5, "Expected Sprite Ball to have x-position 212.17299310264428 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, 56.00750419269306, 5, "Expected Sprite Ball to have y-position 56.00750419269306 +-5");
  t.assert.withinRange(t.getSprite("Aus-Linie Spieler").x, 212.61566147532565, 5, "Expected Sprite Aus-Linie Spieler to have x-position 212.61566147532565 +-5");
  t.assert.withinRange(t.getSprite("Aus-Linie Spieler").y, 180, 5, "Expected Sprite Aus-Linie Spieler to have y-position 180 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 99.73333333333332, 5, "Expected Sprite Computer to have y-position 99.73333333333332 +-5");
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Ball").direction, -147, 1, "Expected Sprite Ball to face in direction -147 +-1");
  t.assert.withinRange(t.getSprite("Ball").x, 201.45320550498803, 5, "Expected Sprite Ball to have x-position 201.45320550498803 +-5");
  t.assert.withinRange(t.getSprite("Ball").y, 22.460681474876104, 5, "Expected Sprite Ball to have y-position 22.460681474876104 +-5");
  t.assert.withinRange(t.getSprite("Computer").x, 207, 5, "Expected Sprite Computer to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Computer").y, 108.80000000000001, 5, "Expected Sprite Computer to have y-position 108.80000000000001 +-5");
  await t.runForSteps(44);
  await t.runForSteps(1);
  t.clickSprite('Reset-Button', 1);
  await t.runForSteps(1);
  await t.runForSteps(89);
  await t.runForSteps(1);
  t.clickSprite('Reset-Button', 1);
  await t.runForSteps(1);
  await t.runForSteps(93);
  await t.runForSteps(1);
  t.clickSprite('Reset-Button', 1);
  await t.runForSteps(1);
  t.clickSprite('Reset-Button', 1);
  await t.runForSteps(1);
  await t.runForSteps(37);
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
      seed: '1687938381978',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938381978',
      type: 'standard',
  }
]
