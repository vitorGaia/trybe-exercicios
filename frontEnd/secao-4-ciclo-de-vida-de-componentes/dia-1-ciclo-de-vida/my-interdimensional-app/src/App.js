import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        characters: [],
    };
  }

  fetchCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      this.setState({characters: data.results})
    })
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  render() {
    const { characters } = this.state;
    return (
      <>
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
      </div>
      <div className='body'>
        {/* este código roda antes do retorno da API, assim acabaria não renderizando nossos objetos, contornamos esse problema chamando a a nossa requisição pra dentro do componentDidMount */}
        {characters.map(({ name, image }) => {
          return (
            <div key={name}>
              <h3>{name}</h3>
              <img src={image} alt={name} />
            </div>
          )
        })}
      </div>
      </>
    );
  }
}

export default App;