import React, { useState } from "react";
import styled from "styled-components";

const Panel = styled.div`
  background-color: beige;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: -16px 16px 10px rgba(0, 0, 0, 0.1);
  margin: 0 2rem;
  width: 100%;
  max-width: 300px;
  position: relative;
  float: right;
`;

const Arrow = styled.div`
  position: absolute;
  top: -10px;
  right: 20px;
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-bottom: 20px solid beige;
`;

const FormField = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-align: left;
`;

const Input = styled.input`
  width: 90%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  width: 90%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 10rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

const CancelButton = styled(Button)`
  background-color: #6c757d;
  margin-left: 1rem;

  &:hover {
    background-color: #5a6268;
  }
`;

const Header = styled.h2`
  font-size: 1.75rem;
  color: #333;
  margin-bottom: 1.5rem;
  font-weight: 600;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 0.5rem;
  margin: 0 0 1rem 0;
`;

const CreateProductPanel = ({ onCreate, onCancel }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { name, description, quantity: parseInt(quantity) };
    onCreate(newProduct);
  };

  return (
    <Panel>
      <Arrow />
      <Header>Create Product</Header>

      <form onSubmit={handleSubmit}>
        <FormField>
          <Label>Product Name</Label>
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </FormField>

        <FormField>
          <Label>Description</Label>
          <Textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </FormField>

        <FormField>
          <Label>Quantity</Label>
          <Input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
            required
          />
        </FormField>
        <ButtonContainer>
          <Button type="submit">Create</Button>
          <CancelButton type="button" onClick={onCancel}>
            Cancel
          </CancelButton>
        </ButtonContainer>
      </form>
    </Panel>
  );
};

export default CreateProductPanel;
