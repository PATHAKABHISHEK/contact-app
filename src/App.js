import React, { Component } from "react";
import "./App.css";
import Contact from "./Contact";

class App extends Component {
  state = {
    contacts: [
      {
        name: "Abhishek Pathak",
        handle: "@abc",
      },
      {
        name: "Tommy",
        handle: "@tbc",
      },
      {
        name: "Abhishek Pathak",
        handle: "@ac",
      },
      {
        name: "Abhishek Pathak",
        handle: "@tommy",
      },
    ],
    query: "",
  };
  render() {
    return (
      <div className="main">
        <form className="search-form">
          <h4>Search: </h4>&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            placeholder="Search Contacts"
            value={this.state.query}
            style={{
              width: "350px",
              height: "30px",
              border: "2px solid",
              borderRadius: "1%",
            }}
            onChange={(e) => {
              this.setState({ query: e.target.value });
            }}
          />
        </form>
        {this.state.contacts
          .filter((contact) => {
            return contact.name
              .toLowerCase()
              .includes(this.state.query.toLowerCase());
          })
          .map((contact) => {
            return <Contact name={contact.name} handle={contact.handle} />;
          })}
      </div>
    );
  }
}

export default App;
