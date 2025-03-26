class AlgoritimoA {
    funcaoBuscar(custos, origem, meta) {  
        var abertos = new FilaOrdenadaPorCusto(); 
        var atual;
        var fechados = new Map();
        
        abertos.Adicionar(new Rastreador(origem, null, 0));
        
        while (abertos.Primeiro !== null) {
            atual = abertos.Primeiro;
            
            if (atual.vertice === meta) {
                var caminho = [];
                while (atual !== null) {
                    caminho.push(atual.vertice.valor); 
                    atual = atual.anterior;
                }
                caminho.reverse(); 
                return caminho;
            } else {
                fechados.set(atual.vertice, atual);
                abertos.Remover();
                
                atual.vertice.arestas.forEach(aresta => {
                    var vizinho = null;
                    for (var i = 0; i < aresta.vertices.length; i++) {
                        if (aresta.vertices[i] !== atual.vertice) {
                            vizinho = aresta.vertices[i];
                            break;
                        }
                    }

                    if (vizinho !== null && !fechados.has(vizinho)) {
                        var custoAresta = aresta.custo;
                        var novoCusto = atual.custoAtual + custoAresta;
                        var heuristica = vizinho.heuristica;
                        
                        if (!abertos.Contem(vizinho)) {
                            abertos.Adicionar(new Rastreador(vizinho, atual, novoCusto));
                        } else {
                            if (abertos.Get(vizinho).custo > novoCusto) {
                                abertos.Get(vizinho).custoAtual = novoCusto;
                                abertos.Get(vizinho).anterior = atual;
                            }
                        }
                    }
                });
            }
        }
        
        return null; 
    }
}
