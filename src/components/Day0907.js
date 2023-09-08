import { useImmerReducer } from "use-immer";

import data from "../data/survey.json";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import tasksReducer from "./TasksReducer";
import Seolmun from "./Seolmun";
import TaskDispatchContext from "./TasksDispatchContext";
import TaskContext from "./TaskContext";

const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

function Day0907() {
  const [tasks, dispatch] = useImmerReducer(tasksReducer, initialTasks);

  //   function handleAddTask(text) {
  //     dispatch({ type: "added", text: text, id: nextId++ });
  //   }

  function handleChangeTask(task) {
    dispatch({ type: "changed", task });
  }

  //   function handleDeleteTask(taskId) {
  //     dispatch({ type: "deleted", id: taskId });
  //   }

  return (
    <>
      <TaskContext.Provider value={tasks}>
        <TaskDispatchContext.Provider value={dispatch}>
          <h1>Prague itinerary</h1>
          <AddTask />
          <TaskList onChangeTask={handleChangeTask} />
        </TaskDispatchContext.Provider>
      </TaskContext.Provider>

      <Seolmun data={data} />
    </>
  );
}

export default Day0907;
