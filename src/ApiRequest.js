class ApiRequest {
  getContacts() {
    return new Promise((resolve, reject) => {
      fetch("http://localhost:5001/contacts")
        .then((response) => response.json())
        .then((data) => resolve(data.contacts));
    });
  }

  removeContact(contactHandle) {
    return new Promise((resolve, reject) => {
      fetch(`http://localhost:5001/removeContact?handle=${contactHandle}`)
        .then((response) => response.json())
        .then((data) => resolve(data.contacts));
    });
  }
  addContacts(values) {
    return new Promise((resolve, reject) => {
      fetch("http://localhost:5001/addContact", {
        method: "POST",
        body: JSON.stringify({
          name: values.name,
          handle: values.handle,
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((data) => resolve(data.contacts));
    });
  }
}

export default new ApiRequest();
