import React from 'react';

const Task = ({ task }) => {
  return (
    <div className="task">
      <input type="checkbox" checked={task.completed} readOnly />
      <span>{task.name}</span>
    </div>
  );
};

export default Task;
