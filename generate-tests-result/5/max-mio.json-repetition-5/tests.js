const test0 = async function (t) {
  await t.runForSteps(41);
  await t.runForSteps(1);
  t.typeText('10');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "y?", "Expected Sprite Sprite1 to say y?");
  t.typeText('Hello');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "z?", "Expected Sprite Sprite1 to say z?");
  t.typeText('klc');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "klc", "Expected Sprite Sprite1 to say klc");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938151777',
      type: 'standard',
  }
]
