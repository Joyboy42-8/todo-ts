import { Trash } from "lucide-react";
import type { TaskProp } from "../types/props";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function Task({ task }: TaskProp) {
  const { handleDelete } = useContext(TaskContext);

  return (
    <li className="Task">
      <span className="Text">{task.text}</span>

      <button className="DeleteBtn" onClick={() => handleDelete(task.id)}>
        <Trash size={18} className="Trash" />
      </button>
    </li>
  );
}