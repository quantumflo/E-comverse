function ProductHeader() {
  const title = "Products";

  const handleCreateProduct = () => {
    console.log("Create Product");
  };

  return (
    <div>
      {title}
      <button onClick={handleCreateProduct}>Create Product + </button>
    </div>
  );
}

export default ProductHeader;
