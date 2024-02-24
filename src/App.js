import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [display, setDisplay] = useState('0');
  const [input, setInput] = useState('');

  // Function to handle different operations
  const handleOperation = (op) => {
    try {
      switch (op) {
        // Square root function
        case 'sqrt':
          if (parseFloat(display) < 0) {
            throw new Error('Invalid input for square root');
          }
          setDisplay(Math.sqrt(parseFloat(display)).toString());
          break;
        // Factorial function
        case 'factorial':
          const factorial = (num) => {
            if (num < 0) throw new Error('Invalid input for factorial');
            if (num === 0 || num === 1) return 1;
            let result = 1;
            for (let i = 2; i <= num; i++) {
              result *= i;
            }
            return result;
          };
          setDisplay(factorial(parseInt(display)).toString());
          break;
        // Natural logarithm function
        case 'ln':
          if (parseFloat(display) <= 0) {
            throw new Error('Invalid input for natural logarithm');
          }
          setDisplay(Math.log(parseFloat(display)).toString());
          break;
        // Power function
        case 'power':
        // 'input' state is assumed to store the base
        // 'display' state stores the exponent
        if (isNaN(parseFloat(display)) || isNaN(parseFloat(input))) {
          throw new Error('Invalid input for power function');
        }
        setDisplay(Math.pow(parseFloat(input), parseFloat(display)).toString());
        setInput('');
        break;
        default:
          break;
      }
    } catch (error) {
      setDisplay(`Error: ${error.message}`);
    }
  };

  // Function to handle number button click
  const handleNumberClick = (num) => {
    if (display === '0') {
      setDisplay(num.toString());
    } else {
      setDisplay(display + num.toString());
    }
  };

  // Function to handle equal button click
  const handleEqualClick = () => {
    handleOperation(input);
    setInput('');
  };

  // Function to handle clear button click
  const handleClearClick = () => {
    setDisplay('0');
    setInput('');
  };

  // JSX for rendering the calculator UI
  return (
    <div className="calculator">
      <h1>Scientific Calculator</h1>
      <div className="display">{display}</div>
      <div className="buttons">
        {/* Scientific operation buttons */}
        <button onClick={() => handleOperation('sqrt')}>√</button>
        <button onClick={() => handleOperation('factorial')}>!</button>
        <button onClick={() => handleOperation('ln')}>ln</button>
        <button onClick={() => handleOperation('power')}>^</button>
        {/* Number buttons */}
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
        {/* Equal and clear buttons */}
        <button onClick={handleEqualClick}>=</button>
        <button onClick={handleClearClick}>Clear</button>
      </div>
    </div>
  );
};

export default App;
