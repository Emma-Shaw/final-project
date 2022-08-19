import styled from "styled-components";
import banner from "../assets/cheers_longest_version.png";

const Homepage = () => {
    return (
        <Wrapper>
            <Banner src={banner} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
`;

const Banner = styled.img`
    display: flex;
    align-self: center;
    width: 100%;
    border: 5px solid var(--color-chill-blue);
`;

export default Homepage;