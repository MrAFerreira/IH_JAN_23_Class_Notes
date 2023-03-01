import React from 'react';

function Summary(props) {
  const { tasksCompleted } = props;
  return (
    <div>
      <h1>TASKS COMPLETED:</h1>
      <h1 className="tasks-completed">{tasksCompleted}</h1>
    </div>
  );
}

export default Summary;
