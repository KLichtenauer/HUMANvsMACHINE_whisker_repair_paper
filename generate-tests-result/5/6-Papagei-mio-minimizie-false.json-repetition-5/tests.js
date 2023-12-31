const test0 = async function (t) {
  t.dragSprite('Milch', -8.84436263583015, -54.58258827817712, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.equal(t.getSprite("Papagei").currentCostume, 1, "Expected Sprite Papagei to have costume 1");
  t.assert.equal(t.getSprite("Sonne").currentCostume, 0, "Expected Sprite Sonne to have costume 0");
  t.assert.equal(t.getSprite("Baum").currentCostume, 0, "Expected Sprite Baum to have costume 0");
  t.assert.equal(t.getSprite("Milch").currentCostume, 0, "Expected Sprite Milch to have costume 0");
  t.assert.equal(t.getSprite("Papagei").getCloneCount(), 0, "Expected Sprite Papagei to have 0 clones");
  t.assert.equal(t.getSprite("Sonne").getCloneCount(), 0, "Expected Sprite Sonne to have 0 clones");
  t.assert.equal(t.getSprite("Baum").getCloneCount(), 0, "Expected Sprite Baum to have 0 clones");
  t.assert.equal(t.getSprite("Milch").getCloneCount(), 0, "Expected Sprite Milch to have 0 clones");
  t.assert.equal(t.getSprite("Papagei").direction, 90, 1, "Expected Sprite Papagei to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Sonne").direction, 105, 1, "Expected Sprite Sonne to face in direction 105 +-1");
  t.assert.equal(t.getSprite("Baum").direction, 90, 1, "Expected Sprite Baum to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Milch").direction, 90, 1, "Expected Sprite Milch to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Papagei").effects.color, 0, "Expected effect color of Sprite Papagei to be 0");
  t.assert.equal(t.getSprite("Papagei").effects.fisheye, 0, "Expected effect fisheye of Sprite Papagei to be 0");
  t.assert.equal(t.getSprite("Papagei").effects.whirl, 0, "Expected effect whirl of Sprite Papagei to be 0");
  t.assert.equal(t.getSprite("Papagei").effects.pixelate, 0, "Expected effect pixelate of Sprite Papagei to be 0");
  t.assert.equal(t.getSprite("Papagei").effects.mosaic, 0, "Expected effect mosaic of Sprite Papagei to be 0");
  t.assert.equal(t.getSprite("Papagei").effects.brightness, 0, "Expected effect brightness of Sprite Papagei to be 0");
  t.assert.equal(t.getSprite("Papagei").effects.ghost, 0, "Expected effect ghost of Sprite Papagei to be 0");
  t.assert.equal(t.getSprite("Sonne").effects.color, 0, "Expected effect color of Sprite Sonne to be 0");
  t.assert.equal(t.getSprite("Sonne").effects.fisheye, 0, "Expected effect fisheye of Sprite Sonne to be 0");
  t.assert.equal(t.getSprite("Sonne").effects.whirl, 0, "Expected effect whirl of Sprite Sonne to be 0");
  t.assert.equal(t.getSprite("Sonne").effects.pixelate, 0, "Expected effect pixelate of Sprite Sonne to be 0");
  t.assert.equal(t.getSprite("Sonne").effects.mosaic, 0, "Expected effect mosaic of Sprite Sonne to be 0");
  t.assert.equal(t.getSprite("Sonne").effects.brightness, 0, "Expected effect brightness of Sprite Sonne to be 0");
  t.assert.equal(t.getSprite("Sonne").effects.ghost, 0, "Expected effect ghost of Sprite Sonne to be 0");
  t.assert.equal(t.getSprite("Baum").effects.color, 0, "Expected effect color of Sprite Baum to be 0");
  t.assert.equal(t.getSprite("Baum").effects.fisheye, 0, "Expected effect fisheye of Sprite Baum to be 0");
  t.assert.equal(t.getSprite("Baum").effects.whirl, 0, "Expected effect whirl of Sprite Baum to be 0");
  t.assert.equal(t.getSprite("Baum").effects.pixelate, 0, "Expected effect pixelate of Sprite Baum to be 0");
  t.assert.equal(t.getSprite("Baum").effects.mosaic, 0, "Expected effect mosaic of Sprite Baum to be 0");
  t.assert.equal(t.getSprite("Baum").effects.brightness, 0, "Expected effect brightness of Sprite Baum to be 0");
  t.assert.equal(t.getSprite("Baum").effects.ghost, 0, "Expected effect ghost of Sprite Baum to be 0");
  t.assert.equal(t.getSprite("Milch").effects.color, 0, "Expected effect color of Sprite Milch to be 0");
  t.assert.equal(t.getSprite("Milch").effects.fisheye, 0, "Expected effect fisheye of Sprite Milch to be 0");
  t.assert.equal(t.getSprite("Milch").effects.whirl, 0, "Expected effect whirl of Sprite Milch to be 0");
  t.assert.equal(t.getSprite("Milch").effects.pixelate, 0, "Expected effect pixelate of Sprite Milch to be 0");
  t.assert.equal(t.getSprite("Milch").effects.mosaic, 0, "Expected effect mosaic of Sprite Milch to be 0");
  t.assert.equal(t.getSprite("Milch").effects.brightness, 0, "Expected effect brightness of Sprite Milch to be 0");
  t.assert.equal(t.getSprite("Milch").effects.ghost, 0, "Expected effect ghost of Sprite Milch to be 0");
  t.assert.equal(t.getSprite("Papagei").layerOrder, 4, "Expected Sprite Papagei to be at layer 4");
  t.assert.equal(t.getSprite("Sonne").layerOrder, 1, "Expected Sprite Sonne to be at layer 1");
  t.assert.equal(t.getSprite("Baum").layerOrder, 2, "Expected Sprite Baum to be at layer 2");
  t.assert.equal(t.getSprite("Milch").layerOrder, 3, "Expected Sprite Milch to be at layer 3");
  t.assert.withinRange(t.getSprite("Papagei").x, -160, 5, "Expected Sprite Papagei to have x-position -160 +-5");
  t.assert.withinRange(t.getSprite("Papagei").y, -40, 5, "Expected Sprite Papagei to have y-position -40 +-5");
  t.assert.withinRange(t.getSprite("Sonne").x, -225, 5, "Expected Sprite Sonne to have x-position -225 +-5");
  t.assert.withinRange(t.getSprite("Sonne").y, 130, 5, "Expected Sprite Sonne to have y-position 130 +-5");
  t.assert.withinRange(t.getSprite("Baum").x, 154, 5, "Expected Sprite Baum to have x-position 154 +-5");
  t.assert.withinRange(t.getSprite("Baum").y, -43, 5, "Expected Sprite Baum to have y-position -43 +-5");
  t.assert.withinRange(t.getSprite("Milch").x, -8.84436263583015, 5, "Expected Sprite Milch to have x-position -8.84436263583015 +-5");
  t.assert.withinRange(t.getSprite("Milch").y, -54.58258827817712, 5, "Expected Sprite Milch to have y-position -54.58258827817712 +-5");
  t.assert.equal(t.getSprite("Papagei").sayText, "Am Baum wächst Milch?", "Expected Sprite Papagei to say Am Baum wächst Milch?");
  t.assert.not(t.getSprite("Sonne").sayText, "Expected Sprite Sonne not to say anything");
  t.assert.not(t.getSprite("Baum").sayText, "Expected Sprite Baum not to say anything");
  t.assert.not(t.getSprite("Milch").sayText, "Expected Sprite Milch not to say anything");
  t.assert.withinRange(t.getSprite("Papagei").size, 50, 1, "Expected Sprite Papagei to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Sonne").size, 100, 1, "Expected Sprite Sonne to have size 100 +-1");
  t.assert.withinRange(t.getSprite("Baum").size, 130, 1, "Expected Sprite Baum to have size 130 +-1");
  t.assert.withinRange(t.getSprite("Milch").size, 50, 1, "Expected Sprite Milch to have size 50 +-1");
  t.assert.ok(t.getSprite("Papagei").visible, "Expected Sprite Papagei to be visible");
  t.assert.ok(t.getSprite("Sonne").visible, "Expected Sprite Sonne to be visible");
  t.assert.ok(t.getSprite("Baum").visible, "Expected Sprite Baum to be visible");
  t.assert.ok(t.getSprite("Milch").visible, "Expected Sprite Milch to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Papagei").volume, 100, "Expected Sprite Papagei to have volume 100");
  t.assert.equal(t.getSprite("Sonne").volume, 100, "Expected Sprite Sonne to have volume 100");
  t.assert.equal(t.getSprite("Baum").volume, 100, "Expected Sprite Baum to have volume 100");
  t.assert.equal(t.getSprite("Milch").volume, 100, "Expected Sprite Milch to have volume 100");
  await t.runForSteps(27);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.equal(t.getSprite("Papagei").currentCostume, 1, "Expected Sprite Papagei to have costume 1");
  t.assert.equal(t.getSprite("Sonne").currentCostume, 0, "Expected Sprite Sonne to have costume 0");
  t.assert.equal(t.getSprite("Baum").currentCostume, 0, "Expected Sprite Baum to have costume 0");
  t.assert.equal(t.getSprite("Milch").currentCostume, 0, "Expected Sprite Milch to have costume 0");
  t.assert.equal(t.getSprite("Papagei").getCloneCount(), 0, "Expected Sprite Papagei to have 0 clones");
  t.assert.equal(t.getSprite("Sonne").getCloneCount(), 0, "Expected Sprite Sonne to have 0 clones");
  t.assert.equal(t.getSprite("Baum").getCloneCount(), 0, "Expected Sprite Baum to have 0 clones");
  t.assert.equal(t.getSprite("Milch").getCloneCount(), 0, "Expected Sprite Milch to have 0 clones");
  t.assert.equal(t.getSprite("Papagei").direction, 90, 1, "Expected Sprite Papagei to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Sonne").direction, 105, 1, "Expected Sprite Sonne to face in direction 105 +-1");
  t.assert.equal(t.getSprite("Baum").direction, 90, 1, "Expected Sprite Baum to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Milch").direction, 90, 1, "Expected Sprite Milch to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Papagei").effects.color, 0, "Expected effect color of Sprite Papagei to be 0");
  t.assert.equal(t.getSprite("Papagei").effects.fisheye, 0, "Expected effect fisheye of Sprite Papagei to be 0");
  t.assert.equal(t.getSprite("Papagei").effects.whirl, 0, "Expected effect whirl of Sprite Papagei to be 0");
  t.assert.equal(t.getSprite("Papagei").effects.pixelate, 0, "Expected effect pixelate of Sprite Papagei to be 0");
  t.assert.equal(t.getSprite("Papagei").effects.mosaic, 0, "Expected effect mosaic of Sprite Papagei to be 0");
  t.assert.equal(t.getSprite("Papagei").effects.brightness, 0, "Expected effect brightness of Sprite Papagei to be 0");
  t.assert.equal(t.getSprite("Papagei").effects.ghost, 0, "Expected effect ghost of Sprite Papagei to be 0");
  t.assert.equal(t.getSprite("Sonne").effects.color, 0, "Expected effect color of Sprite Sonne to be 0");
  t.assert.equal(t.getSprite("Sonne").effects.fisheye, 0, "Expected effect fisheye of Sprite Sonne to be 0");
  t.assert.equal(t.getSprite("Sonne").effects.whirl, 0, "Expected effect whirl of Sprite Sonne to be 0");
  t.assert.equal(t.getSprite("Sonne").effects.pixelate, 0, "Expected effect pixelate of Sprite Sonne to be 0");
  t.assert.equal(t.getSprite("Sonne").effects.mosaic, 0, "Expected effect mosaic of Sprite Sonne to be 0");
  t.assert.equal(t.getSprite("Sonne").effects.brightness, 0, "Expected effect brightness of Sprite Sonne to be 0");
  t.assert.equal(t.getSprite("Sonne").effects.ghost, 0, "Expected effect ghost of Sprite Sonne to be 0");
  t.assert.equal(t.getSprite("Baum").effects.color, 0, "Expected effect color of Sprite Baum to be 0");
  t.assert.equal(t.getSprite("Baum").effects.fisheye, 0, "Expected effect fisheye of Sprite Baum to be 0");
  t.assert.equal(t.getSprite("Baum").effects.whirl, 0, "Expected effect whirl of Sprite Baum to be 0");
  t.assert.equal(t.getSprite("Baum").effects.pixelate, 0, "Expected effect pixelate of Sprite Baum to be 0");
  t.assert.equal(t.getSprite("Baum").effects.mosaic, 0, "Expected effect mosaic of Sprite Baum to be 0");
  t.assert.equal(t.getSprite("Baum").effects.brightness, 0, "Expected effect brightness of Sprite Baum to be 0");
  t.assert.equal(t.getSprite("Baum").effects.ghost, 0, "Expected effect ghost of Sprite Baum to be 0");
  t.assert.equal(t.getSprite("Milch").effects.color, 0, "Expected effect color of Sprite Milch to be 0");
  t.assert.equal(t.getSprite("Milch").effects.fisheye, 0, "Expected effect fisheye of Sprite Milch to be 0");
  t.assert.equal(t.getSprite("Milch").effects.whirl, 0, "Expected effect whirl of Sprite Milch to be 0");
  t.assert.equal(t.getSprite("Milch").effects.pixelate, 0, "Expected effect pixelate of Sprite Milch to be 0");
  t.assert.equal(t.getSprite("Milch").effects.mosaic, 0, "Expected effect mosaic of Sprite Milch to be 0");
  t.assert.equal(t.getSprite("Milch").effects.brightness, 0, "Expected effect brightness of Sprite Milch to be 0");
  t.assert.equal(t.getSprite("Milch").effects.ghost, 0, "Expected effect ghost of Sprite Milch to be 0");
  t.assert.equal(t.getSprite("Papagei").layerOrder, 4, "Expected Sprite Papagei to be at layer 4");
  t.assert.equal(t.getSprite("Sonne").layerOrder, 1, "Expected Sprite Sonne to be at layer 1");
  t.assert.equal(t.getSprite("Baum").layerOrder, 2, "Expected Sprite Baum to be at layer 2");
  t.assert.equal(t.getSprite("Milch").layerOrder, 3, "Expected Sprite Milch to be at layer 3");
  t.assert.withinRange(t.getSprite("Papagei").x, -160, 5, "Expected Sprite Papagei to have x-position -160 +-5");
  t.assert.withinRange(t.getSprite("Papagei").y, -40, 5, "Expected Sprite Papagei to have y-position -40 +-5");
  t.assert.withinRange(t.getSprite("Sonne").x, -225, 5, "Expected Sprite Sonne to have x-position -225 +-5");
  t.assert.withinRange(t.getSprite("Sonne").y, 130, 5, "Expected Sprite Sonne to have y-position 130 +-5");
  t.assert.withinRange(t.getSprite("Baum").x, 154, 5, "Expected Sprite Baum to have x-position 154 +-5");
  t.assert.withinRange(t.getSprite("Baum").y, -43, 5, "Expected Sprite Baum to have y-position -43 +-5");
  t.assert.withinRange(t.getSprite("Milch").x, -8.84436263583015, 5, "Expected Sprite Milch to have x-position -8.84436263583015 +-5");
  t.assert.withinRange(t.getSprite("Milch").y, -54.58258827817712, 5, "Expected Sprite Milch to have y-position -54.58258827817712 +-5");
  t.assert.equal(t.getSprite("Papagei").sayText, "Am Baum wächst Milch?", "Expected Sprite Papagei to say Am Baum wächst Milch?");
  t.assert.not(t.getSprite("Sonne").sayText, "Expected Sprite Sonne not to say anything");
  t.assert.not(t.getSprite("Baum").sayText, "Expected Sprite Baum not to say anything");
  t.assert.not(t.getSprite("Milch").sayText, "Expected Sprite Milch not to say anything");
  t.assert.withinRange(t.getSprite("Papagei").size, 50, 1, "Expected Sprite Papagei to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Sonne").size, 100, 1, "Expected Sprite Sonne to have size 100 +-1");
  t.assert.withinRange(t.getSprite("Baum").size, 130, 1, "Expected Sprite Baum to have size 130 +-1");
  t.assert.withinRange(t.getSprite("Milch").size, 50, 1, "Expected Sprite Milch to have size 50 +-1");
  t.assert.ok(t.getSprite("Papagei").visible, "Expected Sprite Papagei to be visible");
  t.assert.ok(t.getSprite("Sonne").visible, "Expected Sprite Sonne to be visible");
  t.assert.ok(t.getSprite("Baum").visible, "Expected Sprite Baum to be visible");
  t.assert.ok(t.getSprite("Milch").visible, "Expected Sprite Milch to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Papagei").volume, 100, "Expected Sprite Papagei to have volume 100");
  t.assert.equal(t.getSprite("Sonne").volume, 100, "Expected Sprite Sonne to have volume 100");
  t.assert.equal(t.getSprite("Baum").volume, 100, "Expected Sprite Baum to have volume 100");
  t.assert.equal(t.getSprite("Milch").volume, 100, "Expected Sprite Milch to have volume 100");
  await t.runForSteps(64);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.equal(t.getSprite("Papagei").currentCostume, 1, "Expected Sprite Papagei to have costume 1");
  t.assert.equal(t.getSprite("Sonne").currentCostume, 0, "Expected Sprite Sonne to have costume 0");
  t.assert.equal(t.getSprite("Baum").currentCostume, 0, "Expected Sprite Baum to have costume 0");
  t.assert.equal(t.getSprite("Milch").currentCostume, 2, "Expected Sprite Milch to have costume 2");
  t.assert.equal(t.getSprite("Papagei").getCloneCount(), 0, "Expected Sprite Papagei to have 0 clones");
  t.assert.equal(t.getSprite("Sonne").getCloneCount(), 0, "Expected Sprite Sonne to have 0 clones");
  t.assert.equal(t.getSprite("Baum").getCloneCount(), 0, "Expected Sprite Baum to have 0 clones");
  t.assert.equal(t.getSprite("Milch").getCloneCount(), 0, "Expected Sprite Milch to have 0 clones");
  t.assert.equal(t.getSprite("Papagei").direction, 75, 1, "Expected Sprite Papagei to face in direction 75 +-1");
  t.assert.equal(t.getSprite("Sonne").direction, 150, 1, "Expected Sprite Sonne to face in direction 150 +-1");
  t.assert.equal(t.getSprite("Baum").direction, 90, 1, "Expected Sprite Baum to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Milch").direction, 90, 1, "Expected Sprite Milch to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Papagei").effects.color, 0, "Expected effect color of Sprite Papagei to be 0");
  t.assert.equal(t.getSprite("Papagei").effects.fisheye, 0, "Expected effect fisheye of Sprite Papagei to be 0");
  t.assert.equal(t.getSprite("Papagei").effects.whirl, 0, "Expected effect whirl of Sprite Papagei to be 0");
  t.assert.equal(t.getSprite("Papagei").effects.pixelate, 0, "Expected effect pixelate of Sprite Papagei to be 0");
  t.assert.equal(t.getSprite("Papagei").effects.mosaic, 0, "Expected effect mosaic of Sprite Papagei to be 0");
  t.assert.equal(t.getSprite("Papagei").effects.brightness, 0, "Expected effect brightness of Sprite Papagei to be 0");
  t.assert.equal(t.getSprite("Papagei").effects.ghost, 0, "Expected effect ghost of Sprite Papagei to be 0");
  t.assert.equal(t.getSprite("Sonne").effects.color, 0, "Expected effect color of Sprite Sonne to be 0");
  t.assert.equal(t.getSprite("Sonne").effects.fisheye, 0, "Expected effect fisheye of Sprite Sonne to be 0");
  t.assert.equal(t.getSprite("Sonne").effects.whirl, 0, "Expected effect whirl of Sprite Sonne to be 0");
  t.assert.equal(t.getSprite("Sonne").effects.pixelate, 0, "Expected effect pixelate of Sprite Sonne to be 0");
  t.assert.equal(t.getSprite("Sonne").effects.mosaic, 0, "Expected effect mosaic of Sprite Sonne to be 0");
  t.assert.equal(t.getSprite("Sonne").effects.brightness, 0, "Expected effect brightness of Sprite Sonne to be 0");
  t.assert.equal(t.getSprite("Sonne").effects.ghost, 0, "Expected effect ghost of Sprite Sonne to be 0");
  t.assert.equal(t.getSprite("Baum").effects.color, 0, "Expected effect color of Sprite Baum to be 0");
  t.assert.equal(t.getSprite("Baum").effects.fisheye, 0, "Expected effect fisheye of Sprite Baum to be 0");
  t.assert.equal(t.getSprite("Baum").effects.whirl, 0, "Expected effect whirl of Sprite Baum to be 0");
  t.assert.equal(t.getSprite("Baum").effects.pixelate, 0, "Expected effect pixelate of Sprite Baum to be 0");
  t.assert.equal(t.getSprite("Baum").effects.mosaic, 0, "Expected effect mosaic of Sprite Baum to be 0");
  t.assert.equal(t.getSprite("Baum").effects.brightness, 0, "Expected effect brightness of Sprite Baum to be 0");
  t.assert.equal(t.getSprite("Baum").effects.ghost, 0, "Expected effect ghost of Sprite Baum to be 0");
  t.assert.equal(t.getSprite("Milch").effects.color, 0, "Expected effect color of Sprite Milch to be 0");
  t.assert.equal(t.getSprite("Milch").effects.fisheye, 0, "Expected effect fisheye of Sprite Milch to be 0");
  t.assert.equal(t.getSprite("Milch").effects.whirl, 0, "Expected effect whirl of Sprite Milch to be 0");
  t.assert.equal(t.getSprite("Milch").effects.pixelate, 0, "Expected effect pixelate of Sprite Milch to be 0");
  t.assert.equal(t.getSprite("Milch").effects.mosaic, 0, "Expected effect mosaic of Sprite Milch to be 0");
  t.assert.equal(t.getSprite("Milch").effects.brightness, 0, "Expected effect brightness of Sprite Milch to be 0");
  t.assert.equal(t.getSprite("Milch").effects.ghost, 0, "Expected effect ghost of Sprite Milch to be 0");
  t.assert.equal(t.getSprite("Papagei").layerOrder, 4, "Expected Sprite Papagei to be at layer 4");
  t.assert.equal(t.getSprite("Sonne").layerOrder, 1, "Expected Sprite Sonne to be at layer 1");
  t.assert.equal(t.getSprite("Baum").layerOrder, 2, "Expected Sprite Baum to be at layer 2");
  t.assert.equal(t.getSprite("Milch").layerOrder, 3, "Expected Sprite Milch to be at layer 3");
  t.assert.withinRange(t.getSprite("Papagei").x, -44.08890084531176, 5, "Expected Sprite Papagei to have x-position -44.08890084531176 +-5");
  t.assert.withinRange(t.getSprite("Papagei").y, -8.941714587697527, 5, "Expected Sprite Papagei to have y-position -8.941714587697527 +-5");
  t.assert.withinRange(t.getSprite("Sonne").x, -219.9218839774799, 5, "Expected Sprite Sonne to have x-position -219.9218839774799 +-5");
  t.assert.withinRange(t.getSprite("Sonne").y, 127.06814834742185, 5, "Expected Sprite Sonne to have y-position 127.06814834742185 +-5");
  t.assert.withinRange(t.getSprite("Baum").x, 154, 5, "Expected Sprite Baum to have x-position 154 +-5");
  t.assert.withinRange(t.getSprite("Baum").y, -43, 5, "Expected Sprite Baum to have y-position -43 +-5");
  t.assert.withinRange(t.getSprite("Milch").x, -8.84436263583015, 5, "Expected Sprite Milch to have x-position -8.84436263583015 +-5");
  t.assert.withinRange(t.getSprite("Milch").y, -54.58258827817712, 5, "Expected Sprite Milch to have y-position -54.58258827817712 +-5");
  t.assert.equal(t.getSprite("Papagei").sayText, "Lecker!", "Expected Sprite Papagei to say Lecker!");
  t.assert.not(t.getSprite("Sonne").sayText, "Expected Sprite Sonne not to say anything");
  t.assert.not(t.getSprite("Baum").sayText, "Expected Sprite Baum not to say anything");
  t.assert.not(t.getSprite("Milch").sayText, "Expected Sprite Milch not to say anything");
  t.assert.withinRange(t.getSprite("Papagei").size, 50, 1, "Expected Sprite Papagei to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Sonne").size, 100, 1, "Expected Sprite Sonne to have size 100 +-1");
  t.assert.withinRange(t.getSprite("Baum").size, 130, 1, "Expected Sprite Baum to have size 130 +-1");
  t.assert.withinRange(t.getSprite("Milch").size, 50, 1, "Expected Sprite Milch to have size 50 +-1");
  t.assert.ok(t.getSprite("Papagei").visible, "Expected Sprite Papagei to be visible");
  t.assert.ok(t.getSprite("Sonne").visible, "Expected Sprite Sonne to be visible");
  t.assert.ok(t.getSprite("Baum").visible, "Expected Sprite Baum to be visible");
  t.assert.ok(t.getSprite("Milch").visible, "Expected Sprite Milch to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Papagei").volume, 100, "Expected Sprite Papagei to have volume 100");
  t.assert.equal(t.getSprite("Sonne").volume, 100, "Expected Sprite Sonne to have volume 100");
  t.assert.equal(t.getSprite("Baum").volume, 100, "Expected Sprite Baum to have volume 100");
  t.assert.equal(t.getSprite("Milch").volume, 100, "Expected Sprite Milch to have volume 100");
  await t.runForSteps(72);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.equal(t.getSprite("Papagei").currentCostume, 1, "Expected Sprite Papagei to have costume 1");
  t.assert.equal(t.getSprite("Sonne").currentCostume, 0, "Expected Sprite Sonne to have costume 0");
  t.assert.equal(t.getSprite("Baum").currentCostume, 0, "Expected Sprite Baum to have costume 0");
  t.assert.equal(t.getSprite("Milch").currentCostume, 4, "Expected Sprite Milch to have costume 4");
  t.assert.equal(t.getSprite("Papagei").getCloneCount(), 0, "Expected Sprite Papagei to have 0 clones");
  t.assert.equal(t.getSprite("Sonne").getCloneCount(), 0, "Expected Sprite Sonne to have 0 clones");
  t.assert.equal(t.getSprite("Baum").getCloneCount(), 0, "Expected Sprite Baum to have 0 clones");
  t.assert.equal(t.getSprite("Milch").getCloneCount(), 0, "Expected Sprite Milch to have 0 clones");
  t.assert.equal(t.getSprite("Papagei").direction, 75, 1, "Expected Sprite Papagei to face in direction 75 +-1");
  t.assert.equal(t.getSprite("Sonne").direction, 165, 1, "Expected Sprite Sonne to face in direction 165 +-1");
  t.assert.equal(t.getSprite("Baum").direction, 90, 1, "Expected Sprite Baum to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Milch").direction, 90, 1, "Expected Sprite Milch to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Papagei").effects.color, 0, "Expected effect color of Sprite Papagei to be 0");
  t.assert.equal(t.getSprite("Papagei").effects.fisheye, 0, "Expected effect fisheye of Sprite Papagei to be 0");
  t.assert.equal(t.getSprite("Papagei").effects.whirl, 0, "Expected effect whirl of Sprite Papagei to be 0");
  t.assert.equal(t.getSprite("Papagei").effects.pixelate, 0, "Expected effect pixelate of Sprite Papagei to be 0");
  t.assert.equal(t.getSprite("Papagei").effects.mosaic, 0, "Expected effect mosaic of Sprite Papagei to be 0");
  t.assert.equal(t.getSprite("Papagei").effects.brightness, 0, "Expected effect brightness of Sprite Papagei to be 0");
  t.assert.equal(t.getSprite("Papagei").effects.ghost, 0, "Expected effect ghost of Sprite Papagei to be 0");
  t.assert.equal(t.getSprite("Sonne").effects.color, 0, "Expected effect color of Sprite Sonne to be 0");
  t.assert.equal(t.getSprite("Sonne").effects.fisheye, 0, "Expected effect fisheye of Sprite Sonne to be 0");
  t.assert.equal(t.getSprite("Sonne").effects.whirl, 0, "Expected effect whirl of Sprite Sonne to be 0");
  t.assert.equal(t.getSprite("Sonne").effects.pixelate, 0, "Expected effect pixelate of Sprite Sonne to be 0");
  t.assert.equal(t.getSprite("Sonne").effects.mosaic, 0, "Expected effect mosaic of Sprite Sonne to be 0");
  t.assert.equal(t.getSprite("Sonne").effects.brightness, 0, "Expected effect brightness of Sprite Sonne to be 0");
  t.assert.equal(t.getSprite("Sonne").effects.ghost, 0, "Expected effect ghost of Sprite Sonne to be 0");
  t.assert.equal(t.getSprite("Baum").effects.color, 0, "Expected effect color of Sprite Baum to be 0");
  t.assert.equal(t.getSprite("Baum").effects.fisheye, 0, "Expected effect fisheye of Sprite Baum to be 0");
  t.assert.equal(t.getSprite("Baum").effects.whirl, 0, "Expected effect whirl of Sprite Baum to be 0");
  t.assert.equal(t.getSprite("Baum").effects.pixelate, 0, "Expected effect pixelate of Sprite Baum to be 0");
  t.assert.equal(t.getSprite("Baum").effects.mosaic, 0, "Expected effect mosaic of Sprite Baum to be 0");
  t.assert.equal(t.getSprite("Baum").effects.brightness, 0, "Expected effect brightness of Sprite Baum to be 0");
  t.assert.equal(t.getSprite("Baum").effects.ghost, 0, "Expected effect ghost of Sprite Baum to be 0");
  t.assert.equal(t.getSprite("Milch").effects.color, 0, "Expected effect color of Sprite Milch to be 0");
  t.assert.equal(t.getSprite("Milch").effects.fisheye, 0, "Expected effect fisheye of Sprite Milch to be 0");
  t.assert.equal(t.getSprite("Milch").effects.whirl, 0, "Expected effect whirl of Sprite Milch to be 0");
  t.assert.equal(t.getSprite("Milch").effects.pixelate, 0, "Expected effect pixelate of Sprite Milch to be 0");
  t.assert.equal(t.getSprite("Milch").effects.mosaic, 0, "Expected effect mosaic of Sprite Milch to be 0");
  t.assert.equal(t.getSprite("Milch").effects.brightness, 0, "Expected effect brightness of Sprite Milch to be 0");
  t.assert.equal(t.getSprite("Milch").effects.ghost, 0, "Expected effect ghost of Sprite Milch to be 0");
  t.assert.equal(t.getSprite("Papagei").layerOrder, 4, "Expected Sprite Papagei to be at layer 4");
  t.assert.equal(t.getSprite("Sonne").layerOrder, 1, "Expected Sprite Sonne to be at layer 1");
  t.assert.equal(t.getSprite("Baum").layerOrder, 2, "Expected Sprite Baum to be at layer 2");
  t.assert.equal(t.getSprite("Milch").layerOrder, 3, "Expected Sprite Milch to be at layer 3");
  t.assert.withinRange(t.getSprite("Papagei").x, -44.08890084531176, 5, "Expected Sprite Papagei to have x-position -44.08890084531176 +-5");
  t.assert.withinRange(t.getSprite("Papagei").y, -8.941714587697527, 5, "Expected Sprite Papagei to have y-position -8.941714587697527 +-5");
  t.assert.withinRange(t.getSprite("Sonne").x, -218.9218839774799, 5, "Expected Sprite Sonne to have x-position -218.9218839774799 +-5");
  t.assert.withinRange(t.getSprite("Sonne").y, 125.33609753985297, 5, "Expected Sprite Sonne to have y-position 125.33609753985297 +-5");
  t.assert.withinRange(t.getSprite("Baum").x, 154, 5, "Expected Sprite Baum to have x-position 154 +-5");
  t.assert.withinRange(t.getSprite("Baum").y, -43, 5, "Expected Sprite Baum to have y-position -43 +-5");
  t.assert.withinRange(t.getSprite("Milch").x, -8.84436263583015, 5, "Expected Sprite Milch to have x-position -8.84436263583015 +-5");
  t.assert.withinRange(t.getSprite("Milch").y, -54.58258827817712, 5, "Expected Sprite Milch to have y-position -54.58258827817712 +-5");
  t.assert.not(t.getSprite("Papagei").sayText, "Expected Sprite Papagei not to say anything");
  t.assert.not(t.getSprite("Sonne").sayText, "Expected Sprite Sonne not to say anything");
  t.assert.not(t.getSprite("Baum").sayText, "Expected Sprite Baum not to say anything");
  t.assert.not(t.getSprite("Milch").sayText, "Expected Sprite Milch not to say anything");
  t.assert.withinRange(t.getSprite("Papagei").size, 50, 1, "Expected Sprite Papagei to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Sonne").size, 100, 1, "Expected Sprite Sonne to have size 100 +-1");
  t.assert.withinRange(t.getSprite("Baum").size, 130, 1, "Expected Sprite Baum to have size 130 +-1");
  t.assert.withinRange(t.getSprite("Milch").size, 50, 1, "Expected Sprite Milch to have size 50 +-1");
  t.assert.ok(t.getSprite("Papagei").visible, "Expected Sprite Papagei to be visible");
  t.assert.ok(t.getSprite("Sonne").visible, "Expected Sprite Sonne to be visible");
  t.assert.ok(t.getSprite("Baum").visible, "Expected Sprite Baum to be visible");
  t.assert.ok(t.getSprite("Milch").visible, "Expected Sprite Milch to be visible");
  t.assert.equal(t.getStage().volume, 100, "Expected Stage to have volume 100");
  t.assert.equal(t.getSprite("Papagei").volume, 100, "Expected Sprite Papagei to have volume 100");
  t.assert.equal(t.getSprite("Sonne").volume, 100, "Expected Sprite Sonne to have volume 100");
  t.assert.equal(t.getSprite("Baum").volume, 100, "Expected Sprite Baum to have volume 100");
  t.assert.equal(t.getSprite("Milch").volume, 100, "Expected Sprite Milch to have volume 100");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687938233179',
      type: 'standard',
  }
]
