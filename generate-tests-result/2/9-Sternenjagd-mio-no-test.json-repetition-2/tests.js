const test0 = async function (t) {
  t.mouseMove(119, 131);
  await t.runForSteps(1);
  t.dragSprite('Qualle', -174.17788414234334, -53.021587716811126, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -141, 5, "Expected Sprite Kugelfisch to have x-position -141 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -174.17788414234334, 5, "Expected Sprite Qualle to have x-position -174.17788414234334 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, -53.021587716811126, 5, "Expected Sprite Qualle to have y-position -53.021587716811126 +-5");
  await t.runForSteps(68);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Fisch").direction, -149.66584207633673, 1, "Expected Sprite Fisch to face in direction -149.66584207633673 +-1");
  t.assert.equal(t.getSprite("Kugelfisch").direction, 180, 1, "Expected Sprite Kugelfisch to face in direction 180 +-1");
  t.assert.equal(t.getSprite("Qualle").direction, 57.88437284122924, 1, "Expected Sprite Qualle to face in direction 57.88437284122924 +-1");
  t.assert.withinRange(t.getSprite("Fisch").x, 119, 5, "Expected Sprite Fisch to have x-position 119 +-5");
  t.assert.withinRange(t.getSprite("Fisch").y, 131, 5, "Expected Sprite Fisch to have y-position 131 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -5, 5, "Expected Sprite Kugelfisch to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -104.72577396589801, 5, "Expected Sprite Qualle to have x-position -104.72577396589801 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, -9.427959833382074, 5, "Expected Sprite Qualle to have y-position -9.427959833382074 +-5");
  t.dragSprite('Kugelfisch', 154.16809029652575, 180, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Qualle").direction, 57.88437284122925, 1, "Expected Sprite Qualle to face in direction 57.88437284122925 +-1");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, 154.16809029652575, 5, "Expected Sprite Kugelfisch to have x-position 154.16809029652575 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 178, 5, "Expected Sprite Kugelfisch to have y-position 178 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -103.03182005915544, 5, "Expected Sprite Qualle to have x-position -103.03182005915544 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, -8.364700616713073, 5, "Expected Sprite Qualle to have y-position -8.364700616713073 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").size, 70, 1, "Expected Sprite Kugelfisch to have size 70 +-1");
  t.dragSprite('Qualle', 103.2780100353684, 56.40822903488325, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Qualle").direction, 11.902234594962678, 1, "Expected Sprite Qualle to face in direction 11.902234594962678 +-1");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, 154.16809029652575, 5, "Expected Sprite Kugelfisch to have x-position 154.16809029652575 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 176, 5, "Expected Sprite Kugelfisch to have y-position 176 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, 103.69049473158323, 5, "Expected Sprite Qualle to have x-position 103.69049473158323 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, 58.36523091924324, 5, "Expected Sprite Qualle to have y-position 58.36523091924324 +-5");
  t.dragSprite('Stern', 119, 131, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Fisch").direction, 90, 1, "Expected Sprite Fisch to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Stern").x, -235, 5, "Expected Sprite Stern to have x-position -235 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 0, 5, "Expected Sprite Stern to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, 154.16809029652575, 5, "Expected Sprite Kugelfisch to have x-position 154.16809029652575 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 174, 5, "Expected Sprite Kugelfisch to have y-position 174 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, 104.10297942779806, 5, "Expected Sprite Qualle to have x-position 104.10297942779806 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, 60.32223280360323, 5, "Expected Sprite Qualle to have y-position 60.32223280360323 +-5");
  t.end();
}
const test1 = async function (t) {
  t.dragSprite('Qualle', -184.31328940216804, -50.29681354884384, null);
  await t.runForSteps(1);
  t.dragSprite('Stern', -216.05204437345077, -111.30754317665405, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Stern").x, -235, 5, "Expected Sprite Stern to have x-position -235 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 0, 5, "Expected Sprite Stern to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -141, 5, "Expected Sprite Kugelfisch to have x-position -141 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.dragSprite('Stern', -178.089830893724, -157.6003166585954, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Stern").x, 207, 5, "Expected Sprite Stern to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, -161, 5, "Expected Sprite Stern to have y-position -161 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -139, 5, "Expected Sprite Kugelfisch to have x-position -139 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  await t.runForSteps(30);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Fisch").direction, 127.8749836510982, 1, "Expected Sprite Fisch to face in direction 127.8749836510982 +-1");
  t.assert.equal(t.getSprite("Qualle").direction, -145.2221686336361, 1, "Expected Sprite Qualle to face in direction -145.2221686336361 +-1");
  t.assert.withinRange(t.getSprite("Fisch").x, 0, 5, "Expected Sprite Fisch to have x-position 0 +-5");
  t.assert.withinRange(t.getSprite("Fisch").y, 0, 5, "Expected Sprite Fisch to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -77, 5, "Expected Sprite Kugelfisch to have x-position -77 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, 44.524200228844705, 5, "Expected Sprite Qualle to have x-position 44.524200228844705 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, 64.11484832953636, 5, "Expected Sprite Qualle to have y-position 64.11484832953636 +-5");
  await t.runForSteps(70);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -53, 5, "Expected Sprite Kugelfisch to have x-position -53 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, 28.0968009153788, 5, "Expected Sprite Qualle to have x-position 28.0968009153788 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, 40.45939331814543, 5, "Expected Sprite Qualle to have y-position 40.45939331814543 +-5");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687939286028',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687939286028',
      type: 'standard',
  }
]
