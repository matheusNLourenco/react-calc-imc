import { useState } from 'react';
import styles from './App.module.css'
import GridItem from './components/GridItem';
import arrow from './assets/leftarrow.png'
import { levels ,calculateImc } from './helpers/imc';

const App = () => {

  const [heightField, setHeightField] = useState(0);
  const [weightField, setWeightField] = useState(0);
  const [toShow, setToShow] = useState(null);

  function handleCalc() {
    const heightInput = document.getElementById('altura');
    const weightInput = document.getElementById('peso');

    if(!(heightField && weightField)) {
      alert('Digite todos os Campos!');
      heightInput.value = '';
      weightInput.value = '';
      return;
    }

    setToShow(calculateImc(heightField, weightField));

    heightInput.value = '';
    weightInput.value = '';
  }

  function previousContent() {
    setToShow(null)
    setHeightField(0)
    setWeightField(0)
  }

  return ( 
    <div className={styles.main}>
      <header className={styles.header}>
        <div className={styles.header__container}>
          <h2 className={styles.header__logo}>stringbrx 😎</h2>
        </div>
      </header>
      <div className={styles.bodyContent}>
        <div className={styles.container}>
          <div className={styles.left}>
            <h1 className={styles.left__title}>Calcule seu IMC 📟</h1>
            <p className={styles.left__text}>
              Para calcular o IMC (Índice de Massa Corporal), basta preencher os campos abaixo.
            </p>
            <div className={styles.left__inputGroup}>
              <input 
                type="number" 
                name="altura" 
                id="altura" 
                placeholder='Digite a sua altura Ex: 1.5 (em métros)' 
                value={heightField > 0 ? heightField : ''}
                onChange={(e) => setHeightField(e.target.value)}
                disabled={toShow ? true : false}
              />
              <input 
                type="number" 
                name="peso" 
                id="peso" 
                placeholder='Digite o seu peso Ex: 75.3 (em kg)' 
                value={weightField > 0 ? weightField : ''}
                onChange={(e) => setWeightField(e.target.value)} 
                disabled={toShow ? true : false}
              />
            </div>
            <button 
              type='button' 
              className={styles.left__button} 
              onClick={handleCalc}
              disabled={toShow ? true : false}
              >
                Calcular
            </button>
          </div>
          <div className={styles.right}>
            {!toShow &&
              <div className={styles.right__grid}>
                {levels.map((level, key) => <GridItem key={key} level={level} /> )}
              </div>
            }
            {toShow && 
              <div className={styles.right__big}>
                <div className={styles.right__arrow} onClick={previousContent}>
                  <img src={arrow} alt="" width={30} />
                </div>
                <GridItem level={toShow}/>
              </div>
            }     
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default App;
