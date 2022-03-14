import styles from './Header.module.css';
import Input from '../Input/Input';
const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Movie Catalog</h1>
      <Input />
      <h2>Alexander Borisenko</h2>
    </header>
  );
};

export default Header;
