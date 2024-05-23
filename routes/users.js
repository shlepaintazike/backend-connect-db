const {
    sendUserCreated,
    sendAllUsers,
    sendUserUpdated,
    sendUserDeleted,
    sendUserById } = require('../controllers/users');

const {
    findAllUsers,
    createUser,
    updateUser,
    deleteUser,
    findUserById,
    checkEmptyNameAndEmailAndPassword,
    checkEmptyNameAndEmail,
    checkIsUserExists, 
    hashPassword} = require('../middlewars/users');


const usersRouter = require('express').Router();


usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.get('/users/:id', findUserById, sendUserById);


usersRouter.post(
    '/users',
    findAllUsers,
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    hashPassword,
    createUser,
    sendUserCreated);

usersRouter.put(
    '/users/:id',
    checkEmptyNameAndEmail,
    updateUser,
    sendUserUpdated);

usersRouter.delete('/users/:id', deleteUser, sendUserDeleted);

module.exports = usersRouter;