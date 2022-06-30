module.exports = (sequelize, DataTypes) => {
  const tasksState = sequelize.define('PM_tasksState', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    projectId: {
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING
    },
    members: {
      type: DataTypes.TEXT
    },
    progress: {
      type: DataTypes.INTEGER
    }
  }, {
    timestamps: false
  });

  tasksState.findTaskInfo = async () => {
    let task = await tasksState.findAll({});
    return task;
  };

  return tasksState;
};