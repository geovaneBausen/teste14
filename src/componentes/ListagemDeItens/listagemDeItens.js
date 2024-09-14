//componente pai

import React, { useState, useEffect } from 'react';// Importa hooks do React para gerenciar estado e efeitos.
import styles from "./listagemDeItens.module.css"
import ItemCard from "../ItemCard/itemCard";
import Loading from "../Loading/loading"
import fetchProducts from '../api/fetchProducts';
import Busca from "../Busca/busca";


function ListagemDeItens() {

  const [items, setItems] = useState([]);// Estado para Armazenar a lista de itens recebidos da API.
  const [loading, setLoading] = useState(true);// Estado para controlar a exibição do componente de carregamento.
  const [filteredItems, setFilteredItems] = useState([]); // // Estado para itens filtrados pela busca

    //useEffect é executado após o componente ser renderizado.
    //Faz uma requisição à API para buscar itens quando o componente é montado.
    //Atualiza os estados items, filteredItems e loading com os dados da API.

  useEffect(() => {
    fetchProducts('Livros de filosofia egipcia')
      .then((response) => {
        // OS DADOS ESTÃO VINDO DA API COMO RESPOSTA DA FUNÇÃO fetchProducts
        //console.log("Resposta da API:", response);
        setItems(response); // Atualiza o estado 'items' com os dados da API.
        setFilteredItems(response); // Inicializa itens filtrados com todos os items
        setLoading(false);   // Esconde o componente de carregamento.
      });
  }, []);// O array vazio como segundo argumento garante que o efeito seja executado apenas uma vez, após a primeira renderização.

  // Função para lidar com os resultados da busca
  const handleSearchResults = (results) => {
    setFilteredItems(results); // Atualiza o estado com os resultados da busca

  };


  return (
    
    <div className={styles.listagem}>{/* Container principal da listagem. */}
    <h1 className={styles.h1}><Busca onSearch={handleSearchResults} /></h1>{/* Título e componente de busca. */}
      <div className={styles.carrousel}> {/* Container para os itens*/}
        {/* Renderiza o componente Loading enquanto os dados estiverem sendo buscados. */}
        {loading ? (
          <Loading />
        ) : (
          // Renderiza a lista de itens após os dados serem carregados.
          <ul>
            {/* Percorre cada item da resposta da API e renderiza um componente ItemCard para cada um.*/}
            {filteredItems.map((item) => (
              <ItemCard key={item.id} dados={item} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
export default ListagemDeItens;