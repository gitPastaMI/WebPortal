module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
      // email: {
      //   type: DataTypes.STRING,
      //   unique: true,
      //   allowNull: false
      // },
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {});

    User.associate = function(models) {
      // associations can be defined here
      // set up the associations so we can make queries that include
      // the related objects
      // User.hasMany(models.AuthToken);
      // TO DO : lets create another Model, to store our auth tokens. The reason we don’t want to store our auth tokens directly on the user model is so that we can be logged in from multiple devices
    };

    return User
}
