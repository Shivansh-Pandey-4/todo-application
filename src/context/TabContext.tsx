import { createContext, useState } from "react";

type TabContextProps = {
        selectedTab : string;
        setSelectedTab : React.Dispatch<React.SetStateAction<string>>; 
}

const TabContext = createContext<TabContextProps | null>(null);

export const TabProvider = (props: {children: React.ReactNode})=>{
    const [selectedTab,setSelectedTab] = useState("");
    return <TabContext.Provider value={{selectedTab,setSelectedTab}}>
        {props.children}
    </TabContext.Provider>
}

export default TabContext;