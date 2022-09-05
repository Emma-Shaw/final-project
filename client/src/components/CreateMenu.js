import styled from "styled-components";
import { RecipesContext } from "./RecipesContext";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

export const CreateMenu = () => {

    const {                 
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
    } = useContext(RecipesContext);

    const [startersSelection, setStartersSelection]  = useState([]);
    const [mainsSelection, setMainsSelection]  = useState([]);
    const [dessertsSelection, setDessertsSelection]  = useState([]);
    const [wineSelection, setWineSelection]  = useState([]);

    const menu = useNavigate();
    const goToMenu = () => {
        menu("/menu");
    };

    const filterSeason = (filter) => {
        // Add code to reduce all lists to contain only recipes corresponding to the selected season.
        // Provide list of recipes based on selected season.
    };

    const filterAllergens = (filter) => {
        // Add code to reduce list of recipes to contain only recipes excluding the selected allergens.
        // Provide one choice of main and one choice of starter based on selections.
    };

    const filterSweeteness = (filter) => {
        // Add code to reduce list of dessert recipes to contain only desserts containing requested level of sweeteness.
        // Provide one choice of dessert based on selections.
    };

    const filterWines = (filter) => {
        // Option 1: redWines
        // Option 2: whiteWines
        // Add code to select list of red or white wines based on the selected type.
        // Provide one choice of wine based on selections and pairings.
    };

    return (
        <Wrapper>
            <Title>Let's get started</Title>
            <Description>Help us generate the perfect menu for your taste by answering the following prompts.</Description>
            <Prompts>
                <Prompt>
                    <Question>1. First, choose a season:</Question>
                    <Answers>
                        <Answer onClick={filterSeason}>Winter</Answer>
                        <Answer onClick={filterSeason}>Spring</Answer>
                        <Answer onClick={filterSeason}>Summer</Answer>
                        <Answer onClick={filterSeason}>Fall</Answer>
                    </Answers>
                </Prompt>
                <Prompt>
                    <Question>2. Second, specify any allergens that may apply:</Question>
                    <Answers>
                        <Answer onClick={filterAllergens}>Dairy</Answer>
                        <Answer onClick={filterAllergens}>Gluten</Answer>
                        <Answer onClick={filterAllergens}>Shellfish</Answer>
                        <Answer onClick={filterAllergens}>Nuts</Answer>
                    </Answers>
                </Prompt>
                <Prompt>
                    <Question>3. Third, choose a type of wine:</Question>
                    <Answers>
                        <Answer onClick={filterWines}>Red</Answer>
                        <Answer onClick={filterWines}>White</Answer>
                    </Answers>
                </Prompt>
                <Prompt>
                    <Question>4. Finally, select your preferred dessert sweeteness:</Question>
                    <Answers>
                        <Answer onClick={filterSweeteness}>Low</Answer>
                        <Answer onClick={filterSweeteness}>Medium</Answer>
                        <Answer onClick={filterSweeteness}>High</Answer>
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