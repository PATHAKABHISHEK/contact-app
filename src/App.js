import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Contact from "./Contact";

class App extends Component {
  state = {
    contacts: [
      {
        name: "Abhishek Pathak",
        handle: "@abc",
        imageUrl:
          "C:\\Users\\AP185396\\Documents\\contact-app\\public\\logo512.png",
      },
      {
        name: "Tommy",
        handle: "@tbc",
        imageUrl: "",
      },
      {
        name: "Abhishek Pathak",
        handle: "@ac",
        imageUrl: "",
      },
      {
        name: "Abhishek Pathak",
        handle: "@tommy",
        imageUrl: "",
      },
    ],
  };
  render() {
    return (
      <div className="main">
        {this.state.contacts.map((contact) => {
          return <Contact name={contact.name} handle={contact.handle} />;
        })}
      </div>
    );
  }
}

export default App;
