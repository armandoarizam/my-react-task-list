import React from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';


const tasks = [
  { id: 1, name: 'Task 1', completed: false },
  { id: 2, name: 'Task 2', completed: true },
  { id: 3, name: 'Task 3', completed: false },
];

const App = () => {
  return (
    <div className="app">
      <Header />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
