import './App.css';
import React from 'react';
import Button1 from './Button1';
import Button2 from './Button2';

class App extends React.Component {
  /* constructor() {
    super();
    this.state = {
      clickNumber1: 0,
      clickNumber2: 0,
      clickNumber3: 0,
    }
    this.textBtn2 = this.textBtn2.bind(this);
  } */

  /* textBtn1 = () => {
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
  }; // com a sintaxe de arrow conseguimos ver o this sem a necessidade de usar o constructor como no textBtn2 por exemplo. */

  state = {
    button1: 0,
    button2: 0,
    button3: 0,
  } // esta sintaxe parece mais simples, combinada com arrow function não é necessário usar o .bind() nem constructor

  handleButtons = ({target}) => {
    const {name} = target
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }))
  }

  btnColor = (num) => num % 2 === 0 ? 'green' : 'red';

  render() {
    const { button1, button2, button3 } = this.state;
    return(
      <>
        <Button1
          handleButtons={ this.handleButtons }
          btnColor={ this.btnColor }
          button1={ button1 }
        />
        <Button2
          handleButtons={ this.handleButtons }
          btnColor={ this.btnColor }
          button2={ button2 }
        />
        <button
          name="button3"
          onClick={this.handleButtons}
          style={ { backgroundColor: this.btnColor(button3) } }
        >{button3}</button>
      </>
    );
  }
}

export default App;
