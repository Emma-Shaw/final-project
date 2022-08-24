import styled from "styled-components";
import spices from "../assets/spices.jpg";

const Profile = () => {
    return (
        <Wrapper>
            <Title>Profile</Title>
            <ProfileInfo>
                <ProfileImg src={spices} />
                <ContactInfo>
                    <Info>Emma Shaw</Info>
                    <Info>emma@shaw.com</Info>
                </ContactInfo>
            </ProfileInfo>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Title = styled.h1`
    margin: 20px;
    align-self: center;
`;

const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    margin: 50px;
`;

const ContactInfo = styled.div`
    margin-top: 25px;
    text-align: center;
`;

const ProfileImg = styled.img`
    width: 250px;
    height: 250px;
`;

const Info = styled.h3`
    padding-bottom: 5px;
`;

export default Profile;