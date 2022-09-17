import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import main from "../assets/main.jpg";
import starter from "../assets/starter.jpg";
import sweets from "../assets/sweets.jpg";
import letsEat from "../assets/eat.gif";

export const CreateMenu = () => {

    const { user } = useAuth0();
    const currentEmail = user?.email;

    const [season, setSeason]  = useState();
    const [allergen, setAllergen]  = useState();
    const [sweetness, setSweetness]  = useState();

    // Store user's season selection in a useState
    const filterSeason = (choice) => {
        setSeason(choice);
    };

    // Store user's allergen selection(s) in a useState
    const filterAllergen = (choice) => {
        setAllergen(choice);
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
                allergen: allergen,
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
            <Title>Create menu</Title>
            <Description>Help us generate the perfect menu for your taste by answering the following prompts.</Description>
            <Prompts>
                <Prompt>
                    <Question>1. First, choose a season:</Question>
                    <PromptImg src={starter} />
                    <Answers>
                        {season !== "winter" && <Answer onClick={() => filterSeason("winter")}>Winter</Answer>}
                        {season === "winter" && <AnswerChosen onClick={() => filterSeason("winter")}>Winter</AnswerChosen>}
                        {season !== "spring" && <Answer onClick={() => filterSeason("spring")}>Spring</Answer>}
                        {season === "spring" && <AnswerChosen onClick={() => filterSeason("spring")}>Spring</AnswerChosen>}
                        {season !== "summer" && <Answer onClick={() => filterSeason("summer")}>Summer</Answer>}
                        {season === "summer" && <AnswerChosen onClick={() => filterSeason("summer")}>Summer</AnswerChosen>}
                        {season !== "fall" && <Answer onClick={() => filterSeason("fall")}>Fall</Answer>}
                        {season === "fall" && <AnswerChosen onClick={() => filterSeason("fall")}>Fall</AnswerChosen>}
                    </Answers>
                </Prompt>
                <Prompt>
                    <Question>2. Second, specify any allergens that may apply:</Question>
                    <PromptImg src={main} />
                    <Answers>
                        {allergen !== "dairy" && <Answer onClick={() => filterAllergen("dairy")}>Dairy</Answer>}
                        {allergen === "dairy" && <AnswerChosen onClick={() => filterAllergen("dairy")}>Dairy</AnswerChosen>}
                        {allergen !== "gluten" && <Answer onClick={() => filterAllergen("gluten")}>Gluten</Answer>}
                        {allergen === "gluten" && <AnswerChosen onClick={() => filterAllergen("gluten")}>Gluten</AnswerChosen>}
                        {allergen !== "shellfish" && <Answer onClick={() => filterAllergen("shellfish")}>Shellfish</Answer>}
                        {allergen === "shellfish" && <AnswerChosen onClick={() => filterAllergen("shellfish")}>Shellfish</AnswerChosen>}
                        {allergen !== "nuts" && <Answer onClick={() => filterAllergen("nuts")}>Nuts</Answer>}
                        {allergen === "nuts" && <AnswerChosen onClick={() => filterAllergen("nuts")}>Nuts</AnswerChosen>}
                    </Answers>
                </Prompt>
                <Prompt>
                    <Question>3. Finally, select your preferred dessert sweetness:</Question>
                    <PromptImg src={sweets} />
                    <Answers>
                    {sweetness !== "low" && <Answer onClick={() => filterSweetness("low")}>Low</Answer>}
                    {sweetness === "low" && <AnswerChosen onClick={() => filterSweetness("low")}>Low</AnswerChosen>}
                    {sweetness !== "medium" && <Answer onClick={() => filterSweetness("medium")}>Medium</Answer>}
                    {sweetness === "medium" && <AnswerChosen onClick={() => filterSweetness("medium")}>Medium</AnswerChosen>}
                    {sweetness !== "high" && <Answer onClick={() => filterSweetness("high")}>High</Answer>}
                    {sweetness === "high" && <AnswerChosen onClick={() => filterSweetness("high")}>High</AnswerChosen>}
                    </Answers>
                </Prompt>
                <Prompt>
                    <Question>4. Generate your menu:</Question>
                    <PromptImg style={{ background: "#669BBC" }} src={letsEat} />
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

const PromptImg = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    margin: 10px;
`;

const Question = styled.p`
    margin: 10px;
    text-align: center;
`;

const Answers = styled.div`
`;

const Answer = styled.button`
    margin: 10px;
`;

const AnswerChosen = styled.button`
    margin: 10px;
    background: var(--color-cool-navy);
    color: var(--color-calm-beige);
    border: none;
`;

export default CreateMenu;