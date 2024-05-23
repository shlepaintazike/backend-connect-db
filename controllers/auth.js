const user = require('../models/user');
const jwt = require('jsonwebtoken');

const login = (req, res) => {
    const { email, password } = req.body;

    user
        .findUserByCredentials(email, password)
        .then(user => {
            const token = jwt.sign({ _id: user.id }, 'some-secret-key', { expiresIn: 3600 })
            return { user, token };
        })

        .then(({ user, token }) => {
            res
                .status(200)
                .send({ _id: user._id, username: user.username, email: user.email, jwt: token });
        })
        .catch(error => {
            res.status(401).send({ message: error.message });
        })
};

module.exports = { login };