const test0 = async function (t) {
  t.mouseMove(163, -33);
  await t.runForSteps(1);
  t.dragSprite('Stern', -216.89965714758847, -143.27150303775963, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Stern").x, -9, 5, "Expected Sprite Stern to have x-position -9 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 139, 5, "Expected Sprite Stern to have y-position 139 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -141, 5, "Expected Sprite Kugelfisch to have x-position -141 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.dragSprite('Qualle', -155.89343616243636, -180, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -139, 5, "Expected Sprite Kugelfisch to have x-position -139 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -155.89343616243636, 5, "Expected Sprite Qualle to have x-position -155.89343616243636 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, -180, 5, "Expected Sprite Qualle to have y-position -180 +-5");
  await t.runForSteps(19);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -99, 5, "Expected Sprite Kugelfisch to have x-position -99 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.dragSprite('Kugelfisch', -199.0956174019632, -180, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -197.0956174019632, 5, "Expected Sprite Kugelfisch to have x-position -197.0956174019632 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, -180, 5, "Expected Sprite Kugelfisch to have y-position -180 +-5");
  t.mouseMove(-202, 146);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -195.0956174019632, 5, "Expected Sprite Kugelfisch to have x-position -195.0956174019632 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, -180, 5, "Expected Sprite Kugelfisch to have y-position -180 +-5");
  t.dragSprite('Qualle', -189, -128, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -193.0956174019632, 5, "Expected Sprite Kugelfisch to have x-position -193.0956174019632 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, -180, 5, "Expected Sprite Kugelfisch to have y-position -180 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -189, 5, "Expected Sprite Qualle to have x-position -189 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, -128, 5, "Expected Sprite Qualle to have y-position -128 +-5");
  t.end();
}
const test1 = async function (t) {
  t.dragSprite('Qualle', -189, -128, null);
  await t.runForSteps(1);
  await t.runForSteps(26);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -89, 5, "Expected Sprite Kugelfisch to have x-position -89 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.dragSprite('Kugelfisch', -117.35309063670503, -117.01829983807565, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -115.35309063670503, 5, "Expected Sprite Kugelfisch to have x-position -115.35309063670503 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, -117.01829983807565, 5, "Expected Sprite Kugelfisch to have y-position -117.01829983807565 +-5");
  t.dragSprite('Kugelfisch', -240, -164.155675216343, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -238, 5, "Expected Sprite Kugelfisch to have x-position -238 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, -164.155675216343, 5, "Expected Sprite Kugelfisch to have y-position -164.155675216343 +-5");
  t.mouseMove(211, -38);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Fisch").direction, -104.8682813584982, 1, "Expected Sprite Fisch to face in direction -104.8682813584982 +-1");
  t.assert.equal(t.getSprite("Qualle").direction, 124.34205394350414, 1, "Expected Sprite Qualle to face in direction 124.34205394350414 +-1");
  t.assert.withinRange(t.getSprite("Fisch").x, 211, 5, "Expected Sprite Fisch to have x-position 211 +-5");
  t.assert.withinRange(t.getSprite("Fisch").y, -38, 5, "Expected Sprite Fisch to have y-position -38 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -236, 5, "Expected Sprite Kugelfisch to have x-position -236 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, -164.155675216343, 5, "Expected Sprite Kugelfisch to have y-position -164.155675216343 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, 51.6513689105768, 5, "Expected Sprite Qualle to have x-position 51.6513689105768 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, 70.87173552693511, 5, "Expected Sprite Qualle to have y-position 70.87173552693511 +-5");
  t.mouseMove(211, -3);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Fisch").direction, -112.79964402391056, 1, "Expected Sprite Fisch to face in direction -112.79964402391056 +-1");
  t.assert.equal(t.getSprite("Qualle").direction, 114.8717613374619, 1, "Expected Sprite Qualle to face in direction 114.8717613374619 +-1");
  t.assert.withinRange(t.getSprite("Fisch").x, 211, 5, "Expected Sprite Fisch to have x-position 211 +-5");
  t.assert.withinRange(t.getSprite("Fisch").y, -3, 5, "Expected Sprite Fisch to have y-position -3 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -234, 5, "Expected Sprite Kugelfisch to have x-position -234 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, -164.155675216343, 5, "Expected Sprite Kugelfisch to have y-position -164.155675216343 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, 53.465871740246776, 5, "Expected Sprite Qualle to have x-position 53.465871740246776 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, 70.03055808957743, 5, "Expected Sprite Qualle to have y-position 70.03055808957743 +-5");
  t.dragSprite('Kugelfisch', 211, -3, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kugelfisch").x, 213, 5, "Expected Sprite Kugelfisch to have x-position 213 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, -3, 5, "Expected Sprite Kugelfisch to have y-position -3 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, 55.28037456991675, 5, "Expected Sprite Qualle to have x-position 55.28037456991675 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, 69.18938065221974, 5, "Expected Sprite Qualle to have y-position 69.18938065221974 +-5");
  t.end();
}
const test2 = async function (t) {
  t.dragSprite('Qualle', -217.49586445345057, -61.85224849979876, null);
  await t.runForSteps(1);
  t.mouseMove(183, -71);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -141, 5, "Expected Sprite Kugelfisch to have x-position -141 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.dragSprite('Kugelfisch', -122.73141166622987, -156.55291420581375, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -120.73141166622987, 5, "Expected Sprite Kugelfisch to have x-position -120.73141166622987 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, -156.55291420581375, 5, "Expected Sprite Kugelfisch to have y-position -156.55291420581375 +-5");
  t.mouseMove(-179, -87);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -118.73141166622987, 5, "Expected Sprite Kugelfisch to have x-position -118.73141166622987 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, -156.55291420581375, 5, "Expected Sprite Kugelfisch to have y-position -156.55291420581375 +-5");
  await t.runForSteps(79);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Fisch").direction, 93.83726211732765, 1, "Expected Sprite Fisch to face in direction 93.83726211732765 +-1");
  t.assert.equal(t.getSprite("Kugelfisch").direction, 180, 1, "Expected Sprite Kugelfisch to face in direction 180 +-1");
  t.assert.equal(t.getSprite("Qualle").direction, -124.77314229365865, 1, "Expected Sprite Qualle to face in direction -124.77314229365865 +-1");
  t.assert.withinRange(t.getSprite("Fisch").x, -179, 5, "Expected Sprite Fisch to have x-position -179 +-5");
  t.assert.withinRange(t.getSprite("Fisch").y, -87, 5, "Expected Sprite Fisch to have y-position -87 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, 13.268588333770126, 5, "Expected Sprite Kugelfisch to have x-position 13.268588333770126 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, -182.55291420581375, 5, "Expected Sprite Kugelfisch to have y-position -182.55291420581375 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -38.71299754955364, 5, "Expected Sprite Qualle to have x-position -38.71299754955364 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, 10.404512618432108, 5, "Expected Sprite Qualle to have y-position 10.404512618432108 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").size, 70, 1, "Expected Sprite Kugelfisch to have size 70 +-1");
  t.dragSprite('Qualle', -214.27890144205344, -145.8673472573762, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Qualle").direction, 30.93404228263836, 1, "Expected Sprite Qualle to face in direction 30.93404228263836 +-1");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, 13.268588333770126, 5, "Expected Sprite Kugelfisch to have x-position 13.268588333770126 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, -184.55291420581375, 5, "Expected Sprite Kugelfisch to have y-position -184.55291420581375 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -213.25079948089947, 5, "Expected Sprite Qualle to have x-position -213.25079948089947 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, -144.15182798978654, 5, "Expected Sprite Qualle to have y-position -144.15182798978654 +-5");
  t.dragSprite('Qualle', -198.27087339427152, -14.180726733218265, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Qualle").direction, 165.17706172369134, 1, "Expected Sprite Qualle to face in direction 165.17706172369134 +-1");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, 13.268588333770126, 5, "Expected Sprite Kugelfisch to have x-position 13.268588333770126 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, -186.55291420581375, 5, "Expected Sprite Kugelfisch to have y-position -186.55291420581375 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -197.75920778688018, 5, "Expected Sprite Qualle to have x-position -197.75920778688018 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, -16.114168820846665, 5, "Expected Sprite Qualle to have y-position -16.114168820846665 +-5");
  t.dragSprite('Qualle', -209.84349172654242, -23.106140545458622, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Qualle").direction, 154.2319957830847, 1, "Expected Sprite Qualle to face in direction 154.2319957830847 +-1");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, 13.268588333770126, 5, "Expected Sprite Kugelfisch to have x-position 13.268588333770126 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, -188.55291420581375, 5, "Expected Sprite Kugelfisch to have y-position -188.55291420581375 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -208.9740351966656, 5, "Expected Sprite Qualle to have x-position -208.9740351966656 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, -24.907263901215952, 5, "Expected Sprite Qualle to have y-position -24.907263901215952 +-5");
  await t.runForSteps(72);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Qualle").direction, 154.23199578308464, 1, "Expected Sprite Qualle to face in direction 154.23199578308464 +-1");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, 13.268588333770126, 5, "Expected Sprite Kugelfisch to have x-position 13.268588333770126 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, -206.55291420581375, 5, "Expected Sprite Kugelfisch to have y-position -206.55291420581375 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -201.14892642777414, 5, "Expected Sprite Qualle to have x-position -201.14892642777414 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, -41.1173741030319, 5, "Expected Sprite Qualle to have y-position -41.1173741030319 +-5");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849531579',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849531579',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849531579',
      type: 'standard',
  }
]
