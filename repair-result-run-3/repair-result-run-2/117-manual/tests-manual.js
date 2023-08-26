const boatVisible = async function (t) {
    let boat = t.getSprites(sprite => sprite.name.includes('Boot'))[0];
    t.greenFlag();
    await t.runForSteps(3);
    t.assert.ok(boat.visible, 'Boot must be visible');
    t.end();
};

const boatCostume = async function (t) {
    let boat = t.getSprites(sprite => sprite.name.includes('Boot'))[0];
    t.greenFlag();
    await t.runForSteps(3);
    t.assert.ok(boat.currentCostume === 0, 'boat must have the right costume');
    t.end();
};

const backdropInit = async function (t) {
    let stage = t.getStage();
    t.greenFlag();
    await t.runForSteps(3);
    t.assert.ok(stage.currentCostume === 0, 'stage must have game backdrop');
    t.end();
};

const boatAtPosition = async function (t) {
    let boat = t.getSprites(sprite => sprite.name.includes('Boot'))[0];
    t.greenFlag();
    t.addInput(0, {device: 'mouse', x: -190, y: -150});
    await t.runForSteps(3);

    // If the functionality of moving the boat is implemented, the boat moves a little bit on
    // running this test. Therefore the test checks, if the boat is in a range between x:-187 - -191
    // and y:-148 - -151
    const isAroundX = boat.x <= -187 && boat.x >= -191;
    const isAroundY = boat.y <= -148 && boat.y >= -151;
    t.assert.ok(isAroundX && isAroundY, 'boat must be at point (-190, -150)');
    t.end();
};

const boatMoveUp = async function (t) {
    await t.runForSteps(2);
    let boat = t.getSprites(sprite => sprite.name.includes('Boot'))[0];
    t.greenFlag();
    await t.runForSteps(4);
    let boatY = boat.y;
    let moveUpInput = {device: 'mouse', x: boat.x, y: 100, isDown: false, steps: 60};
    t.addInput(0, moveUpInput);
    let positionChanged = false;
    t.addCallback(() => {
        if (!positionChanged && (boatY < boat.y)) {

            positionChanged = true;
        }
    }, true);
    await t.runUntil(() => positionChanged === true, 2000);
    t.assert.ok(positionChanged === true, 'Boat did not move');
    t.end();
};

const boatStopAfterMove = async function (t) {
    let boat = t.getSprites(sprite => sprite.name.includes('Boot'))[0];
    t.greenFlag();
    await t.runForSteps(2);
    let boatY = boat.y;
    let moveUpInput = {device: 'mouse', x: boat.x, y: 100, isDown: false};
    t.addInput(0, moveUpInput);
    let positionChanged = false;
    t.addCallback(() => {
        if (!positionChanged && (boatY < boat.y)) {

            positionChanged = true;
        }
    }, true);
    await t.runUntil(() => positionChanged === true, 2000);
    t.assert.ok(positionChanged === true, 'Boat did not move');
    let touchedMouse = false;
    t.addCallback(() => {
        if (!touchedMouse && boat.isTouchingMouse()) {
            touchedMouse = true;
        }
    }, true);
    await t.runUntil(() => touchedMouse === true, 8000);
    t.assert.ok(touchedMouse === true, 'Boat did not touch mouse');
    let x = boat.x;
    let y = boat.y;
    let direction = boat.direction;
    await t.runForSteps(10);
    t.assert.ok(x >= boat.x - 1 && x <= boat.x + 1, 'Boat did move x');
    t.assert.ok(y >= boat.y - 1 && y <= boat.y + 1, 'Boat did move y');
    t.assert.ok(direction >= boat.direction - 1 && direction <= boat.direction + 1, 'Boat did move direction');
    t.end();
};

const boatMoveRight = async function (t) {
    await t.runForSteps(2);
    let boat = t.getSprites(sprite => sprite.name.includes('Boot'))[0];
    t.greenFlag();
    await t.runForSteps(4);
    let boatX = boat.x;
    let moved = false;
    t.onSpriteMoved(() => {
        if (!moved && boat.x > boatX) {
            moved = true;
        }
    });
    let moveRightInput = {device: 'mouse', x: 250, y: boat.y, isDown: false, steps: 60};
    t.addInput(0, moveRightInput);
    await t.runUntil(() => moved === true, 2000);
    t.assert.ok(moved === true, 'Boat did not move right');
    t.end();
};

