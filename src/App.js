import CreateForm from './components/CreateForm/CreateForm';
import List from './components/List/List';

import styles from './styles.module.css';

function App() {
  return (
    <div className={styles.container}>
      <CreateForm />
      <List />
    </div>
  );
}

export default App;
