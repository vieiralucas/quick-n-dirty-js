var count = 4;
function foo() {
    var table = [count];

    /* Constrói a tabela. */
    while (count-- > 0) {
        table.push([]);
    }

    /* Atocha números. */
    for (var count = 1; count < table.length; count++) {
        table[count].push(count);
    }
    return table;
}

foo(); // Qual o retorno?

/**
 * Retorna [undefined]
 * Motivo: count foi redeclarada dentro de foo, 
 * e valerá undefined até ser instanciada dentro do for
 */