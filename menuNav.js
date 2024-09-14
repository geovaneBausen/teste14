import { Link, useLocation } from "react-router-dom";
import styles from "./menuNav.module.css";
import { Icon } from "@iconify/react";

const MenuNav = () => {
  const location = useLocation();

  function getLinkClass(path) {
    return `${styles.link} ${location.pathname === path ? styles.linkAtivo : ''}`;
  }

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/" className={getLinkClass('/')}>
            Principal
          </Link>
        </li>
        <li>
          <Link to="/sobre" className={getLinkClass('/sobre')}>
            Sobre
          </Link>
        </li>
        <li>
          <Link to="/cadastro" className={getLinkClass('/sobre')}>
            Registro
          </Link>
        </li>
        <li>
          <Link to="/carrinho" className={getLinkClass('/carrinho')}>
            <Icon icon="bx:cart" /> Carrinho
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuNav;