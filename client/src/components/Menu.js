import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import { useAuth0 } from "@auth0/auth0-react";
import whiteWine from "../assets/white_wine_pour.jpg";
import redWine from "../assets/red_wine_pour.jpg";
import wineGlass from "../assets/wine_glass.jpg";
import { GiWrappedSweet, GiWineBottle, GiEarthAmerica, GiFallingLeaf } from "react-icons/gi";

export const Menu = () => {

    const [loader, setLoader] = useState(false);

    // User states
    const { user } = useAuth0();
    const currentEmail = user?.email;

    // Menu states
    const [menuCreated, setMenuCreated] = useState(false);
    const [starter, setStarter] = useState();
    const [main, setMain] = useState();
    const [dessert, setDessert] = useState();

    // Wine states
    const [paired, setPaired] = useState(false);
    const [winePairing, setWinePairing] = useState();
    const [winePairingError, setWinePairingError] = useState(false);
    const [color, setColor] = useState();
    const [region, setRegion] = useState();
    const [organic, setOrganic] = useState(false);
    const [sugar, setSugar] = useState();

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
    }, []);

    const requestWinePairing = () => {
        setLoader(true);
        fetch("/wines", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                color: color,
                region: region,
                organic: Boolean(organic),
                sugar: sugar,
            })
        })
        .then((res) => {
            if (res.status === 200) {
                return res.json()
            } else {
                setWinePairingError(true);
                setLoader(false);
            }
        })
        .then((data) => {
            if (!winePairingError) {
                setPaired(true);
                setWinePairing(data?.data);
            }
            setLoader(false);
        })
        .catch((error) => {
            console.log("Error :", error);
        })
    };

    return (
        <Container>
            {loader && <Loader />}
            {!loader && <>
            {!menuCreated && <Wrapper>
                <Title>Start creating</Title>
                <CreateBtn onClick={goCreate} >Create menu</CreateBtn>
            </Wrapper>}
            {menuCreated && <Wrapper>
                <MenuCreation>
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
                        {winePairingError && <WinePairing>
                            <ItemName>Oops - No wine pairings found. Please try again. </ItemName>
                            <WinePairingBtn onClick={(() => {
                                setWinePairingError(false)
                                setPaired(false)})
                            }>Return</WinePairingBtn>
                        </WinePairing>}
                        {!winePairingError && <WinePairing>
                            <ItemTitle style={{ textDecoration: "none" }}>Wine suggestion</ItemTitle>
                            {!paired && <WineImg src={wineGlass} />}
                            {paired && <WineSelection>
                                {color === "red_wines" ? <ItemImg src={redWine} /> : <ItemImg src={whiteWine}/>}
                                <ItemName><GiWineBottle /><br />{winePairing.name}</ItemName>
                                <ItemName><GiEarthAmerica /><br />{winePairing.region}</ItemName>
                                {organic === "true" && <ItemName><GiFallingLeaf /><br />Organic</ItemName>}
                                <ItemName><GiWrappedSweet /><br />{winePairing.sugar}</ItemName>
                                <WinePairingBtn onClick={(() => {
                                setWinePairingError(false)
                                setPaired(false)})
                            }>Try again</WinePairingBtn>
                            </WineSelection>}
                            {!paired && <WineSelection>
                                <OptionLayout>
                                <OptionSelect autoComplete="red_wines"  onChange={((event) => {setColor(event.target.value)})} required >
                                    <Option value="" >Color</Option>
                                    <Option value="red_wines" >Red</Option>
                                    <Option value="white_wines" >White</Option>
                                </OptionSelect>
                                    <OptionSelect onChange={((event) => {setRegion(event.target.value)})} >
                                        <Option value="" >Region</Option>
                                        {color === "white_wines" && <Option value="Spain" disabled>Spain</Option>}
                                        {color === "red_wines" && <Option value="Spain" >Spain</Option>}
                                        <Option value="France" >France</Option>
                                        {color === "white_wines" && <Option value="Hungary" disabled>Hungary</Option>}
                                        {color === "red_wines" && <Option value="Hungary" >Hungary</Option>}
                                        <Option value="Italy" >Italy</Option>
                                        {color === "white_wines" && <Option value="Switzerland" disabled>Switzerland</Option>}
                                        {color === "red_wines" && <Option value="Switzerland" >Switzerland</Option>}
                                        <Option value="Canada" >Canada</Option>
                                        {color === "white_wines" && <Option value="Argentina" disabled>Argentina</Option>}
                                        {color === "red_wines" && <Option value="Argentina" >Argentina</Option>}
                                        {color === "white_wines" && <Option value="Greece" disabled>Greece</Option>}
                                        {color === "red_wines" && <Option value="Greece" >Greece</Option>}
                                        {color === "red_wines" && <Option value="United States" disabled >United States</Option>}
                                        {color === "white_wines" && <Option value="United States" >United States</Option>}
                                    </OptionSelect>
                                    </OptionLayout>
                                    <OptionLayout>
                                    <OptionSelect onChange={((event) => {setOrganic(event.target.value)})}>
                                        <Option value="" >Organic</Option>
                                        <Option value="true" >Yes</Option>
                                        <Option value="false" >No</Option>
                                    </OptionSelect>
                                    <OptionSelect onChange={((event) => {setSugar(event.target.value)})}>
                                        <Option value="" >Sugar content</Option>
                                        <Option value="low" >Low</Option>
                                        <Option value="medium" >Medium</Option>
                                        <Option value="high" >High</Option>
                                    </OptionSelect>
                                    </OptionLayout>
                                {color && <WinePairingBtn onClick={requestWinePairing}>Suggest wine</WinePairingBtn>}
                            </WineSelection>}
                    </WinePairing>}
                </MenuCreation>
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

const MenuCreation = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    padding: 0px 100px;
`;

const CreateBtn = styled.button`
    margin-top: 20px;
`;

const MenuItems = styled.div`
    max-width: 600px;
    text-align: center;
    border: 2px solid var(--color-dark-wine);
    margin-bottom: 50px;
    background: white;
    color: var(--color-cool-navy);
`;

const Item = styled.div`
    margin: 20px;
    font-family: 'Pinyon Script', cursive;
`

const ItemTitle = styled.h2`
    margin: 10px;
    text-decoration: underline;
    font-size: 30px;
    text-align: center;
    color: var(--color-dark-wine);
`;

const ItemName = styled.h3`
    margin: 20px;
    font-size: 25px;
    color: var(--color-dark-wine);
`;

const ItemDescription = styled.p`
    margin: 20px;
    font-style: italic;
    font-size: 20px;
    color: var(--color-dark-wine);
`;

const ItemImg = styled.img`
    border-radius: 50%;
    width: 100px;
    height: 100px;
    align-self: center;
    margin: 10px;
`;

const WinePairing = styled.div`
    display: flex;
    width: fit-content;
    flex-direction: column;
    font-family: 'Pinyon Script', cursive;
    margin-bottom: 50px;
    padding: 25px;
`;

const WinePairingBtn = styled.button`
    align-self: center;
    margin-top: 20px;
`;

const OptionLayout = styled.div`
`;

const OptionSelect = styled.select`
    border: 2px solid var(--color-dark-wine);
    border-radius: 5px;
    background: white;
    color: var(--color-dark-wine);
    padding: 5px 0px 5px 5px;
    margin: 10px;
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
    width: 250px;

    &&:hover {
        cursor: pointer;
        background: var(--color-dark-wine);
        color: var(--color-calm-beige);
    }
`;

const Option = styled.option`
`;

const WineSelection = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;

const WineImg = styled.img`
    align-self: center;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    margin: 10px;
`;

export default Menu;