import React, { useState } from 'react';

const Input = ({ TaskList, setTaskList }) => {
  const [input, setInput] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    setTaskList([...TaskList, { title: input, completed: false }]);
    setInput(''); // Clear input after adding the task
  };

  return (
    <form className="flex w-full max-w-md space-x-3">
      <input
        className="flex-grow border rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Add a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white rounded-lg px-4 py-2 shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={handleAddTask}
      >
        Add
      </button>
    </form>
  );
};

export default Input;
