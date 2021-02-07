var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var saltRounds = 10;

var UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

UserSchema.methods.isCorrectPassword = function(password, callback){
  bcrypt.compare(password, this.password, function(err, same) {
    if (err) {
      callback(err);
    } else {
      callback(err, same);
    }
  });
}

UserSchema.pre('save', function(next) {
  if (this.isNew || this.isModified('password')) {
    var document = this;
    bcrypt.hash(document.password, saltRounds,
      function(err, hashedPassword) {
      if (err) {
        next(err);
      }
      else {
        document.password = hashedPassword;
        next();
      }
    });
  } else {
    next();
  }
});

var User = mongoose.model('User', UserSchema);

module.exports = User;