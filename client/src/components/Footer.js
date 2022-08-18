import styled from "styled-components";

const Footer = () => {
    return <Wrapper>
            <Quote>Ladies and gentlemen - it is <Italic>quitting time...</Italic></Quote>
            <Logo>Happy Hour</Logo>
        </Wrapper>
};

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin: 10px;
`;

const Quote = styled.h2`
`;

const Logo = styled.h1`
`;

const Italic = styled.span`
    font-style: italic;
`;

export default Footer;