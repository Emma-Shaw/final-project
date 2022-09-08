import styled from "styled-components";
import { RecipesContext } from "./RecipesContext";
import { MenuContext } from "./MenuContext";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { useEffect } from "react";

export const CreateMenu = () => {

    const {                 
        starters,
        mains,
        desserts,
        redWines,
        whiteWines,
    } = useContext(RecipesContext);

    const [season, setSeason]  = useState();
    const [allergens, setAllergens]  = useState([]);
    const [sweeteness, setSweeteness]  = useState();
    const [wine, setWine]  = useState();

    // Store user's season selection in a useState
    const filterSeason = (choice) => {
        setSeason(choice);
    };

    // Store user's allergen selection(s) in a useState
    const filterAllergens = (choice) => {
        setAllergens(allergens => [...allergens, choice]);
    };

    // Store user's sweeteness selection in a useState
    const filterSweeteness = (choice) => {
        setSweeteness(choice);
    };

    // Store user's wine selection in a useState
    const filterWines = (choice) => {
        setWine(choice);
        console.log("Season =>", choice)
    };

    // const menu = useNavigate();
    const goToMenu = () => {
        fetch("/recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                season: season,
                allergens: allergens,
                sweeteness: sweeteness,
            })
        })
        .then((res) => {
            if (res?.ok) {
                console.log("Response :", res.json());
                // return res.json();
                // menu("/menu");
            }
        })
        .catch((error) => {
            console.log("Error :", error);
        })
    };

    return (
        <Wrapper>
            <Title>Let's get started</Title>
            <Description>Help us generate the perfect menu for your taste by answering the following prompts.</Description>
            <Prompts>
                <Prompt>
                    <Question>1. First, choose a season:</Question>
                    <Answers>
                        <Answer onClick={() => filterSeason("winter")}>Winter</Answer>
                        <Answer onClick={() => filterSeason("spring")}>Spring</Answer>
                        <Answer onClick={() => filterSeason("summer")}>Summer</Answer>
                        <Answer onClick={() => filterSeason("fall")}>Fall</Answer>
                    </Answers>
                </Prompt>
                <Prompt>
                    <Question>2. Second, specify any allergens that may apply:</Question>
                    <Answers>
                        <Answer onClick={() => filterAllergens("dairy")}>Dairy</Answer>
                        <Answer onClick={() => filterAllergens("gluten")}>Gluten</Answer>
                        <Answer onClick={() => filterAllergens("shellfish")}>Shellfish</Answer>
                        <Answer onClick={() => filterAllergens("nuts")}>Nuts</Answer>
                    </Answers>
                </Prompt>
                <Prompt>
                    <Question>3. Third, choose a type of wine:</Question>
                    <Answers>
                        <Answer onClick={() => filterWines("red_wines")}>Red</Answer>
                        <Answer onClick={() => filterWines("white_wines")}>White</Answer>
                    </Answers>
                </Prompt>
                <Prompt>
                    <Question>4. Finally, select your preferred dessert sweeteness:</Question>
                    <Answers>
                        <Answer onClick={() => filterSweeteness("low")}>Low</Answer>
                        <Answer onClick={() => filterSweeteness("medium")}>Medium</Answer>
                        <Answer onClick={() => filterSweeteness("high")}>High</Answer>
                    </Answers>
                </Prompt>
                <Prompt>
                    <Question>5. Generate your menu:</Question>
                    <Answers>
                        <Answer onClick={goToMenu}>Generate</Answer>
                    </Answers>
                </Prompt>
            </Prompts>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
`;

const Title = styled.h1`
    margin: 20px;
    align-self: center;
`;

const Description = styled.h4`
    margin-bottom: 20px;
    padding-bottom: 20px;
    text-align: center;
    border-bottom: 1px solid var(--color-chill-blue);
`;

const Prompts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`;

const Prompt = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    align-items: center;
`;

const Question = styled.p`
    margin: 10px;
    text-align: center;
`;

const Answers = styled.div`
`;

const Answer = styled.button`
    margin: 10px;

    &&:focus {
        background: var(--color-dark-wine);
        color: var(--color-calm-beige);
    }
`;

export default CreateMenu;