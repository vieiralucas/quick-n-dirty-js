try {
    JSON.parse('Throw some error');
} catch (e) {
    var x = "It doesn't introduce a new scope, but";
}

console.log(x);
console.log(typeof e); // pq essa porra não existe?