import Fetch from './Fetch';
const ChangeInput = (inputValue, setInputValue) => {
  const json = Fetch(inputValue.value, inputValue.pageNumber);
  json.then((data) => {
    setInputValue({ ...inputValue, data });
  });
};

export default ChangeInput;
