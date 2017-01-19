var menu = {
    menuText: "",
    textResource: "",
    spriteBtCancel: "",
    isShowingMobile: false,
    spriteMobile: "",
    spriteBlackRect: "",
    spriteSound: "",
    spritePeine: "",
    spriteReglaPeine: "",
    spriteClock: "",
    spritePlay: "",
    spriteButPlay: "",
    tweenMobile1: "",
    tweenMobile2: "",
    tweenMobile3: "",
    soundMusic: "",
    inputPincode: "",
    inputValue: "",
    checkedConnection: false,
    tapScreenFullscreen: true, /*false*/
    textTienesPuntos1: "",
    textTienesPuntos2: "",
    textPoints: "",
    textSumarPuntos:"",
    textDondePuntos:"",
    textPeineHead:"",
    textPeineBody:"",
    textPopupNoPointsTitle: "",
    textPopupNoPointsMessage: "",
    textPopupNoPointsButton1: "",
    textPopupNoPointsButton2: "",
    textPopupNoPointsButton3: "",
    textTwitter: "",
    textFacebook1: "",
    textFacebook2: "",
    textFacebook3: "",
    textMail1: "",
    textMail2: "",
    share_fb: false,
    share_tw: false,
    urlContact: "",
    urlWherePincode: "",
    isLandscapeAtBeginning: false,
    isShowingPeine: false,
    isSoundPlay: false,
    pauseMenu: false,
    text_tienesPuntos: "",
    text_dondePincode: "",
    text_juega: "",
    text_introduce: "",
    text_boton_sumar: "",
    peine_sumarPuntos: "",
    realCanvasW: "",
    create: function() {
        game.stage.backgroundColor = game.COLOR_BASE;
        game.CURRENT_STATE = "menu";

        if (!game.CINEMASCOPE)
        {
            game.world.setBounds(0, 0, 1252, 498);
            game.scale.setGameSize(881, 498);
            game.camera.x = 185;
            game.FIX_X = 185;
            
            game.canvas.id = "supercanvas";
            var myCan = document.getElementById("supercanvas");
            menu.realCanvasW = parseInt(myCan.style.width, 10);
            
            //Event fullscreen.
            game.input.onDown.add(boot.goFullscreen, this);
        }
        else
        {
            game.FIX_X = 0;
            game.world.setBounds(-200, 0, 2000, 498);
            game.scale.setGameSize(1252, 498);
            game.camera.x = 0;
        }
        
        //document.body.style.backgroundColor = "#000000";
        this.checkedConnection = false;
        
        //Set DEBUG mode.
        if (this.game.DEBUG)
            this.game.time.advancedTiming = true;
        //Background.
        //this.game.add.image(0, 0, 'background_menu');
        var logo = this.game.add.sprite(game.WIDTH2, 150, 'logo');
        logo.anchor.setTo(0.5, 0.5);
        /*this.spriteButPlay = this.game.add.image(game.WIDTH2, 440, 'background_but');
        this.spriteButPlay.anchor.setTo(0.5);*/
        
        if (!this.game.device.desktop && !game.APP)
        {
            this.spriteBtCancel = this.game.add.image(996, 20, 'bt_cancel');
            this.spriteBtCancel.inputEnabled = true;
            this.spriteBtCancel.events.onInputDown.add(this.cancelGame, this);
        }
        //Music.
        /*this.soundMusic = this.game.add.audio('music_menu');
        if (this.game.device.desktop)
        {
            this.soundMusic.play();
        }*/
        //Texts.
        //this.textResource = this.game.cache.getJSON('texts');

        //Touch event. When you press the screen start the game.
        if (!game.device.desktop)
        {
            this.game.input.onDown.add(this.startGame, this);
        }
        else
        {
            this.game.input.onDown.add(menu.clickScreen, this);
        }
        //Full screen.
        //this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        if (this.game.device.desktop)
        {
            this.game.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
            this.game.scale.refresh();
        }
        else
        {
            if (game.FULLSCREEN)
            {
                boot.refreshIframe();
                $(window).resize(boot.refreshIframe);
            }
            else
            {
                this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            }
        }
        //Music mobile.
        if (!game.device.desktop)
        {
            if (game.device.iOS)
            {
                this.tapScreenFullscreen = true;//false;
            }
            if (window.parent.matchMedia("(orientation: landscape)").matches
                     /*&& this.spriteBlackRect.visible*/)
            {
                console.log("Play music after play");
                //this.soundMusic.stop();
                //this.soundMusic.play();
            }
            else
            {
                this.game.IS_SHOWED_ADVERT = false;
            }
                 
        }
        
        this.game.scale.refresh();
        if (!this.game.device.desktop)
        {
            if (!this.game.IS_SHOWED_ADVERT && !game.ADVERT_WAS_SHOWED)
            {
                //Avoid see again the advert when you lose.
                game.ADVERT_WAS_SHOWED = true;
                
                this.spriteBlackRect = this.game.add.sprite(0, 0, 'black_rect');
                this.spriteMobile = this.game.add.sprite((this.game.canvas.width / 2) + game.FIX_X, (this.game.canvas.height / 2) - 70, 'rotate_mobile');
                this.spriteMobile.anchor.setTo(0.5);
                this.spriteMobile.scale.setTo(1.4);
                this.spriteAdvert = this.game.add.sprite((this.game.canvas.width / 2) + game.FIX_X, (this.game.canvas.height / 2) + 120, 'advert');
                this.spriteAdvert.anchor.setTo(0.5);

                this.tweenMobile1 = this.game.add.tween(this.spriteMobile).to({angle: 90}, 1000, "Linear", false);
                this.tweenMobile2 = this.game.add.tween(this.spriteMobile).to({alpha: 0}, 1000, "Linear", false);
                this.tweenMobile3 = this.game.add.tween(this.spriteMobile).to({alpha: 1, angle: 0}, 1, "Linear", false);

                this.tweenMobile1.chain(this.tweenMobile2);
                this.tweenMobile2.chain(this.tweenMobile3);
                this.tweenMobile3.chain(this.tweenMobile1);

                this.tweenMobile1.start();

                this.isShowingMobile = true;

                this.spriteBlackRect.width = this.game.canvas.width + game.FIX_X;
                this.spriteBlackRect.height = this.game.canvas.height;

                //document.body.style.backgroundColor = '#007A7D';
                //if (window.innerWidth < window.innerHeight)
                if (!window.parent.matchMedia("(orientation: landscape)").matches)
                {
                    console.log("Bad orientation");
                    this.handleIncorrect();
                }
                else
                {
                    console.log("Good orientation");
                    this.isLandscapeAtBeginning = true;
                    this.handleCorrect();
                }
                this.game.IS_SHOWED_ADVERT = true;
                
                this.spriteBlackRect.visible = true;
                this.spriteMobile.visible = true;
                this.spriteAdvert.visible = true;
            }
            else
            {
                //New menu.
                menu.startGame();
            }
            //this.game.input.onDown.add(this.gofull, this);
        }
        if (game.LANGUAGE === "es")
        {
            this.urlContact = game.URL_CONTACT_ES;
            this.urlWherePincode = game.URL_WHEREISPINCODE_ES;
        }
        else
        {
            this.urlContact = game.URL_CONTACT_CAT;
            this.urlWherePincode = game.URL_WHEREISPINCODE_CAT;
        }
        
        //Peine.
        this.spritePeine = this.game.add.image(0, 0, 'peine_background');
        this.spritePeine.visible = false;
        /*this.spriteReglaPeine = this.game.add.image(0, 0, 'peine');
        this.spriteReglaPeine.visible = false;*/
        this.peine_sumarPuntos = this.game.add.image(0, 0, 'sumar_puntos');
        this.peine_sumarPuntos.visible = false;
        this.peine_sumarPuntos.inputEnabled = true;
        this.peine_sumarPuntos.events.onInputDown.add(menu.sendPin, this);
        
        //Sound button.
        /*this.spriteSound = this.game.add.sprite(20, 20, 'sound_icon');
        this.spriteSound.inputEnabled = true;
        this.spriteSound.events.onInputDown.add(game.state.getCurrentState().soundButton, this);
        this.spriteSound.visible = false;*/

        popup.popUpInit();
        //New menu.
        if (game.device.desktop)
        {
            menu.startGame();
        }
    },
    lang: function() {
        console.log("Cambiando a catalán");
        game.LANGUAGE = "cat";
    },
    update: function() {
        if (window.parent.matchMedia("(orientation: landscape)").matches)
        {
            this.handleCorrect();
        }
        else
        {
            this.handleIncorrect();
        }
        
        if (game.device.iOS)
        {
             if (window.parent.matchMedia("(orientation: landscape)").matches
                     && this.spriteBlackRect.visible) {
                // you're in LANDSCAPE mode
                this.isLandscapeAtBeginning = false;
                this.spriteBlackRect.visible = false;
                this.spriteMobile.visible = false;
                this.spriteAdvert.visible = false;
                this.tweenMobile1.stop();
                this.tweenMobile2.stop();
                this.tweenMobile3.stop();
             }
        }
        
        //Cursor mouse hand.
        if (!menu.isShowingPeine)
        {
            if (!menu.pauseMenu)
            {
                /*if (game.input.mousePointer.x > menu.spriteButPlay.x - (menu.spriteButPlay.width / 2)
                    && game.input.mousePointer.x < menu.spriteButPlay.x + (menu.spriteButPlay.width / 2)
                    && game.input.mousePointer.y > menu.spriteButPlay.y - (menu.spriteButPlay.height / 2)
                    && game.input.mousePointer.y < menu.spriteButPlay.y + (menu.spriteButPlay.height / 2))
                {
                     game.canvas.style.cursor = "pointer";
                }
                else
                {
                    game.canvas.style.cursor = "default";
                }*/
            }
            else
            {
                popup.update();
            }
        }
        else
        {
            if (menu.peine_sumarPuntos.visible)
            {
                if (game.input.mousePointer.x > 630
                    && game.input.mousePointer.x < 630 + 240
                    && game.input.mousePointer.y > 150
                    && game.input.mousePointer.y < 150 + 60
                    ||
                    game.input.mousePointer.x > 320
                    && game.input.mousePointer.x < 320 + 200
                    && game.input.mousePointer.y > 215
                    && game.input.mousePointer.y < 210 + 25)
                {
                     game.canvas.style.cursor = "pointer";
                }
                else
                {
                    game.canvas.style.cursor = "default";
                }
            }
            else
            {
                popup.update();
            }
        }
        
    },
    handleIncorrect: function() {
        
    },
    handleCorrect: function() {
        this.isShowingMobile = false;
        if (!this.game.device.desktop)
        {
            if (this.spriteBlackRect.visible || this.isLandscapeAtBeginning)
            {
                this.isLandscapeAtBeginning = false;
                this.spriteBlackRect.visible = false;
                this.spriteMobile.visible = false;
                this.spriteAdvert.visible = false;
                this.tweenMobile1.stop();
                this.tweenMobile2.stop();
                this.tweenMobile3.stop();
                //this.soundMusic.stop();
                //this.soundMusic.play();
                
                //New menu.
                menu.startGame();
            }
        }
        //this.spriteSound.visible = true;
    },
    render: function() {
        if (this.game.DEBUG)
        {
            this.game.debug.text(this.game.time.fps, 2, 14, "#00ff00");
            this.game.debug.text(this.checkedConnection, 2, 34, "#00ff00");
            this.game.debug.text(this.isShowingPeine, 2, 74, "#000000");
            this.game.debug.text(window.parent.orientation, 2, 94, "#000000");
        }
    },
    startGame: function() {
        
        /*if (!game.device.desktop)
        {
            game.scale.startFullScreen(false);
            game.scale.pageAlignHorizontally = true;
            game.scale.pageAlignVeritcally = true;
            game.canvas.id = "supercanvas";
            var myCan = document.getElementById("supercanvas");
            var heightGame = parseInt(myCan.style.height, 10);
            console.log("Sin px " + heightGame);
            var topY = (window.innerHeight / 2) - (heightGame / 2);
            console.log("Inner2 " + (window.innerHeight / 2));
            console.log("height2 " + (heightGame / 2));
            console.log("TopY " + topY);
            
            myCan.style.marginTop = topY + "px";
            console.log(myCan.style.marginTop);


            game.scale.refresh();
        }*/

        if (game.device.iOS)
        {
            if (!this.tapScreenFullscreen)
            {
                this.tapScreenFullscreen = true;
                //this.soundMusic.stop();
                //this.soundMusic.play();
                if (this.isShowingMobile)
                {
                    
                }
                else
                {
                    return;
                }
            }
        }
        if (!this.isShowingMobile) //<--- Rotating mobile.
        {
            /*if (this.game.input.y < 100
                    && this.game.input.x < this.game.canvas.width - 100
                    && this.game.input.x > 100
                    || this.game.input.y >= 100)*/
            {
                //Where points.
                //Change the ubicatin by New Menu.
                /*if (menu.isShowingPeine)
                {
                    if (game.input.mousePointer.x > 180
                    && game.input.mousePointer.x < 180 + 200
                    && game.input.mousePointer.y > 215
                    && game.input.mousePointer.y < 210 + 25)
                    {
                        if (game.LANGUAGE === "es")
                            {
                                window.parent.location.href = game.URL_WHEREISPINCODE_ES;
                            }
                            else
                            {
                                window.parent.location.href = game.URL_WHEREISPINCODE_CAT;
                            }
                    }
                }*/
                
                if (!game.MODE_LOCAL)
                {
                    if (this.game.device.desktop || (!this.game.device.desktop && this.tapScreenFullscreen))
                    {
                        if (!this.checkedConnection && !this.isShowingPeine)
                        {
                            if (!this.pauseMenu)
                            {
                                //this.soundMusic.stop();
                                this.checkedConnection = true;
                                console.log("Connecting...");
                                //Connecting to server.
                                var currentLevel = -1;
                                doRequest(
                                    //Succes.
                                    function(data){
                                        popup.spriteClock.visible = false;
                                        console.log(data);
                                        //Name user.
                                        game.NAME_USER = data.nombre;
                                        console.log("Welocome, " + game.NAME_USER);
                                        
                                        var pointsStream = data.data.pointsAvailable; //data.points;
                                        var pointsInt = 0;
                                        try {
                                            pointsInt = pointsStream.replace(".", "");
                                        } catch (err) {}
                                        
                                        //Check if user have enough points.
                                        if (/*data.instantWinStatus === "notPoints" ||*/ parseInt(pointsInt) < 5)
                                        {
                                            game.points = data.data.pointsAvailable;
                                            console.log("Points: " + game.points);
                                            game.state.getCurrentState().popupNoPoints();
                                            game.state.getCurrentState().checkedConnection = false;
                                        }
                                        //2017
                                        else if (data.status === 'ko' || !data.points)
                                        {
                                            popup.spriteClock.visible = false;
                                            game.state.getCurrentState().checkedConnection = false;
                                            console.log("Error getting information");
                                            game.state.getCurrentState().popUpError();
                                        }
                                        else
                                        {
                                            game.points = data.data.pointsAvailable;
                                            console.log("Points: " + data.data.pointsAvailable);
                                            document.getElementById('participar').click();
                                            game.state.start('Game');
                                        }
                                    },
                                    //Error.
                                    function(data){
                                        //console.log(data);
                                        popup.spriteClock.visible = false;
                                        game.state.getCurrentState().checkedConnection = false;
                                        console.log("Error sending level information");
                                        game.state.getCurrentState().popUpError();
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
                            }
                        }
                    }
                }
                else
                {                 
                    if (this.game.device.desktop || (!this.game.device.desktop && this.tapScreenFullscreen))
                    {
                        if (!this.checkedConnection && !this.isShowingPeine)
                        {
                            if (!this.pauseMenu)
                            {
                                //menu.soundMusic.stop();
                                game.state.start('Game');
                            }
                        }
                    }
                    /*console.log("Points: " + game.points);
                    game.state.getCurrentState().popupNoPoints();
                    game.state.getCurrentState().checkedConnection = false;*/
                }
            }
        }
        else
        {
            //this.soundMusic.stop();
            //this.soundMusic.play();
            this.isShowingMobile = false;
            this.spriteBlackRect.visible = false;
            this.spriteMobile.visible = false;
            this.spriteAdvert.visible = false;
            this.tweenMobile1.stop();
            this.tweenMobile2.stop();
            this.tweenMobile3.stop();
            
            //New menu.
            menu.startGame();
        }
    },
    popupNoPoints: function() {
        menu.pauseMenu = true;
        console.log("Landing popup no points...");
        popup.popUpNoPoints(menu.textPopupNoPointsTitle, menu.textPopupNoPointsMessage, menu.textPopupNoPointsButton1, menu.textPopupNoPointsButton2, menu.textPopupNoPointsButton3);
        popup.pop_but_1.events.onInputDown.add(function(){document.getElementById('pop_nopoints_sumarpuntos').click();}, this);
        popup.pop_but_1.events.onInputDown.add(menu.morePointsPeine, this);
        //popup.pop_cancel.events.onInputDown.add(function() {popup.refreshPop(); menu.startGame();}, this);
    },
    morePointsPeine: function() {
        if (!game.device.iOS)
        {
            var tTienes = "";
            var tPuntos = "";
            var tDonde = "";
            var tJuega = "";
            var tIntroduce = "";
            var tSumar = "";
            var tRedPointChar = 7;
            var fixX = 0;
            if (game.LANGUAGE === "es")
            {
                tTienes = "Tienes ";
                tPuntos = " puntos";
                tDonde = "¿Dónde encuentro el código?";
                tJuega = "Juega con tus puntos";
                tIntroduce = "Introduce los códigos de tus Danone para sumar puntos y poder jugar.\nPuedes ganar premios increíbles.";
                tSumar = "SUMAR PUNTOS";
                tRedPointChar = 7;
            }
            else
            {
                tTienes = "Tens ";
                tPuntos = " punts";
                tDonde = "On trobo el codi?";
                tJuega = "Juga amb els teus punts";
                tIntroduce = "Introdueix els codis dels teus Danone per sumar punts i poder jugar.\nPots guanyar premis increïbles!";
                tSumar = "SUMAR PUNTS";
                tRedPointChar = 5;
                fixX = 10;
            }

            popup.refreshPop();
            menu.isShowingPeine = true;
            menu.spritePeine.visible = true;
            menu.spriteReglaPeine.visible = false;
            menu.peine_sumarPuntos.visible = true;

            menu.checkPoints = document.getElementById('peine');
            menu.checkPoints.style.position = "absolute";
            menu.checkPoints.style.display = "block";
            menu.checkPoints.type = "text";
            menu.checkPoints.maxLength = "10";
            menu.checkPoints.style.wordSpacing = "-10px";
            menu.checkPoints.value = "";
            menu.checkPoints.color = "red";

            /*var w = (window.innerHeight / 2);
            menu.checkPoints.style.width = w + "px";
            menu.checkPoints.style.height = "8%";
            var x = (window.innerWidth / 2) - w;
            menu.checkPoints.style.left = x + "px";
            menu.checkPoints.style.top = "35%";
            var sizeFont = (window.innerHeight * 7) / 100;
            menu.checkPoints.style.fontSize = sizeFont + "px";
            var spacing = w / 250;
            menu.checkPoints.style.letterSpacing = spacing + "px";*/
            
            //Static promotion.
            menu.checkPoints.style.position = "relative";
            menu.checkPoints.style.width = "300px";
            menu.checkPoints.style.height = "50px";
            menu.checkPoints.style.left = "325px";
            menu.checkPoints.style.top = "-342px";
            menu.checkPoints.style.fontSize = "40px";
            menu.checkPoints.style.letterSpacing = "5px";

            if (game.device.desktop)
            {
                menu.peine_sumarPuntos.x = 635; //(game.canvas.width / 2) + 10;
            }
            else
            {
                menu.peine_sumarPuntos.x = 635;
            }
            menu.peine_sumarPuntos.y = 152;
            menu.peine_sumarPuntos.height = 60;

            var style = { font: "30px danone", fill: "#25418b" };
            menu.text_tienesPuntos = game.add.text(325, 110, tTienes + game.points + tPuntos, style);
            menu.text_tienesPuntos.addColor('#ff0000', tRedPointChar);
            menu.text_tienesPuntos.addColor('#25418b', (tRedPointChar + 1) + game.points.length);

            style = { font: "14px danone", fill: "#25418b" };
            menu.text_dondePincode = game.add.text(325, 220, tDonde, style);

            style = { font: "30px danone", fill: "#25418b" };
            menu.text_juega = game.add.text(325, 270, tJuega, style);

            style = { font: "16px danone", fill: "#000000" };
            menu.text_introduce = game.add.text(325, 320, tIntroduce, style);

            style = { font: "bold 20px danone", fill: "#ffffff" };
            menu.text_boton_sumar = game.add.text(500 + fixX + 180, 170, tSumar, style);
            menu.text_boton_sumar.align = 'center';
        }
        else
        {
            if (game.LANGUAGE === "es")
            {
                window.parent.location.href = game.URL_MOREPOINTS_ES;
            }
            else
            {
                window.parent.location.href = game.URL_MOREPOINTS_CAT;
            }
        }
        
        //New input text for mobile.
        if (!game.device.desktop)
        {
            //$('#peine').hide();
            
            game.canvas.id = "idcanvas";
            var bmd = game.add.bitmapData(300, 80);
            var input = new CanvasInput({
                canvas: bmd.canvas,
                fontSize: 40,
                fontFamily: 'danone',
                fontColor: '#212121',
                fontWeight: 'bold',
                width: 270,
                height: 40,
                padding: 8,
                borderWidth: 1,
                borderColor: '#000',
                borderRadius: 3,
                boxShadow: '1px 1px 0px #fff',
                innerShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
                placeHolder: '',
                onkeyup: function() {
                    input.value(input.value().toUpperCase());
                    if (input.value().length > 10)
                    {
                        input.value(input.value().substr(0, 10));
                    }
                    menu.inputValue = input.value();
                }
            });
        
            menu.inputPincode = game.add.button(325, 150, bmd, function(){
                input.focus()
            }, this);
        }
    },
    hidePointsPeine: function() {
        console.log("Lets play");
        popup.refreshPop();
        menu.hideCompletlyPeine();
        menu.isShowingPeine = false;
        menu.pauseMenu = false;
        menu.startGame();
    },
    sendPinCode: function(pincoder) {
        var pincode = pincoder.toUpperCase();
        if (!game.device.desktop)
        {
            pincode = menu.inputValue;
        }
        if (!pincode)
        {
            pincode = "1b";
        }
        console.log("Sending pincode " + pincode);
        doRequest(
            //Succes.
            function(data){
                popup.spriteClock.visible = false;
                //console.log(data);
                console.log("OK sending");
                switch (data.response) {
                    //case "ILSRV0144":
                    //case "ILSRV0142":
                    case "ILPI40022":
                        console.log("Pin yet used");
                        
                        document.getElementById('pincode_yetused').click();
                        
                        popup.popUpInit();
                        popup.popUpPinYetUsed();
                        
                        popup.pop_but_1.events.onInputDown.add(function(){document.getElementById('pincode_contactar').click();}, this);
                        popup.pop_but_2.events.onInputDown.add(function(){document.getElementById('pincode_reintentar').click();}, this);
                        //popup.pop_cancel.events.onInputDown.add(function(){document.getElementById('pincode_reintentar').click();}, this);
                        
                        popup.pop_but_1.events.onInputDown.add(menu.goContact, this);
                        popup.pop_but_2.events.onInputDown.add(menu.morePointsPeine, this);
                        //popup.pop_cancel.events.onInputDown.add(menu.morePointsPeine, this);
                        
                        break;
                    case "ILPI40061":
                        console.log("Too pins this month");
                        
                        document.getElementById('pincode_toopinsthismonth').click();

                        popup.popUpInit();
                        popup.popUpTooPinsThisMonth();
                        
                        popup.pop_but_1.events.onInputDown.add(function(){document.getElementById('pincode_contactar').click();}, this);
                        popup.pop_but_2.events.onInputDown.add(function(){document.getElementById('pincode_reintentar').click();}, this);
                        //popup.pop_cancel.events.onInputDown.add(function(){document.getElementById('pincode_reintentar').click();}, this);
                        
                        popup.pop_but_1.events.onInputDown.add(menu.goContact, this);
                        popup.pop_but_2.events.onInputDown.add(menu.morePointsPeine, this);
                        //popup.pop_cancel.events.onInputDown.add(menu.morePointsPeine, this);
                        
                        break;
                    case "ok":
                        if (!game.APP)
                        {
                            refreshUserData();
                        }
                        
                        popup.popUpInit();
                        if (data.enoughpoints === "true")
                        {
                            console.log("You get points and you can play");
                            
                            document.getElementById('pincode_ok_enoughpoints').click();
                            
                            game.points = data.pointsTotalConsumer;
                            
                            popup.popUpOkEnoughPoints(game.points);
                            
                            popup.pop_but_1.events.onInputDown.add(function(){document.getElementById('pincode_backtutorial').click();}, this);
                            popup.pop_but_2.events.onInputDown.add(function(){document.getElementById('pincode_reintentar').click();}, this);
                            //popup.pop_cancel.events.onInputDown.add(function(){document.getElementById('pincode_reintentar').click();}, this);
                            
                            popup.pop_but_1.events.onInputDown.add(menu.hidePointsPeine, this);
                            popup.pop_but_2.events.onInputDown.add(menu.morePointsPeine, this);
                            //popup.pop_cancel.events.onInputDown.add(menu.morePointsPeine, this);
                        }
                        else
                        {
                            console.log("You get points but not enough to play again");
                            
                            document.getElementById('pincode_ok_notenoughpoints').click();
                            
                            popup.popUpOkNoEnoughPoints(data.pointsPincode);
                            
                            popup.pop_but_1.events.onInputDown.add(function(){document.getElementById('pincode_reintentar').click();}, this);
                            // popup.pop_cancel.events.onInputDown.add(function(){document.getElementById('pincode_reintentar').click();}, this);
                            
                            popup.pop_but_1.events.onInputDown.add(menu.morePointsPeine, this);
                            //popup.pop_cancel.events.onInputDown.add(menu.morePointsPeine, this);
                        }
                        break;
                    default:
                        console.log("Pin not exist");
                        
                        popup.popUpInit();
                        popup.popUpPinNotExist();
                        
                        document.getElementById('pincode_notexist').click();
                        
                        popup.pop_but_1.events.onInputDown.add(function(){document.getElementById('pincode_contactar').click();}, this);
                        popup.pop_but_2.events.onInputDown.add(function(){document.getElementById('pincode_reintentar').click();}, this);
                        //popup.pop_cancel.events.onInputDown.add(function(){document.getElementById('pincode_reintentar').click();}, this);
                        
                        popup.pop_but_1.events.onInputDown.add(menu.goContact, this);
                        popup.pop_but_2.events.onInputDown.add(menu.morePointsPeine, this);
                        //popup.pop_cancel.events.onInputDown.add(menu.morePointsPeine, this);
                        break;
                }
            },
            //Error.
            function(data){
                popup.spriteClock.visible = false;
                //console.log(data);
                console.log("Error sending pincode");
                menu.popUpError();
            },
            //Data.
            {
                'pincode': pincode
            },
            //URL.
            '/actions/' + game.NAME_PROMO + '/addPincode',
            //Complete.
            null,
            //Beforesend.
            function() {
                popup.spriteClock.visible = true;
            }
        );
    },
    popUpError: function() {
        //Error server
        game.state.getCurrentState().pauseMenu = true;
        
        popup.popUpErrorConection();
        
        popup.pop_but_1.events.onInputDown.add(function(){document.getElementById('pop_errorconection_contactar').click();}, this);
        popup.pop_but_1.events.onInputDown.add(menu.goContact, this);
        popup.pop_but_2.events.onInputDown.add(function(){document.getElementById('pop_errorconection_reintentar').click();}, this);
        if (!menu.isShowingPeine)
        {
            popup.pop_but_2.events.onInputDown.add(function(){popup.refreshPop();menu.startGame()}, this);
            //popup.pop_cancel.events.onInputDown.add(function(){popup.refreshPop();menu.startGame()}, this);
        }
        else
        {
            popup.pop_but_2.events.onInputDown.add(menu.morePointsPeine, this);
            //popup.pop_cancel.events.onInputDown.add(menu.morePointsPeine, this);
        }
    },
    //Hide only the elements to check pincode, not back to tutorial.
    hidePeine: function() {
        //menu.spritePeine.visible = false;
        menu.spriteReglaPeine.visible = false;
        menu.peine_sumarPuntos.visible = true;
        menu.checkPoints.style.display = "none";
        menu.peine_sumarPuntos.visible = false;
        menu.text_tienesPuntos.visible = false;
        menu.text_dondePincode.visible = false;
        menu.text_juega.visible = false;
        menu.text_introduce.visible = false;
        menu.text_boton_sumar.visible = false;
        menu.inputPincode.visible = false;
    },
    //Hide completly the peine to back to tutorial.
    hideCompletlyPeine: function() {
        console.log("Backing to tutorial and hidding the peine");
        menu.spritePeine.visible = false;
        menu.spriteReglaPeine.visible = false;
        menu.peine_sumarPuntos.visible = false;
        menu.checkPoints.style.display = "none";
        menu.peine_sumarPuntos.visible = false;
        menu.text_tienesPuntos.visible = false;
        menu.text_dondePincode.visible = false;
        menu.text_juega.visible = false;
        menu.text_introduce.visible = false;
        menu.text_boton_sumar.visible = false;
        menu.inputPincode.visible = false;
        //menu.soundMusic.stop();
        //menu.soundMusic.play();
    },
    goContact: function() {
        console.log("Going to: " + menu.urlContact);
        window.parent.location.href = menu.urlContact;
    },
    clickScreen: function() {
        //Where is the points.
        if (menu.isShowingPeine && menu.peine_sumarPuntos.visible)
        {
            if (game.input.mousePointer.x > 320
            && game.input.mousePointer.x < 320 + 200
            && game.input.mousePointer.y > 215
            && game.input.mousePointer.y < 210 + 25)
            {
                if (game.LANGUAGE === "es")
                    {
                        window.parent.location.href = game.URL_WHEREISPINCODE_ES;
                    }
                    else
                    {
                        window.parent.location.href = game.URL_WHEREISPINCODE_CAT;
                    }
            }
        }
    },
    soundButton: function(change) {
        if (!change)
        {
            if (game.BSOUND)
            {
                menu.spriteSound.frame = 0;
            }
            else
            {
                menu.spriteSound.frame = 1;
            }
        }
        else
        {
            if (game.BSOUND)
            {
                game.BSOUND = false;
                //this.soundMusic.volume = 0;
                menu.spriteSound.frame = 1;
            }
            else
            {
                game.BSOUND = true;
                //this.soundMusic.volume = 1;
                menu.spriteSound.frame = 0;
            }
        }
    },
    cancelGame: function() {
        if (!game.device.iOS)
        {
            console.log("Exit full");
            game.scale.stopFullScreen(false);
            game.scale.refresh();
        }
        else
        {
            if (game.LANGUAGE === "es")
            {
                window.parent.location.href = game.URL_GAME_ES;
            }
            else
            {
                window.parent.location.href = game.URL_GAME_CAT;
            }
        }
    },
    sendPin: function() {
        menu.sendPinCode(menu.checkPoints.value);
        menu.hidePeine();
    },
    refreshPeine: function() {
        if (menu.isShowingPeine)
        {
            menu.morePointsPeine();
        }
    }
};
   