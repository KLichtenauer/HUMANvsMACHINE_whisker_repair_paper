const test0 = async function (t) {
  t.dragSprite('Kugelfisch', -224.16809029652575, -66.60169255512312, null);
  await t.runForSteps(1);
  t.dragSprite('Qualle', -203.82211585765666, -53.021587716811126, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -141, 5, "Expected Sprite Kugelfisch to have x-position -141 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -203.82211585765666, 5, "Expected Sprite Qualle to have x-position -203.82211585765666 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, -53.021587716811126, 5, "Expected Sprite Qualle to have y-position -53.021587716811126 +-5");
  await t.runForSteps(45);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Fisch").direction, -171.2977762100532, 1, "Expected Sprite Fisch to face in direction -171.2977762100532 +-1");
  t.assert.equal(t.getSprite("Qualle").direction, 75.41845420646024, 1, "Expected Sprite Qualle to face in direction 75.41845420646024 +-1");
  t.assert.withinRange(t.getSprite("Fisch").x, 0, 5, "Expected Sprite Fisch to have x-position 0 +-5");
  t.assert.withinRange(t.getSprite("Fisch").y, 0, 5, "Expected Sprite Fisch to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -49, 5, "Expected Sprite Kugelfisch to have x-position -49 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -168.9816647529469, 5, "Expected Sprite Qualle to have x-position -168.9816647529469 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, -43.95831199440745, 5, "Expected Sprite Qualle to have y-position -43.95831199440745 +-5");
  t.dragSprite('Stern', 0, 0, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Fisch").direction, 90, 1, "Expected Sprite Fisch to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Stern").x, -239, 5, "Expected Sprite Stern to have x-position -239 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 40, 5, "Expected Sprite Stern to have y-position 40 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -47, 5, "Expected Sprite Kugelfisch to have x-position -47 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -167.04608413601858, 5, "Expected Sprite Qualle to have x-position -167.04608413601858 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, -43.45479667649614, 5, "Expected Sprite Qualle to have y-position -43.45479667649614 +-5");
  t.dragSprite('Qualle', -41.79023668581053, -49.08699320263743, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Fisch").direction, -80.49880684847187, 1, "Expected Sprite Fisch to face in direction -80.49880684847187 +-1");
  t.assert.equal(t.getSprite("Qualle").direction, 40.40942885782459, 1, "Expected Sprite Qualle to face in direction 40.40942885782459 +-1");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -45, 5, "Expected Sprite Kugelfisch to have x-position -45 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -40.364097213813814, 5, "Expected Sprite Qualle to have x-position -40.364097213813814 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, -47.411843595464106, 5, "Expected Sprite Qualle to have y-position -47.411843595464106 +-5");
  t.dragSprite('Stern', -31.72445328177738, 3.2926463935588712, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Fisch").direction, -84.07454937002919, 1, "Expected Sprite Fisch to face in direction -84.07454937002919 +-1");
  t.assert.withinRange(t.getSprite("Stern").x, 138, 5, "Expected Sprite Stern to have x-position 138 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, -85, 5, "Expected Sprite Stern to have y-position -85 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -43, 5, "Expected Sprite Kugelfisch to have x-position -43 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -38.9379577418171, 5, "Expected Sprite Qualle to have x-position -38.9379577418171 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, -45.73669398829078, 5, "Expected Sprite Qualle to have y-position -45.73669398829078 +-5");
  t.mouseMove(-218, -157);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Fisch").direction, 78.56631873457333, 1, "Expected Sprite Fisch to face in direction 78.56631873457333 +-1");
  t.assert.equal(t.getSprite("Qualle").direction, -121.85546815415054, 1, "Expected Sprite Qualle to face in direction -121.85546815415054 +-1");
  t.assert.withinRange(t.getSprite("Fisch").x, -218, 5, "Expected Sprite Fisch to have x-position -218 +-5");
  t.assert.withinRange(t.getSprite("Fisch").y, -157, 5, "Expected Sprite Fisch to have y-position -157 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -41, 5, "Expected Sprite Kugelfisch to have x-position -41 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -40.97647489673022, 5, "Expected Sprite Qualle to have x-position -40.97647489673022 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, -47.00336198312011, 5, "Expected Sprite Qualle to have y-position -47.00336198312011 +-5");
  await t.runForSteps(42);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Kugelfisch").direction, 180, 1, "Expected Sprite Kugelfisch to face in direction 180 +-1");
  t.assert.equal(t.getSprite("Qualle").direction, -121.85546815415051, 1, "Expected Sprite Qualle to face in direction -121.85546815415051 +-1");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -5, 5, "Expected Sprite Kugelfisch to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 32, 5, "Expected Sprite Kugelfisch to have y-position 32 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -128.63271255799398, 5, "Expected Sprite Qualle to have x-position -128.63271255799398 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, -101.47008576078107, 5, "Expected Sprite Qualle to have y-position -101.47008576078107 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").size, 70, 1, "Expected Sprite Kugelfisch to have size 70 +-1");
  await t.runForSteps(94);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Qualle").direction, -121.85546815415049, 1, "Expected Sprite Qualle to face in direction -121.85546815415049 +-1");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -5, 5, "Expected Sprite Kugelfisch to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, -14, 5, "Expected Sprite Kugelfisch to have y-position -14 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -175.51860712099548, 5, "Expected Sprite Qualle to have x-position -175.51860712099548 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, -130.60344964185555, 5, "Expected Sprite Qualle to have y-position -130.60344964185555 +-5");
  t.end();
}
const test1 = async function (t) {
  t.mouseMove(68, -74);
  await t.runForSteps(1);
  t.mouseMove(-92, -80);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -141, 5, "Expected Sprite Kugelfisch to have x-position -141 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
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
      seed: '1687937689597',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937689597',
      type: 'standard',
  }
]
