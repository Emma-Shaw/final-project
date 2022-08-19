import styled from "styled-components";
import logo from "../assets/happy_hour_logo.png";

const Footer = () => {
    return (
        <Wrapper>
            <Logo src={logo} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin: 10px;
    height: 150px;
`;

const Logo = styled.img`
    height: 50px;
`;

export default Footer;