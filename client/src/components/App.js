import styled from "styled-components";
import GlobalStyle from "./GlobalStyles"
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import RequireAuth from "./RequireAuth";
import AuthLayout from "./AuthLayout";
import { useAuth0 } from "@auth0/auth0-react";

import { UserContext } from "./UserContext";
import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./Homepage";
import Profile from "./Profile";
import CreateMenu from "./CreateMenu";
import Menu from "./Menu";
import OurPurpose from "./OurPurpose"
import ErrorPage from "./ErrorPage";
import { useEffect } from "react";

const App = () => {

  const { isAuthenticated } = useAuth0();
  const { state: { loggedIn } } = useContext(UserContext);

  useEffect(() => {
    console.log("Authentication Status :", isAuthenticated)
  }, [isAuthenticated]);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
      <Header />
          <Routes>
            {/* {isAuthenticated === false && <Route exact path="/" element={<AuthLayout />}></Route>} */}
            <Route exact path="/" element={<AuthLayout />}></Route>
            <Route path="/home" element={<RequireAuth><Homepage /></RequireAuth>}></Route>
            <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>}></Route>
            <Route path="/create-menu" element={<RequireAuth><CreateMenu /></RequireAuth>}></Route>
            <Route path="/menu" element={<RequireAuth><Menu /></RequireAuth>}></Route>
            <Route path="/purpose" element={<RequireAuth><OurPurpose /></RequireAuth>}></Route>
            <Route exact path="/not-found" element={<ErrorPage />}></Route>
          </Routes>
        </Wrapper>
        <Footer />
      </>
  );
};

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

export default App;
