const router = require("express-promise-router")();
const { models } = require("../models");

router.post('/user_state_info', (req, res) => {

  models.UserState.findUserInfo().then((user) => {
    res.send({ "userinfo": user, status: true });
    console.log("user");
  }).catch(function (error) {
    console.log(error);
    res.send({ status: false });
  });
});

module.exports = router;