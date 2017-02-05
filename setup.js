'use strict'

const db = require('./models')

// function seed(number) {
//   for (let i = 1; i <= number; i++){
//     let randy = Math.floor(Math.random()*5)+1
//     db.UserSkill.create({UserId: i, SkillId: randy})
//   }
// }
// seed(30)
db.User.create({ /* */ }).then(function(user) {
  return db.Skill.create({ /* */ }).then(function(skill) {
    return user.hasUser(skill).then(function(result) {
      console.log(result);
      return user.addUser(skill).then(function() {
        return user.hasUser(skill).then(function(result) {
          console.log(result);
        })
      })
    })
  })
})
