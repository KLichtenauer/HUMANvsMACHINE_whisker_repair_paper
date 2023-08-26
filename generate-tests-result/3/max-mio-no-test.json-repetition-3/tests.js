const test0 = async function (t) {
  await t.runForSteps(79);
  await t.runForSteps(1);
  t.typeText('-97');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "y?", "Expected Sprite Sprite1 to say y?");
  t.typeText('10');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "z?", "Expected Sprite Sprite1 to say z?");
  t.typeText('228');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "228", "Expected Sprite Sprite1 to say 228");
  await t.runForSteps(23);
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
      seed: '1687936799936',
      type: 'standard',
  }
]
