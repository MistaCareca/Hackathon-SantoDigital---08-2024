function asteriscos(n) {
    let lista = [];
    for (let i = 1; i < n; i++) {
        lista.push('*'.repeat(i));
    }
    console.log(lista);
}

asteriscos(5);
