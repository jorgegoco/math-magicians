import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null
  })

  const handleClick = (e) => setState((obj) => calculate(obj, e.target.innerText));

  const { total, next, operation } = state;
  const result = `${total}${operation}${next}`.replace(/null/g, '').replace(/undefined/g, '');
  return (
    <div className="calculator-container">
      <div className="output">{result === '' ? '0' : result}</div>
      <button className="ac" type="button" onClick={handleClick}>AC</button>
      <button className="plus-minus" type="button" onClick={handleClick}>+/-</button>
      <button className="percentage" type="button" onClick={handleClick}>%</button>
      <button className="division" type="button" onClick={handleClick}>÷</button>
      <button className="seven" type="button" onClick={handleClick}>7</button>
      <button className="eight" type="button" onClick={handleClick}>8</button>
      <button className="nine" type="button" onClick={handleClick}>9</button>
      <button className="product" type="button" onClick={handleClick}>x</button>
      <button className="four" type="button" onClick={handleClick}>4</button>
      <button className="five" type="button" onClick={handleClick}>5</button>
      <button className="six" type="button" onClick={handleClick}>6</button>
      <button className="minus" type="button" onClick={handleClick}>-</button>
      <button className="one" type="button" onClick={handleClick}>1</button>
      <button className="two" type="button" onClick={handleClick}>2</button>
      <button className="three" type="button" onClick={handleClick}>3</button>
      <button className="plus" type="button" onClick={handleClick}>+</button>
      <button className="zero" type="button" onClick={handleClick}>0</button>
      <button className="dot" type="button" onClick={handleClick}>.</button>
      <button className="equal" type="button" onClick={handleClick}>=</button>
    </div>
  );
}

export default Calculator;
