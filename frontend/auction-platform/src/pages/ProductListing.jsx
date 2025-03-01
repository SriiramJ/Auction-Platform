import useProducts from "/src/hooks/useProducts.js";

import Card from "../components/Card";

const ProductListing = () => {
  const { products } = useProducts();

  return (
    <div>
      <h1>Product Listing</h1>
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductListing;
