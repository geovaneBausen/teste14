import React, { useState } from 'react';
import styles from "./busca.module.css";
import { Icon } from "@iconify/react";
import fetchProducts from "../api/fetchProducts";

// Componente de busca que recebe a função onSearch do componente pai.
const Busca = ({ onSearch }) => {
 
  const [searchTerm, setSearchTerm] = useState('');
         //estado  Armazena o texto digitado pelo usuário na caixa de busca.

        // Função: handleSearch: para lidar com a submissão do formulário de busca.
  const handleSearch = async (event) => {
    event.preventDefault(); // Previne o recarregamento da página ao enviar o formulário.

    try {
      // requisição à API para buscar produtos com base no termo de busca.
      const products = await fetchProducts(searchTerm);

      // Envia os produtos encontrados ao componente pai através da função onSearch.
      onSearch(products);
    } catch (error) {
      // Exibe erros no console em caso de falha na busca.
      console.error("Erro ao buscar produtos:", error);
    }
  };

  //Renderização
  return (
    // Formulário estilizado para a busca.
    <form className={styles.divBusca} onSubmit={handleSearch}>

      {/* Campo de entrada do usuário para digitar o termo de busca */}
      <input
        className={styles.inputBusca}
        type="search"
        value={searchTerm}
        placeholder="Buscar produtos"
        // Atualiza o estado searchTerm ao modificar o valor do input.
        onChange={(event) => setSearchTerm(event.target.value)}
        required
      />

      {/* Botão com ícone de busca */}
      <button className={styles.botaoBusca} type="submit">
        <Icon icon="lets-icons:search-light" />
      </button>
    </form>
  );
                                                                    };
export default Busca;
