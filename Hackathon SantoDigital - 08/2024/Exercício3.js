/*
Escreva uma função que retorne todos os subconjuntos de um conjunto de números. 
Por exemplo, se a entrada for [1, 2], a saída deve ser [[], [1], [2], [1, 2]].
*/

function subconjuntos(conjunto) {
    const result = [];
    const totalSubconjuntos = Math.pow(conjunto.length, 2); 

    for (let i = 0; i < totalSubconjuntos; i++) {
        const atual = [];
        for (let j = 0; j < conjunto.length; j++) {
            if (i & (1 << j)) { 
                atual.push(conjunto[j]);
            }
        }
        result.push(atual);
    }

    return result;
}

const conjunto = [1, 2];
const subconjuntosResult = subconjuntos(conjunto);
console.log(subconjuntosResult);
