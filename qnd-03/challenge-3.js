// implementar duas classes, sendo que uma é herança de outra, e a classe "filha" deverá chamar um método da classe "pai"

// @vieiralucas
// classe pai
var Animal = function(nome, sexo, idade) {
	this.nome = nome;
	this.sexo = sexo;
	this.idade = idade;
}

Animal.prototype.ola = function() {
	console.log('Goar!');
};

Animal.prototype.aniversario = function() {
	return ++this.idade;
};

// classe filha
var Humano = function(nome, sexo, idade) {
	Animal.call(this, nome, sexo, idade);
}

Humano.prototype = Object.create(Animal.prototype);

Humano.prototype.ola = function() {
	console.log('Olá, meu nome é ' + this.nome + '!');
};

Humano.prototype.aniversario = function() { // que criativo --'
	console.log(this.nome + " acaba de fazer aniversário!! \\o/");
	return Animal.prototype.aniversario.call(this);
};
