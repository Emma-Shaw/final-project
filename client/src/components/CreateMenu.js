import styled from "styled-components";
import { RecipesContext } from "./RecipesContext";
import { useContext } from "react";

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

    return (
        <Wrapper>
            <Title>Let's get started</Title>
            <Description>Help us generate the perfect menu for your taste by answering the following prompts.</Description>
            <Prompts>
                <Prompt>
                    <Question>1. First, choose a season:</Question>
                    <Answers>
                        <Answer>Winter</Answer>
                        <Answer>Spring</Answer>
                        <Answer>Summer</Answer>
                        <Answer>Fall</Answer>
                    </Answers>
                </Prompt>
                <Prompt>
                    <Question>2. Second, specify any allergens that may apply:</Question>
                    <Answers>
                        <Answer>Dairy</Answer>
                        <Answer>Gluten</Answer>
                        <Answer>Shellfish</Answer>
                        <Answer>Nuts</Answer>
                    </Answers>
                </Prompt>
                <Prompt>
                    <Question>3. Finally, we can't forget about dessert! Select your preferred level of sweeteness:</Question>
                    <Answers>
                        <Answer>Low</Answer>
                        <Answer>Medium</Answer>
                        <Answer>High</Answer>
                    </Answers>
                </Prompt>
                <Prompt>
                    <Question>4. Create your menu:</Question>
                    <Answers>
                        <Answer>Create menu</Answer>
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
    margin-bottom: 20px;
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