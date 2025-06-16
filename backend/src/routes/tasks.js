import express from "express";
import tasksController from "../controllers/tasksController.js";

const router = express.Router();

router
  .route("/")
  .get(tasksController.gettasks)
  .post(tasksController.createtasks);

router
  .route("/:id")
  .put(tasksController.updatetasks)
  .delete(tasksController.deletetasks);

export default router;