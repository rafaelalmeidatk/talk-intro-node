const express = require("express");
const app = express();

const users = [
  {
    id: 0,
    name: "Rafael"
  },
  {
    id: 1,
    name: "Marcos"
  }
];

app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.get("/users", function(req, res) {
  res.json(users);
});

app.get("/user/:id", function(req, res) {
  const idParam = parseInt(req.params.id, 10);

  const user = users.find(u => u.id === idParam);
  res.json(user);
});

app.post("/user", function(req, res) {
  // equivalente a:
  // const nome = req.body.nome;
  // const email = req.body.email;
  const { nome, email } = req.body;

  // equivalente a:
  // users.push({ nome: nome, email: email });
  users.push({ nome, email });

  res.send("Usuário registrado");
});

app.listen(3000, function() {
  console.log("Servidor rodando na porta 3000");
});
