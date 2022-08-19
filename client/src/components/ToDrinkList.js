import styled from "styled-components";
// import drinkList from "../assets/to_drink_list.png"

export const ToDrinkList = () => {
    return (
        <Wrapper>
            {/* <Header src={drinkList} /> */}
            To drink list
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const Header = styled.img`
    width: 200px;
    padding: 20px;
`;

export default ToDrinkList;