import styled from "styled-components";
import reviews from "../assets/reviews.png";

const SingleDrink = () => {
    return (
    <Wrapper>
        <Reviews src={reviews} />
    </Wrapper>
    );
};

const Wrapper = styled.div`
`;

const Reviews = styled.img`
    width: 300px;
`;

export default SingleDrink;