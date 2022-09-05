import { createContext } from "react";
import { useReducer } from "react";

export const UserContext = createContext(null);

const initialState = {
    loggedIn: false,
    currentGivenName: null,
    currentSurname: null,
    currentEmail: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "login-user": {
            return {
                ...state,
                loggedIn: true,
                currentGivenName: action.givenName,
                currentSurname: action.surname,
                currentEmail: action.email,
            };
        }
        case "logout-user": {
            return {
                ...state,
                loggedIn: false,
                currentGivenName: null,
                currentSurname: null,
                currentEmail: null,
            }
        }
        default:
            throw new Error(`Unrecognized action: ${action.type}`);
    }
};

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const loginUser = (data) => {
        dispatch({
            type: "login-user",
            ...data,
            givenName: data.givenName,
            surname: data.surname,
            email: data.email,
        });
    };

    const logoutUser = (data) => {
        dispatch({
            type: "logout-user",
            ...data,
        });
    };

    return (
        <UserContext.Provider
        value={{ 
            state,
            actions: {
                loginUser,
                logoutUser,
            }
        }}
        >
            {children}
        </UserContext.Provider>
    );
};
