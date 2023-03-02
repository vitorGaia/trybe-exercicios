import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    /* this.state = {
      clickNumber1: 0,
      clickNumber2: 0,
      clickNumber3: 0,
    } */
    this.textBtn2 = this.textBtn2.bind(this);
  }

  state = {
    clickNumber1: 0,
    clickNumber2: 0,
    clickNumber3: 0,
  } // esta sintaxe parece mais simples, combinada com arrow function não é necessário usar o .bind() nem constructor

  textBtn1 = () => {
    this.setState({
      clickNumber1: 27,
    })
  };

  textBtn2 () {
    this.setState((previousState, _props) => ({
      clickNumber2: previousState.clickNumber2 + 1,
    }))
  };

  textBtn3 = () => {
    this.setState((previousState, _props) => ({
      clickNumber3: previousState.clickNumber3 + 1,
    }))
  }; // com a sintaxe de arrow conseguimos ver o this sem a necessidade de usar o constructor como no textBtn2 por exemplo.

  btnColor = (num) => num % 2 === 0 ? 'green' : 'red';

  render() {
    const { clickNumber1, clickNumber2, clickNumber3 } = this.state;
    return(
      <>
        <button onClick={this.textBtn1}>{clickNumber1}</button>
        <button onClick={this.textBtn2} style={ { backgroundColor: this.btnColor(clickNumber2) } }>{clickNumber2}</button>
        <button onClick={this.textBtn3} style={ { backgroundColor: this.btnColor(clickNumber3) } }>{clickNumber3}</button>
      </>
    );
  }
}

export default App;
