$(document).ready(function(){

    $(".hamburger").click(function(){
        $("#tooplate-menu").slideToggle(400);
    });

    $(window).resize(function() {
        if( $(window).width() > 645 ) {  //Note: the width is set to 645 to compensate for the width of the browser itself
        $('#tooplate-menu').show();
    }
    });

    $(window).resize(function() {
        if( $(window).width() < 645 ) {  //Note: the width is set to 645 to compensate for the width of the browser itself
        $('#tooplate-menu').hide();
    }
    });
});