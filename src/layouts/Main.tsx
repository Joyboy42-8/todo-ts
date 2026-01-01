import MakeForm from "../components/MakeForm";
import TasksContainer from "../components/TasksContainer";

export default function Main() {  
    return(
        <main className="grow overflow-y-auto flex flex-col gap-5 px-2 w-xl mx-auto">
            <MakeForm />
            <TasksContainer />
        </main>
    );
}