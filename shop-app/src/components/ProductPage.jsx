import React, { useState, useEffect } from "react";
import { Select } from "antd";
import Product from "./Product";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Tüm ürünleri getir
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) =>
        console.error("Ürünler yüklenirken hata oluştu:", error)
      );
  }, []);

  // Kategorileri getir
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) =>
        console.error("Kategoriler yüklenirken hata oluştu:", error)
      );
  }, []);

  // Filtrelenmiş ürünleri hesapla
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="container mx-auto px-4">
      <div className="sticky top-0 z-10 bg-white py-4 shadow-sm">
        <Select
          style={{ width: "100%", maxWidth: "300px" }}
          value={selectedCategory}
          onChange={setSelectedCategory}
          options={[
            { value: "all", label: "Tüm Ürünler" },
            ...categories.map((category) => ({
              value: category,
              label: category.charAt(0).toUpperCase() + category.slice(1),
            })),
          ]}
        />
      </div>
      <Product products={filteredProducts} />
    </div>
  );
};

export default ProductPage;
