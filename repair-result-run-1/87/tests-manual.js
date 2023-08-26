const setVar = function (t, name, value) {
  const variable = t.getStage().getVariable(name).getScratchVariable();
  variable.value = value;
}

// INVALID because of negative length
const invalidX = async function (t) {
  setVar(t, 'x', -1);
  setVar(t, 'y', 1);
  setVar(t, 'z', 1);
  await t.runUntil(() => t.getSprite('Sprite1').sayText, 500);
  t.assert.equal(t.getSprite('Sprite1').sayText, 'invalid');
};
const invalidY = async function (t) {
  setVar(t, 'x', 1);
  setVar(t, 'y', -1);
  setVar(t, 'z', 1);
  await t.runUntil(() => t.getSprite('Sprite1').sayText, 500);
  t.assert.equal(t.getSprite('Sprite1').sayText, 'invalid');
};
const invalidZ = async function (t) {
  setVar(t, 'x', 1);
  setVar(t, 'y', 1);
  setVar(t, 'z', -1);
  await t.runUntil(() => t.getSprite('Sprite1').sayText, 500);
  t.assert.equal(t.getSprite('Sprite1').sayText, 'invalid');
};

// INVALID because one side is too long
const longX = async function (t) {
  setVar(t, 'x', 5);
  setVar(t, 'y', 1);
  setVar(t, 'z', 2);
  await t.runUntil(() => t.getSprite('Sprite1').sayText, 500);
  t.assert.equal(t.getSprite('Sprite1').sayText, 'invalid');
};
const longY = async function (t) {
  setVar(t, 'x', 1);
  setVar(t, 'y', 5);
  setVar(t, 'z', 2);
  await t.runUntil(() => t.getSprite('Sprite1').sayText, 500);
  t.assert.equal(t.getSprite('Sprite1').sayText, 'invalid');
};
const longZ = async function (t) {
  setVar(t, 'x', 2);
  setVar(t, 'y', 5);
  setVar(t, 'z', 1);
  await t.runUntil(() => t.getSprite('Sprite1').sayText, 500);
  t.assert.equal(t.getSprite('Sprite1').sayText, 'invalid');
};

// EQUILATERAL because all sides have the same length
const equilateral = async function (t) {
  setVar(t, 'x', 1);
  setVar(t, 'y', 1);
  setVar(t, 'z', 1);
  await t.runUntil(() => t.getSprite('Sprite1').sayText, 500);
  t.assert.equal(t.getSprite('Sprite1').sayText, 'equilateral');
};

// ISOSCELES because two sides have the same length
const isoXY = async function (t) {
  setVar(t, 'x', 3);
  setVar(t, 'y', 3);
  setVar(t, 'z', 1);
  await t.runUntil(() => t.getSprite('Sprite1').sayText, 500);
  t.assert.equal(t.getSprite('Sprite1').sayText, 'isosceles');
};
const isoXZ = async function (t) {
  setVar(t, 'x', 3);
  setVar(t, 'y', 1);
  setVar(t, 'z', 3);
  await t.runUntil(() => t.getSprite('Sprite1').sayText, 500);
  t.assert.equal(t.getSprite('Sprite1').sayText, 'isosceles');
};
const isoYZ = async function (t) {
  setVar(t, 'x', 1);
  setVar(t, 'y', 3);
  setVar(t, 'z', 3);
  await t.runUntil(() => t.getSprite('Sprite1').sayText, 500);
  t.assert.equal(t.getSprite('Sprite1').sayText, 'isosceles');
};

// SCALENE
const scalene = async function (t) {
  setVar(t, 'x', 3);
  setVar(t, 'y', 4);
  setVar(t, 'z', 5);
  await t.runUntil(() => t.getSprite('Sprite1').sayText, 500);
  t.assert.equal(t.getSprite('Sprite1').sayText, 'scalene');
};

module.exports = [
  {
    test: invalidX,
    name: 'x is invalid',
    description: '',
    categories: []
  },
  {
    test: invalidY,
    name: 'y is invalid',
    description: '',
    categories: []
  },
  {
    test: invalidZ,
    name: 'z is invalid',
    description: '',
    categories: []
  },

  {
    test: longX,
    name: 'x is too long',
    description: '',
    categories: []
  },
  {
    test: longY,
    name: 'y is too long',
    description: '',
    categories: []
  },
  {
    test: longZ,
    name: 'z is too long',
    description: '',
    categories: []
  },

  {
    test: equilateral,
    name: 'equilateral',
    description: '',
    categories: []
  },

  {
    test: isoXY,
    name: 'isosceles x == y',
    description: '',
    categories: []
  },
  {
    test: isoXZ,
    name: 'isosceles x == z',
    description: '',
    categories: []
  },
  {
    test: isoYZ,
    name: 'isosceles y == z',
    description: '',
    categories: []
  },

  {
    test: scalene,
    name: 'scalene',
    description: '',
    categories: []
  }
];
