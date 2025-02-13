class ListaPedidos {
    constructor() {
        this.produtos = [];
    }
    addProduto(produto) {
        this.produtos.push(produto);
    }
    getAllProdutos() {
        return this.produtos
    }
}