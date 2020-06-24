import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
          alt="image"
          className="image"
        />
        <div className="details">
          <h3>{this.props.name}</h3>
          <h5>{this.props.handle}</h5>
        </div>
      </div>
    );
  }
}

export default Contact;
