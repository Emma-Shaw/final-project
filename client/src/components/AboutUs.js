import styled from "styled-components";
import aboutUs from "../assets/about_us.png"

const AboutUs = () => {
    return (
    <Wrapper>
        <Header src={aboutUs} />
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

export default AboutUs;