import { useState } from "react";
import Input from "./components/Input";
import Board from "./components/Board";

function App() {
  const [TaskList, setTaskList] = useState([]);

  // Function to toggle the completion status of a task
  const toggleTaskCompletion = (index) => {
    const updatedTaskList = TaskList.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTaskList(updatedTaskList);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-8 md:px-16 py-8">
      <div className="flex flex-col items-center justify-center py-8 gap-4">
        <h1 className="font-bold text-4xl text-center text-gray-800">To-Do List</h1>
        <Input TaskList={TaskList} setTaskList={setTaskList} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {TaskList.map((task, index) => (
          <Board
            key={index}
            index={index}
            task={task}
            TaskList={TaskList}
            setTaskList={setTaskList}
            toggleTaskCompletion={toggleTaskCompletion}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
