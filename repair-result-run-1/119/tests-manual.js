const test123 = async function (t) {
  t.setGlobalVariable('x', 1);
  t.setGlobalVariable('y', 2);
  t.setGlobalVariable('z', 3);
  t.setGlobalVariable('mid', 0);
  await t.runUntil(() => t.getSprite('Sprite1').sayText, 500);
  t.assert.equal(t.getSprite('Sprite1').sayText, '2');
};
const test321 = async function (t) {
  t.setGlobalVariable('x', 3);
  t.setGlobalVariable('y', 2);
  t.setGlobalVariable('z', 1);
  t.setGlobalVariable('mid', 0);
  await t.runUntil(() => t.getSprite('Sprite1').sayText, 500);
  t.assert.equal(t.getSprite('Sprite1').sayText, '2');
};
const test231 = async function (t) {
  t.setGlobalVariable('x', 2);
  t.setGlobalVariable('y', 3);
  t.setGlobalVariable('z', 1);
  t.setGlobalVariable('mid', 0);
  await t.runUntil(() => t.getSprite('Sprite1').sayText, 500);
  t.assert.equal(t.getSprite('Sprite1').sayText, '2');
};
const test132 = async function (t) {
  t.setGlobalVariable('x', 1);
  t.setGlobalVariable('y', 3);
  t.setGlobalVariable('z', 2);
  t.setGlobalVariable('mid', 0);
  await t.runUntil(() => t.getSprite('Sprite1').sayText, 500);
  t.assert.equal(t.getSprite('Sprite1').sayText, '2');
};
const test223 = async function (t) {
  t.setGlobalVariable('x', 2);
  t.setGlobalVariable('y', 2);
  t.setGlobalVariable('z', 3);
  t.setGlobalVariable('mid', 0);
  await t.runUntil(() => t.getSprite('Sprite1').sayText, 500);
  t.assert.equal(t.getSprite('Sprite1').sayText, '2');
};
const test323 = async function (t) {
  t.setGlobalVariable('x', 3);
  t.setGlobalVariable('y', 2);
  t.setGlobalVariable('z', 3);
  t.setGlobalVariable('mid', 0);
  await t.runUntil(() => t.getSprite('Sprite1').sayText, 500);
  t.assert.equal(t.getSprite('Sprite1').sayText, '3');
};
const test213 = async function (t) {
  t.setGlobalVariable('x', 2);
  t.setGlobalVariable('y', 1);
  t.setGlobalVariable('z', 3);
  t.setGlobalVariable('mid', 0);
  await t.runUntil(() => t.getSprite('Sprite1').sayText, 500);
  t.assert.equal(t.getSprite('Sprite1').sayText, '2');
};
const test777 = async function (t) {
  t.setGlobalVariable('x', 7);
  t.setGlobalVariable('y', 7);
  t.setGlobalVariable('z', 7);
  t.setGlobalVariable('mid', 0);
  await t.runUntil(() => t.getSprite('Sprite1').sayText, 500);
  t.assert.equal(t.getSprite('Sprite1').sayText, '7');
};
module.exports = [
  {
    test: test123,
    name: '123',
    description: '',
    categories: []
  },
  {
    test: test321,
    name: '321',
    description: '',
    categories: []
  },
  {
    test: test231,
    name: '231',
    description: '',
    categories: []
  },
  {
    test: test132,
    name: '132',
    description: '',
    categories: []
  },
  {
    test: test223,
    name: '223',
    description: '',
    categories: []
  },
  {
    test: test323,
    name: '323',
    description: '',
    categories: []
  },
  {
    test: test213,
    name: '213',
    description: '',
    categories: []
  },
  {
    test: test777,
    name: '777',
    description: '',
    categories: []
  }
];
