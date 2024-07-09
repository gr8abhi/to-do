import React, { useState } from 'react';

const Input = ({ TaskList, setTaskList }) => {
  const [input, setInput] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [repeat, setRepeat] = useState('none');

  const handleAddTask = (e) => {
    e.preventDefault();
    setTaskList([...TaskList, { title: input, completed: false, dueDate, repeat }]);
    setInput(''); // Clear input after adding the task
    setDueDate('');
    setRepeat('none');
  };

  return (
    <form className="flex flex-col w-full max-w-md space-y-3">
      <input
        className="flex-grow border rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Add a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <input
        className="flex-grow border rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="date"
        placeholder="Due date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <select
        className="flex-grow border rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={repeat}
        onChange={(e) => setRepeat(e.target.value)}
      >
        <option value="none">None</option>
        <option value="Daily">Daily</option>
        <option value="Weekly">Weekly</option>
        <option value="Monthly">Monthly</option>
      </select>
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