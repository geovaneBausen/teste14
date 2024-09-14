import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./itemPage.module.css";
import fetchItem from "../../componentes/api/fetchItem";
import Loading from "../../componentes/Loading/loading";
import Botao from "../../componentes/Botao/botao";
import formatCurrency from "../../componentes/utils/formatCurrency";

function ItemPage() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);


  // Busca o item pela ID passada na URL
  useEffect(() => {
    const buscarItem = async () => {
      try {
        setLoading(true);
        const dadosItem = await fetchItem(id);
        setItem(dadosItem);
      } catch (error) {
        console.error("Erro ao buscar item:", error);
      } finally {
        setLoading(false);
      }
    };
    buscarItem();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!item) {
    return <p>Item não encontrado.</p>;
  }

  const {
    title,
    thumbnail,
    price,
    attributes,
    permalink,
  } = item;

  // Função auxiliar para encontrar atributos pelo ID
  const findAttribute = (attributeId) => attributes.find(attr => attr.id === attributeId);

  const descricao = findAttribute("ITEM_CONDITION");
  const peso = findAttribute("WEIGHT");
  const codigoUniversal = findAttribute("GTIN");
  const altura = findAttribute("HEIGHT");
  const largura = findAttribute("WIDTH");
  const profundidade = findAttribute("DEPTH");
  const volume = findAttribute("VOLUME");
  const marca = findAttribute("BRAND");
  const modelo = findAttribute("MODEL");
  const cor = findAttribute("COLOR");
  const material = findAttribute("MATERIAL");
  const garantia = findAttribute("WARRANTY_TYPE");
  const duracaoGarantia = findAttribute("WARRANTY_LENGTH");

  // Atributos específicos para livros:
  const autor = findAttribute("AUTHOR"); // Nome do atributo na API do ML
  const idioma = findAttribute("LANGUAGE");
  const editora = findAttribute("PUBLISHER");
  const paginas = findAttribute("NUMBER_OF_PAGES");
  const genero = findAttribute("GENRE");
  const idadeMinima = findAttribute("RECOMMENDED_AGE");
  const anoPublicacao = findAttribute("PUBLICATION_YEAR");

  return (
    <div className={style.container}>
      <div className={style.item}>
        <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt={title} />
        <div className={style.info}>
          <h1>{title}</h1>
          <p className={style.price}>{formatCurrency(price, 'BRL')}</p>

          {/* Exibindo Atributos do Livro */}
          {descricao && <p>Condição: {descricao.value_name}</p>}
          {autor && <p>Autor: {autor.value_name}</p>}
          {idioma && <p>Idioma: {idioma.value_name}</p>}
          {editora && <p>Editora: {editora.value_name}</p>}
          {paginas && <p>Páginas: {paginas.value_name}</p>}
          {genero && <p>Gênero: {genero.value_name}</p>}
          {idadeMinima && <p>Idade Mínima: {idadeMinima.value_name}</p>}
          {anoPublicacao && <p>Ano de Publicação: {anoPublicacao.value_name}</p>}
          

          {/* atributos gerais */}
          {peso ? (
            <p>Peso: {peso.value_name}</p>
          ) : (
            <p>Peso: Inexistente</p>
          )}
          {codigoUniversal && <p>Código Universal: {codigoUniversal.value_name}</p>}
          {altura && <p>Altura: {altura.value_name}</p>}
          {largura && <p>Largura: {largura.value_name}</p>}
          {profundidade && <p>Profundidade: {profundidade.value_name}</p>}
          {volume && <p>Volume: {volume.value_name}</p>}
          {marca && <p>Marca: {marca.value_name}</p>}
          {modelo && <p>Modelo: {modelo.value_name}</p>}
          {cor && <p>Cor: {cor.value_name}</p>}
          {material && <p>Material: {material.value_name}</p>}
          {garantia && <p>Garantia: {garantia.value_name}</p>}
          {duracaoGarantia && <p>Duração da Garantia: {duracaoGarantia.value_name}</p>}
         
        

          <div className={style.buttonContainer}>
            <a href={permalink} target="_blank" rel="noopener noreferrer" className={style.buyButton}>
              Comprar no Mercado Livre
            </a>
            <Botao />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemPage;