const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',
    port: process.env.DATABASE_PORT
  },
);

const models = {
  // Users: sequelize.import('./users'),
  UserState: sequelize.import('./userState'),
  ProjectsState: sequelize.import('./projectsState'),
  MembersState: sequelize.import('./membersState'),
  TasksState: sequelize.import('./tasksState')
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

module.exports = {
  models,
  sequelize
}