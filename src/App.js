import Header from './componentes/Header/header';
import MenuNav from './componentes/MenuNav/menuNav';
import Main from './componentes/Main/main';
import ListagemDeItens from './componentes/ListagemDeItens/listagemDeItens';
import Footer from './componentes/Footer/footer';
import Form from './componentes/Form/form';
import Sobre from './paginas/Sobre';
import NaoEncontrada from './paginas/NaoEncontrada';
import ItemPage from './paginas/ItemPage';
import styles from "./App.module.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './componentes/Login/login';


const App = () => {

  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Main>
          <Header />
          <Routes> {/* Rotas da aplicação */}
            <Route path="/" element={<ListagemDeItens />} />
            <Route path="/cadastro" element={<Form />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/item/:id" element={<ItemPage />} />
            <Route path="*" element={<NaoEncontrada />} />
          </Routes>
        </Main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