const boatMoveLeft = async function (t) {
    await t.runForSteps(2);
    let boat = t.getSprites(sprite => sprite.name.includes('Boot'))[0];
    t.greenFlag();
    await t.runForSteps(4);
    let boatX = boat.x;
    let moved = false;
    t.onSpriteMoved(() => {
        if (!moved && boat.x < boatX) {
            moved = true;
        }
    });
    let moveLeftInput = {device: 'mouse', x: -250, y: boat.y, isDown: false, steps: 60};
    t.addInput(0, moveLeftInput);
    await t.runUntil(() => moved === true, 2000);
    t.assert.ok(moved === true, 'Boat did not move left');
    t.end();
};

const boatMoveDown = async function (t) {
    await t.runForSteps(2);
    let boat = t.getSprites(sprite => sprite.name.includes('Boot'))[0];
    t.greenFlag();
    await t.runForSteps(4);
    let boatY = boat.y;
    let moved = false;
    t.onSpriteMoved(() => {
        if (!moved && boat.y < boatY) {
            moved = true;
        }
    });
    let moveDownInput = {device: 'mouse', x: boat.x, y: -250, isDown: false, steps: 60};
    t.addInput(0, moveDownInput);
    await t.runUntil(() => moved === true, 2000);
    t.assert.ok(moved === true, 'Boat did not move down');
    t.end();
};

const boatCrashStop = async function (t) {
    await t.runForSteps(2);
    let boat = t.getSprites(sprite => sprite.name.includes('Boot'))[0];
    t.greenFlag();
    await t.runForSteps(4);
    let boatX = boat.x;
    let boatY = boat.y;
    let touchedWall = false;
    let moveRightInput = {device: 'mouse', x: 250, y: boat.y, isDown: false, steps: 60};
    t.addInput(0, moveRightInput);
    t.onSpriteMoved(() => {
        if (!touchedWall && boat.isTouchingColor([102, 59, 0])) {
            touchedWall = true;
            boatX = boat.x;
            boatY = boat.y;
        }
    });
    await t.runUntil(() => touchedWall === true, 20000);
    await t.assert.ok(touchedWall === true, 'Boat did not touch wall');
    await t.runForSteps(65);
    t.assert.ok(!t.isProjectRunning(), "project must not run");
    t.end();
};

const boatCrashCostume = async function (t) {
    await t.runForSteps(2);
    let boat1 = t.getSprites(sprite => sprite.name.includes('Boot'))[0];
    t.greenFlag();
    await t.runForSteps(4);
    let boatX = boat1.x;
    let boatY = boat1.y;
    let touchedWall = false;
    let moveRightInput = {device: 'mouse', x: 250, y: boat1.y, isDown: false, steps: 60};
    t.addInput(0, moveRightInput);
    t.onSpriteMoved(() => {
        if (!touchedWall && boat1.isTouchingColor([102, 59, 0])) {
            touchedWall = true;
            boatX = boat1.x;
            boatY = boat1.y;
        }
    });
    await t.runUntil(() => touchedWall === true, 20000);
    await t.assert.ok(touchedWall === true, 'Boat did not touch wall');
    await t.runForSteps(10);
    let boat = t.getSprites(sprite => sprite.name.includes('Boot'))[0];
    t.assert.ok(boat.currentCostume === 1, 'Boat did not change costume after touching wall ' + boat.currentCostume);
    t.end();
};

