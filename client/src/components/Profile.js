import styled from "styled-components";
import dessert from "../assets/dessert.jpg";
import { UserContext } from "./UserContext";
import { useContext } from "react";

const Profile = () => {

    const {
        state: { loggedIn, currentGivenName, currentSurname, currentEmail },
    } = useContext(UserContext);

    return (
        <Wrapper>
            <Title>Profile</Title>
            {loggedIn === true && <ProfileInfo>
                <ProfileImg src={dessert} />
                <ContactInfo>
                    {currentGivenName && currentSurname && <Info>{currentGivenName} {currentSurname}</Info>}
                    {currentEmail && <Info>{currentEmail}</Info>}
                </ContactInfo>
            </ProfileInfo>}
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
    border-radius: 50%;
`;

const Info = styled.p`
    padding-bottom: 5px;
`;

export default Profile;