import React from "react";
import { useState } from "react";
const menuContext = React.createContext();
export const MenuProvider = ({children}) => {
    const [expandWidth, setExpandWidth] = useState(false);
    const [navbarClick, setNavbarClick] = useState(false);
    const formInput = `${expandWidth ? "lg:w-[550px] md:w-[400px] w-24" : "md:w-[600px] w-[250px]"} pl-3   focus:border-blue-900 mt-3 mb-10 h-10`
    const submitButton = `${formInput} h-12 rounded-md font-bold bg-blue-900 text-xl py-2  text-white`;
    return <menuContext.Provider value={{expandWidth, setExpandWidth, navbarClick, setNavbarClick, formInput, submitButton}}>
        {children}
        </menuContext.Provider>
} 

export default menuContext;