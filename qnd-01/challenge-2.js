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

// qual é a cagada?