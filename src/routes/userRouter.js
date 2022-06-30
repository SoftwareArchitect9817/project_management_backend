const router = require("express-promise-router")();

router.post('/user_info', (req, res) => {
  req.context.models.Users.findByUser().then((user) => {
    res.send({ "userinfo": user, status: true });
  }).catch(function (error) {
    console.log(error);
    res.send({ status: false });
  });
});

module.exports = router;