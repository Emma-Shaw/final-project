import styled from "styled-components";
import mainLogo from "../assets/welcome_page_logo.png";
import mainArt from "../assets/welcome_page_art.png";
import { useNavigate } from "react-router-dom";

export const Welcome = () => {

    const home = useNavigate();
    const goToHome = () => {
        home("/home");
    };

    return (
        <Wrapper>
            <WelcomeMenu>
                <WelcomeLogo src={ mainLogo } />
                <GetStarted onClick={goToHome}>Get started</GetStarted>
            </WelcomeMenu>
            <WelcomeArt src={ mainArt } />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    margin-top: 200px;
    margin-left: 100px;
    background: var(--color-calm-beige);
`;

const WelcomeMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200px;
    margin: 5px;
`;

const WelcomeLogo = styled.img`
    height: 125px; 
`;

const GetStarted = styled.button`
    margin: 5px;
`;

const WelcomeArt = styled.img`
    height: 425px;
`;

export default Welcome;