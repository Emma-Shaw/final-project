import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Loader from "./Loader";
import { useAuth0 } from "@auth0/auth0-react";

export const Menu = () => {

    const { user } = useAuth0();
    const currentEmail = user?.email;

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
            } else {
                setMenuCreated(false);
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
                    {starter && <Item style={{ borderBottom: "1px dotted var(--color-dark-wine)" }} >
                        <ItemTitle>Entrée</ItemTitle>
                        <ItemName>{starter.name}</ItemName>
                        <ItemDescription>{starter.description}</ItemDescription>
                    </Item>}
                    {main && <Item style={{ borderBottom: "1px dotted var(--color-dark-wine)" }} >
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
    font-family: 'Pinyon Script', cursive;
    border: 1px dotted var(--color-dark-wine);
    margin-bottom: 50px;
`;

const Item = styled.div`
    margin: 20px;
`

const ItemTitle = styled.h2`
    color: var(--color-dark-wine);
    margin: 10px;
    text-decoration: underline;
    font-size: 30px;
`;

const ItemName = styled.h3`
    color: var(--color-dark-wine);
    margin: 20px;
    font-size: 25px;
`;

const ItemDescription = styled.p`
    color: var(--color-dark-wine);
    margin: 20px;
    font-style: italic;
    font-size: 20px;
`;

export default Menu;