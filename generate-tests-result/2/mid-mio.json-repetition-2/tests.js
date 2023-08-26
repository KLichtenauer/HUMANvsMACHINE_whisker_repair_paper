const test0 = async function (t) {
  await t.runForSteps(59);
  await t.runForSteps(1);
  t.typeText('0');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "y?", "Expected Sprite Sprite1 to say y?");
  t.typeText('-130');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "z?", "Expected Sprite Sprite1 to say z?");
  t.typeText('Hello');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "0", "Expected Sprite Sprite1 to say 0");
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(47);
  await t.runForSteps(1);
  t.typeText('97');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "y?", "Expected Sprite Sprite1 to say y?");
  t.typeText('Kcz');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "z?", "Expected Sprite Sprite1 to say z?");
  t.typeText('10');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "97", "Expected Sprite Sprite1 to say 97");
  t.end();
}
const test2 = async function (t) {
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.typeText('-96');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "y?", "Expected Sprite Sprite1 to say y?");
  t.typeText('10');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "z?", "Expected Sprite Sprite1 to say z?");
  t.typeText('Hello');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "10", "Expected Sprite Sprite1 to say 10");
  t.end();
}
const test3 = async function (t) {
  await t.runForSteps(78);
  await t.runForSteps(1);
  t.typeText('Hello');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "y?", "Expected Sprite Sprite1 to say y?");
  t.typeText('10');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "z?", "Expected Sprite Sprite1 to say z?");
  t.typeText('10');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "10", "Expected Sprite Sprite1 to say 10");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938965252',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938965252',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938965252',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938965252',
      type: 'standard',
  }
]
