@extends($fullscreen ? 'layouts.fullscreen' : 'pages.promo_page_detail')

@section('title', 'Promos')

@section('styles')
    <link rel="stylesheet" href="<% asset('css/content.css') %>">
    <link rel="stylesheet" href="<% asset('css/global.css') %>">
	<link rel="stylesheet" href="<% asset('promo-static/el_super/promo.css') %>">

@endsection

@section('scripts')
    <script src="<% asset('js/games.js') %>"></script>
    <script src="<% asset('promo-static/el_super/js/phaser.min.js') %>"></script>
	<!-- <script src="<% asset('promo-static/el_super/js/jquery-1.12.4.min.js') %>"></script> -->
    <script src="<% asset('promo-static/el_super/src/boot.js') %>"></script>
    <script src="<% asset('promo-static/el_super/src/preload.js') %>"></script>
    <script src="<% asset('promo-static/el_super/src/menu.js') %>"></script>
    <script src="<% asset('promo-static/el_super/src/game.js') %>"></script>
    <script src="<% asset('promo-static/el_super/src/popups.js') %>"></script>
    <script src="<% asset('promo-static/el_super/src/share.js') %>"></script>
    <script src="<% asset('js/games.js') %>"></script>

@endsection


@section('promoContent')
	<style>
        @font-face
        {
            font-family: "danone";
            src: url('<% asset('promo-static/el_super/assets/texts/asap.otf') %>');
            format: "truetype";
        }
		canvas
		{
			-webkit-transform: translateZ(0);
		}
	</style>

    <div id="page" class="promoContent" style="display: none;">
	
	
		<p id = "font" style="font-family: 'danone'">.</p>
        <!-- DIVISADERO -->
        <!-- Empezar partida, "Participar" -->
        <button type="button" id ="participar" style="display: none"></button>
        <!-- Cuando quieres jugar al principio pero no tienes suficientes puntos -->
        <button type="button" id ="pop_nopoints_sumarpuntos" style="display: none"></button>
        <!-- Ha habido un error de conexion -->
        <button type="button" id ="pop_errorconection_contactar" style="display: none"></button>
        <button type="button" id ="pop_errorconection_reintentar" style="display: none"></button>
        <!-- Has perdido la partida. Si pulsas "vamos" se reinicia el juego, y si pulsas "mas promociones" va a las otras promos -->
        <button type="button" id ="pop_lose_vamos" style="display: none"></button>
        <button type="button" id ="pop_lose_maspromociones" style="display: none"></button>
        <!-- Has completado el juego pero no has ganado el premio -->
        <button type="button" id ="pop_win_nopremio_vamos" style="display: none"></button>
		<button type="button" id ="pop_win_nopremio_maspromociones" style="display: none"></button>
        <!-- Has completado el juego y has ganado el premio -->
        <button type="button" id ="pop_win_premio_vamos" style="display: none"></button>
        <button type="button" id ="pop_win_maspromociones" style="display: none"></button>
        <!-- Compartido en FACEBOOK -->
        <button type="button" id ="share_facebook" style="display: none"></button>
        <button type="button" id ="share_twitter" style="display: none"></button>
        <!-- PEINE -->
        <button type="button" id ="pincode_notexist" style="display: none"></button>
        <button type="button" id ="pincode_contactar" style="display: none"></button>
        <button type="button" id ="pincode_yetused" style="display: none"></button>
        <button type="button" id ="pincode_ok_notenoughpoints" style="display: none"></button>
        <button type="button" id ="pincode_ok_enoughpoints" style="display: none"></button>
        <button type="button" id ="pincode_toopinsthismonth" style="display: none"></button>
        <button type="button" id ="pincode_reintentar" style="display: none"></button>
        <button type="button" id ="pincode_backtutorial" style="display: none"></button>
		
		<canvas id="myCanvas" width="800px" height="800px" style="top:0px;position:absolute;z-index:999998;background-color:rgb(0,0,0);top:0px; left:0px;display:none;">
		</canvas>
		
        <script>
            window.onload = function() {
                
                var timeFrame = "";
                this.timeFrame = setInterval(runGame, 100);
                
                function runGame() {
                    
                    if (window.parent.$('#promImgFrame').length > 0)
                    {
                        //console.log("Welcome still exist!");
                    }
                    else
                    {
                        clearInterval(this.timeFrame);
                        var ruta = "";
                        try
                        {
                            $(document).ready(function(){
                                var token = window.parent.document.getElementsByName('csrf-token')[0].getAttribute("content");

								ruta = "<% asset('promo-static/el_super/src/main.js') %>";
								console.log("La ruta es " + ruta);
								
                                $.getScript( "<% asset('promo-static/el_super/src/main.js') %>" )
                                .done(function( script, textStatus ) {
                                    console.log('Starting the game in server');
                                })
                                .fail(function( jqxhr, settings, exception ) {
                                    console.log('Failed to load script');
                                });
                            });
                        }
                        catch (err)
                        {
                            $.getScript( "src/main.js" )
                                .done(function( script, textStatus ) {
                                    console.log('Starting the game in local');
                                    game.MODE_LOCAL = true;
                                })
                                .fail(function( jqxhr, settings, exception ) {
                                    console.log('Failed to load script');
                                });
                        }
                    }
                
                }
            }
        </script>
        
        <!-- peina -->
        <div>
            <form>
                <input id = "peine" type="text" style="display: none; border-radius: 5px;min-width: 0; font-size: 25px; font-family: 'danone'; background: white url(<% asset('promo-static/el_super/assets/popups/peine.png') %>) left no-repeat; text-transform: uppercase;">
            </form>
        </div>

    </div>
@endsection