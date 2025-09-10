import { useTodo } from "../lib/hooks";
import CompletedCard from "./CompletedCard";

const Completed = ()=>{

    const todoState = useTodo();

    return ( 
            <div>
               {
                 (todoState?.tasks.length === 0) ? <div className="mt-4 text-2xl text-white">Till Now No Task Completed.</div>: todoState?.tasks.map((task)=> task.isCompleted?  <CompletedCard key={task.id} data={task}/>: null)
               }
           </div> 
    )
}

export default Completed;