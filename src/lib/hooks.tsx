import { useContext } from "react";
import TodoContext from "../context/TodoContext";
import TabContext from "../context/TabContext";

export const useTodo = ()=>{
    const taskState = useContext(TodoContext);
    return taskState;
}

export const useTab = ()=>{
     const tabState = useContext(TabContext);
     return tabState;
}
