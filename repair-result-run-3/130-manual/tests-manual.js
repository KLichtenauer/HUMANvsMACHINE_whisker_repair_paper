const rocketVisible = async function (t) {
    let rocket = t.getSprites(sprite => sprite.name.includes('Raumschiff'))[0];
    t.greenFlag();
    await t.runForSteps(3);
    t.assert.ok(rocket.visible, 'rocket must be visible');
    t.end();
};

const blackHoleVisible = async function (t) {
    let hole = t.getSprites(sprite => sprite.name.includes('Schwarz'))[0];
    t.greenFlag();
    await t.runForSteps(3);
    t.assert.ok(hole.visible, 'black hole must be visible');
    t.end();
};

const starVisible = async function (t) {
    let star = t.getSprites(sprite => sprite.name.includes('Stern'))[0];
    t.greenFlag();
    await t.runForSteps(3);
    t.assert.ok(star.visible, 'star must be visible');
    t.end();
};

const rocketPosition = async function (t) {
    let rocket = t.getSprites(sprite => sprite.name.includes('Raumschiff'))[0];
    t.greenFlag();
    t.addInput(0, {device: 'mouse', x: -200, y: 170});
    await t.runForSteps(3);
    const isAroundX = rocket.x <= -197 && rocket.x >= -202;
    const isAroundY = rocket.y <= 172 && rocket.y >= 168;
    t.assert.ok(isAroundX && isAroundY, 'rocket must be at point (-200, 170)');
    t.end();
};

const blackHolePosition = async function (t) {
    let hole = t.getSprites(sprite => sprite.name.includes('Schwarz'))[0];
    t.greenFlag();
    await t.runForSteps(1);
    const isAroundX = hole.x <= 23 && hole.x >= 17;
    const isAroundY = hole.y <= 73 && hole.y >= 67;
    t.assert.ok(isAroundX && isAroundY, 'hole must be at point (20, 70)'+ hole.x + " " + hole.y);
    t.end();
};

const starPosition = async function (t) {
    let star = t.getSprites(sprite => sprite.name.includes('Stern'))[0];
    t.greenFlag();
    await t.runForSteps(1);
    const isAroundX = star.x <= 142 && star.x >= 134;
    const isAroundY = star.y <= 12 && star.y >= 8;
    t.assert.ok(isAroundX && isAroundY, 'star must be at point (140, 10)' + star.x + " " + star.y);
    t.end();
};

const backdropInit = async function (t) {
    let stage = t.getStage();
    t.greenFlag();
    await t.runForSteps(3);
    t.assert.ok(stage.currentCostume === 0, 'stage must have game backdrop');
    t.end();
}

const rocketMovingDown = async function (t) {
    let rocket = t.getSprites(sprite => sprite.name.includes('Raumschiff'))[0];
    t.greenFlag();
    await t.runForSteps(2);
    rocket.getScratchTarget().setXY(-200, 170, true);
    t.addInput(0, {device: 'mouse', x: rocket.x, y: 0});
    let rocketY = rocket.y;
    let positionChanged = false;
    t.addCallback(() => {
        if (!positionChanged && (rocketY > rocket.y)) {

            positionChanged = true;
        }
    }, true);
    await t.runUntil(() => positionChanged === true, 2000);
    t.assert.ok(positionChanged === true, 'Rocket did not move');
    t.end();
};

const rocketMovingLeft = async function (t) {
    let rocket = t.getSprites(sprite => sprite.name.includes('Raumschiff'))[0];
    t.greenFlag();
    await t.runForSteps(2);
    rocket.getScratchTarget().setXY(-200, 170, true);
    t.addInput(0, {device: 'mouse', x: -210, y: rocket.y});
    let rocketX = rocket.x;
    let positionChanged = false;
    t.addCallback(() => {
        if (!positionChanged && (rocketX > rocket.x)) {

            positionChanged = true;
        }
    }, true);
    await t.runUntil(() => positionChanged === true, 2000);
    t.assert.ok(positionChanged === true, 'Rocket did not move');
    t.end();
};

