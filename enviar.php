<?php

  $nome=$_POST['nome'];
  $email=$_POST['email'];
  $assunto=$_POST['assunto'];
  $mensagem=$_POST['mensagem'];

  $ch = curl_init();

  curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
  // Colocar a API key aqui
  curl_setopt($ch, CURLOPT_USERPWD, 'api:key-6nu71dw--i4ey50558y-djc7qak2l702');
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

  curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
  // Colocar a url que o mailgun te oferece entre /v2/ .. /messages
  curl_setopt($ch, CURLOPT_URL, 'https://api.mailgun.net/v2/api.mailgun.net/v2/messages');
  curl_setopt($ch, CURLOPT_POSTFIELDS, array('from' => '$nome, $email',
                                             'to' => 'gabriellima_r@hotmail.com',
                                             'subject' => $assunto,
                                             'text' => $mensagem, 
                                             ));

  $result = curl_exec($ch);
  curl_close($ch);
>