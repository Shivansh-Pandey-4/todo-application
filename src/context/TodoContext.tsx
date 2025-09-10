import { createContext, useState } from "react";

type TodoTask = {
    id: number;
    title : string;
    isCompleted : boolean;
    completedAt? : string;
}

type TodoContextType = {
     tasks : TodoTask[],
     setTasks : React.Dispatch<React.SetStateAction<TodoTask[]>>
}

const TodoContext = createContext<TodoContextType | null>(null);

export const TodoProvider = (props: {children: React.ReactNode})=>{
      const [tasks, setTasks] = useState<TodoTask[]>([]);

     return <TodoContext.Provider  value={{tasks,setTasks}}>
         {props.children}
     </TodoContext.Provider>
}

export default TodoContext;