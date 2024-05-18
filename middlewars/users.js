const users = require("../models/user");


const findAllUsers = async(req, res, next) => {
    console.log('GET /users');
    req.usersArray = await user.find({});
    next();
};

const findUserById = async(req, res, next) => {
    try{
        req.user =await users.findById(req.params.id);
        next();
    } catch (err) {
        res.status(404).send({message: 'User not found'})
    }
}

const createUser = async(req, res, next) => {
    try {
        req.user = await users.create(req.body);
        next()
    } catch (err) {
        res.status(400).send({message: 'Error creating user'})
    }
};

const updateUser = async(req, res, next) => {
    try {
        req.user = await users.findByIdAndUpdatereq(req.params.id, req.body);
        next()
    } catch (err) {
        res.status(400).send({message: 'Error updating user'})
    }
};

const checkEmptyNameAndEmail = async (req, res, next) => {
    if (!req.body.username || !req.body.email) {
        res.status(400).send({message: 'Введите имя и email'})
    } else {
        next();
    }
};

module.exports= {findAllUsers, findUserById, createUser, updateUser, checkEmptyNameAndEmail};