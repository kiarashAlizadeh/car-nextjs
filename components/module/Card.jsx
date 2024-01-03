import styles from './Card.module.css';

import Location from '../icons/Location';
import Link from 'next/link';
function Card(props) {
  const { id, name, model, year, distance, location, image, price } = props;
  return (
    <Link href={`/cars/${id}`}>
      <div className={styles.container}>
        <img src={image} alt={image} className={styles.image} />
        <h4 className={styles.title}>
          {name} {model}
        </h4>

        <span className={styles.detail}>
          {year}.{distance} km
        </span>
        <div className={styles.footer}>
          <span>$ {price}</span>
          <div className={styles.location}>
            {location} <Location />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
