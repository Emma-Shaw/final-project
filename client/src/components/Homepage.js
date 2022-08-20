import styled from "styled-components";
import redWinePour from "../assets/red_wine_pour.jpg";
import reviews from "../assets/reviews.png";
import friendsCooking from "../assets/friends_cooking.jpg";
import { useNavigate } from "react-router-dom";

const Homepage = () => {

    const purpose = useNavigate();
    const goToPurpose = () => {
        purpose("/purpose");
    };

    return (
        <Wrapper>
            <Purpose>
                <Banner src={friendsCooking} />
                <PurposeBtn onClick={ goToPurpose }>Our purpose</PurposeBtn>
            </Purpose>
            <Tier1>
                <Image src={redWinePour} />
                <Speech>Hello Hello Hello</Speech>
            </Tier1>
            <Tier2>
                <Image src={reviews} />
            </Tier2>
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
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
`;

const Tier2 = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 20px;
`;

const Image = styled.img`
    width: 400px;
    opacity: 0.75;
`;

const Speech = styled.div`
`;

export default Homepage;