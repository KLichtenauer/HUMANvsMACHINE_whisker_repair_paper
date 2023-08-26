const test0 = async function (t) {
  await t.runForSteps(38);
  await t.runForSteps(1);
  t.typeText('-207');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "b?", "Expected Sprite Sprite1 to say b?");
  t.typeText('10');
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
  t.assert.equal(t.getSprite("Sprite1").sayText, "invalid", "Expected Sprite Sprite1 to say invalid");
  t.end();
}
const test1 = async function (t) {
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
  t.typeText('90');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "angle?", "Expected Sprite Sprite1 to say angle?");
  t.typeText('90');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "quadrilateral", "Expected Sprite Sprite1 to say quadrilateral");
  await t.runForSteps(99);
  await t.runForSteps(1);
  await t.runForSteps(77);
  await t.runForSteps(1);
  await t.runForSteps(70);
  await t.runForSteps(1);
  await t.runForSteps(61);
  await t.runForSteps(1);
  await t.runForSteps(19);
  await t.runForSteps(1);
  await t.runForSteps(58);
  await t.runForSteps(1);
  await t.runForSteps(25);
  await t.runForSteps(1);
  await t.runForSteps(57);
  await t.runForSteps(1);
  await t.runForSteps(54);
  await t.runForSteps(1);
  await t.runForSteps(51);
  await t.runForSteps(1);
  await t.runForSteps(50);
  await t.runForSteps(1);
  await t.runForSteps(39);
  await t.runForSteps(1);
  await t.runForSteps(19);
  await t.runForSteps(1);
  await t.runForSteps(59);
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
      seed: '1687849508697',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687849508697',
      type: 'standard',
  }
]
