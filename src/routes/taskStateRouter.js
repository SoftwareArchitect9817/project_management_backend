const router = require("express-promise-router")();
const { models } = require("../models");

router.post('/task_state_info', (req, res) => {

  models.TasksState.findTaskInfo().then((task) => {
    res.send({ "taskinfo": task, status: true });
    console.log("task");
  }).catch(function (error) {
    console.log(error);
    res.send({ status: false });
  });
});

module.exports = router;