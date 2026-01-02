import type React from "react";
import { useContext, useRef, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";
import { motion } from "framer-motion";

export default function MakeForm() {
  const { input } = useContext(TaskContext);
  const { setInput } = useContext(TaskContext);
  const { handleSubmit } = useContext(TaskContext);
  const inputRef = useRef<HTMLInputElement>(null!); // non-null assertion
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <motion.form onSubmit={handleSubmit} className="Form"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
    >
      <input type="text" placeholder="Enter a task..."
        value={input} ref={inputRef} onChange={handleChange} className="Input"
      />
      <button type="submit" className="SubmitBtn">Add</button>
    </motion.form>
  );
}