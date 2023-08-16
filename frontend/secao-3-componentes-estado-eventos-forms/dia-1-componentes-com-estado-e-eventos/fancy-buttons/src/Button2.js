import React, { Component } from "react";

class Button2 extends Component {
  render() {
    const { handleButtons, btnColor, button2 } = this.props
    return (
      <button
        name="button2"
        onClick={ handleButtons }
        style={ { backgroundColor: btnColor(button2) } }
        value={ button2 }
      >{ button2 }</button>
    )
  }
}

export default Button2