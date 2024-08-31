function subconjuntos(conjunto, min_size = 0, max_size = conjunto.length, sort_subsets = false, distinct_only = false) {
    const result = [];
    const totalSubconjuntos = Math.pow(2, conjunto.length); 

    for (let i = 0; i < totalSubconjuntos; i++) {
        const atual = [];
        for (let j = 0; j < conjunto.length; j++) {
            if (i & (1 << j)) { 
                atual.push(conjunto[j]);
            }
        }
        if (atual.length >= min_size && atual.length <= max_size) {
            if (distinct_only) {
                const sortedSubset = atual.slice().sort((a, b) => a - b);
                if (!result.some(sub => JSON.stringify(sub) === JSON.stringify(sortedSubset))) {
                    result.push(sortedSubset);
                }
            } else {
                result.push(atual);
            }
        }
    }

    if (sort_subsets) {
        result.sort((a, b) => a.length - b.length);
    }

    return result;
}

const conjunto1 = [1, 2];
console.log("Subconjuntos sem limites:", subconjuntos(conjunto1));

const conjunto2 = [1, 2, 3];
console.log("Subconjuntos com min_size = 1 e max_size = 2, sorted e distinct_only:", subconjuntos(conjunto2, 1, 2, true, true));

const conjunto3 = [1, 2, 3];
console.log("Subconjuntos com min_size = 2 e max_size = 3, sorted e distinct_only:", subconjuntos(conjunto3, 2, 3, true, false));
