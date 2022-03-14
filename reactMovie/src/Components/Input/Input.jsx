import { useContext } from 'react';
import Context from '../../context';
import styles from './Input.module.css';
import ChangeInput from '../otherFunc/ChangeInput';
const Input = () => {
  const { inputValue, setInputValue } = useContext(Context);
  const ChangeValue = (value) => {
    setInputValue({ ...inputValue, value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    ChangeInput(inputValue, setInputValue);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
      <input
        className={styles.input}
        type='text'
        value={inputValue.value}
        onChange={(e) => ChangeValue(e.target.value)}
        placeholder='enter the Movie'
      />
    </form>
  );
};

export default Input;
