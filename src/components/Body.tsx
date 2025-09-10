import { useState } from "react";
import { useTodo } from "../lib/hooks";


const Body = ()=>{

    const todoState = useTodo();
    const [data, setData] = useState("");

    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
         event.preventDefault();
         if(data === ""){
            alert("Enter Task First");
            return ;
         }
         
         todoState?.setTasks([...todoState.tasks,{title: data, isCompleted: false, id: Date.now()}]);
         setData("");
         return;
    }

    return(
        <div>
            <div className="mt-4 bg-gray-600 p-5 w-2xl rounded-lg">
                <form onSubmit={handleSubmit} className="flex justify-between">

                    <input autoFocus className="border-2 border-amber-400 text-gray-100 p-2 rounded-xl w-lg" type="text" placeholder="Add Task" value={data} onChange={(event)=>setData(event.target.value)} />

                    <button className="border-2 border-black text-gray-100 p-2 rounded-xl cursor-pointer bg-blue-600">Add Task</button>

                </form>
            </div>
        </div>
    )
}

export default Body;