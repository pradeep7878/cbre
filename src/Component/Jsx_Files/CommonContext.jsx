import { createContext, useState } from "react";

const CommonContext = createContext();


export const DataProvider = ({ children }) => {

    const [heading, setHeading] = useState("Portfolio");
    const [loginDetails,setLoginDetails] = useState([
        {
            username:'cbre',
            password:'passwordanalysis'
        }
    ])

    
    

    return (
        <CommonContext.Provider value={{ heading, setHeading,loginDetails}}>
            {children}
        </CommonContext.Provider>
    )
}










export default CommonContext;