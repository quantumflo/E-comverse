// src/ProductHeader.js
import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f8f9fa;
  border-bottom: 2px solid #e0e0e0;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin: 0;
`;

const Button = styled.button`
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ProductHeader = ({ count, onCreate }) => {
  return (
    <HeaderContainer>
      <Title>Products ({count})</Title>

      <Button onClick={onCreate}>Create Product</Button>
    </HeaderContainer>
  );
};

export default ProductHeader;
