import styles from './styles.module.css';
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

const GridItem = ({level}) => {
    return ( 
        <div className={styles.level} style={{backgroundColor: level.color}}>
            <div className={styles.level__icon}>
                <img src={level.icon === 'down' ? downImage : upImage} alt="" width={40}/>
            </div>
            <h2 className={styles.level__title}>{level.title}</h2>
            {level.yourImc &&
                <p className={styles.level__youImc}>Seu IMC é de {level.yourImc} kg/m²</p>
            }
            <p className={styles.level__info}>Imc está entre <strong>{level.imc[0]}</strong> e <strong>{level.imc[1]}</strong></p>
        </div>
     );
}
 
export default GridItem;