const router = require("express-promise-router")();

const userRouter = require('./userRouter');
const userStateRouter = require('./userStateRouter');
const projectStateRouter = require('./projectStateRouter');
const memberStateRouter = require('./memberStateRouter');
const taskStateRouter = require('./taskStateRouter');

router.use('/users', userRouter);
router.use('/userStates', userStateRouter);
router.use('/projectStates', projectStateRouter);
router.use('/memberStates', memberStateRouter);
router.use('/taskStates', taskStateRouter);

module.exports = router