import styled from "styled-components";
import redWinePour from "../assets/red_wine_pour.jpg";
import friendsCooking from "../assets/friends_cooking.jpg";
import circle from "../assets/circle_no_bg.png";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { UserContext } from "./UserContext";
import { useContext } from "react";

const Homepage = () => {

    const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
    const {
        actions: { loginUser }
    } = useContext(UserContext);

    useEffect(() => {
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
                        loginUser();
                        return res.json().then((data) => console.log("User data :", data))
                    }
                }).catch((error) => {
                    console.log("Error :", error);
                })
            };
        };
        authenticate();
    }, [isAuthenticated, getAccessTokenSilently]);

    const purpose = useNavigate();
    const goToPurpose = () => {
        purpose("/purpose");
    };

    const create = useNavigate();
    const goCreate = () => {
        create("/create-menu");
    };

    return (
        <Wrapper>
            <Purpose>
                <Banner src={friendsCooking} />
                <PurposeBtn onClick={ goToPurpose }>Our purpose</PurposeBtn>
            </Purpose>
            <Tier1>
                <Speech>
                    <h1>Get started</h1>
                    <CreateBtn onClick={goCreate} >Create menu</CreateBtn>
                </Speech>
                <Image src={redWinePour} />
            </Tier1>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const Purpose = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
`;

const PurposeBtn = styled.button`
    position: absolute;
    background: none;
    color: var(--color-calm-beige);
    border: 3px solid var(--color-calm-beige);
    width: 300px;
    height: 50px;
    font-size: larger;

    &:hover {
        background: var(--color-calm-beige);
        cursor: pointer;
        color: var(--color-cool-navy);
        border: 3px solid var(--color-calm-beige);
    }
`;

const Banner = styled.img`
    width: 100%;
    opacity: 0.75;
`;

const Tier1 = styled.div`
    background-image: url(${circle});
    background-size: 400px;
    background-position: center left;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: space-between;
    margin: 50px;
    width: 900px;
`;

const Image = styled.img`
    width: 400px;
    border-radius: 50%;
    opacity: 0.85;
`;

const Speech = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
`;

const CreateBtn = styled.button`
    margin-top: 20px;
`;

export default Homepage;