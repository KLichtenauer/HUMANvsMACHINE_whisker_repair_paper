const setVar = function (t, name, value) {
  const variable = t.getStage().getVariable(name).getScratchVariable();
  variable.value = value;
}

const invalidA = async function (t) {
  setVar(t, 'a', -1);
  setVar(t, 'b', 1);
  setVar(t, 'c', 1);
  setVar(t, 'd', 1);
  setVar(t, 'angle', 1);
  await t.runUntil(() => t.getSprite('Sprite1').sayText, 500);
  t.assert.equal(t.getSprite('Sprite1').sayText, 'invalid');
};

const invalidB = async function (t) {
  setVar(t, 'a', 1);
  setVar(t, 'b', -1);
  setVar(t, 'c', 1);
  setVar(t, 'd', 1);
  setVar(t, 'angle', 1);
  await t.runUntil(() => t.getSprite('Sprite1').sayText, 500);
  t.assert.equal(t.getSprite('Sprite1').sayText, 'invalid');
};

const invalidC = async function (t) {
  setVar(t, 'a', 1);
  setVar(t, 'b', 1);
  setVar(t, 'c', -1);
  setVar(t, 'd', 1);
  setVar(t, 'angle', 1);
  await t.runUntil(() => t.getSprite('Sprite1').sayText, 500);
  t.assert.equal(t.getSprite('Sprite1').sayText, 'invalid');
};

const invalidD = async function (t) {
  setVar(t, 'a', 1);
  setVar(t, 'b', 1);
  setVar(t, 'c', 1);
  setVar(t, 'd', -1);
  setVar(t, 'angle', 1);
  await t.runUntil(() => t.getSprite('Sprite1').sayText, 500);
  t.assert.equal(t.getSprite('Sprite1').sayText, 'invalid');
};

const square = async function (t) {
  setVar(t, 'a', 1);
  setVar(t, 'b', 1);
  setVar(t, 'c', 1);
  setVar(t, 'd', 1);
  setVar(t, 'angle', 90);
  await t.runUntil(() => t.getSprite('Sprite1').sayText, 500);
  t.assert.equal(t.getSprite('Sprite1').sayText, 'square');
};

const rectangle = async function (t) {
  setVar(t, 'a', 1);
  setVar(t, 'b', 2);
  setVar(t, 'c', 1);
  setVar(t, 'd', 2);
  setVar(t, 'angle', 90);
  await t.runUntil(() => t.getSprite('Sprite1').sayText, 500);
  t.assert.equal(t.getSprite('Sprite1').sayText, 'rectangle');
};

const rhombus = async function (t) {
  setVar(t, 'a', 1);
  setVar(t, 'b', 1);
  setVar(t, 'c', 1);
  setVar(t, 'd', 1);
  setVar(t, 'angle', 45);
  await t.runUntil(() => t.getSprite('Sprite1').sayText, 500);
  t.assert.equal(t.getSprite('Sprite1').sayText, 'rhombus');
};

const parallelogram = async function (t) {
  setVar(t, 'a', 1);
  setVar(t, 'b', 2);
  setVar(t, 'c', 1);
  setVar(t, 'd', 2);
  setVar(t, 'angle', 45);
  await t.runUntil(() => t.getSprite('Sprite1').sayText, 500);
  t.assert.equal(t.getSprite('Sprite1').sayText, 'parallelogram');
};

const quadrilateral = async function (t) {
  setVar(t, 'a', 1);
  setVar(t, 'b', 2);
  setVar(t, 'c', 1);
  setVar(t, 'd', 3);
  setVar(t, 'angle', 45);
  await t.runUntil(() => t.getSprite('Sprite1').sayText, 500);
  t.assert.equal(t.getSprite('Sprite1').sayText, 'quadrilateral');
};

module.exports = [
  {
    test: invalidA,
    name: 'a is invalid',
    description: '',
    categories: []
  },
  {
    test: invalidB,
    name: 'b is invalid',
    description: '',
    categories: []
  },
  {
    test: invalidC,
    name: 'c is invalid',
    description: '',
    categories: []
  },
  {
    test: invalidD,
    name: 'd is invalid',
    description: '',
    categories: []
  },
  {
    test: square,
    name: 'square',
    description: '',
    categories: []
  },
  {
    test: rectangle,
    name: 'rectangle',
    description: '',
    categories: []
  },
  {
    test: rhombus,
    name: 'rhombus',
    description: '',
    categories: []
  },
  {
    test: parallelogram,
    name: 'parallelogram',
    description: '',
    categories: []
  },
  {
    test: quadrilateral,
    name: 'quadrilateral',
    description: '',
    categories: []
  },
];
