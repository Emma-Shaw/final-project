import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const Menu = () => {

    const create = useNavigate();
    const goCreate = () => {
        create("/create-menu");
    };

    return (
        <Wrapper>
            Start creating
            <CreateBtn onClick={goCreate} >Create menu</CreateBtn>
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