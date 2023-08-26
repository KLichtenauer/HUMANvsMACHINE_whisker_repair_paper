const test0 = async function (t) {
  await t.runForSteps(41);
  await t.runForSteps(1);
  t.typeText('0');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "false", "Expected Sprite Sprite1 to say false");
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(74);
  await t.runForSteps(1);
  t.typeText('183');
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Sprite1").sayText, "Expected Sprite Sprite1 not to say anything");
  await t.runForSteps(17);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "false", "Expected Sprite Sprite1 to say false");
  await t.runForSteps(21);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(19);
  await t.runForSteps(1);
  await t.runForSteps(84);
  await t.runForSteps(1);
  await t.runForSteps(9);
  await t.runForSteps(1);
  await t.runForSteps(2);
  await t.runForSteps(1);
  await t.runForSteps(61);
  await t.runForSteps(1);
  await t.runForSteps(25);
  await t.runForSteps(1);
  await t.runForSteps(68);
  await t.runForSteps(1);
  await t.runForSteps(75);
  await t.runForSteps(1);
  await t.runForSteps(50);
  await t.runForSteps(1);
  await t.runForSteps(77);
  await t.runForSteps(1);
  await t.runForSteps(44);
  await t.runForSteps(1);
  await t.runForSteps(5);
  await t.runForSteps(1);
  await t.runForSteps(7);
  await t.runForSteps(1);
  await t.runForSteps(88);
  await t.runForSteps(1);
  t.end();
}
const test2 = async function (t) {
  await t.runForSteps(69);
  await t.runForSteps(1);
  t.typeText('17');
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Sprite1").sayText, "Expected Sprite Sprite1 not to say anything");
  await t.runForSteps(26);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sprite1").sayText, "true", "Expected Sprite Sprite1 to say true");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938479074',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938479074',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938479074',
      type: 'standard',
  }
]
