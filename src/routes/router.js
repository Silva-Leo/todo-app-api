const express = require("express");
const router = express.Router();

const UserRouter = require("./userRouter");
const TaskRouter = require("./taskRouter");

router.use((req, res, next) => {
    console.log(req.headers.host, new Date().toLocaleTimeString()); //*não sei o que faz ainda
    next();
  });

router.use(express.json());

router.use("/users", UserRouter);
router.use("/tasks", TaskRouter);

module.exports = router;