const rocketMovingRight = async function (t) {
    let rocket = t.getSprites(sprite => sprite.name.includes('Raumschiff'))[0];
    t.greenFlag();
    await t.runForSteps(2);
    rocket.getScratchTarget().setXY(-200, 170, true);
    t.addInput(0, {device: 'mouse', x: -190, y: rocket.y});
    let rocketX = rocket.x;
    let positionChanged = false;
    t.addCallback(() => {
        if (!positionChanged && (rocketX < rocket.x)) {

            positionChanged = true;
        }
    }, true);
    await t.runUntil(() => positionChanged === true, 2000);
    t.assert.ok(positionChanged === true, 'Rocket did not move');
    t.end();
};

const starMoving = async function (t) {
    let star = t.getSprites(sprite => sprite.name.includes('Stern'))[0];
    t.greenFlag();
    await t.runForSteps(2);
    let starX = star.x;
    let starY = star.y;
    let positionChanged = false;
    t.addCallback(() => {
        if (!positionChanged && (starX !== star.x) && (starY !== star.y)) {

            positionChanged = true;
        }
    }, true);
    t.addInput(0, {device: 'mouse', x: -200, y: 170});
    await t.runUntil(() => positionChanged === true, 4000);
    t.assert.ok(positionChanged, 'star did not change position');
    t.end();
};

const starTouchingRocketSay = async function (t) {
    let star = t.getSprites(sprite => sprite.name.includes('Stern'))[0];
    let rocket = t.getSprites(sprite => sprite.name.includes('Raumschiff'))[0];
    t.greenFlag();
    await t.runForSteps(3);
    star.getScratchTarget().setXY(115, -115, true, true);
    rocket.getScratchTarget().setXY(star.x, star.y, true);

    let touched = false;
    t.onSpriteMoved(() => {
        if (!touched && star.isTouchingSprite(rocket.name)) {
            touched = true;
        }
    });
    let moveInput = {device: 'mouse', x: star.x, y: star.y, isDown: false};
    t.addInput(0, moveInput);
    await t.runUntil(() => touched === true, 10000);
    console.log("touched")
    t.assert.ok(touched, 'Rocket did not touch star');
    await t.runForSteps(2);
    t.assert.ok(star.sayText.includes('Du schaffst das'), 'star did not say Du schaffst das');
    t.end();
};

const starTouchingRocketInvisible = async function (t) {
    let star = t.getSprites(sprite => sprite.name.includes('Stern'))[0];
    let rocket = t.getSprites(sprite => sprite.name.includes('Raumschiff'))[0];
    t.greenFlag();
    await t.runForSteps(3);
    star.getScratchTarget().setXY(115, -115, true, true);
    rocket.getScratchTarget().setXY(star.x, star.y, true);

    let touched = false;
    t.onSpriteMoved(() => {
        if (!touched && star.isTouchingSprite(rocket.name)) {
            touched = true;
        }
    });
    let moveInput = {device: 'mouse', x: star.x, y: star.y, isDown: false};
    t.addInput(0, moveInput);
    await t.runUntil(() => touched === true, 10000);
    console.log("touched")
    t.assert.ok(touched, 'Rocket did not touch star');
    await t.runForSteps(2);
    await t.runForSteps(30);
    t.assert.ok(!star.visible, 'star did stay visible');
    t.end();
};

const blackHoleMoving = async function (t) {
    let hole = t.getSprites(sprite => sprite.name.includes('Schwarz'))[0];
    let rocket = t.getSprites(sprite => sprite.name.includes('Raumschiff'))[0];
    t.greenFlag();
    await t.runForSteps(3);
    let pos1 = false;
    let pos2 = false;
    let count = 0;
    t.onSpriteMoved(() => {
        if (!pos1 && hole.x >= -92 && hole.x <= -88 && hole.y <= -28 && hole.y >= -32) {
            pos1 = true;
            pos2 = false;
            count++;
        }
        if (!pos2 && hole.x >= 98 && hole.x <= 102 && hole.y <= 12 && hole.y >= 8) {
            pos2 = true;
            pos1 = false;
            count++;
        }
    });
    t.addInput(0, {device: 'mouse', x: rocket.x, y: 0});
    await t.runUntil(() => count === 4, 20000);
    t.assert.ok(count===4, 'black hole did not move between destinations');
    t.end();
};

