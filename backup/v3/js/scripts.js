$( document ).ready(function() {
    $('#inicio').css('height', $(window).height());
});

$('#botao-inicio').click(function() {
    $("html,body").animate({
        scrollTop: $('#inicio').offset().top -70
    }, 2000);
}); 

$('#botao-sobre').click(function() {
    $("html,body").animate({
        scrollTop: $('#sobre').offset().top -55
    }, 2000);
}); 

$('#botao-portfolio').click(function() {
    $("html, body").animate({
        scrollTop: $('#portfolio').offset().top -55
    }, 2000);
}); 

$('#botao-contato').click(function() {
    $("html,body").animate({
        scrollTop: $('#contato').offset().top -70
    }, 2000);
}); 


$(document).ready( function(){ 
    $('#submit').click( function(){ 
        var nome  = $('#nome').val();
        var email = $('#email').val();
        var assunto = $('#assunto').val();
        var msg   = $('#mensagem').val();


        var urlData = "&nome=" + nome +
        "&email=" + email +
        "&assunto=" + assunto +
        "&msg=" + msg ;

        $.ajax({
             type: "POST",
             url: "../enviar.php", 
             async: true,
             data: urlData 
         });
    });
});


$(document).ready(function(){
    
    var nav = $('header');
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > ($(window).height() - 80))
        {
            nav.addClass("f-nav");
        } 
        else 
        {
            nav.removeClass("f-nav");
        }
    });
});