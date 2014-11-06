// implementar usando module-pattern e as funções do challenge-1, um módulo que
// contenha a api "quadrado" e "cubo" públicas, valendo!

var module; // implementar essa bosta

// @vieiralucas \o/
module = (function() {
	var potencia = function(expoente) {
		return function(base) {
			return Math.pow(base, expoente); // ok, xitei :D
		}
	};

	var api = {
		quadrado: potencia(2),
		cubo: potencia(3)
	};
	
	return api;
})(); // self invoking function

console.log(module.quadrado(2)); // 4
console.log(module.quadrado(3)); // 9
console.log(module.quadrado(4)); // 16

console.log(module.cubo(2)); // 8
console.log(module.cubo(3)); // 27
console.log(module.cubo(4)); // 64
