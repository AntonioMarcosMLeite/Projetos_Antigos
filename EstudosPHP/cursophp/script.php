<?php

session_start();

$categorias = [];
$categorias [] = 'Infantil';
$categorias [] = 'Adolescente';
$categorias [] = 'Adulto';

//print_r ($categorias);

$nome = $_POST['nome'];
$idade = $_POST['idade'];

//var_dump($nome);    
//var_dump($idade);

if(empty($nome))
{
    $_SESSION['mensagem-de-erro'] =  "O nome não pode ser vazio";
    header('location: index.php');
    return;
}

else if (strlen($nome) < 3)
{
    $_SESSION['mensagem-de-erro'] = "O nome deve conter mais de 3 caracteres.";
    header('location: index.php');
    return;
}

else if(strlen($nome) > 40)
{
    $_SESSION['mensagem-de-erro'] = "O nome deve conter mais de 40 caracteres.";
    header('location: index.php');
    return;
}

else if(!is_numeric($idade))
{
    $_SESSION['mensagem-de-erro'] = "informe um valor numérico para a idade.";
    header('location: index.php');
    return;
} 

if($idade >= 6 && $idade <= 12)
{
    for($i = 0; $i < count($categorias); $i++)
       {
            if($categorias[$i] == 'Infantil')
            {
               $_SESSION['mensagem-de-sucesso'] = "O nadador ".$nome. " compete na categoria infantil";
               header('location: index.php');
               return;
            }                
       } 
}
else if($idade >= 13 && $idade <= 18)
{
    for($i = 0; $i < count($categorias); $i++)
       {
            if($categorias[$i] == 'Adolescente')
            {
                $_SESSION['mensagem-de-sucesso'] = "O nadador ".$nome. " compete na categoria Adolescente";
                header('location: index.php');
                return;
            }                
       } 
}
else
{
    for($i = 0; $i < count($categorias); $i++)
       {
            if($categorias[$i] == 'Adulto')
            {
                $_SESSION['mensagem-de-sucesso'] = "O nadador ".$nome. " compete na categoria Adulto";
                header('location: index.php');
                return;
            }
                
       } 
} 