import React from "react";
import CustomCard from "./CustomCard";

const Product = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <CustomCard
          key={product.id}
          title={product.title}
          description={product.description}
          image={product.image}
          price={product.price}
          rating={product.rating}
        />
      ))}
    </div>
  );
};

export default Product;
