import { useState, useEffect } from "react";
import Board from "./components/Board";
import Header from "./components/header";
import TaskModal from "./components/TaskModal";

function App() {
  const [TaskList, setTaskList] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Filter out completed tasks and move them to the completedTasks list
    const updatedTaskList = TaskList.filter(task => !task.completed);
    const newlyCompletedTasks = TaskList.filter(task => task.completed);
    setTaskList(updatedTaskList);
    setCompletedTasks(prevCompletedTasks => [...prevCompletedTasks, ...newlyCompletedTasks]);
  }, [TaskList]);

  const toggleTaskCompletion = (index) => {
    const updatedTaskList = TaskList.map((task, i) => {
      if (i === index) {
        if (task.repeat !== 'none' && !task.completed) {
          const newDueDate = new Date(task.dueDate);
          switch (task.repeat) {
            case 'daily':
              newDueDate.setDate(newDueDate.getDate() + 1);
              break;
            case 'weekly':
              newDueDate.setDate(newDueDate.getDate() + 7);
              break;
            case 'monthly':
              newDueDate.setMonth(newDueDate.getMonth() + 1);
              break;
            default:
              break;
          }
          return { ...task, completed: true, dueDate: newDueDate.toISOString().split('T')[0] };
        } else {
          return { ...task, completed: !task.completed };
        }
      }
      return task;
    });
    setTaskList(updatedTaskList);
  };

  const addTask = (task) => {
    setTaskList([...TaskList, task]);
  };

  const today = new Date();
  const sortedTasks = TaskList.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  const myDayTasks = sortedTasks.filter(task => new Date(task.dueDate) <= today);
  const upcomingTasks = sortedTasks.filter(task => new Date(task.dueDate) > today);

  return (
    <div className="min-h-screen bg-gray-300">
      <Header />
      <div className="px-4 sm:px-8 md:px-16 py-8">
        <div className="flex flex-col items-center justify-center py-8 gap-4">
          <h1 className="font-bold text-4xl text-center text-gray-800">My Day</h1>
          <button
            className="fixed bottom-4 right-4 bg-blue-500 text-white rounded-full p-4 shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setIsModalOpen(true)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {myDayTasks.map((task, index) => (
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

        <div className="mt-20">
          <h1 className="font-bold text-4xl text-center text-gray-800 mb-4">Upcoming Tasks</h1>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {upcomingTasks.map((task, index) => (
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

        <div className="mt-20">
          <h1 className="font-bold text-4xl text-center text-gray-800 mb-4">Completed Tasks</h1>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {completedTasks.map((task, index) => (
              <Board
                key={index}
                index={index}
                task={task}
                TaskList={completedTasks}
                setTaskList={setCompletedTasks}
                toggleTaskCompletion={() => {}} // No need to toggle completion for completed tasks
              />
            ))}
          </div>
        </div>
      </div>
      <TaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddTask={addTask}
      />
    </div>
  );
}

export default App;