const test0 = async function (t) {
  t.mouseMove(-151, 160);
  await t.runForSteps(1);
  t.end();
}
const test1 = async function (t) {
  t.mouseMove(-117, 156);
  await t.runForSteps(1);
  await t.runForSteps(90);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Fisch").direction, 158.12084866242472, 1, "Expected Sprite Fisch to face in direction 158.12084866242472 +-1");
  t.assert.equal(t.getSprite("Kugelfisch").direction, 180, 1, "Expected Sprite Kugelfisch to face in direction 180 +-1");
  t.assert.equal(t.getSprite("Qualle").direction, -63.297877841567356, 1, "Expected Sprite Qualle to face in direction -63.297877841567356 +-1");
  t.assert.withinRange(t.getSprite("Fisch").x, -117, 5, "Expected Sprite Fisch to have x-position -117 +-5");
  t.assert.withinRange(t.getSprite("Fisch").y, 156, 5, "Expected Sprite Fisch to have y-position 156 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -5, 5, "Expected Sprite Kugelfisch to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 38, 5, "Expected Sprite Kugelfisch to have y-position 38 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -60.77598844758852, 5, "Expected Sprite Qualle to have x-position -60.77598844758852 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, 127.71965885986486, 5, "Expected Sprite Qualle to have y-position 127.71965885986486 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").size, 70, 1, "Expected Sprite Kugelfisch to have size 70 +-1");
  t.end();
}
const test2 = async function (t) {
  t.mouseMove(-151, 160);
  await t.runForSteps(1);
  await t.runForSteps(74);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Fisch").direction, 152.20486037516466, 1, "Expected Sprite Fisch to face in direction 152.20486037516466 +-1");
  t.assert.equal(t.getSprite("Kugelfisch").direction, 180, 1, "Expected Sprite Kugelfisch to face in direction 180 +-1");
  t.assert.equal(t.getSprite("Qualle").direction, -66.35567034392244, 1, "Expected Sprite Qualle to face in direction -66.35567034392244 +-1");
  t.assert.withinRange(t.getSprite("Fisch").x, -151, 5, "Expected Sprite Fisch to have x-position -151 +-5");
  t.assert.withinRange(t.getSprite("Fisch").y, 160, 5, "Expected Sprite Fisch to have y-position 160 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -5, 5, "Expected Sprite Kugelfisch to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 70, 5, "Expected Sprite Kugelfisch to have y-position 70 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -34.27684894221564, 5, "Expected Sprite Qualle to have x-position -34.27684894221564 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, 108.89732690007463, 5, "Expected Sprite Qualle to have y-position 108.89732690007463 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").size, 70, 1, "Expected Sprite Kugelfisch to have size 70 +-1");
  t.mouseMove(-100, -137);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Fisch").direction, 65.35322914806883, 1, "Expected Sprite Fisch to face in direction 65.35322914806883 +-1");
  t.assert.equal(t.getSprite("Qualle").direction, -165.03584176303502, 1, "Expected Sprite Qualle to face in direction -165.03584176303502 +-1");
  t.assert.withinRange(t.getSprite("Fisch").x, -100, 5, "Expected Sprite Fisch to have x-position -100 +-5");
  t.assert.withinRange(t.getSprite("Fisch").y, -137, 5, "Expected Sprite Fisch to have y-position -137 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -5, 5, "Expected Sprite Kugelfisch to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 68, 5, "Expected Sprite Kugelfisch to have y-position 68 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -34.79327844832916, 5, "Expected Sprite Qualle to have x-position -34.79327844832916 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, 106.96515181349076, 5, "Expected Sprite Qualle to have y-position 106.96515181349076 +-5");
  t.dragSprite('Stern', -70.21954386991638, -125.71140958932304, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Fisch").direction, 69.2402678987252, 1, "Expected Sprite Fisch to face in direction 69.2402678987252 +-1");
  t.assert.withinRange(t.getSprite("Stern").x, -29, 5, "Expected Sprite Stern to have x-position -29 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, -122, 5, "Expected Sprite Stern to have y-position -122 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -5, 5, "Expected Sprite Kugelfisch to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 66, 5, "Expected Sprite Kugelfisch to have y-position 66 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -35.30970795444268, 5, "Expected Sprite Qualle to have x-position -35.30970795444268 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, 105.0329767269069, 5, "Expected Sprite Qualle to have y-position 105.0329767269069 +-5");
  t.end();
}
const test3 = async function (t) {
  t.mouseMove(-151, 160);
  await t.runForSteps(1);
  await t.runForSteps(74);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Fisch").direction, 152.20486037516466, 1, "Expected Sprite Fisch to face in direction 152.20486037516466 +-1");
  t.assert.equal(t.getSprite("Kugelfisch").direction, 180, 1, "Expected Sprite Kugelfisch to face in direction 180 +-1");
  t.assert.equal(t.getSprite("Qualle").direction, -66.35567034392244, 1, "Expected Sprite Qualle to face in direction -66.35567034392244 +-1");
  t.assert.withinRange(t.getSprite("Fisch").x, -151, 5, "Expected Sprite Fisch to have x-position -151 +-5");
  t.assert.withinRange(t.getSprite("Fisch").y, 160, 5, "Expected Sprite Fisch to have y-position 160 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -5, 5, "Expected Sprite Kugelfisch to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 70, 5, "Expected Sprite Kugelfisch to have y-position 70 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -34.27684894221564, 5, "Expected Sprite Qualle to have x-position -34.27684894221564 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, 108.89732690007463, 5, "Expected Sprite Qualle to have y-position 108.89732690007463 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").size, 70, 1, "Expected Sprite Kugelfisch to have size 70 +-1");
  t.mouseMove(60, 36);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Fisch").direction, -150.76419543129998, 1, "Expected Sprite Fisch to face in direction -150.76419543129998 +-1");
  t.assert.equal(t.getSprite("Qualle").direction, 127.71213397379955, 1, "Expected Sprite Qualle to face in direction 127.71213397379955 +-1");
  t.assert.withinRange(t.getSprite("Fisch").x, 60, 5, "Expected Sprite Fisch to have x-position 60 +-5");
  t.assert.withinRange(t.getSprite("Fisch").y, 36, 5, "Expected Sprite Fisch to have y-position 36 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -5, 5, "Expected Sprite Kugelfisch to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 68, 5, "Expected Sprite Kugelfisch to have y-position 68 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -32.69466092746024, 5, "Expected Sprite Qualle to have x-position -32.69466092746024 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, 107.67393771998337, 5, "Expected Sprite Qualle to have y-position 107.67393771998337 +-5");
  await t.runForSteps(42);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Qualle").direction, 127.71213397379954, 1, "Expected Sprite Qualle to face in direction 127.71213397379954 +-1");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -5, 5, "Expected Sprite Kugelfisch to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 42, 5, "Expected Sprite Kugelfisch to have y-position 42 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -12.12621673564001, 5, "Expected Sprite Qualle to have x-position -12.12621673564001 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, 91.76987837879699, 5, "Expected Sprite Qualle to have y-position 91.76987837879699 +-5");
  t.end();
}
const test4 = async function (t) {
  t.mouseMove(-117, 156);
  await t.runForSteps(1);
  t.mouseMove(172, -50);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -141, 5, "Expected Sprite Kugelfisch to have x-position -141 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.dragSprite('Qualle', 165.4243088515851, -131.19500577690332, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -139, 5, "Expected Sprite Kugelfisch to have x-position -139 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, 165.4243088515851, 5, "Expected Sprite Qualle to have x-position 165.4243088515851 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, -131.19500577690332, 5, "Expected Sprite Qualle to have y-position -131.19500577690332 +-5");
  await t.runForSteps(39);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Fisch").direction, -104.396136847169, 1, "Expected Sprite Fisch to face in direction -104.396136847169 +-1");
  t.assert.equal(t.getSprite("Qualle").direction, 4.630073942843978, 1, "Expected Sprite Qualle to face in direction 4.630073942843978 +-1");
  t.assert.withinRange(t.getSprite("Fisch").x, 172, 5, "Expected Sprite Fisch to have x-position 172 +-5");
  t.assert.withinRange(t.getSprite("Fisch").y, -50, 5, "Expected Sprite Fisch to have y-position -50 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -59, 5, "Expected Sprite Kugelfisch to have x-position -59 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, 167.52308375959294, 5, "Expected Sprite Qualle to have x-position 167.52308375959294 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, -105.27985299160198, 5, "Expected Sprite Qualle to have y-position -105.27985299160198 +-5");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937409613',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937409613',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937409613',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937409613',
      type: 'standard',
  },
  {
      test: test4,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937409613',
      type: 'standard',
  }
]
