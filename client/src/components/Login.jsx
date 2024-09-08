import { useEffect, useState } from "react";
import styled from "styled-components";
import keycloak from "../config/KeyCloak";

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: white;
  background-color: ${(props) => (props.isAuthenticated ? "#f44336" : "#4caf50")};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.isAuthenticated ? "#d32f2f" : "#388e3c")};
  }
`;

const Login = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [kcInitialized, setKcInitialized] = useState(false);

  useEffect(() => {
    const initKeycloak = () => {
      if (!kcInitialized) {
        keycloak
          .init({ onLoad: "check-sso", pkceMethod: "S256" })
          .then((authenticated) => {
            setIsAuthenticated(authenticated);
            console.log("Keycloak initialized:", keycloak.authenticated);
            console.log("Keycloak token:", keycloak.token);
            console.log("Keycloak authenticated:", authenticated);

            keycloak.onTokenExpired = () => {
              console.log("Keycloak onTokenExpired");
            };
          })
          .catch((error) => {
            console.error("Keycloak initialization error:", error);
          });
        setKcInitialized(true);
      }
    };
    initKeycloak();
  }, [kcInitialized]);
  const handleLoginLogout = () => {
    if (isAuthenticated) {
      keycloak.logout();
      setIsAuthenticated(false);
    } else {
      keycloak.login();
      setIsAuthenticated(true);
    }
  };

  return (
    <div>
      {isAuthenticated && keycloak.tokenParsed && (
        <p>Logged in as: {keycloak.tokenParsed.preferred_username}</p>
      )}
      <Button isAuthenticated={isAuthenticated} onClick={handleLoginLogout}>
        {isAuthenticated ? "Logout" : "Login"}
      </Button>
    </div>
  );
};

export default Login;
