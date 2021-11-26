import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { shortChildName } from '../../state/ducks/ui/actions';

import styles from './styles.module.css';

const ItemsShort = () => {
  const [active, setActive] = useState();
  const dispatch = useDispatch();

  const handleShort = (shortBy) => {
    setActive(shortBy);
    dispatch(shortChildName(shortBy));
  };

  return (
    <ul className={styles.listWrapper}>
      <li>
        <button
          className={active === 'alphabetical' ? styles.active : ''}
          onClick={() => handleShort('alphabetical')}
        >
          Alphabetical
        </button>
      </li>
      <li>
        <button
          className={active === 'time' ? styles.active : ''}
          onClick={() => handleShort('time')}
        >
          By Input Time
        </button>
      </li>
      <li>
        <button
          className={active === 'length' ? styles.active : ''}
          onClick={() => handleShort('length')}
        >
          By Length
        </button>
      </li>
    </ul>
  );
};

export default ItemsShort;
