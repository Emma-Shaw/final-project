import styled from "styled-components";
import { Link } from "react-router-dom";
import womanInKitchen from "../assets/woman_in_kitchen.jpg";
import { useNavigate } from "react-router-dom";

const OurPurpose = () => {

    const create = useNavigate();
    const goCreate = () => {
        create("/create-menu");
    };

    return (
    <Wrapper>
        <Title>Our purpose</Title>
        <Purpose>
            <Image src={womanInKitchen} />
            <Description>
                <PurposeText>
                    Do you love receiving friends and family?
                    Do you find yourself struggling to come up with a new menu every time?
                </PurposeText>
                <PurposeText>Don't even get us started on having to find the perfect wine to complement your meal...</PurposeText>
                <PurposeText>As a result, Happy Hour was created to solve this dilemma once and for all!</PurposeText>
                <PurposeText>
                    By navigating to our <CreateMenu to="/create-menu">Create Menu</CreateMenu> page, you will be able to 
                    automatically generate a delicious three course menu - including an appetizer, a main dish and a dessert - 
                    complete with a suggested wine pairing. The best part - the menu can be catered 
                    to your exact food and dietary preferences!!
                </PurposeText>
                <PurposeText>Let's get to cooking!</PurposeText>
                <CreateBtn onClick={goCreate} >Create menu</CreateBtn>
            </Description>
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
    margin-top: 20px;
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Image = styled.img`
    width: 400px;
    opacity: 0.75;
    margin-right: 25px;
`;

const PurposeText = styled.h4`
    width: 400px;
    margin-left: 10px;
    padding: 15px;
`;

const CreateMenu = styled(Link)`
    color: var(--color-dark-wine);
    font-weight: bolder;

    &:focus, &:active, &:visited, &:link, &:hover {
        color: var(--color-dark-wine);
        text-decoration: none;
    }

    &:hover {
        text-decoration: underline;
    }
`;

const CreateBtn = styled.button`
    margin: 20px;
`;

export default OurPurpose;