import { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import CreateProductPanel from "./CreateProductPanel";
import ProductHeader from "./ProductHeader";

const CardsContainer = styled.div`
  display: flex;
  padding: 2rem;
  min-height: 100vh;
  color: whitesmoke;
`;

function Main() {
  const [products, setProducts] = useState([]);
  const [showCreatePanel, setShowCreatePanel] = useState(false);
  const [cards, setCards] = useState([{}, {}, {}]);

  const handleCreateProduct = () => {
    setShowCreatePanel(true);
  };

  const handleProductCreation = (newProduct) => {
    setProducts([...products, { id: products.length + 1, ...newProduct }]);
    setShowCreatePanel(false);
  };

  return (
    <div>
      <ProductHeader count={products.length} onCreate={handleCreateProduct} />
      {showCreatePanel && (
        <CreateProductPanel
          onCreate={handleProductCreation}
          onCancel={() => setShowCreatePanel(false)}
        />
      )}
      <CardsContainer>
        {cards.map((card, index) => (
          <Card key={index} />
        ))}
      </CardsContainer>
    </div>
  );
}

export default Main;
