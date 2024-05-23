const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
});

userSchema.statics.findUserByCredentials = function (email, password) {
  return this
    .findOne({ email })
    .then(user => {
      if (!user) {
        return Promise.reject(new Error('Неправильный логин или пароль'));
      }

      return bcrypt.compare(password, user.password).then(matched => {
        if (!matched) {
          return Promise.reject(new Error('Неправильный логин или пароль'));
        }

        return user
      })
    })
}

module.exports = mongoose.model('user', userSchema); 