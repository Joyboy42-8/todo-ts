import type { Task } from "./task"

export type Context = {
    input: string,
    tasks: Task[],
    setInput: React.Dispatch<React.SetStateAction<string>>,
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>,
    handleSubmit: (e: React.FormEvent) => void,
    handleDelete: (id: number) => void
}