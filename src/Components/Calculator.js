import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator-container">
        <div className="output">0</div>
        <button className="ac" type="button">AC</button>
        <button className="plus-minus" type="button">+/-</button>
        <button className="percentage" type="button">%</button>
        <button className="division" type="button">/</button>
        <button className="seven" type="button">7</button>
        <button className="eight" type="button">8</button>
        <button className="nine" type="button">9</button>
        <button className="product" type="button">*</button>
        <button className="four" type="button">4</button>
        <button className="five" type="button">5</button>
        <button className="six" type="button">6</button>
        <button className="minus" type="button">-</button>
        <button className="one" type="button">1</button>
        <button className="two" type="button">2</button>
        <button className="three" type="button">3</button>
        <button className="plus" type="button">+</button>
        <button className="zero" type="button">0</button>
        <button className="dot" type="button">.</button>
        <button className="equal" type="button">=</button>
      </div>
    );
  }
}

export default Calculator;
