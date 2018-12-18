$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        var position = scroll*0.10;

        $('.parallax').css({
            'background-position': 'center -' + position + 'px'
        })
        $('.segundoparallax').css({
            'background-position': 'center -' + position + 'px'
        });
    });
});