import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Footer = () => {

    // When logo is clicked, user navigates back to Homepage
    const toHome = useNavigate();
    const goToHome = () => {
        toHome("/");
    };

    return (
        <Wrapper>
            <Quote>Ladies and gentlemen - it is <Italic>quitting time...</Italic></Quote>
            <Logo onClick={ goToHome } >Happy Hour</Logo>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 10px;
`;

const Quote = styled.h2`
`;

const Logo = styled.h1`
    &:hover {
        cursor: pointer;
    }
`;

const Italic = styled.span`
    font-style: italic;
`;

export default Footer;