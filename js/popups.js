var popup = {
    icon_lose: "",
    pop_small: "",
    pop_big: "",
    //pop_cancel: "",
    pop_bar: "",
    pop_but_1: "",
    pop_but_2: "",
    pop_icon_ko: "",
    pop_icon_ok: "",
    pop_icon_lose: "",
    pop_icon_paso1: "",
    pop_icon_paso2: "",
    pop_icon_pase3: "",
    pop_icon_win1: "",
    pop_icon_win2: "",
    pop_icon_win3: "",
    pop_font_but: [2],
    pop_font_check: "",
    pop_sprite_check: "",
    pop_sprite_facebook: "",
    pop_sprite_twitter: "",
    spriteClock: "",
    text_title: "",
    text_body: "",
    text_but1: "",
    text_but2: "",
    show_hand: false,
    pop_check_isChecked: true,
    fix_x: 0,
    INTERLINE_TEXT: 6,
    CONST_ICON: 72,
    CONST_TITLE: 155,
    CONST_BODY: 105,
    CONST_BUT1_ONLY: 320,
    CONST_BUT1: 300,
    CONST_BUT2: 365,
    CONST_CANCEL_X: 212,//660,
    CONST_CANCEL_Y: 92,
    CONST_BAR_Y: 250,
    CONST_SOCIALNET_Y: 412,
    CONST_SOCIALNET_MARGIN: 40,
    real_width: "",
    popUpInit: function() {
        if (game.CINEMASCOPE)
        {
            if (game.camera.x !== 0)
            {
                this.fix_x = -game.FIX_X;
            }
            else
            {
                this.fix_x = 0;
            }
        }
        else
        {
            if (game.CURRENT_STATE === "game")
            {
                this.fix_x = 0;
            }
            else if (game.CURRENT_STATE === "menu")
            {
                this.fix_x = game.FIX_X;
            }
        }
        
        this.inited = true;
        this.pop_small = game.add.image(0, 0, 'pop_small');
        this.pop_small.visible = false;
        this.pop_small.anchor.setTo(0.5);
        this.pop_small.x = (game.canvas.width / 2) + this.fix_x;
        this.pop_small.y = game.canvas.height / 2;
        this.pop_small.width = 670;

        this.pop_big = game.add.image(0, 0, 'pop_big');
        this.pop_big.visible = false;
        this.pop_big.anchor.setTo(0.5);
        this.pop_big.x = (game.canvas.width / 2) + this.fix_x;
        this.pop_big.y = game.canvas.height / 2;
        this.pop_big.width = 670;

        /*this.pop_cancel = game.add.sprite(0, 0, 'pop_cancel');
        this.pop_cancel.visible = false;
        this.pop_cancel.inputEnabled = true;*/
        
        //this.pop_cancel.events.onInputOver.add(this.over, this);
        //this.pop_cancel.events.onInputOut.add(this.out, this);

        this.pop_but_1 = game.add.sprite(0, 0, 'pop_but_blue');
        this.pop_but_1.anchor.setTo(0.5);
        this.pop_but_1.x = (game.canvas.width / 2) + this.fix_x;
        this.pop_but_1.visible = false;
        this.pop_but_1.inputEnabled = true;

        this.pop_but_2 = game.add.sprite(0, 0, 'pop_but_grey');
        this.pop_but_2.anchor.setTo(0.5);
        this.pop_but_2.x = (game.canvas.width / 2) + this.fix_x;
        this.pop_but_2.visible = false;
        this.pop_but_2.inputEnabled = true;

        this.pop_bar = game.add.image(0, 0, 'pop_bar');
        this.pop_bar.visible = false;
        this.pop_bar.anchor.setTo(0.5);
        this.pop_bar.x = (game.canvas.width / 2) + this.fix_x;

        this.pop_icon_ko = game.add.image(0, 0, 'pop_icon_ko');
        this.pop_icon_ko.visible = false;
        this.pop_icon_ko.anchor.setTo(0.5);
        this.pop_icon_ko.x = (game.canvas.width / 2) + this.fix_x;
        
        this.pop_icon_ok = game.add.image(0, 0, 'pop_icon_ok');
        this.pop_icon_ok.visible = false;
        this.pop_icon_ok.anchor.setTo(0.5);
        this.pop_icon_ok.x = (game.canvas.width / 2) + this.fix_x;

        this.pop_icon_lose = game.add.image(0, 0, 'pop_icon_lose');
        this.pop_icon_lose.visible = false;
        this.pop_icon_lose.anchor.setTo(0.5);
        this.pop_icon_lose.x = (game.canvas.width / 2) + this.fix_x;
        
        //TODO.
        this.pop_icon_lose.scale.setTo(0.8);
        
        this.pop_icon_paso1 = game.add.image(0, 0, 'pop_icon_paso1');
        this.pop_icon_paso1.visible = false;
        this.pop_icon_paso1.anchor.setTo(0.5);
        this.pop_icon_paso1.x = (game.canvas.width / 2) + this.fix_x;
        
        //TODO.
        this.pop_icon_paso1.scale.setTo(0.8);
        
        this.pop_icon_paso2 = game.add.image(0, 0, 'pop_icon_paso2');
        this.pop_icon_paso2.visible = false;
        this.pop_icon_paso2.anchor.setTo(0.5);
        this.pop_icon_paso2.x = (game.canvas.width / 2) + this.fix_x;
        this.pop_icon_paso3 = game.add.image(0, 0, 'pop_icon_paso3');
        this.pop_icon_paso3.visible = false;
        this.pop_icon_paso3.anchor.setTo(0.5);
        this.pop_icon_paso3.x = (game.canvas.width / 2) + this.fix_x;
        this.pop_icon_win1 = game.add.image(0, 0, 'pop_icon_win1');
        this.pop_icon_win1.visible = false;
        this.pop_icon_win1.anchor.setTo(0.5);
        this.pop_icon_win1.x = (game.canvas.width / 2) + this.fix_x;
        
        //TODO.
        this.pop_icon_win1.scale.setTo(0.8);
        
        this.pop_icon_win2 = game.add.image(0, 0, 'pop_icon_win2');
        this.pop_icon_win2.visible = false;
        this.pop_icon_win2.anchor.setTo(0.5);
        this.pop_icon_win2.x = (game.canvas.width / 2) + this.fix_x;
        /*this.pop_icon_win3 = game.add.image(0, 0, 'pop_icon_win3');
        this.pop_icon_win3.visible = false;
        this.pop_icon_win3.anchor.setTo(0.5);
        this.pop_icon_win3.x = (game.canvas.width / 2) + this.fix_x;*/
        
        this.pop_icon_win3 = game.add.sprite(0, 0, 'gif');
        this.pop_icon_win3.visible = false;
        this.pop_icon_win3.animations.add('walk');
        this.pop_icon_win3.animations.play('walk', 15, true);
        this.pop_icon_win3.anchor.setTo(0.5);
        this.pop_icon_win3.scale.setTo(0.8, 0.8);
        this.pop_icon_win3.x = (game.canvas.width / 2) + this.fix_x;
        
        game.renderer.renderSession.roundPixels = true;
        
        var style = { font: "25px Asap-Bold", fill: "#ffffff" };
        this.text_but1 = game.add.text(Math.round((game.canvas.width / 2) + this.fix_x), 0, "", style);
        this.text_but1.visible = false;
        this.text_but1.anchor.setTo(0.5);
        this.text_but2 = game.add.text(Math.round((game.canvas.width / 2) + this.fix_x), 0, "", style);
        this.text_but2.visible = false;
        this.text_but2.anchor.setTo(0.5);
        style = { font: "24px danone", fill: "#00358e" };
        this.text_title = game.add.text(Math.round((game.canvas.width / 2) + this.fix_x), 0, "", style);
        this.text_title.visible = false;
        this.text_title.anchor.setTo(0.5);
        this.text_title.align = 'center';
        if (game.device.desktop)
        {
            this.text_title.smoothed = false;
        }
        style = { font: "18px danone", fill: "#4f4e4e" };
        this.text_body = game.add.text(Math.round((game.canvas.width / 2) + this.fix_x), 0, "", style);
        this.text_body.visible = false;
        this.text_body.anchor.setTo(0.5);
        this.text_body.align = 'center';
        if (game.device.desktop)
        {
            this.text_body.smoothed = false;
        }

        /*this.pop_font_check = game.add.bitmapText((game.canvas.width / 2) + this.fix_x, 0, 'pop_font_body','Fuente', 18);
        this.pop_font_check.anchor.setTo(0.5);
        this.pop_font_check.visible = false;*/
        
        this.pop_sprite_check = game.add.sprite(0, 0, 'pop_check');
        this.pop_sprite_check.visible = false;
        if (this.pop_check_isChecked)
        {
            this.pop_sprite_check.frame = 1;
        }
        else
        {
            this.pop_sprite_check.frame = 0;
        }
        
        this.pop_sprite_check.inputEnabled = true;
        this.pop_sprite_check.x = 235;
        this.pop_sprite_check.y = 268;

        //Social nets.
        this.pop_sprite_facebook = game.add.sprite((game.canvas.width / 2) + this.fix_x - this.CONST_SOCIALNET_MARGIN, this.CONST_SOCIALNET_Y, 'pop_facebook');
        this.pop_sprite_facebook.inputEnabled = true;
        this.pop_sprite_facebook.anchor.setTo(0.5);
        this.pop_sprite_facebook.events.onInputDown.add(Share.facebook.share, this);
        this.pop_sprite_facebook.visible = false;
        this.pop_sprite_twitter = game.add.sprite((game.canvas.width / 2) + this.fix_x + this.CONST_SOCIALNET_MARGIN, this.CONST_SOCIALNET_Y, 'pop_twitter');
        this.pop_sprite_twitter.inputEnabled = true;
        this.pop_sprite_twitter.anchor.setTo(0.5);
        this.pop_sprite_twitter.events.onInputDown.add(Share.twitter.share, this);
        this.pop_sprite_twitter.visible = false;

        //Positions.
        /*this.pop_cancel.x = (game.canvas.width / 2) + this.fix_x + this.CONST_CANCEL_X;
        this.pop_cancel.y = this.CONST_CANCEL_Y;*/
        this.pop_bar.y = this.CONST_BAR_Y;
        this.pop_icon_ko.y = this.CONST_ICON;
        this.pop_icon_ok.y = this.CONST_ICON;
        this.pop_icon_lose.y = this.CONST_ICON;
        this.pop_icon_paso1.y = this.CONST_ICON;
        this.pop_icon_paso2.y = this.CONST_ICON;
        this.pop_icon_paso3.y = this.CONST_ICON;
        this.pop_icon_win1.y = this.CONST_ICON - 10;
        this.pop_icon_win2.y = this.CONST_ICON - 10;
        this.pop_icon_win3.y = this.CONST_ICON - 10;

        //Clock.
        this.spriteClock = game.add.sprite((game.canvas.width / 2) + this.fix_x, game.canvas.height / 2, 'clock_loading');
        this.spriteClock.anchor.setTo(0.5);
        this.spriteClock.visible = false;
        game.add.tween(this.spriteClock).to({angle: -360}, 1000, "Linear", true, 0, -1, false);
        
        console.log("POPS inited!");
    },
    writeText: function(text, posY, numFont) {
        for (var i = 0; i < text.length; i++) {
            if (numFont === 1)
            {
                this.pop_font_title[i].y = posY + ((this.pop_font_title[i].height + this.INTERLINE_TEXT) * i);
                this.pop_font_title[i].text = text[i];
                this.pop_font_title[i].visible = true;
            }
            else
            {
                this.pop_font_body[i].y = posY + ((this.pop_font_body[i].height + this.INTERLINE_TEXT) * i);
                this.pop_font_body[i].text = text[i];
                this.pop_font_body[i].visible = true;
            }
        }
    },
    writeTextBut: function(text, posY, numBut) {
        this.pop_font_but[numBut - 1].visible = true;
        this.pop_font_but[numBut - 1].text = text;
        this.pop_font_but[numBut - 1].y = posY;
    },
    over: function() {
        //game.canvas.style.cursor = "pointer";
        popup.show_hand = true;
        console.log("OVER");
    },
    out: function() {
        //game.canvas.style.cursor = "default";
        popup.show_hand = false;
        console.log("OUT");
    },
    checkBox: function() {
        if (popup.pop_check_isChecked)
        {
            popup.pop_check_isChecked = false;
            popup.pop_sprite_check.frame = 0;
        }
        else
        {
            popup.pop_check_isChecked = true;
            popup.pop_sprite_check.frame = 1;
        }
    },
    refreshPop: function() {
        menu.pauseMenu = false;

        popup.pop_small.visible = false;
        popup.pop_big.visible = false;
        //popup.pop_cancel.visible = false;
        popup.pop_bar.visible = false;
        popup.pop_but_1.visible = false;
        popup.pop_but_2.visible = false;
        popup.pop_but_1.events.onInputDown.removeAll();
        popup.pop_but_2.events.onInputDown.removeAll();
        //popup.pop_cancel.events.onInputDown.removeAll();
        popup.pop_sprite_check.events.onInputDown.removeAll();
        popup.pop_icon_ko.visible = false;
        popup.pop_icon_ok.visible = false;
        popup.pop_icon_lose.visible = false;
        popup.pop_icon_paso1.visible = false;
        popup.pop_icon_paso2.visible = false;
        popup.pop_icon_paso3.visible = false;
        popup.pop_icon_win1.visible = false;
        popup.pop_icon_win2.visible = false;
        popup.pop_icon_win3.visible = false;
        popup.pop_sprite_facebook.visible = false;
        popup.pop_sprite_twitter.visible = false;
        popup.pop_check_isChecked = true;
        popup.pop_sprite_check.frame = 1;
        popup.pop_sprite_check.visible = false;
        popup.pop_font_check.visible = false;
        //Texts.
        popup.text_title.visible = false;
        popup.text_body.visible = false;
        popup.text_but1.visible = false;
        popup.text_but2.visible = false;
        //Positions.
        /*popup.pop_cancel.x = (game.canvas.width / 2) + this.fix_x + this.CONST_CANCEL_X;
        popup.pop_cancel.y = popup.CONST_CANCEL_Y;*/
        popup.pop_bar.y = popup.CONST_BAR_Y;
        popup.pop_icon_ko.y = popup.CONST_ICON;
        popup.pop_icon_lose.y = popup.CONST_ICON;
        popup.pop_icon_paso1.y = popup.CONST_ICON;
        popup.pop_icon_paso2.y = popup.CONST_ICON;
        popup.pop_icon_paso3.y = popup.CONST_ICON;
        popup.pop_icon_win1.y = popup.CONST_ICON - 10;
        popup.pop_icon_win2.y = popup.CONST_ICON - 10;
        popup.pop_icon_win3.y = popup.CONST_ICON - 10;
    },
    popUpLose: function(textTitle) {
        var textBody = "";
        var textBut1 = "";
        var textBut2 = "";
        textTitle = "Ohhhh, " + game.NAME_USER;
        
        if (game.LANGUAGE === 'es')
        {
            textTitle = ["" + textTitle];
            textBody = ["Parece que esta vez no ha habido suerte.\n¿Lo intentamos de nuevo?"];
            textBut1 = "¡VAMOS!";
            textBut2 = "VER MÁS PROMOCIONES";
        }
        else
        {
            textTitle = ["" + textTitle];
            textBody = "Sembla que aquesta vegada no hi ha hagut\nsort. Ho intentem de nou?";
            textBut1 = "SOM-HI!";
            textBut2 = "VEURE MÉS PROMOCIONS";
        }

        popup.pop_icon_lose.visible = true;
        popup.pop_small.visible = true;
        //popup.pop_cancel.visible = true;
        popup.pop_bar.visible = true;
        popup.pop_but_1.visible = true;
        popup.pop_but_2.visible = true;
        popup.text_title.visible = true;
        popup.text_body.visible = true;
        popup.text_but1.visible = true;
        popup.text_but2.visible = true;
        
        popup.pop_but_1.y = popup.CONST_BUT1;
        popup.pop_but_2.y = popup.CONST_BUT2;

        popup.text_title.y = popup.CONST_TITLE;
        popup.text_title.setText(textTitle);
        popup.text_body.y = 210;
        popup.text_body.setText(textBody);
        popup.text_but1.y = popup.pop_but_1.y;
        popup.text_but1.setText(textBut1);
        popup.text_but2.y = popup.pop_but_2.y;
        popup.text_but2.setText(textBut2);
    },
    popUpWinNoPrize1level: function(textTitle) {
        var textBody = "";
        var textBut1 = "";
        var textBut2 = "";
        
        if (game.LANGUAGE === 'es')
        {
            textTitle = ["¡Muy bien " + game.NAME_USER + "!"];
            textBody = ["Has recogido todas las botellitas de Actimel, pero parece\nque esta vez no ha habido suerte con el premio.\nSigue jugando y ¡podrás ganar 1 cheque de 100€!"];
            textBut1 = "¡QUIERO SEGUIR JUGANDO!";
            textBut2 = "VER MÁS PROMOCIONES";
        }
        else
        {
            textTitle = ["Molt bé " + game.NAME_USER + "!"];
            textBody = ["Has recollit totes les ampolletes d’Actimel, però sembla\nque aquesta vegada no hi ha hagut sort amb el premi.\nSegueix jugant i podràs guanyar 1 xec de 100€!"];
            textBut1 = "SOM-HI!";
            textBut2 = "VEURE MÉS PROMOCIONS";
        }

        popup.pop_icon_paso1.visible = true;
        popup.pop_small.visible = true;
        //popup.pop_cancel.visible = true;
        popup.pop_bar.visible = true;
        popup.pop_but_1.visible = true;
        popup.pop_but_2.visible = true;
        popup.text_title.visible = true;
        popup.text_body.visible = true;
        popup.text_but1.visible = true;
        popup.text_but2.visible = true;
        
        popup.pop_but_1.y = popup.CONST_BUT1;
        popup.pop_but_2.y = popup.CONST_BUT2;

        popup.text_title.y = popup.CONST_TITLE;
        popup.text_title.setText(textTitle);
        popup.text_body.y = 210;
        popup.text_body.setText(textBody);
        popup.text_but1.y = popup.pop_but_1.y;
        popup.text_but1.setText(textBut1);
        popup.text_but2.y = popup.pop_but_2.y;
        popup.text_but2.setText(textBut2);
    },
    popUpWinNoPrize: function(textTitle, numLevel) {
        var textBody = "";
        var textBut1 = "";
        var fixY = 20;
        if (game.LANGUAGE === 'es')
        {
            switch (numLevel)
            {
                case 1:
                    textTitle = ["¡Felicidades " + game.NAME_USER + ",\nhas cogido muchos actimels!"];
                    textBody = ["Aunque lo has hecho muy bien, no has tenido suerte\ncon el premio. Recuerda que, al menos, gozarás\nde una salud de hierro con tanto actimel."];
                    textBut1 = "¡VAMOS!";
                    break;
                case 2:
                    textTitle = ["¡Bravo " + game.NAME_USER + ",\nhas ganado un vale de 100€!"];
                    textBody = ["Ya puedes comprarte una Play4 y jubilar tu Nintendo64\nSerás la envidia en la oficina.\nTómatelo con calma."];
                    textBut1 = "¡VAMOS!";
                    break;
                case 3:
                    textTitle = ["¡Alucinante " + game.NAME_USER + ",\nhas pasado el último nivel!"];
                    textBody = ["Pero parece que no ha habido suerte con el premio.\nInténtalo de nuevo y no dejes que el viaje a Grecia o los\npases para tu gimnasio favorito se te escapen."];
                    textBut1 = "VOLVER A EMPEZAR EL JUEGO";
                    break;
            }
        }
        else
        {
            switch (numLevel)
            {
                case 1:
                    textTitle = ["Bé " + game.NAME_USER + ",\nhas passat de nivell!"];
                    textBody = ["Tot i que ho has fet molt bé, no has tingut sort amb\nel premi. Atreveix-te amb els següent nivell i podràs\nguanyar un passi d’1 mes al teu gimnàs preferit."];
                    textBut1 = "SOM-HI!";
                    break;
                case 2:
                    textTitle = ["Fantàstic " + game.NAME_USER + ",\nhas passat de nivell!"];
                    textBody = ["Tot i que ho has fet molt bé, no has tingut sort amb\nel premi. Atreveix-te amb els següent nivell i podràs\nguanyar un viatge a Grècia per a 2 persones."];
                    textBut1 = "SOM-HI!";
                    break;
                case 3:
                    textTitle = ["Al·lucinant " + game.NAME_USER + ",\nhas passat l’últim nivell!"];
                    textBody = ["Però sembla que aquesta vegada no hi ha hagut sort amb\nel premi. Intenta-ho de nou i no deixis que el viatge a\nGrècia o els passis per al teu gimnàs preferit se t’escapin."];
                    textBut1 = "TORNAR A COMENÇAR EL JOC";
                    break;
            }
        }
        
        switch (numLevel)
            {
                case 1:
                    popup.pop_icon_paso1.visible = true;
                    break;
                case 2:
                    popup.pop_icon_paso2.visible = true;
                    break;
                case 3:
                    popup.pop_icon_paso3.visible = true;
                    break;
            }

        popup.pop_small.visible = true;
        //popup.pop_cancel.visible = true;
        popup.pop_bar.visible = false;
        popup.pop_but_1.visible = true;
        popup.text_title.visible = true;
        popup.text_body.visible = true;
        popup.text_but1.visible = true;
        
        popup.pop_but_1.y = popup.CONST_BUT1_ONLY + fixY;

        popup.text_title.y = popup.CONST_TITLE + fixY;
        popup.text_title.setText(textTitle);
        popup.text_body.y = 230 + fixY;
        popup.text_body.setText(textBody);
        popup.text_but1.y = popup.pop_but_1.y;
        popup.text_but1.setText(textBut1);
    },
    popUpWinPrize: function(numLevel, textTitle) {
        var textBody = "";
        var textBut1 = "";
        var textBut2 = "";
        var textCheck = "";
        var fixY = 20;
        var fixX = 0;
        if (game.LANGUAGE === 'es')
        {
            textBody = ["Muy pronto contactaremos contigo para\n entregarte el premio."];
            textBut1 = "QUIERO SEGUIR JUGANDO";
            textBut2 = "VER MÁS PROMOCIONES";
            textCheck = "Autorizo a que publiquéis mi nombre como ganador";
            switch (numLevel)
            {
                case 1:
                    textTitle = ["Felicidades " + game.NAME_USER + ",\nhas ganado un cheque de 100€."];
                    break;
                case 2:
                    textTitle = ["Felicidades " + game.NAME_USER + ",\nhas ganado un cheque de 100€."];
                    break;
                case 3:
                    textTitle = ["Felicidades " + game.NAME_USER + ",\nhas ganado un cheque de 100€."];
                    break;
            }
        }
        else
        {
            textBody = ["Molt aviat contactarem amb tu per\nentregar-te el premi."];
            textBut1 = "VULL SEGUIR JUGANT";
            textBut2 = "VEURE MÉS PROMOCIONS";
            textCheck = "Autoritzo que publiqueu el meu nom com a guanyador";
            switch (numLevel)
            {
                case 1:
                    textTitle = ["Felicitats " + game.NAME_USER + ",\nhas guanyat un xec de 100€."];
                    break;
                case 2:
                    textTitle = ["Felicitats " + game.NAME_USER + ",\nhas guanyat un xec de 100€."];
                    break;
                case 3:
                    textTitle = ["Felicitats " + game.NAME_USER + ",\nhas guanyat un xec de 100€."];
                    break;
            }
        }
        
        switch (numLevel)
            {
                case 1:
                    popup.pop_icon_win1.visible = true;
                    break;
                case 2:
                    popup.pop_icon_win2.visible = true;
                    break;
                case 3:
                    popup.pop_icon_win3.visible = true;
                    break;
            }

        popup.pop_big.visible = true;
        /*popup.pop_cancel.visible = true;
        popup.pop_cancel.y = 65;*/
        popup.pop_bar.visible = false;
        popup.pop_but_1.visible = true;
        popup.pop_but_2.visible = true;
        popup.text_title.visible = true;
        popup.text_body.visible = true;
        popup.text_but1.visible = true;
        popup.text_but2.visible = true;
        popup.pop_sprite_facebook.visible = true;
        popup.pop_sprite_twitter.visible = true;
        
        popup.pop_but_1.y = popup.CONST_BUT1 + 10;
        popup.pop_but_2.y = popup.CONST_BUT2;

        /*popup.pop_font_check.y = 280;
        popup.pop_font_check.x = (game.canvas.width / 2) + fixX;
        popup.pop_font_check.text = textCheck;
        popup.pop_font_check.visible = true;
        popup.pop_sprite_check.visible = true;*/

        popup.text_title.y = popup.CONST_TITLE + fixY;
        popup.text_title.setText(textTitle);
        popup.text_body.y = 230 + fixY;
        popup.text_body.setText(textBody);
        popup.text_but1.y = popup.pop_but_1.y;
        popup.text_but1.setText(textBut1);
        popup.text_but2.y = popup.pop_but_2.y;
        popup.text_but2.setText(textBut2);
    },
    popUpAdvertExit: function() {
        var fix_y = 0;
        var fix_y2 = 2;
        if (game.LANGUAGE === 'es')
        {
            textTitle = ["¿Seguro que quieres abandonar\nel juego?"];
            textBody = ["Si lo dejas ahora, perderás tus puntos\ny volverás al inicio del juego."];
            textBut1 = "CONTINUAR JUGANDO";
            textBut2 = "SALIR DEL JUEGO";
            fix_y = 10;
        }
        else
        {
            textTitle = ["Segur que vols abandonar el joc?"];
            textBody = ["Si ho deixies ara, perdràs els teus punts\ni tornaràs a l’inici del joc."];
            textBut1 = "CONTINUAR JUGANT";
            textBut2 = "SORTIR DEL JOC";
            fix_y2 = 10;
        }

        popup.pop_icon_lose.visible = true;
        popup.pop_small.visible = true;
        //popup.pop_cancel.visible = true;
        popup.pop_bar.visible = true;
        popup.pop_but_1.visible = true;
        popup.pop_but_2.visible = true;
        popup.text_title.visible = true;
        popup.text_body.visible = true;
        popup.text_but1.visible = true;
        popup.text_but2.visible = true;
        
        popup.pop_but_1.y = popup.CONST_BUT1;
        popup.pop_but_2.y = popup.CONST_BUT2;

        popup.text_title.y = popup.CONST_TITLE + fix_y;
        popup.text_title.setText(textTitle);
        popup.text_body.y = 223 - fix_y2;
        popup.text_body.setText(textBody);
        popup.text_but1.y = popup.pop_but_1.y;
        popup.text_but1.setText(textBut1);
        popup.text_but2.y = popup.pop_but_2.y;
        popup.text_but2.setText(textBut2);
    },
    popUpErrorConection: function() {
        var fix_y = 15;
        if (game.LANGUAGE === 'es')
        {
            textTitle = ["Ups..."];
            textBody = ["Parece que ha habido un problema de\nconexión. Inténtalo de nuevo o contacta\ncon nuestro Servicio de Atención al\nConsumidor para que podamos ayudarte."];
            textBut1 = "CONTACTAR";
            textBut2 = "VOLVER A INTENTAR";
        }
        else
        {
            textTitle = ["Ups..."];
            textBody = ["Embla que hi ha hagut un problema de\nconnexió. Intenta-ho de nou o contacta amb\nel nostre Servei d’Atenció al Consumidor\nperquè puguem ajudar-te."];
            textBut1 = "CONTACTAR";
            textBut2 = "TORNAR A INTENTAR";
        }

        popup.pop_icon_ko.visible = true;
        popup.pop_small.visible = true;
        //popup.pop_cancel.visible = true;
        //popup.pop_bar.visible = true;
        popup.pop_but_1.visible = true;
        popup.pop_but_2.visible = true;
        popup.text_title.visible = true;
        popup.text_body.visible = true;
        popup.text_but1.visible = true;
        popup.text_but2.visible = true;
        
        popup.pop_but_1.y = popup.CONST_BUT1;
        popup.pop_but_2.y = popup.CONST_BUT2;
        
        popup.text_title.y = popup.CONST_TITLE - fix_y;
        popup.text_title.setText(textTitle);
        popup.text_body.y = 223 - fix_y;
        popup.text_body.setText(textBody);
        popup.text_but1.y = popup.pop_but_1.y;
        popup.text_but1.setText(textBut1);
        popup.text_but2.y = popup.pop_but_2.y;
        popup.text_but2.setText(textBut2);
    },
    popUpPinNotExist: function() {
        var textTitle;
        var textBody;
        var textBut1;
        var textBut2;
        if (game.LANGUAGE === 'es')
        {
            textTitle = ["Ups… Este código no es de\nninguno de nuestros productos"];
            textBody = ["Inténtalo de nuevo o contacta con nuestro Servicio\nde Atención al Consumidor para que podamos\nayudarte. Este es el código de tu incidencia: ILPI20020"];
            textBut1 = "CONTACTAR";
            textBut2 = "VOLVER A INTENTAR";
        }
        else
        {
            textTitle = ["Ups… Aquest codi no és de\ncap dels nostres productes"];
            textBody = ["Intenta-ho de nou o contacta amb el nostre Servei\nd'Atenció al Consumidor perquè puguem\najudar-te. Aquest és el codi de la teva incidència: ILPI20020"];
            textBut1 = "CONTACTAR";
            textBut2 = "TORNAR A INTENTAR";
        }

        popup.pop_icon_ko.visible = true;
        popup.pop_small.visible = true;
        //popup.pop_cancel.visible = true;
        //popup.pop_bar.visible = true;
        popup.pop_but_1.visible = true;
        popup.pop_but_2.visible = true;
        popup.text_title.visible = true;
        popup.text_body.visible = true;
        popup.text_but1.visible = true;
        popup.text_but2.visible = true;
        
        popup.pop_but_1.y = popup.CONST_BUT1;
        popup.pop_but_2.y = popup.CONST_BUT2;
        
        popup.text_title.y = popup.CONST_TITLE;
        popup.text_title.setText(textTitle);
        popup.text_body.y = 230;
        popup.text_body.setText(textBody);
        popup.text_but1.y = popup.pop_but_1.y;
        popup.text_but1.setText(textBut1);
        popup.text_but2.y = popup.pop_but_2.y;
        popup.text_but2.setText(textBut2);
    },
    popUpPinYetUsed: function() {
        var textTitle;
        var textBody;
        var textBut1;
        var textBut2;
        if (game.LANGUAGE === 'es')
        {
            textTitle = ["Ups… Parece que este código\nya ha sido utilizado"];
            textBody = ["Si necesitas ayuda, puedes contactar con\nnuestro Servicio de Atención al Consumidor.\nEste es el código de tu incidencia: ILPI40022"];
            textBut1 = "CONTACTAR";
            textBut2 = "VOLVER A INTENTAR";
        }
        else
        {
            textTitle = ["Ups… Sembla que aquest codi\nja ha estat utilitzat"];
            textBody = ["Si necessites ajuda, pots contactar amb\nel nostre Servei d'Atenció al Consumidor.\nAquest és el codi de la teva incidència: ILPI40022"];
            textBut1 = "CONTACTAR";
            textBut2 = "TORNAR A INTENTAR";
        }

        popup.pop_icon_ko.visible = true;
        popup.pop_small.visible = true;
        //popup.pop_cancel.visible = true;
        //popup.pop_bar.visible = true;
        popup.pop_but_1.visible = true;
        popup.pop_but_2.visible = true;
        popup.text_title.visible = true;
        popup.text_body.visible = true;
        popup.text_but1.visible = true;
        popup.text_but2.visible = true;
        
        popup.pop_but_1.y = popup.CONST_BUT1;
        popup.pop_but_2.y = popup.CONST_BUT2;
        
        popup.text_title.y = popup.CONST_TITLE;
        popup.text_title.setText(textTitle);
        popup.text_body.y = 230;
        popup.text_body.setText(textBody);
        popup.text_but1.y = popup.pop_but_1.y;
        popup.text_but1.setText(textBut1);
        popup.text_but2.y = popup.pop_but_2.y;
        popup.text_but2.setText(textBut2);
    },
    popUpTooPinsThisMonth: function() {
        var textTitle;
        var textBody;
        var textBut1;
        var textBut2;
        if (game.LANGUAGE === 'es')
        {
            textTitle = ["Ups... ya has introducido\ndemasiados códigos este mes"];
            textBody = ["Si necesitas ayuda, puedes contactar con\nnuestro Servicio de Atención al Consumidor.\nEste es el código de tu incidencia: ILPI40022"];
            textBut1 = "CONTACTAR";
            textBut2 = "VOLVER A INTENTAR";
        }
        else
        {
            textTitle = ["Ups... ja té introduït\nmassa codis aquest mes"];
            textBody = ["Si necessites ajuda, pots contactar amb\nel nostre Servei d'Atenció al Consumidor.\nAquest és el codi de la teva incidència: ILPI40022"];
            textBut1 = "CONTACTAR";
            textBut2 = "TORNAR A INTENTAR";
        }

        popup.pop_icon_ko.visible = true;
        popup.pop_small.visible = true;
        //popup.pop_cancel.visible = true;
        //popup.pop_bar.visible = true;
        popup.pop_but_1.visible = true;
        popup.pop_but_2.visible = true;
        popup.text_title.visible = true;
        popup.text_body.visible = true;
        popup.text_but1.visible = true;
        popup.text_but2.visible = true;
        
        popup.pop_but_1.y = popup.CONST_BUT1;
        popup.pop_but_2.y = popup.CONST_BUT2;
        
        popup.text_title.y = popup.CONST_TITLE;
        popup.text_title.setText(textTitle);
        popup.text_body.y = 230;
        popup.text_body.setText(textBody);
        popup.text_but1.y = popup.pop_but_1.y;
        popup.text_but1.setText(textBut1);
        popup.text_but2.y = popup.pop_but_2.y;
        popup.text_but2.setText(textBut2);
    },
    popUpOkNoEnoughPoints: function(points) {
        var textTitle;
        var textBody;
        var textBut1;
        if (game.LANGUAGE === 'es')
        {
            textTitle = ["¡Genial!"];
            textBody = ["¡Has sumado " + points + " puntos!\nSuma más para poder jugar y llevarte el premio."];
            textBut1 = "INTRODUCIR OTRO CÓDIGO";
        }
        else
        {
            textTitle = ["Genial!"];
            textBody = ["Has sumat " + points + " punts!\nSuma’n més per poder jugar i endur-te el premi."];
            textBut1 = "INTRODUIR UN ALTRE CODI";
        }

        popup.pop_icon_ok.visible = true;
        popup.pop_small.visible = true;
        //popup.pop_cancel.visible = true;
        //popup.pop_bar.visible = true;
        popup.pop_but_1.visible = true;
        popup.text_title.visible = true;
        popup.text_body.visible = true;
        popup.text_but1.visible = true;
        
        popup.pop_but_1.y = popup.CONST_BUT1_ONLY;
        
        popup.text_title.y = popup.CONST_TITLE + 20;
        popup.text_title.setText(textTitle);
        popup.text_body.y = 230;
        popup.text_body.setText(textBody);
        popup.text_but1.y = popup.pop_but_1.y;
        popup.text_but1.setText(textBut1);
    },
    popUpOkEnoughPoints: function(points) {
        var textTitle;
        var textBody;
        var textBut1;
        var textBut2;
        if (game.LANGUAGE === 'es')
        {
            textTitle = ["¡Genial!"];
            textBody = ["Tienes " + points + " puntos en tu cuenta."];
            textBut1 = "¡A JUGAR!";
            textBut2 = "SUMAR MÁS PUNTOS";
        }
        else
        {
            textTitle = ["Genial!"];
            textBody = ["Tens " + points + " punts al teu compte."];
            textBut1 = "A JUGAR!";
            textBut2 = "SUMAR MÉS PUNTS";
        }

        popup.pop_icon_ok.visible = true;
        popup.pop_small.visible = true;
        //popup.pop_cancel.visible = true;
        //popup.pop_bar.visible = true;
        popup.pop_but_1.visible = true;
        popup.pop_but_2.visible = true;
        popup.text_title.visible = true;
        popup.text_body.visible = true;
        popup.text_but1.visible = true;
        popup.text_but2.visible = true;
        
        popup.pop_but_1.y = popup.CONST_BUT1;
        popup.pop_but_2.y = popup.CONST_BUT2;
        
        popup.text_title.y = popup.CONST_TITLE + 20;
        popup.text_title.setText(textTitle);
        popup.text_body.y = 230;
        popup.text_body.setText(textBody);
        popup.text_but1.y = popup.pop_but_1.y;
        popup.text_but1.setText(textBut1);
        popup.text_but2.y = popup.pop_but_2.y;
        popup.text_but2.setText(textBut2);
    },
    popUpNoPoints: function(textTitle, textBody, textBut1) {
        if (game.LANGUAGE === 'es')
        {
            textTitle = ["¡Oh! No tienes suficientes puntos"];
            textBody = ["Consigue más puntos introduciendo\nlos códigos de tus Danone."];
            textBut1 = "Sumar puntos";
        }
        else
        {
            textTitle = ["Oh! No tens suficients punts"];
            textBody = ["Aconsegueix més punts introduint\nels codis dels teus Danone."];
            textBut1 = "Sumar punts";
        }

        popup.pop_icon_ko.visible = true;
        popup.pop_small.visible = true;
        //popup.pop_cancel.visible = true;
        popup.pop_bar.visible = true;
        popup.pop_but_1.visible = true;
        popup.text_title.visible = true;
        popup.text_body.visible = true;
        popup.text_but1.visible = true;
        
        popup.pop_but_1.y = popup.CONST_BUT1_ONLY;
        
        popup.text_title.y = popup.CONST_TITLE;
        popup.text_title.setText(textTitle);
        popup.text_body.y = 210;
        popup.text_body.setText(textBody);
        popup.text_but1.y = popup.pop_but_1.y;
        popup.text_but1.setText(textBut1);
    },
    //HAND OVER BUTTONS.
    update: function() {
        if (game.device.desktop)
        {
            game.canvas.style.cursor = "default";
            if (popup.pop_but_1.visible)
            {
                if (game.input.mousePointer.x > popup.pop_but_1.x - popup.fix_x - (popup.pop_but_1.width / 2)
                        && game.input.mousePointer.x < popup.pop_but_1.x - popup.fix_x + (popup.pop_but_1.width / 2)
                        && game.input.mousePointer.y > popup.pop_but_1.y - (popup.pop_but_1.height / 2)
                        && game.input.mousePointer.y < popup.pop_but_1.y + (popup.pop_but_1.height / 2))
                {
                    game.canvas.style.cursor = "pointer";
                }
            }
            if (popup.pop_but_2.visible)
            {
                if (game.input.mousePointer.x > popup.pop_but_2.x - popup.fix_x - (popup.pop_but_2.width / 2)
                        && game.input.mousePointer.x < popup.pop_but_2.x - popup.fix_x + (popup.pop_but_2.width / 2)
                        && game.input.mousePointer.y > popup.pop_but_2.y - (popup.pop_but_2.height / 2)
                        && game.input.mousePointer.y < popup.pop_but_2.y + (popup.pop_but_2.height / 2))
                {
                    game.canvas.style.cursor = "pointer";
                }
            }
            /*if (popup.pop_cancel.visible)
            {
                if (game.input.mousePointer.x > (game.canvas.width / 2) + this.fix_x + this.CONST_CANCEL_X
                        && game.input.mousePointer.x < (game.canvas.width / 2) + this.fix_x + this.CONST_CANCEL_X + popup.pop_cancel.width
                        && game.input.mousePointer.y > popup.pop_cancel.y
                        && game.input.mousePointer.y < popup.pop_cancel.y + popup.pop_cancel.height)
                {
                    game.canvas.style.cursor = "pointer";
                }
            }*/
            if (popup.pop_sprite_facebook.visible)
            {
                if (game.input.mousePointer.x > popup.pop_sprite_facebook.x - popup.fix_x - (popup.pop_sprite_facebook.width / 2)
                        && game.input.mousePointer.x < popup.pop_sprite_facebook.x - popup.fix_x + (popup.pop_sprite_facebook.width / 2)
                        && game.input.mousePointer.y > popup.pop_sprite_facebook.y - (popup.pop_sprite_facebook.height / 2)
                        && game.input.mousePointer.y < popup.pop_sprite_facebook.y + (popup.pop_sprite_facebook.height / 2))
                {
                    game.canvas.style.cursor = "pointer";
                }
            }
            if (popup.pop_sprite_twitter.visible)
            {
                if (game.input.mousePointer.x > popup.pop_sprite_twitter.x - popup.fix_x - (popup.pop_sprite_twitter.width / 2)
                        && game.input.mousePointer.x < popup.pop_sprite_twitter.x - popup.fix_x + (popup.pop_sprite_twitter.width / 2)
                        && game.input.mousePointer.y > popup.pop_sprite_twitter.y - (popup.pop_sprite_twitter.height / 2)
                        && game.input.mousePointer.y < popup.pop_sprite_twitter.y + (popup.pop_sprite_twitter.height / 2))
                {
                    game.canvas.style.cursor = "pointer";
                }
            }
        }
    }
};





