import { useState } from "react";
import Cards from "./Cards";
import CreateProductPanel from "./CreateProductPanel";
import ProductHeader from "./ProductHeader";

function Main() {
  const [products, setProducts] = useState([]);
  const [showCreatePanel, setShowCreatePanel] = useState(false);

  const handleCreateProduct = () => {
    setShowCreatePanel(true);
  };

  const handleProductCreation = (newProduct) => {

    setProducts([...products, { id: products.length + 1, ...newProduct }]);
    setShowCreatePanel(false);
  }

  return (
    <div>
      <ProductHeader count={products.length} onCreate={handleCreateProduct} />
      {showCreatePanel && (
        <CreateProductPanel onCreate={handleProductCreation} onCancel={() => setShowCreatePanel(false)} />
      )}
      <Cards />
    </div>
  );
}

export default Main;
