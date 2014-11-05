var foo = function() {
    if (true) {
        function bar () {
            console.log("true");
        }
    } else {
        function bar () {
            console.log("false");
        }
    }
    console.dir(bar);
    return bar;
};

var fn = foo();
fn(); // wtf?!

// @vieiralucas
// Declaração de funções ocorrem antes da execução do script
// Logo a declaração de dentro do else sobrescreve a declaração de dentro do if