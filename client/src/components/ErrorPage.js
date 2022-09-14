import styled from "styled-components";
import cheersGif from "../assets/cheersLeo.gif";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {

    const landingPage = useNavigate();
    const goToLandingPage = () => {
        landingPage("/");
    };

    return (
        <Wrapper>
            <ErrorMessage>
                <Statements>
                    <Statement style={{ fontSize: "50px" }}>Error code: 404</Statement>
                    <Statement>Oops...</Statement>
                    <Statement>We can't seem to find the <br /> page you are looking for... </Statement>
                    <Gif src={cheersGif} />
                </Statements>
                <LandingPageBtn onClick={goToLandingPage}>Return</LandingPageBtn>
            </ErrorMessage>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const ErrorMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 400px;
    padding: 100px;
`;

const Statements = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    min-height: 200px;
`;

const Statement = styled.h2`
    display: flex;
    text-align: center;
    margin-top: 20px;
`;

const Gif = styled.img`
    transform: scale(0.75);
`;

const LandingPageBtn = styled.button`
`;

export default ErrorPage;