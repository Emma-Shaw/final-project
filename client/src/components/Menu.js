import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useEffect, useContext } from "react";
import { useState } from "react";
import Loader from "./Loader";

export const Menu = () => {

    const {
        state: { currentEmail },
    } = useContext(UserContext);

    const [loader, setLoader] = useState(false);
    const [menuCreated, setMenuCreated] = useState(false);
    const [starter, setStarter] = useState();
    const [main, setMain] = useState();
    const [dessert, setDessert] = useState();

    const create = useNavigate();
    const goCreate = () => {
        create("/create-menu");
    };
    
    useEffect(() => {
        setLoader(true);
        fetch(`/users/${currentEmail}`)
        .then(res => res.json())
        .then(data => {
            if (data.data.menu) {
                setMenuCreated(true);
                setStarter(data.data.menu.starter);
                setMain(data.data.menu.main);
                setDessert(data.data.menu.dessert);
                setLoader(false);
            }
            setLoader(false);
        })
        .catch((err) => {
            console.log("Error :", err);
        })
    }, [])

    return (
        <Container>
            {loader === true && <Loader />}
            {loader === false && <>
            {menuCreated === false && <Wrapper>
                <Title>Start creating</Title>
                <CreateBtn onClick={goCreate} >Create menu</CreateBtn>
            </Wrapper>}
            {menuCreated === true && <Wrapper>
                <Title>Menu</Title>
                <MenuItems>
                    {starter && <Item>
                        <ItemTitle>Entrée</ItemTitle>
                        <ItemName>{starter.name}</ItemName>
                        <ItemDescription>{starter.description}</ItemDescription>
                    </Item>}
                    {main && <Item>
                        <ItemTitle>Main Course</ItemTitle>
                        <ItemName>{main.name}</ItemName>
                        <ItemDescription>{main.description}</ItemDescription>
                    </Item>}
                    {dessert && <Item>
                        <ItemTitle>Dessert</ItemTitle>
                        <ItemName>{dessert.name}</ItemName>
                        <ItemDescription>{dessert.description}</ItemDescription>
                    </Item>}
                </MenuItems>
            </Wrapper>}
            </>}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
`;

const Title = styled.h1`
    margin: 20px;
    align-self: center;
`;

const CreateBtn = styled.button`
    margin-top: 20px;
`;

const MenuItems = styled.div`
    max-width: 600px;
    text-align: center;
`;

const Item = styled.div`
    margin: 20px;
    border-bottom: 1px dotted var(--color-dark-wine);
`

const ItemTitle = styled.h2`
    color: var(--color-dark-wine);
    margin: 10px;
`;

const ItemName = styled.h3`
    color: var(--color-dark-wine);
    margin: 20px;
`;

const ItemDescription = styled.p`
    color: var(--color-dark-wine);
    margin: 20px;
    font-style: italic;
`;

export default Menu;