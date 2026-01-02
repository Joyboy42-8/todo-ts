import { Trash } from "lucide-react";
import type { TaskProp } from "../types/props";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { motion } from "framer-motion";

const taskVariants = {
  hidden: { opacity: 0, y: 3 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function Task({ task }: TaskProp) {
  const { handleDelete } = useContext(TaskContext);

  return (
    <motion.li className="Task" variants={taskVariants}
      initial="hidden" animate="visible" exit="exit" layout transition={{ duration: 0.5 }}
    >
      <span className="Text">{task.text}</span>

      <button
        className="DeleteBtn"
        onClick={() => handleDelete(task.id)}
      >
        <Trash size={18} className="Trash" />
      </button>
    </motion.li>
  );
}