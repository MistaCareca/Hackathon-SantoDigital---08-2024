function difAbsoluta(array, allow_duplicates, sorted_pairs, unique_pairs) {
    if (sorted_pairs) {
        array.sort((a, b) => a - b);
    }

    let menorDiff = Math.abs(array[1] - array[0]);
    let grupos = [];
    
    for (let i = 0; i < array.length - 1; i++) {
        const diff = Math.abs(array[i + 1] - array[i]);

        if (diff < menorDiff) {
            menorDiff = diff;
            grupos = [[array[i], array[i + 1]]];
        } else if (diff === menorDiff) {
            if (!allow_duplicates && array[i] === array[i + 1]) {
                grupos = [[array[i], array[i + 1]]];
            } else {
                grupos.push([array[i], array[i + 1]]);
            }
        }
    }

    if (unique_pairs) {
        grupos = grupos.map(par => par.sort((a, b) => a - b))
                       .map(par => JSON.stringify(par))
                       .filter((v, i, a) => a.indexOf(v) === i)
                       .map(v => JSON.parse(v));
    }

    return grupos;
}

// Testes
let array1 = [4, 2, 2, 1, 3];
console.log("allow_duplicates = False:", difAbsoluta(array1, false, true, false)); 
// Esperado: [ [ 2, 2 ] ]  APROVADO

let array2 = [4, 2, 1, 3];
console.log("sorted_pairs = True:", difAbsoluta(array2, true, true, false)); 
// Esperado: [ [ 1, 2 ], [ 2, 3 ], [ 3, 4 ] ] APROVADO

let array3 = [4, 2, 1, 3];
console.log("unique_pairs = True:", difAbsoluta(array3, true, true, true)); 
// Esperado: [ [ 1, 2 ], [ 2, 3 ], [ 3, 4 ] ] APROVADO

let array4 = [4, 2, 2, 1, 3];
console.log("Todos juntos:", difAbsoluta(array4, false, true, true)); 
// Esperado: [ [ 2, 2 ] ] APROVADO
