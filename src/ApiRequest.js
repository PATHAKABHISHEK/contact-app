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
}

export default new ApiRequest();
