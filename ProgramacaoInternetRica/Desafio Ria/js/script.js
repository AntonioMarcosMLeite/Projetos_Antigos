
//salvar dados do formulario em variaveis

$(document).ready(function(){

	$('#salvar').click(function(){
		//capturou dados da tela
		var nome = $('#nome').val();
		var profissao = $('#profissao').val();
		var salario = $('#salario').val();
		var telefone = $('#telefone').val();
	
		//salavou na tabela
		$('#tabela').show();
		$('#tabela').find('tbody').append('<tr><td>' + nome +
		'<td>'+profissao+'</td> <td>'+telefone+ '</td> <td>'+ salario +'</td></tr>');
		
		//limpu dados dos campos
		$('#nome').val(''),
		$('#profissao').val(''),
		$('#telefone').val(''),
		$('#salario').val('');
		$('#nome').focus();
	});
 });

 //limpar campos do formulario
$(document).ready(function(){
	$('#cancelar').click(function(event){
		$('#nome').val(''),
		$('#profissao').val(''),
		$('#telefone').val(''),
		$('#salario').val('');
		
	});
 	
});


// validar Nome
function validaNome(e){
	tecla = event.keyCode;
		if (tecla >= 33 && tecla <= 64 
			|| tecla >= 91 && tecla <= 93 
			|| tecla >= 123 && tecla <= 159 
			|| tecla >= 162 && tecla <= 191 ){ 
			return false;
		}else{
			return true;
			}
};

//coloca tudo digitado em maiuscula
function validaMaiuscula(z){
	v = z.value.toUpperCase();
	z.value = v;
};

//valida formato da mascara do telefone	
function mascaraTelefone(mascara, documento){
  var i = documento.value.length;
  var saida = mascara.substring(0,1);
  var texto = mascara.substring(i)
  
  if (texto.substring(0,1) != saida){
            documento.value += texto.substring(0,1);
  }
  
};

//coloca mascara formato moesda
function MascaraMoeda(objTextBox, SeparadorMilesimo, SeparadorDecimal, e){
    var sep = 0;
    var key = '';
    var i = j = 0;
    var len = len2 = 0;
    var strCheck = '0123456789';
    var aux = aux2 = '';
    var whichCode = (window.Event) ? e.which : e.keyCode;
    if (whichCode == 13) return true;
    key = String.fromCharCode(whichCode); // Valor para o código da Chave
    if (strCheck.indexOf(key) == -1) return false; // Chave inválida
    len = objTextBox.value.length;
    for(i = 0; i < len; i++)
        if ((objTextBox.value.charAt(i) != '0') && (objTextBox.value.charAt(i) != SeparadorDecimal)) break;
    aux = '';
    for(; i < len; i++)
        if (strCheck.indexOf(objTextBox.value.charAt(i))!=-1) aux += objTextBox.value.charAt(i);
    aux += key;
    len = aux.length;
    if (len == 0) objTextBox.value = '';
    if (len == 1) objTextBox.value = '0'+ SeparadorDecimal + '0' + aux;
    if (len == 2) objTextBox.value = '0'+ SeparadorDecimal + aux;
    if (len > 2) {
        aux2 = '';
        for (j = 0, i = len - 3; i >= 0; i--) {
            if (j == 3) {
                aux2 += SeparadorMilesimo;
                j = 0;
            }
            aux2 += aux.charAt(i);
            j++;
        }
        objTextBox.value = '';
        len2 = aux2.length;
        for (i = len2 - 1; i >= 0; i--)
        objTextBox.value += aux2.charAt(i);
        objTextBox.value += SeparadorDecimal + aux.substr(len - 2, len);
    }
    return false;
};


$(document).ready(function(){
	$('#nome').blur(function(event){
				
		if($("#nome").val()==""){ 
			$('#salvar').attr("disabled",true);
			alert("Digite o nome."); 
			
			$('#nome').focus();
		}else{
			$('#salvar').attr("disabled",false);
			
		}			
		
	});
	
	$('#profissao').blur(function(event){
				
		if($("#profissao").val()==""){ 
			$('#salvar').attr("disabled",true);
			alert("Digite a profissão."); 
			
			$('#profissao').focus();
		}else{
			$('#salvar').attr("disabled",false);
			
		}			
		
	});
 	
	$('#telefone').blur(function(event){
				
		if($("#telefone").val()==""){ 
			$('#salvar').attr("disabled",true);
			alert("Digite o telefone."); 
			
			$('#telefone').focus();
		}else{
			$('#salvar').attr("disabled",false);
			
		}			
		
	});
	
	$('#salario').blur(function(event){
				
		if($("#salario").val()==""){ 
			$('#salvar').attr("disabled",true);
			alert("Digite o sálario."); 
			
			$('#salario').focus();
		}else{
			$('#salvar').attr("disabled",false);
			
		}			
		
	});
});

function verificaNumero(e) {
                if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                    return false;
                }
            }
             
            $(document).ready(function() {
                $("#telefone").keypress(verificaNumero);
                $("#salario").keypress(verificaNumero);
              
            });




