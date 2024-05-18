const { sendGameCreated, sendAllGames, sendGameUpdated } = require('../controllers/games');
const { findAllGames, createGame, findGameById, updateGame } = require('../middlewars/games');

const gamesRouter = require('express').Router();

gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.post('/games', findAllGames, createGame, sendGameCreated);
gamesRouter.put('/games/:id', findGameById, updateGame, sendGameUpdated);

module.exports = gamesRouter;