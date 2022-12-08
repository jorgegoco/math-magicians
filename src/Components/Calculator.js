import React, { Component } from 'react';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  handleClick(e) {
    const buttonValue = e.target.className;
    return this.setState((obj) => calculate(obj, buttonValue));
  }

  // onChangeHandler(e) {  
  // }

  render() {
    const { total, next, operation } = this.state;
    const result = `${total}${operation}${next}`.replace(/null/g, '');
    const trimedResult = result.replace(/undefined/g, '');
    return (
      <div className="calculator-container">
        <div className="output">
          {trimedResult}
          {/* <input onChange={onChangeHandler} /> */}
        </div>
        <button className="ac" type="button" onClick={this.handleClick}>AC</button>
        <button className="plus-minus" type="button" onClick={this.handleClick}>+/-</button>
        <button className="percentage" type="button" onClick={this.handleClick}>%</button>
        <button className="division" type="button" onClick={this.handleClick}>/</button>
        <button className="seven" type="button" onClick={this.handleClick}>7</button>
        <button className="eight" type="button" onClick={this.handleClick}>8</button>
        <button className="nine" type="button" onClick={this.handleClick}>9</button>
        <button className="product" type="button" onClick={this.handleClick}>*</button>
        <button className="four" type="button" onClick={this.handleClick}>4</button>
        <button className="five" type="button" onClick={this.handleClick}>5</button>
        <button className="six" type="button" onClick={this.handleClick}>6</button>
        <button className="minus" type="button" onClick={this.handleClick}>-</button>
        <button className="one" type="button" onClick={this.handleClick}>1</button>
        <button className="two" type="button" onClick={this.handleClick}>2</button>
        <button className="three" type="button" onClick={this.handleClick}>3</button>
        <button className="plus" type="button" onClick={this.handleClick}>+</button>
        <button className="zero" type="button" onClick={this.handleClick}>0</button>
        <button className="dot" type="button" onClick={this.handleClick}>.</button>
        <button className="equal" type="button" onClick={this.handleClick}>=</button>
      </div>
    );
  }
}

export default Calculator;
