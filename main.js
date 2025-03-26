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
    juizDeFora.heuristica = 240; // Heurística: 240 minutos para o Rio de Janeiro

    const ponteNova = grafo.addVertice("Ponte Nova (MG)");
    ponteNova.heuristica = 180; // Heurística: 180 minutos para o Rio de Janeiro

    const tresRios = grafo.addVertice("Três Rios (RJ)");
    tresRios.heuristica = 90;  // Heurística: 90 minutos para o Rio de Janeiro

    const rioDeJaneiro = grafo.addVertice("Rio de Janeiro (RJ)");
    rioDeJaneiro.heuristica = 0; // Heurística: 0 minutos porque é o destino

    // 3. Criando as arestas (estradas entre as cidades com os respectivos custos)
    grafo.addAresta("Juiz de Fora -> Ponte Nova", juizDeFora, ponteNova, 80);
    grafo.addAresta("Ponte Nova -> Três Rios", ponteNova, tresRios, 120);
    grafo.addAresta("Três Rios -> Rio de Janeiro", tresRios, rioDeJaneiro, 90);
    grafo.addAresta("Juiz de Fora -> Três Rios", juizDeFora, tresRios, 200);
    grafo.addAresta("Ponte Nova -> Rio de Janeiro", ponteNova, rioDeJaneiro, 180);

    // 4. Criando o algoritmo A*
    const algoritmoA = new AlgoritimoA();

    // 5. Buscando o caminho de Juiz de Fora (MG) até Rio de Janeiro (RJ)
    const caminho = algoritmoA.funcaoBuscar(grafo, juizDeFora, rioDeJaneiro);

    // 6. Exibindo o caminho encontrado
    if (caminho) {
        console.log("Caminho encontrado:");
        console.log(caminho.join(" -> "));
    } else {
        console.log("Nenhum caminho encontrado.");
    }
}

// Executando a função main
main();
