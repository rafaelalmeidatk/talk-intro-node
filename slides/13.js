// users.js

const express = require("express");
const router = express.Router();

router.get('/', function(req, res) {
    res.send(...);
})

module.exports = router;

// app.js

const express = require("express");

const usersRouter = require('./users');
const booksRouter = require('./books');

const app = express();

app.use(usersRouter);
app.use(booksRouter);

app.listen(3000, ...);
