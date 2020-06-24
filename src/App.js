import React, { Component } from "react";
import "./App.css";
import Contact from "./Contact";
import ApiRequest from "./ApiRequest";

class App extends Component {
  state = {
    contacts: [],
    query: "",
  };
  componentDidMount() {
    ApiRequest.getContacts().then((contacts) => {
      this.setState({ contacts });
    });
  }

  removeContact = (contact) => {
    ApiRequest.removeContact(contact).then((contacts) => {
      this.setState({
        contacts: this.state.contacts.filter((c) => {
          return c.handle !== contact;
        }),
      });
    });
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
            return (
              <Contact
                removeContact={this.removeContact}
                name={contact.name}
                handle={contact.handle}
                key={contact.handle}
              />
            );
          })}
      </div>
    );
  }
}

export default App;
