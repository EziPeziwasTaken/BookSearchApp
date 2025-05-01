import styles from './Blok.module.css';
import noimage from '../assets/noimage.jpg';

function Blok({ book }) {
  console.log(book);
  const info = book.volumeInfo;
  const thumbnail = info.imageLinks?.thumbnail || noimage;
//uvodka knihy, Stackoverflow idk + název a autor
  return (
    <div className={styles.blok}>           
      <img src={thumbnail} alt={`Obal knihy ${info.title}`} />
      <div className={styles.blokPopis}>
        <h3>{info.title}</h3> 
        <p>{info.authors?.join(', ')}</p>
      </div>
    </div>
  );
}

export default Blok;
