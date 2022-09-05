import { createContext, useState, useEffect } from "react";

export const RecipesContext = createContext(null);
export const RecipesProvider = ({ children }) => {
    const [starters, setStarters] = useState([]);
    const [mains, setMains] = useState([]);
    const [desserts, setDesserts] = useState([]);
    const [redWines, setRedWines] = useState([]);
    const [whiteWines, setWhiteWines] = useState([]);

    useEffect(() => {
        fetch("/recipes/starters")
        .then((res) => res.json())
        .then((data) => {
            setStarters(data.data);
        })
    }, []);

    useEffect(() => {
        fetch("/recipes/mains")
        .then((res) => res.json())
        .then((data) => {
            setMains(data.data);
        })
    }, []);

    useEffect(() => {
        fetch("/recipes/desserts")
        .then((res) => res.json())
        .then((data) => {
            setDesserts(data.data);
        })
    }, []);

    useEffect(() => {
        fetch("/wines/red")
        .then((res) => res.json())
        .then((data) => {
            setRedWines(data.data);
        })
    }, []);

    useEffect(() => {
        fetch("/wines/white")
        .then((res) => res.json())
        .then((data) => {
            setWhiteWines(data.data);
        })
    }, []);

    return (
        <RecipesContext.Provider
            value={{
                starters,
                setStarters,
                mains,
                setMains,
                desserts,
                setDesserts,
                redWines,
                setRedWines,
                whiteWines,
                setWhiteWines
            }}
        >
            {children}
        </RecipesContext.Provider>
    );
};

