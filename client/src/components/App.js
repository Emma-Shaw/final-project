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
    <Header />
      <Wrapper>
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
          <Route exact path="/drinks" element={<MultipleDrinks />}></Route>
          <Route exact path="/drinks/:drink" element={<SingleDrink />}></Route>
          <Route exact path="/to-drink" element={<ToDrinkList />}></Route>
          <Route exact path="/welcome" element={<Welcome />}></Route>
          <Route exact path="/about-us" element={<AboutUs />}></Route>
        </Routes>
      </Wrapper>
      <Footer />
    </BrowserRouter>
  );
};

const Wrapper = styled.div`
  margin: 20px;
`;

export default App;
