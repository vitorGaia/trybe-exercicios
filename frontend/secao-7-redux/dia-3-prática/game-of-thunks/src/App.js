import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchPerson } from './redux/actions';
import CharacterCard from './CharacterCard';

class App extends Component {
  state = {
    search: '',
  }

  handleChange = ({target}) => this
  .setState({ [target.name]: target.value });

  handleClick = () => {
    const { search } = this.state;
    const { dispatch } = this.props;
    dispatch(fetchPerson(search, dispatch));
  }

  render() {
    const { character } = this.props;
    return (
      <main>
        <form>
          <input
          type='text'
          placeholder='Nome completo'
          name='search'
          onChange={ this.handleChange }
          />

          <button
          type='button'
          onClick={this.handleClick}
          >
            Pesquisar
          </button>
        </form>

        {character && <CharacterCard
          character={ character }
        />}
    </main>
    );
  }
}

const mapStateToProps = (state) => ({
  character: state.reducer.data,
})

export default connect(mapStateToProps)(App);
