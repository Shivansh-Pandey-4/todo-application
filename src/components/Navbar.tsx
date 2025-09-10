import { useTab } from "../lib/hooks";
import { useTodo } from "../lib/hooks";

const Navbar = ()=>{
   const tabState = useTab();
   const todoState = useTodo();

   function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
      tabState?.setSelectedTab(e.currentTarget.innerText);
   }


    return (
         <div className="border-b-2 border-gray-300 pb-4 w-xl">
            <nav>
             <ul className="flex justify-around">

                <li><button className="text-lg text-gray-500 hover:text-white cursor-pointer hover:underline" onClick={handleClick} >All({todoState?.tasks.filter(task => task.isCompleted === false).length})</button></li>

                <li><button autoFocus onClick={handleClick} className="text-lg text-gray-500 hover:text-white cursor-pointer hover:underline">Open</button></li>

                <li><button onClick={handleClick} className="text-lg text-gray-500 hover:text-white cursor-pointer hover:underline">Completed({todoState?.tasks.filter(task => task.isCompleted === true).length})</button></li>

             </ul>
            </nav>
         </div>
    )
}

export default Navbar;