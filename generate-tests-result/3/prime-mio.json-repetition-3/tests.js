const test0 = async function (t) {
  await t.runForSteps(81);
  await t.runForSteps(1);
  t.typeText('false');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "false", "Expected Sprite Sprite1 to say false");
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(68);
  await t.runForSteps(1);
  t.typeText('229');
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Sprite1").sayText, "Expected Sprite Sprite1 not to say anything");
  await t.runForSteps(63);
  await t.runForSteps(1);
  await t.runForSteps(78);
  await t.runForSteps(1);
  await t.runForSteps(33);
  await t.runForSteps(1);
  await t.runForSteps(71);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "true", "Expected Sprite Sprite1 to say true");
  t.end();
}
const test2 = async function (t) {
  await t.runForSteps(49);
  await t.runForSteps(1);
  t.typeText('0');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "false", "Expected Sprite Sprite1 to say false");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936638148',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936638148',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936638148',
      type: 'standard',
  }
]