const boatCrashText = async function (t) {
    await t.runForSteps(2);
    let boat1 = t.getSprites(sprite => sprite.name.includes('Boot'))[0];
    t.greenFlag();
    await t.runForSteps(4);
    let boatX = boat1.x;
    let boatY = boat1.y;
    let touchedWall = false;
    let moveRightInput = {device: 'mouse', x: 250, y: boat1.y, isDown: false, steps: 60};
    t.addInput(0, moveRightInput);
    t.onSpriteMoved(() => {
        if (!touchedWall && boat1.isTouchingColor([102, 59, 0])) {
            touchedWall = true;
            boatX = boat1.x;
            boatY = boat1.y;
        }
    });
    await t.runUntil(() => touchedWall === true, 20000);
    await t.assert.ok(touchedWall === true, 'Boat did not touch wall');
    await t.runForSteps(5);
    let boat = t.getSprites(sprite => sprite.name.includes('Boot'))[0];
    t.assert.ok(boat.sayText.includes('Oh nein!'), 'Boat did not say text after touching wall');
    t.end();
};

const boatCrashBackdrop = async function (t) {
    await t.runForSteps(2);
    let boat = t.getSprites(sprite => sprite.name.includes('Boot'))[0];
    t.greenFlag();
    await t.runForSteps(4);
    let boatX = boat.x;
    let boatY = boat.y;
    let touchedWall = false;
    let moveRightInput = {device: 'mouse', x: 250, y: boat.y, isDown: false, steps: 60};
    t.addInput(0, moveRightInput);
    t.onSpriteMoved(() => {
        if (!touchedWall && boat.isTouchingColor([102, 59, 0])) {
            touchedWall = true;
            boatX = boat.x;
            boatY = boat.y;
        }
    });
    await t.runUntil(() => touchedWall === true, 20000);
    await t.assert.ok(touchedWall === true, 'Boat did not touch wall');
    await t.runForSteps(5);
    let stage = t.getStage();
    t.assert.ok(stage.currentCostume === 2, 'stage must have game over backdrop');
    t.end();
};

const boatCrashReset = async function (t) {
    await t.runForSteps(2);
    let boat1 = t.getSprites(sprite => sprite.name.includes('Boot'))[0];
    t.greenFlag();
    await t.runForSteps(4);
    let boatX = boat1.x;
    let boatY = boat1.y;
    let touchedWall = false;
    let moveRightInput = {device: 'mouse', x: 250, y: boat1.y, isDown: false, steps: 60};
    t.addInput(0, moveRightInput);
    t.onSpriteMoved(() => {
        if (!touchedWall && boat1.isTouchingColor([102, 59, 0])) {
            touchedWall = true;
            boatX = boat1.x;
            boatY = boat1.y;
        }
    });
    await t.runUntil(() => touchedWall === true, 20000);
    await t.assert.ok(touchedWall === true, 'Boat did not touch wall');
    await t.runForSteps(10);
    let boat = t.getSprites(sprite => sprite.name.includes('Boot'))[0];
    const isAroundX = boat.x <= -187 && boat.x >= -191;
    const isAroundY = boat.y <= -148 && boat.y >= -151;
    t.assert.ok(isAroundX && isAroundY, 'boat is not reset to (-190, -150)');
    t.end();
};

const boatCrashOtherInvisible = async function (t) {
    await t.runForSteps(2);
    let boat = t.getSprites(sprite => sprite.name.includes('Boot'))[0];
    t.greenFlag();
    await t.runForSteps(4);
    let boatX = boat.x;
    let boatY = boat.y;
    let touchedWall = false;
    let moveRightInput = {device: 'mouse', x: 250, y: boat.y, isDown: false, steps: 60};
    t.addInput(0, moveRightInput);
    t.onSpriteMoved(() => {
        if (!touchedWall && boat.isTouchingColor([102, 59, 0])) {
            touchedWall = true;
            boatX = boat.x;
            boatY = boat.y;
        }
    });
    await t.runUntil(() => touchedWall === true, 20000);
    await t.assert.ok(touchedWall === true, 'Boat did not touch wall');
    await t.runForSteps(10);
    let crab = t.getSprites(sprite => sprite.name.includes('Krebs'))[0];
    t.assert.ok(!crab.visible, 'Crab did not turn invisible');
    let gate = t.getSprites(sprite => sprite.name.includes('Holz'))[0];
    t.assert.ok(!gate.visible, 'gate did not turn invisible');
    t.end();
};

