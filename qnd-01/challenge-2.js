var addEvents = function() {
    var buttons = document.getElementsByTagName("button");

    var acionar = function(indice) {
        alert("Botão " + indice + " acionado!");
    };

    for(var i = 0; i < buttons.length; i++) {
        var button = buttons[i];
        button.onclick = function() {
            acionar(i);
        };
    }
};

addEvents();

// qual é a cagada?

//@vieiralucas
// Quando o botão for clicado o for ja vai ter terminado,
// logo o valor de i será buttons.length + 1, e para todos os botões
// que forem clicados será exibida a mesma mensagem: "Botão " + ultimo_valor_i + " acionado!"
