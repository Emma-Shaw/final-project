import styled from "styled-components";
import GlobalStyle from "./GlobalStyles"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./Homepage";
import Profile from "./Profile";
import CreateMenu from "./CreateMenu";
import Menu from "./Menu";
import Welcome from "./Welcome";
import OurPurpose from "./OurPurpose"
import UserAuthentication from "./UserAuthentication";

const App = () => {
  return (
    <BrowserRouter>
    <GlobalStyle />
    <Wrapper>
    {/* {window.location.pathname !== "/" && window.location.pathname !== "/authentication" && <Header /> } */}
    <Header />
        <Routes>
          <Route exact path="/" element={<Welcome />}></Route>
          <Route exact path="/authentication" element={<UserAuthentication />}></Route>
          <Route path="/home" element={<Homepage />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/create-menu" element={<CreateMenu />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/purpose" element={<OurPurpose />}></Route>
        </Routes>
      </Wrapper>
      <Footer />
      {/* {window.location.pathname !== "/" && window.location.pathname !== "/authentication" && <Footer /> } */}
    </BrowserRouter>
  );
};

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  /* margin-bottom: 175px; */
`;

export default App;
