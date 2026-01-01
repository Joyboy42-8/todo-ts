import { useContext } from "react";
import Task from "./Task";
import { TaskContext } from "../context/TaskContext";

export default function TasksContainer() {
  const { tasks } = useContext(TaskContext);

  return (
    <ul className="TaskContainer">
      {tasks.map((task) => <Task key={task.id} task={task} />)}
    </ul>
  )
}