const boatIsWinningStop = async function (t) {
    t.greenFlag();
    t.addInput(0, {device: 'mouse', x: 190, y: -140, steps: 90});
    await t.runForSteps(3);
    for (const target of t.vm.runtime.targets) {
        if (target.sprite.name === 'Boot') {
            target.setXY(90, -120, true);
            break;
        }
    }
    let boat = t.getSprites(sprite => sprite.name.includes('Boot'))[0];
    let touchedIsland = false;
    t.addInput(0, {device: 'mouse', x: 190, y: -140, steps: 90});
    t.onSpriteMoved(() => {
        if (!touchedIsland && boat.isTouchingColor([255, 255, 153])) {
            touchedIsland = true;
        }
    });
    await t.runUntil(() => touchedIsland === true, 5000);
    await t.runForSteps(65);
    t.assert.ok(!t.isProjectRunning(), "project must not run");
    t.end();
};

const boatIsWinningText = async function (t) {
    t.greenFlag();
    t.addInput(0, {device: 'mouse', x: 190, y: -140, steps: 90});
    await t.runForSteps(3);
    for (const target of t.vm.runtime.targets) {
        if (target.sprite.name === 'Boot') {
            target.setXY(90, -120, true);
            break;
        }
    }
    let boat1 = t.getSprites(sprite => sprite.name.includes('Boot'))[0];
    let touchedIsland = false;
    t.addInput(0, {device: 'mouse', x: 190, y: -140, steps: 90});
    t.onSpriteMoved(() => {
        if (!touchedIsland && boat1.isTouchingColor([255, 255, 153])) {
            touchedIsland = true;
        }
    });
    await t.runUntil(() => touchedIsland === true, 5000);
    await t.runForSteps(30);
    let boat = t.getSprites(sprite => sprite.name.includes('Boot'))[0];
    t.assert.ok(boat.sayText.startsWith('Yeah'), 'Boat did not win the game after touching island ' + boat.sayText);
    t.end();
};

const boatIsWinningBackdrop = async function (t) {
    t.greenFlag();
    t.addInput(0, {device: 'mouse', x: 190, y: -140, steps: 90});
    await t.runForSteps(3);
    for (const target of t.vm.runtime.targets) {
        if (target.sprite.name === 'Boot') {
            target.setXY(90, -120, true);
            break;
        }
    }
    let boat = t.getSprites(sprite => sprite.name.includes('Boot'))[0];
    let touchedIsland = false;
    t.addInput(0, {device: 'mouse', x: 190, y: -140, steps: 90});
    t.onSpriteMoved(() => {
        if (!touchedIsland && boat.isTouchingColor([255, 255, 153])) {
            touchedIsland = true;
        }
    });
    await t.runUntil(() => touchedIsland === true, 5000);
    await t.runForSteps(30);
    let stage = t.getStage();
    t.assert.ok(stage.currentCostume === 1, 'stage must have win backdrop');
    t.end();
};

const boatIsWinningReset = async function (t) {
    t.greenFlag();
    t.addInput(0, {device: 'mouse', x: 190, y: -140, steps: 90});
    await t.runForSteps(3);
    for (const target of t.vm.runtime.targets) {
        if (target.sprite.name === 'Boot') {
            target.setXY(90, -120, true);
            break;
        }
    }
    let boat1 = t.getSprites(sprite => sprite.name.includes('Boot'))[0];
    let touchedIsland = false;
    t.addInput(0, {device: 'mouse', x: 190, y: -140, steps: 90});
    t.onSpriteMoved(() => {
        if (!touchedIsland && boat1.isTouchingColor([255, 255, 153])) {
            touchedIsland = true;
        }
    });
    await t.runUntil(() => touchedIsland === true, 5000);
    await t.runForSteps(30);
    let boat = t.getSprites(sprite => sprite.name.includes('Boot'))[0];
    const isAroundX = boat.x <= -187 && boat.x >= -191;
    const isAroundY = boat.y <= -148 && boat.y >= -151;
    t.assert.ok(isAroundX && isAroundY, 'boat is not reset to (-190, -150)');
    t.end();
};

