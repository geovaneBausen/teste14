import React, { useState, useEffect } from 'react';
import styles from './form.module.css';

function Form() {

    // Estado inicial do formulário
    const [data, setData] = useState({
        //variveis de estado
        fullName: '',
        email: '',
        maritalStatus: '',
        genre: ''
    });

    // Estado para armazenar os usuários
    const [users, setUsers] = useState([]);

    // Função para atualizar o estado quando um campo do formulário é alterado
    const handleChange = (event) => {
        //console.log(event)
        const { name, value } = event.target;

        setData((prev) => {
            const newData = { ...prev, [name]: value };

            //console.log(newData);
            return newData;
        })
    };

    // Função para calcular o progresso do preenchimento do formulário
    const Calculateprogress = () => {
        let value = 0;
        let amountToAdd = 25;

        // Verifica se o nome completo foi preenchido e possui sobrenome
        if (data.fullName) {
            const explodeString = data.fullName.split(' ');
            // console.log(explodeString);
            if (explodeString[1]) {
                value += amountToAdd
            }
        }
        if (data.email) {
            // Verifica se o email é válido usando uma expressão regular
            let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            if (pattern.test(data.email)) {
                value += amountToAdd;  // Adiciona 25% ao progresso se o email for válido
            } else {
                //console.log("E-mail inválido");
            }
        }

        // Adiciona 25% ao progresso para cada campo preenchido: estado civil e gênero
        if (data.maritalStatus) {
            value += amountToAdd
        }
        if (data.genre) {
            value += amountToAdd
        }


        //console.log({ value })
        return (value)// Retorna o valor total do progresso (0 a 100)
    }

    const progress = Calculateprogress();

    // Função para lidar com o evento de clique no botão de enviar
    const handleClick = () => {
        //console.log('submited')

        // Adiciona o novo usuário ao array de usuários
        setUsers((prev) => [...prev, data]);

        setData({
            fullName: '',
            email: '',
            maritalStatus: '',
            genre: ''
        })

        // Imprime um título no console
        console.log('%c Formulário enviado com sucesso', 'color: green; font-size: large');

        alert('Formulario enviado com sucesso');
        // useEffect para exibir a tabela após cada atualização de 'users' 
    }
    useEffect(() => {
        console.table(users, ['fullName', 'email', 'maritalStatus', 'genre']);
    }, [users]);

    // Renderiza o formulário
    return (
        <div className={styles.formCard}>
            <h2>Registro de Usuário</h2>
            <form>

                {/*barra de estatus */}
                <div className={`${styles.progressBar} ${styles.progressBarFilled}`} style={{ width: `${progress}%` }}></div>

                {/* Campos de entrada do formulário */}
                <div className={styles.formGroup}>
                    <label htmlFor='fullName'>Nome Completo</label>
                    <input name='fullName' value={data.fullName} onChange={handleChange} />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor='email'>E-mail</label>
                    <input name='email' value={data.email} onChange={handleChange} />
                </div>

                <div className={styles.formGroup}>

                    <label htmlFor='maritalStatus'>Estado Civil</label>

                    <select name='maritalStatus' value={data.maritalStatus} onChange={handleChange}>

                        <option value=''>-- selecione... </option>
                        <option value='solteiro'>Solteiro</option>
                        <option value='casado'>Casado</option>
                        <option value='divorciado'>Divorciado</option>
                    </select>

                </div>

                <div className={styles.formGroup}>
                    <label>Gênero</label>
                    <div className={styles.radiosContainer}>
                        <span>
                            <input type='radio'
                                name='genre'
                                value='masculino'
                                onChange={handleChange}
                                checked={data.genre === 'masculino'} /> Masculino
                        </span>
                        <span>
                            <input type='radio'
                                name='genre'
                                value='feminino'
                                onChange={handleChange}
                                checked={data.genre === 'feminino'} /> Feminino
                        </span>
                    </div>
                </div>
                {/* Botão de enviar o formulário, desabilitado até que o progresso seja 100% */}
                <button onClick={handleClick} disabled={Calculateprogress() !== 100}>Enviar</button>
            </form>
        </div>
    );

}

export default Form;