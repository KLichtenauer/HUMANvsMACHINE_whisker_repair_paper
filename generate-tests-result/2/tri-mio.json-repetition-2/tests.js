const test0 = async function (t) {
  await t.runForSteps(99);
  await t.runForSteps(1);
  t.typeText('10');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "y?", "Expected Sprite Sprite1 to say y?");
  t.typeText('10');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "z?", "Expected Sprite Sprite1 to say z?");
  t.typeText('10');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "equilateral", "Expected Sprite Sprite1 to say equilateral");
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(39);
  await t.runForSteps(1);
  t.typeText('0');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "y?", "Expected Sprite Sprite1 to say y?");
  t.typeText('10');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "z?", "Expected Sprite Sprite1 to say z?");
  t.typeText('10');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "invalid", "Expected Sprite Sprite1 to say invalid");
  t.end();
}
const test2 = async function (t) {
  await t.runForSteps(67);
  await t.runForSteps(1);
  t.typeText('10');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "y?", "Expected Sprite Sprite1 to say y?");
  t.typeText('0');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "z?", "Expected Sprite Sprite1 to say z?");
  t.typeText('-3');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "invalid", "Expected Sprite Sprite1 to say invalid");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938950187',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938950187',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938950187',
      type: 'standard',
  }
]
