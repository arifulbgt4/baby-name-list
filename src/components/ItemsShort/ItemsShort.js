import { useDispatch } from 'react-redux';

import { shortChildName } from '../../state/ducks/ui/actions';

const ItemsShort = () => {
  const dispatch = useDispatch();

  const handleShort = (shortBy) => {
    dispatch(shortChildName(shortBy));
  };

  return (
    <ul>
      <li>
        <button onClick={() => handleShort('Alphabetical')}>
          Alphabetical
        </button>
      </li>
      <li>
        <button onClick={() => handleShort('time')}>By Input Time</button>
      </li>
      <li>
        <button onClick={() => handleShort('length')}>By Length</button>
      </li>
    </ul>
  );
};

export default ItemsShort;
