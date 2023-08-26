const test0 = async function (t) {
  await t.runForSteps(85);
  await t.runForSteps(1);
  t.typeText('-116');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "y?", "Expected Sprite Sprite1 to say y?");
  t.typeText('0');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "z?", "Expected Sprite Sprite1 to say z?");
  t.typeText('afk');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "afk", "Expected Sprite Sprite1 to say afk");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687937349568',
      type: 'standard',
  }
]
