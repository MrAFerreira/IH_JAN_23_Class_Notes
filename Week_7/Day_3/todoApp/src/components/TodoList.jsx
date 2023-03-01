import { useState } from 'react';
import Task from './Task';
import Summary from './Summary';

const initialTasks = [
  {
    _id: '1a',
    name: 'Task1',
    description: 'Do something important',
    done: false,
  },
  {
    _id: '2b',
    name: 'Task2',
    description: 'Do something important',
    done: false,
  },
  {
    _id: '3c',
    name: 'Task3',
    description: 'Do something important',
    done: false,
  },
];

function TodoList() {
  const [tasks, setTasks] = useState(initialTasks);
  const [tasksCompleted, setTasksCompleted] = useState(0);

  const toggleTask = (taskId) => {
    //Create a copy of the array so we don't mutate it
    const tasksCopy = [...tasks];

    //loop over the array and change the done property of the correct task
    tasksCopy.forEach((task) => {
      if (taskId === task._id) {
        task.done = !task.done;

        if (task.done) setTasksCompleted(tasksCompleted + 1);
        else setTasksCompleted(tasksCompleted - 1);
      }
    });

    setTasks(tasksCopy);
  };

  return (
    <div>
      <Summary tasksCompleted={tasksCompleted} />

      <div className="todo-container">
        {tasks.map((task) => (
          <Task key={task._id} task={task} toggleTask={toggleTask} />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
