<?php 
    session_start();
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Formulário de Inscrição</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="">
    <meta name="description" content="">
</head>
<body>
    <p><b>Formulário de Inscrição de Competidores</b></p>

    <form action="script.php" method="post">
        <?php
             $mensagemDeSucesso = isset($_SESSION['mensagem-de-sucesso']) ? $_SESSION['mensagem-de-sucesso'] : ''; 
             if(!empty($mensagemDeSucesso))
             {
                 echo $mensagemDeSucesso;
             }

             $mensagemDeErro = isset($_SESSION['mensagem-de-erro']) ? $_SESSION['mensagem-de-erro'] : ''; 
             if(!empty($mensagemDeErro))
             {
                 echo $mensagemDeErro;
             }
        ?>
        <p>Seu Nome: <input type="text" name="nome" /></p>
        <p>Sua Idade: <input type="text" name="idade" /></p>
        <p><input type="submit" value="Enviar" /></p>
    </form>       
</body>
</html>
  