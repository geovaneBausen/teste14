import { Icon } from "@iconify/react";
import styles from "./header.module.css";
import MenuNav from "../MenuNav/menuNav";
import React, { useState } from 'react';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <a href="/" className={styles.iconLink}>
          <img className={styles.logo} src="./imagens/logo.svg" alt="Logo" />
        </a>
        <div className={styles.storeName}>
          刀Market
        </div>
      </div>

      <div className={styles.centerSection}></div> {/* Espaço central */}
      <div className={styles.rightSection}>
        <button 
          className={styles.hamburgerButton} 
          onClick={() => setIsOpen(!isOpen)}
        >
          <Icon icon="bx:menu" className={styles.icon} />
        </button>
        <MenuNav isOpen={isOpen} setIsOpen={setIsOpen} /> {/* Passando isOpen para MenuNav */}
       
       
      </div>
    </header>
  );
};

export default Header;