import React, { useState } from 'react';
import styles from './login.module.css'; 

// Define o componente funcional Login
function Login() {
  // Estado para armazenar o nome de usuário inserido, inicializado como string vazia
  const [username, setUsername] = useState('');
  // Estado para armazenar a senha inserida, inicializado como string vazia
  const [password, setPassword] = useState('');

  // Simula uma base de dados de usuários
  const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
  ];

  // Função que será executada quando o formulário for enviado
  const handleSubmit = (e) => {
    // Previne o comportamento padrão de envio do formulário (recarregar a página)
    e.preventDefault();

    // Busca um usuário no array "users" que tenha o nome de usuário igual ao inserido
    const user = users.find((user) => user.username === username);

    // Se o usuário for encontrado e a senha inserida for igual à senha armazenada...
    if (user && user.password === password) {
      // Exibe mensagem formatada no console indicando o usuário logado
      console.log('%cUsuário logado: %c' + username, 'color: green', 'color: green; font-weight: bold');
      // TO-DO: Redirecionar o usuário para uma página autenticada ou realizar outras ações após login bem-sucedido
    } else {
      // Se as credenciais forem inválidas, exibe um alerta para o usuário
      alert('Credenciais inválidas.');
    }
  };

  // Renderiza o formulário de login dentro do card estilizado
  return (
    <div className={styles.formCard}>
      <h2 className={styles.formTitle}>Login</h2> {/* Título do formulário */}
      <form onSubmit={handleSubmit}> 
        <div className={styles.formGroup}> {/* Agrupamento de rótulo e campo */}
          <label htmlFor="username">Usuário:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          /> 
        </div>
        <div className={styles.formGroup}> {/* Agrupamento de rótulo e campo */}
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Entrar</button> 
      </form>
    </div>
  );
}

// Exporta o componente Login para ser usado em outros arquivos
export default Login;