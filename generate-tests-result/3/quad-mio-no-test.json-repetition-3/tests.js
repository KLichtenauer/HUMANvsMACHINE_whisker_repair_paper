const test0 = async function (t) {
  await t.runForSteps(6);
  await t.runForSteps(1);
  t.typeText('90');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "b?", "Expected Sprite Sprite1 to say b?");
  t.typeText('-20');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "c?", "Expected Sprite Sprite1 to say c?");
  t.typeText('0');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "d?", "Expected Sprite Sprite1 to say d?");
  t.typeText('Hello');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "angle?", "Expected Sprite Sprite1 to say angle?");
  t.typeText('0');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "invalid", "Expected Sprite Sprite1 to say invalid");
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(45);
  await t.runForSteps(1);
  t.typeText('6Ka');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "b?", "Expected Sprite Sprite1 to say b?");
  t.typeText('0');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "c?", "Expected Sprite Sprite1 to say c?");
  t.typeText('6Ka');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "d?", "Expected Sprite Sprite1 to say d?");
  t.typeText('0');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "angle?", "Expected Sprite Sprite1 to say angle?");
  t.typeText('45');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "parallelogram", "Expected Sprite Sprite1 to say parallelogram");
  await t.runForSteps(63);
  await t.runForSteps(1);
  t.end();
}
const test2 = async function (t) {
  await t.runForSteps(66);
  await t.runForSteps(1);
  t.typeText('10');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "b?", "Expected Sprite Sprite1 to say b?");
  t.typeText('Hello');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "c?", "Expected Sprite Sprite1 to say c?");
  t.typeText('6Ka');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "d?", "Expected Sprite Sprite1 to say d?");
  t.typeText('Hello');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "angle?", "Expected Sprite Sprite1 to say angle?");
  t.typeText('6Ka');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "quadrilateral", "Expected Sprite Sprite1 to say quadrilateral");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936829908',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936829908',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936829908',
      type: 'standard',
  }
]
