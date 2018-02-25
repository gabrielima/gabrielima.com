<?php

	$nome=$_POST['nome'];
	$email=$_POST['email'];
	$assunto=$_POST['assunto'];
	$mensagem=$_POST['mensagem'];

	 mail("gabriellima_r@hotmail.com","$assunto","
	 Nome: $nome
	 Email: $email
	 Assunto: $assunto
	 Mensagem: $mensagem","FROM:$nome<$email>");

	 echo "<script>alert("a");</script>";
?>