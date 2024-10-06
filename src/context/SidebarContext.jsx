import { createContext, useState } from "react";

export const SidebarContext = createContext();
export const SidebarToggleProvider = ({ children }) => {
    const [isToggle, setIsToggle] = useState(true);
    const toggle = () => {
        setIsToggle(!isToggle)
    }
    return (
        <SidebarContext.Provider value={{ isToggle, toggle }}>
            {children}
        </SidebarContext.Provider>
    )
}