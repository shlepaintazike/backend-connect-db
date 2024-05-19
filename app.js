const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const connectToDatabase = require('./database/connect');
const categoriesRouter = require('./routes/categories');
const gamesRouter = require('./routes/games');
const usersRouter = require('./routes/users');

const PORT = 3000;

const app = express();
connectToDatabase();

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