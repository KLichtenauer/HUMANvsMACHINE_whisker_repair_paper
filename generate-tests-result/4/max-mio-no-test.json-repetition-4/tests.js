const test0 = async function (t) {
  await t.runForSteps(74);
  await t.runForSteps(1);
  t.typeText('-15');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "y?", "Expected Sprite Sprite1 to say y?");
  t.typeText('10');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "z?", "Expected Sprite Sprite1 to say z?");
  t.typeText('lhi');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "lhi", "Expected Sprite Sprite1 to say lhi");
  await t.runForSteps(6);
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
      seed: '1687937613087',
      type: 'standard',
  }
]
