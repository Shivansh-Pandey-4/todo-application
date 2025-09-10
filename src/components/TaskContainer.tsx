import { useTodo } from "../lib/hooks";

type TaskContainerProps = {
    data : {
        id : number;
        title : string;
        isCompleted : boolean|number;
    }
}

const TaskContainer = (props: TaskContainerProps)=>{

    const {id,title,isCompleted} = props.data;
    const todoState = useTodo();

    function handleDelete(id: number){
         todoState?.setTasks(todoState.tasks.filter((task)=> task.id!==id));
    }

    function handleDone(id: number){
        const newCompletedTask = todoState?.tasks.map((task)=>{
              if(task.id === id){
                   const date = new Date;
                   const currentTime = `${date.getHours()}hr : ${date.getMinutes()}min : ${date.getSeconds()}sec`
                   task.isCompleted = true;
                   task.completedAt = currentTime;
                }
                return task;
        })        
        todoState?.setTasks(newCompletedTask? newCompletedTask : []);
    }

    return(
        <div className="bg-gray-600 mt-4 p-4 rounded-xl shadow-md shadow-amber-50 w-2xl grid grid-cols-12">
            <div className="col-span-9 pr-3">
                <h1 className="text-black font-semibold text-xl mb-1">Task - <span className="text-white ">{title}</span> </h1>

               <h2 className="text-black font-semibold text-xl">Status - <span className="text-red-300 ">{isCompleted?"true":"Pending"}</span> </h2>
            </div>
            <div className="col-span-3 flex justify-center items-center">
                <button onClick={()=>handleDelete(id)}
                 className="border-2 px-3 py-1 rounded-lg font-semibold cursor-pointer bg-red-400 hover:bg-red-600 " >Delete</button>

                <button onClick={()=>{handleDone(id)}} className="border-2 px-3 py-1 rounded-lg font-semibold cursor-pointer hover:bg-green-600 bg-green-400 ml-2" >Done</button>
            </div>
        </div>
    )
}

export default TaskContainer;