import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addName } from '../../state/ducks/ui/actions';

import styles from './styles.module.css';

const CreateForm = () => {
  const [error, setError] = useState();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.name.value.trim();
    if (value?.length > 0) {
      const regex = /\d+/g;
      var matches = value.match(regex);

      if (matches === null) {
        const wordLength = value?.split(' ')?.length;
        if (wordLength <= 2) {
          dispatch(addName(value));
          document.getElementById('create-form').reset();
          setError(null);
        } else {
          setError('Name contain maximum two words');
        }
      } else {
        setError('Only text is valid');
      }
    } else {
      setError("Empty name can't create");
    }
  };
  return (
    <div className={styles.formWrapper}>
      <form id='create-form' className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type='text'
          placeholder='Type name'
          name='name'
        />
        <button className={styles.button} type='submit'>
          Create
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default CreateForm;
