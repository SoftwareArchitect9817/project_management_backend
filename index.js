const express = require('express');
const http = require("http");
const cors = require('cors');
const bodyParser = require('body-parser');

// .env allow
const dotenv = require('dotenv');
dotenv.config();

const mainModel = require("./src/models");
// const sequelize = mainModel.sequelize;
const models = mainModel.models;
const routes = require('./src/routes');
const { socketdata } = require('./src/config');

// app configuration
const app = express();
app.use(cors({ origin: '*' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use("/api", routes);
// app.use(async (req, res, next) => {
//   req.context = {
//     models
//   };
//   next();
// });

const PORT = 8080;
app.listen(PORT, () => { console.log(`Server is running on port ${PORT}.`); });

// const data1 = require("./src/seed/projectsState.json");
// const data2 = require("./src/seed/membersState.json");
// const data3 = require("./src/seed/tasksState.json");
// // Tables create and start server
// (async () => {
//   await sequelize.sync({ force: true });
//   console.log('hello')
//   for (let i = 0; i < data1.length; i++) {
//     let data_ = data1[i];
//     data_.team = JSON.stringify(data_.team);
//     console.log('data', data_);
//     await models.ProjectsState.create(data_);
//     console.log('success')
//   }
//   for (let i = 0; i < data2.length; i++) {
//     let data_ = data2[i];
//     console.log('data', data_);
//     await models.MembersState.create(data_);
//     console.log('success')
//   }
//   for (let i = 0; i < data3.length; i++) {
//     let data_ = data3[i];
//     data_.members = JSON.stringify(data_.members);
//     console.log('data', data_);
//     await models.TasksState.create(data_);
//     console.log('success')
//   }
// })();