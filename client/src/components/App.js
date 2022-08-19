import styled from "styled-components";
import GlobalStyle from "./GlobalStyles"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./Homepage";
import MultipleDrinks from "./MultipleDrinks";
import Profile from "./Profile";
import SingleDrink from "./SingleDrink";
import ToDrinkList from "./ToDrinkList";
import Welcome from "./Welcome";
import AboutUs from "./AboutUs"

const App = () => {
  return (
    <BrowserRouter>
    <GlobalStyle />
    {window.location.pathname !== "/" && <Header />}
      <Wrapper>
        <Routes>
          <Route exact path="/" element={<Welcome />}></Route>
          <Route path="/home" element={<Homepage />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/drinks" element={<MultipleDrinks />}></Route>
          <Route path="/drinks/:drink" element={<SingleDrink />}></Route>
          <Route path="/to-drink" element={<ToDrinkList />}></Route>
          <Route path="/welcome" element={<Welcome />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
        </Routes>
      </Wrapper>
      {window.location.pathname !== "/" && <Footer />}
    </BrowserRouter>
  );
};

const Wrapper = styled.div`
`;

export default App;
