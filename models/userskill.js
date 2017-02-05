'use strict';
module.exports = function(sequelize, DataTypes) {
  var UserSkill = sequelize.define('UserSkill', {
    UserId: DataTypes.INTEGER,
    SkillId: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return UserSkill;
};
