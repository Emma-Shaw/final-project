import styled from "styled-components";
import redWinePour from "../assets/red_wine_pour.jpg";
import reviews from "../assets/reviews.png";
import friendsCooking from "../assets/friends_cooking.jpg";

const Homepage = () => {
    return (
        <Wrapper>
            <Purpose>
                <Banner src={friendsCooking} />
                <PurposeBtn>Our purpose</PurposeBtn>
            </Purpose>
            <Tier1>
                <Speech></Speech>
                <Image src={redWinePour} />
            </Tier1>
            <Tier3>
                <Image src={reviews} />
            </Tier3>
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
    border: 2px solid var(--color-calm-beige);

    &:hover {
        background: none;
        cursor: pointer;
        color: var(--color-chill-blue);
        border: 2px solid var(--color-chill-blue);
    }
`;

const Banner = styled.img`
    width: 100%;
    opacity: 0.75;
`;

const Tier1 = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
`;

const Tier3 = styled.div`
    display: flex;
    padding: 20px;
`;

const Image = styled.img`
    width: 400px;
`;

const Speech = styled.div`
`;

export default Homepage;