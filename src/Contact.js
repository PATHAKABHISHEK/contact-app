import React, { Component } from "react";
import "./Contact.css";
import { findByLabelText } from "@testing-library/react";
import PropTypes, { string } from "prop-types";

class Contact extends Component {
  render() {
    return (
      <div className="container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
          className="image"
          alt="user"
        />
        <div className="content">
          <div className="details">
            <h3>{this.props.name}</h3>
            <h5>{this.props.handle}</h5>
          </div>
          <button
            onClick={(e) => {
              this.props.removeContact(this.props.handle);
            }}
            style={{
              height: "50%",
              backgroundColor: "red",
              color: "white",
              padding: "5px",
              border: "1px solid",
              borderRadius: "10%",
            }}
          >
            Remove
          </button>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  name: string.isRequired,
  handle: string.isRequired,
};

export default Contact;
