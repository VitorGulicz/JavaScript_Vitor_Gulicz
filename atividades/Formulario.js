//executar mascaras
function mascara(o,f){
    //define o objeto e chama a funcao
    objeto=o
    funcao=f
    setTimeout("executaMascara()",1)
}

function executaMascara(){
    objeto.value=funcao(objeto.value)
}

//mascaras
//telefone
function telefone(variavel){
    variavel=variavel.replace(/\D/g,"") //remove caracteres não numericos 
    variavel=variavel.replace(/^(\d\d)(\d)/g,"($1)$2") //adiciona parenteses em volta dos dois primeiros digitos
    variavel=variavel.replace(/(\d{4})(\d)/,"$1-$2") //adiciona hífen entre o quarto e quinto digitos
    return variavel
}



function cnpj(variavel){
    variavel=variavel.replace(/\D/g,"") //remove caracteres não numericos
    variavel=variavel.replace(/(\d{2})(\d)/,"$1.$2") //adiciona ponto entre o segundo e terceiro digitos
    variavel=variavel.replace(/(\d{3})(\d)/,"$1.$2") //adiciona ponto entre o sexto e setimo digitos
    variavel=variavel.replace(/(\d{3})(\d)/,"$1/$2") //adiciona ponto entre o sexto e setimo digitos
    variavel=variavel.replace(/(\d{4})(\d)/,"$1-$2") //adiciona ponto entre o sexto e setimo digitos
    return variavel
}

function nome(variavel){
    variavel=variavel.replace(/\D/,"")
    return variavel
}