import React from "react";
import CustomCard from "./CustomCard";

const Product = ({ products }) => {
  return (
    <div className="flex flex-wrap justify-center">
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
