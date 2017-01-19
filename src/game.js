var gameConstants = {
    NUM_GYROS_ROD1: 6,
    NUM_GYROS_ROD2: 12,
    NUM_GYROS_ROD3: 24,
    NUM_RAIN_COINS: 30,
    NUM_TOTAL_ITEMS: 5,
    DELTA_MOVE: 40,
    ROD1_X: -310,
    ROD2_X: -105,
    ROD3_X: 102,
    ROD_UP_Y: -325,
    ROD_MIDDLE_Y: -125,
    ROD_DOWN_Y: 75,
    BOMBILLA_X1: -395,
    BOMBILLA_Y: -750,
    BOMBILLA_DELTA_X: 132,
    TIME_BOMBILLA: 12,
    TIME_STOPPING: 200,
    
    CAMERA_Y_1: 750,
    CAMERA_Y_2: 270,
    SCALE_2: 0.35,
    CAMERA_Y_FINAL: 260,
    SCALE_FINAL: 0.8
};

var gameplay = {
    spriteRod1: [3],
    spriteRod2: [3],
    spriteRod3: [3],
    spriteBombilla: [7],
    spriteCoins:[30],
    spriteRotulo: "",
    spritreRedBall: [3],
    spriteWhite: "",
    spriteTutorial: "",
    spriteBackground: "",
    spriteMachine: "",
    spriteMaquinaSonrisas: "",
    arrayItemShowRod1: [3],
    arrayItemShowRod2: [3],
    arrayItemShowRod3: [3],
    stateGame: 0,
    STATE_INTRO: 0,
    STATE_GAME: 1,
    stateRod1: 0,
    stateRod2: 0,
    stateRod3: 0,
    STATE_ROD_INIT: 0,
    STATE_ROD_STOP: 1,
    STATE_ROD_MOVING: 2,
    STATE_ROD_STOPPING: 3,
    boolChangeState: false,
    DT: 0,
    eventKey1: "",
    eventKey2: "",
    soundBombillas: "",
    soundPlay: "",
    soundStop: "",
    soundPush: "",
    soundCoins: "",
    soundRainCoins: "",
    soundMachine: "",
    soundFinishTutorial: "",
    boolWin: false,
    boolFromTutorial: false,
    tweenRedBall: [2],
    create: function() {
        console.log("Init Game");

        if (!game.CINEMASCOPE)
        {
            game.camera.x = 185;
        }
        
        //DT.
        game.time.advancedTiming = true;
        
        game.stage.backgroundColor = '#A7DCE0';

        //Background.
        gameplay.spriteBackground = game.add.image(game.WIDTH2, game.height / 2, 'background');
        gameplay.spriteBackground.anchor.set(0.5);

        //Rodillos.
        gameplay.spriteRod1[0] = game.add.sprite(gameConstants.BOMBILLA_X1 , gameConstants.BOMBILLA_Y,'items');
        gameplay.spriteRod1[1] = game.add.sprite(gameConstants.BOMBILLA_X1 , gameConstants.BOMBILLA_Y,'items');
        gameplay.spriteRod1[2] = game.add.sprite(gameConstants.BOMBILLA_X1 , gameConstants.BOMBILLA_Y,'items');
        gameplay.spriteRod2[0] = game.add.sprite(gameConstants.BOMBILLA_X1 , gameConstants.BOMBILLA_Y,'items');
        gameplay.spriteRod2[1] = game.add.sprite(gameConstants.BOMBILLA_X1 , gameConstants.BOMBILLA_Y,'items');
        gameplay.spriteRod2[2] = game.add.sprite(gameConstants.BOMBILLA_X1 , gameConstants.BOMBILLA_Y,'items');
        gameplay.spriteRod3[0] = game.add.sprite(gameConstants.BOMBILLA_X1 , gameConstants.BOMBILLA_Y,'items');
        gameplay.spriteRod3[1] = game.add.sprite(gameConstants.BOMBILLA_X1 , gameConstants.BOMBILLA_Y,'items');
        gameplay.spriteRod3[2] = game.add.sprite(gameConstants.BOMBILLA_X1 , gameConstants.BOMBILLA_Y,'items');
        gameplay.resetRodillos();
        
        //Bombillas.
        gameplay.spriteBombilla[0] = game.add.sprite(gameConstants.BOMBILLA_X1 , gameConstants.BOMBILLA_Y,'bombilla_red');
        gameplay.spriteBombilla[1] = game.add.sprite(gameConstants.BOMBILLA_X1 + gameConstants.BOMBILLA_DELTA_X, gameConstants.BOMBILLA_Y,'bombilla_blue');
        gameplay.spriteBombilla[2] = game.add.sprite(gameConstants.BOMBILLA_X1 + (gameConstants.BOMBILLA_DELTA_X * 2), gameConstants.BOMBILLA_Y,'bombilla_red');
        gameplay.spriteBombilla[3] = game.add.sprite(gameConstants.BOMBILLA_X1 + (gameConstants.BOMBILLA_DELTA_X * 3), gameConstants.BOMBILLA_Y,'bombilla_blue');
        gameplay.spriteBombilla[4] = game.add.sprite(gameConstants.BOMBILLA_X1 + (gameConstants.BOMBILLA_DELTA_X * 4), gameConstants.BOMBILLA_Y,'bombilla_red');
        gameplay.spriteBombilla[5] = game.add.sprite(gameConstants.BOMBILLA_X1 + (gameConstants.BOMBILLA_DELTA_X * 5), gameConstants.BOMBILLA_Y,'bombilla_blue2');
        gameplay.spriteBombilla[0].animations.add("run", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], gameConstants.TIME_BOMBILLA, true);
        gameplay.spriteBombilla[1].animations.add("run", [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], gameConstants.TIME_BOMBILLA, true);
        gameplay.spriteBombilla[2].animations.add("run", [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], gameConstants.TIME_BOMBILLA, true);
        gameplay.spriteBombilla[3].animations.add("run", [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], gameConstants.TIME_BOMBILLA, true);
        gameplay.spriteBombilla[4].animations.add("run", [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], gameConstants.TIME_BOMBILLA, true);
        gameplay.spriteBombilla[5].animations.add("run", [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], gameConstants.TIME_BOMBILLA, true);
        //gameplay.groupBombillas.callAll("animations.play", "animations", "run");

        //White background for rodillos.
        gameplay.spriteWhite =  game.add.image(-310, -228, 'white');
        
        //Red ball tutorial.
        for (var i = 0; i < 3; i++)
        {
            gameplay.spritreRedBall[i] = game.add.image(0, 0, 'redball');
            gameplay.spritreRedBall[i].anchor.set(0.5);
            gameplay.spritreRedBall[i].x = 446.5;
            gameplay.spritreRedBall[i].y = -197.5;
            gameplay.spritreRedBall[i].alpha = 1;
            gameplay.spritreRedBall[i].width = 0;
            gameplay.spritreRedBall[i].height = 0;
        }
        gameplay.tweenRedBall[0] = game.add.tween(gameplay.spritreRedBall[0]).to( {alpha: 0, width: 139, height: 139}, 1000, "Linear", true);
        gameplay.tweenRedBall[0].repeat(-1, 0);
        gameplay.tweenRedBall[1] = game.add.tween(gameplay.spritreRedBall[1]).to( {alpha: 0, width: 139, height: 139}, 1000, "Linear", true, 300);
        gameplay.tweenRedBall[1].repeat(-1, 0);
        gameplay.spritreRedBall[0].visible = false;
        gameplay.spritreRedBall[1].visible = false;
        //Event to play.
        gameplay.spritreRedBall[2].alpha = 0;
        gameplay.spritreRedBall[2].width = 139;
        gameplay.spritreRedBall[2].height = 139;
        gameplay.spritreRedBall[2].inputEnabled = true;
        gameplay.spritreRedBall[2].input.useHandCursor = true;
        gameplay.spritreRedBall[2].events.onInputDown.add(gameplay.play, this);

        //Machine.
        gameplay.spriteMachine = game.add.image(0, 0, 'machine');
        gameplay.spriteMachine.anchor.set(0.5);
        
        //Rotulo.
        gameplay.spriteRotulo = game.add.image(0, -465, 'rotulo');
        gameplay.spriteRotulo.anchor.set(0.5);
        gameplay.spriteRotulo.alpha = 0;
        
        //Tutorial.
        gameplay.spriteTutorial = game.add.image(0, 0, 'tutorial');
        gameplay.spriteTutorial.anchor.set(0.5);
        gameplay.spriteTutorial.visible = false;

        //Sounds.
        gameplay.soundBombillas = game.add.audio('bombillas');
        gameplay.soundPlay = game.add.audio('play');
        gameplay.soundStop = game.add.audio('stop');
        gameplay.soundPush = game.add.audio('push');
        gameplay.soundCoins = game.add.audio('coins');
        gameplay.soundRainCoins = game.add.audio('rain_coins');
        gameplay.soundFinishTutorial = game.add.audio('finish_tutorial');
        gameplay.soundMachine = game.add.audio('machine');
        
        //////////////////////////
        //Assambling the machine//
        //////////////////////////
        gameplay.spriteMaquinaSonrisas = game.add.sprite(game.WIDTH2, game.height / 2, 'father');
        gameplay.spriteMaquinaSonrisas.anchor.set(0.5);
        
        //Rain of coins.
        for (var i = 0; i < gameConstants.NUM_RAIN_COINS; i++)
        {
            gameplay.spriteCoins[i] = game.add.sprite(0, 0, 'coin');
            gameplay.spriteCoins[i].anchor.set(0.5);
        }
        gameplay.makeNewRain();

        for (var i = 0; i < 6; i++)
        {
            gameplay.spriteMaquinaSonrisas.addChild(gameplay.spriteBombilla[i]);
            gameplay.spriteBombilla[i].animations.play("run");
        }
        gameplay.spriteMaquinaSonrisas.addChild(gameplay.spritreRedBall[0]);
        gameplay.spriteMaquinaSonrisas.addChild(gameplay.spritreRedBall[1]);
        
        gameplay.spriteMaquinaSonrisas.addChild(gameplay.spriteWhite);
        
        for (var i = 0; i < 3; i++)
        {
            gameplay.spriteMaquinaSonrisas.addChild(gameplay.spriteRod1[i]);
            gameplay.spriteMaquinaSonrisas.addChild(gameplay.spriteRod2[i]);
            gameplay.spriteMaquinaSonrisas.addChild(gameplay.spriteRod3[i]);
        }

        gameplay.spriteMaquinaSonrisas.addChild(gameplay.spriteMachine);
        
        gameplay.spriteMaquinaSonrisas.addChild(gameplay.spriteRotulo);
        
        gameplay.spriteMaquinaSonrisas.addChild(gameplay.spriteTutorial);
        
        gameplay.spriteMaquinaSonrisas.addChild(gameplay.spritreRedBall[2]);
        
        //Events.
        gameplay.eventKey1 = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        gameplay.eventKey1.onDown.add(gameplay.stopRodillos, this);
        //Hack tutorial.
        gameplay.eventKey2 = game.input.keyboard.addKey(Phaser.Keyboard.Z);
        gameplay.eventKey2.onDown.add(gameplay.hackTutorial, this);

        gameplay.initGame();
    },
    initGame: function() {
        gameplay.boolChangeState = true;
        
        gameplay.spriteRotulo.alpha = 0;
        
        gameplay.spriteMaquinaSonrisas.y = gameConstants.CAMERA_Y_1;
        gameplay.spriteMaquinaSonrisas.scale.set(1);

        gameplay.stateRod1 = gameplay.STATE_ROD_INIT;
        gameplay.stateRod2 = gameplay.STATE_ROD_INIT;
        gameplay.stateRod3 = gameplay.STATE_ROD_INIT;
        
        //Test saving tutorial.
        if(typeof(Storage) !== "undefined")
        {
            if (localStorage.getItem("tutMS") === "true")
            {
                gameplay.isTutorialShowd = true;
                console.log("You dont must see the tutorial.");
            }
            else
            {
                gameplay.isTutorialShowd = false;
                console.log("You must see the tutorial.");
            }
        }
        else
        {
            console.log("Your browser is too old!");
        }
        
        if (!gameplay.isTutorialShowd)
        {
            gameplay.stateGame = gameplay.STATE_INTRO;
            gameplay.spriteMaquinaSonrisas.y = gameConstants.CAMERA_Y_1;
            gameplay.spriteMaquinaSonrisas.scale.set(1);
        }
        else
        {
            gameplay.stateGame = gameplay.STATE_GAME;
            gameplay.spriteMaquinaSonrisas.y = gameConstants.CAMERA_Y_FINAL;
            gameplay.spriteMaquinaSonrisas.scale.set(gameConstants.SCALE_FINAL);
        }
        
        gameplay.initRodillos();

        popup.popUpInit();
    },
    render: function() {
        if (this.game.DEBUG)
        {
            //game.debug.body(gameplay.spriteBoy);
            //game.debug.body(gameplay.spriteWaterGroup.children[0]);
            //game.debug.text("FPS: " + game.time.fps,  2, 14, "#00ff00");
            game.debug.text("DT: " + game.time.elapsed,  2, 34, "#ff0000");
        }
        //DT.
        if (game.time.elapsed > 25)
        {
            if (gameplay.checkTime)
            {
                gameplay.DT = 60 / game.time.fps;
            }
            else
            {
                gameplay.DT = 1;
            }
            if (gameplay.DT > 2)
            {
                gameplay.DT = 2;
            }
        }
        else
        {
            gameplay.DT = 1;
        }
    },
    update: function() {
        switch (gameplay.stateGame)
        {
            case gameplay.STATE_INTRO:
                if (gameplay.boolChangeState)
                {
                    gameplay.boolChangeState = false;
                    gameplay.soundBombillas.play();
                    gameplay.soundMachine.play();
                    
                    //Reveal rotulo.
                    game.time.events.add(2000, function() {
                        var tween = game.add.tween(gameplay.spriteRotulo);
                        tween.to({alpha: 1}, 500, "Linear");
                        tween.start();
                    });
                    //Zoom out.
                    game.time.events.add(6000, function() {
                        gameplay.soundRainCoins.play();
                    });
                    game.time.events.add(5000, function() {
                        
                        var tween = game.add.tween(gameplay.spriteMaquinaSonrisas);
                        tween.to({y: gameConstants.CAMERA_Y_2}, 1000, "Quart.easeOut");
                        tween.start();
                        var tween2 = game.add.tween(gameplay.spriteMaquinaSonrisas.scale);
                        tween2.to({x: gameConstants.SCALE_2, y: gameConstants.SCALE_2}, 1000, "Quart.easeOut");
                        tween2.start();
                    });
                    //Zoom in.
                    game.time.events.add(9000, function() {
                        gameplay.soundFinishTutorial.play();
                        var tween = game.add.tween(gameplay.spriteMaquinaSonrisas);
                        tween.to({y: gameConstants.CAMERA_Y_FINAL}, 1000, "Quart.easeOut");
                        tween.start();
                        var tween2 = game.add.tween(gameplay.spriteMaquinaSonrisas.scale);
                        tween2.to({x: gameConstants.SCALE_FINAL, y: gameConstants.SCALE_FINAL}, 1000, "Quart.easeOut");
                        tween2.start();
                    });
                    //Rain of coins.
                    game.time.events.add(6000, function() {
                        for (var i = 0; i < gameConstants.NUM_RAIN_COINS; i++)
                        {
                            gameplay.spriteCoins[i].tweeni.start();
                        }
                    });
                    //Tutorial.
                    game.time.events.add(10000, function() {
                        gameplay.spriteTutorial.visible = true;
                        gameplay.spriteTutorial.alpha = 0;
                        gameplay.spriteTutorial.height = 0;
                        var tween = game.add.tween(gameplay.spriteTutorial);
                        tween.to({alpha: 1, height: 373}, 700, Phaser.Easing.Bounce.Out);
                        tween.start();
                    });
                    game.time.events.add(10500, function() {
                        gameplay.spritreRedBall[0].visible = true;
                        gameplay.spritreRedBall[1].visible = true;
                    });
                }
                break;
            case gameplay.STATE_GAME:
                for (var i = 0; i < 3; i++)
                {
                    switch (i)
                    {
                        case 0:
                            gameplay.logicRodillo(gameplay.stateRod1, gameplay.spriteRod1, 0);
                            break;
                        case 1:
                            gameplay.logicRodillo(gameplay.stateRod2, gameplay.spriteRod2 , 1);
                            break;
                        case 2:
                            gameplay.logicRodillo(gameplay.stateRod3, gameplay.spriteRod3 , 2);
                            break;
                    }
                }
                break;
        }

        //Popups.
        //popup.update();
    },
    play: function() {
        if (gameplay.stateRod1 === gameplay.STATE_ROD_STOP
                && gameplay.stateRod2 === gameplay.STATE_ROD_STOP
                && gameplay.stateRod3 === gameplay.STATE_ROD_STOP)
        {
            gameplay.soundPush.play();
            gameplay.soundPlay.play();
            gameplay.stateRod1 = gameplay.STATE_ROD_MOVING;
            gameplay.stateRod2 = gameplay.STATE_ROD_MOVING;
            gameplay.stateRod3 = gameplay.STATE_ROD_MOVING;
            gameplay.showRedBalls(false);
            
            //HACK.
            game.time.events.add(1000, function() {
                gameplay.stopRodillos();
            });
            
        }
        if (gameplay.stateGame === gameplay.STATE_INTRO)
        {
            console.log("EXIT TUTORIAL");
            localStorage.setItem("tutMS", "true");
            for (var i = 0; i < gameplay.spriteBombilla.length; i++)
            {
                gameplay.spriteBombilla[i].visible = false;
            }
            game.add.tween(gameplay.spriteTutorial).to({alpha: 0, height: 0}, 700, "Quart.easeOut", true);
            game.time.events.add(700, function() {
                gameplay.spriteTutorial.visible = false;
            });
            
            gameplay.stateGame = gameplay.STATE_GAME;
            gameplay.spriteMaquinaSonrisas.y = gameConstants.CAMERA_Y_FINAL;
            gameplay.spriteMaquinaSonrisas.scale.set(gameConstants.SCALE_FINAL);
            
            game.time.events.add(100, function() {
                gameplay.play();
            });
        }
    },
    showRedBalls: function(boolShow) {
        if (boolShow && !gameplay.spritreRedBall[0].visible)
        {
            gameplay.tweenRedBall[0].stop();
            gameplay.spritreRedBall[0].width = 0;
            gameplay.spritreRedBall[0].height = 0;
            gameplay.spritreRedBall[0].alpha = 1;
            gameplay.tweenRedBall[0] = game.add.tween(gameplay.spritreRedBall[0]).to( {alpha: 0, width: 139, height: 139}, 1000, "Linear", true);
            gameplay.tweenRedBall[0].repeat(-1, 0);
            
            gameplay.tweenRedBall[1].stop();
            gameplay.spritreRedBall[1].width = 0;
            gameplay.spritreRedBall[1].height = 0;
            gameplay.spritreRedBall[1].alpha = 1;
            gameplay.tweenRedBall[1] = game.add.tween(gameplay.spritreRedBall[1]).to( {alpha: 0, width: 139, height: 139}, 1000, "Linear", true, 300);
            gameplay.tweenRedBall[1].repeat(-1, 0);
        }
        if (boolShow)
        {
            gameplay.spritreRedBall[2].visible = true;
        }
        else
        {
            gameplay.spritreRedBall[2].visible = false;
        }
        gameplay.spritreRedBall[0].visible = boolShow;
        gameplay.spritreRedBall[1].visible = boolShow;
    },
    stopRodillos: function() {
        console.log("STOP");
        if (gameplay.stateRod1 === gameplay.STATE_ROD_MOVING)
        {
            gameplay.stateRod1 = gameplay.STATE_ROD_STOPPING;
            game.time.events.add(2000, function() {
                gameplay.stateRod2 = gameplay.STATE_ROD_STOPPING;
            });
            game.time.events.add(4000, function() {
                gameplay.stateRod3 = gameplay.STATE_ROD_STOPPING;
            });
        }
    },
    logicRodillo: function(stateRodillo, spriteRodillo, numRodillo) {
        switch (stateRodillo)
        {
            case gameplay.STATE_ROD_INIT:
                gameplay.resetRodillos();
                stateRodillo = gameplay.STATE_ROD_STOP;
                break;
            case gameplay.STATE_ROD_STOP:
                if (numRodillo === 2)
                {
                    gameplay.showRedBalls(true);
                }
                break;
            case gameplay.STATE_ROD_MOVING:
                for (var i = 0; i < 3; i++)
                {
                    spriteRodillo[i].isStop = false;
                    spriteRodillo[i].y += gameConstants.DELTA_MOVE * gameplay.DT;
                    if (spriteRodillo[i].y >= gameConstants.ROD_DOWN_Y + 100)
                    {
                        spriteRodillo[i].y = gameConstants.ROD_UP_Y - 100;
                        spriteRodillo[i].frame = game.rnd.integerInRange(0, gameConstants.NUM_TOTAL_ITEMS - 1);
                    }
                }
                break;
            case gameplay.STATE_ROD_STOPPING:
                for (var i = 0; i < 3; i++)
                {
                    spriteRodillo[i].y += gameConstants.DELTA_MOVE * gameplay.DT;
                    if (spriteRodillo[i].y >= gameConstants.ROD_DOWN_Y + 100)
                    {
                        spriteRodillo[i].y = gameConstants.ROD_UP_Y - 100;
                        spriteRodillo[i].frame = game.rnd.integerInRange(0, gameConstants.NUM_TOTAL_ITEMS - 1);
                        //Check the result of Win/Lose.
                        if (i === 1)
                        {
                            if (!spriteRodillo[1].isStop)
                            {
                                if (gameplay.boolWin)
                                {
                                    spriteRodillo[1].frame = 0;
                                }
                                else
                                {
                                    //Increment the emotion with this hack. Mua ha ha ha.
                                    if (numRodillo === 0)
                                    {
                                        var muaha = game.rnd.integerInRange(0, 3);
                                        if (muaha === 0)
                                        {
                                            spriteRodillo[1].frame = 0;
                                            console.log("Mua ha ha ha");
                                        }
                                    }
                                    /*else if (numRodillo === 1)
                                    {
                                        var muaha = game.rnd.integerInRange(0, 3);
                                        if (muaha === 0)
                                        {
                                            spriteRodillo[1].frame = 0;
                                            console.log("Mua ha ha ha 2");
                                        }
                                    }*/
                                    else
                                    {
                                        spriteRodillo[1].frame = game.rnd.integerInRange(0, gameConstants.NUM_TOTAL_ITEMS - 1);
                                    }
                                    //Avoid three coins in a random and three same items.
                                    if (numRodillo === 2)
                                    {
                                        if (spriteRodillo[1].frame === 0 && numRodillo === 2)
                                        {
                                            spriteRodillo[1].frame = game.rnd.integerInRange(1, gameConstants.NUM_TOTAL_ITEMS - 1);
                                            console.log("Avoid 1");
                                        }
                                        if (gameplay.spriteRod1[1].frame === gameplay.spriteRod2[1].frame
                                                && gameplay.spriteRod1[1].frame === gameplay.spriteRod3[1].frame)
                                        {
                                            gameplay.spriteRod3[1].frame++;
                                            if (gameplay.spriteRod3[1].frame >= gameConstants.NUM_TOTAL_ITEMS)
                                            {
                                                gameplay.spriteRod3[1].frame = 0;
                                                console.log("Avoid 2");
                                            }
                                        }
                                    }
                                }
                                spriteRodillo[1].isStop = true;
                                spriteRodillo[1].y = gameConstants.ROD_UP_Y - 100;
                            }
                        }
                    }
                    if (spriteRodillo[1].isStop)
                    {
                        if (spriteRodillo[1].y > gameConstants.ROD_MIDDLE_Y)
                        {
                            switch (numRodillo)
                            {
                                case 0:
                                    gameplay.stateRod1 = gameplay.STATE_ROD_STOP;
                                    break;
                                case 1:
                                    gameplay.stateRod2 = gameplay.STATE_ROD_STOP;
                                    break;
                                case 2:
                                    gameplay.stateRod3 = gameplay.STATE_ROD_STOP;
                                    break;
                            }
                            gameplay.soundStop.play();
                            gameplay.refreshRodillos(numRodillo, false);
                        }
                    }
                }
                break;
        }  
    },
    refreshRodillos: function(numRodillo, fastMode) {
        if(typeof(numRodillo) === "undefined")
        {
            
        }
        else
        {
            switch (numRodillo)
            {
                case 0:
                    if (fastMode)
                    {
                        gameplay.spriteRod1[0].y = gameConstants.ROD_UP_Y;
                        gameplay.spriteRod1[1].y = gameConstants.ROD_MIDDLE_Y;
                        gameplay.spriteRod1[2].y = gameConstants.ROD_DOWN_Y;
                    }
                    else
                    {
                        game.add.tween(gameplay.spriteRod1[0]).to( {y: gameConstants.ROD_UP_Y}, gameConstants.TIME_STOPPING, "Quart.easeOut", true);
                        game.add.tween(gameplay.spriteRod1[1]).to( {y: gameConstants.ROD_MIDDLE_Y}, gameConstants.TIME_STOPPING, "Quart.easeOut", true);
                        game.add.tween(gameplay.spriteRod1[2]).to( {y: gameConstants.ROD_DOWN_Y}, gameConstants.TIME_STOPPING, "Quart.easeOut", true);
                    }
                    break;
                case 1:
                    if (fastMode)
                    {
                        gameplay.spriteRod2[0].y = gameConstants.ROD_UP_Y;
                        gameplay.spriteRod2[1].y = gameConstants.ROD_MIDDLE_Y;
                        gameplay.spriteRod2[2].y = gameConstants.ROD_DOWN_Y;
                    }
                    else
                    {
                        game.add.tween(gameplay.spriteRod2[0]).to( {y: gameConstants.ROD_UP_Y}, gameConstants.TIME_STOPPING, "Quart.easeOut", true);
                        game.add.tween(gameplay.spriteRod2[1]).to( {y: gameConstants.ROD_MIDDLE_Y}, gameConstants.TIME_STOPPING, "Quart.easeOut", true);
                        game.add.tween(gameplay.spriteRod2[2]).to( {y: gameConstants.ROD_DOWN_Y}, gameConstants.TIME_STOPPING, "Quart.easeOut", true);
                    }
                    break;
                case 2:
                    if (fastMode)
                    {
                        gameplay.spriteRod3[0].y = gameConstants.ROD_UP_Y;
                        gameplay.spriteRod3[1].y = gameConstants.ROD_MIDDLE_Y;
                        gameplay.spriteRod3[2].y = gameConstants.ROD_DOWN_Y;
                    }
                    else
                    {
                        game.add.tween(gameplay.spriteRod3[0]).to( {y: gameConstants.ROD_UP_Y}, gameConstants.TIME_STOPPING, "Quart.easeOut", true);
                        game.add.tween(gameplay.spriteRod3[1]).to( {y: gameConstants.ROD_MIDDLE_Y}, gameConstants.TIME_STOPPING, "Quart.easeOut", true);
                        game.add.tween(gameplay.spriteRod3[2]).to( {y: gameConstants.ROD_DOWN_Y}, gameConstants.TIME_STOPPING, "Quart.easeOut", true);
                    }
                    break;
            }
        }
    },
    makeNewRain: function() {
        for (var i = 0; i < gameConstants.NUM_RAIN_COINS; i++)
        {
            var newScale = (Math.random() * (1 - 0.5) + 0.5).toFixed(1);
            gameplay.spriteCoins[i].scale.set(newScale);
            if (i < gameConstants.NUM_RAIN_COINS / 2)
            {
                gameplay.spriteCoins[i].x = game.rnd.integerInRange(0, (game.width / 2) - 200);
            }
            else
            {
                gameplay.spriteCoins[i].x = game.rnd.integerInRange((game.width / 2) + 200, game.width);
            }
            gameplay.spriteCoins[i].y = -(gameplay.spriteCoins[i].height / 2) - game.rnd.integerInRange(0, 1500);
            //Animation.
            gameplay.spriteCoins[i].tweeni = game.add.tween(gameplay.spriteCoins[i]);
            gameplay.spriteCoins[i].tweeni.to({y: game.height + (gameplay.spriteCoins[i].height / 2)}, game.rnd.integerInRange(1200, 2500), Phaser.Easing.Linear.None);
        }
    },
    setCameraY: function(deltaY, scale)
    {
        game.world.scale.set(scale);
        game.camera.x = (game.width / 2) * (game.world.scale.x - 1);
        game.camera.y = ((game.height / 2) * (game.world.scale.y - 1) - deltaY);
        
        //Background.
        //Hay que obtener el ancho en píxeles del mundo que se ve.
        gameplay.spriteBackground.width = 2500;
        gameplay.spriteBackground.height = 500;
        gameplay.spriteBackground.y -= 250;
    },
    initRodillos: function() {
        gameplay.spriteRod1[0].frame = game.rnd.integerInRange(1, gameConstants.NUM_TOTAL_ITEMS - 1);
        gameplay.spriteRod1[2].frame = game.rnd.integerInRange(1, gameConstants.NUM_TOTAL_ITEMS - 1);
        gameplay.spriteRod2[0].frame = game.rnd.integerInRange(1, gameConstants.NUM_TOTAL_ITEMS - 1);
        gameplay.spriteRod2[2].frame = game.rnd.integerInRange(1, gameConstants.NUM_TOTAL_ITEMS - 1);
        gameplay.spriteRod3[0].frame = game.rnd.integerInRange(1, gameConstants.NUM_TOTAL_ITEMS - 1);
        gameplay.spriteRod3[2].frame = game.rnd.integerInRange(1, gameConstants.NUM_TOTAL_ITEMS - 1);
    },
    resetRodillos: function() {
        gameplay.spriteRod1[0].x = gameConstants.ROD1_X;
        gameplay.spriteRod1[0].y = gameConstants.ROD_UP_Y;
        gameplay.spriteRod1[1].x = gameConstants.ROD1_X;
        gameplay.spriteRod1[1].y = gameConstants.ROD_MIDDLE_Y;
        gameplay.spriteRod1[2].x = gameConstants.ROD1_X;
        gameplay.spriteRod1[2].y = gameConstants.ROD_DOWN_Y;
        
        gameplay.spriteRod2[0].x = gameConstants.ROD2_X;
        gameplay.spriteRod2[0].y = gameConstants.ROD_UP_Y;
        gameplay.spriteRod2[1].x = gameConstants.ROD2_X;
        gameplay.spriteRod2[1].y = gameConstants.ROD_MIDDLE_Y;
        gameplay.spriteRod2[2].x = gameConstants.ROD2_X;
        gameplay.spriteRod2[2].y = gameConstants.ROD_DOWN_Y;
        
        gameplay.spriteRod3[0].x = gameConstants.ROD3_X;
        gameplay.spriteRod3[0].y = gameConstants.ROD_UP_Y;
        gameplay.spriteRod3[1].x = gameConstants.ROD3_X;
        gameplay.spriteRod3[1].y = gameConstants.ROD_MIDDLE_Y;
        gameplay.spriteRod3[2].x = gameConstants.ROD3_X;
        gameplay.spriteRod3[2].y = gameConstants.ROD_DOWN_Y;
        
        //Init rodillos.
        for (var i = 0; i < 3; i++)
        {
            gameplay.spriteRod1[i].isStop = true;
            gameplay.spriteRod1[i].numGyros = 0;
            gameplay.spriteRod2[i].isStop = true;
            gameplay.spriteRod2[i].numGyros = 0;
            gameplay.spriteRod3[i].isStop = true;
            gameplay.spriteRod3[i].numGyros = 0;
        }
        
        gameplay.stateRod1 = gameplay.STATE_ROD_STOP;
        gameplay.stateRod2 = gameplay.STATE_ROD_STOP;
        gameplay.stateRod3 = gameplay.STATE_ROD_STOP;
    },
    momentWin: function() {
        console.log("Moment win!"); 
        var currentLevel = 1;
        doRequest(
                //Succes.
                function(data){
                    //if (!game.APP)
                    //{
                        //refreshUserData();
                    //}
                    popup.spriteClock.visible = false;
                    console.log(data);
                    if (data.instantWinStatus === 'lose' || data.instantWinStatus === 'repeatedWinner')
                    {
                        console.log("LOSE!");
                        gameplay.winNoPrize();
                    }
                    else if (data.instantWinStatus === 'win')
                    {
                        console.log("WIN!");
                        
                        gameplay.myInstantWinMomentId = data.instantWinMomentId;
                        gameplay.myInstantWinDate = data.instantWinDate;
                        gameplay.myInstantWinType = data.instantWinType;
                        
                        /*console.log(gameplay.myInstantWinMomentId);
                        console.log(gameplay.myInstantWinDate);
                        console.log(gameplay.myInstantWinType);*/
                        
                        //gameplay.winPrize(); //<--- We must send the winner list before.
                        gameplay.WinnerList();
                    }
                    else
                    {
                        console.log("ERROR IL");
                        gameplay.popUpError();
                    }
                },
                //Error.
                function(data){
                    popup.spriteClock.visible = false;
                    console.log("Error sending data level");
                    console.log(data);
                    gameplay.popUpError();
                },
                //Data.
                {
                    'phase': currentLevel
                },
                //URL.
                '/actions/' + game.NAME_PROMO + '/process',
                //Complete.
                null,
                //Beforesend.
                function() {
                    popup.popUpInit();
                    popup.spriteClock.visible = true;
                }
                );
    },
    gameover: function() {
        gameplay.music_lose.play();
        popup.refreshPop();
        popup.popUpLose("");
        popup.pop_but_1.events.onInputDown.add(gameplay.exitGame, this);
        popup.pop_but_1.events.onInputDown.add(function(){document.getElementById('pop_lose_vamos').click();}, this);
        popup.pop_but_2.events.onInputDown.add(gameplay.morePromotions, this);
        popup.pop_but_2.events.onInputDown.add(function(){document.getElementById('pop_lose_maspromociones').click();}, this);
        //popup.pop_cancel.events.onInputDown.add(gameplay.exitGame, this);
    },
    winNoPrize: function() {
        gameplay.music_win.play();
        popup.refreshPop();
        popup.popUpWinNoPrize1level("");
        popup.pop_but_1.events.onInputDown.add(gameplay.exitGame, this);
        popup.pop_but_1.events.onInputDown.add(function(){document.getElementById('pop_win_nopremio_vamos').click();}, this);
        popup.pop_but_2.events.onInputDown.add(gameplay.morePromotions, this);
        popup.pop_but_2.events.onInputDown.add(function(){document.getElementById('pop_win_nopremio_maspromociones').click();}, this);
        //popup.pop_cancel.events.onInputDown.add(gameplay.exitGame, this);
    },
    winPrize: function() {
        gameplay.music_applause.play();
        popup.refreshPop();
        popup.popUpWinPrize(1, "");
        popup.pop_but_1.events.onInputDown.add(gameplay.exitGame, this);
        popup.pop_but_1.events.onInputDown.add(function(){document.getElementById('pop_win_premio_vamos').click();}, this);
        popup.pop_but_2.events.onInputDown.add(gameplay.morePromotions, this);
        popup.pop_but_2.events.onInputDown.add(function(){document.getElementById('pop_win_maspromociones').click();}, this);
        //popup.pop_cancel.events.onInputDown.add(gameplay.exitGame, this);
    },
    popUpError: function() {
        popup.refreshPop();
        popup.popUpErrorConection();
        popup.pop_but_1.events.onInputDown.add(function(){document.getElementById('pop_errorconection_contactar').click();}, this);
        popup.pop_but_1.events.onInputDown.add(menu.goContact, this);
        popup.pop_but_2.events.onInputDown.add(function(){document.getElementById('pop_errorconection_reintentar').click();}, this);
        popup.pop_but_2.events.onInputDown.add(gameplay.momentWin, this);
        //popup.pop_cancel.events.onInputDown.add(gameplay.momentWin, this);
    },
    exitGame: function() {
        game.time.events.add(150, function() {
            popup.refreshPop();
            game.state.start('Menu', true, false);
        });
    },
    WinnerList: function() {
        console.log("Share win information");
        doRequest(
            //Succes.
            function(data){
                popup.spriteClock.visible = false;
                console.log("OK sending acceptation of share win information.");
                gameplay.winPrize();
            },
            //Error.
            function(data){
                popup.spriteClock.visible = false;
                console.log("Error sending acceptation of share win information.");
                gameplay.winPrize();
            },
            //Data.
            {
                'instantWinMomentId': gameplay.myInstantWinMomentId,
                'instantWinDate': gameplay.myInstantWinDate,
                'instantWinType': gameplay.myInstantWinType
            },
            //URL.
            '/actions/' + game.NAME_PROMO + '/checkInstantWinWinnerAcceptation',
            //Complete.
            null,
            //Beforesend.
            function() {
                popup.popUpInit();
                popup.spriteClock.visible = true;
            }
        );
    },
    morePromotions: function() {
        if (game.LANGUAGE === "es")
        {
            window.parent.location.href = game.URL_PROMOTION_ES;
        }
        else
        {
            window.parent.location.href = game.URL_PROMOTION_CAT;
        }
    },
    hackTutorial: function() {
        localStorage.setItem("tutMS", "false");
        gameplay.isBeginningTutorial = false;
        console.log("You will see the tutorial again.");
    }
};
