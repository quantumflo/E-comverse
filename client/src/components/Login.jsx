import styled from "styled-components";
import keycloak from "../config/KeyCloak";

// Button for login/logout
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

const Login = ({ isAuthenticated, setIsAuthenticated }) => {
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
        <p>User : {keycloak.tokenParsed.preferred_username}</p>
      )}
      <Button isAuthenticated={isAuthenticated} onClick={handleLoginLogout}>
        {isAuthenticated ? "Logout" : "Login"}
      </Button>
    </div>
  );
};

export default Login;
