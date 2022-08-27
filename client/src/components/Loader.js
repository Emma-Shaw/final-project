import styled from "styled-components";
import timer from "../assets/hourglass.gif";

export const Loader = () => {
    return (
        <Wrapper>
            <LoadingGif src={timer} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
`;

const LoadingGif = styled.img`
    height: 100px;
`;

export default Loader;