import styled from "styled-components";

export const Menu = () => {
    return (
        <Wrapper>
            Start creating
            <CreateBtn>Create menu</CreateBtn>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
`;

const CreateBtn = styled.button`
    margin-top: 20px;
`;

export default Menu;