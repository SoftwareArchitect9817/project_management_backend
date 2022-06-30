module.exports = (sequelize, DataTypes) => {
  const userState = sequelize.define('PM_userState', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
    photo: {
      type: DataTypes.STRING
    },
    designation: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: false
  });

  userState.findUserInfo = async () => {
    let user = await userState.findOne({});
    return user;
  };

  return userState;
};