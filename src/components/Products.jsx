import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Product from "./Product";

const Products = () => {
  const { products } = useContext(AppContext);
  return (
    <div className="products">
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
