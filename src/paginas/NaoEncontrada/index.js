import Botao from "../../componentes/Botao/botao";
import Contador from "../../componentes/Contador/contador";
import style from "./naoEncontrada.module.css";

function NaoEncontrada() {
  
  return (
    <div className={style.error}>
      <h1>Erro 404!</h1>
      <p>Link ou rota não encontrada favor revisar a pagina anterior</p>
      
      <div>
        <Contador />
      </div>
      <Botao/>
    </div>
  );
}

export default NaoEncontrada;