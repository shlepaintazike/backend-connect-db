const { sendGameCreated, sendAllGames, sendGameUpdated, sendGameDeleted, sendGameById } = require('../controllers/games');
const { findAllGames, createGame, findGameById, updateGame, deleteGame, checkIsGameExists, checkIfCategoriesAvaliable, checkEmptyFields, checkIfUsersAreSafe } = require('../middlewars/games');

const gamesRouter = require('express').Router();

gamesRouter.get('/games', findAllGames, sendAllGames, findGameById, sendGameById);
gamesRouter.post('/games', findAllGames, checkIsGameExists, checkIfCategoriesAvaliable, checkEmptyFields, createGame, sendGameCreated);
gamesRouter.put('/games/:id', findGameById, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkEmptyFields, updateGame, sendGameUpdated);
gamesRouter.delete('/games/:id', deleteGame, sendGameDeleted);

module.exports = gamesRouter;