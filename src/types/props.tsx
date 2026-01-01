import type { Task } from "./task";

export type LayoutProps = {
    children: React.ReactNode,
}

export type FormProps = {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export type ContainerProps = {
    tasks: Task[],
}

export type TaskProp = {
  task: Task;
};