const movingHoleTouchingRocketInvisible = async function (t) {
    let rocket = t.getSprites(sprite => sprite.name.includes('Raumschiff'))[0];
    let hole = t.getSprites(sprite => sprite.name.includes('Schwarz'))[0];
    t.greenFlag();
    await t.runForSteps(3);
    hole.getScratchTarget().setXY(-90, -30, true, true);
    rocket.getScratchTarget().setXY(hole.x, hole.y, true);

    let touched = false;
    t.onSpriteMoved(() => {
        if (!touched && hole.isTouchingSprite(rocket.name)) {
            touched = true;
        }
    });

    let moveInput = {device: 'mouse', x: hole.x, y: hole.y, isDown: false};
    t.addInput(0, moveInput);
    await t.runUntil(() => touched === true, 10000);
    console.log("touched")
    t.assert.ok(touched, 'Rocket did not touch hole');
    await t.runForSteps(2);
    await t.runForSteps(30);
    t.assert.ok(!rocket.visible, 'rocket did stay visible');
    t.end();
};

const movingHoleTouchingRocketSay = async function (t) {
    let rocket = t.getSprites(sprite => sprite.name.includes('Raumschiff'))[0];
    let hole = t.getSprites(sprite => sprite.name.includes('Schwarz'))[0];
    t.greenFlag();
    await t.runForSteps(3);
    hole.getScratchTarget().setXY(-90, -30, true, true);
    rocket.getScratchTarget().setXY(hole.x, hole.y, true);

    let touched = false;
    t.onSpriteMoved(() => {
        if (!touched && hole.isTouchingSprite(rocket.name)) {
            touched = true;
        }
    });

    let moveInput = {device: 'mouse', x: hole.x, y: hole.y, isDown: false};
    t.addInput(0, moveInput);
    await t.runUntil(() => touched === true, 10000);
    console.log("touched")
    t.assert.ok(touched, 'Rocket did not touch hole');
    await t.runForSteps(2);
    t.assert.ok(rocket.sayText.includes('Hilfe'), 'rocket did not say Hilfe');
    t.end();
};

const normalHoleTouchingRocketInvisible = async function (t) {
    let rocket = t.getSprites(sprite => sprite.name.includes('Raumschiff'))[0];
    t.greenFlag();
    await t.runForSteps(3);
    rocket.getScratchTarget().setXY(-100, 160, true);

    let touched = false;
    t.onSpriteMoved(() => {
        if (!touched && rocket.isTouchingColor([0, 0, 0])) {
            touched = true;
        }
    });

    let moveInput = {device: 'mouse', x: -120, y: 160, isDown: false};
    t.addInput(0, moveInput);
    await t.runUntil(() => touched === true, 10000);
    console.log("touched")
    t.assert.ok(touched, 'Rocket did not touch hole');
    await t.runForSteps(2);
    await t.runForSteps(30);
    t.assert.ok(!rocket.visible, 'rocket did stay visible');
    t.end();
};

const normalHoleTouchingRocketSay = async function (t) {
    let rocket = t.getSprites(sprite => sprite.name.includes('Raumschiff'))[0];
    t.greenFlag();
    await t.runForSteps(3);
    rocket.getScratchTarget().setXY(-100, 160, true);

    let touched = false;
    t.onSpriteMoved(() => {
        if (!touched && rocket.isTouchingColor([0, 0, 0])) {
            touched = true;
        }
    });

    let moveInput = {device: 'mouse', x: -120, y: 160, isDown: false};
    t.addInput(0, moveInput);
    await t.runUntil(() => touched === true, 10000);
    console.log("touched")
    t.assert.ok(touched, 'Rocket did not touch hole');
    await t.runForSteps(2);
    t.assert.ok(rocket.sayText.includes('Hilfe'), 'rocket did not say Hilfe');
    t.end();
};

