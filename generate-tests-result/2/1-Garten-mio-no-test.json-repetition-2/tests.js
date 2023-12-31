const test0 = async function (t) {
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.keyPress('down arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.keyPress('down arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.keyPress('left arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  await t.runForSteps(23);
  await t.runForSteps(1);
  t.keyPress('down arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Blume").direction, 90, 1, "Expected Sprite Blume to face in direction 90 +-1");
  t.keyPress('left arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.keyPress('left arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.keyPress('up arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.keyPress('left arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Kaktus").getClone(1).currentCostume, 0, "Expected Clone 1 of Kaktus to have costume 0");
  t.assert.equal(t.getSprite("Kaktus").getCloneCount(), 1, "Expected Sprite Kaktus to have 1 clones");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).direction, 90, 1, "Expected Clone 1 of Kaktus to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Gärtnerin").layerOrder, 3, "Expected Sprite Gärtnerin to be at layer 3");
  t.assert.equal(t.getSprite("Blume").layerOrder, 4, "Expected Sprite Blume to be at layer 4");
  t.assert.equal(t.getSprite("Kaktus").layerOrder, 2, "Expected Sprite Kaktus to be at layer 2");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).getLayerOrder(), 1, "Expected Clone 1 of Kaktus to be at layer 1");
  t.assert.withinRange(t.getSprite("Blume").x, -229, 5, "Expected Sprite Blume to have x-position -229 +-5");
  t.assert.withinRange(t.getSprite("Blume").y, -135, 5, "Expected Sprite Blume to have y-position -135 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).x, 239, 5, "Expected Clone 1 of Kaktus to have x-position 239 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).y, -11, 5, "Expected Clone 1 of Kaktus to have y-position -11 +-5");
  t.assert.not(t.getSprite("Gärtnerin").sayText, "Expected Sprite Gärtnerin not to say anything");
  t.assert.not(t.getSprite("Kaktus").getClone(1).sayText, "Expected Clone 1 of Kaktus not to say anything");
  t.assert.withinRange(t.getSprite("Gärtnerin").size, 20, 1, "Expected Sprite Gärtnerin to have size 20 +-1");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).size, 20, 1, "Expected Clone 1 of Kaktus to have size 20 +-1");
  t.assert.ok(t.getSprite("Kaktus").getClone(1).visible, "Expected Clone 1 of Kaktus to be visible");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).volume, 100, "Expected Clone 1 of Kaktus to have volume 100");
  await t.runForSteps(33);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Blume").direction, 95, 1, "Expected Sprite Blume to face in direction 95 +-1");
  t.keyPress('left arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Gärtnerin").x, -180, 5, "Expected Sprite Gärtnerin to have x-position -180 +-5");
  t.assert.withinRange(t.getSprite("Gärtnerin").y, 60, 5, "Expected Sprite Gärtnerin to have y-position 60 +-5");
  t.keyPress('left arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Gärtnerin").x, -185, 5, "Expected Sprite Gärtnerin to have x-position -185 +-5");
  t.assert.withinRange(t.getSprite("Gärtnerin").y, 60, 5, "Expected Sprite Gärtnerin to have y-position 60 +-5");
  t.dragSprite('Gärtnerin', 190.62079361207387, -45.20910325297788, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Gärtnerin").x, 190.62079361207387, 5, "Expected Sprite Gärtnerin to have x-position 190.62079361207387 +-5");
  t.assert.withinRange(t.getSprite("Gärtnerin").y, -45.20910325297788, 5, "Expected Sprite Gärtnerin to have y-position -45.20910325297788 +-5");
  await t.runForSteps(35);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Kaktus").getClone(2).currentCostume, 0, "Expected Clone 2 of Kaktus to have costume 0");
  t.assert.equal(t.getSprite("Kaktus").getCloneCount(), 2, "Expected Sprite Kaktus to have 2 clones");
  t.assert.equal(t.getSprite("Kaktus").getClone(2).direction, 90, 1, "Expected Clone 2 of Kaktus to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Kaktus").getClone(2).effects.color, 0, "Expected effect color of Clone 2 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(2).effects.fisheye, 0, "Expected effect fisheye of Clone 2 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(2).effects.whirl, 0, "Expected effect whirl of Clone 2 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(2).effects.pixelate, 0, "Expected effect pixelate of Clone 2 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(2).effects.mosaic, 0, "Expected effect mosaic of Clone 2 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(2).effects.brightness, 0, "Expected effect brightness of Clone 2 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(2).effects.ghost, 0, "Expected effect ghost of Clone 2 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Gärtnerin").layerOrder, 4, "Expected Sprite Gärtnerin to be at layer 4");
  t.assert.equal(t.getSprite("Blume").layerOrder, 5, "Expected Sprite Blume to be at layer 5");
  t.assert.equal(t.getSprite("Kaktus").layerOrder, 3, "Expected Sprite Kaktus to be at layer 3");
  t.assert.equal(t.getSprite("Kaktus").getClone(2).getLayerOrder(), 2, "Expected Clone 2 of Kaktus to be at layer 2");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(2).x, -30, 5, "Expected Clone 2 of Kaktus to have x-position -30 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(2).y, -32, 5, "Expected Clone 2 of Kaktus to have y-position -32 +-5");
  t.assert.not(t.getSprite("Kaktus").getClone(2).sayText, "Expected Clone 2 of Kaktus not to say anything");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(2).size, 20, 1, "Expected Clone 2 of Kaktus to have size 20 +-1");
  t.assert.ok(t.getSprite("Kaktus").getClone(2).visible, "Expected Clone 2 of Kaktus to be visible");
  t.assert.equal(t.getSprite("Kaktus").getClone(2).volume, 100, "Expected Clone 2 of Kaktus to have volume 100");
  t.keyPress('left arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Gärtnerin").x, 185.62079361207387, 5, "Expected Sprite Gärtnerin to have x-position 185.62079361207387 +-5");
  t.assert.withinRange(t.getSprite("Gärtnerin").y, -45.20910325297788, 5, "Expected Sprite Gärtnerin to have y-position -45.20910325297788 +-5");
  await t.runForSteps(68);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Kaktus").getClone(3).currentCostume, 0, "Expected Clone 3 of Kaktus to have costume 0");
  t.assert.equal(t.getSprite("Kaktus").getCloneCount(), 3, "Expected Sprite Kaktus to have 3 clones");
  t.assert.equal(t.getSprite("Blume").direction, 90, 1, "Expected Sprite Blume to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Kaktus").getClone(3).direction, 90, 1, "Expected Clone 3 of Kaktus to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Kaktus").getClone(3).effects.color, 0, "Expected effect color of Clone 3 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(3).effects.fisheye, 0, "Expected effect fisheye of Clone 3 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(3).effects.whirl, 0, "Expected effect whirl of Clone 3 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(3).effects.pixelate, 0, "Expected effect pixelate of Clone 3 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(3).effects.mosaic, 0, "Expected effect mosaic of Clone 3 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(3).effects.brightness, 0, "Expected effect brightness of Clone 3 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(3).effects.ghost, 0, "Expected effect ghost of Clone 3 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Gärtnerin").layerOrder, 5, "Expected Sprite Gärtnerin to be at layer 5");
  t.assert.equal(t.getSprite("Blume").layerOrder, 6, "Expected Sprite Blume to be at layer 6");
  t.assert.equal(t.getSprite("Kaktus").layerOrder, 4, "Expected Sprite Kaktus to be at layer 4");
  t.assert.equal(t.getSprite("Kaktus").getClone(3).getLayerOrder(), 3, "Expected Clone 3 of Kaktus to be at layer 3");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(3).x, -80, 5, "Expected Clone 3 of Kaktus to have x-position -80 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(3).y, -145, 5, "Expected Clone 3 of Kaktus to have y-position -145 +-5");
  t.assert.not(t.getSprite("Kaktus").getClone(3).sayText, "Expected Clone 3 of Kaktus not to say anything");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(3).size, 20, 1, "Expected Clone 3 of Kaktus to have size 20 +-1");
  t.assert.ok(t.getSprite("Kaktus").getClone(3).visible, "Expected Clone 3 of Kaktus to be visible");
  t.assert.equal(t.getSprite("Kaktus").getClone(3).volume, 100, "Expected Clone 3 of Kaktus to have volume 100");
  t.keyPress('right arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Gärtnerin").x, 190.62079361207387, 5, "Expected Sprite Gärtnerin to have x-position 190.62079361207387 +-5");
  t.assert.withinRange(t.getSprite("Gärtnerin").y, -45.20910325297788, 5, "Expected Sprite Gärtnerin to have y-position -45.20910325297788 +-5");
  await t.runForSteps(86);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Kaktus").getClone(4).currentCostume, 0, "Expected Clone 4 of Kaktus to have costume 0");
  t.assert.equal(t.getSprite("Kaktus").getCloneCount(), 4, "Expected Sprite Kaktus to have 4 clones");
  t.assert.equal(t.getSprite("Kaktus").getClone(4).direction, 90, 1, "Expected Clone 4 of Kaktus to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Kaktus").getClone(4).effects.color, 0, "Expected effect color of Clone 4 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(4).effects.fisheye, 0, "Expected effect fisheye of Clone 4 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(4).effects.whirl, 0, "Expected effect whirl of Clone 4 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(4).effects.pixelate, 0, "Expected effect pixelate of Clone 4 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(4).effects.mosaic, 0, "Expected effect mosaic of Clone 4 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(4).effects.brightness, 0, "Expected effect brightness of Clone 4 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(4).effects.ghost, 0, "Expected effect ghost of Clone 4 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Gärtnerin").layerOrder, 6, "Expected Sprite Gärtnerin to be at layer 6");
  t.assert.equal(t.getSprite("Blume").layerOrder, 7, "Expected Sprite Blume to be at layer 7");
  t.assert.equal(t.getSprite("Kaktus").layerOrder, 5, "Expected Sprite Kaktus to be at layer 5");
  t.assert.equal(t.getSprite("Kaktus").getClone(4).getLayerOrder(), 4, "Expected Clone 4 of Kaktus to be at layer 4");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(4).x, 220, 5, "Expected Clone 4 of Kaktus to have x-position 220 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(4).y, 113, 5, "Expected Clone 4 of Kaktus to have y-position 113 +-5");
  t.assert.not(t.getSprite("Kaktus").getClone(4).sayText, "Expected Clone 4 of Kaktus not to say anything");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(4).size, 20, 1, "Expected Clone 4 of Kaktus to have size 20 +-1");
  t.assert.ok(t.getSprite("Kaktus").getClone(4).visible, "Expected Clone 4 of Kaktus to be visible");
  t.assert.equal(t.getSprite("Kaktus").getClone(4).volume, 100, "Expected Clone 4 of Kaktus to have volume 100");
  t.dragSprite('Gärtnerin', 240, -66.02918362468724, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Gärtnerin").x, 240, 5, "Expected Sprite Gärtnerin to have x-position 240 +-5");
  t.assert.withinRange(t.getSprite("Gärtnerin").y, -66.02918362468724, 5, "Expected Sprite Gärtnerin to have y-position -66.02918362468724 +-5");
  t.dragSprite('Gärtnerin', 240, -3.9072041208414863, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.equal(t.getSprite("Gärtnerin").effects.color, 25, "Expected effect color of Sprite Gärtnerin to be 25");
  t.assert.withinRange(t.getSprite("Gärtnerin").x, 240, 5, "Expected Sprite Gärtnerin to have x-position 240 +-5");
  t.assert.withinRange(t.getSprite("Gärtnerin").y, -3.9072041208414863, 5, "Expected Sprite Gärtnerin to have y-position -3.9072041208414863 +-5");
  t.assert.equal(t.getSprite("Gärtnerin").sayText, "Autsch!", "Expected Sprite Gärtnerin to say Autsch!");
  t.assert.equal(t.getSprite("Blume").sayText, "Ohje!", "Expected Sprite Blume to say Ohje!");
  await t.runForSteps(17);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Gärtnerin").effects.color, 50, "Expected effect color of Sprite Gärtnerin to be 50");
  t.assert.withinRange(t.getSprite("Kaktus").x, 145.5, 5, "Expected Sprite Kaktus to have x-position 145.5 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").y, 40.82783876374755, 5, "Expected Sprite Kaktus to have y-position 40.82783876374755 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).x, 239.3, 5, "Expected Clone 1 of Kaktus to have x-position 239.3 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).y, -8.872161236252445, 5, "Expected Clone 1 of Kaktus to have y-position -8.872161236252445 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(2).x, 51, 5, "Expected Clone 2 of Kaktus to have x-position 51 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(2).y, -23.572161236252448, 5, "Expected Clone 2 of Kaktus to have y-position -23.572161236252448 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(3).x, 16, 5, "Expected Clone 3 of Kaktus to have x-position 16 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(3).y, -102.67216123625245, 5, "Expected Clone 3 of Kaktus to have y-position -102.67216123625245 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(4).x, 226, 5, "Expected Clone 4 of Kaktus to have x-position 226 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(4).y, 77.92783876374756, 5, "Expected Clone 4 of Kaktus to have y-position 77.92783876374756 +-5");
  await t.runForSteps(19);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Gärtnerin").effects.color, 75, "Expected effect color of Sprite Gärtnerin to be 75");
  t.assert.withinRange(t.getSprite("Kaktus").x, 190.5, 5, "Expected Sprite Kaktus to have x-position 190.5 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").y, 19.52543739013373, 5, "Expected Sprite Kaktus to have y-position 19.52543739013373 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).x, 239.63333333333333, 5, "Expected Clone 1 of Kaktus to have x-position 239.63333333333333 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).y, -6.507895943199609, 5, "Expected Clone 1 of Kaktus to have y-position -6.507895943199609 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(2).x, 141, 5, "Expected Clone 2 of Kaktus to have x-position 141 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(2).y, -14.207895943199606, 5, "Expected Clone 2 of Kaktus to have y-position -14.207895943199606 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(3).x, 122.66666666666666, 5, "Expected Clone 3 of Kaktus to have x-position 122.66666666666666 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(3).y, -55.641229276532954, 5, "Expected Clone 3 of Kaktus to have y-position -55.641229276532954 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(4).x, 232.66666666666666, 5, "Expected Clone 4 of Kaktus to have x-position 232.66666666666666 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(4).y, 38.95877072346707, 5, "Expected Clone 4 of Kaktus to have y-position 38.95877072346707 +-5");
  await t.runForSteps(6);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Kaktus").x, 206.25, 5, "Expected Sprite Kaktus to have x-position 206.25 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").y, 12.069596909368883, 5, "Expected Sprite Kaktus to have y-position 12.069596909368883 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).x, 239.75, 5, "Expected Clone 1 of Kaktus to have x-position 239.75 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).y, -5.680403090631115, 5, "Expected Clone 1 of Kaktus to have y-position -5.680403090631115 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(2).x, 172.5, 5, "Expected Clone 2 of Kaktus to have x-position 172.5 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(2).y, -10.930403090631113, 5, "Expected Clone 2 of Kaktus to have y-position -10.930403090631113 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(3).x, 160, 5, "Expected Clone 3 of Kaktus to have x-position 160 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(3).y, -39.18040309063113, 5, "Expected Clone 3 of Kaktus to have y-position -39.18040309063113 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(4).x, 235, 5, "Expected Clone 4 of Kaktus to have x-position 235 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(4).y, 25.319596909368883, 5, "Expected Clone 4 of Kaktus to have y-position 25.319596909368883 +-5");
  await t.runForSteps(24);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Gärtnerin").effects.color, 125, "Expected effect color of Sprite Gärtnerin to be 125");
  t.assert.withinRange(t.getSprite("Kaktus").x, 240, 5, "Expected Sprite Kaktus to have x-position 240 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").y, -3.9072041208414863, 5, "Expected Sprite Kaktus to have y-position -3.9072041208414863 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).x, 240, 5, "Expected Clone 1 of Kaktus to have x-position 240 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).y, -3.9072041208414863, 5, "Expected Clone 1 of Kaktus to have y-position -3.9072041208414863 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(2).x, 240, 5, "Expected Clone 2 of Kaktus to have x-position 240 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(2).y, -3.9072041208414863, 5, "Expected Clone 2 of Kaktus to have y-position -3.9072041208414863 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(3).x, 240, 5, "Expected Clone 3 of Kaktus to have x-position 240 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(3).y, -3.9072041208414863, 5, "Expected Clone 3 of Kaktus to have y-position -3.9072041208414863 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(4).x, 240, 5, "Expected Clone 4 of Kaktus to have x-position 240 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(4).y, -3.9072041208414863, 5, "Expected Clone 4 of Kaktus to have y-position -3.9072041208414863 +-5");
  await t.runForSteps(37);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Gärtnerin").effects.color, 175, "Expected effect color of Sprite Gärtnerin to be 175");
  await t.runForSteps(48);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Gärtnerin").effects.color, 250, "Expected effect color of Sprite Gärtnerin to be 250");
  await t.runForSteps(46);
  await t.runForSteps(1);
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(8);
  await t.runForSteps(1);
  t.keyPress('down arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.keyPress('down arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(83);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Kaktus").getClone(1).currentCostume, 0, "Expected Clone 1 of Kaktus to have costume 0");
  t.assert.equal(t.getSprite("Kaktus").getCloneCount(), 1, "Expected Sprite Kaktus to have 1 clones");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).direction, 90, 1, "Expected Clone 1 of Kaktus to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Kaktus to be 0");
  t.assert.equal(t.getSprite("Gärtnerin").layerOrder, 3, "Expected Sprite Gärtnerin to be at layer 3");
  t.assert.equal(t.getSprite("Blume").layerOrder, 4, "Expected Sprite Blume to be at layer 4");
  t.assert.equal(t.getSprite("Kaktus").layerOrder, 2, "Expected Sprite Kaktus to be at layer 2");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).getLayerOrder(), 1, "Expected Clone 1 of Kaktus to be at layer 1");
  t.assert.withinRange(t.getSprite("Blume").x, -229, 5, "Expected Sprite Blume to have x-position -229 +-5");
  t.assert.withinRange(t.getSprite("Blume").y, -135, 5, "Expected Sprite Blume to have y-position -135 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).x, 239, 5, "Expected Clone 1 of Kaktus to have x-position 239 +-5");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).y, -11, 5, "Expected Clone 1 of Kaktus to have y-position -11 +-5");
  t.assert.not(t.getSprite("Gärtnerin").sayText, "Expected Sprite Gärtnerin not to say anything");
  t.assert.not(t.getSprite("Kaktus").getClone(1).sayText, "Expected Clone 1 of Kaktus not to say anything");
  t.assert.withinRange(t.getSprite("Gärtnerin").size, 20, 1, "Expected Sprite Gärtnerin to have size 20 +-1");
  t.assert.withinRange(t.getSprite("Kaktus").getClone(1).size, 20, 1, "Expected Clone 1 of Kaktus to have size 20 +-1");
  t.assert.ok(t.getSprite("Kaktus").getClone(1).visible, "Expected Clone 1 of Kaktus to be visible");
  t.assert.equal(t.getSprite("Kaktus").getClone(1).volume, 100, "Expected Clone 1 of Kaktus to have volume 100");
  t.keyPress('down arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Gärtnerin").x, -170, 5, "Expected Sprite Gärtnerin to have x-position -170 +-5");
  t.assert.withinRange(t.getSprite("Gärtnerin").y, 55, 5, "Expected Sprite Gärtnerin to have y-position 55 +-5");
  t.dragSprite('Gärtnerin', 179.34568197175804, -6.940173041822014, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Gärtnerin").x, 179.34568197175804, 5, "Expected Sprite Gärtnerin to have x-position 179.34568197175804 +-5");
  t.assert.withinRange(t.getSprite("Gärtnerin").y, -6.940173041822014, 5, "Expected Sprite Gärtnerin to have y-position -6.940173041822014 +-5");
  t.dragSprite('Gärtnerin', 228.6158410952463, -68.31581009828747, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Gärtnerin").x, 228.6158410952463, 5, "Expected Sprite Gärtnerin to have x-position 228.6158410952463 +-5");
  t.assert.withinRange(t.getSprite("Gärtnerin").y, -68.31581009828747, 5, "Expected Sprite Gärtnerin to have y-position -68.31581009828747 +-5");
  t.keyPress('right arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Gärtnerin").x, 238.6158410952463, 5, "Expected Sprite Gärtnerin to have x-position 238.6158410952463 +-5");
  t.assert.withinRange(t.getSprite("Gärtnerin").y, -68.31581009828747, 5, "Expected Sprite Gärtnerin to have y-position -68.31581009828747 +-5");
  t.dragSprite('Blume', 240, -89.86873228597275, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Blume").x, 41, 5, "Expected Sprite Blume to have x-position 41 +-5");
  t.assert.withinRange(t.getSprite("Blume").y, -158, 5, "Expected Sprite Blume to have y-position -158 +-5");
  t.keyPress('up arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Gärtnerin").x, 238.6158410952463, 5, "Expected Sprite Gärtnerin to have x-position 238.6158410952463 +-5");
  t.assert.withinRange(t.getSprite("Gärtnerin").y, -63.31581009828747, 5, "Expected Sprite Gärtnerin to have y-position -63.31581009828747 +-5");
  t.keyPress('left arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Blume").direction, 90, 1, "Expected Sprite Blume to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Gärtnerin").x, 218.6158410952463, 5, "Expected Sprite Gärtnerin to have x-position 218.6158410952463 +-5");
  t.assert.withinRange(t.getSprite("Gärtnerin").y, -63.31581009828747, 5, "Expected Sprite Gärtnerin to have y-position -63.31581009828747 +-5");
  t.dragSprite('Gärtnerin', 239, -11, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.equal(t.getSprite("Gärtnerin").effects.color, 25, "Expected effect color of Sprite Gärtnerin to be 25");
  t.assert.withinRange(t.getSprite("Gärtnerin").x, 239, 5, "Expected Sprite Gärtnerin to have x-position 239 +-5");
  t.assert.withinRange(t.getSprite("Gärtnerin").y, -11, 5, "Expected Sprite Gärtnerin to have y-position -11 +-5");
  t.assert.equal(t.getSprite("Gärtnerin").sayText, "Autsch!", "Expected Sprite Gärtnerin to say Autsch!");
  t.assert.equal(t.getSprite("Blume").sayText, "Ohje!", "Expected Sprite Blume to say Ohje!");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687939148425',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1687939148425',
      type: 'standard',
  }
]
