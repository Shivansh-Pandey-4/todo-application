import { useTab } from "../lib/hooks";
import AllContainer from "./AllContainer";
import Completed from "./Completed";
import Body from "./Body";


const TabBody = ()=>{
    const tabState = useTab();

    if(tabState?.selectedTab === "" || tabState?.selectedTab === "Open"){
         return <Body/>
    }else if(tabState?.selectedTab.includes("All")){
        return (
            <div>
                <AllContainer/>
            </div>
        )
    }else if(tabState?.selectedTab.includes("Completed")){
         return (
             <div>
                 <Completed/>
             </div>
         )
    }
}

export default TabBody;