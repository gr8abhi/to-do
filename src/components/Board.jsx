const Board = ({ task, index, TaskList, setTaskList, toggleTaskCompletion }) => {
    const handleDelete = () => {
      const updatedTaskList = TaskList.filter((_, idx) => idx !== index);
      setTaskList(updatedTaskList);
    };
  
    const handleToggleCompletion = () => {
      toggleTaskCompletion(index);
    };
  
    return (
      <div className="bg-white rounded-lg shadow p-4 flex flex-col justify-between transition-all transform hover:scale-105">
        <div className="flex items-center w-full">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={handleToggleCompletion}
            className="mr-2 h-5 w-5 text-blue-600"
          />
          <p className={`flex-grow text-lg ${task.completed ? 'line-through text-gray-400' : ''}`}>
            {task.title}
          </p>
        </div>
        <button
          className="self-end mt-2 bg-red-500 text-white rounded-lg py-1 px-3 shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    );
  };
  
  export default Board;
  