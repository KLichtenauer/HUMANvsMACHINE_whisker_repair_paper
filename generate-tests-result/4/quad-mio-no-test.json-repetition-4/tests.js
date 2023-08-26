const test0 = async function (t) {
  await t.runForSteps(45);
  await t.runForSteps(1);
  t.typeText('10');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "b?", "Expected Sprite Sprite1 to say b?");
  t.typeText('-5');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "c?", "Expected Sprite Sprite1 to say c?");
  t.typeText('bpJ');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "d?", "Expected Sprite Sprite1 to say d?");
  t.typeText('bpJ');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "angle?", "Expected Sprite Sprite1 to say angle?");
  t.typeText('10');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "invalid", "Expected Sprite Sprite1 to say invalid");
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(43);
  await t.runForSteps(1);
  t.typeText('0');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "b?", "Expected Sprite Sprite1 to say b?");
  t.typeText('bpJ');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "c?", "Expected Sprite Sprite1 to say c?");
  t.typeText('0');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "d?", "Expected Sprite Sprite1 to say d?");
  t.typeText('bpJ');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "angle?", "Expected Sprite Sprite1 to say angle?");
  t.typeText('90');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "rectangle", "Expected Sprite Sprite1 to say rectangle");
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.end();
}
const test2 = async function (t) {
  await t.runForSteps(70);
  await t.runForSteps(1);
  t.typeText('Hello');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "b?", "Expected Sprite Sprite1 to say b?");
  t.typeText('bpJ');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "c?", "Expected Sprite Sprite1 to say c?");
  t.typeText('Hello');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "d?", "Expected Sprite Sprite1 to say d?");
  t.typeText('bpJ');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "angle?", "Expected Sprite Sprite1 to say angle?");
  t.typeText('10');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "parallelogram", "Expected Sprite Sprite1 to say parallelogram");
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.end();
}
const test3 = async function (t) {
  await t.runForSteps(81);
  await t.runForSteps(1);
  t.typeText('10');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "b?", "Expected Sprite Sprite1 to say b?");
  t.typeText('10');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "c?", "Expected Sprite Sprite1 to say c?");
  t.typeText('10');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "d?", "Expected Sprite Sprite1 to say d?");
  t.typeText('bpJ');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "angle?", "Expected Sprite Sprite1 to say angle?");
  t.typeText('90');
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
      seed: '1687937671138',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937671138',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937671138',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937671138',
      type: 'standard',
  }
]
