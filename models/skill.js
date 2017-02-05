'use strict';
module.exports = function(sequelize, DataTypes) {
  var Skill = sequelize.define('Skill', {
    skill: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        Skill.belongsToMany(models.User, {through: 'UserSkill'});
      }
    }
  });
  return Skill;
};
