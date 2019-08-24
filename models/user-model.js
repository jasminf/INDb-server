const mongoose = require('mongoose');

const user = mongoose.Schema({

  firstName:{
    type :String,
    required: true
  },
  lastName:{
    type :String,
    required: true
  },
  email:{
    type :String,
    required: true
  },
  password:{
    type :String,
    required: true
  },
  favouritePet: {
    type :String,
    required: false
  }

});

// userSchema.methods.fullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// };
//
// userSchema.statics.findByEmail = function(email) {
//   return this.find({email})
// };

// userSchema.statics.createUserData = function(email, firstName, lastName) {
//   const password = GeneratePassword()
//   return this.create({email, firstName, lastName, password})
// };

// const adam = User.findByEmail('yelled3@')
// adam.fullName()

module.exports = mongoose.model('User', user);

