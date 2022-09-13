import styled from "styled-components";
import cheersGif from "../assets/cheersLeo.gif";

const ErrorPage = () => {
    return (
        <Wrapper>
            <ErrorMessage>
                <Statements>
                    <Statement style={{ fontSize: "50px" }}>Error code: 404</Statement>
                    <Statement>Oops...</Statement>
                    <Statement>We can't seem to find the <br /> page you are looking for... </Statement>
                </Statements>
                <Gif src={cheersGif} />
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
`;

const Gif = styled.img`
    transform: scale(0.75);
`;

export default ErrorPage;