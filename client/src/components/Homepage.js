import styled from "styled-components";
import redWinePour from "../assets/red_wine_pour.jpg";
import friendsCooking from "../assets/friends_cooking.jpg";
import circle from "../assets/circle_no_bg.png";
import { useNavigate } from "react-router-dom";
// import { UserContext } from "./UserContext";
// import { useEffect, useContext } from "react";

const Homepage = () => {

    // const {
    //     actions: { loginUser }
    // } = useContext(UserContext);

    const purpose = useNavigate();
    const goToPurpose = () => {
        purpose("/purpose");
    };

    const create = useNavigate();
    const goCreate = () => {
        create("/create-menu");
        window.location.reload();
    };

    // useEffect(() => {
    //     const getUserData = JSON.parse(sessionStorage.getItem("user"));

    //     if (getUserData) {
    //         loginUser(getUserData);
    //     }
    // }, []);

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