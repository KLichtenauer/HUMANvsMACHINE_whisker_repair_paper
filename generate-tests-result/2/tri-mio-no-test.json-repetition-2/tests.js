const test0 = async function (t) {
  await t.runForSteps(36);
  await t.runForSteps(1);
  t.typeText('10');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "y?", "Expected Sprite Sprite1 to say y?");
  t.typeText('10');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "z?", "Expected Sprite Sprite1 to say z?");
  t.typeText('0');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "invalid", "Expected Sprite Sprite1 to say invalid");
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(79);
  await t.runForSteps(1);
  t.typeText('10');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "y?", "Expected Sprite Sprite1 to say y?");
  t.typeText('Hello');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "z?", "Expected Sprite Sprite1 to say z?");
  t.typeText('-238');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "invalid", "Expected Sprite Sprite1 to say invalid");
  t.end();
}
const test2 = async function (t) {
  await t.runForSteps(85);
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
  await t.runForSteps(95);
  await t.runForSteps(1);
  await t.runForSteps(22);
  await t.runForSteps(1);
  await t.runForSteps(66);
  await t.runForSteps(1);
  await t.runForSteps(37);
  await t.runForSteps(1);
  await t.runForSteps(9);
  await t.runForSteps(1);
  await t.runForSteps(29);
  await t.runForSteps(1);
  await t.runForSteps(75);
  await t.runForSteps(1);
  await t.runForSteps(5);
  await t.runForSteps(1);
  await t.runForSteps(75);
  await t.runForSteps(1);
  await t.runForSteps(68);
  await t.runForSteps(1);
  await t.runForSteps(91);
  await t.runForSteps(1);
  await t.runForSteps(44);
  await t.runForSteps(1);
  await t.runForSteps(97);
  await t.runForSteps(1);
  await t.runForSteps(25);
  await t.runForSteps(1);
  await t.runForSteps(34);
  await t.runForSteps(1);
  await t.runForSteps(22);
  await t.runForSteps(1);
  await t.runForSteps(68);
  await t.runForSteps(1);
  await t.runForSteps(7);
  await t.runForSteps(1);
  await t.runForSteps(2);
  await t.runForSteps(1);
  await t.runForSteps(20);
  await t.runForSteps(1);
  await t.runForSteps(2);
  await t.runForSteps(1);
  await t.runForSteps(18);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(99);
  await t.runForSteps(1);
  await t.runForSteps(9);
  await t.runForSteps(1);
  await t.runForSteps(10);
  await t.runForSteps(1);
  await t.runForSteps(78);
  await t.runForSteps(1);
  await t.runForSteps(76);
  await t.runForSteps(1);
  await t.runForSteps(9);
  await t.runForSteps(1);
  await t.runForSteps(200);
  await t.runForSteps(1);
  await t.runForSteps(78);
  await t.runForSteps(1);
  await t.runForSteps(36);
  await t.runForSteps(1);
  await t.runForSteps(23);
  await t.runForSteps(1);
  await t.runForSteps(76);
  await t.runForSteps(1);
  await t.runForSteps(93);
  await t.runForSteps(1);
  await t.runForSteps(29);
  await t.runForSteps(1);
  await t.runForSteps(29);
  await t.runForSteps(1);
  await t.runForSteps(38);
  await t.runForSteps(1);
  await t.runForSteps(58);
  await t.runForSteps(1);
  await t.runForSteps(18);
  await t.runForSteps(1);
  await t.runForSteps(32);
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
      seed: '1687939229207',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687939229207',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687939229207',
      type: 'standard',
  }
]
