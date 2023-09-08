import { useState } from "react";
import { useContext } from "react";
import TaskContext from "./TaskContext";
import TaskDispatchContext from "./TasksDispatchContext";

let nextId = 3;
export default function AddTask() {
  const [text, setText] = useState("");
  const task = useContext(TaskContext);
  const dispatch = useContext(TaskDispatchContext);
  return (
    <>
      <input
        placeHolder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: "added", id: nextId++, text: text });
        }}>
        ADD{" "}
      </button>
    </>
  );
}
