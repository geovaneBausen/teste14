import { useState } from "react";
import style from "./sobre.module.css";

function Sobre() {
  return (
    <div className={style.container}>
      <div className={style.cardPrincipal}>
        <div className={style.sobrenos}>
          <div>
            <h2 className={style.subtitulo}>
              DESENVOLVIMENTO DE UMA APLICAÇÃO WEB COM REACT
            </h2>

            {/* Seção "Funcionalidade" */}
            <div className={style.secao}>
              <h3 className={style.tituloSecao}>Funcionalidade</h3>
              <p className={style.paragrafo}>
                A aplicação web desenvolvida tem como objetivo simular uma <b>loja virtual</b>, oferecendo uma interface interativa com funcionalidades de <b>busca</b>, <b>visualização detalhada de itens</b> e <b>navegação intuitiva</b>. Todos esses recursos foram implementados utilizando a biblioteca React, garantindo que os usuários possam explorar os produtos de forma eficiente.
              </p>
            </div>

            {/* Seção "Componentização" */}
            <div className={style.secao}>
              <h3 className={style.tituloSecao}>Componentização</h3>
              <p className={style.paragrafo}>
                O projeto foi estruturado utilizando componentes reutilizáveis, facilitando a manutenção e expansão da aplicação. Componentes como a barra de navegação, a listagem de produtos e a página de detalhes do livro foram organizados de forma modular e reaproveitável, promovendo um desenvolvimento mais escalável e eficiente.
              </p>
            </div>

            {/* Seção "Estilização e Design" */}
            <div className={style.secao}>
              <h3 className={style.tituloSecao}>Estilização e Design</h3>
              <p className={style.paragrafo}>
                A aplicação foi estilizada com CSS, priorizando a responsividade e uma experiência visual moderna. Foram aplicadas boas práticas de design para garantir que a interface seja intuitiva, visualmente agradável e funcional em diferentes tamanhos de tela, desde desktops até dispositivos móveis.
              </p>
            </div>

            {/* Seção "Gerenciamento de Estado" */}
            <div className={style.secao}>
              <h3 className={style.tituloSecao}>Gerenciamento de Estado</h3>
              <p className={style.paragrafo}>
                O gerenciamento de estado foi feito utilizando o hook <b>useState</b> do React, permitindo que a interface responda dinamicamente às ações dos usuários. Arrays de objetos, representando os produtos, são manipulados e atualizados conforme o usuário interage com a aplicação. Esse gerenciamento eficiente do estado garante que as informações exibidas estejam sempre atualizadas.
              </p>
            </div>

            {/* Seção "Publicação" */}
            <div className={style.secao}>
              <h3 className={style.tituloSecao}>Publicação</h3>
              <p className={style.paragrafo}>
                A aplicação foi publicada na plataforma Vercel, permitindo acessibilidade online para testes e demonstração das funcionalidades. O link para acesso ao projeto está disponível abaixo:
              </p>
              <a href="https://api.mercadolibre.com/sites/MLB/search?q=livro">
                https://api.mercadolibre.com/sites/MLB/search?q=livro
              </a>
            </div>

            {/* Seção "Documentação" */}
            <div className={style.secao}>
              <h3 className={style.tituloSecao}>Documentação</h3>
              <p className={style.paragrafo}>
                O projeto está devidamente documentado no GitHub, com instruções claras para instalação e execução da aplicação. Além disso, o código-fonte está bem organizado, com comentários explicativos e arquivos bem estruturados, garantindo a facilidade de compreensão e manutenção.
              </p>
              <p className={style.paragrafo}>
                Data de Entrega: a definir. Formato de Entrega: Repositório no GitHub com o código da aplicação, instruções de execução, link para a aplicação publicada e o arquivo .zip do source enviado via AVA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
