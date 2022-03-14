import styles from './LiPost.module.css';
import { useState } from 'react';
const LiPost = ({ title, year, id, type, poster }) => {
  const [loading, setLoading] = useState(false);
  const image = 'https://via.placeholder.com/250x370';
  const handleOnLoad = () => {
    setLoading(true);
  };
  return (
    <li className={styles.li}>
      {loading ? (
        <img
          className={styles.image}
          src={poster}
          onLoad={handleOnLoad}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = 'https://via.placeholder.com/250x370';
          }}
          alt=''
        />
      ) : (
        <img
          className={styles.image}
          src={image}
          onLoad={handleOnLoad}
          alt=''
        />
      )}

      <p>Name: {title}</p>
      <p>Year: {year}</p>
      <p>imdbID: {id}</p>
      <p>Type: {type}</p>
    </li>
  );
};

export default LiPost;
