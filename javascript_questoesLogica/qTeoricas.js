class questoesTeoricas {

    questao_1 (numero, letra) {
        let letras = [];
        //for para repetir a letra passada pela variavel numero de vezes
        for(let i = 0; i < numero; i++) {
            letras.push(letra);
        }
        
        return letras;

    }

    questao_2 (normal) {
        let invertida = new Array;
        //Usando for com valor de i pegando do ultimo elemento até o 1
        for(let i = normal.length - 1; i >= 0; i--) {
            invertida.push(normal[i]);
        }

        return invertida;
    }

    corta_indesejado (testado, entrada) {
        let lixo = testado.indexOf(entrada);
        while(lixo != -1) {
            testado.splice(lixo, 1);
            lixo = testado.indexOf(entrada);
        }

        return testado;
    }

    questao_3 (luxo) {

        /*Testando cada caso para saber se tem lixo, caso não tenha
        o retorno é -1 e com isso pula o if correspondete ao lixo*/

        // TESTANDO O COM FALSE
        this.corta_indesejado(luxo, false);

        // TESTANDO O COM UNDEFINED
        this.corta_indesejado(luxo, undefined);

        // TESTANDO O COM STRING VAZIO
        this.corta_indesejado(luxo, '');

        // TESTANDO O COM ZERO
        this.corta_indesejado(luxo, 0);
        
        luxo = luxo.filter(function tirarNulo(luxo) { return luxo != null });

        return luxo;
    }

    questao_4 (entradaArray) {
        let mapa = new Map();

        for(let i = 0; i < entradaArray.length; i++) {
            mapa.set(entradaArray[i][0], entradaArray[i][1])
        }

        return mapa;
    }

    questao_5 (vetor, retirado1, retirado2) {
        this.corta_indesejado(vetor, retirado1);
        this.corta_indesejado(vetor, retirado2);

        return vetor;
    }

    questao_6 (duplicado) {
        let unico = new Array;
        let letra = undefined;

        for(let i = 0; i < duplicado.length;) {
            letra = duplicado[i];
            unico.push(letra);
            duplicado = this.corta_indesejado(duplicado, letra);
        }

        return unico;
    }

    questao_7 (vetor1, vetor2) {
        let string_v1 = vetor1.toString();
        let string_v2 = vetor2.toString();
        
        return string_v1 == string_v2;
    }

    questao_8 (vetorx2) {
        let vetor_unico = new Array;
        let mini_vetor = new Array;


        for (let i = 0; i < vetorx2.length; i++ ) {

            if( typeof(vetorx2[i]) != 'object') {
                vetor_unico.push(vetorx2[i]);
            }
            else {
                mini_vetor = vetorx2[i];
                for (let j = 0; j < mini_vetor.length; j++ ) {
                    vetor_unico.push(mini_vetor[j]);
                }  
            }
        }

        return vetor_unico;
    }

    questao_9(vetor, divisao) {
        let vetor_vetorizado = [];
        for(let i = 0; i < vetor.length; i += divisao) {
            vetor_vetorizado.push(vetor.slice(i, i + divisao));
        }

        return vetor_vetorizado;
    }

    questao_10(vetor1, vetor2) {
        let numeros_repetidos = new Array;
        let numero_testado = undefined;

        for(let i = 0; i < vetor1.length; i++) {
            numero_testado = vetor1[i];
            if(vetor2.includes(numero_testado))
                numeros_repetidos.push(numero_testado);
        }
            numeros_repetidos = this.questao_6(numeros_repetidos)
        return numeros_repetidos;
    }

}

resposta_qT = new questoesTeoricas;

resposta_q1 = resposta_qT.questao_1(3, 'a')
console.log(resposta_q1);

resposta_q2 = resposta_qT.questao_2([1, 2, 3, 4])
console.log(resposta_q2);

resposta_q3 = resposta_qT.questao_3([1, 2, '', undefined])
console.log(resposta_q3);

resposta_q4 = resposta_qT.questao_4([["c",2], ["d",4]]);
console.log(resposta_q4);

resposta_q5 = resposta_qT.questao_5([5,4,3,2,5], 5, 3);
console.log(resposta_q5);

resposta_q6 = resposta_qT.questao_6([1, 2, 3, 3, 2, 4, 5, 4, 7, 3]);
console.log(resposta_q6);

resposta_q7 = resposta_qT.questao_7([1,2,3,4], [1,2,3,4]);
console.log(resposta_q7);

resposta_q8 = resposta_qT.questao_8([1, 2, [3], [4, 5]]);
console.log(resposta_q8);

resposta_q9 = resposta_qT.questao_9([1, 2, 3, 4, 5], 2);
console.log(resposta_q9);

resposta_q10 = resposta_qT.questao_10([6, 8], [8, 9]);
console.log(resposta_q10);
