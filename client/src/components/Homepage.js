import styled from "styled-components";
import banner from "../assets/cheers_poster_longer_version.png"

const Homepage = () => {
    return <Wrapper>
        <Banner src={banner} />
    </Wrapper>
};

const Wrapper = styled.div`
    display: flex;
`;

const Banner = styled.img`
    display: flex;
    align-self: center;
    max-width: 100%;
`;

export default Homepage;