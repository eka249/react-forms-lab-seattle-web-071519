import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleOnChange = (e) => {
    
    this.setState({
      message : e.target.value
    })
    console.log(this.state.message)
    // console.log(e.target.value)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange = {this.handleOnChange} 
        value = {this.state.message}
        />
        <p>{this.props.maxChars - this.state.message.length}
        </p> 
      </div>
    );
  }
}

export default TwitterMessage;
