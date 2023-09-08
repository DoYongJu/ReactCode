export default function tasksReducer(nextTasks, action) {
  if (action.type === "added") {
    const next = {
      id: action.id,
      text: action.text,
      done: false,
    };

    nextTasks.push(next);
  } else if (action.type === "changed") {
    const index = nextTasks.findIndex((t) => t.id === action.task.id);
    nextTasks[index] = action.task;

    // const next = nextTasks.map((t) => {
    //   if (t.id === action.task.id) {
    //     return action.task;
    //   } else {
    //     return t;
    //   }
    //});
  } else if (action.type === "deleted") {
    const index = nextTasks.filter((t) => t.id !== action.id);
    nextTasks.splice(index, 1);
  } else {
    throw Error("Unknown action" + action.type);
  }
}
