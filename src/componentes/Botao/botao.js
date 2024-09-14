import styles from "./botao.module.css";
import { useNavigate } from "react-router-dom";
const Botao = () => {
  const navegar = useNavigate();
  return (
    <div className={styles.container}>
      <button className={styles.botaoVoltar} onClick={() => navegar(-1)}>
        <span>Voltar</span>
      </button>
    
    </div>
  );
};

export default Botao;