const boatIsWinningOtherInvisible = async function (t) {
    t.greenFlag();
    t.addInput(0, {device: 'mouse', x: 190, y: -140, steps: 90});
    await t.runForSteps(3);
    for (const target of t.vm.runtime.targets) {
        if (target.sprite.name === 'Boot') {
            target.setXY(90, -120, true);
            break;
        }
    }
    let boat = t.getSprites(sprite => sprite.name.includes('Boot'))[0];
    let touchedIsland = false;
    t.addInput(0, {device: 'mouse', x: 190, y: -140, steps: 90});
    t.onSpriteMoved(() => {
        if (!touchedIsland && boat.isTouchingColor([255, 255, 153])) {
            touchedIsland = true;
        }
    });
    await t.runUntil(() => touchedIsland === true, 5000);
    await t.runForSteps(30);
    let crab = t.getSprites(sprite => sprite.name.includes('Krebs'))[0];
    t.assert.ok(!crab.visible, 'Crab did not turn invisible');
    let gate = t.getSprites(sprite => sprite.name.includes('Holz'))[0];
    t.assert.ok(!gate.visible, 'gate did not turn invisible');
    t.end();
};

const gateVisible = async function (t) {
    let gate = t.getSprites(sprite => sprite.name.includes('Holz'))[0];
    t.greenFlag();
    await t.runForSteps(3);
    t.assert.ok(gate.visible, 'Gate must be visible');
    t.end();
};

const crabVisible = async function (t) {
    let crab = t.getSprites(sprite => sprite.name.includes('Krebs'))[0];
    t.greenFlag();
    await t.runForSteps(3);
    t.assert.ok(crab.visible, 'Crab must be visible');
    t.end();
};

const gateSpinning = async function (t) {
    let gate = t.getSprites(sprite => sprite.name.includes('Holz'))[0];
    t.greenFlag();
    let oldDirection = gate.direction;
    let directionChanged = false;
    t.addCallback(() => {
        if (!directionChanged && oldDirection !== gate.direction) {
            directionChanged = true;
        }
    }, true);
    await t.runUntil(() => directionChanged === true, 2000);
    t.assert.ok(directionChanged, 'gate has to spin.');
    t.end();
};

const boatCrashGateStop = async function (t) {
    await t.runForSteps(2);
    let boat = t.getSprites(sprite => sprite.name.includes('Boot'))[0];
    let gate = t.getSprites(sprite => sprite.name.includes('Holz'))[0];
    t.greenFlag();
    await t.runForSteps(3);
    for (const target of t.vm.runtime.targets) {
        if (target.sprite.name === 'Boot') {
            target.setXY(90, -120, true);
            break;
        }
    }
    let touchedGate = false;
    let moveInput = {device: 'mouse', x: gate.x, y: gate.y, isDown: false, steps: 60};
    t.addInput(0, moveInput);
    t.onSpriteMoved(() => {
        if (!touchedGate && boat.isTouchingSprite(gate.name)) {
            touchedGate = true;
        }
    });
    await t.runUntil(() => touchedGate === true, 20000);
    await t.assert.ok(touchedGate === true, 'Boat did not touch gate');
    await t.runForSteps(65);
    t.assert.ok(!t.isProjectRunning(), "project must not run");
    t.end();
};

const boatCrashGateCostume = async function (t) {
    await t.runForSteps(2);
    let boat1 = t.getSprites(sprite => sprite.name.includes('Boot'))[0];
    let gate = t.getSprites(sprite => sprite.name.includes('Holz'))[0];
    t.greenFlag();
    await t.runForSteps(3);
    for (const target of t.vm.runtime.targets) {
        if (target.sprite.name === 'Boot') {
            target.setXY(90, -120, true);
            break;
        }
    }
    let touchedGate = false;
    let moveInput = {device: 'mouse', x: gate.x, y: gate.y, isDown: false, steps: 60};
    t.addInput(0, moveInput);
    t.onSpriteMoved(() => {
        if (!touchedGate && boat1.isTouchingSprite(gate.name)) {
            touchedGate = true;
        }
    });
    await t.runUntil(() => touchedGate === true, 20000);
    await t.assert.ok(touchedGate === true, 'Boat did not touch gate');
    await t.runForSteps(10);
    let boat = t.getSprites(sprite => sprite.name.includes('Boot'))[0];
    t.assert.ok(boat.currentCostume === 1, 'Boat did not change costume after touching gate ' + boat.currentCostume);
    t.end();
};

