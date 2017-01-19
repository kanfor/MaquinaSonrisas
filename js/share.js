Share = {
    
    popupTwiter: "",
    timerTwiter: "",
    popupFacebook: "",
    timerFacebook: "",

    facebook: {
        share: function() {
            var url = 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.origin + '/public/promo-static/' + game.NAME_PROMO + '/facebook_es.html?v=10';
            if (game.LANGUAGE === 'cat')
            {
                url = 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.origin + '/public/promo-static/' + game.NAME_PROMO + '/facebook_cat.html?v=10';
            }
            var height = 250;
            var width = 550;
            var top = 0;
            var left = 0;
            Share.popupFacebook = window.open(url, '', 'left=200,top='+top+',width='+width+',height='+height+',personalbar=0,toolbar=0,scrollbars=0,resizable=0');
            Share.timerFacebook = setInterval(Share.closeFacebook, 500);
        }
    },
    
    closeFacebook: function() {
        if (Share.popupFacebook.closed)
        {   boot.print("Shared perfectly in Facebook");
            document.getElementById('share_facebook').click();
            /*switch (gameVars.numCurrentLevel)
            {
                case 1:
                    boot.print("Shared perfectly in Facebook in level1");
                    document.getElementById('share_facebook_l1').click();
                    break;
                case 2:
                    boot.print("Shared perfectly in Facebook in level2");
                    document.getElementById('share_facebook_l2').click();
                    break;
                case 3:
                    boot.print("Shared perfectly in Facebook in level3");
                    document.getElementById('share_facebook_l3').click();
                    break;
            }*/
            clearInterval(Share.timerFacebook);
        }
    },

    twitter: {
        share: function() {
            //12/07/2016
            //Recuerda anadir en el html el ?99 al final del .jpg para que recargue la imagen. No hace falta ponerlo en el validor.
            var url = 'http://twitter.com/intent/tweet?url=' + window.location.origin + '/public/promo-static/' + game.NAME_PROMO + '/twitter_es.html'; //<--- Si no se corresponde con el real, no sale la imagen en el twit. Llama al que esta guardado en Twitter.
            if (game.LANGUAGE === 'cat')
            {
                url = 'http://twitter.com/intent/tweet?url=' + window.location.origin + '/public/promo-static/' + game.NAME_PROMO + '/twitter_cat.html';
            }
            var text = "Sortemos 5 cheques de 100€ cada día"; //<--- Sale en el twit.
            if (game.LANGUAGE === 'cat')
            {
                text = "Sortegem 5 xecs de 100€ cada dia.";  //<--- Sale en el twit.
            }
            var height = 250;
            var width = 550;
            var top = 0;
            var left = 0;
            Share.popupTwiter = window.open(url+'&text='+encodeURIComponent(text), '', 'left=200,top='+top+',width='+width+',height='+height+',personalbar=0,toolbar=0,scrollbars=0,resizable=0');
            Share.timerTwiter = setInterval(Share.closeTwiter, 500);
        }
    },
    
    closeTwiter: function() {
        if (Share.popupTwiter.closed)
        {
            boot.print("Shared perfectly in Twitter");
            document.getElementById('share_twitter').click();
            /*switch (gameVars.numCurrentLevel)
            {
                case 1:
                    boot.print("Shared perfectly in Twitter in level1");
                    document.getElementById('share_twitter_l1').click();
                    break;
                case 2:
                    boot.print("Shared perfectly in Twitter in level2");
                    document.getElementById('share_twitter_l2').click();
                    break;
                case 3:
                    boot.print"Shared perfectly in Twitter in level3");
                    document.getElementById('share_twitter_l3').click();
                    break;
            }*/
            clearInterval(Share.timerTwiter);
        }
    }
};
