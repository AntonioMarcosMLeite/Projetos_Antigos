
	var nota1, nota2, nota3, nota4, resultado;
	
	function calculaMedia(){
		
	nota1 = media.nota1.value;
	nota1 = parseFloat(nota1);
    nota2 = media.nota2.value
	nota2 = parseFloat(nota2);
    nota3 = media.nota3.value;
	nota3 = parseFloat(nota3);
    nota4 = media.nota4.value;
	nota4 = parseFloat(nota4);
	
	resultado = (nota1 + nota2 + nota3 + nota4) / 4;
	media.resultado.value = resultado;
	
	
	}
 
