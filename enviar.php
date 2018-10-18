<?php

	$nome     = $_POST['nome'];
	$email    = $_POST['email'];
	$assunto  = $_POST['assunto'];
	$mensagem = $_POST['msg'];

	mail("","$assunto","$mensagem","FROM:$nome<$email>");
?>
