import styled from "styled-components";
import mainLogo from "../assets/welcome_page_logo.png";
import mainArt from "../assets/welcome_page_art.png";
import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useEffect } from "react";

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

    useEffect(() => {
        if (isAuthenticated) {
            goToHomePage();
        }
    }, [isAuthenticated]);

    return (
        <Container>
            <Wrapper>
                <WelcomeMenu>
                    <WelcomeLogo src={ mainLogo } />
                    <GetStarted onClick={authenticateUser}>Sign-in</GetStarted>
                    <Statement>
                        Sign-in or Sign-up to Happy Hour™ - A fun, simple and convenient way to generate
                        a delicious menu for your next dinner party. Cheers!
                    </Statement>
                </WelcomeMenu>
                <WelcomeArt src={ mainArt } />
            </Wrapper>
        </Container>
    );
};

const Container = styled.div`
    width: 100vh;
`;

const Wrapper = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    margin-top: 10%;
    margin-left: 10%;
    background: var(--color-calm-beige);
    width: 100vh;
`;

const WelcomeMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 300px;
    margin: 5px;
`;

const WelcomeLogo = styled.img`
    height: 175px; 
`;

const GetStarted = styled.button`
    margin: 5px;
`;

const WelcomeArt = styled.img`
    height: 500px;
`;

const Statement = styled.p`
    font-size: 10px;
    width: 450px;
`;

export default AuthStatus;