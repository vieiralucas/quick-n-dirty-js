// implementar uma "classe" com atributos/métodos privados

// @vieiralucas

var Classe = function() {

	this.bar = 'bar'; // atributo publico
	var foo = 'foo'; // atributo privado

	// metodos privados
	var bar = function() {
		foo = 'bar';
	}

	// métodos publicos
	this.getFoo = function() {
		return foo;
	};
	this.setFoo = function(newFoo) {
		foo = newFoo;
	};
	this.toBar = function() {
		return bar();
	};
}

var obj = new Classe();

console.log(obj.bar);
console.log(obj.getFoo());
obj.setFoo('bar');
console.log(obj.getFoo());
obj.toBar();
console.log(obj.getFoo());