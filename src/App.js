import React, { useState } from 'react';
import './App.css';


const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [currentValue, setCurrentValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleNumberClick = (num) => {
    if (display === '0') {
      setDisplay(num.toString());
    } else {
      setDisplay(display + num.toString());
    }
  };

  const handleOperatorClick = (op) => {
    setCurrentValue(parseFloat(display));
    setOperator(op);
    setDisplay('0');
  };

  const handleEqualClick = () => {
    if (operator && currentValue !== null) {
      const newValue = parseFloat(display);
      let result;
      switch (operator) {
        case '+':
          result = currentValue + newValue;
          break;
        case '-':
          result = currentValue - newValue;
          break;
        case '*':
          result = currentValue * newValue;
          break;
        case '/':
          result = currentValue / newValue;
          break;
        case '^':
          result = Math.pow(currentValue, newValue);
          break;
        case 'log':
          result = Math.log(currentValue) / Math.log(newValue);
          break;
        default:
          return;
      }
      setDisplay(result.toString());
      setCurrentValue(null);
      setOperator(null);
    }
  };

  const handleClearClick = () => {
    setDisplay('0');
    setCurrentValue(null);
    setOperator(null);
  };

  return (
    <div className="calculator">
      <h1>IIIT B Calculator</h1>
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={() => handleNumberClick(1)}>1</button>
        <button onClick={() => handleNumberClick(2)}>2</button>
        <button onClick={() => handleNumberClick(3)}>3</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>
        <button onClick={() => handleNumberClick(4)}>4</button>
        <button onClick={() => handleNumberClick(5)}>5</button>
        <button onClick={() => handleNumberClick(6)}>6</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
        <button onClick={() => handleNumberClick(7)}>7</button>
        <button onClick={() => handleNumberClick(8)}>8</button>
        <button onClick={() => handleNumberClick(9)}>9</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
        <button onClick={() => handleNumberClick(0)}>0</button>
        <button onClick={() => handleEqualClick()}>=</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
        <button onClick={() => handleOperatorClick('^')}>^</button>
        <button onClick={() => handleOperatorClick('log')}>log</button>
        <button onClick={() => handleClearClick()}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
