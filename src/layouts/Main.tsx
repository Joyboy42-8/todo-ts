import MakeForm from "../components/MakeForm";
import TasksContainer from "../components/TasksContainer";

export default function Main() {  
    return(
        <main className="Main">
            <MakeForm />
            <TasksContainer />
        </main>
    );
}