import React from 'react';

const Board = ({ task, index, TaskList, setTaskList, toggleTaskCompletion }) => {
  const handleDelete = () => {
    const updatedTaskList = TaskList.filter((_, idx) => idx !== index);
    setTaskList(updatedTaskList);
  };

  const handleToggleCompletion = () => {
    toggleTaskCompletion(index);
  };

  const isToday = (date) => {
    const today = new Date();
    const taskDate = new Date(date);
    return taskDate.toDateString() === today.toDateString();
  };

  return (
    <div className="bg-gray-200 rounded-lg shadow p-4 flex flex-col justify-between transition-all transform hover:scale-105">
      <div className="flex items-center w-full">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggleCompletion}
          className="mr-2 h-5 w-5 text-gray-800"
        />
        <p className={`flex-grow text-lg ${task.completed ? 'line-through text-gray-400' : ''}`}>
          {task.title}
        </p>
      </div>
      <div className="mt-2">
        <p className="text-sm text-gray-600">
          Due: {isToday(task.dueDate) ? 'Today' : task.dueDate}
        </p>
        <p className="text-sm text-gray-600">Repeat: {task.repeat}</p>
      </div>
      <button
        className="self-end mt-2 bg-gray-800 text-white rounded-lg py-1 px-3 shadow hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default Board;