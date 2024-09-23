import { verificarListaComprados } from "./verificarListaComprados.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const excluirItem = (elemento) => {
    const listaDeCompras = document.getElementById("lista-de-compras")
    const listaComprados = document.getElementById("lista-comprados")

    const confirmacao = confirm("Tem certeza que deseja escluir esse item?")

    if (confirmacao){
        elemento.remove();
        
        verificarListaVazia(listaDeCompras);
        verificarListaComprados(listaComprados);
    } 
}

export { excluirItem };