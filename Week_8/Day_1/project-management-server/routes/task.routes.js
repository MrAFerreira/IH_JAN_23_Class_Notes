const router = require('express').Router();

//import the models
const Task = require('../models/Task.model');
const Project = require('../models/Project.model');

//Create

router.post('/tasks', async (req, res, next) => {
  const { title, description, project } = req.body;

  try {
    const task = await Task.create({ title, description, project });

    await Project.findByIdAndUpdate(project, {
      $push: {
        tasks: task._id,
      },
    });

    res.json(task);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
