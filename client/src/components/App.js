import styled from "styled-components";
import GlobalStyle from "./GlobalStyles"
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./Homepage";
import Profile from "./Profile";
import CreateMenu from "./CreateMenu";
import Menu from "./Menu";
import Welcome from "./Welcome";
import OurPurpose from "./OurPurpose"
import UserAuthentication from "./UserAuthentication";
import ErrorPage from "./ErrorPage";

import { UserContext } from "./UserContext";
import { useContext } from "react";

const App = () => {

  const { state: { loggedIn } } = useContext(UserContext);

  return (
    <BrowserRouter>
    <GlobalStyle />
    <Wrapper>
    <Header />
        <Routes>
          <Route exact path="/" element={<Welcome />}></Route>
          <Route exact path="/authentication" element={<UserAuthentication />}></Route>
          <Route path="/home" element={loggedIn === true ? <Homepage /> : <ErrorPage />}></Route>
          <Route path="/profile" element={loggedIn === true ? <Profile /> : <ErrorPage />}></Route>
          <Route path="/create-menu" element={loggedIn === true ? <CreateMenu /> : <ErrorPage />}></Route>
          <Route path="/menu" element={loggedIn === true ? <Menu /> : <ErrorPage />}></Route>
          <Route path="/purpose" element={loggedIn === true ? <OurPurpose /> : <ErrorPage />}></Route>
        </Routes>
      </Wrapper>
      <Footer />
    </BrowserRouter>
  );
};

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  /* margin-bottom: 175px; */
`;

export default App;
