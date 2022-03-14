import styles from './Footer.module.css';
import { useContext } from 'react';
import Context from '../../context';
import ChangeInput from '../otherFunc/ChangeInput';
const Footer = () => {
  const { inputValue, setInputValue } = useContext(Context);

  const decrement = () => {
    setInputValue({
      ...inputValue,
      pageNumber: inputValue.pageNumber === 1 ? 1 : --inputValue.pageNumber,
    });
    ChangeInput(inputValue, setInputValue);
  };
  const increment = () => {
    setInputValue({ ...inputValue, pageNumber: ++inputValue.pageNumber });
    ChangeInput(inputValue, setInputValue);
  };
  if (inputValue.data.Response === 'True') {
    return (
      <footer className={styles.footer}>
        <div className={styles.div}>
          <button className={styles.btn} onClick={() => decrement()}>
            ≪
          </button>
          <button className={styles.btn} onClick={() => increment()}>
            ≫
          </button>
        </div>
      </footer>
    );
  } else {
    return <></>;
  }
};

export default Footer;
