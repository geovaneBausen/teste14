import styles from './footer.module.css';
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom'; // Importe o Link do React Router

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.iconContainer}> {/* Container para o ícone */}
        <Link to="https://github.com/geovaneBausen" target="_blank" rel="noopener noreferrer">
          <Icon icon="mingcute:linkedin-fill" className={styles.githubIcon} />
        </Link>
        <Link to="https://github.com/geovaneBausen" target="_blank" rel="noopener noreferrer"> 
          <Icon icon="fe:github" className={styles.githubIcon} /> 
        </Link>
      </div>

      <p className={styles.copyright}>© {new Date().getFullYear()}  Site desenvolvido pelo estudante de TSI Geovane B. Bausen.</p>

    </footer>
  );
};

export default Footer;