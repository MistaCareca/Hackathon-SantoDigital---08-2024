function difAbsoluta(array){

    array.sort((a, b) => a - b);

    let menorDiff = array[1] - array[0];
    let grupos = [];

    for(let i = 0; i < array.length + 1; i++){

        const diff = array[i + 1] - array[i];
        
        if(diff < menorDiff){

            menorDiff = diff;

            grupos = [[array[i], array[i + 1]]];

        } else if (diff === menorDiff){

            grupos.push([array[i], array[i + 1]]);

        }
    } 
    return grupos;
}

array = [4, 2, 1, 3];
const resultado = difAbsoluta(array);
console.log(resultado);