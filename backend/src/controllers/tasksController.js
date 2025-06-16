const tasksController = {};
import tasksModel from "../models/tasks.js";

// SELECT
tasksController.gettasks = async (req, res) => {
  const tasks = await tasksModel.find();
  res.json(tasks);
};

// INSERT
tasksController.createtasks = async (req, res) => {
  const { tittle, description, completed } = req.body;
  const newtasks = new tasksModel({ tittle, description, completed });
  await newtasks.save();
  res.json({ message: "task saved" });
};

// DELETE
tasksController.deletetasks = async (req, res) => {
const deletedtasks = await tasksModel.findByIdAndDelete(req.params.id);
  if (!deletedtasks) {
    return res.status(404).json({ message: "tasks weren't found" });
  }
  res.json({ message: "task deleted" });
};

// UPDATE
tasksController.updatetasks = async (req, res) => {
  // Solicito todos los valores
  const { tittle, description, completed  } = req.body;
  // Actualizo
  await tasksModel.findByIdAndUpdate(
    req.params.id,
    {
        tittle, description, completed 
    },
    { new: true }
  );
  // muestro un mensaje que todo se actualizo
  res.json({ message: "task updated" });
};

export default tasksController;