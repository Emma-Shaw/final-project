import { createContext, useState } from "react";

export const MenuContext = createContext(null);
export const MenuProvider = ({ children }) => {
    const [userStarter, setUserStarter] = useState();
    const [userMain, setUserMain] = useState();
    const [userDessert, setUserDessert] = useState();
    const [userWine, setUserWine] = useState();

    return (
        <MenuContext.Provider
            value={{
                userStarter,
                setUserStarter,
                userMain,
                setUserMain,
                userDessert,
                setUserDessert,
                userWine,
                setUserWine
            }}
        >
            {children}
        </MenuContext.Provider>
    );
};


