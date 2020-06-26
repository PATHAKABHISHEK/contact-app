const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(cors());

let contacts = [
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
];

app.get("/contacts", (req, res) => {
  res.send({
    contacts: contacts,
  });
});

app.get("/removeContact", (req, res) => {
  let handle = req.query.handle;
  contacts = contacts.filter((c) => {
    return c.handle != handle;
  });
  console.log("removed");
  res.send({
    contacts: contacts,
  });
});

app.post("/addContact", (req, res) => {
  let name = req.body.name;
  let handle = req.body.handle;
  console.log(req.body);
  contacts = [
    ...contacts,
    {
      name: name,
      handle: handle,
    },
  ];
  console.log(contacts);
  res.send({
    contacts,
  });
});
app.listen(5001, () => {
  console.log("Server is listening on Port 5001");
});
