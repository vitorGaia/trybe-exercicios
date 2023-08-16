// ./src/components/CharacterCard.js
import React from 'react';

class CharacterCard extends React.Component {
  render() {
    const { character } = this.props;
    console.log(character);
    return (
      <ul>
        <li>Name: {character.name}</li>
        <li>Born: {character.born}</li>
        <li>
          Titles:
          <ol>
            {character.titles.map((title, index) => (
              <li key={`${title}-${index}`}>{title}</li>
            ))}
          </ol>
        </li>
        <li>
          Aliases:
          <ol>
            {character.aliases.map((alias, index) => (
              <li key={`${alias}-${index}`}>{alias}</li>
            ))}
          </ol>
        </li>
      </ul>
    );
  }
}

export default CharacterCard;
