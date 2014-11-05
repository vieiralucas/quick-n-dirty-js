try {
    JSON.parse('Throw some error');
} catch (e) {
    var x = "It doesn't introduce a new scope, but";
}

console.log(x);
console.log(typeof e); // pq essa porra não existe?

// @vieiralucas
// Porque um bloco catch funciona de uma forma única
// é criado uma variável que recebe o objeto da exceção capturada
// e essa mesma variável é destruida ao final do bloco catch 