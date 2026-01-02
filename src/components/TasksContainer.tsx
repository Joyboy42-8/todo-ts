import { useContext } from "react";
import Task from "./Task";
import { TaskContext } from "../context/TaskContext";
import { AnimatePresence, motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.5,
      staggerChildren: 0.3,
    },
  },
};

export default function TasksContainer() {
  const { tasks } = useContext(TaskContext);

  return (
    <motion.ul
      className="TaskContainer"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </AnimatePresence>
    </motion.ul>
  );
}
