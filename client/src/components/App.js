import styled from "styled-components";
import GlobalStyle from "./GlobalStyles"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./Homepage";
import Profile from "./Profile";
import Menu from "./Menu";
import Welcome from "./Welcome";
import About from "./About"

const App = () => {
  return (
    <BrowserRouter>
    <GlobalStyle />
    <Wrapper>
    {window.location.pathname !== "/" && <Header />}
        <Routes>
          <Route exact path="/" element={<Welcome />}></Route>
          <Route path="/home" element={<Homepage />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/welcome" element={<Welcome />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Wrapper>
      {window.location.pathname !== "/" && <Footer />}
    </BrowserRouter>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  margin-bottom: 175px;
`;

export default App;
