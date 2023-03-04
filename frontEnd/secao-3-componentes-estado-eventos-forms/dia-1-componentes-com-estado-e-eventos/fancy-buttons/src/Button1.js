import React, { Component } from "react";

class Button1 extends Component {
  render() {
    const { handleButtons, btnColor, button1 } = this.props
    return (
      <button
        name="button1"
        onClick={ handleButtons }
        style={ { backgroundColor: btnColor(button1) } }
        value={ button1 }
      >{ button1 }</button>
    )
  }
}

export default Button1