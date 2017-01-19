//This file load the resources of Loading Bar and set the scale method of Canvas and max scale.

var boot = {
    preload: function() {
        //New static-promo
        if (!game.MODE_LOCAL)
        {
            this.game.load.path = window.location.origin + "/public/promo-static/" + game.NAME_PROMO + "/"; //"https://alimentasonrisasprew4.housings.nexica.net/public/promo-static/tiro_arco/";
        }
        if (!game.device.desktop)
        {
            game.CINEMASCOPE = false;
        }
        
        //document.body.style.backgroundColor = "#007A7D";
        this.game.stage.backgroundColor = game.COLOR_BASE;
        this.game.load.image('bar_loading', 'assets/loading/bar_loading.png');
        this.game.load.image('bar_loading_border', 'assets/loading/bar_loading_border.png');
        this.game.load.image('logo', 'assets/loading/logo.png');
    },
    create: function() {
        //IMPORTANT: Avoid pause the game if lose the focus.
        //this.game.stage.disableVisibilityChange = true;
        //IMPORTANTE: This is the view of loading, not the final game.
        
        this.game.input.maxPointers = 1;
        this.game.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
        this.game.scale.setShowAll();
        this.game.scale.refresh();
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;

        //Correct size in loading screen.
        if (!game.CINEMASCOPE)
        {
            game.world.setBounds(0, 0, 1252, 498);
            game.scale.setGameSize(881, 498);
            game.camera.x = 185;
            game.FIX_X = 185;
        }
        if (!this.game.device.desktop)
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

        
        var urlParent = window.location.href.toString();

        if (urlParent.indexOf("/es/") >= 0)
        {
            console.log("Castellano");
            game.LANGUAGE = 'es';
        }
        else if (urlParent.indexOf("/ca/") >= 0)
        {
            console.log("Catalan");
            game.LANGUAGE = 'cat';
        }
        else
        {
            console.log("I cant detect LANGUAGE");
        }
        
        //Detect if is App.
        console.log("Detecting if is APP");
        if (urlParent.indexOf("ANDROID") >= 0 || urlParent.indexOf("IOS") >= 0)
        {
            console.log("Yes, it's APP");
            game.APP = true;
        }
        else
        {
            console.log("No, no it's APP");
        }

        //Font.
        document.getElementById("font").style.display = "none";

        game.state.start('Preload');
    },
    
    refreshIframe: function() {
        if (window./*parent.*/matchMedia("(orientation: landscape)").matches)
        {
            game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            
            game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
            
            game.scale.refresh();
        }
        else
        {
            game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

            game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

            game.scale.refresh();
        }
        if (!game.APP && !game.MODE_LOCAL)
        {
            //New static.
            var myCan = document.getElementById("canvas-wrapper");
            myCan.style.width = "100%";
        }
    },
    goFullscreen: function() {
        if (!game.device.iOS)
        {
            if (!game.scale.isFullScreen)
            {
                game.scale.startFullScreen(false);
            }
        }
        else
        {
            if (!game.MODE_LOCAL)
            {
                var black = document.getElementById('myCanvas');
                black.style.display = "block";
                black.style.width = "100%";
                black.style.height = "120%";

                var myCan = document.getElementById("canvas-wrapper");
                myCan.style.position = "absolute";
                myCan.style.top = "0";
                myCan.style.width = "100%";
                myCan.style.height = "100%";
                myCan.style.marginLeft = "-4px";
                myCan.style.zIndex = "999999";
            }
        }
    },
    objectEventClock: {
        numSeconds: 0,
        boolPause: false,
        start: function() {
            setTimeout(function(){
                if (!boot.objectEventClock.boolPause)
                {
                    boot.objectEventClock.numSeconds++;
                    boot.objectEventClock.start();
                }
            }, 1000);  
        },
        pause: function() {
            boot.objectEventClock.boolPause = true;
        },
        resume: function() {
            boot.objectEventClock.boolPause = false;
            boot.objectEventClock.start();
        },
        reset: function() {
            boot.objectEventClock.boolPause = false;
            boot.objectEventClock.numSeconds = 0;
        }
    },
    print: function(text) {
        if (game.CONSOLE)
        {
            console.log(text);
        }
    }
};