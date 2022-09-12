import styled from "styled-components";
import { RecipesContext } from "./RecipesContext";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const CreateMenu = () => {

    const { user } = useAuth0();
    const currentEmail = user?.email;

    const {                 
        starters,
        mains,
        desserts,
    } = useContext(RecipesContext);

    const [season, setSeason]  = useState();
    const [allergens, setAllergens]  = useState([]);
    const [sweetness, setSweetness]  = useState();

    // Store user's season selection in a useState
    const filterSeason = (choice) => {
        setSeason(choice);
    };

    // Store user's allergen selection(s) in a useState
    const filterAllergens = (choice) => {
        setAllergens(allergens => [...allergens, choice]);
    };

    // Store user's sweeteness selection in a useState
    const filterSweetness = (choice) => {
        setSweetness(choice);
    };

    const menu = useNavigate();
    const goToMenu = () => {
        fetch("/recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                season: season,
                allergens: allergens,
                sweetness: sweetness,
                email: currentEmail,
            })
        })
        .then((res) => {
            if (res?.ok) {
                menu("/menu");
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
                    <Question>3. Finally, select your preferred dessert sweetness:</Question>
                    <Answers>
                        <Answer onClick={() => filterSweetness("low")}>Low</Answer>
                        <Answer onClick={() => filterSweetness("medium")}>Medium</Answer>
                        <Answer onClick={() => filterSweetness("high")}>High</Answer>
                    </Answers>
                </Prompt>
                <Prompt>
                    <Question>4. Generate your menu:</Question>
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