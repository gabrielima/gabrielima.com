$(document).ready(function () {

    $('.link').click(function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $(this.getAttribute('href')).offset().top + 10
        }, 1200);
    });


    $('#ajax_form').submit(function (e) 
    {
    	var urlData = {
	        nome     : $('#nome').val(),
	        email    : $('#email').val(),
	        assunto  : $('#assunto').val(),
	        msg      : $('#mensagem').val()
    	}


        $.ajax({
            type: "POST",
            url: "enviar.php",
            async: true,
            data: urlData,
            success: function (data) {
                alert("Mensagem enviada com sucesso.");
            },
            error: function() {
                alert("Erro no envio na mensagem.");
            }            
        });
        
        e.preventDefault();
    });

});