const boatCrashGateText = async function (t) {
    await t.runForSteps(2);
    let boat1 = t.getSprites(sprite => sprite.name.includes('Boot'))[0];
    let gate = t.getSprites(sprite => sprite.name.includes('Holz'))[0];
    t.greenFlag();
    await t.runForSteps(3);
    for (const target of t.vm.runtime.targets) {
        if (target.sprite.name === 'Boot') {
            target.setXY(90, -120, true);
            break;
        }
    }
    let touchedGate = false;
    let moveInput = {device: 'mouse', x: gate.x, y: gate.y, isDown: false, steps: 60};
    t.addInput(0, moveInput);
    t.onSpriteMoved(() => {
        if (!touchedGate && boat1.isTouchingSprite(gate.name)) {
            touchedGate = true;
        }
    });
    await t.runUntil(() => touchedGate === true, 20000);
    await t.assert.ok(touchedGate === true, 'Boat did not touch gate');
    await t.runForSteps(5);
    let boat = t.getSprites(sprite => sprite.name.includes('Boot'))[0];
    t.assert.ok(boat.sayText.includes('Oh nein!'), 'Boat did not say text after touching gate');
    t.end();
};

const boatCrashGateBackdrop = async function (t) {
    await t.runForSteps(2);
    let boat = t.getSprites(sprite => sprite.name.includes('Boot'))[0];
    let gate = t.getSprites(sprite => sprite.name.includes('Holz'))[0];
    t.greenFlag();
    await t.runForSteps(3);
    for (const target of t.vm.runtime.targets) {
        if (target.sprite.name === 'Boot') {
            target.setXY(90, -120, true);
            break;
        }
    }
    let touchedGate = false;
    let moveInput = {device: 'mouse', x: gate.x, y: gate.y, isDown: false, steps: 60};
    t.addInput(0, moveInput);
    t.onSpriteMoved(() => {
        if (!touchedGate && boat.isTouchingSprite(gate.name)) {
            touchedGate = true;
        }
    });
    await t.runUntil(() => touchedGate === true, 20000);
    await t.assert.ok(touchedGate === true, 'Boat did not touch gate');
    await t.runForSteps(5);
    let stage = t.getStage();
    t.assert.ok(stage.currentCostume === 2, 'stage must have game over backdrop');
    t.end();
};

const boatCrashGateReset = async function (t) {
    await t.runForSteps(2);
    let boat1 = t.getSprites(sprite => sprite.name.includes('Boot'))[0];
    let gate = t.getSprites(sprite => sprite.name.includes('Holz'))[0];
    t.greenFlag();
    await t.runForSteps(3);
    for (const target of t.vm.runtime.targets) {
        if (target.sprite.name === 'Boot') {
            target.setXY(90, -120, true);
            break;
        }
    }
    let touchedGate = false;
    let moveInput = {device: 'mouse', x: gate.x, y: gate.y, isDown: false, steps: 60};
    t.addInput(0, moveInput);
    t.onSpriteMoved(() => {
        if (!touchedGate && boat1.isTouchingSprite(gate.name)) {
            touchedGate = true;
        }
    });
    await t.runUntil(() => touchedGate === true, 20000);
    await t.assert.ok(touchedGate === true, 'Boat did not touch gate');
    await t.runForSteps(10);
    let boat = t.getSprites(sprite => sprite.name.includes('Boot'))[0];
    const isAroundX = boat.x <= -187 && boat.x >= -191;
    const isAroundY = boat.y <= -148 && boat.y >= -151;
    t.assert.ok(isAroundX && isAroundY, 'boat is not reset to (-190, -150)');
    t.end();
};

