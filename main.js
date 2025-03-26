import Vertice from "./Vertice";
import Aresta from "./Aresta";
import Grafo from "./Grafo";
import AlgoritimoA from "./AlgoritimoA";
import Rastreador from "./Rastreador";

// Função principal
function main() {
    // 1. Criando o grafo
    const grafo = new Grafo();

    // 2. Criando os vértices (cidades)
    const juizDeFora = grafo.addVertice("Juiz de Fora (MG)");
    juizDeFora.heuristica = 240;

    const ponteNova = grafo.addVertice("Ponte Nova (MG)");
    ponteNova.heuristica = 180;
    const tresRios = grafo.addVertice("Três Rios (RJ)");
    tresRios.heuristica = 90; 

    const rioDeJaneiro = grafo.addVertice("Rio de Janeiro (RJ)");
    rioDeJaneiro.heuristica = 0; 

    grafo.addAresta("Juiz de Fora -> Ponte Nova", juizDeFora, ponteNova, 80);
    grafo.addAresta("Ponte Nova -> Três Rios", ponteNova, tresRios, 120);
    grafo.addAresta("Três Rios -> Rio de Janeiro", tresRios, rioDeJaneiro, 90);
    grafo.addAresta("Juiz de Fora -> Três Rios", juizDeFora, tresRios, 200);
    grafo.addAresta("Ponte Nova -> Rio de Janeiro", ponteNova, rioDeJaneiro, 180);

    const algoritmoA = new AlgoritimoA();

    const caminho = algoritmoA.funcaoBuscar(grafo, juizDeFora, rioDeJaneiro);

    if (caminho) {
        console.log("Caminho encontrado:");
        console.log(caminho.join(" -> "));
    } else {
        console.log("Nenhum caminho encontrado.");
    }
}

main();
