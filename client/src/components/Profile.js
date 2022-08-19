import styled from "styled-components";
// import profile from "../assets/profile.png"

const Profile = () => {
    return (
        <Wrapper>
            {/* <Header src={profile} /> */}
            Profile
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const Header = styled.img`
    width: 200px;
    padding: 20px;
`;

export default Profile;