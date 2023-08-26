const test0 = async function (t) {
  t.mouseMove(133, -94);
  await t.runForSteps(1);
  t.dragSprite('Stern', -159.42358931083393, -116.19989230739877, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Stern").x, 181, 5, "Expected Sprite Stern to have x-position 181 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, -108, 5, "Expected Sprite Stern to have y-position -108 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -141, 5, "Expected Sprite Kugelfisch to have x-position -141 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.dragSprite('Qualle', -149.6722054556262, -74.80412791512512, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -139, 5, "Expected Sprite Kugelfisch to have x-position -139 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -149.6722054556262, 5, "Expected Sprite Qualle to have x-position -149.6722054556262 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, -74.80412791512512, 5, "Expected Sprite Qualle to have y-position -74.80412791512512 +-5");
  t.dragSprite('Stern', -218.14136966389327, -115.1877957431123, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Stern").x, -53, 5, "Expected Sprite Stern to have x-position -53 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 177, 5, "Expected Sprite Stern to have y-position 177 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -137, 5, "Expected Sprite Kugelfisch to have x-position -137 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  await t.runForSteps(82);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Fisch").direction, -34.46363441998557, 1, "Expected Sprite Fisch to face in direction -34.46363441998557 +-1");
  t.assert.equal(t.getSprite("Kugelfisch").direction, 180, 1, "Expected Sprite Kugelfisch to face in direction 180 +-1");
  t.assert.equal(t.getSprite("Qualle").direction, 93.88491130903708, 1, "Expected Sprite Qualle to face in direction 93.88491130903708 +-1");
  t.assert.withinRange(t.getSprite("Fisch").x, 133, 5, "Expected Sprite Fisch to have x-position 133 +-5");
  t.assert.withinRange(t.getSprite("Fisch").y, -94, 5, "Expected Sprite Fisch to have y-position -94 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -5, 5, "Expected Sprite Kugelfisch to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 48, 5, "Expected Sprite Kugelfisch to have y-position 48 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -13.186550530494202, 5, "Expected Sprite Qualle to have x-position -13.186550530494202 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, -84.07267686616285, 5, "Expected Sprite Qualle to have y-position -84.07267686616285 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").size, 70, 1, "Expected Sprite Kugelfisch to have size 70 +-1");
  t.dragSprite('Kugelfisch', 213.01923084915873, -67.3359673426953, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Qualle").direction, 93.8849113090371, 1, "Expected Sprite Qualle to face in direction 93.8849113090371 +-1");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, 213.01923084915873, 5, "Expected Sprite Kugelfisch to have x-position 213.01923084915873 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, -69.3359673426953, 5, "Expected Sprite Kugelfisch to have y-position -69.3359673426953 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -10.79206535636908, 5, "Expected Sprite Qualle to have x-position -10.79206535636908 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, -84.23528298811088, 5, "Expected Sprite Qualle to have y-position -84.23528298811088 +-5");
  t.dragSprite('Stern', 101.68689269682928, -87.98951664563883, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Fisch").direction, -79.13435690525924, 1, "Expected Sprite Fisch to face in direction -79.13435690525924 +-1");
  t.assert.equal(t.getSprite("Qualle").direction, 93.88491130903708, 1, "Expected Sprite Qualle to face in direction 93.88491130903708 +-1");
  t.assert.withinRange(t.getSprite("Stern").x, -201, 5, "Expected Sprite Stern to have x-position -201 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 23, 5, "Expected Sprite Stern to have y-position 23 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, 213.01923084915873, 5, "Expected Sprite Kugelfisch to have x-position 213.01923084915873 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, -71.3359673426953, 5, "Expected Sprite Kugelfisch to have y-position -71.3359673426953 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -8.397580182243956, 5, "Expected Sprite Qualle to have x-position -8.397580182243956 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, -84.3978891100589, 5, "Expected Sprite Qualle to have y-position -84.3978891100589 +-5");
  t.dragSprite('Stern', 122.61463618426832, -123.78383558223688, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Fisch").direction, -160.77678192120828, 1, "Expected Sprite Fisch to face in direction -160.77678192120828 +-1");
  t.assert.equal(t.getSprite("Qualle").direction, 93.8849113090371, 1, "Expected Sprite Qualle to face in direction 93.8849113090371 +-1");
  t.assert.withinRange(t.getSprite("Stern").x, 115, 5, "Expected Sprite Stern to have x-position 115 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 143, 5, "Expected Sprite Stern to have y-position 143 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, 213.01923084915873, 5, "Expected Sprite Kugelfisch to have x-position 213.01923084915873 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, -73.3359673426953, 5, "Expected Sprite Kugelfisch to have y-position -73.3359673426953 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -5.803554576941739, 5, "Expected Sprite Qualle to have x-position -5.803554576941739 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, -84.57404574216926, 5, "Expected Sprite Qualle to have y-position -84.57404574216926 +-5");
  t.dragSprite('Stern', 133, -94, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Fisch").direction, 90, 1, "Expected Sprite Fisch to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Qualle").direction, 93.88491130903708, 1, "Expected Sprite Qualle to face in direction 93.88491130903708 +-1");
  t.assert.withinRange(t.getSprite("Stern").x, 204, 5, "Expected Sprite Stern to have x-position 204 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 157, 5, "Expected Sprite Stern to have y-position 157 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, 213.01923084915873, 5, "Expected Sprite Kugelfisch to have x-position 213.01923084915873 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, -75.3359673426953, 5, "Expected Sprite Kugelfisch to have y-position -75.3359673426953 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -3.009988540462428, 5, "Expected Sprite Qualle to have x-position -3.009988540462428 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, -84.76375288444196, 5, "Expected Sprite Qualle to have y-position -84.76375288444196 +-5");
  t.dragSprite('Kugelfisch', 185.10343366297002, -29.461919580211728, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Fisch").direction, 15.794538483564821, 1, "Expected Sprite Fisch to face in direction 15.794538483564821 +-1");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, 185.10343366297002, 5, "Expected Sprite Kugelfisch to have x-position 185.10343366297002 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, -31.461919580211728, 5, "Expected Sprite Kugelfisch to have y-position -31.461919580211728 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -0.016882072806023274, 5, "Expected Sprite Qualle to have x-position -0.016882072806023274 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, -84.96701053687698, 5, "Expected Sprite Qualle to have y-position -84.96701053687698 +-5");
  t.dragSprite('Qualle', 79.88807149731494, -81.79811172686199, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Qualle").direction, 102.93856793904885, 1, "Expected Sprite Qualle to face in direction 102.93856793904885 +-1");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, 185.10343366297002, 5, "Expected Sprite Kugelfisch to have x-position 185.10343366297002 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, -33.46191958021173, 5, "Expected Sprite Kugelfisch to have y-position -33.46191958021173 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, 82.81190358331587, 5, "Expected Sprite Qualle to have x-position 82.81190358331587 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, -82.46983036801424, 5, "Expected Sprite Qualle to have y-position -82.46983036801424 +-5");
  t.mouseMove(-178, -169);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Fisch").direction, 49.52245414640199, 1, "Expected Sprite Fisch to face in direction 49.52245414640199 +-1");
  t.assert.equal(t.getSprite("Qualle").direction, -108.35441549451426, 1, "Expected Sprite Qualle to face in direction -108.35441549451426 +-1");
  t.assert.withinRange(t.getSprite("Fisch").x, -178, 5, "Expected Sprite Fisch to have x-position -178 +-5");
  t.assert.withinRange(t.getSprite("Fisch").y, -169, 5, "Expected Sprite Fisch to have y-position -169 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, 185.10343366297002, 5, "Expected Sprite Kugelfisch to have x-position 185.10343366297002 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, -35.46191958021173, 5, "Expected Sprite Kugelfisch to have y-position -35.46191958021173 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, 79.96452305854409, 5, "Expected Sprite Qualle to have x-position 79.96452305854409 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, -83.41451240296058, 5, "Expected Sprite Qualle to have y-position -83.41451240296058 +-5");
  t.dragSprite('Qualle', -178, -169, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Qualle").direction, 90, 1, "Expected Sprite Qualle to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, 185.10343366297002, 5, "Expected Sprite Kugelfisch to have x-position 185.10343366297002 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, -37.46191958021173, 5, "Expected Sprite Kugelfisch to have y-position -37.46191958021173 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -175, 5, "Expected Sprite Qualle to have x-position -175 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, -169, 5, "Expected Sprite Qualle to have y-position -169 +-5");
  t.end();
}
const test1 = async function (t) {
  t.mouseMove(30, -57);
  await t.runForSteps(1);
  t.dragSprite('Stern', -189, -128, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Stern").x, 181, 5, "Expected Sprite Stern to have x-position 181 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, -108, 5, "Expected Sprite Stern to have y-position -108 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -141, 5, "Expected Sprite Kugelfisch to have x-position -141 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.dragSprite('Kugelfisch', -119.62965212691826, -148.5244950099076, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -117.62965212691826, 5, "Expected Sprite Kugelfisch to have x-position -117.62965212691826 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, -148.5244950099076, 5, "Expected Sprite Kugelfisch to have y-position -148.5244950099076 +-5");
  t.dragSprite('Kugelfisch', -204.08191424226914, -180, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -202.08191424226914, 5, "Expected Sprite Kugelfisch to have x-position -202.08191424226914 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, -180, 5, "Expected Sprite Kugelfisch to have y-position -180 +-5");
  t.mouseMove(118, -33);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -200.08191424226914, 5, "Expected Sprite Kugelfisch to have x-position -200.08191424226914 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, -180, 5, "Expected Sprite Kugelfisch to have y-position -180 +-5");
  t.dragSprite('Kugelfisch', -189, -128, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -187, 5, "Expected Sprite Kugelfisch to have x-position -187 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, -128, 5, "Expected Sprite Kugelfisch to have y-position -128 +-5");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938525161',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938525161',
      type: 'standard',
  }
]
