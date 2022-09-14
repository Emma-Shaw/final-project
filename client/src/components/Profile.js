import styled from "styled-components";
import { UserContext } from "./UserContext";
import { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {

    const { user } = useAuth0();
    const userName = user?.nickname;
    const userEmail = user?.email;
    const userAvatar = user?.picture;

    const {
        state: { loggedIn },
    } = useContext(UserContext);

    return (
        <Wrapper>
            <Title>My profile</Title>
            {user && <ProfileInfo>
                <ProfileImg src={userAvatar} />
                <ContactInfo>
                    {userName && <Info>Username: {userName}</Info>}
                    {userEmail && <Info>Email: {userEmail}</Info>}
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
    width: 500px;
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