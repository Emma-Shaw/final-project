import { createContext, useState } from "react";

// TO REMOVE COMPONENT?? NOT SURE IF USEFUL

export const MenuContext = createContext(null);
export const MenuProvider = ({ children }) => {
    const [userSeason, setUserSeason] = useState();
    const [userAllergens, setUserAllergens] = useState();
    const [userSweeteness, setUserSweeteness] = useState();
    const [userWine, setUserWine] = useState();

    return (
        <MenuContext.Provider
            value={{
                userSeason,
                setUserSeason,
                userAllergens,
                setUserAllergens,
                userSweeteness,
                setUserSweeteness,
                userWine,
                setUserWine
            }}
        >
            {children}
        </MenuContext.Provider>
    );
};


