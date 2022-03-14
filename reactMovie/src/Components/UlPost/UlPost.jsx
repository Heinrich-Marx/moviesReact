import LiPost from '../LiPost/LiPost';
import { useContext } from 'react';
import Context from '../../context';
import styles from './UlPost.module.css';
const UlPost = () => {
  const { inputValue } = useContext(Context);
  return (
    <ul className={styles.ul}>
      {inputValue.data.Search.map((el) => (
        <LiPost
          title={el.Title}
          year={el.Year}
          key={el.imdbID}
          id={el.imdbID}
          type={el.Type}
          poster={el.Poster}
        />
      ))}
    </ul>
  );
};

export default UlPost;
