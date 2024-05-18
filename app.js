const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users');
const gamesRouter = require('./routes/games');
const categoriesRouter = require('./routes/categories');

const PORT = 3000;

const app = express();

app.use(
    bodyParser.json(),
    express.static(path.join(__dirname, 'public')),
    usersRouter,
    gamesRouter,
    categoriesRouter
);

app.listen(PORT, () => {
    console.log(`Server is running at PORT http:/localhost:${PORT}`);
});