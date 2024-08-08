/*
var nome = "Marcos";
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo";
alert(nome + " tem" + n1 + " anos.");
alert(n1 + n2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.tolowerCase());
console.log(frase.replace("Japão", "Brasil"));

alert ("Seja Bem Vindo " + nome);


var lista = ["maça", "pêra", "laranja"];
lista.push("uva");
lista.pop();


var fruta = {nome="maça", cor="vermelha"}
console.log(fruta.nome);
alert(fruta.cor);

var frutas = [{nome="maça", cor="vermelha"}, {nome="uva", cor="roxa"}]
console.log(frutas);
alert(frutas[1].nome);


var idade = prompt("Qual sua idade");
if(idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};


var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};


var count;
for(count=0; count<=5; count++){
    alert(count);
};


var d = new Date();
alert(d);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());



function soma(n1,n2){
    return n1 + n2;
}

alert(soma(5,10));



var validar = 0;

function validaIdade(idade){
    if(idade >= 18){
        validar = true
    }else {
        validar = false
    }
    return validar;
}

var idade = prompt("Digite sua idade:");
validaIdade(idade);
console.log(validar);

*/

function clicou(){
    //alert("Obrigado por clicar");
    //console.log(document.getElementById("agradecimento"));
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
}

function redirecionar(){
    window.open("http://www.google.com.br/");
    window.location.href = "http://www.google.com.br/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}