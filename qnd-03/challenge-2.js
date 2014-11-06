// implementar duas classes, sendo que uma é herança de outra, e a classe 'filha" deverá sobreescrever um método da classe "pai"

// @vieiralucas
// classe pai
var Animal = function(nome, sexo) {
	this.nome = nome;
	this.sexo = sexo;
}

Animal.prototype.ola = function() {
	console.log('Goar!');
};

// classe filha
var Humano = function(nome, sexo) {
	Animal.call(this, nome, sexo);
}

Humano.prototype = Object.create(Animal.prototype);

Humano.prototype.ola = function() {
	console.log('Olá, meu nome é ' + this.nome + '!');
};
