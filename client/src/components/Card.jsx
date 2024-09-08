// src/Card.js
import React, { useState } from "react";
import styled from "styled-components";

// Styled card container
const CardContainer = styled.div`
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  margin: 1rem;
  flex: 1; /* Allows the card to grow and shrink within a flex container */
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

// Card header
const CardHeader = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-align: center; /* Center text */
`;

// Card price
const CardPrice = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0 0 1rem;
  text-align: center; /* Center text */
`;

// Quantity controls container
const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

// Quantity button
const QuantityButton = styled.button`
  background-color: #e0e0e0;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d5d5d5;
  }
`;

// Quantity display
const QuantityDisplay = styled.span`
  font-size: 1.25rem;
  margin: 0 1rem;
`;

// Order button
const OrderButton = styled.button`
  padding: 0.5rem 1rem;
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

const Card = ({ name, price }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const handleOrder = () => {
    // Handle order logic here
    alert(`Ordered ${quantity} ${name}(s)`);
  };

  return (
    <CardContainer>
      <CardHeader>{name}</CardHeader>
      <CardPrice>{price}</CardPrice>
      <QuantityControls>
        <QuantityButton onClick={decreaseQuantity}>-</QuantityButton>
        <QuantityDisplay>{quantity}</QuantityDisplay>
        <QuantityButton onClick={increaseQuantity}>+</QuantityButton>
      </QuantityControls>
      <OrderButton onClick={handleOrder}>Order</OrderButton>
    </CardContainer>
  );
};

export default Card;
