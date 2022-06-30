module.exports = (sequelize, DataTypes) => {
  const membersState = sequelize.define('PM_membersState', {
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
    },
    lastSeen: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: false
  });

  membersState.findMemberInfo = async () => {
    let member = await membersState.findAll({});
    return member;
  };

  return membersState;
};