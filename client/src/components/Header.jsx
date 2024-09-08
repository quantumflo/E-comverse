// src/Header.js
import React, { useState } from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #282c34;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

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

  const EcomLogo = styled.img

  return (
    <HeaderContainer>
        <EcomLogo />
      <Title>E-comverse</Title>
      <Button loggedIn={loggedIn} onClick={handleAuthClick}>
        {loggedIn ? "Logout" : "Login"}
      </Button>
    </HeaderContainer>
  );
};

export default Header;
