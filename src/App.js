import CreateForm from './components/CreateForm/CreateForm';
import List from './components/List/List';
import ItemsShort from './components/ItemsShort/ItemsShort';

import styles from './styles.module.css';

function App() {
  return (
    <div className={styles.container}>
      <CreateForm />
      <ItemsShort />
      <List />
    </div>
  );
}

export default App;
