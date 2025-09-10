import TaskContainer from "./TaskContainer";
import { useTodo } from "../lib/hooks";

const AllContainer = ()=>{

    const todoState = useTodo();

    return (
        <div>
            {
                (todoState?.tasks.filter(task =>task.isCompleted === false).length === 0) ? <div className="mt-4 text-2xl text-white">No task available.</div>: todoState?.tasks.map((task)=> { if(task.isCompleted === false){ return <TaskContainer key={task.id} data={task} />}})
            }
        </div>
    )
}

export default AllContainer;