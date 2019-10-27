// app.js

const express = require("express");
const session = require("express-session");
const auth = require("./auth");

const app = express();

app.use(auth);

app.get("/", function(req, res) {
  const loggedInUser = req.session.user;
  if (!loggedInUser) {
    return res.send("Você não está autenticado!");
  }

  // equivalente a:
  // res.send("Olá " + loggedInUser.username + ", como vai?");
  res.send(`Olá ${loggedInUser.username}, como vai?`);
});

app.listen(3000, ...);

// auth.js

const express = require("express");
const router = express.Router();

// Rota de login
router.post("/auth/login", function(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      error: "Tanto o email quanto a senha são obrigatórios"
    });
  }

  // não façam isso em casa
  if (username !== "admin" && password !== "abc123") {
    return res.status(401).json({
      error: "Senha inválida"
    });
  }

  req.session.user = { id: 111, username: "admin" };
  res.json({ message: "Login realizado com sucesso!" });
});

// Rota de logout
router.post("/auth/logout", function(req, res) {
  req.session.destroy(err => {
    res.clearCookie('connect.sid', ...);
    res.json({ message: "Você deslogou da sua conta" });
  });
});

module.exports = router;
