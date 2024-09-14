import styles from './main.module.css';

const Main = (props) => {
  // console.log(props) 

  return (
    <main className={styles.principal}> 
      
      <div className={styles.container}> 
        
                {props.children} 
        {/* 'props.children' renderiza qualquer conteúdo passado como filho deste componente. */}
      </div>
   
      </main>
  )
};

export default Main; 
