//componente filho

import { Link } from "react-router-dom"; // Importa o componente Link para criar links navegáveis
import styles from "./itemCard.module.css";
import formatCurrency from "../utils/formatCurrency"; // Importa a função de formatação de moeda

function ItemCard(props) {
  // Extrai as propriedades do item recebidas via props
  const { id, title, thumbnail, price, available_quantity } = props.dados;

  console.log("Meus dados vindos do listagem de itens elemento pai apos o filtro da query aceita pela api:", props.dados);

  return (
    <li className={styles.itemCard}> {/* Item da lista com estilo */}
      <Link to={`/item/${id}`} className={styles.itemLink}> {/* Link para a página de detalhes do item */}
        <img
          src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} // Substitui a resolução da imagem na URL (se necessário)
          alt={`"logo com a ${title}"`} // Descrição da imagem para acessibilidade
          className={styles.itemImage}
        />
        <h1 className={styles.itemTitle}>{title}</h1> {/* Título do item */}
        <p className={styles.itemPrice}>{formatCurrency(price, 'BRL')}</p> {/* Formata e exibe o preço */}
        <p className={styles.itemStock}>
          Restam: {available_quantity} unidades {/* Exibe a quantidade disponível em estoque */}
        </p>
        <span className={styles.itemDetails}>veja os detalhes</span>
      </Link>
    </li>
  );
}

export default ItemCard; 