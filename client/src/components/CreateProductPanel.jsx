import React, { useState } from "react";
import styled from "styled-components";

// Styles for the panel
const Panel = styled.div`
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin: 1rem 0;
`;

const FormField = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
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
  margin-top: 1rem;

  &:hover {
    background-color: #0056b3;
  }
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

        <Button type="submit">Create Product</Button>
        <Button
          type="button"
          onClick={onCancel}
          style={{ marginLeft: "1rem", backgroundColor: "#6c757d" }}
        >
          Cancel
        </Button>
      </form>
    </Panel>
  );
};

export default CreateProductPanel;
