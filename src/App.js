import React, { Component } from "react";
import "./App.css";
import Contact from "./Contact";
import ApiRequest from "./ApiRequest";
import { Link, Route } from "react-router-dom";
import serializeForm from "form-serialize";

class App extends Component {
  state = {
    contacts: [],
    query: "",
    screen: "list",
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

  handleSubmit = (e) => {
    e.preventDefault();
    const values = serializeForm(e.target, { hash: true });
    ApiRequest.addContacts(values).then((contacts) => {
      console.log(contacts);
      this.setState({
        contacts: contacts,
      });
    });
  };

  render() {
    return (
      <div className="main">
        <Route
          exact
          path="/"
          render={() => (
            <div>
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
                <Link
                  to="/create"
                  onClick={() => this.setState({ screen: "contact" })}
                >
                  Add Contact
                </Link>
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
          )}
        />
        <Route
          exact
          path="/create"
          render={() => (
            <div>
              <Link to="/" onClick={() => this.setState({ screen: "list" })}>
                Go Back
              </Link>
              <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" placeholder="Enter Name" />
                <input type="text" name="handle" placeholder="Enter Handle" />
                <button>Add Contact</button>
              </form>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
