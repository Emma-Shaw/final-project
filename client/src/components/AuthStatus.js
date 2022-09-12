import styled from "styled-components";
import mainLogo from "../assets/welcome_page_logo.png";
import mainArt from "../assets/welcome_page_art.png";
import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

export const AuthStatus = () => {
    const { isAuthenticated, loginWithRedirect } = useAuth0();
    const {
        actions: { loginUser }
    } = useContext(UserContext);

    const home = useNavigate();
    const goToHomePage = () => {
        home("/home");
    };

    const authenticateUser = async () => {
        await loginWithRedirect();
        goToHomePage();
    };

    return (
        <Container>
            {isAuthenticated && <Navigate to="/home" />}
            {!isAuthenticated && <Wrapper>
                <WelcomeMenu>
                    <WelcomeLogo src={ mainLogo } />
                    <GetStarted onClick={authenticateUser}>Sign-in</GetStarted>
                </WelcomeMenu>
                <WelcomeArt src={ mainArt } />
            </Wrapper>}
        </Container>
    );
};

const Container = styled.div`
`;

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

export default AuthStatus;