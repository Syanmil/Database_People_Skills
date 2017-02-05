'use strict';
module.exports = function(sequelize, DataTypes) {
  var Skill = sequelize.define('Skill', {
    skill: DataTypes.STRING,
    score: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Skill.belongsToMany(Skill, {through: 'UserSkill'});
      }
    }
  });
  return Skill;
};