const boatCrashGateOtherInvisible = async function (t) {
    await t.runForSteps(2);
    let boat = t.getSprites(sprite => sprite.name.includes('Boot'))[0];
    let gate1 = t.getSprites(sprite => sprite.name.includes('Holz'))[0];
    t.greenFlag();
    await t.runForSteps(3);
    for (const target of t.vm.runtime.targets) {
        if (target.sprite.name === 'Boot') {
            target.setXY(90, -120, true);
            break;
        }
    }
    let touchedGate = false;
    let moveInput = {device: 'mouse', x: gate1.x, y: gate1.y, isDown: false, steps: 60};
    t.addInput(0, moveInput);
    t.onSpriteMoved(() => {
        if (!touchedGate && boat.isTouchingSprite(gate1.name)) {
            touchedGate = true;
        }
    });
    await t.runUntil(() => touchedGate === true, 20000);
    await t.assert.ok(touchedGate === true, 'Boat did not touch gate');
    await t.runForSteps(15);
    let crab = t.getSprites(sprite => sprite.name.includes('Krebs'))[0];
    t.assert.ok(!crab.visible, 'Crab did not turn invisible');
    let gate = t.getSprites(sprite => sprite.name.includes('Holz'))[0];
    t.assert.ok(!gate.visible, 'gate did not turn invisible');
    t.end();
};

const boatTouchingArrow = async function (t) {
    let boat = t.getSprites(sprite => sprite.name.includes('Boot'))[0];
    t.greenFlag();
    await t.runForSteps(5);
    let touched = false;
    t.onSpriteMoved(() => {
        if (!touched && boat.isTouchingColor([255, 255, 255])) {
            touched = true;
        }
    });
    let moveInput = {device: 'mouse', x: -205, y: 8, isDown: false};
    t.addInput(0, moveInput);
    await t.runUntil(() => touched === true, 5000);
    t.assert.ok(touched === true, 'Boat did not touch arrow');
    let boatY = boat.y;
    let boatX = boat.x;
    await t.runForSteps(1);
    let boatNewY = boat.y;
    let boatNewX = boat.x;
    let distance = Math.sqrt((boatNewX - boatX) * (boatNewX - boatX) + (boatNewY - boatY) * (boatNewY - boatY));
    t.assert.ok(distance >= 3, 'Boat did not move at least 4');
    t.end();
};

const boatTouchingSlime = async function (t) {
    let boat = t.getSprites(sprite => sprite.name.includes('Boot'))[0];
    t.greenFlag();
    let touched = false;
    t.onSpriteMoved(() => {
        if (!touched && boat.isTouchingColor([92, 229, 129])) {
            touched = true;
        }
    });
    let moveInput = {device: 'mouse', x: -190, y: 140, isDown: false};
    t.addInput(0, moveInput);
    await t.runUntil(() => touched === true, 5000);
    t.assert.ok(touched === true, 'Boat did not touch slime');
    let boatY = boat.y;
    let boatX = boat.x;
    moveInput = {device: 'mouse', x: -190, y: 141, isDown: false};
    t.addInput(0, moveInput);
    await t.runForSteps(1);
    let boatNewY = boat.y;
    let boatNewX = boat.x;
    let distance = Math.sqrt((boatNewX - boatX) * (boatNewX - boatX) + (boatNewY - boatY) * (boatNewY - boatY));
    t.assert.ok(distance < 2, 'Boat did move more  2 ');
    t.end();
};

const boatTouchingCrabMove = async function (t) {
    let crab = t.getSprites(sprite => sprite.name.includes('Krebs'))[0];
    t.greenFlag();
    await t.runForSteps(3);

    let boat = t.getSprites(sprite => sprite.name.includes('Boot'))[0];

    for (const target of t.vm.runtime.targets) {
        if (target.sprite.name === 'Krebs') {
            target.setXY(boat.x - 10, 0, true);
            break;
        }
    }

    let oldX = crab.x;
    let oldY = crab.y;

    let touched = false;
    t.onSpriteMoved(() => {
        if (!touched && boat.isTouchingSprite(crab.name)) {
            touched = true;
        }
    });
    let moveInput = {device: 'mouse', x: crab.x, y: crab.y, isDown: false};
    t.addInput(0, moveInput);
    await t.runUntil(() => touched === true, 10000);
    t.assert.ok(touched, 'Boat did not touch crab');
    await t.runForSteps(5);
    console.log('oldX ' + oldX + ' oldY ' + oldY + ' x ' + crab.x + ' y ' + crab.y);
    t.assert.ok(oldX !== crab.x || oldY !== crab.y, 'crab did not change position');
    t.end();
};

