import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [display, setDisplay] = useState('0');
  const [input, setInput] = useState('');
  const [operator, setOperator] = useState(null);

  const handleNumberClick = (num) => {
    if (display === '0') {
      setDisplay(num.toString());
    } else {
      setDisplay(display + num.toString());
    }
  };

  const handleOperatorClick = (op) => {
    switch (op) {
      case 'sqrt':
      case 'ln':
      case 'factorial':
        setOperator(op);
        setInput(display);
        handleEqualClick();
        break;
      case 'power':
        setOperator(op);
        setInput(display);
        setDisplay(''); // Clear the display for entering the exponent
        break;
      default:
        break;
    }
  };

  const handleEqualClick = () => {
    let result;
    switch (operator) {
      case 'sqrt':
        result = Math.sqrt(parseFloat(input));
        break;
      case 'ln':
        result = Math.log(parseFloat(input));
        break;
      case 'factorial':
        result = factorial(parseInt(input));
        break;
      case 'power':
        if (input && display) {
          result = Math.pow(parseFloat(input), parseFloat(display));
        }
        break;
      default:
        break;
    }
    if (!isNaN(result)) {
      setDisplay(result.toString());
      setInput('');
      setOperator(null);
    }
  };

  const handleClearClick = () => {
    setDisplay('0');
    setInput('');
    setOperator(null);
  };

  const factorial = (num) => {
    if (num < 0) return NaN;
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  };

  return (
    <div className="calculator">
      <h1>Scientific Calculator</h1>
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={() => handleOperatorClick('sqrt')}>√</button>
        <button onClick={() => handleOperatorClick('ln')}>ln</button>
        <button onClick={() => handleOperatorClick('factorial')}>!</button>
        <button onClick={() => handleOperatorClick('power')}>^</button>
        <button onClick={() => handleNumberClick(1)}>1</button>
        <button onClick={() => handleNumberClick(2)}>2</button>
        <button onClick={() => handleNumberClick(3)}>3</button>
        <button onClick={() => handleNumberClick(4)}>4</button>
        <button onClick={() => handleNumberClick(5)}>5</button>
        <button onClick={() => handleNumberClick(6)}>6</button>
        <button onClick={() => handleNumberClick(7)}>7</button>
        <button onClick={() => handleNumberClick(8)}>8</button>
        <button onClick={() => handleNumberClick(9)}>9</button>
        <button onClick={() => handleNumberClick(0)}>0</button>
        <button onClick={handleEqualClick}>=</button>
        <button onClick={handleClearClick}>C</button>
      </div>
    </div>
  );
};

export default App;


