const router = require("express-promise-router")();
const { models } = require("../models");

router.post('/project_state_info', (req, res) => {

  models.ProjectsState.findProjectInfo().then((project) => {
    res.send({ "projectinfo": project, status: true });
    console.log("project");
  }).catch(function (error) {
    console.log(error);
    res.send({ status: false });
  });
});

module.exports = router;