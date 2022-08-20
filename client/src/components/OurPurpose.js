import styled from "styled-components";
import womanInKitchen from "../assets/woman_in_kitchen.jpg";

const OurPurpose = () => {
    return (
    <Wrapper>
        <Title>Our purpose</Title>
        <Purpose>
            <Image src={womanInKitchen} />
            <PurposeText>Happy Hour was created to...</PurposeText>
        </Purpose>
    </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const Title = styled.h1`
    padding: 20px;
`;

const Purpose = styled.div`
    display: flex;
`;

const Image = styled.img`
    width: 400px;
    opacity: 0.75;
    margin-right: 25px;
`;

const PurposeText = styled.h4`
    width: 400px;
    margin-left: 25px;
`;

export default OurPurpose;