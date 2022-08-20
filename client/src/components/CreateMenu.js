import styled from "styled-components";

export const CreateMenu = () => {
    return (
        <Wrapper>
            Start creating
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
`;

export default CreateMenu;