const test0 = async function (t) {
  t.mouseMove(21, -69);
  await t.runForSteps(1);
  t.end();
}
const test1 = async function (t) {
  t.mouseMove(21, -69);
  await t.runForSteps(1);
  t.dragSprite('Stern', -158.66207082230116, -137.73403532281085, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Stern").x, 136, 5, "Expected Sprite Stern to have x-position 136 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 122, 5, "Expected Sprite Stern to have y-position 122 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -141, 5, "Expected Sprite Kugelfisch to have x-position -141 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.dragSprite('Stern', -189, -128, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Stern").x, -150, 5, "Expected Sprite Stern to have x-position -150 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 18, 5, "Expected Sprite Stern to have y-position 18 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -139, 5, "Expected Sprite Kugelfisch to have x-position -139 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.mouseMove(-178, -136);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -137, 5, "Expected Sprite Kugelfisch to have x-position -137 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.dragSprite('Qualle', -198.33775249810117, -51.184995265047775, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -135, 5, "Expected Sprite Kugelfisch to have x-position -135 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -198.33775249810117, 5, "Expected Sprite Qualle to have x-position -198.33775249810117 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, -51.184995265047775, 5, "Expected Sprite Qualle to have y-position -51.184995265047775 +-5");
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -127, 5, "Expected Sprite Kugelfisch to have x-position -127 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.mouseMove(-148, 147);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -125, 5, "Expected Sprite Kugelfisch to have x-position -125 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  await t.runForSteps(47);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Fisch").direction, 180.88823549523977, 1, "Expected Sprite Fisch to face in direction 180.88823549523977 +-1");
  t.assert.equal(t.getSprite("Qualle").direction, 14.251405631299576, 1, "Expected Sprite Qualle to face in direction 14.251405631299576 +-1");
  t.assert.withinRange(t.getSprite("Fisch").x, -148, 5, "Expected Sprite Fisch to have x-position -148 +-5");
  t.assert.withinRange(t.getSprite("Fisch").y, 147, 5, "Expected Sprite Fisch to have y-position 147 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -29, 5, "Expected Sprite Kugelfisch to have x-position -29 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -181.79465332728296, 5, "Expected Sprite Qualle to have x-position -181.79465332728296 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, 13.946916036743934, 5, "Expected Sprite Qualle to have y-position 13.946916036743934 +-5");
  t.dragSprite('Qualle', -100.08702691496275, 180, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Qualle").direction, -124.55707879820173, 1, "Expected Sprite Qualle to face in direction -124.55707879820173 +-1");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -27, 5, "Expected Sprite Kugelfisch to have x-position -27 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -102.0635745594409, 5, "Expected Sprite Qualle to have x-position -102.0635745594409 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, 178.63865529379666, 5, "Expected Sprite Qualle to have y-position 178.63865529379666 +-5");
  t.mouseMove(233, -60);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Fisch").direction, -78.48882878670483, 1, "Expected Sprite Fisch to face in direction -78.48882878670483 +-1");
  t.assert.equal(t.getSprite("Qualle").direction, 125.45919312699779, 1, "Expected Sprite Qualle to face in direction 125.45919312699779 +-1");
  t.assert.withinRange(t.getSprite("Fisch").x, 233, 5, "Expected Sprite Fisch to have x-position 233 +-5");
  t.assert.withinRange(t.getSprite("Fisch").y, -60, 5, "Expected Sprite Fisch to have y-position -60 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -25, 5, "Expected Sprite Kugelfisch to have x-position -25 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -100.10870520715517, 5, "Expected Sprite Qualle to have x-position -100.10870520715517 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, 177.2463601327428, 5, "Expected Sprite Qualle to have y-position 177.2463601327428 +-5");
  t.dragSprite('Stern', 240, -31.68798732728704, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Fisch").direction, 13.887576033582164, 1, "Expected Sprite Fisch to face in direction 13.887576033582164 +-1");
  t.assert.equal(t.getSprite("Qualle").direction, 125.4591931269978, 1, "Expected Sprite Qualle to face in direction 125.4591931269978 +-1");
  t.assert.withinRange(t.getSprite("Stern").x, 240, 5, "Expected Sprite Stern to have x-position 240 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, -31.68798732728704, 5, "Expected Sprite Stern to have y-position -31.68798732728704 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -23, 5, "Expected Sprite Kugelfisch to have x-position -23 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -98.15383585486944, 5, "Expected Sprite Qualle to have x-position -98.15383585486944 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, 175.85406497168896, 5, "Expected Sprite Qualle to have y-position 175.85406497168896 +-5");
  t.dragSprite('Stern', 233, -60, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Fisch").direction, 90, 1, "Expected Sprite Fisch to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Stern").x, 109, 5, "Expected Sprite Stern to have x-position 109 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 99, 5, "Expected Sprite Stern to have y-position 99 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -21, 5, "Expected Sprite Kugelfisch to have x-position -21 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -96.19896650258372, 5, "Expected Sprite Qualle to have x-position -96.19896650258372 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, 174.4617698106351, 5, "Expected Sprite Qualle to have y-position 174.4617698106351 +-5");
  t.mouseMove(124, -157);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Fisch").direction, -3.3533404943179193, 1, "Expected Sprite Fisch to face in direction -3.3533404943179193 +-1");
  t.assert.equal(t.getSprite("Qualle").direction, 146.40284305323604, 1, "Expected Sprite Qualle to face in direction 146.40284305323604 +-1");
  t.assert.withinRange(t.getSprite("Fisch").x, 124, 5, "Expected Sprite Fisch to have x-position 124 +-5");
  t.assert.withinRange(t.getSprite("Fisch").y, -157, 5, "Expected Sprite Fisch to have y-position -157 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -19, 5, "Expected Sprite Kugelfisch to have x-position -19 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -94.76025593454291, 5, "Expected Sprite Qualle to have x-position -94.76025593454291 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, 172.29610319238387, 5, "Expected Sprite Qualle to have y-position 172.29610319238387 +-5");
  t.dragSprite('Qualle', 169.60291420220705, -115.66629738981001, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Qualle").direction, -132.18862461013273, 1, "Expected Sprite Qualle to face in direction -132.18862461013273 +-1");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -17, 5, "Expected Sprite Kugelfisch to have x-position -17 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, 167.67647554845033, 5, "Expected Sprite Qualle to have x-position 167.67647554845033 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, -117.41238848517473, 5, "Expected Sprite Qualle to have y-position -117.41238848517473 +-5");
  t.mouseMove(-115, -94);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Fisch").direction, 49.25157785130827, 1, "Expected Sprite Fisch to face in direction 49.25157785130827 +-1");
  t.assert.equal(t.getSprite("Qualle").direction, -85.26534251468408, 1, "Expected Sprite Qualle to face in direction -85.26534251468408 +-1");
  t.assert.withinRange(t.getSprite("Fisch").x, -115, 5, "Expected Sprite Fisch to have x-position -115 +-5");
  t.assert.withinRange(t.getSprite("Fisch").y, -94, 5, "Expected Sprite Fisch to have y-position -94 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -15, 5, "Expected Sprite Kugelfisch to have x-position -15 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, 165.08534768202063, 5, "Expected Sprite Qualle to have x-position 165.08534768202063 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, -117.1977809834153, 5, "Expected Sprite Qualle to have y-position -117.1977809834153 +-5");
  t.mouseMove(125, -24);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Fisch").direction, -7.411492859178878, 1, "Expected Sprite Fisch to face in direction -7.411492859178878 +-1");
  t.assert.equal(t.getSprite("Qualle").direction, -23.273049635751235, 1, "Expected Sprite Qualle to face in direction -23.273049635751235 +-1");
  t.assert.withinRange(t.getSprite("Fisch").x, 125, 5, "Expected Sprite Fisch to have x-position 125 +-5");
  t.assert.withinRange(t.getSprite("Fisch").y, -24, 5, "Expected Sprite Fisch to have y-position -24 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -13, 5, "Expected Sprite Kugelfisch to have x-position -13 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, 164.0580527202945, 5, "Expected Sprite Qualle to have x-position 164.0580527202945 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, -114.80933691632642, 5, "Expected Sprite Qualle to have y-position -114.80933691632642 +-5");
  t.mouseMove(229, 98);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Fisch").direction, -89.52254622269041, 1, "Expected Sprite Fisch to face in direction -89.52254622269041 +-1");
  t.assert.equal(t.getSprite("Qualle").direction, 16.970351245849585, 1, "Expected Sprite Qualle to face in direction 16.970351245849585 +-1");
  t.assert.withinRange(t.getSprite("Fisch").x, 229, 5, "Expected Sprite Fisch to have x-position 229 +-5");
  t.assert.withinRange(t.getSprite("Fisch").y, 98, 5, "Expected Sprite Fisch to have y-position 98 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -11, 5, "Expected Sprite Kugelfisch to have x-position -11 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, 164.8169324214278, 5, "Expected Sprite Qualle to have x-position 164.8169324214278 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, -112.32255152164358, 5, "Expected Sprite Qualle to have y-position -112.32255152164358 +-5");
  t.dragSprite('Qualle', 178.79765845348456, 125.95270006453345, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Qualle").direction, 119.10909197363237, 1, "Expected Sprite Qualle to face in direction 119.10909197363237 +-1");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -9, 5, "Expected Sprite Kugelfisch to have x-position -9 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, 181.0692655521945, 5, "Expected Sprite Qualle to have x-position 181.0692655521945 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, 124.68786758981969, 5, "Expected Sprite Qualle to have y-position 124.68786758981969 +-5");
  t.dragSprite('Stern', 215.51881535936016, 126.54869550773509, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Fisch").direction, -25.27748626793698, 1, "Expected Sprite Fisch to face in direction -25.27748626793698 +-1");
  t.assert.equal(t.getSprite("Qualle").direction, 119.10909197363236, 1, "Expected Sprite Qualle to face in direction 119.10909197363236 +-1");
  t.assert.withinRange(t.getSprite("Stern").x, -218, 5, "Expected Sprite Stern to have x-position -218 +-5");
  t.assert.withinRange(t.getSprite("Stern").y, 12, 5, "Expected Sprite Stern to have y-position 12 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -7, 5, "Expected Sprite Kugelfisch to have x-position -7 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, 183.34087265090446, 5, "Expected Sprite Qualle to have x-position 183.34087265090446 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, 123.42303511510593, 5, "Expected Sprite Qualle to have y-position 123.42303511510593 +-5");
  t.dragSprite('Qualle', 240, 163.41630429974305, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Fisch").direction, -100.8902811020684, 1, "Expected Sprite Fisch to face in direction -100.8902811020684 +-1");
  t.assert.equal(t.getSprite("Qualle").direction, -170.45479437928077, 1, "Expected Sprite Qualle to face in direction -170.45479437928077 +-1");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -5, 5, "Expected Sprite Kugelfisch to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, 239.5356879816206, 5, "Expected Sprite Qualle to have x-position 239.5356879816206 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, 160.6550700920764, 5, "Expected Sprite Qualle to have y-position 160.6550700920764 +-5");
  t.dragSprite('Kugelfisch', 156.55941263463058, 94.32601563217037, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Kugelfisch").direction, 180, 1, "Expected Sprite Kugelfisch to face in direction 180 +-1");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, 156.55941263463058, 5, "Expected Sprite Kugelfisch to have x-position 156.55941263463058 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 94.32601563217037, 5, "Expected Sprite Kugelfisch to have y-position 94.32601563217037 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, 239.07137596324122, 5, "Expected Sprite Qualle to have x-position 239.07137596324122 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, 157.89383588440973, 5, "Expected Sprite Qualle to have y-position 157.89383588440973 +-5");
  t.end();
}
const test2 = async function (t) {
  t.dragSprite('Kugelfisch', -211.4160930548722, -180, null);
  await t.runForSteps(1);
  t.dragSprite('Kugelfisch', -166.58390930274038, -180, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -164.58390930274038, 5, "Expected Sprite Kugelfisch to have x-position -164.58390930274038 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, -180, 5, "Expected Sprite Kugelfisch to have y-position -180 +-5");
  t.end();
}
const test3 = async function (t) {
  t.mouseMove(21, -69);
  await t.runForSteps(1);
  t.mouseMove(-178, -136);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -141, 5, "Expected Sprite Kugelfisch to have x-position -141 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.dragSprite('Qualle', -198.33775249810117, -51.184995265047775, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -139, 5, "Expected Sprite Kugelfisch to have x-position -139 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -198.33775249810117, 5, "Expected Sprite Qualle to have x-position -198.33775249810117 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, -51.184995265047775, 5, "Expected Sprite Qualle to have y-position -51.184995265047775 +-5");
  await t.runForSteps(47);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Fisch").direction, 76.87709014100373, 1, "Expected Sprite Fisch to face in direction 76.87709014100373 +-1");
  t.assert.equal(t.getSprite("Qualle").direction, 166.51566801787433, 1, "Expected Sprite Qualle to face in direction 166.51566801787433 +-1");
  t.assert.withinRange(t.getSprite("Fisch").x, -178, 5, "Expected Sprite Fisch to have x-position -178 +-5");
  t.assert.withinRange(t.getSprite("Fisch").y, -136, 5, "Expected Sprite Fisch to have y-position -136 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").x, -47, 5, "Expected Sprite Kugelfisch to have x-position -47 +-5");
  t.assert.withinRange(t.getSprite("Kugelfisch").y, 80, 5, "Expected Sprite Kugelfisch to have y-position 80 +-5");
  t.assert.withinRange(t.getSprite("Qualle").x, -189.47693331025744, 5, "Expected Sprite Qualle to have x-position -189.47693331025744 +-5");
  t.assert.withinRange(t.getSprite("Qualle").y, -88.13747668809069, 5, "Expected Sprite Qualle to have y-position -88.13747668809069 +-5");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938212372',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938212372',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938212372',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938212372',
      type: 'standard',
  }
]
