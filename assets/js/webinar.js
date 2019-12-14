$(document).ready(function(){

    $('button.resize').click(function(){
        var thisPlayer = $(this).parents('.player');
        var otherPlayers = $('.player').not(thisPlayer);

        if(thisPlayer.hasClass('small-screen')){
            $('.player').removeClass('fullscreen');
            $('.player').removeClass('small-screen');
        } else {
            thisPlayer.addClass('fullscreen');
            otherPlayers.addClass('small-screen');
        }
    });

});