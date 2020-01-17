const topicsRouter = require("express").Router();
const { sendTopics } = require("../controllers/topics-controller");
const { send405Error } = require("../errors/index");

topicsRouter
  .route("/")
  .get(sendTopics)
  .all(send405Error);
module.exports = topicsRouter;
