import React, { useState } from 'react';

const TaskModal = ({ isOpen, onClose, onAddTask }) => {
  const [input, setInput] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [repeat, setRepeat] = useState('none');

  const handleAddTask = () => {
    onAddTask({ title: input, completed: false, dueDate, repeat });
    setInput('');
    setDueDate('');
    setRepeat('none');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="flex flex-col space-y-4">
          <input
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Add a task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="date"
            placeholder="Due date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <select
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={repeat}
            onChange={(e) => setRepeat(e.target.value)}
          >
            <option value="none">None</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
          <div className="flex justify-end space-x-4">
            <button
              className="bg-blue-500 text-white rounded-lg px-4 py-2 shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={handleAddTask}
            >
              Add
            </button>
            <button
              className="bg-gray-300 text-gray-800 rounded-lg px-4 py-2 shadow hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;