import { toast } from "react-toastify";
import { TaskContext } from "./context/TaskContext";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Layout from "./layouts/Layout";
import Main from "./layouts/Main";
import type { Task } from "./types/task";
import { useEffect, useState } from "react";

export default function App() {
  const savedTasks = localStorage.getItem("tasks");
  const parsedTasks: Task[] = savedTasks ? JSON.parse(savedTasks) : [];
  
  const [tasks, setTasks] = useState<Task[]>(parsedTasks);
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (!input.trim()) {
      toast.error("This field cannot be empty !");
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      text: input,
      status: "todo",
    };

    setTasks([newTask, ...tasks]);
    setInput("");
    toast.success("Task Added !");
  };

  const handleDelete = (id: number): void => {
    setTasks(tasks.filter((task) => task.id !== id));

    toast.success("Task Deleted !");
  };

  const contextValue = {
    input,
    setInput,
    tasks,
    setTasks,
    handleSubmit,
    handleDelete
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])

  return (
    <TaskContext.Provider value={contextValue}>
      <Layout>
        <Header />
        <Main />
        <Footer />
      </Layout>
    </TaskContext.Provider>
  );
}