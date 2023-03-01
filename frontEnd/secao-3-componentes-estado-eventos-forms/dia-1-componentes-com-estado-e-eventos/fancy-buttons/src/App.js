import './App.css';
import React from 'react';

const textBtn1 = () => console.log('lau'); // não é boa prática funções fora do escopo da classe

class App extends React.Component {
  constructor() {
    super();
    this.textBtn2 = this.textBtn2.bind(this);
  }

  textBtn2 () {
    console.log(this)
  };

  textBtn3 = () => console.log(this); // com a sintaxe de arrow conseguimos ver o this sem a necessidade de usar o constructor como no textBtn2 por exemplo.

  render() {
    return(
      <>
        <button onClick={textBtn1}>1</button>
        <button onClick={this.textBtn2}>2</button>
        <button onClick={this.textBtn3}>3</button>
      </>
    );
  }
}

export default App;
