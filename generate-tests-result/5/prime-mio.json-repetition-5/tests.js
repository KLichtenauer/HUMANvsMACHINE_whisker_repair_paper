const test0 = async function (t) {
  await t.runForSteps(12);
  await t.runForSteps(1);
  t.typeText('true');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "false", "Expected Sprite Sprite1 to say false");
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(41);
  await t.runForSteps(1);
  t.typeText('19');
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Sprite1").sayText, "Expected Sprite Sprite1 not to say anything");
  await t.runForSteps(58);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "true", "Expected Sprite Sprite1 to say true");
  t.end();
}
const test2 = async function (t) {
  await t.runForSteps(16);
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
      seed: '1687938162993',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938162993',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938162993',
      type: 'standard',
  }
]
