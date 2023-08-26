const test0 = async function (t) {
  await t.runForSteps(400);
  await t.runForSteps(1);
  t.typeText('0');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "b?", "Expected Sprite Sprite1 to say b?");
  t.typeText('DW6');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "c?", "Expected Sprite Sprite1 to say c?");
  t.typeText('0');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "d?", "Expected Sprite Sprite1 to say d?");
  t.typeText('DW6');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "angle?", "Expected Sprite Sprite1 to say angle?");
  t.typeText('Hello');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "parallelogram", "Expected Sprite Sprite1 to say parallelogram");
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(60);
  await t.runForSteps(1);
  t.typeText('DW6');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "b?", "Expected Sprite Sprite1 to say b?");
  t.typeText('DW6');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "c?", "Expected Sprite Sprite1 to say c?");
  t.typeText('DW6');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "d?", "Expected Sprite Sprite1 to say d?");
  t.typeText('210');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "angle?", "Expected Sprite Sprite1 to say angle?");
  t.typeText('90');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "quadrilateral", "Expected Sprite Sprite1 to say quadrilateral");
  t.end();
}
const test2 = async function (t) {
  await t.runForSteps(73);
  await t.runForSteps(1);
  t.typeText('90');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "b?", "Expected Sprite Sprite1 to say b?");
  t.typeText('90');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "c?", "Expected Sprite Sprite1 to say c?");
  t.typeText('90');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "d?", "Expected Sprite Sprite1 to say d?");
  t.typeText('90');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "angle?", "Expected Sprite Sprite1 to say angle?");
  t.typeText('-181');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "rhombus", "Expected Sprite Sprite1 to say rhombus");
  t.end();
}
const test3 = async function (t) {
  await t.runForSteps(6);
  await t.runForSteps(1);
  t.typeText('10');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "b?", "Expected Sprite Sprite1 to say b?");
  t.typeText('-8');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "c?", "Expected Sprite Sprite1 to say c?");
  t.typeText('Hello');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "d?", "Expected Sprite Sprite1 to say d?");
  t.typeText('Hello');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "angle?", "Expected Sprite Sprite1 to say angle?");
  t.typeText('Hello');
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
      seed: '1687937390562',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937390562',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937390562',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937390562',
      type: 'standard',
  }
]
