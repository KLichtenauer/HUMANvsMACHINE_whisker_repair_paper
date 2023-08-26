const test0 = async function (t) {
  await t.runForSteps(75);
  await t.runForSteps(1);
  t.typeText('10');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "b?", "Expected Sprite Sprite1 to say b?");
  t.typeText('-203');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "c?", "Expected Sprite Sprite1 to say c?");
  t.typeText('0');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "d?", "Expected Sprite Sprite1 to say d?");
  t.typeText('Hello');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "angle?", "Expected Sprite Sprite1 to say angle?");
  t.typeText('brO');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "invalid", "Expected Sprite Sprite1 to say invalid");
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(35);
  await t.runForSteps(1);
  t.typeText('90');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "b?", "Expected Sprite Sprite1 to say b?");
  t.typeText('0');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "c?", "Expected Sprite Sprite1 to say c?");
  t.typeText('90');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "d?", "Expected Sprite Sprite1 to say d?");
  t.typeText('0');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "angle?", "Expected Sprite Sprite1 to say angle?");
  t.typeText('90');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "rectangle", "Expected Sprite Sprite1 to say rectangle");
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.end();
}
const test2 = async function (t) {
  await t.runForSteps(43);
  await t.runForSteps(1);
  t.typeText('Hello');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "b?", "Expected Sprite Sprite1 to say b?");
  t.typeText('Hello');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "c?", "Expected Sprite Sprite1 to say c?");
  t.typeText('Hello');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "d?", "Expected Sprite Sprite1 to say d?");
  t.typeText('Hello');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "angle?", "Expected Sprite Sprite1 to say angle?");
  t.typeText('brO');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "rhombus", "Expected Sprite Sprite1 to say rhombus");
  t.end();
}
const test3 = async function (t) {
  await t.runForSteps(13);
  await t.runForSteps(1);
  t.typeText('brO');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "b?", "Expected Sprite Sprite1 to say b?");
  t.typeText('90');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "c?", "Expected Sprite Sprite1 to say c?");
  t.typeText('brO');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "d?", "Expected Sprite Sprite1 to say d?");
  t.typeText('90');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "angle?", "Expected Sprite Sprite1 to say angle?");
  t.typeText('Hello');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "parallelogram", "Expected Sprite Sprite1 to say parallelogram");
  await t.runForSteps(86);
  await t.runForSteps(1);
  t.end();
}
const test4 = async function (t) {
  await t.runForSteps(68);
  await t.runForSteps(1);
  t.typeText('90');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "b?", "Expected Sprite Sprite1 to say b?");
  t.typeText('brO');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "c?", "Expected Sprite Sprite1 to say c?");
  t.typeText('brO');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "d?", "Expected Sprite Sprite1 to say d?");
  t.typeText('brO');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "angle?", "Expected Sprite Sprite1 to say angle?");
  t.typeText('90');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "quadrilateral", "Expected Sprite Sprite1 to say quadrilateral");
  await t.runForSteps(50);
  await t.runForSteps(1);
  await t.runForSteps(16);
  await t.runForSteps(1);
  await t.runForSteps(3);
  await t.runForSteps(1);
  await t.runForSteps(24);
  await t.runForSteps(1);
  await t.runForSteps(47);
  await t.runForSteps(1);
  await t.runForSteps(68);
  await t.runForSteps(1);
  await t.runForSteps(7);
  await t.runForSteps(1);
  await t.runForSteps(39);
  await t.runForSteps(1);
  await t.runForSteps(88);
  await t.runForSteps(1);
  await t.runForSteps(99);
  await t.runForSteps(1);
  await t.runForSteps(94);
  await t.runForSteps(1);
  await t.runForSteps(44);
  await t.runForSteps(1);
  await t.runForSteps(20);
  await t.runForSteps(1);
  await t.runForSteps(31);
  await t.runForSteps(1);
  await t.runForSteps(95);
  await t.runForSteps(1);
  await t.runForSteps(70);
  await t.runForSteps(1);
  await t.runForSteps(51);
  await t.runForSteps(1);
  await t.runForSteps(2);
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
      seed: '1687938510089',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938510089',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938510089',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938510089',
      type: 'standard',
  },
  {
      test: test4,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938510089',
      type: 'standard',
  }
]
