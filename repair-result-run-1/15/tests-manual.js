const setVar = function (t, name, value) {
  const variable = t.getStage().getVariable(name).getScratchVariable();
  variable.value = value;
};

const test0 = async function (t) {
  setVar(t, 'x', 0);
  await t.runUntil(() => t.getSprite('Sprite1').sayText, 500);
  t.assert.equal(t.getSprite('Sprite1').sayText, 'false');
};
const test2 = async function (t) {
  setVar(t, 'x', 2);
  await t.runUntil(() => t.getSprite('Sprite1').sayText, 500);
  t.assert.equal(t.getSprite('Sprite1').sayText, 'true');
};
const test4 = async function (t) {
  setVar(t, 'x', 4);
  await t.runUntil(() => t.getSprite('Sprite1').sayText, 500);
  t.assert.equal(t.getSprite('Sprite1').sayText, 'false');
};
const test9 = async function (t) {
  setVar(t, 'x', 9);
  await t.runUntil(() => t.getSprite('Sprite1').sayText, 500);
  t.assert.equal(t.getSprite('Sprite1').sayText, 'false');
};
const test11 = async function (t) {
  setVar(t, 'x', 11);
  await t.runUntil(() => t.getSprite('Sprite1').sayText, 500);
  t.assert.equal(t.getSprite('Sprite1').sayText, 'true');
};
const testn1 = async function (t) {
  setVar(t, 'x', -1);
  await t.runUntil(() => t.getSprite('Sprite1').sayText, 500);
  t.assert.equal(t.getSprite('Sprite1').sayText, 'false');
};
const test1 = async function (t) {
  setVar(t, 'x', 1);
  await t.runUntil(() => t.getSprite('Sprite1').sayText, 500);
  t.assert.equal(t.getSprite('Sprite1').sayText, 'false');
};
const test3 = async function (t) {
  setVar(t, 'x', 3);
  await t.runUntil(() => t.getSprite('Sprite1').sayText, 500);
  t.assert.equal(t.getSprite('Sprite1').sayText, 'true');
};
const test5 = async function (t) {
  setVar(t, 'x', 5);
  await t.runUntil(() => t.getSprite('Sprite1').sayText, 500);
  t.assert.equal(t.getSprite('Sprite1').sayText, 'true');
};
const test7 = async function (t) {
  setVar(t, 'x', 7);
  await t.runUntil(() => t.getSprite('Sprite1').sayText, 500);
  t.assert.equal(t.getSprite('Sprite1').sayText, 'true');
};

module.exports = [
  {
    test: test0,
    name: '0',
    description: '0 is not prime',
    categories: []
  },
  {
    test: test1,
    name: '1',
    description: '1 is not prime',
    categories: []
  },
  {
    test: test2,
    name: '2',
    description: '2 is prime',
    categories: []
  },
  {
    test: test3,
    name: '3',
    description: '3 is prime',
    categories: []
  },
  {
    test: test4,
    name: '4',
    description: '4 is not prime',
    categories: []
  },
  {
    test: test5,
    name: '5',
    description: '5 is prime',
    categories: []
  },
  {
    test: test7,
    name: '7',
    description: '7 is prime',
    categories: []
  },
  {
    test: test9,
    name: '9',
    description: '9 is not prime',
    categories: []
  },
  {
    test: test11,
    name: '11',
    description: '11 is prime',
    categories: []
  },
  {
    test: testn1,
    name: '-1',
    description: '-1 is not prime',
    categories: []
  },
]

