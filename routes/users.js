const { sendUserCreated, sendAllUsers, sendUserUpdated, sendUserDeleted, sendUserById } = require('../controllers/users');
const { findAllUsers, createUser, updateUser, deleteUser, findUserById, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail, checkIsUserExists } = require('../middlewars/users');

const usersRouter = require('express').Router();

usersRouter.get('/users', findAllUsers, sendAllUsers, findUserById, sendUserById);
usersRouter.post('/users', findAllUsers, checkIsUserExists, checkEmptyNameAndEmailAndPassword, createUser, sendUserCreated);
usersRouter.put('/users/:id', checkEmptyNameAndEmail, updateUser, sendUserUpdated );
usersRouter.delete('/users/:id', deleteUser, sendUserDeleted);

module.exports = usersRouter;