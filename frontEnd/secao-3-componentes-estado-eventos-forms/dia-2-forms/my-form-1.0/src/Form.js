import React from "react";

class Form extends React.Component {
  constructor(props) {
    super()
    this.fileInput = React.createRef();
  }

  state = {
    inputName: '',
    inputLastname: '',
    inputCheck: false,
    selectInput: '',
  }

  handleChange = ({ target }) => {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value
    // esta linha cuida caso o input type seja do tipo checkbox

    this.setState({
      [name]: value
    })
  }

  handleInputFile = (event) => {
    event.preventDefault()
    alert(`Select file - ${this.fileInput.current.files[0].name}`)
  }

  render() {
    return (
      <form>
        <h1>Meu Primeiro Form em React</h1>
        <fieldset>
          <legend>Componentes Controlados</legend>
          <label> Nome
            <input
              name="inputName"
              type="textArea"
              onChange={ this.handleChange }
              value={ this.state.inputName }
            />
          </label>

          <label> Sobrenome
            <input
              name="inputLastname"
              type="textArea"
              onChange={ this.handleChange }
              value={ this.state.inputLastname }
            />
          </label>

          <label> Check
            <input
              name="inputCheck"
              type="checkbox"
              onChange={ this.handleChange }
              value={ this.state.inputCheck }
            />
          </label>

          <select
            name="selectInput"
            type="select"
            onChange={ this.handleChange }
            value={ this.state.selectInput }
          >
            <option value="">Escolha uma opção</option>
            <option value="Lau">Lau</option>
            <option value="Vrau">Vrau</option>
          </select>
        </fieldset>

        <fieldset>
          <legend>Componentes Não Controlados</legend>
          <label> Upload File
            <input
              type="file"
              ref={this.fileInput}
              onChange={this.handleInputFile}
            />
          </label>
        </fieldset>
      </form>
    )
  }
}

export default Form