import styled from "styled-components";
import mainLogo from "../assets/welcome_page_logo.png";
import mainArt from "../assets/welcome_page_art.png";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

export const AuthStatus = () => {
    const { isAuthenticated, user, loginWithRedirect, getAccessTokenSilently } = useAuth0();
    const {
        actions: { loginUser }
    } = useContext(UserContext);

    const home = useNavigate();
    const goToHomePage = () => {
        home("/home");
    };

    const authenticateUser = async () => {
        await loginWithRedirect();
        const authenticate = async () => {
            if (isAuthenticated) {
                const requestToken = await getAccessTokenSilently();
                fetch("/private", {
                    method: "POST",
                    body: JSON.stringify(user),
                    headers: {
                        Authorization: "Bearer " + requestToken,
                        "Content-Type": "application/json",
                    },
                }).then((res) => {
                    if (res.status === 200) {
                        loginUser(user);
                        return res.json().then((data) => console.log("User data :", data))
                    }
                }).catch((error) => {
                    console.log("Error :", error);
                })
            };
        };
        await authenticate();
        goToHomePage();
    };

    return (
        <Wrapper>
            <WelcomeMenu>
                <WelcomeLogo src={ mainLogo } />
                <GetStarted onClick={authenticateUser}>Sign-in</GetStarted>
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

export default AuthStatus;