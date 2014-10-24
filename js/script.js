$(document).ready(function(){

    $(".hamburger").click(function(){
        $("#tooplate-menu").slideToggle(400);
    });

    $(window).resize(function() {
        if( $(window).width() > 645 ) {
        $('#tooplate-menu').show();
    }
    });
});