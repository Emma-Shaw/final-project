import { createContext } from "react";
import { useReducer } from "react";

export const UserContext = createContext(null);

const initialState = {
    loggedIn: false,
    currentEmail: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "login-user": {
            return {
                ...state,
                loggedIn: true,
                currentEmail: action.email,
            };
        }
        case "logout-user": {
            return {
                ...state,
                loggedIn: false,
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
