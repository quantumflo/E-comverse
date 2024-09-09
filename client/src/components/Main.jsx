import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../AuthContext";
import { PRODUCT_SERVICE_URL } from "../constants";
import Card from "./Card";
import CreateProductPanel from "./CreateProductPanel";
import ProductHeader from "./ProductHeader";

const CardsContainer = styled.div`
  display: flex;
  padding: 2rem;
  color: whitesmoke;
  flex-wrap: wrap;
  row-gap: 1rem;
`;

export const NotificationBanner = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #4caf50; /* Green background */
  color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

function Main() {
  const [products, setProducts] = useState([]);
  const [showCreatePanel, setShowCreatePanel] = useState(false);
  const { token } = useContext(AuthContext);
  const [notification, setNotification] = useState(null); // State for notification

  const handleCreateProduct = () => {
    setShowCreatePanel(true);
  };

  const handleProductCreation = async (newProduct) => {
    try {
      const response = await fetch(PRODUCT_SERVICE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) {
        setNotification("Product creation failed!");
      } else {
        const createdProduct = await response.json();
        setProducts([...products, createdProduct]);
        setShowCreatePanel(false);

        setNotification("Product created successfully!");
      }

      setTimeout(() => {
        setNotification(null);
      }, 3000);
    } catch (error) {
      console.error("Failed to create product:", error);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(PRODUCT_SERVICE_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <ProductHeader count={products.length} onCreate={handleCreateProduct} />
      {notification && <NotificationBanner>{notification}</NotificationBanner>}

      {showCreatePanel && (
        <CreateProductPanel
          onCreate={handleProductCreation}
          onCancel={() => setShowCreatePanel(false)}
        />
      )}
      <CardsContainer>
        {products?.map((product) => product.name && <Card key={product.id} {...product} />)}
      </CardsContainer>
    </div>
  );
}

export default Main;
