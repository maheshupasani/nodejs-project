'use strict';
module.exports = (sequelize, DataTypes) => {
  const UsersRoles = sequelize.define('UsersRoles', {
    user_id: DataTypes.INTEGER,
    roles_id: DataTypes.INTEGER
  }, {});
  UsersRoles.associate = function(models) {
    // associations can be defined here
  };
  return UsersRoles;
};