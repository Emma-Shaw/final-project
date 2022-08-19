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
`;

const Banner = styled.img`
    display: flex;
    align-self: center;
    width: 100%;
`;

export default Homepage;