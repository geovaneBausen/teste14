import React, { useState } from 'react';
import styles from "./contador.module.css"

function Contador() {
    //const[state, useState] = useState(valorInicial)
    const [count, setCount] = useState(0);

    return (
        <div className={styles.contador}>

            <p>Você clicou {count} vezes</p>

            <button className={styles.contador__botao} onClick={() => setCount(count + 1)}>
            {/*setCount = função que altera o caunt*/}
                Clique aqui
            </button>
        </div>
    )
}

export default Contador;