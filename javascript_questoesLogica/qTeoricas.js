
function questao_1(numero, letra) {
    let letras = [];
    //for para repetir a letra passada pela variavel numero de vezes
    for(let i = 0; i < numero; i++) {
        letras.push(letra);
    }
    console.log(letras);
}

function questao_2(normal) {
    let invertida = new Array;
    //Usando for com valor de i pegando do ultimo elemento até o 1
    for(let i = normal.length - 1; i >= 0; i--) {
        invertida.push(normal[i]);
    }
    console.log(invertida);
}

function questao_3(luxo) {

    /*Testando cada caso para saber se tem lixo, caso não tenha
    o retorno é -1 e com isso pula o if correspondete ao lixo*/

    // TESTANDO O COM FALSE
    let lixo = luxo.indexOf(false);
    if(lixo >= 0)
        luxo.splice(lixo, 1);

    // TESTANDO O COM UNDEFINED
    lixo = luxo.indexOf(undefined);
    if(lixo >= 0)
        luxo.splice(lixo, 1);

    // TESTANDO O COM STRING VAZIO
    lixo = luxo.indexOf('');
    if(lixo >= 0)
        luxo.splice(lixo, 1);

    // TESTANDO O COM ZERO
    lixo = luxo.indexOf(0);
    if(lixo >= 0)
        luxo.splice(lixo, 1);

    // TESTANDO O COM NULL
    lixo = luxo.indexOf(null);
    if(lixo >= 0)
        luxo.splice(lixo, 1);
    
    console.log(luxo);
}

questao_1(3, 'a');
questao_2([1, 2, 3, 4]);
questao_3([1, 2, '', undefined])