const test0 = async function (t) {
  await t.runForSteps(39);
  await t.runForSteps(1);
  t.typeText('-85');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "y?", "Expected Sprite Sprite1 to say y?");
  t.typeText('8qJ');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "z?", "Expected Sprite Sprite1 to say z?");
  t.typeText('Hello');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "invalid", "Expected Sprite Sprite1 to say invalid");
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(55);
  await t.runForSteps(1);
  t.typeText('10');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "y?", "Expected Sprite Sprite1 to say y?");
  t.typeText('0');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "z?", "Expected Sprite Sprite1 to say z?");
  t.typeText('10');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "invalid", "Expected Sprite Sprite1 to say invalid");
  t.end();
}
const test2 = async function (t) {
  await t.runForSteps(50);
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
  await t.runForSteps(60);
  await t.runForSteps(1);
  await t.runForSteps(7);
  await t.runForSteps(1);
  await t.runForSteps(71);
  await t.runForSteps(1);
  await t.runForSteps(62);
  await t.runForSteps(1);
  await t.runForSteps(54);
  await t.runForSteps(1);
  await t.runForSteps(14);
  await t.runForSteps(1);
  await t.runForSteps(80);
  await t.runForSteps(1);
  await t.runForSteps(30);
  await t.runForSteps(1);
  await t.runForSteps(40);
  await t.runForSteps(1);
  await t.runForSteps(53);
  await t.runForSteps(1);
  await t.runForSteps(96);
  await t.runForSteps(1);
  await t.runForSteps(89);
  await t.runForSteps(1);
  await t.runForSteps(42);
  await t.runForSteps(1);
  await t.runForSteps(10);
  await t.runForSteps(1);
  await t.runForSteps(39);
  await t.runForSteps(1);
  await t.runForSteps(100);
  await t.runForSteps(1);
  await t.runForSteps(100);
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
      seed: '1687937637728',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937637728',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937637728',
      type: 'standard',
  }
]
