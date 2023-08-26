const test0 = async function (t) {
  await t.runForSteps(77);
  await t.runForSteps(1);
  t.typeText('-121');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "y?", "Expected Sprite Sprite1 to say y?");
  t.typeText('10');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "z?", "Expected Sprite Sprite1 to say z?");
  t.typeText('186');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "186", "Expected Sprite Sprite1 to say 186");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687936642382',
      type: 'standard',
  }
]
