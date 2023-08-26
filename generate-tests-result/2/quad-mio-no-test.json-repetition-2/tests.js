const test0 = async function (t) {
  await t.runForSteps(62);
  await t.runForSteps(1);
  t.typeText('Hello');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "b?", "Expected Sprite Sprite1 to say b?");
  t.typeText('Hello');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "c?", "Expected Sprite Sprite1 to say c?");
  t.typeText('-27');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "d?", "Expected Sprite Sprite1 to say d?");
  t.typeText('94');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "angle?", "Expected Sprite Sprite1 to say angle?");
  t.typeText('10');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "invalid", "Expected Sprite Sprite1 to say invalid");
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(27);
  await t.runForSteps(1);
  t.typeText('RQ1');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "b?", "Expected Sprite Sprite1 to say b?");
  t.typeText('RQ1');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "c?", "Expected Sprite Sprite1 to say c?");
  t.typeText('RQ1');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "d?", "Expected Sprite Sprite1 to say d?");
  t.typeText('RQ1');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "angle?", "Expected Sprite Sprite1 to say angle?");
  t.typeText('175');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "rhombus", "Expected Sprite Sprite1 to say rhombus");
  await t.runForSteps(39);
  await t.runForSteps(1);
  t.end();
}
const test2 = async function (t) {
  await t.runForSteps(41);
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
      seed: '1687939249376',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687939249376',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687939249376',
      type: 'standard',
  }
]
