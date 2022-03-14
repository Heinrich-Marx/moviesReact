import styles from './Main.module.css';
import { useContext } from 'react';
import Context from '../../context';
import UlPost from '../UlPost/UlPost';
const Main = () => {
  const { inputValue } = useContext(Context);
  if (inputValue.data.Response === 'True') {
    return (
      <main className={styles.main}>
        <h2 className={styles.h2}>
          You Searched for: {inputValue.value}, {inputValue.data.totalResults}{' '}
          results found
        </h2>
        <UlPost />
      </main>
    );
  } else if (inputValue.data.Response === 'False') {
    return (
      <main className={styles.main}>
        <h2 className={styles.h2}>{inputValue.data.Error}</h2>
      </main>
    );
  } else {
    return (
      <main className={styles.main}>
        <h2 className={styles.h2}>Please, enter the Movie</h2>
      </main>
    );
  }
};

export default Main;
