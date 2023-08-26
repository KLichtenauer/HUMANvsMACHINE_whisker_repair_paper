const test0 = async function (t) {
  await t.runForSteps(39);
  await t.runForSteps(1);
  t.typeText('Hello');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "y?", "Expected Sprite Sprite1 to say y?");
  t.typeText('0');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "z?", "Expected Sprite Sprite1 to say z?");
  t.typeText('hPc');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "Hello", "Expected Sprite Sprite1 to say Hello");
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(33);
  await t.runForSteps(1);
  t.typeText('Hello');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "y?", "Expected Sprite Sprite1 to say y?");
  t.typeText('hPc');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "z?", "Expected Sprite Sprite1 to say z?");
  t.typeText('142');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "Hello", "Expected Sprite Sprite1 to say Hello");
  t.end();
}
const test2 = async function (t) {
  await t.runForSteps(23);
  await t.runForSteps(1);
  t.typeText('-6');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "y?", "Expected Sprite Sprite1 to say y?");
  t.typeText('0');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "z?", "Expected Sprite Sprite1 to say z?");
  t.typeText('104');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "0", "Expected Sprite Sprite1 to say 0");
  t.end();
}
const test3 = async function (t) {
  await t.runForSteps(26);
  await t.runForSteps(1);
  t.typeText('hPc');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "y?", "Expected Sprite Sprite1 to say y?");
  t.typeText('0');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "z?", "Expected Sprite Sprite1 to say z?");
  t.typeText('0');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "0", "Expected Sprite Sprite1 to say 0");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937382997',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937382997',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937382997',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937382997',
      type: 'standard',
  }
]
