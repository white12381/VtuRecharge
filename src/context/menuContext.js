import React from "react";
import { useState } from "react";
const menuContext = React.createContext();
export const MenuProvider = ({children}) => {
    const [expandWidth, setExpandWidth] = useState(false);
    const [navbarClick, setNavbarClick] = useState(false);
    return <menuContext.Provider value={{expandWidth, setExpandWidth, navbarClick, setNavbarClick}}>
        {children}
        </menuContext.Provider>
} 

export default menuContext;