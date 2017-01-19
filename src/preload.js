//You must put here all resources of the game.

var preload = {
    spriteLoading: "",
    spriteLoadingBorder: "",
    preload: function() {
        if (!game.CINEMASCOPE)
        {
            game.camera.x = 185;
        }
        else
        {
            game.camera.x = 0;
        }

        //LOAD RESOURCES OF THE GAME//
        game.load.spritesheet('bombilla_red', 'assets/gfx/game/bombillas_red.png', 200, 161);
        game.load.spritesheet('bombilla_blue', 'assets/gfx/game/bombillas_blue.png', 200, 161);
        game.load.spritesheet('bombilla_blue2', 'assets/gfx/game/bombillas_blue2.png', 200, 161);
        game.load.image('machine', 'assets/gfx/game/maquina.png');
        game.load.image('background', 'assets/gfx/background/background.jpg');
        game.load.image('father', 'assets/gfx/game/father.png');
        game.load.image('coin', 'assets/gfx/game/coin.png');
        game.load.image('redball', 'assets/gfx/game/ball_red.png');
        game.load.image('white', 'assets/gfx/game/white.png');
        game.load.spritesheet('items', 'assets/gfx/game/items.png', 200, 200);

        if (this.game.LANGUAGE === 'es')
        {
            game.load.image('rotulo', 'assets/gfx/game/es/rotulo.png');
            game.load.image('tutorial', 'assets/gfx/game/es/tutorial.png');
            //Peine.
            this.game.load.image('peine_background', 'assets/gfx/background/es/peine.png');
        }
        else if (this.game.LANGUAGE === 'cat')
        {
            //Peine.
            this.game.load.image('peine_background', 'assets/gfx/background/es/peine.png');
        }
        
        //SOUNDS AND MUSIC.
        this.game.load.spritesheet('sound_icon', 'assets/gfx/background/sound.png', 53, 53);
        this.game.load.audio('bombillas', 'assets/sounds/bombillas.mp3');
        this.game.load.audio('play', 'assets/sounds/play.mp3');
        this.game.load.audio('stop', 'assets/sounds/stop.mp3');
        this.game.load.audio('push', 'assets/sounds/push.mp3');
        this.game.load.audio('rain_coins', 'assets/sounds/rain_coins.mp3');
        this.game.load.audio('machine', 'assets/sounds/machine.mp3');
        this.game.load.audio('finish_tutorial', 'assets/sounds/finish_tutorial.mp3');
        
        if (!this.game.device.desktop)
        {
            this.game.load.image('black_rect', 'assets/gfx/tutorial/black.png');
            if (this.game.LANGUAGE === 'es')
            {
                this.game.load.image('advert', 'assets/gfx/tutorial/es/advert.png');
            }
            else if (this.game.LANGUAGE === 'cat')
            {
                this.game.load.image('advert', 'assets/gfx/tutorial/cat/advert.png');
            }
            this.game.load.image('bt_cancel', 'assets/gfx/background/close.png');
            this.game.load.image('rotate_mobile', 'assets/gfx/tutorial/mobile.png');
        }
        
        //POPUPS.
        this.game.load.image('pop_small', 'assets/popups/pop_small.png');
        this.game.load.image('pop_big', 'assets/popups/pop_big.png');
        this.game.load.image('pop_bar', 'assets/popups/pop_bar.png');
        this.game.load.image('pop_cancel', 'assets/popups/pop_cancel.png');
        this.game.load.image('pop_but_blue', 'assets/popups/pop_but_blue.png');
        this.game.load.image('pop_but_grey', 'assets/popups/pop_but_grey.png');
        this.game.load.image('pop_icon_ko', 'assets/popups/modal-ko.png');
        this.game.load.image('pop_icon_ok', 'assets/popups/modal-ok.png');
        this.game.load.image('pop_icon_lose', 'assets/popups/popup_perdedor.png');
        this.game.load.image('pop_icon_paso1', 'assets/popups/paso_nivel.png');
        this.game.load.image('pop_icon_paso2', 'assets/popups/paso_nivel2.png');
        this.game.load.image('pop_icon_paso3', 'assets/popups/paso_nivel3.png');
        this.game.load.image('pop_icon_win1', 'assets/popups/level1.png');
        this.game.load.image('pop_icon_win2', 'assets/popups/level2.png');
        this.game.load.image('pop_icon_win3', 'assets/popups/level3.gif');
        this.game.load.spritesheet('pop_check', 'assets/popups/checkbox.png', 28, 26);
        this.game.load.spritesheet('gif', 'assets/popups/gif.png', 169, 111);
        //Social nets.
        this.game.load.image('pop_facebook', 'assets/popups/facebook.png');
        this.game.load.image('pop_twitter', 'assets/popups/twitter.png');
        
        //Clock.
        this.game.load.image('clock_loading', 'assets/gfx/tutorial/clock.png');
        
        //Peine.
        this.game.load.image('peine', 'assets/popups/peine.png');
        this.game.load.image('sumar_puntos', 'assets/popups/sumar_puntos.png');
        
        //Press screen in mobile.
        if (this.game.LANGUAGE === 'es')
        {
            this.game.load.image('press', 'assets/loading/press_es.png');
        }
        else if (this.game.LANGUAGE === 'cat')
        {
            this.game.load.image('press', 'assets/loading/press_ca.png');
        }
    },
    create: function() {
        if (game.device.desktop)
        {
            game.state.start('Menu');
        }
        else
        {
            preload.spriteLoading.visible = false;
            preload.spriteLoadingBorder.visible = false;
            game.input.onDown.add(preload.runFullsreenMobile, this);
            preload.press_screen = this.game.add.sprite(game.WIDTH2, (this.game.canvas.height / 2) + 80,'press');
            preload.press_screen.anchor.setTo(0.5);
        }
    },
    runFullsreenMobile: function() {
        boot.goFullscreen();
        game.state.start('Menu');
    },
};
