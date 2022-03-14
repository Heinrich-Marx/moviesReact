import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './normalize.css';
import Context from './context';

const MainFunction = () => {
  const [inputValue, setInputValue] = useState({
    value: '',
    data: '',
    pageNumber: 1,
  });
  return (
    <React.StrictMode>
      <Context.Provider value={{ inputValue, setInputValue }}>
        <App />
      </Context.Provider>
    </React.StrictMode>
  );
};
ReactDOM.render(<MainFunction />, document.getElementById('root'));
