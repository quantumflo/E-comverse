// src/Card.js
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../AuthContext";
import { ORDER_SERVICE_URL } from "../constants";
import { NotificationBanner } from "./Main";
// Styled card container
const CardContainer = styled.div`
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  width: 152px;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 14rem;
`;

// Card header
const CardHeader = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-align: center;
  color: darkslategrey;
  border-bottom: 2px solid #e0e0e0;
  overflow: ellipsis;
`;

// overflow: hidden;
// white-space: nowrap;
// text-overflow: ellipsis;
const CardText = styled.p`
  text-align: center;
  margin: 0.5rem 0 0;
`;

// Card description
const CardDescription = styled(CardText)`
  color: darkslategrey;
  font-size: 0.7rem;
`;

// Card price
const CardPrice = styled(CardText)`
  color: black;
  font-size: 1rem;
  font-weight: bold;
`;

// Quantity controls container
const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  margin-top: 3rem;
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
  color: black;
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

const Card = ({ name, description, price }) => {
  const [quantity, setQuantity] = useState(1);
  const { token, email, name: userName, lastName } = useContext(AuthContext);
  const [notification, setNotification] = useState(null);
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const handleOrder = async () => {
    const body = {
      skuCode: name,
      quantity,
      price,
      userDetails: {
        email: email,
        firstName: userName,
        lastName: lastName,
      },
    };
    // console.log("body: ", body);

    const response = await fetch(ORDER_SERVICE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      setNotification(`Unable to place the Order`);
    } else setNotification(`Successfully Ordered ${quantity} ${name}`);

    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return (
    <CardContainer>
      {notification && <NotificationBanner>{notification}</NotificationBanner>}
      <CardHeader>{name}</CardHeader>
      <CardDescription>{description}</CardDescription>
      <CardPrice>₹{price}</CardPrice>
      <QuantityControls>
        <QuantityButton onClick={decreaseQuantity}>-</QuantityButton>
        <QuantityDisplay>{quantity}</QuantityDisplay>
        <QuantityButton onClick={increaseQuantity}>+</QuantityButton>
      </QuantityControls>
      <OrderButton onClick={handleOrder}>Order</OrderButton>\
    </CardContainer>
  );
};

export default Card;
