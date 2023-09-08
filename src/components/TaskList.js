import { useState } from "react";
import { useContext } from "react";
import TaskContext from "./TaskContext";
import TaskDispatchContext from "./TasksDispatchContext";
export default function TaskList({ onChangeTask }) {
  const tasks = useContext(TaskContext);
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <li>
            <Task task={task} onChangeTask={onChangeTask} />
          </li>
        ))}
      </ul>
    </>
  );
}
function Task({ task, onChangeTask }) {
  const dispatch = useContext(TaskDispatchContext);
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) =>
            dispatch({
              type: "changed",
              task: {
                ...task,
                text: e.target.value,
              },
            })
          }
        />
        <button
          onClick={() => {
            setIsEditing(false);
          }}>
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button
          onClick={() => {
            setIsEditing(true);
          }}>
          Edit
        </button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) =>
          onChangeTask({
            ...task,
            done: e.target.checked,
          })
        }
      />
      {taskContent}
      <button
        onClick={() => {
          dispatch({ type: "deleted", id: task.id });
        }}>
        Delete
      </button>
    </label>
  );
}
