const { User } = require('../models/index');

User.create({firstName: 'kevin', lastName: 'Dude', email: 'kevin@email.com'})
  .then( (createdUser)=> {
    console.log('Created user', {id: createdUser.id, name: createdUser.fullName})
  })
  .catch(console.error);


User.count({})
  .then( (userCount)=> {
    console.log('Number of users', userCount);
  })
  .catch(console.error);


User.findById(2)
  .then( (user)=> {
    console.log('Found user', {id: user.id, name: user.fullName });
  })
  .catch(console.error);


User.findOne({where:{firstName: 'Jasmin'}})
  .then( (user)=> {
    console.log('Found user', {id: user.id, name: user.fullName});
  })
  .catch(console.error);


User.findAll({where:{firstName: 'Jasmin'}})
  .then( (users)=> {
    console.log('Found users', users.length);
})
    .catch(console.error);




User.update({name: 'Tommy'}, {where:{id: 1}})
    .then( (updated)=> {
        console.log('Updated', updated);
        // user.update({name: 'New name'})

    })
    .catch(console.error);