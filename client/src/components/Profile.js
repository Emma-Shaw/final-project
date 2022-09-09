import styled from "styled-components";
import avatar from "../assets/avatar.png";
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
                <ProfileImg src={avatar} />
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
    align-items: center;
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
    background: var();
`;

const Info = styled.p`
    padding-bottom: 5px;
`;

export default Profile;