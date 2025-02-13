const { v4: uuid } = require("uuid");

class Menu {
    constructor (bebida, ingredientes, preco) {
        this.id = uuid();
        this.bebida = bebida;
        this.ingredientes = ingredientes;
        this.preco = preco;
    }
}

module.exports = Menu;