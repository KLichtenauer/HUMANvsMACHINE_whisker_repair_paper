const test0 = async function (t) {
  await t.runForSteps(92);
  await t.runForSteps(1);
  t.typeText('-70');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "false", "Expected Sprite Sprite1 to say false");
  await t.runForSteps(60);
  await t.runForSteps(1);
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(67);
  await t.runForSteps(1);
  t.typeText('false');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "false", "Expected Sprite Sprite1 to say false");
  await t.runForSteps(23);
  await t.runForSteps(1);
  t.end();
}
const test2 = async function (t) {
  await t.runForSteps(45);
  await t.runForSteps(1);
  t.typeText('13');
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Sprite1").sayText, "Expected Sprite Sprite1 not to say anything");
  await t.runForSteps(7);
  await t.runForSteps(1);
  await t.runForSteps(52);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "true", "Expected Sprite Sprite1 to say true");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936806131',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936806131',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936806131',
      type: 'standard',
  }
]