const backdropWin = async function (t) {
    let stage = t.getStage();
    let rocket = t.getSprites(sprite => sprite.name.includes('Raumschiff'))[0];
    t.greenFlag();
    await t.runForSteps(3);
    rocket.getScratchTarget().setXY(170, 35, true);

    let touched = false;
    t.onSpriteMoved(() => {
        if (!touched && rocket.isTouchingColor([214, 221, 209])) {
            touched = true;
        }
    });

    let moveInput = {device: 'mouse', x: 190, y: 76, isDown: false};
    t.addInput(0, moveInput);
    await t.runUntil(() => touched === true, 10000);
    console.log("touched")
    t.assert.ok(touched, 'Rocket did not touch moon');
    await t.runForSteps(2);
    await t.runForSteps(60);
    t.assert.ok(stage.currentCostume === 1, 'stage must have win backdrop');
    t.end();
}

const winningOtherInvisible = async function (t) {
    let rocket = t.getSprites(sprite => sprite.name.includes('Raumschiff'))[0];
    t.greenFlag();
    await t.runForSteps(3);
    rocket.getScratchTarget().setXY(170, 35, true);

    let touched = false;
    t.onSpriteMoved(() => {
        if (!touched && rocket.isTouchingColor([214, 221, 209])) {
            touched = true;
        }
    });

    let moveInput = {device: 'mouse', x: 190, y: 76, isDown: false};
    t.addInput(0, moveInput);
    await t.runUntil(() => touched === true, 10000);
    console.log("touched")
    t.assert.ok(touched, 'Rocket did not touch moon');
    await t.runForSteps(2);
    await t.runForSteps(60);
    let hole = t.getSprites(sprite => sprite.name.includes('Schwarz'))[0];
    t.assert.ok(!hole.visible, 'Hole did not turn invisible');
    let star = t.getSprites(sprite => sprite.name.includes('Stern'))[0];
    t.assert.ok(!star.visible, 'Star did not turn invisible');
    t.end();
};

module.exports = [
    {
        test: rocketVisible,
        name: 'initialize rocket visible',
        description: '',
        categories: []
    },
    {
        test: blackHoleVisible,
        name: 'initialize black hole visible',
        description: '',
        categories: []
    },
    {
        test: starVisible,
        name: 'initialize star visible',
        description: '',
        categories: []
    },
    {
        test: rocketPosition,
        name: 'initialize rocket position',
        description: '',
        categories: []
    },
    {
        test: blackHolePosition,
        name: 'initialize black hole position',
        description: '',
        categories: []
    },
    {
        test: starPosition,
        name: 'initialize star position',
        description: '',
        categories: []
    },
    {
        test: backdropInit,
        name: 'initialize backdrop',
        description: '',
        categories: []
    },
    {
        test: rocketMovingDown,
        name: 'rocket moving down',
        description: '',
        categories: []
    },
    {
        test: rocketMovingLeft,
        name: 'rocket moving left',
        description: '',
        categories: []
    },
    {
        test: rocketMovingRight,
        name: 'rocket moving right',
        description: '',
        categories: []
    },
    {
        test: starMoving,
        name: 'star Moving',
        description: '',
        categories: []
    },
    {
        test: starTouchingRocketSay,
        name: 'star touching rocket say',
        description: '',
        categories: []
    },
    {
        test: starTouchingRocketInvisible,
        name: 'star touching rocket invisible',
        description: '',
        categories: []
    },
    {
        test: blackHoleMoving,
        name: 'black hole moving',
        description: '',
        categories: []
    },
    {
        test: movingHoleTouchingRocketSay,
        name: 'moving hole touching rocket say',
        description: '',
        categories: []
    },
    {
        test: movingHoleTouchingRocketInvisible,
        name: 'moving hole touching rocket invisible',
        description: '',
        categories: []
    },
    {
        test: normalHoleTouchingRocketSay,
        name: 'normal hole touching rocket say',
        description: '',
        categories: []
    },
    {
        test: normalHoleTouchingRocketInvisible,
        name: 'normal hole touching rocket invisible',
        description: '',
        categories: []
    },
    {
        test: backdropWin,
        name: 'win backdrop',
        description: '',
        categories: []
    },
    {
        test: winningOtherInvisible,
        name: 'win other invisible',
        description: '',
        categories: []
    }
];
