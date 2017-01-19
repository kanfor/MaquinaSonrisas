//Create the game.
var game = new Phaser.Game(1252, 498, Phaser.CANVAS, 'canvas-wrapper');
console.log("GAME CREATED");
//Set DEBUG mode.
game.NAME_PROMO = "maquina-de-las-sonrisas";
game.URL_GAME_ES = '/es/sorteos/maquinadelassonrisas.html';
game.URL_GAME_CAT = '/ca/sortejos/maquinadelassonrisas.html';

game.CURRENT_STATE = "main";
game.ADVERT_WAS_SHOWED = false;
game.BSOUND = true;
game.DEBUG = false;
game.MODE_LOCAL = false;
game.NAME_USER = "nonamed";
game.LANGUAGE = "es";
game.IS_SHOWED_ADVERT = false;
game.LOSE_FOCUS = false;
game.HACK_WIN = false;
game.HACK_POINTS = false;
game.URL_CONTACT_ES = '/es/sac';
game.URL_CONTACT_CAT = '/ca/sac';
game.URL_PROMOTION_ES = '/es/sorteos';
game.URL_PROMOTION_CAT = '/ca/sortejos';
game.URL_WHEREISPINCODE_ES = '/es/ahorra/sumar-puntos/qr';
game.URL_WHEREISPINCODE_CAT = '/ca/estalvia/sumar-punts/qr';
game.URL_MOREPOINTS_ES = '/es/ahorra/sumar-puntos';
game.URL_MOREPOINTS_CAT = '/ca/estalvia/sumar-punts';
game.FULLSCREEN = true;
game.COLOR_BASE = '#097CBF';
game.WIDTH2 = 626; //<--- The midle of canvas, 1252 / 2.
game.FIX_X = 185;
game.CINEMASCOPE = true;
game.APP = false;
game.points = "";
game.name = "";
//Setting game states.
game.state.add('Boot', boot);           //Load the bar loading graphic.
game.state.add('Preload', preload);     //Load the resources of the game while bar loading is in progress.
game.state.add('Menu', menu);           //The main menu of the game.
game.state.add('Game', gameplay);       //The gameplay of the game.
//Start the boot state.
game.state.start('Boot');


