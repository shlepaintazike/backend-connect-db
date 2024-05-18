const sendAllUsers = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.usersArray))
};

const sendUserCreated = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.user))
};

const sendUserUpdated = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({message: 'Пользователь обновлён'}))
};

module.exports={sendAllUsers, sendUserCreated, sendUserUpdated};