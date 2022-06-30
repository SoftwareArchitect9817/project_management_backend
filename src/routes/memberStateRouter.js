const router = require("express-promise-router")();
const { models } = require("../models");

router.post('/member_state_info', (req, res) => {

  models.MembersState.findMemberInfo().then((member) => {
    res.send({ "memberinfo": member, status: true });
    console.log("member");
  }).catch(function (error) {
    console.log(error);
    res.send({ status: false });
  });
});

module.exports = router;