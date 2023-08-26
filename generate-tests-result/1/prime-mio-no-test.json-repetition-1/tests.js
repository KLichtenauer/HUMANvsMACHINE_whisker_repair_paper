const test0 = async function (t) {
  await t.runForSteps(14);
  await t.runForSteps(1);
  t.typeText('0');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "false", "Expected Sprite Sprite1 to say false");
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(27);
  await t.runForSteps(1);
  t.typeText('229');
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Sprite1").sayText, "Expected Sprite Sprite1 not to say anything");
  await t.runForSteps(65);
  await t.runForSteps(1);
  await t.runForSteps(28);
  await t.runForSteps(1);
  await t.runForSteps(6);
  await t.runForSteps(1);
  await t.runForSteps(96);
  await t.runForSteps(1);
  await t.runForSteps(57);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "true", "Expected Sprite Sprite1 to say true");
  t.end();
}
const test2 = async function (t) {
  await t.runForSteps(69);
  await t.runForSteps(1);
  t.typeText('Hello');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "false", "Expected Sprite Sprite1 to say false");
  await t.runForSteps(31);
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
      seed: '1687849464599',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849464599',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849464599',
      type: 'standard',
  }
]
