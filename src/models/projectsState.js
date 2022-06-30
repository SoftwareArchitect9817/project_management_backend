module.exports = (sequelize, DataTypes) => {
  const projectsState = sequelize.define('PM_projectsState', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    team: {
      type: DataTypes.TEXT
    },
    progress: {
      type: DataTypes.INTEGER
    },
    createdAt: {
      type: DataTypes.STRING
    },
    tasks: {
      type: DataTypes.INTEGER
    },
    status: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: false
  });

  projectsState.findProjectInfo = async () => {
    let project = await projectsState.findAll({});
    return project;
  };

  return projectsState;
};