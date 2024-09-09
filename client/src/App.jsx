import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "./AuthContext";
import Header from "./components/Header";
import Main from "./components/Main";
import keycloak from "./config/KeyCloak";

const NonLoggedIn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 2rem;
  color: #007bff;
`;

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const kcInitialized = useRef(false);
  const { setToken, setEmail, setName, setLastName } = useContext(AuthContext);

  useEffect(() => {
    const initKeycloak = () => {
      if (!kcInitialized?.current) {
        keycloak
          .init({ onLoad: "check-sso", pkceMethod: "S256" })
          .then((authenticated) => {
            setIsAuthenticated(authenticated);
            // console.log("Keycloak initialized:", keycloak.authenticated);
            console.log("Keycloak token:", keycloak);
            // console.log("Keycloak authenticated:", authenticated);
            setToken(keycloak.token);
            setEmail(keycloak.tokenParsed.email);
            setName(keycloak.tokenParsed.given_name);
            setLastName(keycloak.tokenParsed.family_name);

            keycloak.onTokenExpired = () => {
              console.log("Keycloak onTokenExpired");
            };
          })
          .catch((error) => {
            console.error("Keycloak initialization error:", error);
          });
        kcInitialized.current = true;
      }
    };
    initKeycloak();
  }, [kcInitialized]);

  return (
    <div className="App">
      <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      {isAuthenticated ? (
        <Main />
      ) : (
        <NonLoggedIn>
          <h2>You are not logged in. Please Login </h2>
        </NonLoggedIn>
      )}
    </div>
  );
}

export default App;
