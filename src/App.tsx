import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Authenticate from "./Authenticate";
import { ThemeProvider as StyledProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import Routes from "./routes";
import { theme } from "./styles/theme";
import Login from "./pages/Login/index";

const App = () => {
  const [user, setUser] = useState({ user: undefined });

  const userLoaded = (user: any) => {
    console.log(user);
    if (user) setUser({ user: user });
  };

  const userUnLoaded = () => {
    console.log("unloaded");
    setUser({ user: undefined });
  };

  const NotAuthenticated = () => {
    console.log(user);
    return <Login />;
  };

  const Authenticated = (user: any) => {
    console.log(user);
    if (user !== undefined && user.user !== undefined) {
      return (
        <div>
          Hello dear {user.user.profile.ecare_internalUsername} you are
          authenticated.
        </div>
      );
    }
    return null;
  };

  function checkAuthentication() {
    console.log("check");

    return window.location.href.includes("#state");
  }

  const OidcSettings = {
    authority:
      "https://app.thematchcontrol.com.br:8443/realms/tmc/.well-known/openid-configuration",
    client_id: "tmc-app-client",
    redirect_uri: "https://localhost:9090/main",
    response_type: "id_token token",
    scope: "openid profile roles",
    post_logout_redirect_uri: "https://app.thematchcontrol.com.br",
  };

  return (
    <BrowserRouter>
      <StyledProvider theme={theme}>
        <Authenticate
          OidcSettings={OidcSettings}
          userLoaded={userLoaded}
          userunLoaded={userUnLoaded}
          checkAuthentication={checkAuthentication}
          renderNotAuthenticated={NotAuthenticated}
        >
          <GlobalStyle />

          <Routes />
        </Authenticate>
      </StyledProvider>
    </BrowserRouter>
  );
};

export default App;
