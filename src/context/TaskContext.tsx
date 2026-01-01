import { createContext } from "react";
import type { Context } from "../types/context";

const contextValue: Context = {
    input: "",
    tasks: [],
    setInput: () => {},
    setTasks: () => {},
    handleSubmit: () => {},
    handleDelete: () => {},
}

export const TaskContext = createContext(contextValue);