module.exports = [
    {
        test: boatVisible,
        name: 'boat visible',
        description: '',
        categories: []
    }, {
        test: gateVisible,
        name: 'gate visible',
        description: '',
        categories: []
    }, {
        test: crabVisible,
        name: 'crab visible',
        description: '',
        categories: []
    }, {
        test: boatCostume,
        name: 'boat costume',
        description: '',
        categories: []
    }, {
        test: backdropInit,
        name: 'stage game backdrop',
        description: '',
        categories: []
    },
    {
        test: boatAtPosition,
        name: 'boat at start position',
        description: '',
        categories: []
    }, {
        test: gateSpinning,
        name: 'gate spinning',
        description: '',
        categories: []
    },
    {
        test: boatMoveUp,
        name: 'boat move up',
        description: '',
        categories: []
    },
    {
        test: boatMoveLeft,
        name: 'boat move left',
        description: '',
        categories: []
    },
    {
        test: boatMoveRight,
        name: 'boat move right',
        description: '',
        categories: []
    },
    {
        test: boatMoveDown,
        name: 'boat move down',
        description: '',
        categories: []
    },
    {
        test: boatCrashStop,
        name: 'boat crash stop',
        description: '',
        categories: []
    },
    {
        test: boatCrashCostume,
        name: 'boat crash costume',
        description: '',
        categories: []
    },
    {
        test: boatCrashText,
        name: 'boat crash text',
        description: '',
        categories: []
    },
    {
        test: boatCrashBackdrop,
        name: 'boat crash backdrop',
        description: '',
        categories: []
    },
    {
        test: boatCrashOtherInvisible,
        name: 'boat crash other invisible',
        description: '',
        categories: []
    },
    {
        test: boatIsWinningStop,
        name: 'boat winning stop',
        description: '',
        categories: []
    },
    {
        test: boatIsWinningText,
        name: 'boat winning text',
        description: '',
        categories: []
    },
    {
        test: boatIsWinningBackdrop,
        name: 'boat winning backdrop',
        description: '',
        categories: []
    },
    {
        test: boatIsWinningOtherInvisible,
        name: 'boat winning other invisible',
        description: '',
        categories: []
    },
    {
        test: boatCrashGateStop,
        name: 'boat crash gate stop',
        description: '',
        categories: []
    },
    {
        test: boatCrashGateCostume,
        name: 'boat crash gate costume',
        description: '',
        categories: []
    },
    {
        test: boatCrashGateText,
        name: 'boat crash gate text',
        description: '',
        categories: []
    },
    {
        test: boatCrashGateBackdrop,
        name: 'boat crash gate backdrop',
        description: '',
        categories: []
    },
    {
        test: boatCrashGateOtherInvisible,
        name: 'boat crash other invisible',
        description: '',
        categories: []
    },
    {
        test: boatStopAfterMove,
        name: 'boat stop after move',
        description: '',
        categories: []
    },
    {
        test: boatTouchingArrow,
        name: 'boat touching arrow',
        description: '',
        categories: []
    },
    {
        test: boatTouchingSlime,
        name: 'boat touching slime',
        description: '',
        categories: []
    },
    {
        test: boatTouchingCrabMove,
        name: 'boat touching crab move',
        description: '',
        categories: []
    },
    {
        test: boatCrashGateReset,
        name: 'boat crash gate reset',
        description: '',
        categories: []
    },
    {
        test: boatCrashReset,
        name: 'boat crash reset',
        description: '',
        categories: []
    },
    {
        test: boatIsWinningReset,
        name: 'boat winning reset',
        description: '',
        categories: []
    }
];