import React, { useState } from "react";
import styled from "styled-components";

// Container for the entire header
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem 1rem 1rem;
  background-color: #282c34;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

// Left section for the logo
const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

// Logo image styling
const Logo = styled.img`
  width: 5rem;
  height: 4rem;
  margin-right: 1rem;
`;

// Title section is centered
const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  flex: 1;
  text-align: center;
`;

// Button for login/logout
const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: white;
  background-color: ${(props) => (props.loggedIn ? "#f44336" : "#4caf50")};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.loggedIn ? "#d32f2f" : "#388e3c")};
  }
`;

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleAuthClick = () => {
    setLoggedIn(!loggedIn);
  };

  return (
    <HeaderContainer>
      {/* Left section for logo */}
      <LeftSection>
        <Logo src={`${process.env.PUBLIC_URL}/E.jpg`} alt="Logo" />
        <Title>E-comverse</Title>
      </LeftSection>

      <Button loggedIn={loggedIn} onClick={handleAuthClick}>
        {loggedIn ? "Logout" : "Login"}
      </Button>
    </HeaderContainer>
  );
};

export default Header;
