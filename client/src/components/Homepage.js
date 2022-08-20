import styled from "styled-components";
import mushrooms from "../assets/mushrooms.jpg";
import foodPlatter from "../assets/food_platter.jpg";
import redWinePour from "../assets/red_wine_pour.jpg";
import reviews from "../assets/reviews.png";

const Homepage = () => {
    return (
        <Wrapper>
            <Tier1>
                <Image src={redWinePour} />
            </Tier1>
            <Tier2>
                <Image src={foodPlatter} />
            </Tier2>
            <Tier3>
                <Image src={mushrooms} />
            </Tier3>
            <Tier4>
                <Image src={reviews} />
            </Tier4>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Tier1 = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Tier2 = styled.div`
    display: flex;
`;

const Tier3 = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Tier4 = styled.div`
    display: flex;
    justify-content: center;
`;

const Image = styled.img`
    width: 400px;
`;

export default Homepage;